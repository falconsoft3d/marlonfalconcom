import { obtenerCatalogo } from '../../../lib/odoo-apps'

// Número de módulos publicados para Odoo 20, para el contador rojo de "Tienda" en el menú.
// Se pide en todas las páginas, así que el CDN lo guarda una hora.
export default async function handler(req, res) {
  try {
    const modulos = await obtenerCatalogo()
    const odoo20 = new Set(modulos.filter((m) => m.version === '20.0').map((m) => m.tecnico)).size
    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400')
    res.json({ odoo20 })
  } catch (e) {
    res.status(502).json({ error: 'No se pudo leer el catálogo de Odoo Apps.' })
  }
}
