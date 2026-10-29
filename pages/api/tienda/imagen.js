import { obtenerModulo, esTecnicoValido, esVersionValida } from '../../../lib/odoo-apps'

// Portada o icono de un módulo. Odoo Apps cambia el image_id cada vez que se actualiza el repo
// del módulo y borra el anterior, así que la URL se busca en la ficha actual y la imagen se sirve desde aquí.
// GET /api/tienda/imagen?version=17.0&modulo=hide_chat&tipo=portada|icono
export default async function handler(req, res) {
  const { version, modulo, tipo = 'portada' } = req.query
  if (!esVersionValida(version) || !esTecnicoValido(modulo)) return res.status(400).end()

  try {
    const m = await obtenerModulo(version, modulo)
    const url = m && (tipo === 'icono' ? m.icono : m.imagen)
    if (!url) return res.status(404).end()

    const img = await fetch(url)
    if (!img.ok) return res.status(502).end()

    res.setHeader('Content-Type', img.headers.get('content-type') || 'image/png')
    // El CDN la guarda una hora y, mientras se refresca, sigue sirviendo la anterior
    res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=604800')
    res.send(Buffer.from(await img.arrayBuffer()))
  } catch (e) {
    res.status(502).end()
  }
}
