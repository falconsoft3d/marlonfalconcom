import React, { useEffect, useState } from 'react'
import Icon from '../Icon'
import { api } from './api'
import { aUtc, claveDia, formatoFecha, formatoHora } from '../../lib/calendario/zona'

const LOCALE = 'es-ES'

const VACIO = { title: '', desde: '', horaDesde: '09:00', hasta: '', horaHasta: '14:00', diaCompleto: true }

const fechaYHora = (fecha, hora, zona) => {
  const [y, m, d] = fecha.split('-').map(Number)
  const [h, min] = hora.split(':').map(Number)
  return aUtc(y, m, d, h, min, zona)
}

// Horas o días en los que no trabajo: vacaciones, médico, festivos… No se pueden reservar.
export default function Bloqueos({ zona }) {
  const [bloqueos, setBloqueos] = useState(null)
  const [form, setForm] = useState(VACIO)
  const [error, setError] = useState('')
  const [guardando, setGuardando] = useState(false)

  const cargar = () =>
    api('bloqueos')
      .then(setBloqueos)
      .catch((e) => setError(e.message))
  useEffect(() => {
    cargar()
  }, [])

  const crear = async (e) => {
    e.preventDefault()
    setError('')
    const hasta = form.hasta || form.desde
    // Día completo: desde las 00:00 del primer día hasta las 00:00 del día siguiente al último
    const inicio = form.diaCompleto ? fechaYHora(form.desde, '00:00', zona) : fechaYHora(form.desde, form.horaDesde, zona)
    const fin = form.diaCompleto ? fechaYHora(hasta, '24:00', zona) : fechaYHora(hasta, form.horaHasta, zona)
    setGuardando(true)
    try {
      await api('bloqueos', { method: 'POST', body: { title: form.title, starts_at: inicio.toISOString(), ends_at: fin.toISOString() } })
      setForm(VACIO)
      await cargar()
    } catch (err) {
      setError(err.message)
    }
    setGuardando(false)
  }

  const quitar = async (b) => {
    if (!window.confirm(`¿Quitar “${b.title || 'No trabajo'}”?`)) return
    try {
      await api('bloqueos', { method: 'DELETE', id: b.id })
      await cargar()
    } catch (e) {
      setError(e.message)
    }
  }

  const describir = (b) => {
    const inicio = Date.parse(b.starts_at)
    const fin = Date.parse(b.ends_at)
    const corto = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }
    const medianoche = (t) => formatoHora(t, zona, LOCALE) === '00:00'
    if (medianoche(inicio) && medianoche(fin)) {
      const ultimo = fin - 1
      return claveDia(inicio, zona) === claveDia(ultimo, zona)
        ? `${formatoFecha(inicio, zona, LOCALE, corto)} · todo el día`
        : `${formatoFecha(inicio, zona, LOCALE, corto)} → ${formatoFecha(ultimo, zona, LOCALE, corto)} · días completos`
    }
    const mismoDia = claveDia(inicio, zona) === claveDia(fin, zona)
    return mismoDia
      ? `${formatoFecha(inicio, zona, LOCALE, corto)} · ${formatoHora(inicio, zona, LOCALE)}–${formatoHora(fin, zona, LOCALE)}`
      : `${formatoFecha(inicio, zona, LOCALE, corto)} ${formatoHora(inicio, zona, LOCALE)} → ${formatoFecha(fin, zona, LOCALE, corto)} ${formatoHora(fin, zona, LOCALE)}`
  }

  return (
    <>
      <div className="db-head">
        <div>
          <h2>Horas que no trabajo</h2>
          <p className="db-muted">
            Bloquea días u horas sueltas (vacaciones, festivos, médico…). Para descansos fijos de cada semana usa la pestaña Horario. Horas en {zona}.
          </p>
        </div>
      </div>

      <form className="db-card db-stack" onSubmit={crear}>
        <h3>Nuevo bloqueo</h3>
        <div className="db-row">
          <label className="db-field" style={{ flex: '1 1 220px' }}>
            Motivo (solo lo ves tú)
            <input value={form.title} placeholder="Vacaciones, médico…" onChange={(e) => setForm({ ...form, title: e.target.value })} />
          </label>
          <label className="db-check" style={{ minHeight: 38 }}>
            <input type="checkbox" checked={form.diaCompleto} onChange={(e) => setForm({ ...form, diaCompleto: e.target.checked })} /> Días completos
          </label>
        </div>
        <div className="db-row">
          <label className="db-field">
            Desde
            <input type="date" required value={form.desde} onChange={(e) => setForm({ ...form, desde: e.target.value })} />
          </label>
          {!form.diaCompleto && (
            <label className="db-field">
              Hora
              <input type="time" required value={form.horaDesde} onChange={(e) => setForm({ ...form, horaDesde: e.target.value })} />
            </label>
          )}
          <label className="db-field">
            Hasta {form.diaCompleto && <small>(vacío = un solo día)</small>}
            <input type="date" required={!form.diaCompleto} min={form.desde} value={form.hasta} onChange={(e) => setForm({ ...form, hasta: e.target.value })} />
          </label>
          {!form.diaCompleto && (
            <label className="db-field">
              Hora
              <input type="time" required value={form.horaHasta} onChange={(e) => setForm({ ...form, horaHasta: e.target.value })} />
            </label>
          )}
          <button type="submit" className="db-btn" disabled={guardando || !form.desde}>
            <Icon name="plus" size={16} /> {guardando ? 'Guardando…' : 'Bloquear'}
          </button>
        </div>
      </form>

      {error && <p className="db-error">{error}</p>}

      <h3 style={{ marginTop: '1.75rem' }}>Próximos bloqueos</h3>
      {!bloqueos && !error && <p className="db-muted">Cargando…</p>}
      {bloqueos && !bloqueos.length && <div className="db-empty">No hay bloqueos. Trabajas según tu horario semanal.</div>}
      {bloqueos && bloqueos.length > 0 && (
        <div className="db-stack">
          {bloqueos.map((b) => (
            <div key={b.id} className="db-card bl-item">
              <div>
                <b>{b.title || 'No trabajo'}</b>
                <div className="db-muted">{describir(b)}</div>
              </div>
              <button type="button" className="db-btn ghost icon" onClick={() => quitar(b)} aria-label="Quitar bloqueo">
                <Icon name="trash" size={16} />
              </button>
            </div>
          ))}
        </div>
      )}

      <style jsx global>{`
        .bl-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.9rem 1.1rem;
        }
      `}</style>
    </>
  )
}
