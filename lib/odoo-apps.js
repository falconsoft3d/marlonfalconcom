// Lee en vivo los módulos publicados en apps.odoo.com por Marlon Falcón Hernández.
// Solo se usa en el servidor (getStaticProps y rutas /api): Odoo no permite CORS.

const BASE = 'https://apps.odoo.com'
const AUTHOR = 'Marlon Falcón Hernández'
const HEADERS = { 'User-Agent': 'Mozilla/5.0 (compatible; marlonfalcon.com tienda)' }
const MAX_PAGINAS = 10
const CONCURRENCIA = 6

// Segundos entre regeneraciones de las páginas de la tienda
export const REVALIDAR = 3600

const SIMBOLOS = { '€': 'EUR', $: 'USD', '£': 'GBP' }

const TECNICO = /^[a-z0-9_]+$/
const VERSION = /^\d{1,2}\.\d$/

export const esTecnicoValido = (tecnico) => TECNICO.test(tecnico || '')
export const esVersionValida = (version) => VERSION.test(version || '')

const decodificar = (s = '') =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;|&#34;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')

const texto = (s = '') => decodificar(s.replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim()

const absoluta = (url) => (url && url.startsWith('//') ? `https:${url}` : url || '')

async function descargar(ruta) {
  const res = await fetch(BASE + ruta, { headers: HEADERS })
  if (!res.ok) throw new Error(`apps.odoo.com respondió ${res.status} en ${ruta}`)
  return res.text()
}

// "<span class="oe_currency_value">499.00</span> €" → { precio: 499, moneda: 'EUR' }
function leerPrecio(html) {
  const m = html.match(/oe_currency_value">([\d.,]+)<\/span>\s*([^\s<]+)?/)
  if (!m) return { precio: 0, moneda: 'EUR' }
  return {
    precio: Number(m[1].replace(/,/g, '')),
    moneda: SIMBOLOS[(m[2] || '').trim()] || 'EUR'
  }
}

// Tarjetas del listado del autor (una por módulo, en su versión más reciente)
function leerListado(html) {
  return html
    .split('loempia_app_entry loempia_app_card')
    .slice(1)
    .map((bloque) => {
      const enlace = bloque.match(/href="\/apps\/modules\/([\d.]+)\/([a-z0-9_]+)"/)
      if (!enlace) return null
      const resumen = bloque.match(/loempia_panel_summary">([\s\S]*?)<\/p>/)
      const descargas = bloque.match(/Total Downloads: (\d+)/)
      const precio = bloque.match(/loempia_panel_price[^>]*>([\s\S]*?)<\/div>/)
      return {
        version: enlace[1],
        tecnico: enlace[2],
        resumen: resumen ? texto(resumen[1]) : '',
        descargas: descargas ? Number(descargas[1]) : 0,
        ...leerPrecio(precio ? precio[1] : '')
      }
    })
    .filter(Boolean)
}

// Ficha de un módulo en una versión concreta
function leerFicha(html, version, tecnico) {
  const nombre = html.match(/itemprop="name"><b>([\s\S]*?)<\/b>/)
  const cabecera = html.match(/<h1 class="mt-0 mb-0"><b>([\s\S]*?)<\/b><\/h1>/)
  const portada = html.match(/loempia_app_cover[^"]*" style="background-image:url\(([^)]+)\)/)
  const icono = html.match(/loempia_app_icon big" src="([^"]+)"/)
  const categoria = html.match(/itemprop="applicationCategory" href="[^"]*">([^<]*)</)
  const descripcion = html.match(/<meta name="description" content="([^"]*)"/)
  const licencia = html.match(/<b>License<\/b><\/td>\s*<td>([^<]*)</)
  const lineas = html.match(/<b>Lines of code<\/b>[\s\S]*?<td><span>(\d+)<\/span>/)
  const dependencias = html.match(/Odoo Apps Dependencies[\s\S]*?<\/td>\s*<td>([\s\S]*?)<\/td>/)
  const versiones = html.match(/loempia_app_availability[\s\S]*?<\/td>\s*<td>([\s\S]*?)<\/td>/)
  const autor = html.match(/itemprop="author"[\s\S]*?itemprop="name">([^<]*)</)

  return {
    clave: `${tecnico}@${version}`,
    tecnico,
    version,
    nombre: nombre ? texto(nombre[1]) : tecnico,
    autor: autor ? texto(autor[1]) : AUTHOR,
    ...(cabecera ? leerPrecio(cabecera[1]) : { precio: 0, moneda: 'EUR' }),
    imagen: portada ? absoluta(decodificar(portada[1]).split('&unique')[0]) : '',
    icono: icono ? absoluta(decodificar(icono[1])) : '',
    categoria: categoria ? texto(categoria[1]) : '',
    resumen: descripcion ? texto(descripcion[1]) : '',
    licencia: licencia ? licencia[1].trim() : '',
    lineas: lineas ? Number(lineas[1]) : 0,
    dependencias: dependencias
      ? [...dependencias[1].matchAll(/<span>([\s\S]*?)<\/span>/g)].map((d) => texto(d[1]))
      : [],
    versiones: versiones
      ? [...new Set([...versiones[1].matchAll(/>\s*([\d]{1,2}\.\d)\s*</g)].map((v) => v[1]))].sort(compararVersiones)
      : [version],
    url: `${BASE}/apps/modules/${version}/${tecnico}`
  }
}

// Ordena de la versión más nueva a la más antigua
export function compararVersiones(a, b) {
  return parseFloat(b) - parseFloat(a)
}

async function enParalelo(lista, fn) {
  const resultados = new Array(lista.length)
  let siguiente = 0
  const trabajador = async () => {
    while (siguiente < lista.length) {
      const i = siguiente++
      resultados[i] = await fn(lista[i])
    }
  }
  await Promise.all(Array.from({ length: Math.min(CONCURRENCIA, lista.length) }, trabajador))
  return resultados
}

export async function obtenerModulo(version, tecnico) {
  if (!esVersionValida(version) || !esTecnicoValido(tecnico)) return null
  const res = await fetch(`${BASE}/apps/modules/${version}/${tecnico}`, { headers: HEADERS })
  if (res.status === 404) return null
  if (!res.ok) throw new Error(`apps.odoo.com respondió ${res.status}`)
  const html = await res.text()
  // Odoo redirige a otra versión cuando la pedida no existe
  if (!res.url.endsWith(`/${version}/${tecnico}`) && !html.includes(`/apps/modules/${version}/${tecnico}"`)) return null
  return leerFicha(html, version, tecnico)
}

// Catálogo completo: cada módulo en cada una de sus versiones publicadas
export async function obtenerCatalogo() {
  const listado = []
  for (let pagina = 1; pagina <= MAX_PAGINAS; pagina++) {
    const ruta = `/apps/modules/browse${pagina > 1 ? `/page/${pagina}` : ''}?author=${encodeURIComponent(AUTHOR)}`
    const tarjetas = leerListado(await descargar(ruta))
    const nuevas = tarjetas.filter((t) => !listado.some((l) => l.tecnico === t.tecnico && l.version === t.version))
    if (!nuevas.length) break
    listado.push(...nuevas)
  }

  const fichas = await enParalelo(listado, (t) => obtenerModulo(t.version, t.tecnico))

  // Versiones que solo aparecen en la ficha (p. ej. 18.0 y 19.0 de un módulo listado en 20.0)
  const pendientes = []
  fichas.forEach((f) => {
    if (!f) return
    f.versiones
      .filter((v) => v !== f.version)
      .forEach((v) => pendientes.push({ version: v, tecnico: f.tecnico }))
  })
  const extra = await enParalelo(pendientes, (p) => obtenerModulo(p.version, p.tecnico).catch(() => null))

  const porTecnico = new Map(listado.map((t) => [t.tecnico, t]))
  return [...fichas, ...extra]
    .filter(Boolean)
    .map((f, i) => {
      const t = porTecnico.get(f.tecnico) || {}
      return {
        ...f,
        resumen: f.resumen || t.resumen || '',
        descargas: t.descargas || 0,
        orden: i
      }
    })
}
