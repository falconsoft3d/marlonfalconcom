import React, { useEffect, useMemo, useState } from 'react'
import Icon from '../Icon'
import { api } from './api'
import { aUtc, formatoHora, partes } from '../../lib/calendario/zona'

const LOCALE = 'es-ES'
const PX_MIN = 0.8
const DIAS = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom']
const COLORES = { reserva: 'var(--p-green)', bloqueo: 'var(--p-gray)' }

function lunesDe(fecha, zona) {
  const p = partes(fecha, zona)
  const d = new Date(Date.UTC(p.y, p.m - 1, p.d - ((p.dia + 6) % 7)))
  return { y: d.getUTCFullYear(), m: d.getUTCMonth() + 1, d: d.getUTCDate() }
}

const sumarDias = ({ y, m, d }, n) => {
  const f = new Date(Date.UTC(y, m - 1, d + n))
  return { y: f.getUTCFullYear(), m: f.getUTCMonth() + 1, d: f.getUTCDate() }
}

const minutos = (hhmm) => {
  const [h, m] = hhmm.split(':').map(Number)
  return h * 60 + m
}

// Semana con todo lo que ocupa tiempo: reservas, bloqueos y cada calendario conectado
export default function Ocupado({ zona }) {
  const [lunes, setLunes] = useState(() => lunesDe(Date.now(), zona))
  const [datos, setDatos] = useState(null)
  const [error, setError] = useState('')
  const [forzar, setForzar] = useState(0)

  useEffect(() => setLunes(lunesDe(Date.now(), zona)), [zona])

  useEffect(() => {
    let vigente = true
    setDatos(null)
    setError('')
    const desde = aUtc(lunes.y, lunes.m, lunes.d, 0, 0, zona).toISOString()
    const fin = sumarDias(lunes, 7)
    const hasta = aUtc(fin.y, fin.m, fin.d, 0, 0, zona).toISOString()
    api('ocupado', { query: { desde, hasta, ...(forzar ? { forzar: '1' } : {}) } })
      .then((d) => vigente && setDatos(d))
      .catch((e) => vigente && setError(e.message))
    return () => {
      vigente = false
    }
  }, [lunes, zona, forzar])

  const dias = useMemo(
    () =>
      Array.from({ length: 7 }, (_, i) => {
        const dia = sumarDias(lunes, i)
        const sig = sumarDias(dia, 1)
        return { ...dia, inicio: aUtc(dia.y, dia.m, dia.d, 0, 0, zona).getTime(), fin: aUtc(sig.y, sig.m, sig.d, 0, 0, zona).getTime(), semana: i }
      }),
    [lunes, zona]
  )

  // Rango de horas visible: el horario de trabajo con margen, ampliado si hay eventos fuera
  const [horaIni, horaFin] = useMemo(() => {
    let ini = 8 * 60
    let fin = 20 * 60
    for (const tramos of Object.values(datos?.horario || {}))
      for (const [a, b] of tramos) {
        ini = Math.min(ini, minutos(a) - 60)
        fin = Math.max(fin, minutos(b) + 60)
      }
    for (const it of datos?.items || []) {
      const dia = dias.find((d) => Date.parse(it.inicio) >= d.inicio && Date.parse(it.inicio) < d.fin)
      if (!dia || Date.parse(it.fin) - Date.parse(it.inicio) >= 20 * 3600000) continue
      const p = partes(it.inicio, zona)
      const q = partes(it.fin, zona)
      ini = Math.min(ini, p.h * 60)
      fin = Math.max(fin, q.d === p.d ? q.h * 60 + q.min : 24 * 60)
    }
    return [Math.max(0, Math.floor(ini / 60)), Math.min(24, Math.ceil(fin / 60))]
  }, [datos, dias, zona])

  const alto = (horaFin - horaIni) * 60 * PX_MIN
  const hoy = partes(Date.now(), zona)
  const etiquetaSemana = `${dias[0].d}/${dias[0].m} – ${dias[6].d}/${dias[6].m}/${dias[6].y}`

  const bloquesDelDia = (dia) =>
    (datos?.items || [])
      .map((it) => ({ ...it, a: Math.max(Date.parse(it.inicio), dia.inicio), b: Math.min(Date.parse(it.fin), dia.fin) }))
      .filter((it) => it.b > it.a)
      .map((it) => {
        const top = ((it.a - dia.inicio) / 60000 - horaIni * 60) * PX_MIN
        const bottom = ((it.b - dia.inicio) / 60000 - horaIni * 60) * PX_MIN
        return { ...it, top: Math.max(0, top), height: Math.max(14, Math.min(alto, bottom) - Math.max(0, top)) }
      })
      .filter((it) => it.top < alto)

  return (
    <>
      <div className="db-head">
        <div>
          <h2>Horas ocupadas</h2>
          <p className="db-muted">
            Todo lo que impide reservar, en {zona}. En la web pública solo se ve “Ocupado”, nunca el título.
          </p>
        </div>
        <div className="db-row">
          <button type="button" className="db-btn ghost icon" onClick={() => setLunes(sumarDias(lunes, -7))} aria-label="Semana anterior">
            <Icon name="left" size={18} />
          </button>
          <button type="button" className="db-btn ghost" onClick={() => setLunes(lunesDe(Date.now(), zona))}>
            Hoy
          </button>
          <button type="button" className="db-btn ghost icon" onClick={() => setLunes(sumarDias(lunes, 7))} aria-label="Semana siguiente">
            <Icon name="right" size={18} />
          </button>
          <b className="oc-semana">{etiquetaSemana}</b>
          <button type="button" className="db-btn ghost" onClick={() => setForzar((n) => n + 1)} disabled={!datos}>
            <Icon name="refresh" size={16} /> Releer calendarios
          </button>
        </div>
      </div>

      <div className="oc-leyenda">
        <span>
          <i className="oc-libre" /> Horario de trabajo
        </span>
        <span>
          <i style={{ background: COLORES.reserva }} /> Reservas
        </span>
        <span>
          <i style={{ background: COLORES.bloqueo }} /> No trabajo
        </span>
        <span>
          <i style={{ background: 'var(--p-lavender)' }} /> Calendarios conectados
        </span>
      </div>

      {error && <p className="db-error">{error}</p>}
      {datos?.errores?.map((e) => (
        <p key={e.calendario} className="db-error">
          No se pudo leer “{e.calendario}”: {e.error}
        </p>
      ))}

      <div className="db-scroll">
        <div className={`oc${datos ? '' : ' cargando'}`}>
          <div className="oc-horas" style={{ height: alto }}>
            {Array.from({ length: horaFin - horaIni }, (_, i) => (
              <span key={i} style={{ top: i * 60 * PX_MIN }}>
                {String(horaIni + i).padStart(2, '0')}:00
              </span>
            ))}
          </div>
          {dias.map((dia) => {
            const esHoy = dia.y === hoy.y && dia.m === hoy.m && dia.d === hoy.d
            const diaSemana = (dia.semana + 1) % 7
            return (
              <div key={dia.d} className="oc-dia">
                <div className={`oc-cab${esHoy ? ' hoy' : ''}`}>
                  {DIAS[dia.semana]} <b>{dia.d}</b>
                </div>
                <div className="oc-col" style={{ height: alto, backgroundSize: `100% ${60 * PX_MIN}px` }}>
                  {(datos?.horario?.[diaSemana] || []).map(([a, b]) => (
                    <div
                      key={a}
                      className="oc-trabajo"
                      style={{ top: (minutos(a) - horaIni * 60) * PX_MIN, height: (minutos(b) - minutos(a)) * PX_MIN }}
                    />
                  ))}
                  {bloquesDelDia(dia).map((it, i) => (
                    <div
                      key={i}
                      className={`oc-item oc-${it.tipo}`}
                      style={{ top: it.top, height: it.height, background: it.color || COLORES[it.tipo] || 'var(--p-lavender)' }}
                      title={`${it.titulo} · ${formatoHora(it.inicio, zona, LOCALE)}–${formatoHora(it.fin, zona, LOCALE)}`}
                    >
                      <b>{formatoHora(it.a, zona, LOCALE)}</b> {it.titulo}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style jsx global>{`
        .oc-semana {
          min-width: 150px;
          color: var(--text-strong);
          font-size: 0.9rem;
          text-align: center;
          align-self: center;
        }
        .oc-leyenda {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem 1.25rem;
          margin-bottom: 1rem;
          color: var(--muted);
          font-size: 0.82rem;
        }
        .oc-leyenda span {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
        }
        .oc-leyenda i {
          width: 12px;
          height: 12px;
          border-radius: 3px;
        }
        .oc-leyenda .oc-libre {
          background: var(--tint);
          border: 1px solid var(--tint-border);
        }
        .oc {
          display: grid;
          grid-template-columns: 48px repeat(7, minmax(96px, 1fr));
          min-width: 760px;
          transition: opacity 0.2s;
        }
        .oc.cargando {
          opacity: 0.5;
        }
        .oc-horas {
          position: relative;
          margin-top: 36px;
        }
        .oc-horas span {
          position: absolute;
          right: 6px;
          transform: translateY(-50%);
          color: var(--muted);
          font-size: 0.7rem;
        }
        .oc-cab {
          height: 36px;
          color: var(--muted);
          font-size: 0.8rem;
          text-align: center;
          line-height: 36px;
        }
        .oc-cab b {
          color: var(--text-strong);
        }
        .oc-cab.hoy b {
          padding: 0.15rem 0.4rem;
          border-radius: 999px;
          background: var(--accent-2);
          color: #fff;
        }
        .oc-col {
          position: relative;
          border-left: 1px solid var(--border);
          background-image: linear-gradient(to bottom, var(--border) 1px, transparent 1px);
        }
        .oc-trabajo {
          position: absolute;
          left: 0;
          right: 0;
          background: var(--tint);
        }
        .oc-item {
          position: absolute;
          left: 3px;
          right: 3px;
          padding: 2px 5px;
          overflow: hidden;
          border-radius: 4px;
          color: #2a2622;
          font-size: 0.7rem;
          line-height: 1.25;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
        }
        .oc-bloqueo {
          background-image: repeating-linear-gradient(45deg, transparent 0 6px, rgba(255, 255, 255, 0.35) 6px 12px) !important;
          background-color: var(--p-gray);
        }
      `}</style>
    </>
  )
}
