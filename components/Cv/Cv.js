import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Icon from '../Icon'
import { cv } from './data'

export default function Cv({ lang = 'es' }) {
  const d = cv[lang]
  const t = d.etiquetas

  return (
    <>
      <Head>
        <title>{`CV · ${d.nombre}`}</title>
        <meta name="description" content={`CV · ${d.nombre}: ${d.cargo}.`} />
      </Head>

      <div className="cv-page">
        <div className="cv-toolbar">
          <div className="cv-langs" role="group" aria-label="Idioma / Language">
            {Object.entries(cv).map(([codigo, version]) => (
              <Link key={codigo} href={version.ruta}>
                <a className={`cv-lang-btn${codigo === lang ? ' active' : ''}`} hrefLang={codigo} aria-current={codigo === lang ? 'page' : undefined}>
                  {codigo.toUpperCase()}
                </a>
              </Link>
            ))}
          </div>
          <a className="cv-download" href={d.pdf} download>
            <Icon name="file" size={16} /> {t.descargar}
          </a>
        </div>

        <main className="cv-sheet">
          <header className="cv-header">
            <img className="cv-photo" src={d.foto} alt={d.nombre} width={112} height={112} />
            <div className="cv-id">
              <h1>{d.nombre}</h1>
              <p className="cv-role">{d.cargo}</p>
              <p className="cv-meta">
                {d.titulos} · {d.ubicacion} · {d.nacionalidad}
              </p>
            </div>
          </header>

          <ul className="cv-contact">
            {d.contacto.map((c) => (
              <li key={c.texto}>
                <a href={c.href}>
                  <Icon name={c.icono} size={13} />
                  {c.texto}
                </a>
              </li>
            ))}
          </ul>

          <div className="cv-body">
            <div className="cv-main">
              <section>
                <h2>{t.perfil}</h2>
                {d.resumen.map((p) => (
                  <p key={p.slice(0, 20)} className="cv-p">
                    {p}
                  </p>
                ))}
              </section>

              <section>
                <h2>{t.experiencia}</h2>
                {d.experiencia.map((e) => (
                  <div className="cv-job" key={e.empresa}>
                    <div className="cv-job-head">
                      <h3>
                        {e.cargo} · <span>{e.empresa}</span>
                      </h3>
                      <span className="cv-date">{e.periodo}</span>
                    </div>
                    <p className="cv-place">{e.lugar}</p>
                    <ul className="cv-bullets">
                      {e.puntos.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>

              <section>
                <h2>{t.proyectos}</h2>
                <div className="cv-projects">
                  {d.proyectos.map((p) => (
                    <div className="cv-project" key={p.nombre}>
                      <h3>{p.nombre}</h3>
                      <a href={`https://${p.web}`}>{p.web}</a>
                      <p>{p.texto}</p>
                      <span className="cv-stack">{p.stack}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="cv-side">
              <section>
                <h2>{t.cifras}</h2>
                <dl className="cv-stats">
                  {d.cifras.map((c) => (
                    <div key={c.etiqueta}>
                      <dt>{c.etiqueta}</dt>
                      <dd>{c.valor}</dd>
                    </div>
                  ))}
                </dl>
              </section>

              <section>
                <h2>{t.habilidades}</h2>
                {d.habilidades.map((h) => (
                  <div className="cv-skill" key={h.grupo}>
                    <h3>{h.grupo}</h3>
                    <div className="cv-chips">
                      {h.items.map((i) => (
                        <span key={i}>{i}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </section>

              <section>
                <h2>{t.formacion}</h2>
                {d.formacion.map((f) => (
                  <div className="cv-edu" key={f.titulo}>
                    <h3>{f.titulo}</h3>
                    <p>
                      {f.centro}
                      {f.periodo && ` · ${f.periodo}`}
                    </p>
                  </div>
                ))}
              </section>

              <section>
                <h2>{t.idiomas}</h2>
                {d.idiomas.map((i) => (
                  <p className="cv-lang" key={i.idioma}>
                    <strong>{i.idioma}</strong> <span>{i.nivel}</span>
                  </p>
                ))}
              </section>

              <section>
                <h2>{t.otros}</h2>
                <ul className="cv-bullets small">
                  {d.otros.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
              </section>
            </aside>
          </div>

          <footer className="cv-foot">
            {t.actualizado}: {d.version} · marlonfalcon.com{d.ruta}
          </footer>
        </main>
      </div>

      <style jsx global>{`
        .cv-page {
          --ink: #111827;
          --ink-2: #374151;
          --ink-3: #6b7280;
          --line: #e5e7eb;
          --blue: #4f8db0;
          --blue-soft: #e6f1f7;
          padding: 2rem 0 4rem;
        }

        .cv-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          max-width: 210mm;
          margin: 0 auto 1.25rem;
        }
        .cv-langs {
          display: inline-flex;
          padding: 3px;
          border: 1px solid var(--border);
          border-radius: 999px;
          background: var(--surface);
        }
        .cv-lang-btn {
          padding: 0.35rem 0.85rem;
          border-radius: 999px;
          color: var(--muted);
          text-decoration: none;
          font-size: 0.82rem;
          font-variation-settings: 'wght' 600;
        }
        .cv-lang-btn:hover {
          color: var(--text-strong);
        }
        .cv-lang-btn.active {
          background: var(--accent);
          color: var(--on-accent);
        }
        .cv-download {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.65rem 1.15rem;
          border-radius: 999px;
          background: var(--accent);
          color: var(--on-accent);
          text-decoration: none;
          font-size: 0.92rem;
          font-variation-settings: 'wght' 600;
          box-shadow: 0 10px 30px -10px var(--glow);
        }
        .cv-download:hover {
          background: var(--accent-hover);
        }

        .cv-sheet {
          max-width: 210mm;
          margin: 0 auto;
          padding: 14mm 14mm 10mm;
          background: #fff;
          color: var(--ink-2);
          border-radius: 6px;
          box-shadow: 0 30px 80px -30px rgba(0, 0, 0, 0.6);
          font-size: 10pt;
          line-height: 1.45;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
        .cv-sheet h1,
        .cv-sheet h2,
        .cv-sheet h3,
        .cv-sheet p {
          margin: 0;
        }
        .cv-sheet a {
          color: inherit;
          text-decoration: none;
        }

        .cv-header {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding-bottom: 1rem;
        }
        .cv-photo {
          width: 28mm;
          height: 28mm;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
          margin: 0;
        }
        .cv-id h1 {
          font-size: 24pt;
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: var(--ink);
        }
        .cv-role {
          margin-top: 0.3rem !important;
          font-size: 12pt;
          color: var(--blue);
          font-variation-settings: 'wght' 600;
        }
        .cv-meta {
          margin-top: 0.25rem !important;
          font-size: 9pt;
          color: var(--ink-3);
        }

        .cv-contact {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem 1.1rem;
          margin: 0 0 1rem;
          padding: 0.65rem 0;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          list-style: none;
          font-size: 8.5pt;
        }
        .cv-contact li {
          margin: 0;
          padding: 0;
        }
        .cv-contact li::before {
          content: none;
        }
        .cv-contact a {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          color: var(--ink-2);
        }
        .cv-contact svg {
          color: var(--blue);
        }

        .cv-body {
          display: grid;
          grid-template-columns: 1fr 58mm;
          gap: 8mm;
        }
        .cv-sheet section {
          margin-bottom: 1rem;
        }
        .cv-sheet h2 {
          margin-bottom: 0.5rem;
          padding-bottom: 0.25rem;
          border-bottom: 2px solid var(--blue);
          font-size: 9pt;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--ink);
          font-variation-settings: 'wght' 750;
        }
        .cv-sheet h3 {
          font-size: 10pt;
          color: var(--ink);
          font-variation-settings: 'wght' 650;
        }
        .cv-p + .cv-p {
          margin-top: 0.4rem;
        }

        .cv-job {
          margin-bottom: 0.8rem;
          break-inside: avoid;
        }
        .cv-job-head {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 0.75rem;
        }
        .cv-job-head h3 span {
          color: var(--blue);
        }
        .cv-date {
          flex-shrink: 0;
          font-size: 8.5pt;
          color: var(--ink-3);
          font-variant-numeric: tabular-nums;
        }
        .cv-place {
          font-size: 8.5pt;
          color: var(--ink-3);
        }
        .cv-bullets {
          margin: 0.3rem 0 0;
          padding-left: 1rem;
          list-style: disc;
        }
        .cv-bullets li::marker {
          color: var(--blue);
        }
        .cv-bullets li {
          margin: 0.15rem 0;
          padding: 0;
        }
        .cv-bullets li::before {
          content: none;
        }
        .cv-bullets.small {
          font-size: 9pt;
        }

        .cv-projects {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
        }
        .cv-project {
          padding: 0.55rem 0.65rem;
          border: 1px solid var(--line);
          border-radius: 6px;
          break-inside: avoid;
        }
        .cv-project a {
          display: block;
          font-size: 8pt;
          color: var(--blue);
        }
        .cv-project p {
          margin-top: 0.2rem;
          font-size: 8.5pt;
        }
        .cv-stack {
          display: block;
          margin-top: 0.25rem;
          font-size: 7.5pt;
          color: var(--ink-3);
        }

        .cv-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.4rem;
          margin: 0;
        }
        .cv-stats div {
          display: flex;
          flex-direction: column-reverse;
          padding: 0.45rem 0.55rem;
          border-radius: 6px;
          background: var(--blue-soft);
        }
        .cv-stats div:nth-child(2) {
          background: #fcf3dc;
        }
        .cv-stats div:nth-child(3) {
          background: #f7e7ee;
        }
        .cv-stats div:nth-child(4) {
          background: #ebf2e5;
        }
        .cv-stats dd {
          margin: 0;
          font-size: 13pt;
          line-height: 1.1;
          color: var(--ink);
          font-variation-settings: 'wght' 750;
        }
        .cv-stats dt {
          font-size: 7.5pt;
          color: var(--ink-3);
          font-variation-settings: 'wght' 450;
        }

        .cv-skill {
          margin-bottom: 0.5rem;
        }
        .cv-skill h3 {
          margin-bottom: 0.2rem;
          font-size: 8.5pt;
        }
        .cv-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.2rem;
        }
        .cv-chips span {
          padding: 0.05rem 0.4rem;
          border: 1px solid var(--line);
          border-radius: 999px;
          font-size: 7.5pt;
          color: var(--ink-2);
        }

        .cv-edu {
          margin-bottom: 0.45rem;
        }
        .cv-edu h3 {
          font-size: 9pt;
        }
        .cv-edu p,
        .cv-lang {
          font-size: 8.5pt;
          color: var(--ink-3);
        }
        .cv-lang strong {
          color: var(--ink);
          margin-right: 0.3rem;
        }

        .cv-foot {
          padding-top: 0.5rem;
          border-top: 1px solid var(--line);
          font-size: 7.5pt;
          color: var(--ink-3);
          text-align: right;
        }

        @media screen and (max-width: 760px) {
          .cv-sheet {
            padding: 1.25rem;
            font-size: 0.92rem;
          }
          .cv-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .cv-body,
          .cv-projects {
            grid-template-columns: 1fr;
          }
        }

        @page {
          size: A4;
          margin: 12mm 0;
        }
        @media print {
          :root,
          html.dark {
            --bg: #fff !important;
            color-scheme: light !important;
          }
          html,
          body {
            transition: none !important;
            background: #fff !important;
            padding: 0 !important;
          }
          body > *:not(#__next),
          .chatbot,
          .cv-toolbar,
          .site-header {
            display: none !important;
          }
          .cv-page {
            padding: 0;
          }
          .cv-sheet {
            max-width: none;
            padding: 0 14mm;
            border-radius: 0;
            box-shadow: none;
          }
          .cv-sheet h2 {
            break-after: avoid;
          }
        }
      `}</style>
    </>
  )
}
