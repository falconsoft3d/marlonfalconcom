import { crear } from '../../lib/falcondb'
import { retoValido } from '../../lib/calendario/reto'
import { avisarContacto } from '../../lib/calendario/telegram'

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const limpiar = (valor, max = 200) => (typeof valor === 'string' ? valor.trim().slice(0, max) : '')

// Formulario de /contacto: comprueba la suma de los ninjas, guarda el mensaje en contact_messages
// y avisa por Telegram. El navegador abre después WhatsApp con el mismo mensaje.
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método no permitido' })

  const { reto, respuesta, ...datos } = req.body || {}
  if (!retoValido(reto, respuesta)) return res.status(400).json({ error: 'reto', reto: true })

  const fila = {
    name: limpiar(datos.nombre),
    email: limpiar(datos.email).toLowerCase(),
    phone: limpiar(datos.telefono, 40) || null,
    company: limpiar(datos.empresa) || null,
    topic: limpiar(datos.tema, 80) || null,
    message: limpiar(datos.mensaje, 3000),
    lang: limpiar(datos.lang, 5) || null
  }
  if (!fila.name || !EMAIL.test(fila.email) || fila.message.length < 5) return res.status(400).json({ error: 'datos' })

  // Si falla la base de datos el mensaje no se pierde: llega por Telegram y por WhatsApp
  let guardado = true
  try {
    await crear('contact_messages', fila)
  } catch (e) {
    guardado = false
    console.error('[contacto]', e)
  }
  const aviso = await avisarContacto(fila)

  if (!guardado && !aviso.enviado) return res.status(200).json({ ok: true, soloWhatsapp: true })
  res.status(200).json({ ok: true })
}
