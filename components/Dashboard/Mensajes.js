import React, { useEffect, useState } from 'react'
import Icon from '../Icon'
import { api } from './api'
import { formatoFecha, formatoHora } from '../../lib/calendario/zona'

const LOCALE = 'es-ES'

// Mensajes del formulario de /contacto
export default function Mensajes({ zona }) {
  const [mensajes, setMensajes] = useState(null)
  const [error, setError] = useState('')

  const cargar = () =>
    api('mensajes')
      .then(setMensajes)
      .catch((e) => setError(e.message))
  useEffect(() => {
    cargar()
  }, [])

  const marcar = async (m) => {
    try {
      await api('mensajes', { method: 'PATCH', id: m.id, body: { read: !m.read } })
      await cargar()
    } catch (e) {
      setError(e.message)
    }
  }

  const borrar = async (m) => {
    if (!window.confirm(`¿Borrar el mensaje de ${m.name}?`)) return
    try {
      await api('mensajes', { method: 'DELETE', id: m.id })
      await cargar()
    } catch (e) {
      setError(e.message)
    }
  }

  const sinLeer = mensajes?.filter((m) => !m.read).length || 0

  return (
    <>
      <div className="db-head">
        <div>
          <h2>Mensajes de contacto</h2>
          <p className="db-muted">Lo que llega desde /contacto{sinLeer ? ` · ${sinLeer} sin leer` : ''}. También te avisa por Telegram si está configurado.</p>
        </div>
      </div>
      {error && <p className="db-error">{error}</p>}
      {!mensajes && !error && <p className="db-muted">Cargando…</p>}
      {mensajes && !mensajes.length && <div className="db-empty">Todavía no hay mensajes.</div>}
      <div className="db-stack">
        {mensajes?.map((m) => (
          <article key={m.id} className={`db-card ms-item${m.read ? ' leido' : ''}`}>
            <div className="ms-cab">
              <div>
                <b>{m.name}</b>
                {m.company && <span className="db-muted"> · {m.company}</span>} {m.topic && <span className="db-tag">{m.topic}</span>}
                <div className="db-muted">
                  {formatoFecha(m.created_at, zona, LOCALE, { day: 'numeric', month: 'short', year: 'numeric' })}, {formatoHora(m.created_at, zona, LOCALE)}
                  {' · '}
                  <a href={`mailto:${m.email}`}>{m.email}</a>
                  {m.phone && (
                    <>
                      {' · '}
                      <a href={`https://wa.me/${m.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer">
                        {m.phone}
                      </a>
                    </>
                  )}
                </div>
              </div>
              <div className="db-row">
                <button type="button" className="db-btn ghost" onClick={() => marcar(m)}>
                  {m.read ? 'Marcar sin leer' : 'Marcar leído'}
                </button>
                <button type="button" className="db-btn ghost icon" onClick={() => borrar(m)} aria-label={`Borrar el mensaje de ${m.name}`}>
                  <Icon name="trash" size={16} />
                </button>
              </div>
            </div>
            <p className="ms-texto">{m.message}</p>
          </article>
        ))}
      </div>
      <style jsx global>{`
        .ms-item {
          border-left: 3px solid var(--accent-2);
        }
        .ms-item.leido {
          border-left-color: var(--border);
          opacity: 0.8;
        }
        .ms-cab {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.75rem;
        }
        .ms-texto {
          margin: 0.75rem 0 0;
          white-space: pre-wrap;
          font-size: 0.92rem;
        }
      `}</style>
    </>
  )
}
