// Zonas horarias sin dependencias, con Intl. Se usa en el servidor y en el navegador.

export const ZONA_MADRID = 'Europe/Madrid'

const formateadores = {}
function formateador(tz) {
  if (!formateadores[tz]) {
    formateadores[tz] = new Intl.DateTimeFormat('en-US', {
      timeZone: tz,
      hourCycle: 'h23',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      weekday: 'short'
    })
  }
  return formateadores[tz]
}

const DIAS = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }

// Fecha y hora de un instante en una zona: { y, m, d, h, min, dia (0 = domingo) }
export function partes(fecha, tz) {
  const p = {}
  for (const { type, value } of formateador(tz).formatToParts(new Date(fecha))) p[type] = value
  return { y: +p.year, m: +p.month, d: +p.day, h: +p.hour % 24, min: +p.minute, s: +p.second, dia: DIAS[p.weekday] }
}

// Minutos que la zona va por delante de UTC en ese instante
export function desfase(fecha, tz) {
  const p = partes(fecha, tz)
  const comoUtc = Date.UTC(p.y, p.m - 1, p.d, p.h, p.min, p.s)
  return Math.round((comoUtc - Math.floor(new Date(fecha).getTime() / 1000) * 1000) / 60000)
}

// Instante UTC de una hora local de una zona (corrige el cambio de hora)
export function aUtc(y, m, d, h, min, tz) {
  const local = Date.UTC(y, m - 1, d, h, min)
  let t = local - desfase(local, tz) * 60000
  const segundo = desfase(t, tz)
  if (local - segundo * 60000 !== t) t = local - segundo * 60000
  return new Date(t)
}

// Clave del día de un instante en una zona: "2026-11-03"
export function claveDia(fecha, tz) {
  const { y, m, d } = partes(fecha, tz)
  return `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`
}

export function zonaValida(tz) {
  if (!tz || typeof tz !== 'string') return false
  try {
    new Intl.DateTimeFormat('en-US', { timeZone: tz })
    return true
  } catch (e) {
    return false
  }
}

export function zonaDelNavegador() {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
    return zonaValida(tz) ? tz : ZONA_MADRID
  } catch (e) {
    return ZONA_MADRID
  }
}

// Todas las zonas IANA que conoce el navegador (con respaldo para navegadores antiguos)
export function listaZonas() {
  try {
    if (Intl.supportedValuesOf) return Intl.supportedValuesOf('timeZone')
  } catch (e) {}
  return [
    'Europe/Madrid', 'Atlantic/Canary', 'Europe/London', 'Europe/Lisbon', 'Europe/Paris', 'Europe/Berlin',
    'Europe/Rome', 'America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles',
    'America/Mexico_City', 'America/Bogota', 'America/Lima', 'America/Caracas', 'America/Havana',
    'America/Santiago', 'America/Argentina/Buenos_Aires', 'America/Sao_Paulo', 'America/Montevideo',
    'America/Guayaquil', 'America/Panama', 'America/Santo_Domingo', 'Asia/Dubai', 'Asia/Tokyo', 'UTC'
  ]
}

export function formatoHora(fecha, tz, locale) {
  return new Intl.DateTimeFormat(locale, { timeZone: tz, hour: '2-digit', minute: '2-digit' }).format(new Date(fecha))
}

export function formatoFecha(fecha, tz, locale, opciones = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) {
  return new Intl.DateTimeFormat(locale, { timeZone: tz, ...opciones }).format(new Date(fecha))
}

// "GMT+1", "GMT-5"… para mostrar junto al nombre de la zona
export function etiquetaDesfase(tz, fecha = Date.now()) {
  const min = desfase(fecha, tz)
  const signo = min >= 0 ? '+' : '-'
  const h = Math.floor(Math.abs(min) / 60)
  const resto = Math.abs(min) % 60
  return `GMT${signo}${h}${resto ? ':' + String(resto).padStart(2, '0') : ''}`
}

export const nombreZona = (tz) => tz.split('/').pop().replace(/_/g, ' ')
