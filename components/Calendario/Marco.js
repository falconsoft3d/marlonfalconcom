import React, { useEffect } from 'react'
import Head from 'next/head'
import useTextos, { IDIOMAS_CALENDARIO, useIdiomaCalendario } from './textos'

// ES · EN · CA · RU
function SelectorIdioma() {
  const { lang, cambiar } = useIdiomaCalendario()
  const t = useTextos()

  // Catalán y ruso no los gestiona IdiomaProvider: <html lang> se ajusta aquí mientras se ve el calendario
  useEffect(() => {
    if (lang !== 'ca' && lang !== 'ru') return
    const html = document.documentElement
    const anterior = html.lang
    html.lang = lang
    return () => {
      html.lang = anterior
    }
  }, [lang])

  return (
    <div className="cal-idiomas" role="group" aria-label={t.idioma}>
      {IDIOMAS_CALENDARIO.map(([codigo, corto, nombre]) => (
        <button
          key={codigo}
          type="button"
          lang={codigo}
          className={lang === codigo ? 'on' : ''}
          aria-pressed={lang === codigo}
          title={nombre}
          onClick={() => cambiar(codigo)}
        >
          {corto}
        </button>
      ))}
    </div>
  )
}

// Estructura y estilos comunes de las páginas de /calendario
export default function Marco({ titulo, descripcion, noIndex, arriba, children }) {
  return (
    <div className="cal">
      <Head>
        <title>{titulo}</title>
        {descripcion && <meta name="description" content={descripcion} />}
        {noIndex && <meta name="robots" content="noindex, nofollow" />}
      </Head>

      <div className="cal-top">
        <div>{arriba}</div>
        <SelectorIdioma />
      </div>

      {children}

      <style jsx global>{`
        .cal {
          max-width: 1080px;
          margin: 0 auto;
          padding: 2rem 1.25rem 5rem;
          color: var(--text);
        }
        .cal a {
          text-decoration: none;
        }
        .cal-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }
        .cal-idiomas {
          display: inline-flex;
          padding: 3px;
          border: 1px solid var(--border);
          border-radius: 999px;
          background: var(--surface);
        }
        .cal-idiomas button {
          min-width: 38px;
          height: 30px;
          padding: 0 0.6rem;
          border: 0;
          border-radius: 999px;
          background: transparent;
          color: var(--muted);
          font: inherit;
          font-size: 0.75rem;
          letter-spacing: 0.04em;
          font-variation-settings: 'wght' 650;
          cursor: pointer;
        }
        .cal-idiomas button:hover {
          color: var(--text-strong);
        }
        .cal-idiomas button.on {
          background: var(--accent);
          color: var(--on-accent);
        }
        .cal-sr {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip: rect(0 0 0 0);
          white-space: nowrap;
        }
        .cal-title {
          margin: 0 0 0.5rem;
          font-size: clamp(1.9rem, 4vw, 2.6rem);
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: var(--text-strong);
        }
        .cal-lede {
          max-width: 640px;
          margin: 0;
          color: var(--muted);
        }
        .cal-empty {
          padding: 3rem 1.5rem;
          border: 1px dashed var(--border);
          border-radius: 1rem;
          text-align: center;
          color: var(--muted);
        }
        .cal-error {
          margin: 0.75rem 0 0;
          padding: 0.75rem 1rem;
          border-radius: 0.6rem;
          background: rgba(220, 90, 90, 0.12);
          color: #c0392b;
          font-size: 0.9rem;
        }
        html.dark .cal-error {
          color: #f2a39b;
        }

        .cal-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          min-height: 44px;
          padding: 0 1.25rem;
          border: 1px solid transparent;
          border-radius: 999px;
          background: var(--accent);
          color: var(--on-accent);
          font: inherit;
          font-size: 0.92rem;
          font-variation-settings: 'wght' 650;
          cursor: pointer;
          transition: background-color 0.15s, border-color 0.15s, opacity 0.15s;
        }
        .cal-btn:hover {
          background: var(--accent-hover);
        }
        .cal-btn:disabled {
          opacity: 0.55;
          cursor: not-allowed;
        }
        .cal-btn.ghost {
          background: transparent;
          border-color: var(--border);
          color: var(--text-strong);
        }
        .cal-btn.ghost:hover {
          border-color: var(--accent-2);
        }
        .cal-btn.danger {
          background: transparent;
          border-color: rgba(220, 90, 90, 0.45);
          color: #c0392b;
        }
        html.dark .cal-btn.danger {
          color: #f2a39b;
        }

        .cal-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem 1rem;
          margin: 0.6rem 0 0;
          padding: 0;
          list-style: none;
          color: var(--muted);
          font-size: 0.9rem;
        }
        .cal-meta li {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          margin: 0;
        }

        .cal-chip {
          padding: 0.35rem 0.8rem;
          border: 1px solid var(--border);
          border-radius: 999px;
          background: transparent;
          color: var(--text);
          font: inherit;
          font-size: 0.8rem;
          cursor: pointer;
          transition: border-color 0.15s, background-color 0.15s;
        }
        .cal-chip:hover {
          border-color: var(--accent-2);
        }
        .cal-chip.on {
          background: var(--tint);
          border-color: var(--tint-border);
          color: var(--accent-2);
          font-variation-settings: 'wght' 600;
        }

        .cal-zona {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .cal-zona-select {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--muted);
        }
        .cal-zona-select select {
          flex: 1;
          min-width: 0;
          height: 38px;
          padding: 0 0.6rem;
          border: 1px solid var(--border);
          border-radius: 0.6rem;
          background: var(--surface-2);
          color: var(--text-strong);
          font: inherit;
          font-size: 0.85rem;
        }
        .cal-zona-atajos {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .cal-field {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          font-size: 0.85rem;
          color: var(--text-strong);
          font-variation-settings: 'wght' 600;
        }
        .cal-field input,
        .cal-field textarea {
          padding: 0.7rem 0.85rem;
          border: 1px solid var(--border);
          border-radius: 0.6rem;
          background: var(--surface-2);
          color: var(--text-strong);
          font: inherit;
          font-size: 0.95rem;
          font-variation-settings: 'wght' 450;
        }
        .cal-field input:focus,
        .cal-field textarea:focus {
          outline: 2px solid var(--tint-border);
          border-color: var(--accent-2);
        }
      `}</style>
    </div>
  )
}
