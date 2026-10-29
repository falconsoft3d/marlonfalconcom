import { listar } from '../../../lib/falcondb'
import { leerAjustes } from '../../../lib/calendario/disponibilidad'

// Feed iCal privado con las reservas confirmadas, para suscribirse desde Google Calendar:
// /api/calendario/feed?token=<feed_token de booking_settings>

const fechaIcs = (iso) => new Date(iso).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')
const escapar = (texto) => String(texto || '').replace(/[\\;,]/g, (c) => `\\${c}`).replace(/\r?\n/g, '\\n')

// Las líneas de iCal no deben pasar de 75 octetos
const plegar = (linea) => linea.match(/.{1,73}/g).join('\r\n ')

export default async function handler(req, res) {
  try {
    const ajustes = await leerAjustes()
    if (!ajustes.feed_token || req.query.token !== ajustes.feed_token) return res.status(404).end()

    const desde = new Date(Date.now() - 30 * 24 * 3600 * 1000).toISOString()
    const reservas = await listar('bookings', { status: 'confirmed', starts_at: `gte.${desde}`, order: 'starts_at' })

    const lineas = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//marlonfalcon.com//Calendario//ES', 'CALSCALE:GREGORIAN', 'X-WR-CALNAME:Reservas marlonfalcon.com']
    for (const r of reservas) {
      const notas = [`${r.name} <${r.email}>`, r.phone && `Tel: ${r.phone}`, r.guest_timezone && `Zona: ${r.guest_timezone}`, r.notes]
        .filter(Boolean)
        .join('\n')
      lineas.push(
        'BEGIN:VEVENT',
        `UID:${r.token}@marlonfalcon.com`,
        `DTSTAMP:${fechaIcs(r.created_at)}`,
        `DTSTART:${fechaIcs(r.starts_at)}`,
        `DTEND:${fechaIcs(r.ends_at)}`,
        plegar(`SUMMARY:${escapar(`${r.event_title} · ${r.name}`)}`),
        plegar(`DESCRIPTION:${escapar(notas)}`),
        'END:VEVENT'
      )
    }
    lineas.push('END:VCALENDAR')

    res.setHeader('Content-Type', 'text/calendar; charset=utf-8')
    res.setHeader('Cache-Control', 'no-store')
    res.status(200).send(lineas.join('\r\n') + '\r\n')
  } catch (e) {
    console.error('[calendario/feed]', e)
    res.status(502).end()
  }
}
