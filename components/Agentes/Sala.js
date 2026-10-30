import React, { useEffect, useMemo, useRef, useState } from 'react'
import Head from 'next/head'
import Copiar from './Copiar'
import Guia from './Guia'
import Robot, { colorAgente } from './Robot'
import { ESTADOS, instrucciones } from './instrucciones'

const SONDEO_MS = 3000
const SONDEO_OCULTA_MS = 15000
const SIN_SENAL_MS = 3 * 60 * 1000
const TAREAS_VISIBLES = 4
const MENSAJES_RADIO = 30

const hora = (fecha) => new Date(fecha).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' })

function duracion(ms) {
  const minutos = Math.floor(ms / 60000)
  if (minutos >= 60) return `${Math.floor(minutos / 60)} h ${minutos % 60} min`
  return `${minutos}:${String(Math.floor(ms / 1000) % 60).padStart(2, '0')}`
}

// El puerto va aparte porque es lo primero que se busca; sin puerto explícito, la URL usa el de su protocolo
function Prueba({ url }) {
  const { port, host } = new URL(url)
  return (
    <p className="ag-prueba">
      <span>Probando en</span>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {url}
      </a>
      {port ? <b>Puerto {port}</b> : <b>{host}</b>}
    </p>
  )
}

function Lista({ titulo, tareas, marca, clase, abierta, ultimas }) {
  const visibles = abierta ? tareas : ultimas ? tareas.slice(-TAREAS_VISIBLES) : tareas.slice(0, TAREAS_VISIBLES)
  return (
    <div className={`ag-lista ${clase}`}>
      <h3>
        {titulo} <small>{tareas.length}</small>
      </h3>
      {!tareas.length && <p>—</p>}
      <ul>
        {visibles.map((tarea, i) => (
          <li key={i}>
            <span aria-hidden="true">{marca}</span> {tarea}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Fila({ agente: a, ahora }) {
  const [abierta, setAbierta] = useState(false)
  const sinSenal = ahora && a.estado === 'trabajando' && ahora - new Date(a.actualizado) > SIN_SENAL_MS
  const estado = sinSenal ? 'esperando' : a.estado
  const ocultas = Math.max(a.hechas.length, a.pendientes.length) > TAREAS_VISIBLES

  return (
    <article className={`ag-fila ${estado}`} style={{ '--c': colorAgente(a.nombre) }}>
      <header>
        <b>{a.nombre}</b>
        {a.rol && <span>{a.rol}</span>}
      </header>

      <div className="ag-pista" role="progressbar" aria-valuenow={a.progreso} aria-valuemin={0} aria-valuemax={100} aria-label={`Progreso de ${a.nombre}`}>
        <div className="ag-barra">
          <div className="ag-relleno" style={{ width: `${a.progreso}%` }} />
        </div>
        <span className="ag-meta" aria-hidden="true">
          🏁
        </span>
        <div className="ag-corredor" style={{ left: `calc(${a.progreso}% - ${a.progreso * 0.3}px)` }}>
          <Robot nombre={a.nombre} estado={estado} size={30} />
        </div>
      </div>

      <div className="ag-dato">
        <strong>{a.progreso}%</strong>
        <span className={`ag-chip ${sinSenal ? 'senal' : a.estado}`}>{sinSenal ? 'Sin señal' : ESTADOS[a.estado]}</span>
      </div>

      {a.tarea && (
        <p className="ag-ahora">
          <span>Ahora</span> {a.tarea}
        </p>
      )}

      {a.url && <Prueba url={a.url} />}

      <div className="ag-tareas">
        <Lista titulo="Hechas" tareas={a.hechas} marca="✓" clase="hechas" abierta={abierta} ultimas />
        <Lista titulo="Por realizar" tareas={a.pendientes} marca="○" clase="pendientes" abierta={abierta} />
      </div>
      {ocultas && (
        <button type="button" className="ag-mas" onClick={() => setAbierta(!abierta)}>
          {abierta ? 'Ver menos' : 'Ver todas las tareas'}
        </button>
      )}
    </article>
  )
}

function Confeti() {
  return (
    <div className="ag-confeti" aria-hidden="true">
      {Array.from({ length: 48 }, (_, i) => (
        <i key={i} style={{ left: `${(i * 37) % 100}%`, background: `hsl(${i * 47} 70% 60%)`, animationDelay: `${(i % 12) * 0.12}s` }} />
      ))}
    </div>
  )
}

// /agentes/<token>: una fila por agente que se actualiza sola mientras Claude informa
export default function Sala({ token, inicial, origen }) {
  const [datos, setDatos] = useState(inicial)
  const [cerrada, setCerrada] = useState(false)
  const [desconectada, setDesconectada] = useState(false)
  const [ahora, setAhora] = useState(null)
  const [fiesta, setFiesta] = useState(false)
  const yaTerminada = useRef(null)

  useEffect(() => {
    let activa = true
    let espera
    const leer = async () => {
      try {
        const res = await fetch(`/api/agentes/${token}`)
        if (res.status === 404) return activa && setCerrada(true)
        if (!res.ok) throw new Error()
        const nuevos = await res.json()
        if (!activa) return
        setDatos(nuevos)
        setDesconectada(false)
      } catch (e) {
        if (activa) setDesconectada(true)
      }
      if (activa) espera = setTimeout(leer, document.hidden ? SONDEO_OCULTA_MS : SONDEO_MS)
    }
    espera = setTimeout(leer, SONDEO_MS)
    return () => {
      activa = false
      clearTimeout(espera)
    }
  }, [token])

  useEffect(() => {
    setAhora(Date.now())
    const reloj = setInterval(() => setAhora(Date.now()), 1000)
    return () => clearInterval(reloj)
  }, [])

  const { sala, agentes } = datos

  const total = useMemo(() => {
    const suma = (lista) => agentes.reduce((n, a) => n + lista(a), 0)
    return {
      progreso: agentes.length ? Math.round(suma((a) => a.progreso) / agentes.length) : 0,
      hechas: suma((a) => a.hechas.length),
      pendientes: suma((a) => a.pendientes.length),
      trabajando: agentes.filter((a) => a.estado === 'trabajando').length,
      problemas: agentes.filter((a) => a.estado === 'bloqueado' || a.estado === 'error').length,
      terminada: agentes.length > 0 && agentes.every((a) => a.estado === 'terminado')
    }
  }, [agentes])

  // El confeti solo sale si la sala termina con la página abierta
  useEffect(() => {
    if (yaTerminada.current === false && total.terminada) setFiesta(true)
    yaTerminada.current = total.terminada
  }, [total.terminada])

  const radio = useMemo(
    () =>
      agentes
        .flatMap((a) => a.log.map((m) => ({ ...m, agente: a.nombre })))
        .sort((a, b) => (a.t < b.t ? 1 : -1))
        .slice(0, MENSAJES_RADIO),
    [agentes]
  )

  const inicio = agentes.length ? Math.min(...agentes.map((a) => new Date(a.inicio))) : null
  const fin = total.terminada ? Math.max(...agentes.map((a) => new Date(a.actualizado))) : ahora
  const aviso = total.problemas ? '🔴 ' : total.terminada ? '✅ ' : ''

  return (
    <main className="ag">
      <Head>
        <title>{`${aviso}${agentes.length ? `${total.progreso}% · ` : ''}${sala.titulo}`}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      {fiesta && <Confeti />}

      <header className="ag-cabecera">
        <div>
          <p className="ag-torre">
            <span className={desconectada || cerrada ? 'off' : ''} /> Torre de control
          </p>
          <h1>{sala.titulo}</h1>
          <p className="ag-resumen">
            {agentes.length} {agentes.length === 1 ? 'agente' : 'agentes'} · {total.hechas} de {total.hechas + total.pendientes} tareas
            {inicio && fin ? ` · ${duracion(fin - inicio)}` : ''}
            {total.problemas > 0 && <b> · {total.problemas} con problemas</b>}
          </p>
        </div>
        <div className="ag-anillo" role="img" aria-label={`Progreso total: ${total.progreso}%`}>
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="42" pathLength="100" />
            <circle className="valor" cx="50" cy="50" r="42" pathLength="100" strokeDasharray={`${total.progreso} 100`} />
          </svg>
          <b>{total.progreso}%</b>
        </div>
      </header>

      {cerrada && <p className="ag-alerta">Esta sala se ha cerrado desde el dashboard. Lo que ves es la última lectura.</p>}
      {desconectada && !cerrada && <p className="ag-alerta">Sin conexión con la torre. Reintentando…</p>}

      {!agentes.length && (
        <div className="ag-vacia">
          <div className="ag-radar" aria-hidden="true" />
          <h2>Esperando al primer agente</h2>
          <p>Copia las instrucciones y pégaselas a Claude junto con tu encargo. Las filas aparecerán aquí solas.</p>
          <Copiar className="ag-btn" texto={instrucciones(origen, token)}>
            Copiar instrucciones para Claude
          </Copiar>
        </div>
      )}

      <div className="ag-filas">
        {agentes.map((a) => (
          <Fila key={a.id} agente={a} ahora={ahora} />
        ))}
      </div>

      {radio.length > 0 && (
        <section className="ag-radio">
          <h2>Radio de la torre</h2>
          <ol>
            {radio.map((m, i) => (
              <li key={`${m.t}-${i}`} style={{ '--c': colorAgente(m.agente) }}>
                <time>{ahora ? hora(m.t) : ''}</time>
                <b>{m.agente}</b>
                <span>{m.tarea || ESTADOS[m.estado]}</span>
              </li>
            ))}
          </ol>
        </section>
      )}

      <details className="ag-ayuda" open={!agentes.length}>
        <summary>Cómo funciona: Claude, API y plugin de Chrome</summary>
        <Guia origen={origen} token={token} />
      </details>

      <style jsx global>{`
        .ag {
          max-width: 1080px;
          margin: 0 auto;
          padding: 2rem 1.25rem 4rem;
          color: var(--text);
        }
        .ag-cabecera {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          margin-bottom: 1.75rem;
        }
        .ag-torre {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin: 0;
          color: var(--muted);
          font-size: 0.75rem;
          font-variation-settings: 'wght' 650;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .ag-torre span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--p-green);
          animation: ag-pulso 1.8s ease-out infinite;
        }
        .ag-torre span.off {
          background: #dc5a5a;
          animation: none;
        }
        .ag h1 {
          margin: 0.25rem 0;
          color: var(--text-strong);
          font-size: clamp(1.7rem, 4vw, 2.4rem);
          letter-spacing: -0.02em;
        }
        .ag-resumen {
          margin: 0;
          color: var(--muted);
          font-size: 0.92rem;
          font-variant-numeric: tabular-nums;
        }
        .ag-resumen b {
          color: #dc5a5a;
        }
        .ag-anillo {
          position: relative;
          flex-shrink: 0;
          width: 96px;
          height: 96px;
        }
        .ag-anillo svg {
          transform: rotate(-90deg);
        }
        .ag-anillo circle {
          fill: none;
          stroke: var(--border);
          stroke-width: 9;
        }
        .ag-anillo .valor {
          stroke: var(--accent-2);
          stroke-linecap: round;
          transition: stroke-dasharray 1s ease;
        }
        .ag-anillo b {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          color: var(--text-strong);
          font-size: 1.25rem;
          font-variant-numeric: tabular-nums;
        }
        .ag-alerta {
          margin: 0 0 1rem;
          padding: 0.65rem 0.9rem;
          border-radius: 0.6rem;
          background: rgba(220, 90, 90, 0.12);
          font-size: 0.88rem;
        }

        .ag-filas {
          display: grid;
          gap: 0.9rem;
        }
        .ag-fila {
          display: grid;
          grid-template-columns: 170px minmax(0, 1fr) 96px;
          gap: 0.6rem 1.25rem;
          align-items: center;
          padding: 1rem 1.25rem;
          border: 1px solid var(--border);
          border-left: 3px solid var(--c);
          border-radius: 0.8rem;
          background: var(--surface);
        }
        .ag-fila.bloqueado,
        .ag-fila.error {
          border-color: rgba(220, 90, 90, 0.6);
          background: rgba(220, 90, 90, 0.07);
        }
        .ag-fila header {
          min-width: 0;
        }
        .ag-fila header b {
          display: block;
          overflow: hidden;
          color: var(--text-strong);
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .ag-fila header span {
          display: block;
          color: var(--muted);
          font-size: 0.8rem;
          line-height: 1.3;
        }

        .ag-pista {
          position: relative;
          height: 48px;
        }
        .ag-barra {
          position: absolute;
          right: 0;
          bottom: 2px;
          left: 0;
          height: 10px;
          overflow: hidden;
          border-radius: 999px;
          background: var(--surface-2);
          box-shadow: inset 0 0 0 1px var(--border);
        }
        .ag-relleno {
          height: 100%;
          border-radius: 999px;
          background: var(--c);
          transition: width 1s ease;
        }
        .ag-meta {
          position: absolute;
          right: -2px;
          bottom: 12px;
          font-size: 1rem;
          line-height: 1;
        }
        .ag-corredor {
          position: absolute;
          bottom: 12px;
          line-height: 0;
          transition: left 1s ease;
        }
        .ag-dato {
          display: grid;
          justify-items: end;
          gap: 0.2rem;
        }
        .ag-dato strong {
          color: var(--text-strong);
          font-size: 1.3rem;
          font-variant-numeric: tabular-nums;
        }
        .ag-chip {
          padding: 0.1rem 0.5rem;
          border-radius: 999px;
          background: var(--tint);
          color: var(--accent-2);
          font-size: 0.7rem;
          font-variation-settings: 'wght' 650;
          white-space: nowrap;
        }
        .ag-chip.terminado {
          background: rgba(120, 170, 90, 0.18);
          color: #3e6b26;
        }
        html.dark .ag-chip.terminado {
          color: var(--p-green);
        }
        .ag-chip.bloqueado,
        .ag-chip.error {
          background: rgba(220, 90, 90, 0.15);
          color: #c0392b;
        }
        html.dark .ag-chip.bloqueado,
        html.dark .ag-chip.error {
          color: #f2a39b;
        }
        .ag-chip.esperando,
        .ag-chip.senal {
          background: var(--surface-2);
          color: var(--muted);
        }

        .ag-ahora {
          grid-column: 2 / -1;
          margin: 0;
          color: var(--text-strong);
          font-size: 0.9rem;
        }
        .ag-ahora span {
          margin-right: 0.35rem;
          color: var(--c);
          font-size: 0.7rem;
          font-variation-settings: 'wght' 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .ag-prueba {
          grid-column: 2 / -1;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.15rem 0.5rem;
          margin: 0;
          font-size: 0.85rem;
        }
        .ag-prueba span {
          color: var(--muted);
          font-size: 0.72rem;
          font-variation-settings: 'wght' 650;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .ag-prueba a {
          color: var(--accent-2);
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          word-break: break-all;
        }
        .ag-prueba b {
          padding: 0.05rem 0.45rem;
          border-radius: 0.35rem;
          background: var(--tint);
          color: var(--accent-2);
          font-size: 0.72rem;
        }
        .ag-tareas {
          grid-column: 2 / -1;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1.25rem;
        }
        .ag-lista h3 {
          margin: 0 0 0.25rem;
          color: var(--muted);
          font-size: 0.72rem;
          font-variation-settings: 'wght' 650;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .ag-lista p {
          margin: 0;
          color: var(--muted);
          font-size: 0.85rem;
        }
        .ag-lista ul {
          display: grid;
          gap: 0.15rem;
          margin: 0;
          padding: 0;
          list-style: none;
          font-size: 0.85rem;
          line-height: 1.35;
        }
        .ag-lista.hechas li {
          color: var(--muted);
        }
        .ag-lista.hechas li span {
          color: var(--c);
        }
        .ag-mas {
          grid-column: 2 / -1;
          justify-self: start;
          padding: 0;
          border: 0;
          background: none;
          color: var(--accent-2);
          font: inherit;
          font-size: 0.8rem;
          cursor: pointer;
        }

        .ag-robot .ag-ojos {
          animation: ag-parpadeo 3.5s infinite;
          transform-origin: 20px 16px;
        }
        .ag-robot.trabajando {
          animation: ag-bote 0.5s ease-in-out infinite alternate;
        }
        .ag-robot.trabajando .ag-pie {
          animation: ag-paso 0.3s ease-in-out infinite alternate;
        }
        .ag-robot.trabajando .ag-pie.der {
          animation-delay: 0.15s;
        }
        .ag-robot.trabajando .ag-antena {
          animation: ag-luz 1s infinite;
        }
        .ag-robot.bloqueado,
        .ag-robot.error {
          animation: ag-temblor 0.25s linear infinite;
        }
        .ag-robot.esperando {
          opacity: 0.6;
        }
        .ag-robot.terminado {
          animation: ag-salto 1.4s ease-in-out infinite;
        }

        .ag-vacia {
          display: grid;
          justify-items: center;
          gap: 0.5rem;
          padding: 3rem 1.5rem;
          border: 1px dashed var(--border);
          border-radius: 1rem;
          text-align: center;
        }
        .ag-vacia h2 {
          margin: 0.5rem 0 0;
          color: var(--text-strong);
          font-size: 1.25rem;
        }
        .ag-vacia p {
          max-width: 460px;
          margin: 0 0 0.75rem;
          color: var(--muted);
        }
        .ag-radar {
          position: relative;
          width: 88px;
          height: 88px;
          border: 1px solid var(--tint-border);
          border-radius: 50%;
          background: repeating-radial-gradient(circle, transparent 0 13px, var(--tint) 13px 14px);
        }
        .ag-radar::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: conic-gradient(from 0deg, transparent 70%, var(--accent-2));
          animation: ag-giro 2.6s linear infinite;
        }

        .ag-radio {
          margin-top: 2rem;
        }
        .ag-radio h2 {
          margin: 0 0 0.6rem;
          color: var(--text-strong);
          font-size: 1rem;
        }
        .ag-radio ol {
          display: grid;
          gap: 0.1rem;
          max-height: 260px;
          margin: 0;
          padding: 0;
          overflow-y: auto;
          list-style: none;
          font-size: 0.82rem;
        }
        .ag-radio li {
          display: grid;
          grid-template-columns: 62px minmax(70px, 130px) minmax(0, 1fr);
          gap: 0.6rem;
          padding: 0.2rem 0;
        }
        .ag-radio time {
          color: var(--muted);
          font-variant-numeric: tabular-nums;
        }
        .ag-radio b {
          overflow: hidden;
          color: var(--c);
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .ag-ayuda {
          margin-top: 2rem;
          padding: 0.9rem 1.25rem;
          border: 1px solid var(--border);
          border-radius: 0.8rem;
          background: var(--surface);
        }
        .ag-ayuda summary {
          color: var(--text-strong);
          font-size: 0.92rem;
          font-variation-settings: 'wght' 600;
          cursor: pointer;
        }
        .ag-ayuda[open] summary {
          margin-bottom: 1rem;
        }

        .ag-confeti {
          position: fixed;
          inset: 0;
          z-index: 50;
          overflow: hidden;
          pointer-events: none;
        }
        .ag-confeti i {
          position: absolute;
          top: -14px;
          width: 8px;
          height: 13px;
          animation: ag-caida 2.8s ease-in forwards;
        }

        @keyframes ag-pulso {
          0% {
            box-shadow: 0 0 0 0 rgba(165, 195, 143, 0.7);
          }
          100% {
            box-shadow: 0 0 0 9px rgba(165, 195, 143, 0);
          }
        }
        @keyframes ag-parpadeo {
          0%,
          94%,
          100% {
            transform: scaleY(1);
          }
          97% {
            transform: scaleY(0.1);
          }
        }
        @keyframes ag-bote {
          to {
            transform: translateY(-2px);
          }
        }
        @keyframes ag-paso {
          to {
            transform: translateY(-2px);
          }
        }
        @keyframes ag-luz {
          50% {
            opacity: 0.3;
          }
        }
        @keyframes ag-temblor {
          25% {
            transform: translateX(-1px);
          }
          75% {
            transform: translateX(1px);
          }
        }
        @keyframes ag-salto {
          0%,
          60%,
          100% {
            transform: translateY(0);
          }
          80% {
            transform: translateY(-7px);
          }
        }
        @keyframes ag-giro {
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes ag-caida {
          to {
            transform: translateY(105vh) rotate(540deg);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .ag *,
          .ag *::after {
            animation: none !important;
            transition: none !important;
          }
          .ag-confeti {
            display: none;
          }
        }
        @media (max-width: 720px) {
          .ag-fila {
            grid-template-columns: minmax(0, 1fr) auto;
          }
          .ag-pista,
          .ag-ahora,
          .ag-prueba,
          .ag-tareas,
          .ag-mas {
            grid-column: 1 / -1;
          }
          .ag-pista {
            grid-row: 2;
          }
          .ag-tareas {
            grid-template-columns: minmax(0, 1fr);
            gap: 0.75rem;
          }
        }
      `}</style>
    </main>
  )
}
