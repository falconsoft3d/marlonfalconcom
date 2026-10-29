import { buscar } from '../../../lib/falcondb'
import { huecosDeEvento, MAX_RANGO_MS } from '../../../lib/calendario/disponibilidad'

// Huecos de un tipo de reunión: /api/calendario/disponibilidad?evento=llamada-30&desde=ISO&hasta=ISO
// Devuelve horas en UTC: el navegador las muestra en la zona que elija el visitante.
// Con &releer=1 (al abrir la página) se vuelven a leer los calendarios conectados.
export default async function handler(req, res) {
  const { evento: slug, desde, hasta, releer } = req.query
  const inicio = Date.parse(desde)
  const fin = Date.parse(hasta)
  if (!slug || !inicio || !fin || fin <= inicio || fin - inicio > MAX_RANGO_MS) {
    return res.status(400).json({ error: 'Rango de fechas no válido.' })
  }

  try {
    const evento = await buscar('booking_event_types', { slug: String(slug), active: 'true' })
    if (!evento) return res.status(404).json({ error: 'Esta reunión no existe.' })

    const { ajustes, huecos } = await huecosDeEvento(evento, inicio, fin, { forzar: releer === '1' })
    res.setHeader('Cache-Control', 'no-store')
    res.status(200).json({ zona: ajustes.timezone, duracion: evento.duration_minutes, huecos })
  } catch (e) {
    console.error('[calendario/disponibilidad]', e)
    res.status(502).json({ error: 'No se pudo consultar la disponibilidad.' })
  }
}
