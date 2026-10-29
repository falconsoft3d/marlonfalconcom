import { listar } from '../../../lib/falcondb'
import { leerAjustes } from '../../../lib/calendario/disponibilidad'
import { eventoPublico } from '../../../lib/calendario/publico'

// Tipos de reunión activos que se muestran en /calendario
export default async function handler(req, res) {
  try {
    const [eventos, ajustes] = await Promise.all([
      listar('booking_event_types', { active: 'true', order: 'sort_order' }),
      leerAjustes()
    ])
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300')
    res.status(200).json({ zona: ajustes.timezone, eventos: eventos.map(eventoPublico) })
  } catch (e) {
    console.error('[calendario/eventos]', e)
    res.status(502).json({ error: 'No se pudo cargar el calendario.' })
  }
}
