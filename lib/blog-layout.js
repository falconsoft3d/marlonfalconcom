// Envuelve nextra-theme-blog para añadir el SEO de cada página MDX: el tema solo pone el <title>
// (su opción `head` falla porque usa una variable `title` que no existe).
// Los artículos llevan su descripción, Open Graph y Twitter (con la primera imagen del post para
// que al compartirlos se vea lo que publican), URL canónica y datos estructurados BlogPosting.
import React from 'react'
import Head from 'next/head'
import withTheme from 'nextra-theme-blog'

const SITE = 'https://www.marlonfalcon.com'
const NOMBRE = 'Marlon Falcón Hernández'
const IMAGEN_SITIO = `${SITE}/images/marlon_yellow2.png`
const AUTOR = {
  '@type': 'Person',
  name: NOMBRE,
  url: SITE,
  sameAs: ['https://x.com/MarlonFalcon4', 'https://github.com/falconsoft3d']
}

const limpiar = (s = '') => String(s).replace(/^▷\s*/, '').trim()
const absoluta = (src) => (/^https?:\/\//.test(src) ? src : SITE + (src.startsWith('/') ? src : `/${src}`))

// "2026/11/11", "2026-11-11" o "2022-02-18T00:00:00.000Z" → "2026-11-11"
function fechaISO(valor) {
  const m = String(valor || '').match(/(\d{4})[-/](\d{1,2})[-/](\d{1,2})/)
  if (!m) return null
  return `${m[1]}-${m[2].padStart(2, '0')}-${m[3].padStart(2, '0')}`
}

const etiquetas = (tag) =>
  String(tag || '')
    .split(',')
    .map((t) => t.trim())
    .filter(Boolean)

// Primera imagen del contenido (<Image> o ![]()) que cumpla `acepta`
function buscarImagen(nodo, acepta, profundidad = 0) {
  if (!nodo || profundidad > 60) return null
  if (Array.isArray(nodo)) {
    for (const hijo of nodo) {
      const img = buscarImagen(hijo, acepta, profundidad + 1)
      if (img) return img
    }
    return null
  }
  if (typeof nodo !== 'object' || !nodo.props) return null
  const { src, width, height, alt } = nodo.props
  if (typeof src === 'string' && acepta(src)) {
    return { src: absoluta(src), width: Number(width) || null, height: Number(height) || null, alt }
  }
  return buscarImagen(nodo.props.children, acepta, profundidad + 1)
}

// Imagen al compartir: la indicada en el frontmatter (`image:`) o la primera del post, sin GIF animados
function imagenParaCompartir(meta, contenido) {
  if (meta.image) {
    const elegida = absoluta(String(meta.image))
    return buscarImagen(contenido, (src) => absoluta(src) === elegida) || { src: elegida }
  }
  return buscarImagen(contenido, (src) => /\.(png|jpe?g|webp)$/i.test(src))
}

function contenidoDe(children) {
  try {
    return typeof children?.type === 'function' ? children.type() : null
  } catch (e) {
    return null
  }
}

const jsonLd = (datos) => ({ __html: JSON.stringify(datos).replace(/</g, '\\u003c') })

function SeoArticulo({ meta, url, imagen }) {
  const titulo = limpiar(meta.title)
  const descripcion = limpiar(meta.description)
  const fecha = fechaISO(meta.date)
  const tags = etiquetas(meta.tag)
  const og = imagen || { src: IMAGEN_SITIO }

  const articulo = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: titulo,
    description: descripcion || undefined,
    image: [og.src],
    datePublished: fecha || undefined,
    dateModified: fecha || undefined,
    author: AUTOR,
    publisher: { '@type': 'Person', name: NOMBRE, url: SITE, image: IMAGEN_SITIO },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    inLanguage: 'es',
    keywords: tags.length ? tags.join(', ') : undefined
  }

  const migas = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/posts` },
      { '@type': 'ListItem', position: 3, name: titulo, item: url }
    ]
  }

  return (
    <Head>
      {descripcion && <meta key="description" name="description" content={descripcion} />}
      {tags.length > 0 && <meta key="keywords" name="keywords" content={tags.join(', ')} />}
      <meta key="author" name="author" content={NOMBRE} />
      <link key="canonical" rel="canonical" href={url} />

      <meta key="og:type" property="og:type" content="article" />
      <meta key="og:locale" property="og:locale" content="es_ES" />
      <meta key="og:url" property="og:url" content={url} />
      <meta key="og:title" property="og:title" content={titulo} />
      {descripcion && <meta key="og:description" property="og:description" content={descripcion} />}
      <meta key="og:image" property="og:image" content={og.src} />
      {og.width && <meta key="og:image:width" property="og:image:width" content={String(og.width)} />}
      {og.height && <meta key="og:image:height" property="og:image:height" content={String(og.height)} />}
      {og.alt && <meta key="og:image:alt" property="og:image:alt" content={og.alt} />}
      {fecha && <meta key="article:published_time" property="article:published_time" content={fecha} />}
      <meta key="article:author" property="article:author" content={NOMBRE} />
      {tags.map((t) => (
        <meta key={`article:tag:${t}`} property="article:tag" content={t} />
      ))}

      <meta key="twitter:title" name="twitter:title" content={titulo} />
      {descripcion && <meta key="twitter:description" name="twitter:description" content={descripcion} />}
      <meta key="twitter:image" name="twitter:image" content={og.src} />
      {og.alt && <meta key="twitter:image:alt" name="twitter:image:alt" content={og.alt} />}

      <script key="ld-articulo" type="application/ld+json" dangerouslySetInnerHTML={jsonLd(articulo)} />
      <script key="ld-migas" type="application/ld+json" dangerouslySetInnerHTML={jsonLd(migas)} />
    </Head>
  )
}

// Resto de páginas MDX: canónica y, si el frontmatter la trae, su descripción
function SeoPagina({ meta, url }) {
  const descripcion = limpiar(meta.description)
  return (
    <Head>
      <link key="canonical" rel="canonical" href={url} />
      <meta key="og:url" property="og:url" content={url} />
      {descripcion && <meta key="description" name="description" content={descripcion} />}
      {descripcion && <meta key="og:description" property="og:description" content={descripcion} />}
      {descripcion && <meta key="twitter:description" name="twitter:description" content={descripcion} />}
    </Head>
  )
}

export default function withSeo(opts, config) {
  // El tema usa hooks al crearse: debe llamarse aquí, durante el render de la página
  const Pagina = withTheme(opts, config)
  const meta = opts.meta || {}
  const ruta = opts.route === '/index' ? '/' : opts.route
  const url = SITE + (ruta === '/' ? '' : ruta)
  const esArticulo = (meta.type || 'post') === 'post' && ruta.startsWith('/posts/')

  return function PaginaConSeo(props) {
    const seo = esArticulo ? (
      <SeoArticulo meta={meta} url={url} imagen={imagenParaCompartir(meta, contenidoDe(props.children))} />
    ) : (
      <SeoPagina meta={meta} url={url} />
    )
    return (
      <>
        {seo}
        {Pagina(props)}
      </>
    )
  }
}
