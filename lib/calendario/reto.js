import crypto from 'crypto'

// Captcha local para reservar: una suma de dos números. El servidor firma el resultado y la
// caducidad; el navegador solo recibe los números y la firma. Cada reto vale una sola vez.

const DURACION_S = 10 * 60
const usados = new Map()

const secreto = () => process.env.CAPTCHA_SECRET || process.env.FALCONDB_SERVICE_KEY || process.env.DASHBOARD_PASSWORD || 'marlonfalcon.com'
const firmar = (valor) => crypto.createHmac('sha256', secreto()).update(valor).digest('base64url')
const azar = () => crypto.randomInt(1, 10)

export function crearReto() {
  const a = azar()
  const b = azar()
  const base = `${Math.floor(Date.now() / 1000) + DURACION_S}.${crypto.randomBytes(6).toString('hex')}`
  return { a, b, reto: `${base}.${firmar(`${base}.${a + b}`)}` }
}

export function retoValido(reto, respuesta) {
  const [caduca, nonce, firma] = String(reto || '').split('.')
  if (!caduca || !nonce || !firma || +caduca < Date.now() / 1000 || usados.has(nonce)) return false

  const esperada = Buffer.from(firmar(`${caduca}.${nonce}.${parseInt(respuesta, 10)}`))
  const recibida = Buffer.from(firma)
  if (esperada.length !== recibida.length || !crypto.timingSafeEqual(esperada, recibida)) return false

  usados.set(nonce, +caduca)
  for (const [n, c] of usados) if (c < Date.now() / 1000) usados.delete(n)
  return true
}
