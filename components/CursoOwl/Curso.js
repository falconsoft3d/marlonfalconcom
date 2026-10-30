import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Icon from '../Icon'
import { SITIO } from '../Tienda/data'
import Bloque from './Bloques'
import { LECCIONES, PDF_MANUAL, VERSION_ODOO, VERSION_OWL, ZIP_MODULOS } from './lecciones'

const TITULO = 'Curso de OWL en Odoo 20: aprende OWL 3 desde cero'
const DESCRIPCION = 'Curso básico y gratuito de OWL 3 en Odoo 20: componentes, signals, props, plantillas, servicios y plugins, con ejemplos probados, proyecto final y manual en PDF.'
const URL = `${SITIO}/cursos/owl-odoo-20`
const CLAVE = 'curso-owl-hechas'

function leerHechas() {
  try {
    const hechas = JSON.parse(localStorage.getItem(CLAVE) || '[]')
    return Array.isArray(hechas) ? hechas : []
  } catch (e) {
    return []
  }
}

// /cursos/owl-odoo-20: una página con todas las lecciones y el progreso guardado en el navegador
export default function Curso({ archivos }) {
  const [hechas, setHechas] = useState([])

  useEffect(() => setHechas(leerHechas()), [])

  const alternar = (id) => {
    const nuevas = hechas.includes(id) ? hechas.filter((h) => h !== id) : [...hechas, id]
    setHechas(nuevas)
    try {
      localStorage.setItem(CLAVE, JSON.stringify(nuevas))
    } catch (e) {}
  }

  const progreso = Math.round((hechas.length / LECCIONES.length) * 100)

  const datos = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: TITULO,
    description: DESCRIPCION,
    url: URL,
    inLanguage: 'es',
    isAccessibleForFree: true,
    provider: { '@type': 'Person', name: 'Marlon Falcón Hernández', url: SITIO }
  }

  return (
    <main className="co">
      <Head>
        <title>{TITULO}</title>
        <meta name="description" content={DESCRIPCION} />
        <link rel="canonical" href={URL} />
        <meta key="og:title" property="og:title" content={TITULO} />
        <meta key="og:description" property="og:description" content={DESCRIPCION} />
        <meta key="og:url" property="og:url" content={URL} />
        <meta key="twitter:title" name="twitter:title" content={TITULO} />
        <meta key="twitter:description" name="twitter:description" content={DESCRIPCION} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datos).replace(/</g, '\\u003c') }} />
      </Head>

      <header className="co-portada">
        <p className="co-etiqueta">Curso gratuito · Odoo 20</p>
        <h1>Aprende OWL en Odoo 20</h1>
        <p className="co-entrada">
          Odoo 20 usa OWL 3, y casi todo lo publicado sigue enseñando OWL 2. Este curso parte de cero con el código real de Odoo 20: {LECCIONES.length} lecciones, ejemplos instalables y un proyecto final.
        </p>
        <div className="co-acciones">
          <a className="co-boton" href={`#${LECCIONES[0].id}`}>
            Empezar el curso <Icon name="arrow" size={16} />
          </a>
          <a className="co-boton secundario" href={PDF_MANUAL} download>
            <Icon name="download" size={16} /> Descargar el manual en PDF
          </a>
          <a className="co-boton secundario" href={ZIP_MODULOS} download>
            <Icon name="box" size={16} /> Descargar los módulos
          </a>
        </div>
        <p className="co-probado">
          <Icon name="check" size={14} /> Ejemplos ejecutados en Odoo {VERSION_ODOO} con OWL {VERSION_OWL}
        </p>
      </header>

      <div className="co-cuerpo">
        <nav className="co-indice" aria-label="Lecciones">
          <p className="co-avance">
            <b>{progreso}%</b> {hechas.length} de {LECCIONES.length} lecciones
          </p>
          <div className="co-barra" role="progressbar" aria-valuenow={progreso} aria-valuemin={0} aria-valuemax={100} aria-label="Progreso del curso">
            <div style={{ width: `${progreso}%` }} />
          </div>
          <ol>
            {LECCIONES.map((l) => (
              <li key={l.id} className={hechas.includes(l.id) ? 'hecha' : ''}>
                <a href={`#${l.id}`}>{l.titulo}</a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="co-lecciones">
          {LECCIONES.map((l, i) => (
            <section key={l.id} id={l.id} className="co-leccion">
              <p className="co-numero">Lección {i + 1}</p>
              <h2>{l.titulo}</h2>
              <p className="co-resumen">{l.resumen}</p>
              {l.bloques.map((bloque, j) => (
                <Bloque key={j} bloque={bloque} archivos={archivos} />
              ))}
              <label className="co-hecha">
                <input type="checkbox" checked={hechas.includes(l.id)} onChange={() => alternar(l.id)} /> Lección terminada
              </label>
            </section>
          ))}
        </div>
      </div>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        .co {
          max-width: 1180px;
          margin: 0 auto;
          padding: 2.5rem 1.25rem 5rem;
          color: var(--text);
        }
        .co-portada {
          max-width: 760px;
          padding-bottom: 2.5rem;
        }
        .co-etiqueta,
        .co-numero {
          margin: 0;
          color: var(--accent-2);
          font-size: 0.75rem;
          font-variation-settings: 'wght' 650;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .co h1 {
          margin: 0.4rem 0 0.75rem;
          color: var(--text-strong);
          font-size: clamp(2.2rem, 6vw, 3.4rem);
          line-height: 1.05;
          letter-spacing: -0.03em;
        }
        .co-entrada {
          margin: 0 0 1.5rem;
          font-size: 1.15rem;
          line-height: 1.55;
        }
        .co-acciones {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }
        .co-boton {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          min-height: 44px;
          padding: 0 1.15rem;
          border: 1px solid transparent;
          border-radius: 999px;
          background: var(--accent);
          color: var(--on-accent);
          font-size: 0.92rem;
          font-variation-settings: 'wght' 650;
          text-decoration: none;
        }
        .co-boton:hover {
          background: var(--accent-hover);
        }
        .co-boton.secundario {
          border-color: var(--border);
          background: transparent;
          color: var(--text-strong);
        }
        .co-boton.secundario:hover {
          border-color: var(--accent-2);
        }
        .co-probado {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          margin: 1rem 0 0;
          color: var(--muted);
          font-size: 0.82rem;
        }

        .co-cuerpo {
          display: grid;
          grid-template-columns: 260px minmax(0, 1fr);
          gap: 3rem;
          align-items: start;
        }
        .co-indice {
          position: sticky;
          top: 84px;
          max-height: calc(100vh - 100px);
          overflow-y: auto;
          font-size: 0.86rem;
        }
        .co-avance {
          display: flex;
          align-items: baseline;
          gap: 0.45rem;
          margin: 0 0 0.35rem;
          color: var(--muted);
          font-size: 0.8rem;
        }
        .co-avance b {
          color: var(--text-strong);
          font-size: 1.1rem;
        }
        .co-barra {
          height: 6px;
          margin-bottom: 1rem;
          overflow: hidden;
          border-radius: 999px;
          background: var(--surface-2);
          box-shadow: inset 0 0 0 1px var(--border);
        }
        .co-barra div {
          height: 100%;
          border-radius: 999px;
          background: var(--accent-2);
          transition: width 0.3s ease;
        }
        .co-indice ol {
          display: grid;
          gap: 0.1rem;
          margin: 0;
          padding: 0 0 0 1.4rem;
          list-style: decimal;
        }
        .co-indice li {
          color: var(--muted);
        }
        .co-indice a {
          display: block;
          padding: 0.22rem 0;
          color: var(--text);
          line-height: 1.3;
          text-decoration: none;
        }
        .co-indice a:hover {
          color: var(--accent-2);
        }
        .co-indice li.hecha a {
          color: var(--muted);
          text-decoration: line-through;
        }

        .co-leccion {
          padding-bottom: 2.75rem;
          margin-bottom: 2.75rem;
          border-bottom: 1px solid var(--border);
          scroll-margin-top: 84px;
          font-size: 1rem;
          line-height: 1.65;
        }
        .co-leccion h2 {
          margin: 0.2rem 0 0.2rem;
          color: var(--text-strong);
          font-size: 1.7rem;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }
        .co-resumen {
          margin: 0 0 1.25rem;
          color: var(--muted);
        }
        .co-leccion p {
          margin: 0 0 1rem;
        }
        .co-leccion > ul {
          display: grid;
          gap: 0.35rem;
          margin: 0 0 1rem;
          padding-left: 1.25rem;
          list-style: disc;
        }
        .co-leccion a {
          color: var(--accent-2);
        }
        .co code {
          padding: 0.08rem 0.32rem;
          border-radius: 0.3rem;
          background: var(--surface-2);
          color: var(--text-strong);
          font-size: 0.86em;
        }
        .co-aviso {
          margin: 0 0 1rem;
          padding: 0.8rem 1rem;
          border-left: 3px solid var(--accent-2);
          border-radius: 0 0.55rem 0.55rem 0;
          background: var(--tint);
          font-size: 0.94rem;
        }
        .co-codigo {
          margin: 0 0 1rem;
          overflow: hidden;
          border: 1px solid var(--border);
          border-radius: 0.65rem;
          background: var(--surface);
        }
        .co-codigo figcaption {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          padding: 0.35rem 0.5rem 0.35rem 0.9rem;
          border-bottom: 1px solid var(--border);
          color: var(--muted);
          font-size: 0.76rem;
          word-break: break-all;
        }
        .co-copiar {
          flex-shrink: 0;
          padding: 0.15rem 0.55rem;
          border: 1px solid var(--border);
          border-radius: 0.4rem;
          background: transparent;
          color: var(--text);
          font: inherit;
          cursor: pointer;
        }
        .co-copiar:hover {
          border-color: var(--accent-2);
        }
        .co pre {
          margin: 0;
          padding: 0.85rem 1rem;
          overflow-x: auto;
          font-size: 0.82rem;
          line-height: 1.55;
        }
        .co pre code {
          padding: 0;
          background: none;
          font-size: inherit;
        }
        .co-tabla {
          margin: 0 0 1rem;
          overflow-x: auto;
        }
        .co-tabla table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.88rem;
        }
        .co-tabla th,
        .co-tabla td {
          padding: 0.5rem 0.65rem;
          border-bottom: 1px solid var(--border);
          text-align: left;
          vertical-align: top;
        }
        .co-tabla th {
          color: var(--muted);
          font-size: 0.75rem;
          font-variation-settings: 'wght' 650;
        }
        .co-ejercicio {
          margin: 0 0 1rem;
          padding: 0.9rem 1rem;
          border: 1px dashed var(--tint-border);
          border-radius: 0.65rem;
        }
        .co-ejercicio h3 {
          margin: 0 0 0.25rem;
          color: var(--text-strong);
          font-size: 0.95rem;
        }
        .co-ejercicio summary {
          color: var(--accent-2);
          font-size: 0.88rem;
          cursor: pointer;
        }
        .co-hecha {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          margin-top: 0.5rem;
          color: var(--text-strong);
          font-size: 0.9rem;
          cursor: pointer;
        }
        @media (max-width: 900px) {
          .co-cuerpo {
            grid-template-columns: minmax(0, 1fr);
            gap: 2rem;
          }
          .co-indice {
            position: static;
            max-height: none;
          }
        }
      `}</style>
    </main>
  )
}
