import { buscar, crear } from '../../../lib/falcondb'
import { huecosDeEvento } from '../../../lib/calendario/disponibilidad'
import { zonaValida } from '../../../lib/calendario/zona'
import { retoValido } from '../../../lib/calendario/reto'

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const limpiar = (valor, max = 200) => (typeof valor === 'string' ? valor.trim().slice(0, max) : '')

// Crea una reserva. El hueco se vuelve a comprobar en el servidor justo antes de guardarla.
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método no permitido' })

  const { evento: slug, inicio, cliente = {}, reto, respuesta } = req.body || {}
  if (!retoValido(reto, respuesta)) {
    return res.status(400).json({ error: 'La suma de los ninjas no es correcta. Prueba con la nueva.', reto: true })
  }

  const nombre = limpiar(cliente.nombre)
  const email = limpiar(cliente.email).toLowerCase()
  const zona = zonaValida(cliente.zona) ? cliente.zona : null
  const t = Date.parse(inicio)

  if (!nombre || !EMAIL.test(email)) return res.status(400).json({ error: 'Indica tu nombre y un email válido.' })
  if (!slug || !t) return res.status(400).json({ error: 'Elige una fecha y una hora.' })

  try {
    const evento = await buscar('booking_event_types', { slug: String(slug), active: 'true' })
    if (!evento) return res.status(404).json({ error: 'Esta reunión no existe.' })

    // Se releen los calendarios: si el hueco se ocupó en Google hace un momento, no se reserva
    const { huecos } = await huecosDeEvento(evento, t, t + evento.duration_minutes * 60000, { forzar: true })
    const hueco = huecos.find((h) => Date.parse(h.inicio) === t)
    if (!hueco || hueco.ocupado) {
      return res.status(409).json({ error: 'Esa hora ya no está disponible. Elige otra, por favor.' })
    }

    const reserva = await crear('bookings', {
      event_type_id: evento.id,
      event_title: evento.title,
      starts_at: new Date(t).toISOString(),
      ends_at: new Date(t + evento.duration_minutes * 60000).toISOString(),
      name: nombre,
      email,
      phone: limpiar(cliente.telefono, 40) || null,
      notes: limpiar(cliente.notas, 2000) || null,
      guest_timezone: zona,
      status: 'confirmed'
    })

    res.status(200).json({ token: reserva.token })
  } catch (e) {
    console.error('[calendario/reservar]', e)
    res.status(502).json({ error: 'No se pudo guardar la reserva. Inténtalo de nuevo en unos minutos.' })
  }
}
