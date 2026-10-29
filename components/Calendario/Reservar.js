import React, { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Icon from '../Icon'
import Marco from './Marco'
import { SelectorZona, useZona } from './Zona'
import NinjaReto from './NinjaReto'
import { ZONA_MADRID, aUtc, claveDia, formatoFecha, formatoHora, nombreZona, partes } from '../../lib/calendario/zona'
import useTextos from './textos'

const dosDigitos = (n) => String(n).padStart(2, '0')
const clave = (y, m, d) => `${y}-${dosDigitos(m)}-${dosDigitos(d)}`

// Fecha de un día del calendario, sin hora: se formatea siempre en UTC para no cambiar de día
const fechaDia = (k) => {
  const [y, m, d] = k.split('-').map(Number)
  return Date.UTC(y, m - 1, d, 12)
}

function celdasMes(y, m) {
  const hueco = (new Date(Date.UTC(y, m - 1, 1)).getUTCDay() + 6) % 7
  const dias = new Date(Date.UTC(y, m, 0)).getUTCDate()
  return [...Array(hueco).fill(null), ...Array.from({ length: dias }, (_, i) => i + 1)]
}

function Hora({ inicio, zona, locale, t }) {
  return (
    <>
      <b>{formatoHora(inicio, zona, locale)}</b>
      {zona !== ZONA_MADRID && (
        <small>
          {formatoHora(inicio, ZONA_MADRID, locale)} {t.enMadrid}
        </small>
      )}
    </>
  )
}

// /calendario/[evento]: mes, huecos del día y formulario de reserva
export default function Reservar() {
  const t = useTextos()
  const router = useRouter()
  const slug = router.query.evento
  const { zona, setZona, delNavegador } = useZona()

  const [evento, setEvento] = useState(null)
  const [error, setError] = useState('')
  const [mes, setMes] = useState(null)
  const [huecos, setHuecos] = useState(null)
  const [recarga, setRecarga] = useState(0)
  const [dia, setDia] = useState(null)
  const [elegido, setElegido] = useState(null)
  const [paso, setPaso] = useState('calendario')
  const [datos, setDatos] = useState({ nombre: '', email: '', telefono: '', notas: '' })
  const [enviando, setEnviando] = useState(false)
  const [errorReserva, setErrorReserva] = useState('')
  const [captcha, setCaptcha] = useState({ reto: '', respuesta: '' })
  const [renovarReto, setRenovarReto] = useState(0)
  // Hasta que una consulta termina bien, se piden los calendarios recién leídos
  const [sincronizado, setSincronizado] = useState(false)
  const [buscando, setBuscando] = useState('')
  const [avisoProxima, setAvisoProxima] = useState('')
  const [enfocar, setEnfocar] = useState(false)

  useEffect(() => {
    if (!slug) return
    fetch('/api/calendario/eventos')
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((json) => {
        const encontrado = json.eventos.find((e) => e.slug === slug)
        if (encontrado) setEvento(encontrado)
        else setError('404')
      })
      .catch(() => setError(t.errorCarga))
  }, [slug])

  const hoy = partes(Date.now(), zona)
  useEffect(() => {
    if (!mes) setMes({ y: hoy.y, m: hoy.m })
  }, [zona])

  // Huecos del mes visible en la zona elegida
  useEffect(() => {
    if (!evento || !mes) return
    let vigente = true
    setHuecos(null)
    const desde = aUtc(mes.y, mes.m, 1, 0, 0, zona).toISOString()
    const hasta = aUtc(mes.y, mes.m + 1, 1, 0, 0, zona).toISOString()
    const releer = sincronizado ? '' : '&releer=1'
    fetch(`/api/calendario/disponibilidad?evento=${encodeURIComponent(evento.slug)}&desde=${desde}&hasta=${hasta}${releer}`)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((json) => {
        if (!vigente) return
        setHuecos(json.huecos)
        setSincronizado(true)
      })
      .catch(() => vigente && setError(t.errorCarga))
    return () => {
      vigente = false
    }
  }, [evento, mes, zona, recarga])

  const porDia = useMemo(() => {
    const grupos = {}
    for (const h of huecos || []) {
      const k = claveDia(h.inicio, zona)
      ;(grupos[k] = grupos[k] || []).push(h)
    }
    return grupos
  }, [huecos, zona])

  const libre = (k) => (porDia[k] || []).some((h) => !h.ocupado)

  // Al cargar el mes se selecciona el primer día con huecos libres, como en Calendly
  useEffect(() => {
    if (!huecos || !mes) return
    const prefijo = `${mes.y}-${dosDigitos(mes.m)}-`
    if (dia && dia.startsWith(prefijo) && libre(dia)) return
    setDia(Object.keys(porDia).sort().find(libre) || null)
  }, [porDia])

  // Tras "primera hora libre" se lleva la vista hasta la hora elegida (útil en el móvil)
  useEffect(() => {
    const boton = enfocar && document.querySelector('.cr-elegido')
    if (!boton) return
    boton.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
    setEnfocar(false)
  }, [porDia, enfocar, dia])

  // Busca la primera hora libre desde ahora o desde el lunes de la semana que viene (en la zona elegida)
  const irAProxima = async (tipo) => {
    setBuscando(tipo)
    setAvisoProxima('')
    let desde = ''
    if (tipo === 'semana') {
      const lunes = new Date(Date.UTC(hoy.y, hoy.m - 1, hoy.d - ((hoy.dia + 6) % 7) + 7))
      desde = `&desde=${aUtc(lunes.getUTCFullYear(), lunes.getUTCMonth() + 1, lunes.getUTCDate(), 0, 0, zona).toISOString()}`
    }
    try {
      const res = await fetch(`/api/calendario/proxima?evento=${encodeURIComponent(evento.slug)}${desde}`)
      const json = await res.json()
      if (!res.ok) throw new Error(t.errorCarga)
      if (!json.inicio) {
        setAvisoProxima(t.sinProxima)
      } else {
        const p = partes(json.inicio, zona)
        if (mes.y !== p.y || mes.m !== p.m) setMes({ y: p.y, m: p.m })
        setDia(claveDia(json.inicio, zona))
        setElegido(json.inicio)
        setEnfocar(true)
      }
    } catch (e) {
      setAvisoProxima(e.message || t.errorCarga)
    }
    setBuscando('')
  }

  if (error === '404') {
    return (
      <Marco titulo={t.tituloPagina}>
        <div className="cal-empty">
          <p>{t.sinEventos}</p>
          <Link href="/calendario">
            <a className="cal-btn">{t.volverEventos}</a>
          </Link>
        </div>
      </Marco>
    )
  }

  const titulo = evento ? `${evento.titulo[t.lang]} · ${t.propietario}` : t.tituloPagina
  const esMesActual = mes && mes.y === hoy.y && mes.m === hoy.m
  const moverMes = (delta) => {
    const fecha = new Date(Date.UTC(mes.y, mes.m - 1 + delta, 1))
    setMes({ y: fecha.getUTCFullYear(), m: fecha.getUTCMonth() + 1 })
    setElegido(null)
  }
  const nombreMes =
    mes && new Intl.DateTimeFormat(t.locale, { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(Date.UTC(mes.y, mes.m - 1, 15))
  const mesSinHuecos = huecos && !Object.keys(porDia).some(libre)

  const reservar = async (e) => {
    e.preventDefault()
    setEnviando(true)
    setErrorReserva('')
    try {
      const res = await fetch('/api/calendario/reservar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ evento: evento.slug, inicio: elegido, cliente: { ...datos, zona }, ...captcha })
      })
      const json = await res.json()
      if (!res.ok) {
        // Cada suma vale una sola vez: tras cualquier error los ninjas traen otra
        setRenovarReto((n) => n + 1)
        if (res.status === 409) {
          setPaso('calendario')
          setElegido(null)
          setSincronizado(false)
          setRecarga((n) => n + 1)
        }
        throw new Error(res.status === 409 ? t.errorHoraOcupada : json.reto ? t.errorReto : res.status === 400 ? t.errorDatos : t.errorReserva)
      }
      router.push(`/calendario/reserva/${json.token}?nueva=1`)
    } catch (err) {
      setErrorReserva(err.message || t.errorReserva)
      setEnviando(false)
    }
  }

  return (
    <Marco
      titulo={titulo}
      descripcion={evento?.descripcion[t.lang] || t.descripcionPagina}
      arriba={
        <Link href="/calendario">
          <a className="cr-back">
            <Icon name="left" size={16} /> {t.volverEventos}
          </a>
        </Link>
      }
    >

      {!evento && !error && <p className="cal-lede">{t.cargando}</p>}
      {error && <p className="cal-error">{error}</p>}

      {evento && (
        <div className={`cr${dia && paso === 'calendario' ? ' con-horas' : ''}${paso === 'datos' ? ' con-datos' : ''}`}>
          <aside className="cr-info">
            <p className="cr-owner">{t.propietario}</p>
            <h1>{evento.titulo[t.lang]}</h1>
            <ul className="cal-meta cr-meta">
              <li>
                <Icon name="clock" size={16} /> {t.min(evento.duracion)}
              </li>
              {evento.lugar[t.lang] && (
                <li>
                  <Icon name="pin" size={16} /> {evento.lugar[t.lang]}
                </li>
              )}
              {paso === 'datos' && elegido && (
                <>
                  <li className="cr-cuando">
                    <Icon name="calendar" size={16} />
                    <span>
                      {formatoHora(elegido, zona, t.locale)}, {formatoFecha(elegido, zona, t.locale)}
                      <small>{zona.replace(/_/g, ' ')}</small>
                    </span>
                  </li>
                  {zona !== ZONA_MADRID && (
                    <li className="cr-cuando">
                      <Icon name="globe" size={16} />
                      <span>
                        {formatoHora(elegido, ZONA_MADRID, t.locale)}, {formatoFecha(elegido, ZONA_MADRID, t.locale)}
                        <small>{t.zonaMadrid}</small>
                      </span>
                    </li>
                  )}
                </>
              )}
            </ul>
            {evento.descripcion[t.lang] && <p className="cr-desc">{evento.descripcion[t.lang]}</p>}
          </aside>

          {paso === 'calendario' && (
            <>
              <section className="cr-mes" aria-label={t.eligeFecha}>
                <h2>{t.eligeFecha}</h2>
                <div className="cr-rapido">
                  <button type="button" className="cal-chip" onClick={() => irAProxima('ya')} disabled={!!buscando}>
                    <Icon name="clock" size={14} /> {buscando === 'ya' ? t.buscandoHora : t.proximaLibre}
                  </button>
                  <button type="button" className="cal-chip" onClick={() => irAProxima('semana')} disabled={!!buscando}>
                    <Icon name="calendar" size={14} /> {buscando === 'semana' ? t.buscandoHora : t.proximaSemana}
                  </button>
                </div>
                {avisoProxima && <p className="cr-aviso cr-aviso-rapido">{avisoProxima}</p>}
                <div className="cr-nav">
                  <span className="cr-nombre-mes">{nombreMes}</span>
                  <button type="button" onClick={() => moverMes(-1)} disabled={esMesActual} aria-label={t.mesAnterior}>
                    <Icon name="left" size={18} />
                  </button>
                  <button type="button" onClick={() => moverMes(1)} aria-label={t.mesSiguiente}>
                    <Icon name="right" size={18} />
                  </button>
                </div>

                {!huecos && (
                  <p className="cr-sync" role="status">
                    <span className="cr-spin" aria-hidden="true" />
                    {sincronizado ? t.cargandoHuecos : t.sincronizando}
                  </p>
                )}

                <div className={`cr-grid${huecos ? '' : ' cargando'}`} role="grid">
                  {t.diasSemana.map((d) => (
                    <span key={d} className="cr-dow" role="columnheader">
                      {d}
                    </span>
                  ))}
                  {mes &&
                    celdasMes(mes.y, mes.m).map((d, i) => {
                      if (!d) return <span key={`v${i}`} />
                      const k = clave(mes.y, mes.m, d)
                      const disponible = libre(k)
                      return (
                        <button
                          key={k}
                          type="button"
                          role="gridcell"
                          className={`cr-dia${disponible ? ' libre' : ''}${dia === k ? ' on' : ''}${k === claveDia(Date.now(), zona) ? ' hoy' : ''}`}
                          disabled={!disponible}
                          aria-pressed={dia === k}
                          aria-label={formatoFecha(fechaDia(k), 'UTC', t.locale)}
                          onClick={() => {
                            setDia(k)
                            setElegido(null)
                          }}
                        >
                          {d}
                        </button>
                      )
                    })}
                </div>

                {mesSinHuecos && (
                  <p className="cr-aviso">
                    {t.sinHuecosMes}{' '}
                    <button type="button" className="cr-link" onClick={() => moverMes(1)}>
                      {t.verSiguienteMes}
                    </button>
                  </p>
                )}

                <div className="cr-zona">
                  <span className="cr-zona-label">{t.zonaHoraria}</span>
                  <SelectorZona zona={zona} setZona={setZona} delNavegador={delNavegador} />
                  {zona !== ZONA_MADRID && <p className="cr-nota">{t.horaMadridNota(nombreZona(zona))}</p>}
                </div>
              </section>

              {dia && (
                <section className="cr-horas" aria-label={formatoFecha(fechaDia(dia), 'UTC', t.locale)}>
                  <h3>{formatoFecha(fechaDia(dia), 'UTC', t.locale, { weekday: 'long', day: 'numeric', month: 'long' })}</h3>
                  {huecos && !(porDia[dia] || []).length && <p className="cr-aviso">{t.sinHuecosDia}</p>}
                  <div className="cr-lista">
                    {!huecos && [0, 1, 2, 3, 4].map((i) => <span key={i} className="cr-hora cr-esqueleto" aria-hidden="true" />)}
                    {(porDia[dia] || []).map((h) =>
                      elegido === h.inicio ? (
                        <div key={h.inicio} className="cr-elegido">
                          <span className="cr-hora on">
                            <Hora inicio={h.inicio} zona={zona} locale={t.locale} t={t} />
                          </span>
                          <button type="button" className="cal-btn" onClick={() => setPaso('datos')}>
                            {t.siguiente}
                          </button>
                        </div>
                      ) : (
                        <button
                          key={h.inicio}
                          type="button"
                          className={`cr-hora${h.ocupado ? ' ocupado' : ''}`}
                          disabled={h.ocupado}
                          onClick={() => setElegido(h.inicio)}
                          title={h.ocupado ? t.ocupado : undefined}
                        >
                          <Hora inicio={h.inicio} zona={zona} locale={t.locale} t={t} />
                          {h.ocupado && <em>{t.ocupado}</em>}
                        </button>
                      )
                    )}
                  </div>
                </section>
              )}
            </>
          )}

          {paso === 'datos' && (
            <form className="cr-form" onSubmit={reservar}>
              <h2>{t.tusDatos}</h2>
              <label className="cal-field">
                {t.nombre}
                <input required autoComplete="name" value={datos.nombre} onChange={(e) => setDatos({ ...datos, nombre: e.target.value })} />
              </label>
              <label className="cal-field">
                {t.email}
                <input
                  required
                  type="email"
                  autoComplete="email"
                  value={datos.email}
                  onChange={(e) => setDatos({ ...datos, email: e.target.value })}
                />
              </label>
              <label className="cal-field">
                {t.telefono}
                <input type="tel" autoComplete="tel" value={datos.telefono} onChange={(e) => setDatos({ ...datos, telefono: e.target.value })} />
              </label>
              <label className="cal-field">
                {t.notas}
                <textarea rows={4} placeholder={t.notasPh} value={datos.notas} onChange={(e) => setDatos({ ...datos, notas: e.target.value })} />
              </label>
              <NinjaReto onChange={setCaptcha} renovar={renovarReto} t={t} />
              {errorReserva && <p className="cal-error">{errorReserva}</p>}
              <div className="cr-acciones">
                <button type="button" className="cal-btn ghost" onClick={() => setPaso('calendario')} disabled={enviando}>
                  <Icon name="left" size={16} /> {t.cambiarHora}
                </button>
                <button type="submit" className="cal-btn" disabled={enviando || !captcha.respuesta}>
                  {enviando ? t.reservando : t.confirmar}
                </button>
              </div>
              <p className="cr-nota">{t.privacidad}</p>
            </form>
          )}
        </div>
      )}

      <style jsx global>{`
        .cr-back {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          color: var(--muted);
          font-size: 0.85rem;
        }
        .cr-back:hover {
          color: var(--text-strong);
        }
        .cr {
          display: grid;
          grid-template-columns: minmax(240px, 300px) minmax(0, 1fr);
          border: 1px solid var(--border);
          border-radius: 1.1rem;
          background: var(--surface-2);
          box-shadow: 0 18px 50px -30px rgba(0, 0, 0, 0.35);
          overflow: hidden;
        }
        .cr.con-horas {
          grid-template-columns: minmax(220px, 280px) minmax(0, 1fr) minmax(200px, 240px);
        }
        .cr > * {
          padding: 1.6rem 1.5rem;
        }
        .cr-info {
          border-right: 1px solid var(--border);
        }
        .cr-owner {
          margin: 0 0 0.25rem;
          color: var(--muted);
          font-size: 0.85rem;
        }
        .cr-info h1 {
          margin: 0;
          font-size: 1.6rem;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: var(--text-strong);
        }
        .cr-meta {
          flex-direction: column;
          margin-top: 1rem;
        }
        .cr-meta li {
          align-items: flex-start;
        }
        .cr-meta svg {
          flex-shrink: 0;
          margin-top: 0.15rem;
        }
        .cr-cuando span {
          display: flex;
          flex-direction: column;
          color: var(--text-strong);
        }
        .cr-cuando small {
          color: var(--muted);
          font-size: 0.78rem;
        }
        .cr-desc {
          margin: 1.25rem 0 0;
          font-size: 0.9rem;
          color: var(--text);
        }

        .cr-mes h2,
        .cr-form h2 {
          margin: 0 0 1rem;
          font-size: 1.1rem;
          color: var(--text-strong);
        }
        .cr-rapido {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1.1rem;
        }
        .cr-rapido .cal-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.45rem 0.85rem;
          color: var(--accent-2);
          border-color: var(--tint-border);
        }
        .cr-rapido .cal-chip:disabled {
          opacity: 0.6;
          cursor: progress;
        }
        .cr-aviso-rapido {
          margin: -0.5rem 0 1rem;
        }
        .cr-nav {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          margin-bottom: 0.75rem;
        }
        .cr-nombre-mes {
          margin-right: auto;
          color: var(--text-strong);
          font-variation-settings: 'wght' 550;
        }
        .cr-nombre-mes::first-letter,
        .cr-horas h3::first-letter {
          text-transform: uppercase;
        }
        .cr-nav button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border: 0;
          border-radius: 50%;
          background: var(--tint);
          color: var(--accent-2);
          cursor: pointer;
        }
        .cr-nav button:disabled {
          background: transparent;
          color: var(--muted);
          opacity: 0.5;
          cursor: default;
        }
        .cr-grid {
          display: grid;
          grid-template-columns: repeat(7, minmax(0, 1fr));
          gap: 0.3rem;
          max-width: 420px;
          transition: opacity 0.2s;
        }
        .cr-grid.cargando {
          opacity: 0.45;
          pointer-events: none;
        }
        .cr-sync {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          margin: -0.25rem 0 0.75rem;
          color: var(--accent-2);
          font-size: 0.85rem;
        }
        .cr-spin {
          width: 16px;
          height: 16px;
          border: 2px solid var(--tint-border);
          border-top-color: var(--accent-2);
          border-radius: 50%;
          animation: cr-girar 0.8s linear infinite;
        }
        @keyframes cr-girar {
          to {
            transform: rotate(360deg);
          }
        }
        .cr-esqueleto {
          border-color: var(--border);
          background: linear-gradient(90deg, var(--surface) 0%, var(--surface-2) 50%, var(--surface) 100%);
          background-size: 200% 100%;
          animation: cr-brillo 1.2s ease-in-out infinite;
          cursor: default;
        }
        @keyframes cr-brillo {
          from {
            background-position: 100% 0;
          }
          to {
            background-position: -100% 0;
          }
        }
        .cr-dow {
          padding: 0.4rem 0;
          color: var(--muted);
          font-size: 0.68rem;
          letter-spacing: 0.04em;
          text-align: center;
        }
        .cr-dia {
          position: relative;
          aspect-ratio: 1;
          max-width: 48px;
          width: 100%;
          margin: 0 auto;
          border: 0;
          border-radius: 50%;
          background: transparent;
          color: var(--muted);
          font: inherit;
          font-size: 0.92rem;
        }
        .cr-dia.libre {
          background: var(--tint);
          color: var(--accent-2);
          font-variation-settings: 'wght' 700;
          cursor: pointer;
        }
        .cr-dia.libre:hover {
          background: var(--tint-border);
        }
        .cr-dia.on {
          background: var(--accent-2);
          color: #fff;
        }
        html.dark .cr-dia.on {
          color: var(--on-accent);
        }
        .cr-dia.hoy::after {
          content: '';
          position: absolute;
          bottom: 6px;
          left: 50%;
          width: 4px;
          height: 4px;
          margin-left: -2px;
          border-radius: 50%;
          background: currentColor;
        }
        .cr-aviso {
          margin: 1rem 0 0;
          color: var(--muted);
          font-size: 0.88rem;
        }
        .cr-link {
          padding: 0;
          border: 0;
          background: none;
          color: var(--accent-2);
          font: inherit;
          text-decoration: underline;
          cursor: pointer;
        }
        .cr-zona {
          max-width: 420px;
          margin-top: 1.5rem;
        }
        .cr-zona-label {
          display: block;
          margin-bottom: 0.4rem;
          color: var(--text-strong);
          font-size: 0.85rem;
          font-variation-settings: 'wght' 600;
        }
        .cr-nota {
          margin: 0.6rem 0 0;
          color: var(--muted);
          font-size: 0.8rem;
        }

        .cr-horas h3 {
          margin: 0.2rem 0 1rem;
          color: var(--text-strong);
          font-size: 0.95rem;
        }
        .cr-lista {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          max-height: 460px;
          overflow-y: auto;
          padding-right: 0.25rem;
        }
        .cr-hora {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.05rem;
          min-height: 52px;
          padding: 0.4rem;
          border: 1px solid var(--tint-border);
          border-radius: 0.5rem;
          background: transparent;
          color: var(--accent-2);
          font: inherit;
          cursor: pointer;
          transition: border-color 0.15s, background-color 0.15s;
        }
        .cr-hora b {
          font-size: 1rem;
        }
        .cr-hora small {
          color: var(--muted);
          font-size: 0.72rem;
        }
        .cr-hora:hover {
          border-color: var(--accent-2);
          border-width: 2px;
        }
        .cr-hora.ocupado {
          border-style: dashed;
          border-color: var(--border);
          color: var(--muted);
          cursor: not-allowed;
        }
        .cr-hora.ocupado b {
          text-decoration: line-through;
          font-variation-settings: 'wght' 450;
        }
        .cr-hora.ocupado em {
          font-size: 0.7rem;
          font-style: normal;
          letter-spacing: 0.03em;
          text-transform: uppercase;
        }
        .cr-elegido {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.4rem;
        }
        .cr-hora.on {
          background: var(--muted);
          border-color: var(--muted);
          color: #fff;
          cursor: default;
        }
        .cr-hora.on small {
          color: rgba(255, 255, 255, 0.85);
        }
        .cr-elegido .cal-btn {
          min-height: 52px;
          padding: 0 0.5rem;
          border-radius: 0.5rem;
        }

        .cr-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-width: 520px;
        }
        .cr-acciones {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        @media (max-width: 900px) {
          .cr,
          .cr.con-horas {
            grid-template-columns: 1fr;
          }
          .cr-info {
            border-right: 0;
            border-bottom: 1px solid var(--border);
          }
          .cr-horas {
            border-top: 1px solid var(--border);
          }
          .cr-lista {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
            max-height: none;
          }
          .cr-elegido {
            grid-column: 1 / -1;
          }
          .cr-grid,
          .cr-zona {
            max-width: none;
          }
        }
        @media (max-width: 480px) {
          .cr > * {
            padding: 1.25rem 1rem;
          }
        }
      `}</style>
    </Marco>
  )
}
