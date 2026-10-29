import crypto from 'crypto'

// Sesión del /dashboard: la contraseña está en DASHBOARD_PASSWORD y la cookie va firmada
// con HMAC. Cambiar la contraseña cierra todas las sesiones abiertas.

const COOKIE = 'mf_dashboard'
const DURACION_S = 30 * 24 * 60 * 60

const secreto = () => {
  const clave = process.env.DASHBOARD_PASSWORD
  if (!clave) throw new Error('DASHBOARD_PASSWORD no configurado')
  return `${process.env.DASHBOARD_SECRET || ''}:${clave}`
}

const firmar = (valor) => crypto.createHmac('sha256', secreto()).update(valor).digest('base64url')

function iguales(a, b) {
  const x = Buffer.from(String(a))
  const y = Buffer.from(String(b))
  return x.length === y.length && crypto.timingSafeEqual(x, y)
}

export const passwordCorrecta = (password) => !!process.env.DASHBOARD_PASSWORD && iguales(password, process.env.DASHBOARD_PASSWORD)

// Lax y no Strict: al volver de Google (OAuth) la cookie tiene que viajar en la redirección.
// Las rutas que cambian datos solo aceptan POST/PATCH/DELETE, que Lax no envía desde otros sitios.
function cookie(valor, maxAge) {
  const segura = process.env.NODE_ENV === 'production' ? '; Secure' : ''
  return `${COOKIE}=${valor}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAge}${segura}`
}

export function abrirSesion(res) {
  const caduca = String(Math.floor(Date.now() / 1000) + DURACION_S)
  res.setHeader('Set-Cookie', cookie(`${caduca}.${firmar(caduca)}`, DURACION_S))
}

export function cerrarSesion(res) {
  res.setHeader('Set-Cookie', cookie('', 0))
}

export function haySesion(req) {
  const [caduca, firma] = String(req.cookies?.[COOKIE] || '').split('.')
  if (!caduca || !firma || +caduca < Date.now() / 1000) return false
  try {
    return iguales(firma, firmar(caduca))
  } catch (e) {
    return false
  }
}

// "state" de OAuth: caduca en 10 minutos y va firmado, así Google solo puede volver
// a una conexión que se empezó desde el dashboard
export function crearEstado() {
  const valor = `${Math.floor(Date.now() / 1000) + 600}-${crypto.randomBytes(8).toString('hex')}`
  return `${valor}.${firmar(`oauth:${valor}`)}`
}

export function estadoValido(estado) {
  const [valor, firma] = String(estado || '').split('.')
  if (!valor || !firma || +valor.split('-')[0] < Date.now() / 1000) return false
  return iguales(firma, firmar(`oauth:${valor}`))
}

// Envuelve un handler de API para que solo responda con sesión iniciada
export const conSesion = (handler) => (req, res) => {
  if (!haySesion(req)) return res.status(401).json({ error: 'Inicia sesión en el dashboard.' })
  res.setHeader('Cache-Control', 'no-store')
  return handler(req, res)
}
