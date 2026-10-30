import { obtenerCatalogo } from '../../../lib/odoo-apps'
import { SITIO, rutaModulo } from '../../../components/Tienda/data'

// Sitemap de las fichas de la tienda (/sitemap-tienda.xml). Se genera en vivo porque next-sitemap
// solo ve las páginas del build y aquí un módulo nuevo debe aparecer sin desplegar.
export default async function handler(req, res) {
  try {
    const modulos = await obtenerCatalogo()
    const urls = modulos.map((m) => `<url><loc>${SITIO}${rutaModulo(m)}</loc></url>`).join('')
    res.setHeader('Content-Type', 'application/xml; charset=utf-8')
    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400')
    res.send(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`)
  } catch (e) {
    res.status(502).end()
  }
}
