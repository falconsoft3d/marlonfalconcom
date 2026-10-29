import { conSesion } from '../../../lib/calendario/sesion'
import { leerAjustes, leerOcupados, MAX_RANGO_MS } from '../../../lib/calendario/disponibilidad'

const iso = (ms) => new Date(ms).toISOString()

// Horas ocupadas de una semana con su origen: reservas, bloqueos y cada calendario conectado
export default conSesion(async function handler(req, res) {
  const desde = Date.parse(req.query.desde)
  const hasta = Date.parse(req.query.hasta)
  if (!desde || !hasta || hasta <= desde || hasta - desde > MAX_RANGO_MS) {
    return res.status(400).json({ error: 'Rango de fechas no válido.' })
  }

  try {
    const ajustes = await leerAjustes()
    const { reservas, bloqueos, externos } = await leerOcupados(ajustes, desde, hasta, { forzar: !!req.query.forzar })

    const items = [
      ...reservas.map((r) => ({ tipo: 'reserva', inicio: iso(r.inicio), fin: iso(r.fin), titulo: `${r.event_title} · ${r.name}` })),
      ...bloqueos.map((b) => ({ tipo: 'bloqueo', inicio: iso(b.inicio), fin: iso(b.fin), titulo: b.title || 'No trabajo' })),
      ...externos.flatMap(({ calendario, ocupados }) =>
        ocupados.map((o) => ({ tipo: 'calendario', inicio: iso(o.inicio), fin: iso(o.fin), titulo: calendario.name, color: calendario.color }))
      )
    ].sort((a, b) => (a.inicio < b.inicio ? -1 : 1))

    const errores = externos.filter((e) => e.error).map((e) => ({ calendario: e.calendario.name, error: e.error }))
    res.status(200).json({ zona: ajustes.timezone, horario: ajustes.weekly_hours, items, errores })
  } catch (e) {
    console.error('[dashboard/ocupado]', e)
    res.status(502).json({ error: 'No se pudieron leer las horas ocupadas.' })
  }
})
