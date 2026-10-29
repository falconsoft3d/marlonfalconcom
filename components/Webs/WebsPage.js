import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Icon from '../Icon'
import { webs } from './data'
import { slugWeb } from './slug'
import { tr, useIdioma } from '../../lib/idioma'

const TEXTOS = {
  es: {
    enProduccion: (n) => `${n} proyectos en producción`,
    titulo: 'Mis webs',
    lede: 'Productos y herramientas que he creado: SaaS, ERP, formación y utilidades para construcción. Cada web incluye una captura y un comentario redactado con IA a partir de su contenido.',
    abrir: (nombre) => `Abrir ${nombre}`,
    captura: (nombre) => `Captura de ${nombre}`,
    comentarioIa: '✦ Comentario IA'
  },
  en: {
    enProduccion: (n) => `${n} projects in production`,
    titulo: 'My websites',
    lede: 'Products and tools I have built: SaaS, ERP, training and construction utilities. Each website includes a screenshot and an AI-written comment based on its content.',
    abrir: (nombre) => `Open ${nombre}`,
    captura: (nombre) => `Screenshot of ${nombre}`,
    comentarioIa: '✦ AI comment'
  }
}

const urlDe = (web) => (/^https?:\/\//.test(web) ? web : `https://${web}`)
const dominio = (web) => web.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/$/, '')

export default function WebsPage() {
  const [extra, setExtra] = useState([])
  const { lang } = useIdioma()
  const t = TEXTOS[lang]

  // Las webs nuevas de la tabla mis_webs que aún no tienen comentario se añaden al final
  useEffect(() => {
    fetch('/api/mis-webs')
      .then((res) => res.json())
      .then(({ data = [] }) => {
        const conocidas = new Set(webs.map((w) => w.slug))
        setExtra(
          data
            .filter((w) => !conocidas.has(slugWeb(w.web)))
            .map((w) => ({ slug: slugWeb(w.web), web: w.web, nombre: w.nombre, comentario: w.descripcion }))
        )
      })
      .catch(() => {})
  }, [])

  return (
    <div className="wp">
      <header className="wp-head">
        <span className="wp-eyebrow">
          <Icon name="external" size={14} /> {t.enProduccion(webs.length + extra.length)}
        </span>
        <h2 className="wp-title">{t.titulo}</h2>
        <p className="wp-lede">{t.lede}</p>
      </header>

      <div className="wp-grid">
        {[...webs, ...extra].map((w, i) => (
          <article className="wp-card" key={w.slug}>
            <a className="wp-shot" href={urlDe(w.web)} target="_blank" rel="noopener noreferrer" aria-label={t.abrir(w.nombre)}>
              <span className="wp-bar" aria-hidden="true">
                <i />
                <i />
                <i />
                <span className="wp-url">{dominio(w.web)}</span>
              </span>
              {w.categoria ? (
                <span className="wp-img">
                  <Image
                    src={`/images/webs/${w.slug}.png`}
                    alt={t.captura(w.nombre)}
                    width={1280}
                    height={800}
                    layout="responsive"
                    priority={i < 2}
                  />
                </span>
              ) : (
                <span className="wp-img wp-noimg">
                  <Icon name="external" size={28} />
                </span>
              )}
            </a>

            <div className="wp-body">
              {w.categoria && <span className="wp-cat">{tr(w.categoria, lang)}</span>}
              <h3 className="wp-name">{w.nombre}</h3>
              <a className="wp-link" href={urlDe(w.web)} target="_blank" rel="noopener noreferrer">
                {dominio(w.web)} <Icon name="external" size={13} />
              </a>
              {w.comentario && (
                <div className="wp-ai">
                  {w.categoria && <span className="wp-ai-badge">{t.comentarioIa}</span>}
                  <p>{tr(w.comentario, lang)}</p>
                </div>
              )}
              {w.destacados && (
                <ul className="wp-tags">
                  {tr(w.destacados, lang).map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>

      <style jsx global>{`
        /* Sustituye el título por defecto del tema */
        article > h1:first-child {
          display: none;
        }

        .wp {
          position: relative;
          left: 50%;
          width: min(1120px, calc(100vw - 2rem));
          transform: translateX(-50%);
          color: var(--text);
        }
        .wp .wp-head {
          max-width: 680px;
          padding: 1rem 0 2.5rem;
        }
        .wp .wp-eyebrow {
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
        .wp .wp-title {
          margin: 1rem 0 0.5rem;
          font-size: clamp(2rem, 4vw, 2.75rem);
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: var(--text-strong);
        }
        .wp .wp-lede {
          margin: 0;
          color: var(--muted);
        }

        .wp .wp-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        .wp .wp-card {
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid var(--border);
          border-radius: 1.1rem;
          background: var(--surface);
          transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .wp .wp-card:hover {
          border-color: var(--tint-border);
          transform: translateY(-3px);
          box-shadow: 0 24px 50px -28px var(--glow);
        }

        .wp .wp-shot {
          display: block;
          margin: 0.9rem 0.9rem 0;
          overflow: hidden;
          border: 1px solid var(--border);
          border-radius: 0.7rem;
          background: var(--surface-2);
          text-decoration: none;
        }
        .wp .wp-bar {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.5rem 0.7rem;
          border-bottom: 1px solid var(--border);
          background: var(--surface-2);
        }
        .wp .wp-bar i {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--p-peach);
        }
        .wp .wp-bar i:nth-child(2) {
          background: var(--p-yellow);
        }
        .wp .wp-bar i:nth-child(3) {
          background: var(--p-green);
        }
        .wp .wp-url {
          flex: 1;
          margin-left: 0.5rem;
          padding: 0.15rem 0.6rem;
          border-radius: 999px;
          background: var(--surface);
          color: var(--muted);
          font-size: 0.72rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .wp .wp-img {
          display: block;
          overflow: hidden;
        }
        .wp .wp-img img {
          margin: 0 !important;
          transition: transform 0.5s;
        }
        .wp .wp-card:hover .wp-img img {
          transform: scale(1.03);
        }
        .wp .wp-noimg {
          display: flex;
          align-items: center;
          justify-content: center;
          aspect-ratio: 16 / 10;
          color: var(--muted);
        }

        .wp .wp-body {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          padding: 1.1rem 1.3rem 1.3rem;
        }
        .wp .wp-cat {
          align-self: flex-start;
          padding: 0.15rem 0.6rem;
          border-radius: 999px;
          background: var(--tint);
          color: var(--accent-2);
          font-size: 0.72rem;
          font-variation-settings: 'wght' 600;
        }
        .wp .wp-name {
          margin: 0.2rem 0 0;
          font-size: 1.25rem;
          color: var(--text-strong);
        }
        .wp a.wp-link {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          align-self: flex-start;
          color: var(--accent-2);
          font-size: 0.85rem;
          text-decoration: none;
        }
        .wp a.wp-link:hover {
          text-decoration: underline;
        }
        .wp .wp-ai {
          margin-top: 0.4rem;
          padding: 0.85rem 1rem;
          border-left: 3px solid var(--p-lavender);
          border-radius: 0 0.6rem 0.6rem 0;
          background: var(--surface-2);
        }
        .wp .wp-ai-badge {
          display: inline-block;
          margin-bottom: 0.35rem;
          font-size: 0.72rem;
          color: var(--muted);
          font-variation-settings: 'wght' 600;
          letter-spacing: 0.02em;
        }
        .wp .wp-ai p {
          margin: 0;
          font-size: 0.9rem;
          line-height: 1.55;
        }
        .wp .wp-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin: 0.5rem 0 0;
          padding: 0;
          list-style: none;
        }
        .wp .wp-tags > li {
          margin: 0;
          padding: 0.2rem 0.65rem;
          border: 1px solid var(--border);
          border-radius: 999px;
          font-size: 0.75rem;
          color: var(--muted);
        }
        .wp .wp-tags > li::before {
          content: none;
        }

        @media (max-width: 820px) {
          .wp .wp-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}
