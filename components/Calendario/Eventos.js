import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Icon from '../Icon'
import Marco from './Marco'
import useTextos from './textos'

// /calendario: tipos de reunión que se pueden reservar
export default function Eventos() {
  const t = useTextos()
  const [eventos, setEventos] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('/api/calendario/eventos')
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((json) => setEventos(json.eventos))
      .catch(() => setError(true))
  }, [])

  return (
    <Marco titulo={t.tituloPagina} descripcion={t.descripcionPagina}>
      <header className="ce-head">
        <img className="ce-avatar" src="/images/avatar.png" alt="" width={64} height={64} />
        <div>
          <p className="ce-owner">{t.propietario}</p>
          <h1 className="cal-title">{t.h1}</h1>
          <p className="cal-lede">{t.lede}</p>
        </div>
      </header>

      {error && <p className="cal-error">{t.errorCarga}</p>}
      {!eventos && !error && <p className="cal-lede">{t.cargando}</p>}
      {eventos && !eventos.length && <div className="cal-empty">{t.sinEventos}</div>}

      {eventos && eventos.length > 0 && (
        <div className="ce-grid">
          {eventos.map((e) => (
            <Link key={e.slug} href={`/calendario/${e.slug}`}>
              <a className="ce-card">
                <span className="ce-dot" aria-hidden="true" />
                <h2>{e.titulo[t.lang]}</h2>
                <ul className="cal-meta">
                  <li>
                    <Icon name="clock" size={15} /> {t.min(e.duracion)}
                  </li>
                  {e.lugar[t.lang] && (
                    <li>
                      <Icon name="pin" size={15} /> {e.lugar[t.lang]}
                    </li>
                  )}
                </ul>
                {e.descripcion[t.lang] && <p>{e.descripcion[t.lang]}</p>}
                <span className="ce-go">
                  {t.elegir} <Icon name="arrow" size={16} />
                </span>
              </a>
            </Link>
          ))}
        </div>
      )}

      <style jsx global>{`
        .ce-head {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          margin-bottom: 2.25rem;
        }
        .ce-avatar {
          flex-shrink: 0;
          width: 64px;
          height: 64px;
          margin: 0.3rem 0 0;
          border-radius: 50%;
          box-shadow: 0 0 0 3px var(--bg), 0 0 0 5px var(--p-blue);
        }
        .ce-owner {
          margin: 0 0 0.25rem;
          color: var(--muted);
          font-size: 0.85rem;
        }
        .ce-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1rem;
        }
        .ce-card {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          padding: 1.4rem 1.4rem 1.2rem;
          border: 1px solid var(--border);
          border-radius: 1rem;
          background: var(--surface);
          color: var(--text);
          transition: border-color 0.15s, transform 0.15s;
        }
        .ce-card:hover {
          border-color: var(--accent-2);
          transform: translateY(-2px);
        }
        .ce-dot {
          width: 14px;
          height: 14px;
          margin-bottom: 0.5rem;
          border-radius: 50%;
          background: var(--p-blue);
        }
        .ce-card h2 {
          margin: 0;
          font-size: 1.2rem;
          color: var(--text-strong);
          letter-spacing: -0.01em;
        }
        .ce-card p {
          margin: 0.75rem 0 0;
          font-size: 0.92rem;
          color: var(--muted);
        }
        .ce-go {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          margin-top: auto;
          padding-top: 1rem;
          color: var(--accent-2);
          font-size: 0.9rem;
          font-variation-settings: 'wght' 600;
        }
        @media (max-width: 560px) {
          .ce-avatar {
            display: none;
          }
        }
      `}</style>
    </Marco>
  )
}
