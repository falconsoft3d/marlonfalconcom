import { obtenerCatalogo } from '../../../lib/odoo-apps'

// Catálogo de la tienda leído en vivo de apps.odoo.com.
// El CDN lo guarda 5 minutos y, mientras lo refresca, sigue sirviendo el anterior.
export default async function handler(req, res) {
  try {
    const modulos = await obtenerCatalogo()
    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=3600')
    res.json({ modulos, actualizado: new Date().toISOString() })
  } catch (e) {
    res.status(502).json({ error: 'No se pudo leer el catálogo de Odoo Apps.' })
  }
}
