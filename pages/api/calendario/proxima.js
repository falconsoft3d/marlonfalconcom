import { buscar } from '../../../lib/falcondb'
import { calcularHuecos, leerAjustes, leerOcupados } from '../../../lib/calendario/disponibilidad'

const DIA_MS = 24 * 3600 * 1000
const TRAMO_MS = 30 * DIA_MS

// Primera hora libre de un tipo de reunión a partir de "desde" (por defecto, ahora):
// /api/calendario/proxima?evento=reunion-1-hora&desde=ISO → { inicio } o { inicio: null }
export default async function handler(req, res) {
  const { evento: slug, desde } = req.query
  if (!slug) return res.status(400).json({ error: 'Falta la reunión.' })

  try {
    const evento = await buscar('booking_event_types', { slug: String(slug), active: 'true' })
    if (!evento) return res.status(404).json({ error: 'Esta reunión no existe.' })

    const ajustes = await leerAjustes()
    const ahora = Date.now()
    const limite = ahora + ajustes.max_days_ahead * DIA_MS
    let inicio = Math.max(Date.parse(desde) || ahora, ahora)

    // Se busca por tramos para no leer todo el año de calendarios si el hueco está cerca
    for (; inicio < limite; inicio += TRAMO_MS) {
      const fin = Math.min(inicio + TRAMO_MS, limite)
      const ocupados = await leerOcupados(ajustes, inicio, fin)
      const libre = calcularHuecos({ ajustes, duracion: evento.duration_minutes, ocupados, desde: inicio, hasta: fin, ahora }).find((h) => !h.ocupado)
      if (libre) {
        res.setHeader('Cache-Control', 'no-store')
        return res.status(200).json({ inicio: libre.inicio })
      }
    }
    res.status(200).json({ inicio: null })
  } catch (e) {
    console.error('[calendario/proxima]', e)
    res.status(502).json({ error: 'No se pudo buscar la próxima hora libre.' })
  }
}
