// Conexión con Google Calendar por OAuth (solo lectura). Por cada cuenta conectada se guarda
// el refresh token en booking_google_accounts y se consultan sus horas ocupadas con FreeBusy,
// que no devuelve títulos ni detalles de los eventos.

const AUTH_URL = 'https://accounts.google.com/o/oauth2/v2/auth'
const TOKEN_URL = 'https://oauth2.googleapis.com/token'
const API = 'https://www.googleapis.com/calendar/v3'
const SCOPES = ['openid', 'email', 'https://www.googleapis.com/auth/calendar.readonly']
const CACHE_MS = 60 * 1000
const MIN_RELEER_MS = 20 * 1000

export const googleConfigurado = () => !!(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET)

// La URL de vuelta tiene que estar dada de alta en Google Cloud Console tal cual
export function urlVuelta(req) {
  if (process.env.GOOGLE_REDIRECT_URI) return process.env.GOOGLE_REDIRECT_URI
  const host = req.headers['x-forwarded-host'] || req.headers.host
  const protocolo = req.headers['x-forwarded-proto'] || (host.startsWith('localhost') ? 'http' : 'https')
  return `${protocolo}://${host}/api/dashboard/google/callback`
}

export function urlAutorizacion(state, redirectUri) {
  const query = new URLSearchParams({
    client_id: process.env.GOOGLE_CLIENT_ID,
    redirect_uri: redirectUri,
    response_type: 'code',
    scope: SCOPES.join(' '),
    access_type: 'offline',
    // Sin "consent" Google no vuelve a dar refresh token a una cuenta que ya autorizó
    prompt: 'consent select_account',
    include_granted_scopes: 'true',
    state
  })
  return `${AUTH_URL}?${query}`
}

async function pedirToken(parametros) {
  const res = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ client_id: process.env.GOOGLE_CLIENT_ID, client_secret: process.env.GOOGLE_CLIENT_SECRET, ...parametros })
  })
  const json = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(json.error_description || json.error || `Google respondió ${res.status}`)
  return json
}

// El email sale del id_token, que llega directamente de Google por HTTPS
const emailDelToken = (idToken) => JSON.parse(Buffer.from(idToken.split('.')[1], 'base64url').toString()).email

export async function intercambiarCodigo(code, redirectUri) {
  const tokens = await pedirToken({ code, redirect_uri: redirectUri, grant_type: 'authorization_code' })
  return { ...tokens, email: emailDelToken(tokens.id_token) }
}

const accesos = new Map()
async function tokenDeAcceso(cuenta) {
  const guardado = accesos.get(cuenta.refresh_token)
  if (guardado && guardado.caduca > Date.now()) return guardado.token
  const { access_token, expires_in } = await pedirToken({ refresh_token: cuenta.refresh_token, grant_type: 'refresh_token' })
  accesos.set(cuenta.refresh_token, { token: access_token, caduca: Date.now() + (expires_in - 60) * 1000 })
  return access_token
}

async function llamar(cuenta, ruta, opciones = {}) {
  const token = await tokenDeAcceso(cuenta)
  const res = await fetch(`${API}${ruta}`, {
    ...opciones,
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json', ...opciones.headers }
  })
  const json = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(json.error?.message || `Google Calendar respondió ${res.status}`)
  return json
}

// Calendarios de la cuenta. Los que ya estaban elegidos se conservan; los nuevos se marcan
// si son el principal o calendarios propios.
export async function listarCalendarios(cuenta, anteriores = []) {
  const { items = [] } = await llamar(cuenta, '/users/me/calendarList?minAccessRole=freeBusyReader')
  return items.map((c) => {
    const previo = anteriores.find((a) => a.id === c.id)
    return {
      id: c.id,
      summary: c.summaryOverride || c.summary,
      color: c.backgroundColor || null,
      primary: !!c.primary,
      selected: previo ? previo.selected : !!c.primary || c.accessRole === 'owner'
    }
  })
}

const cache = new Map()

// Horas ocupadas de los calendarios elegidos de una cuenta: [{ calendario, ocupados: [{ inicio, fin }] }]
export async function ocupadosGoogle(cuenta, desde, hasta, { forzar = false } = {}) {
  const elegidos = (cuenta.calendars || []).filter((c) => c.selected)
  if (!elegidos.length) return []

  const clave = `${cuenta.id}:${desde}:${hasta}:${elegidos.map((c) => c.id).join(',')}`
  const guardado = cache.get(clave)
  if (guardado && Date.now() - guardado.t < (forzar ? MIN_RELEER_MS : CACHE_MS)) return guardado.datos

  const { calendars = {} } = await llamar(cuenta, '/freeBusy', {
    method: 'POST',
    body: JSON.stringify({
      timeMin: new Date(desde).toISOString(),
      timeMax: new Date(hasta).toISOString(),
      items: elegidos.slice(0, 50).map((c) => ({ id: c.id }))
    })
  })

  const datos = elegidos.map((c) => {
    const resultado = calendars[c.id] || {}
    if (resultado.errors?.length) throw new Error(`${c.summary}: ${resultado.errors[0].reason}`)
    return {
      calendario: { name: `${c.summary} (${cuenta.email})`, color: c.color },
      ocupados: (resultado.busy || []).map((b) => ({ inicio: Date.parse(b.start), fin: Date.parse(b.end) }))
    }
  })
  cache.set(clave, { t: Date.now(), datos })
  if (cache.size > 200) cache.delete(cache.keys().next().value)
  return datos
}
