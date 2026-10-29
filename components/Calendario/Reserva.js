import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Icon from '../Icon'
import Marco from './Marco'
import { ZONA_MADRID, formatoFecha, formatoHora, zonaDelNavegador, zonaValida } from '../../lib/calendario/zona'
import useTextos from './textos'

const WHATSAPP = '34662470645'
const fechaIcs = (iso) => new Date(iso).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')

function enlaceGoogle(r, titulo, lugar) {
  const query = new URLSearchParams({
    action: 'TEMPLATE',
    text: `${titulo} · Marlon Falcón`,
    dates: `${fechaIcs(r.inicio)}/${fechaIcs(r.fin)}`,
    details: lugar,
    location: lugar
  })
  return `https://calendar.google.com/calendar/render?${query}`
}

function ficheroIcs(r, titulo, lugar) {
  const escapar = (s) => String(s || '').replace(/[\\;,]/g, (c) => `\\${c}`)
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//marlonfalcon.com//Calendario//ES',
    'BEGIN:VEVENT',
    `UID:${fechaIcs(r.inicio)}-${r.email}@marlonfalcon.com`,
    `DTSTAMP:${fechaIcs(new Date().toISOString())}`,
    `DTSTART:${fechaIcs(r.inicio)}`,
    `DTEND:${fechaIcs(r.fin)}`,
    `SUMMARY:${escapar(`${titulo} · Marlon Falcón`)}`,
    `LOCATION:${escapar(lugar)}`,
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n')
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(ics)}`
}

// /calendario/reserva/[token]: confirmación y cancelación de una reserva
export default function Reserva() {
  const t = useTextos()
  const router = useRouter()
  const [reserva, setReserva] = useState(null)
  const [error, setError] = useState('')
  const [cancelando, setCancelando] = useState(false)
  const [zona, setZona] = useState(ZONA_MADRID)

  useEffect(() => {
    if (!router.isReady) return
    fetch(`/api/calendario/reserva?token=${encodeURIComponent(router.query.token)}`)
      .then(async (res) => {
        const json = await res.json()
        if (!res.ok) throw new Error(res.status === 404 || res.status === 400 ? t.noEncontrada : t.errorCarga)
        setReserva(json)
        setZona(zonaValida(json.zona) ? json.zona : zonaDelNavegador())
      })
      .catch((e) => setError(e.message || t.errorCarga))
  }, [router.isReady, router.query.token])

  const cancelar = async () => {
    if (!window.confirm(t.confirmarCancelar)) return
    setCancelando(true)
    try {
      const res = await fetch('/api/calendario/reserva', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: router.query.token })
      })
      const json = await res.json()
      if (!res.ok) throw new Error(t.errorCarga)
      setReserva(json)
    } catch (e) {
      setError(e.message)
    }
    setCancelando(false)
  }

  const confirmada = reserva?.estado === 'confirmed'
  const nueva = router.query.nueva === '1'
  const titulo = reserva?.evento.titulo[t.lang] || ''
  const lugar = reserva?.evento.lugar[t.lang] || ''
  const cuando = reserva && `${formatoFecha(reserva.inicio, zona, t.locale)}, ${formatoHora(reserva.inicio, zona, t.locale)} (${zona})`

  return (
    <Marco titulo={`${t.reservaTitulo} · Marlon Falcón`} noIndex>
      {error && <p className="cal-error">{error}</p>}
      {!reserva && !error && <p className="cal-lede">{t.cargando}</p>}

      {reserva && (
        <div className="cv">
          <span className={`cv-estado${confirmada ? ' ok' : ''}`}>
            <Icon name={confirmada ? 'check' : 'close'} size={16} />
            {confirmada ? t.confirmada : t.cancelada}
          </span>
          <h1 className="cal-title">{titulo}</h1>
          <p className="cal-lede">
            {!confirmada ? t.textoCancelada : nueva ? t.graciasNueva(reserva.nombre.split(' ')[0]) : t.textoConfirmada}
          </p>

          <dl className="cv-datos">
            <div>
              <dt>
                <Icon name="calendar" size={16} /> {t.tuHora}
              </dt>
              <dd>
                {formatoFecha(reserva.inicio, zona, t.locale)}
                <b>
                  {formatoHora(reserva.inicio, zona, t.locale)} – {formatoHora(reserva.fin, zona, t.locale)}
                </b>
                <small>{zona.replace(/_/g, ' ')}</small>
              </dd>
            </div>
            {zona !== ZONA_MADRID && (
              <div>
                <dt>
                  <Icon name="globe" size={16} /> {t.horaMadrid}
                </dt>
                <dd>
                  {formatoFecha(reserva.inicio, ZONA_MADRID, t.locale)}
                  <b>
                    {formatoHora(reserva.inicio, ZONA_MADRID, t.locale)} – {formatoHora(reserva.fin, ZONA_MADRID, t.locale)}
                  </b>
                  <small>Europe/Madrid</small>
                </dd>
              </div>
            )}
            {lugar && (
              <div>
                <dt>
                  <Icon name="pin" size={16} /> {t.lugar}
                </dt>
                <dd>{lugar}</dd>
              </div>
            )}
          </dl>

          {confirmada && (
            <>
              <div className="cv-acciones">
                <a className="cal-btn" href={enlaceGoogle(reserva, titulo, lugar)} target="_blank" rel="noopener noreferrer">
                  <Icon name="calendar" size={17} /> {t.anadirGoogle}
                </a>
                <a className="cal-btn ghost" href={ficheroIcs(reserva, titulo, lugar)} download="reunion-marlon-falcon.ics">
                  <Icon name="download" size={17} /> {t.descargarIcs}
                </a>
                <a
                  className="cal-btn ghost"
                  href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(t.mensajeWhatsapp(titulo, cuando))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="whatsapp" size={17} /> {t.avisarWhatsapp}
                </a>
              </div>
              <p className="cv-guarda">{t.guardaEnlace}</p>
              <button type="button" className="cal-btn danger" onClick={cancelar} disabled={cancelando}>
                {cancelando ? t.cancelando : t.cancelar}
              </button>
            </>
          )}

          {!confirmada && (
            <Link href="/calendario">
              <a className="cal-btn">{t.otraReserva}</a>
            </Link>
          )}
        </div>
      )}

      <style jsx global>{`
        .cv {
          max-width: 680px;
        }
        .cv-estado {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          margin-bottom: 1rem;
          padding: 0.3rem 0.8rem;
          border-radius: 999px;
          background: rgba(220, 90, 90, 0.14);
          color: #b0413e;
          font-size: 0.82rem;
          font-variation-settings: 'wght' 650;
        }
        .cv-estado.ok {
          background: rgba(165, 195, 143, 0.35);
          color: #3e6b26;
        }
        html.dark .cv-estado {
          color: #f2a39b;
        }
        html.dark .cv-estado.ok {
          color: var(--p-green);
        }
        .cv-datos {
          display: grid;
          gap: 0.75rem;
          margin: 2rem 0;
        }
        .cv-datos > div {
          display: grid;
          grid-template-columns: 150px 1fr;
          gap: 1rem;
          padding: 1rem 1.2rem;
          border: 1px solid var(--border);
          border-radius: 0.9rem;
          background: var(--surface);
        }
        .cv-datos dt {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          color: var(--muted);
          font-size: 0.88rem;
        }
        .cv-datos dd {
          display: flex;
          flex-direction: column;
          margin: 0;
          color: var(--text-strong);
          text-transform: none;
        }
        .cv-datos dd b {
          font-size: 1.15rem;
        }
        .cv-datos dd small {
          color: var(--muted);
          font-size: 0.78rem;
        }
        .cv-acciones {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }
        .cv-guarda {
          margin: 1.25rem 0;
          color: var(--muted);
          font-size: 0.85rem;
        }
        @media (max-width: 560px) {
          .cv-datos > div {
            grid-template-columns: 1fr;
            gap: 0.4rem;
          }
        }
      `}</style>
    </Marco>
  )
}
