import { buscarSala, leerEstado, reportar, origenDe, Invalido } from '../../../lib/agentes'
import { instrucciones } from '../../../components/Agentes/instrucciones'

// API de la Torre de control. El token de la URL es la credencial.
// GET devuelve el estado de la sala (lo usan la página y el plugin de Chrome) · POST guarda el informe de un agente.
export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')
  res.setHeader('X-Robots-Tag', 'noindex, nofollow')
  if (!['GET', 'POST'].includes(req.method)) return res.status(405).json({ error: 'Método no permitido' })

  try {
    const sala = await buscarSala(req.query.token)
    if (!sala) return res.status(404).json({ error: 'La sala no existe o está cerrada.' })

    if (req.method === 'POST') return res.status(200).json(await reportar(sala, req.body || {}))
    res.status(200).json({ ...(await leerEstado(sala)), como_reportar: instrucciones(origenDe(req), req.query.token) })
  } catch (e) {
    if (e instanceof Invalido) return res.status(400).json({ error: e.message })
    console.error('[agentes]', e)
    res.status(502).json({ error: 'No se pudo leer la sala. Inténtalo de nuevo.' })
  }
}
