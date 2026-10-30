import ICAL from 'ical.js'
import { aUtc, zonaValida } from './zona'

// Lee calendarios externos en formato iCal (la "dirección secreta" de Google Calendar,
// un calendario publicado de Outlook o iCloud…) y devuelve sus horas ocupadas.
// Solo se usan inicio y fin: nunca se muestran los títulos en la web pública.

const CACHE_MS = 5 * 60 * 1000
// Aunque se pida releer (al abrir /calendario), no se descarga más de una vez cada 20 s
export const MIN_RELEER_MS = 20 * 1000
const MAX_REPETICIONES = 5000
const cache = new Map()

export const normalizarUrl = (url) => String(url || '').trim().replace(/^webcal:\/\//i, 'https://')

// La "dirección pública" de Google solo funciona si el calendario es público (basta con "solo libre/ocupado");
// si no lo es, Google responde 404
const esPublicaDeGoogle = (url) => /calendar\.google\.com\/calendar\/ical\/[^/]+\/public\//i.test(url)
const AVISO_PUBLICA =
  'Es la dirección pública de Google y el calendario no es público. Copia la «Dirección secreta en formato iCal» o, en Permisos de acceso, hazlo público con «Ver solo libre/ocupado».'

async function descargar(url) {
  const res = await fetch(url, { headers: { Accept: 'text/calendar' }, redirect: 'follow' })
  if (res.status === 404 && esPublicaDeGoogle(url)) throw new Error(AVISO_PUBLICA)
  if (!res.ok) throw new Error(`El calendario respondió ${res.status}`)
  const texto = await res.text()
  if (!texto.includes('BEGIN:VCALENDAR')) throw new Error('La dirección no devuelve un calendario iCal (.ics)')
  return texto
}

function analizar(texto) {
  const calendario = new ICAL.Component(ICAL.parse(texto))
  // Las zonas definidas en el fichero (Outlook usa nombres de Windows) se registran antes de leer fechas
  for (const vtimezone of calendario.getAllSubcomponents('vtimezone')) {
    const tzid = vtimezone.getFirstPropertyValue('tzid')
    if (tzid && !ICAL.TimezoneService.has(tzid)) ICAL.TimezoneService.register(tzid, new ICAL.Timezone(vtimezone))
  }

  const eventos = calendario.getAllSubcomponents('vevent').map((v) => new ICAL.Event(v))
  const principales = eventos.filter((e) => !e.isRecurrenceException())
  for (const excepcion of eventos.filter((e) => e.isRecurrenceException())) {
    const principal = principales.find((e) => e.uid === excepcion.uid)
    if (principal) principal.relateException(excepcion)
  }
  return principales
}

export async function leerCalendario(url, { forzar = false } = {}) {
  url = normalizarUrl(url)
  const guardado = cache.get(url)
  if (guardado && Date.now() - guardado.t < (forzar ? MIN_RELEER_MS : CACHE_MS)) return guardado.eventos
  const eventos = analizar(await descargar(url))
  cache.set(url, { t: Date.now(), eventos })
  return eventos
}

// Hora UTC de una fecha iCal. Las fechas sin hora (todo el día) y las zonas desconocidas
// se interpretan en la zona del calendario de reservas.
function aFecha(tiempo, tzid, zonaPorDefecto) {
  if (tiempo.isDate) return aUtc(tiempo.year, tiempo.month, tiempo.day, 0, 0, zonaPorDefecto)
  if (tiempo.zone && tiempo.zone !== ICAL.Timezone.localTimezone) return tiempo.toJSDate()
  const zona = zonaValida(tzid) ? tzid : zonaPorDefecto
  return aUtc(tiempo.year, tiempo.month, tiempo.day, tiempo.hour, tiempo.minute, zona)
}

// Un evento cuenta como ocupado salvo que esté cancelado o marcado como "disponible"
function ocupa(componente) {
  const estado = String(componente.getFirstPropertyValue('status') || '').toUpperCase()
  const transparencia = String(componente.getFirstPropertyValue('transp') || '').toUpperCase()
  return estado !== 'CANCELLED' && transparencia !== 'TRANSPARENT'
}

// Intervalos ocupados [{ inicio, fin }] (milisegundos) que se cruzan con [desde, hasta)
export function ocupadosEntre(eventos, desde, hasta, zonaPorDefecto) {
  const resultado = []
  const anadir = (componente, inicio, fin, tzid) => {
    if (!ocupa(componente)) return
    const a = aFecha(inicio, tzid, zonaPorDefecto).getTime()
    const b = fin ? aFecha(fin, tzid, zonaPorDefecto).getTime() : a
    if (a < hasta && b > desde && b > a) resultado.push({ inicio: a, fin: b })
  }

  for (const evento of eventos) {
    const tzid = evento.component.getFirstProperty('dtstart')?.getParameter('tzid')
    if (!evento.startDate) continue

    if (!evento.isRecurring()) {
      anadir(evento.component, evento.startDate, evento.endDate, tzid)
      continue
    }

    const iterador = evento.iterator()
    let siguiente
    for (let i = 0; i < MAX_REPETICIONES && (siguiente = iterador.next()); i++) {
      const detalle = evento.getOccurrenceDetails(siguiente)
      if (aFecha(detalle.startDate, tzid, zonaPorDefecto).getTime() >= hasta) break
      anadir(detalle.item.component, detalle.startDate, detalle.endDate, tzid)
    }
  }
  return resultado
}
