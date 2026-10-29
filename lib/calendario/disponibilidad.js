import { listar, buscar } from '../falcondb'
import { leerCalendario, ocupadosEntre } from './ics'
import { googleConfigurado, ocupadosGoogle } from './google'
import { aUtc, partes, ZONA_MADRID } from './zona'

const DIA_MS = 24 * 60 * 60 * 1000
export const MAX_RANGO_MS = 45 * DIA_MS

export const AJUSTES_POR_DEFECTO = {
  timezone: ZONA_MADRID,
  weekly_hours: {},
  min_notice_hours: 12,
  max_days_ahead: 60,
  buffer_minutes: 0,
  slot_step_minutes: 30
}

export async function leerAjustes() {
  const fila = await buscar('booking_settings', { order: 'id' })
  return { ...AJUSTES_POR_DEFECTO, ...(fila || {}) }
}

const aMs = (fecha) => new Date(fecha).getTime()
const cruza = (a, b) => a.inicio < b.fin && a.fin > b.inicio

// Horas ocupadas de [desde, hasta) separadas por origen. Si un calendario externo falla,
// se anota el error y se sigue con los demás.
export async function leerOcupados(ajustes, desde, hasta, { forzar = false } = {}) {
  const desdeIso = new Date(desde).toISOString()
  const [reservas, bloqueos, calendarios, cuentasGoogle] = await Promise.all([
    listar('bookings', { status: 'confirmed', ends_at: `gt.${desdeIso}`, order: 'starts_at' }),
    listar('booking_blocks', { ends_at: `gt.${desdeIso}`, order: 'starts_at' }),
    listar('booking_calendars', { active: 'true', order: 'id' }),
    googleConfigurado() ? listar('booking_google_accounts', { active: 'true', order: 'id' }) : []
  ])

  const enRango = (filas) =>
    filas
      .map((f) => ({ ...f, inicio: aMs(f.starts_at), fin: aMs(f.ends_at) }))
      .filter((f) => f.inicio < hasta && f.fin > desde)

  const ics = Promise.all(
    calendarios.map(async (c) => {
      try {
        const eventos = await leerCalendario(c.ics_url, { forzar })
        return { calendario: c, ocupados: ocupadosEntre(eventos, desde, hasta, ajustes.timezone) }
      } catch (e) {
        console.error('[calendario] no se pudo leer', c.name, e.message)
        return { calendario: c, ocupados: [], error: e.message }
      }
    })
  )
  const google = Promise.all(
    cuentasGoogle.map(async (cuenta) => {
      try {
        return await ocupadosGoogle(cuenta, desde, hasta, { forzar })
      } catch (e) {
        console.error('[calendario] no se pudo leer Google', cuenta.email, e.message)
        return [{ calendario: { name: `Google (${cuenta.email})` }, ocupados: [], error: e.message }]
      }
    })
  )

  const externos = [...(await ics), ...(await google).flat()]
  return { reservas: enRango(reservas), bloqueos: enRango(bloqueos), externos }
}

// Huecos de un tipo de reunión entre desde y hasta (milisegundos UTC).
// - Fuera del horario semanal o dentro de un bloqueo: el hueco no existe.
// - Si choca con una reserva o un evento de un calendario conectado: existe pero está ocupado.
export function calcularHuecos({ ajustes, duracion, ocupados, desde, hasta, ahora = Date.now() }) {
  const tz = ajustes.timezone
  const duracionMs = duracion * 60000
  const pasoMs = Math.max(5, ajustes.slot_step_minutes || duracion) * 60000
  const margenMs = (ajustes.buffer_minutes || 0) * 60000
  const primero = Math.max(desde, ahora + ajustes.min_notice_hours * 3600000)
  const ultimo = Math.min(hasta, ahora + ajustes.max_days_ahead * DIA_MS)
  const horario = ajustes.weekly_hours || {}

  const bloqueos = ocupados.bloqueos
  const ocupado = [...ocupados.reservas, ...ocupados.externos.flatMap((e) => e.ocupados)]

  const huecos = []
  if (primero >= ultimo) return huecos

  // Se recorren los días del calendario en la zona del propietario, uno antes y uno después del rango
  const inicioLocal = partes(desde - DIA_MS, tz)
  const dias = Math.ceil((hasta - desde) / DIA_MS) + 2
  for (let i = 0; i <= dias; i++) {
    const dia = new Date(Date.UTC(inicioLocal.y, inicioLocal.m - 1, inicioLocal.d + i))
    const [y, m, d] = [dia.getUTCFullYear(), dia.getUTCMonth() + 1, dia.getUTCDate()]

    for (const [abre, cierra] of horario[dia.getUTCDay()] || []) {
      const [ha, ma] = abre.split(':').map(Number)
      const [hc, mc] = cierra.split(':').map(Number)
      const fin = aUtc(y, m, d, hc, mc, tz).getTime()

      for (let t = aUtc(y, m, d, ha, ma, tz).getTime(); t + duracionMs <= fin; t += pasoMs) {
        if (t < primero || t >= ultimo) continue
        const hueco = { inicio: t, fin: t + duracionMs }
        if (bloqueos.some((b) => cruza(hueco, b))) continue
        const conMargen = { inicio: t - margenMs, fin: t + duracionMs + margenMs }
        huecos.push({ inicio: new Date(t).toISOString(), ocupado: ocupado.some((o) => cruza(conMargen, o)) })
      }
    }
  }
  return huecos.sort((a, b) => (a.inicio < b.inicio ? -1 : 1))
}

// forzar: vuelve a leer los calendarios conectados en vez de usar la caché
export async function huecosDeEvento(evento, desde, hasta, { forzar = false } = {}) {
  const ajustes = await leerAjustes()
  const ocupados = await leerOcupados(ajustes, desde, hasta, { forzar })
  return { ajustes, huecos: calcularHuecos({ ajustes, duracion: evento.duration_minutes, ocupados, desde, hasta }) }
}
