import { buscar, actualizar } from '../../../lib/falcondb'
import { eventoPublico } from '../../../lib/calendario/publico'
import { avisarReserva } from '../../../lib/calendario/telegram'

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

const reservaPublica = (r, evento) => ({
  estado: r.status,
  inicio: r.starts_at,
  fin: r.ends_at,
  nombre: r.name,
  email: r.email,
  zona: r.guest_timezone,
  evento: eventoPublico(evento || { title: r.event_title })
})

// GET ?token= muestra la reserva; POST { token } la cancela. El token solo lo conoce quien reservó.
export default async function handler(req, res) {
  const token = String((req.method === 'POST' ? req.body?.token : req.query.token) || '')
  if (!UUID.test(token)) return res.status(400).json({ error: 'Enlace de reserva no válido.' })

  try {
    let reserva = await buscar('bookings', { token })
    if (!reserva) return res.status(404).json({ error: 'No encontramos esta reserva.' })

    if (req.method === 'POST') {
      if (reserva.status === 'confirmed') {
        if (Date.parse(reserva.starts_at) < Date.now()) return res.status(409).json({ error: 'Esta reunión ya ha pasado.' })
        reserva = await actualizar('bookings', reserva.id, { status: 'cancelled', cancelled_at: new Date().toISOString() })
        await avisarReserva(reserva, 'cancelada')
      }
    } else if (req.method !== 'GET') {
      return res.status(405).json({ error: 'Método no permitido' })
    }

    const evento = reserva.event_type_id ? await buscar('booking_event_types', { id: String(reserva.event_type_id) }) : null
    res.setHeader('Cache-Control', 'no-store')
    res.status(200).json(reservaPublica(reserva, evento))
  } catch (e) {
    console.error('[calendario/reserva]', e)
    res.status(502).json({ error: 'No se pudo cargar la reserva.' })
  }
}
