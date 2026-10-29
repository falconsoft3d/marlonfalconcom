import { formatoFecha, formatoHora, ZONA_MADRID } from './zona'

// Avisos por Telegram cuando alguien reserva, cancela o escribe desde /contacto: un bot
// (TELEGRAM_BOT_TOKEN, creado con @BotFather) escribe en un grupo (TELEGRAM_CHAT_ID).
// Un fallo del aviso nunca impide guardar la reserva o el mensaje.

const ESPERA_MS = 6000
const LOCALE = 'es-ES'

export const telegramConfigurado = () => !!(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID)

async function llamar(metodo, cuerpo) {
  const control = new AbortController()
  const reloj = setTimeout(() => control.abort(), ESPERA_MS)
  try {
    const res = await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/${metodo}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cuerpo || {}),
      signal: control.signal
    })
    const json = await res.json().catch(() => ({}))
    if (!json.ok) throw new Error(`Telegram: ${json.description || res.status}`)
    return json.result
  } finally {
    clearTimeout(reloj)
  }
}

const html = (texto) => String(texto).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const web = () => process.env.SITE_URL || 'https://marlonfalcon.com'

export async function enviarTelegram(texto, { chatId = process.env.TELEGRAM_CHAT_ID, boton = true } = {}) {
  return llamar('sendMessage', {
    chat_id: chatId,
    text: texto,
    parse_mode: 'HTML',
    disable_web_page_preview: true,
    ...(boton ? { reply_markup: { inline_keyboard: [[{ text: 'Abrir dashboard', url: `${web()}/dashboard` }]] } } : {})
  })
}

// Grupos en los que está el bot, sacados de sus últimos mensajes: sirve para encontrar TELEGRAM_CHAT_ID.
// No funciona si el bot tiene un webhook configurado (Telegram no deja usar getUpdates a la vez).
export async function gruposDelBot() {
  const [bot, updates] = await Promise.all([llamar('getMe'), llamar('getUpdates', { allowed_updates: ['message', 'my_chat_member'] })])
  const chats = new Map()
  for (const u of updates) {
    const chat = (u.message || u.my_chat_member || u.channel_post || {}).chat
    if (chat && chat.type !== 'private') chats.set(chat.id, { id: String(chat.id), titulo: chat.title, tipo: chat.type })
  }
  return { bot: bot.username, grupos: [...chats.values()] }
}

function textoReserva(r, titular) {
  const dia = formatoFecha(r.starts_at, ZONA_MADRID, LOCALE, { weekday: 'long', day: 'numeric', month: 'long' })
  const horas = `${formatoHora(r.starts_at, ZONA_MADRID, LOCALE)}–${formatoHora(r.ends_at, ZONA_MADRID, LOCALE)}`
  return [
    `<b>${titular}</b>: ${html(r.event_title)}`,
    `🗓 ${html(dia)}, <b>${horas}</b> (Madrid)`,
    r.guest_timezone && r.guest_timezone !== ZONA_MADRID && `🌍 Para el invitado: ${formatoHora(r.starts_at, r.guest_timezone, LOCALE)} (${html(r.guest_timezone)})`,
    `👤 ${html(r.name)}`,
    `✉️ ${html(r.email)}`,
    r.phone && `📞 ${html(r.phone)}`,
    r.notes && `📝 ${html(r.notes.slice(0, 800))}`
  ]
    .filter(Boolean)
    .join('\n')
}

function textoContacto(m) {
  return [
    `<b>✉️ Nuevo mensaje de contacto</b>${m.topic ? `: ${html(m.topic)}` : ''}`,
    `👤 ${html(m.name)}${m.company ? ` · ${html(m.company)}` : ''}`,
    `✉️ ${html(m.email)}`,
    m.phone && `📞 ${html(m.phone)}`,
    '',
    html(m.message.slice(0, 3000))
  ]
    .filter((linea) => linea !== null && linea !== undefined && linea !== false)
    .join('\n')
}

// Se espera al envío (en Vercel la función se congela al responder), pero sin propagar errores
async function avisar(texto) {
  if (!telegramConfigurado()) return { enviado: false, motivo: 'sin-configurar' }
  try {
    await enviarTelegram(texto)
    return { enviado: true }
  } catch (e) {
    console.error('[telegram]', e.message)
    return { enviado: false, motivo: e.message }
  }
}

export const avisarReserva = (reserva, tipo = 'nueva') =>
  avisar(textoReserva(reserva, tipo === 'cancelada' ? '❌ Reserva cancelada' : '📅 Nueva reserva'))

export const avisarContacto = (mensaje) => avisar(textoContacto(mensaje))
