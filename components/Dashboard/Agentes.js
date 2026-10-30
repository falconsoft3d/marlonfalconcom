import React, { useEffect, useState } from 'react'
import Icon from '../Icon'
import { api } from './api'
import { Copiar, Guia } from '../Agentes'
import { instrucciones, urlSala } from '../Agentes/instrucciones'
import { formatoFecha, formatoHora } from '../../lib/calendario/zona'

const LOCALE = 'es-ES'

// Salas de la Torre de control: cada una genera la URL con token que se le pasa a Claude
export default function Agentes({ zona }) {
  const [salas, setSalas] = useState(null)
  const [titulo, setTitulo] = useState('')
  const [origen, setOrigen] = useState('')
  const [error, setError] = useState('')

  const cargar = () =>
    api('salas')
      .then(setSalas)
      .catch((e) => setError(e.message))

  useEffect(() => {
    setOrigen(window.location.origin)
    cargar()
  }, [])

  const ejecutar = async (accion) => {
    setError('')
    try {
      await accion()
      await cargar()
    } catch (e) {
      setError(e.message)
    }
  }

  const crearSala = (e) => {
    e.preventDefault()
    ejecutar(async () => {
      await api('salas', { method: 'POST', body: { title: titulo } })
      setTitulo('')
    })
  }

  const borrar = (s) => {
    if (!window.confirm(`¿Borrar «${s.title}» y todos sus agentes? La URL dejará de funcionar.`)) return
    ejecutar(() => api('salas', { method: 'DELETE', id: s.id }))
  }

  return (
    <>
      <div className="db-head">
        <div>
          <h2>Torre de control</h2>
          <p className="db-muted">Crea una sala, pásale su URL a Claude y sigue aquí o en Chrome qué hace cada agente.</p>
        </div>
      </div>

      <form className="db-row ag-nueva" onSubmit={crearSala}>
        <label className="db-field">
          Nombre de la sala
          <input value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Migración de la tienda" maxLength={120} />
        </label>
        <button className="db-btn" type="submit" disabled={!titulo.trim()}>
          <Icon name="plus" size={16} /> Crear URL con token
        </button>
      </form>

      {error && <p className="db-error">{error}</p>}
      {!salas && !error && <p className="db-muted">Cargando…</p>}
      {salas && !salas.length && <div className="db-empty">Todavía no hay salas.</div>}

      <div className="db-stack">
        {salas?.map((s) => (
          <article key={s.id} className="db-card">
            <div className="ag-sala">
              <div>
                <b>{s.title}</b> <span className={`db-tag${s.active ? '' : ' off'}`}>{s.active ? 'Abierta' : 'Cerrada'}</span>
                <div className="db-muted">
                  {s.last_report_at
                    ? `Último informe: ${formatoFecha(s.last_report_at, zona, LOCALE, { day: 'numeric', month: 'short' })}, ${formatoHora(s.last_report_at, zona, LOCALE)}`
                    : 'Sin informes todavía'}
                </div>
                {s.active && <code>{urlSala(origen, s.token)}</code>}
              </div>
              <div className="db-row">
                {s.active && (
                  <>
                    <a className="db-btn ghost" href={urlSala(origen, s.token)} target="_blank" rel="noopener noreferrer">
                      <Icon name="external" size={15} /> Abrir
                    </a>
                    <Copiar className="db-btn ghost" texto={urlSala(origen, s.token)}>
                      Copiar URL
                    </Copiar>
                    <Copiar className="db-btn" texto={instrucciones(origen, s.token)}>
                      Copiar para Claude
                    </Copiar>
                  </>
                )}
                <button type="button" className="db-btn ghost" onClick={() => ejecutar(() => api('salas', { method: 'PATCH', id: s.id, body: { active: !s.active } }))}>
                  {s.active ? 'Cerrar' : 'Reabrir'}
                </button>
                <button type="button" className="db-btn ghost icon" onClick={() => borrar(s)} aria-label={`Borrar ${s.title}`}>
                  <Icon name="trash" size={16} />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {origen && (
        <section className="ag-doc">
          <h2>Documentación</h2>
          <Guia origen={origen} />
        </section>
      )}

      <style jsx global>{`
        .ag-nueva {
          margin-bottom: 1.25rem;
        }
        .ag-nueva .db-field {
          flex: 1 1 260px;
        }
        .ag-sala {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.75rem;
        }
        .ag-sala > div:first-child {
          flex: 1 1 280px;
          min-width: 0;
        }
        .ag-sala code {
          display: inline-block;
          margin-top: 0.35rem;
        }
        .ag-doc {
          margin-top: 2.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border);
        }
        .ag-doc h2 {
          margin-bottom: 1rem;
        }
      `}</style>
    </>
  )
}
