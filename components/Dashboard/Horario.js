import React, { useEffect, useMemo, useState } from 'react'
import Icon from '../Icon'
import { api } from './api'
import { etiquetaDesfase, listaZonas } from '../../lib/calendario/zona'

// Lunes primero; los números son los de Date.getDay()
const DIAS = [
  [1, 'Lunes'],
  [2, 'Martes'],
  [3, 'Miércoles'],
  [4, 'Jueves'],
  [5, 'Viernes'],
  [6, 'Sábado'],
  [0, 'Domingo']
]

const AJUSTES = [
  ['min_notice_hours', 'Antelación mínima', 'horas', 'No se puede reservar con menos antelación.'],
  ['max_days_ahead', 'Reservas hasta', 'días', 'Cuántos días hacia delante se muestran.'],
  ['buffer_minutes', 'Margen entre reuniones', 'min', 'Tiempo libre antes y después de cada evento ocupado.'],
  ['slot_step_minutes', 'Intervalo de los huecos', 'min', 'Cada cuánto empieza un hueco: 30 = 9:00, 9:30, 10:00…']
]

// Horario semanal de trabajo (las horas fuera de él no se pueden reservar) y reglas de reserva
export default function Horario({ ajustes, cargarAjustes }) {
  const [form, setForm] = useState(null)
  const [estado, setEstado] = useState('')
  const [error, setError] = useState('')
  const zonas = useMemo(() => listaZonas(), [])

  useEffect(() => {
    if (ajustes) setForm({ ...ajustes, weekly_hours: ajustes.weekly_hours || {} })
    else setForm({ timezone: 'Europe/Madrid', weekly_hours: {}, min_notice_hours: 12, max_days_ahead: 60, buffer_minutes: 0, slot_step_minutes: 30 })
  }, [ajustes])

  if (!form) return <p className="db-muted">Cargando…</p>

  const tramos = (dia) => form.weekly_hours[dia] || []
  const setTramos = (dia, lista) => {
    setForm({ ...form, weekly_hours: { ...form.weekly_hours, [dia]: lista } })
    setEstado('')
  }
  const cambiar = (campo, valor) => {
    setForm({ ...form, [campo]: valor })
    setEstado('')
  }

  const guardar = async () => {
    setError('')
    setEstado('guardando')
    const cuerpo = { timezone: form.timezone, weekly_hours: form.weekly_hours }
    for (const [campo] of AJUSTES) cuerpo[campo] = Number(form[campo])
    try {
      if (ajustes?.id) await api('ajustes', { method: 'PATCH', id: ajustes.id, body: cuerpo })
      else await api('ajustes', { method: 'POST', body: cuerpo })
      await cargarAjustes()
      setEstado('guardado')
    } catch (e) {
      setError(e.message)
      setEstado('')
    }
  }

  return (
    <>
      <div className="db-head">
        <div>
          <h2>Horario de trabajo</h2>
          <p className="db-muted">Las horas fuera de estos tramos no aparecen en /calendario. Añade varios tramos para descansos (p. ej. comida).</p>
        </div>
        <div className="db-row">
          {estado === 'guardado' && <span className="db-ok">Guardado</span>}
          <button type="button" className="db-btn" onClick={guardar} disabled={estado === 'guardando'}>
            {estado === 'guardando' ? 'Guardando…' : 'Guardar cambios'}
          </button>
        </div>
      </div>
      {error && <p className="db-error">{error}</p>}

      <div className="db-card db-stack">
        {DIAS.map(([dia, nombre]) => {
          const lista = tramos(dia)
          return (
            <div key={dia} className="ho-dia">
              <label className="db-check ho-nombre">
                <input type="checkbox" checked={lista.length > 0} onChange={(e) => setTramos(dia, e.target.checked ? [['09:00', '14:00']] : [])} />
                {nombre}
              </label>
              <div className="ho-tramos">
                {!lista.length && <span className="db-muted">No disponible</span>}
                {lista.map(([a, b], i) => (
                  <div key={i} className="ho-tramo">
                    <input type="time" value={a} aria-label={`${nombre}: desde`} onChange={(e) => setTramos(dia, lista.map((t, j) => (j === i ? [e.target.value, t[1]] : t)))} />
                    <span>–</span>
                    <input type="time" value={b} aria-label={`${nombre}: hasta`} onChange={(e) => setTramos(dia, lista.map((t, j) => (j === i ? [t[0], e.target.value] : t)))} />
                    <button type="button" className="db-btn ghost icon" aria-label="Quitar tramo" onClick={() => setTramos(dia, lista.filter((_, j) => j !== i))}>
                      <Icon name="trash" size={15} />
                    </button>
                  </div>
                ))}
              </div>
              <div className="ho-extra">
                <button
                  type="button"
                  className="db-btn ghost icon"
                  aria-label={`Añadir tramo el ${nombre}`}
                  title="Añadir tramo"
                  onClick={() => setTramos(dia, [...lista, lista.length ? ['16:00', '19:00'] : ['09:00', '14:00']])}
                >
                  <Icon name="plus" size={16} />
                </button>
                {lista.length > 0 && (
                  <button
                    type="button"
                    className="db-btn ghost"
                    title="Copiar este horario al resto de días laborables"
                    onClick={() => {
                      const semana = { ...form.weekly_hours }
                      for (const d of [1, 2, 3, 4, 5]) semana[d] = lista.map((t) => [...t])
                      setForm({ ...form, weekly_hours: semana })
                      setEstado('')
                    }}
                  >
                    Copiar a L–V
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </div>

      <h2 style={{ marginTop: '2rem' }}>Reglas de reserva</h2>
      <div className="db-card db-grid2" style={{ marginTop: '0.75rem' }}>
        <label className="db-field">
          Zona horaria del horario
          <select value={form.timezone} onChange={(e) => cambiar('timezone', e.target.value)}>
            {zonas.map((z) => (
              <option key={z} value={z}>
                {z} ({etiquetaDesfase(z)})
              </option>
            ))}
          </select>
          <small>Los tramos de arriba están en esta zona. Normalmente Europe/Madrid.</small>
        </label>
        {AJUSTES.map(([campo, etiqueta, unidad, ayuda]) => (
          <label key={campo} className="db-field">
            {etiqueta} ({unidad})
            <input type="number" min="0" value={form[campo]} onChange={(e) => cambiar(campo, e.target.value)} />
            <small>{ayuda}</small>
          </label>
        ))}
      </div>

      <style jsx global>{`
        .ho-dia {
          display: grid;
          grid-template-columns: 130px 1fr auto;
          align-items: flex-start;
          gap: 1rem;
          padding: 0.5rem 0;
          border-bottom: 1px solid var(--border);
        }
        .ho-dia:last-child {
          border-bottom: 0;
        }
        .ho-nombre {
          min-height: 38px;
          font-variation-settings: 'wght' 600;
        }
        .ho-tramos {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          min-height: 38px;
          justify-content: center;
        }
        .ho-tramo {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .ho-extra {
          display: flex;
          gap: 0.4rem;
        }
        @media (max-width: 640px) {
          .ho-dia {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }
        }
      `}</style>
    </>
  )
}
