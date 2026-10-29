import { buscar, actualizar } from '../../../lib/falcondb'
import { conSesion } from '../../../lib/calendario/sesion'
import { leerAjustes } from '../../../lib/calendario/disponibilidad'
import { leerCalendario, ocupadosEntre } from '../../../lib/calendario/ics'

const DIA_MS = 24 * 3600 * 1000

// POST { id }: descarga ahora un calendario conectado y guarda cuántos eventos ocupados
// tiene en los próximos días, o el error si no se pudo leer
export default conSesion(async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método no permitido' })

  const id = Number(req.body?.id)
  const calendario = id && (await buscar('booking_calendars', { id: String(id) }))
  if (!calendario) return res.status(404).json({ error: 'Calendario no encontrado.' })

  const ajustes = await leerAjustes()
  let cambios
  try {
    const eventos = await leerCalendario(calendario.ics_url, { forzar: true })
    const ahora = Date.now()
    const ocupados = ocupadosEntre(eventos, ahora, ahora + ajustes.max_days_ahead * DIA_MS, ajustes.timezone)
    cambios = { last_sync_at: new Date().toISOString(), last_error: null, events_count: ocupados.length }
  } catch (e) {
    cambios = { last_sync_at: new Date().toISOString(), last_error: String(e.message).slice(0, 300), events_count: null }
  }

  res.status(200).json({ data: await actualizar('booking_calendars', id, cambios) })
})
