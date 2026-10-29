import { abrirSesion, cerrarSesion, haySesion, passwordCorrecta } from '../../../lib/calendario/sesion'

const espera = (ms) => new Promise((r) => setTimeout(r, ms))

// GET: ¿hay sesión? · POST { password }: entrar · DELETE: salir
export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')
  if (!process.env.DASHBOARD_PASSWORD) {
    return res.status(503).json({ error: 'Configura DASHBOARD_PASSWORD en las variables de entorno.' })
  }

  if (req.method === 'GET') return res.status(200).json({ sesion: haySesion(req) })

  if (req.method === 'DELETE') {
    cerrarSesion(res)
    return res.status(200).json({ sesion: false })
  }

  if (req.method !== 'POST') return res.status(405).json({ error: 'Método no permitido' })

  if (!passwordCorrecta(req.body?.password || '')) {
    await espera(800)
    return res.status(401).json({ error: 'Contraseña incorrecta.' })
  }
  abrirSesion(res)
  res.status(200).json({ sesion: true })
}
