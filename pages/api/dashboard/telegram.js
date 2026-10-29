import { conSesion } from '../../../lib/calendario/sesion'
import { enviarTelegram, gruposDelBot, telegramConfigurado } from '../../../lib/calendario/telegram'

// GET: estado de los avisos (y, con ?grupos=1, los grupos donde está el bot)
// POST { chatId? }: envía un mensaje de prueba al grupo configurado o al indicado
export default conSesion(async function handler(req, res) {
  const hayBot = !!process.env.TELEGRAM_BOT_TOKEN

  try {
    if (req.method === 'GET') {
      const estado = { bot: hayBot, grupo: process.env.TELEGRAM_CHAT_ID || null, configurado: telegramConfigurado() }
      if (req.query.grupos && hayBot) Object.assign(estado, await gruposDelBot())
      return res.status(200).json(estado)
    }
    if (req.method !== 'POST') return res.status(405).json({ error: 'Método no permitido' })
    if (!hayBot) return res.status(400).json({ error: 'Falta TELEGRAM_BOT_TOKEN en Vercel.' })

    const chatId = String(req.body?.chatId || process.env.TELEGRAM_CHAT_ID || '')
    if (!/^-?\d+$/.test(chatId)) return res.status(400).json({ error: 'Falta el id del grupo (TELEGRAM_CHAT_ID).' })
    await enviarTelegram('✅ <b>Prueba</b> de avisos de marlonfalcon.com: aquí llegarán las reservas y los mensajes de contacto.', { chatId })
    res.status(200).json({ enviado: true })
  } catch (e) {
    res.status(502).json({ error: e.message })
  }
})
