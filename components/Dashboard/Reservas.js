import React, { useEffect, useState } from 'react'
import { api } from './api'
import { formatoFecha, formatoHora } from '../../lib/calendario/zona'

const LOCALE = 'es-ES'

// Próximas reservas (o las pasadas) con opción de cancelarlas
export default function Reservas({ zona }) {
  const [pasadas, setPasadas] = useState(false)
  const [reservas, setReservas] = useState(null)
  const [error, setError] = useState('')

  const cargar = () => {
    setReservas(null)
    api('reservas', { query: pasadas ? { pasadas: '1' } : {} })
      .then(setReservas)
      .catch((e) => setError(e.message))
  }
  useEffect(cargar, [pasadas])

  const cambiarEstado = async (r, status) => {
    if (status === 'cancelled' && !window.confirm(`¿Cancelar la reunión con ${r.name}? No se le avisa automáticamente.`)) return
    try {
      await api('reservas', { method: 'PATCH', id: r.id, body: { status } })
      cargar()
    } catch (e) {
      setError(e.message)
    }
  }

  return (
    <>
      <div className="db-head">
        <div>
          <h2>{pasadas ? 'Reservas pasadas' : 'Próximas reservas'}</h2>
          <p className="db-muted">Horas en {zona}. La hora del invitado aparece si está en otra zona.</p>
        </div>
        <label className="db-check">
          <input type="checkbox" checked={pasadas} onChange={(e) => setPasadas(e.target.checked)} /> Ver pasadas
        </label>
      </div>

      {error && <p className="db-error">{error}</p>}
      {!reservas && !error && <p className="db-muted">Cargando…</p>}
      {reservas && !reservas.length && <div className="db-empty">No hay reservas.</div>}

      {reservas && reservas.length > 0 && (
        <div className="db-scroll">
          <table className="db-table">
            <thead>
              <tr>
                <th>Cuándo</th>
                <th>Reunión</th>
                <th>Invitado</th>
                <th>Notas</th>
                <th>Estado</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {reservas.map((r) => (
                <tr key={r.id}>
                  <td>
                    <b>{formatoFecha(r.starts_at, zona, LOCALE, { weekday: 'short', day: 'numeric', month: 'short' })}</b>
                    <br />
                    {formatoHora(r.starts_at, zona, LOCALE)}–{formatoHora(r.ends_at, zona, LOCALE)}
                    {r.guest_timezone && r.guest_timezone !== zona && (
                      <div className="db-muted">
                        {formatoHora(r.starts_at, r.guest_timezone, LOCALE)} en {r.guest_timezone}
                      </div>
                    )}
                  </td>
                  <td>{r.event_title}</td>
                  <td>
                    {r.name}
                    <br />
                    <a href={`mailto:${r.email}`}>{r.email}</a>
                    {r.phone && (
                      <div>
                        <a href={`https://wa.me/${r.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer">
                          {r.phone}
                        </a>
                      </div>
                    )}
                  </td>
                  <td style={{ maxWidth: 280, whiteSpace: 'pre-wrap' }}>{r.notes || '—'}</td>
                  <td>
                    <span className={`db-tag${r.status === 'cancelled' ? ' off' : ''}`}>{r.status === 'cancelled' ? 'Cancelada' : 'Confirmada'}</span>
                  </td>
                  <td>
                    {!pasadas &&
                      (r.status === 'confirmed' ? (
                        <button type="button" className="db-btn danger" onClick={() => cambiarEstado(r, 'cancelled')}>
                          Cancelar
                        </button>
                      ) : (
                        <button type="button" className="db-btn ghost" onClick={() => cambiarEstado(r, 'confirmed')}>
                          Reactivar
                        </button>
                      ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  )
}
