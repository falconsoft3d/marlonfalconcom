import { leerResumen } from '../../../../lib/agentes'

// Estado de todas las salas abiertas para /agentes/resumen/<token>. Solo lectura.
export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')
  res.setHeader('X-Robots-Tag', 'noindex, nofollow')
  if (req.method !== 'GET') return res.status(405).json({ error: 'Método no permitido' })

  try {
    const resumen = await leerResumen(req.query.token)
    if (!resumen) return res.status(404).json({ error: 'Este resumen no existe.' })
    res.status(200).json(resumen)
  } catch (e) {
    console.error('[agentes/resumen]', e)
    res.status(502).json({ error: 'No se pudo leer el resumen. Inténtalo de nuevo.' })
  }
}
