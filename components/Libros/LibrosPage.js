import React, { useMemo, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Icon from '../Icon'
import { SITIO } from '../Tienda/data'
import { libros } from './data'
import { tr, useIdioma } from '../../lib/idioma'

const TITULO = 'Libros gratis de Odoo 20 y ABAP | Marlon Falcón Hernández'
const DESCRIPCION = 'Libros gratuitos de programación en Odoo 20 y ABAP para SAP, de Marlon Falcón Hernández, con ejercicios prácticos, PDF para descargar y buscador por tema y capítulo.'
const URL = `${SITIO}/libros`

const TEXTOS = {
  es: {
    cuenta: (n) => `${n} libros gratuitos`,
    titulo: 'Libros y manuales',
    lede: 'Lo que he aprendido programando ERP, escrito para quien empieza. Busca por tema o por capítulo y descárgalos gratis.',
    buscar: 'Buscar por título, tema o capítulo…',
    etiquetaBuscar: 'Buscar libros',
    limpiar: 'Borrar búsqueda',
    libros: (n) => `${n} ${n === 1 ? 'libro' : 'libros'}`,
    capitulos: (n) => `${n} ${n === 1 ? 'capítulo' : 'capítulos'}`,
    sinResultados: (q) => `Ningún libro ni capítulo habla de «${q}».`,
    verTodos: 'Ver todos los libros',
    nuevo: 'Nuevo',
    indice: 'Ver el índice',
    enElIndice: 'En el índice',
    portada: (titulo) => `Portada de ${titulo}`
  },
  en: {
    cuenta: (n) => `${n} free books`,
    titulo: 'Books and manuals',
    lede: 'What I have learned programming ERP systems, written for beginners. Search by topic or chapter and download them for free. The books are in Spanish.',
    buscar: 'Search by title, topic or chapter…',
    etiquetaBuscar: 'Search books',
    limpiar: 'Clear search',
    libros: (n) => `${n} ${n === 1 ? 'book' : 'books'}`,
    capitulos: (n) => `${n} ${n === 1 ? 'chapter' : 'chapters'}`,
    sinResultados: (q) => `No book or chapter mentions “${q}”.`,
    verTodos: 'Show all books',
    nuevo: 'New',
    indice: 'Show contents',
    enElIndice: 'In the contents',
    portada: (titulo) => `Cover of ${titulo}`
  }
}

// Sin mayúsculas ni acentos: «factura», «Factura» y «facturá» encuentran lo mismo
const normalizar = (texto) =>
  texto
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()

// Se busca en los dos idiomas: los capítulos solo están en español
const INDICE = libros.map((libro) => ({
  libro,
  ficha: normalizar(
    [
      libro.titulo,
      libro.subtitulo.es,
      libro.subtitulo.en,
      libro.descripcion.es,
      libro.descripcion.en,
      ...libro.temas.es,
      ...libro.temas.en
    ].join(' ')
  ),
  capitulos: libro.capitulos.map((capitulo) => ({ capitulo, texto: normalizar(capitulo) }))
}))

function buscar(consulta) {
  const palabras = normalizar(consulta).split(/\s+/).filter(Boolean)
  if (!palabras.length) return libros.map((libro) => ({ libro, coinciden: [] }))

  return INDICE.flatMap(({ libro, ficha, capitulos }) => {
    const todo = [ficha, ...capitulos.map((c) => c.texto)].join(' ')
    if (!palabras.every((palabra) => todo.includes(palabra))) return []
    // «odoo factura» en un libro de Odoo: «odoo» ya está en el título, el capítulo se busca por «factura»
    const titulo = normalizar(libro.titulo)
    const resto = palabras.filter((palabra) => !titulo.includes(palabra))
    const claves = resto.length ? resto : palabras
    const conTodas = capitulos.filter((c) => claves.every((clave) => c.texto.includes(clave)))
    const coinciden = conTodas.length ? conTodas : capitulos.filter((c) => claves.some((clave) => c.texto.includes(clave)))
    return [{ libro, coinciden: coinciden.map((c) => c.capitulo) }]
  })
}

const datosEstructurados = (libro) => ({
  '@type': 'Book',
  name: libro.titulo,
  image: `${SITIO}${libro.portada.src}`,
  inLanguage: 'es',
  isAccessibleForFree: true,
  author: { '@type': 'Person', name: 'Marlon Falcón Hernández', url: SITIO }
})

function Accion({ accion, lang }) {
  return (
    <a
      className={`lb-btn ${accion.principal ? 'lb-btn-main' : ''}`}
      href={accion.href}
      download={accion.descarga}
      target={accion.descarga ? undefined : '_blank'}
      rel={accion.descarga ? undefined : 'noopener noreferrer'}
    >
      <Icon name={accion.icono} size={16} /> {tr(accion.texto, lang)}
    </a>
  )
}

function Ficha({ libro, coinciden, buscando, prioridad, lang, t }) {
  const principal = libro.acciones[0]
  return (
    <article className="lb-card">
      <a className="lb-cover" href={principal.href} target="_blank" rel="noopener noreferrer" aria-label={tr(principal.texto, lang)}>
        <Image
          src={libro.portada.src}
          alt={t.portada(libro.titulo)}
          width={libro.portada.ancho}
          height={libro.portada.alto}
          layout="responsive"
          sizes="(max-width: 700px) 220px, 250px"
          priority={prioridad}
        />
      </a>

      <div className="lb-body">
        {(libro.nuevo || libro.fecha) && (
          <p className="lb-flags">
            {libro.nuevo && <span className="lb-new">{t.nuevo}</span>}
            {libro.fecha && <span>{tr(libro.fecha, lang)}</span>}
          </p>
        )}
        <h3 className="lb-name">{libro.titulo}</h3>
        <p className="lb-sub">{tr(libro.subtitulo, lang)}</p>
        <ul className="lb-data">
          {tr(libro.datos, lang).map((dato) => (
            <li key={dato}>{dato}</li>
          ))}
        </ul>
        <p className="lb-desc">{tr(libro.descripcion, lang)}</p>
        <ul className="lb-tags">
          {tr(libro.temas, lang).map((tema) => (
            <li key={tema}>{tema}</li>
          ))}
        </ul>
        <div className="lb-actions">
          {libro.acciones.map((accion) => (
            <Accion key={accion.icono} accion={accion} lang={lang} />
          ))}
        </div>

        {buscando && coinciden.length > 0 ? (
          <div className="lb-found">
            <span className="lb-found-title">{t.enElIndice}</span>
            <ol>
              {coinciden.map((capitulo) => (
                <li key={capitulo}>{capitulo}</li>
              ))}
            </ol>
          </div>
        ) : (
          <details className="lb-toc">
            <summary>{t.indice}</summary>
            <ol>
              {libro.capitulos.map((capitulo) => (
                <li key={capitulo}>{capitulo}</li>
              ))}
            </ol>
          </details>
        )}
      </div>
    </article>
  )
}

export default function LibrosPage() {
  const [consulta, setConsulta] = useState('')
  const { lang } = useIdioma()
  const t = TEXTOS[lang]

  const resultados = useMemo(() => buscar(consulta), [consulta])
  const buscando = consulta.trim() !== ''
  const capitulos = resultados.reduce((total, r) => total + r.coinciden.length, 0)

  const portadaSocial = `${SITIO}${libros[0].portada.src}`
  const datos = {
    '@context': 'https://schema.org',
    '@graph': libros.map(datosEstructurados)
  }

  return (
    <div className="lb">
      <Head>
        <title>{TITULO}</title>
        <meta name="description" content={DESCRIPCION} />
        <link rel="canonical" href={URL} />
        <meta key="og:title" property="og:title" content={TITULO} />
        <meta key="og:description" property="og:description" content={DESCRIPCION} />
        <meta key="og:url" property="og:url" content={URL} />
        <meta key="og:image" property="og:image" content={portadaSocial} />
        <meta key="twitter:title" name="twitter:title" content={TITULO} />
        <meta key="twitter:description" name="twitter:description" content={DESCRIPCION} />
        <meta key="twitter:image" name="twitter:image" content={portadaSocial} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datos).replace(/</g, '\\u003c') }} />
      </Head>

      <header className="lb-head">
        <span className="lb-eyebrow">
          <Icon name="book" size={14} /> {t.cuenta(libros.length)}
        </span>
        <h2 className="lb-title">{t.titulo}</h2>
        <p className="lb-lede">{t.lede}</p>

        <div className="lb-search">
          <Icon name="search" size={18} />
          <input
            type="text"
            value={consulta}
            onChange={(e) => setConsulta(e.target.value)}
            placeholder={t.buscar}
            aria-label={t.etiquetaBuscar}
          />
          {buscando && (
            <button type="button" onClick={() => setConsulta('')} aria-label={t.limpiar}>
              <Icon name="close" size={16} />
            </button>
          )}
        </div>
        <p className="lb-status" aria-live="polite">
          {buscando && resultados.length > 0
            ? [t.libros(resultados.length), capitulos > 0 && t.capitulos(capitulos)].filter(Boolean).join(' · ')
            : ''}
        </p>
      </header>

      {resultados.length > 0 ? (
        <div className="lb-list">
          {resultados.map(({ libro, coinciden }, i) => (
            <Ficha
              key={libro.slug}
              libro={libro}
              coinciden={coinciden}
              buscando={buscando}
              prioridad={i === 0}
              lang={lang}
              t={t}
            />
          ))}
        </div>
      ) : (
        <div className="lb-empty">
          <p>{t.sinResultados(consulta.trim())}</p>
          <button type="button" className="lb-btn" onClick={() => setConsulta('')}>
            {t.verTodos}
          </button>
        </div>
      )}

      <style jsx global>{`
        /* Sustituye el título por defecto del tema */
        article > h1:first-child {
          display: none;
        }

        .lb {
          position: relative;
          left: 50%;
          width: min(1000px, calc(100vw - 2rem));
          transform: translateX(-50%);
          color: var(--text);
        }
        .lb .lb-head {
          max-width: 680px;
          padding: 1rem 0 1.5rem;
        }
        .lb .lb-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.3rem 0.75rem;
          border: 1px solid var(--border);
          border-radius: 999px;
          background: var(--surface);
          color: var(--muted);
          font-size: 0.8rem;
        }
        .lb .lb-title {
          margin: 1rem 0 0.5rem;
          font-size: clamp(2rem, 4vw, 2.75rem);
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: var(--text-strong);
        }
        .lb .lb-lede {
          margin: 0;
          color: var(--muted);
        }

        .lb .lb-search {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-top: 1.5rem;
          padding: 0 0.5rem 0 1rem;
          border: 1px solid var(--border);
          border-radius: 999px;
          background: var(--surface);
          color: var(--muted);
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .lb .lb-search:focus-within {
          border-color: var(--tint-border);
          box-shadow: 0 0 0 3px var(--tint);
        }
        .lb .lb-search input {
          flex: 1;
          min-width: 0;
          padding: 0.8rem 0;
          border: 0;
          outline: 0;
          background: transparent;
          color: var(--text-strong);
          font: inherit;
        }
        .lb .lb-search input::placeholder {
          color: var(--muted);
          opacity: 1;
        }
        .lb .lb-search button {
          display: flex;
          padding: 0.4rem;
          border: 0;
          border-radius: 50%;
          background: transparent;
          color: var(--muted);
          cursor: pointer;
        }
        .lb .lb-search button:hover {
          background: var(--tint);
          color: var(--text-strong);
        }
        .lb .lb-status {
          min-height: 1.4em;
          margin: 0.6rem 0 0 1rem;
          color: var(--muted);
          font-size: 0.85rem;
        }

        .lb .lb-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .lb .lb-card {
          margin: 0;
          padding: 1.75rem;
          display: grid;
          grid-template-columns: 250px minmax(0, 1fr);
          gap: 2.25rem;
          align-items: start;
          border: 1px solid var(--border);
          border-radius: 1.1rem;
          background: var(--surface);
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .lb .lb-card:hover {
          border-color: var(--tint-border);
          box-shadow: 0 24px 50px -28px var(--glow);
        }

        /* La portada se presenta como un libro: lomo con luz y sombra al apoyarlo */
        .lb .lb-cover {
          position: relative;
          display: block;
          overflow: hidden;
          border-radius: 3px 8px 8px 3px;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35), 0 18px 32px -14px rgba(0, 0, 0, 0.6);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .lb .lb-cover::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.32) 0,
            rgba(255, 255, 255, 0.14) 1.6%,
            rgba(0, 0, 0, 0.1) 3.5%,
            transparent 7%
          );
          pointer-events: none;
        }
        .lb .lb-cover:hover {
          transform: translateY(-4px) rotate(-0.8deg);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35), 0 28px 40px -14px rgba(0, 0, 0, 0.65);
        }
        .lb .lb-cover img {
          margin: 0 !important;
        }

        .lb .lb-body {
          min-width: 0;
        }
        .lb .lb-flags {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin: 0 0 0.6rem;
          color: var(--muted);
          font-size: 0.8rem;
        }
        .lb .lb-new {
          padding: 0.15rem 0.6rem;
          border-radius: 999px;
          background: var(--p-yellow);
          color: #3a2f15;
          font-size: 0.72rem;
          font-variation-settings: 'wght' 600;
        }
        .lb .lb-name {
          margin: 0;
          font-size: clamp(1.4rem, 3vw, 1.75rem);
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--text-strong);
        }
        .lb .lb-sub {
          margin: 0.35rem 0 0;
          color: var(--muted);
        }
        .lb .lb-data {
          display: flex;
          flex-wrap: wrap;
          gap: 0.3rem 1rem;
          margin: 0.9rem 0 0;
          padding: 0;
          list-style: none;
          color: var(--text-strong);
          font-size: 0.85rem;
          font-variation-settings: 'wght' 600;
        }
        .lb .lb-data > li {
          margin: 0;
          padding: 0;
        }
        .lb .lb-desc {
          margin: 0.9rem 0 0;
          line-height: 1.6;
        }
        .lb .lb-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin: 1rem 0 0;
          padding: 0;
          list-style: none;
        }
        .lb .lb-tags > li {
          margin: 0;
          padding: 0.2rem 0.65rem;
          border: 1px solid var(--border);
          border-radius: 999px;
          font-size: 0.75rem;
          color: var(--muted);
        }
        .lb .lb-data > li::before,
        .lb .lb-tags > li::before {
          content: none;
        }

        .lb .lb-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-top: 1.25rem;
        }
        .lb .lb-btn,
        .lb a.lb-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.55rem 1.1rem;
          border: 1px solid var(--border);
          border-radius: 999px;
          background: var(--surface-2);
          color: var(--text-strong);
          font: inherit;
          font-size: 0.9rem;
          font-variation-settings: 'wght' 600;
          text-decoration: none;
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s;
        }
        .lb .lb-btn:hover {
          border-color: var(--tint-border);
        }
        .lb a.lb-btn-main {
          border-color: var(--accent);
          background: var(--accent);
          color: var(--on-accent);
        }
        .lb a.lb-btn-main:hover {
          border-color: var(--accent-hover);
          background: var(--accent-hover);
        }

        .lb .lb-toc,
        .lb .lb-found {
          margin-top: 1.25rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border);
        }
        .lb .lb-toc summary {
          color: var(--accent-2);
          font-size: 0.9rem;
          cursor: pointer;
        }
        .lb .lb-found-title {
          color: var(--muted);
          font-size: 0.72rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .lb .lb-toc ol,
        .lb .lb-found ol {
          margin: 0.6rem 0 0;
          padding: 0;
          list-style: none;
          font-size: 0.9rem;
        }
        .lb .lb-toc li,
        .lb .lb-found li {
          margin: 0;
          padding: 0.3rem 0;
        }
        .lb .lb-toc li::before,
        .lb .lb-found li::before {
          content: none;
        }
        .lb .lb-found li {
          color: var(--text-strong);
        }

        .lb .lb-empty {
          padding: 3rem 1.5rem;
          border: 1px dashed var(--border);
          border-radius: 1.1rem;
          text-align: center;
        }
        .lb .lb-empty p {
          margin: 0 0 1rem;
          color: var(--muted);
        }

        @media (max-width: 700px) {
          .lb .lb-card {
            grid-template-columns: minmax(0, 1fr);
            gap: 1.5rem;
            padding: 1.25rem;
          }
          .lb .lb-cover {
            width: min(220px, 70%);
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  )
}
