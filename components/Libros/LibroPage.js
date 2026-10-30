import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Icon from '../Icon'
import SiteFooter from '../SiteFooter'
import { SITIO } from '../Tienda/data'
import { libros, urlLibro } from './data'
import Accion from './Accion'
import Compartir from './Compartir'
import estilos from './estilos'
import { tr, useIdioma } from '../../lib/idioma'

const TEXTOS = {
  es: {
    volver: 'Todos los libros',
    nuevo: 'Nuevo',
    indice: 'Índice',
    otros: 'Otros libros',
    portada: (titulo) => `Portada de ${titulo}`
  },
  en: {
    volver: 'All books',
    nuevo: 'New',
    indice: 'Contents',
    otros: 'Other books',
    portada: (titulo) => `Cover of ${titulo}`
  }
}

// /libros/<slug>: la página de un libro, pensada para compartirla
export default function LibroPage({ libro }) {
  const { lang } = useIdioma()
  const t = TEXTOS[lang]

  const titulo = `${libro.titulo} | Marlon Falcón Hernández`
  const descripcion = libro.descripcion.es
  const url = urlLibro(libro)
  const imagen = `${SITIO}/images/libros/og/${libro.slug}.jpg`
  const datos = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: libro.titulo,
    description: descripcion,
    url,
    image: `${SITIO}${libro.portada.src}`,
    inLanguage: 'es',
    isAccessibleForFree: true,
    author: { '@type': 'Person', name: 'Marlon Falcón Hernández', url: SITIO }
  }

  return (
    <>
      <main className="lf lb-u">
        <Head>
          <title>{titulo}</title>
          <meta name="description" content={descripcion} />
          <link rel="canonical" href={url} />
          <meta key="og:type" property="og:type" content="book" />
          <meta key="og:title" property="og:title" content={titulo} />
          <meta key="og:description" property="og:description" content={descripcion} />
          <meta key="og:url" property="og:url" content={url} />
          <meta key="og:image" property="og:image" content={imagen} />
          <meta key="og:image:width" property="og:image:width" content="1200" />
          <meta key="og:image:height" property="og:image:height" content="630" />
          <meta key="twitter:title" name="twitter:title" content={titulo} />
          <meta key="twitter:description" name="twitter:description" content={descripcion} />
          <meta key="twitter:image" name="twitter:image" content={imagen} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datos).replace(/</g, '\\u003c') }} />
        </Head>

        <Link href="/libros">
          <a className="lf-back">
            <Icon name="left" size={16} /> {t.volver}
          </a>
        </Link>

        <section className="lf-hero">
          <div className="lb-cover lf-cover">
            <Image
              src={libro.portada.src}
              alt={t.portada(libro.titulo)}
              width={libro.portada.ancho}
              height={libro.portada.alto}
              layout="responsive"
              sizes="(max-width: 700px) 240px, 320px"
              priority
            />
          </div>

          <div className="lf-body">
            {(libro.nuevo || libro.fecha) && (
              <p className="lb-flags">
                {libro.nuevo && <span className="lb-new">{t.nuevo}</span>}
                {libro.fecha && <span>{tr(libro.fecha, lang)}</span>}
              </p>
            )}
            <h1 className="lf-title">{libro.titulo}</h1>
            <p className="lf-sub">{tr(libro.subtitulo, lang)}</p>
            <p className="lf-author">Marlon Falcón Hernández</p>
            <ul className="lb-data">
              {tr(libro.datos, lang).map((dato) => (
                <li key={dato}>{dato}</li>
              ))}
            </ul>
            <p className="lf-desc">{tr(libro.descripcion, lang)}</p>
            <ul className="lb-tags">
              {tr(libro.temas, lang).map((tema) => (
                <li key={tema}>{tema}</li>
              ))}
            </ul>
            <div className="lf-actions">
              {libro.acciones.map((accion) => (
                <Accion key={accion.icono} accion={accion} lang={lang} />
              ))}
            </div>
            <Compartir libro={libro} />
          </div>
        </section>

        <section className="lf-section">
          <h2>{t.indice}</h2>
          <ol className="lf-toc">
            {libro.capitulos.map((capitulo) => (
              <li key={capitulo}>{capitulo}</li>
            ))}
          </ol>
        </section>

        <section className="lf-section">
          <h2>{t.otros}</h2>
          <div className="lf-others">
            {libros
              .filter((otro) => otro.slug !== libro.slug)
              .map((otro) => (
                <Link key={otro.slug} href={`/libros/${otro.slug}`}>
                  <a className="lf-other">
                    <span className="lb-cover">
                      <Image src={otro.portada.src} alt="" width={otro.portada.ancho} height={otro.portada.alto} layout="responsive" sizes="90px" />
                    </span>
                    <span>{otro.titulo}</span>
                  </a>
                </Link>
              ))}
          </div>
        </section>
      </main>

      <SiteFooter />

      <style jsx global>{estilos}</style>
      <style jsx global>{`
        .lf {
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem 1rem 1rem;
          color: var(--text);
        }
        .lf .lf-back {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          color: var(--muted);
          font-size: 0.9rem;
          text-decoration: none;
        }
        .lf .lf-back:hover {
          color: var(--text-strong);
        }
        .lf .lf-hero {
          display: grid;
          grid-template-columns: 320px minmax(0, 1fr);
          gap: 3rem;
          align-items: start;
          margin-top: 1.75rem;
        }
        .lf .lf-title {
          margin: 0;
          font-size: clamp(2rem, 4vw, 2.75rem);
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: var(--text-strong);
        }
        .lf .lf-sub {
          margin: 0.6rem 0 0;
          font-size: 1.1rem;
          color: var(--muted);
        }
        .lf .lf-author {
          margin: 0.6rem 0 0;
          color: var(--text-strong);
          font-size: 0.95rem;
        }
        .lf .lf-desc {
          margin: 1rem 0 0;
          line-height: 1.65;
        }
        .lf .lf-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-top: 1.5rem;
        }
        .lf .lf-section {
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border);
        }
        .lf .lf-section h2 {
          margin: 0 0 1rem;
          font-size: 1.35rem;
          color: var(--text-strong);
        }
        .lf .lf-toc {
          columns: 2;
          column-gap: 2.5rem;
          margin: 0;
          padding: 0;
          list-style: none;
          font-size: 0.92rem;
        }
        .lf .lf-toc li {
          break-inside: avoid;
          padding: 0.35rem 0;
        }
        .lf .lf-others {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.25rem 1.5rem;
        }
        .lf .lf-other {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          color: var(--text-strong);
          font-size: 0.95rem;
          text-decoration: none;
        }
        .lf .lf-other .lb-cover {
          flex: 0 0 90px;
          margin: 0;
        }
        .lf .lf-other:hover {
          color: var(--accent-2);
        }

        @media (max-width: 760px) {
          .lf .lf-hero {
            grid-template-columns: minmax(0, 1fr);
            gap: 1.75rem;
          }
          .lf .lf-toc {
            columns: 1;
          }
          .lf .lf-others {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .lf .lf-cover {
            width: min(240px, 70%);
            margin: 0 auto;
          }
        }

        @media (max-width: 560px) {
          .lf .lf-others {
            grid-template-columns: minmax(0, 1fr);
          }
        }
      `}</style>
    </>
  )
}
