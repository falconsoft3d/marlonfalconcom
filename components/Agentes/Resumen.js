import React, { useEffect, useMemo, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Robot from './Robot'
import { ESTADOS, SIN_SENAL_MS, resumirAgentes } from './instrucciones'

const SONDEO_MS = 5000
const SONDEO_OCULTA_MS = 30000

const sinSenal = (agente, ahora) => ahora && agente.estado === 'trabajando' && ahora - new Date(agente.actualizado) > SIN_SENAL_MS

function hace(fecha, ahora) {
  if (!fecha || !ahora) return ''
  const minutos = Math.floor((ahora - new Date(fecha)) / 60000)
  if (minutos < 1) return 'ahora mismo'
  if (minutos < 60) return `hace ${minutos} min`
  const horas = Math.floor(minutos / 60)
  return horas < 24 ? `hace ${horas} h` : `hace ${Math.floor(horas / 24)} d`
}

// Lo que necesita atención va primero y lo terminado, al final
function urgencia(sala, ahora) {
  if (sala.problemas) return 0
  if (sala.agentes.some((a) => sinSenal(a, ahora))) return 1
  if (sala.terminada) return 4
  if (sala.agentes.some((a) => a.estado === 'trabajando')) return 2
  return 3
}

function Tarjeta({ sala, ahora }) {
  const problemas = sala.agentes.filter((a) => a.estado === 'bloqueado' || a.estado === 'error')
  const enCurso = sala.agentes.filter((a) => a.estado !== 'terminado')
  const terminados = sala.agentes.length - enCurso.length

  return (
    <Link href={`/agentes/${sala.token}`}>
      <a className={`rs-torre${problemas.length ? ' alerta' : ''}${sala.terminada ? ' fin' : ''}`}>
        <div className="rs-cabeza">
          <h2>{sala.titulo}</h2>
          <strong>{sala.agentes.length ? `${sala.progreso}%` : '—'}</strong>
        </div>
        <div className="rs-barra">
          <div style={{ width: `${sala.progreso}%` }} />
        </div>
        <p className="rs-datos">
          {sala.agentes.length ? `${sala.agentes.length} ${sala.agentes.length === 1 ? 'agente' : 'agentes'} · ${sala.hechas} de ${sala.hechas + sala.pendientes} tareas` : 'Esperando al primer agente'}
          {sala.ultimo && ahora ? ` · ${hace(sala.ultimo, ahora)}` : ''}
        </p>

        {problemas.map((a) => (
          <p key={a.nombre} className="rs-problema">
            <b>
              {a.nombre}: {ESTADOS[a.estado].toLowerCase()}
            </b>{' '}
            {a.tarea}
          </p>
        ))}

        {enCurso.length > 0 && (
          <ul>
            {enCurso.map((a) => (
              <li key={a.nombre}>
                <Robot nombre={a.nombre} estado={a.estado} size={18} />
                <span className="rs-agente">
                  <b>{a.nombre}</b>
                  {a.tarea && <small>{a.tarea}</small>}
                </span>
                <span className="rs-pct">{sinSenal(a, ahora) ? 'Sin señal' : `${a.progreso}%`}</span>
              </li>
            ))}
          </ul>
        )}
        {terminados > 0 && !sala.terminada && <p className="rs-datos">{terminados === 1 ? '1 agente terminado' : `${terminados} agentes terminados`}</p>}
      </a>
    </Link>
  )
}

// /agentes/resumen/<token>: todas las torres abiertas de un vistazo, pensado para el móvil
export default function Resumen({ token, inicial }) {
  const [datos, setDatos] = useState(inicial)
  const [ahora, setAhora] = useState(null)
  const [desconectado, setDesconectado] = useState(false)

  useEffect(() => {
    let activa = true
    let espera

    const leer = async () => {
      clearTimeout(espera)
      try {
        const res = await fetch(`/api/agentes/resumen/${token}`)
        if (!res.ok) throw new Error()
        const nuevos = await res.json()
        if (!activa) return
        setDatos(nuevos)
        setDesconectado(false)
      } catch (e) {
        if (activa) setDesconectado(true)
      }
      if (activa) espera = setTimeout(leer, document.hidden ? SONDEO_OCULTA_MS : SONDEO_MS)
    }

    // El móvil congela los temporizadores: al volver a la página se lee en el momento
    const alVolver = () => !document.hidden && leer()
    document.addEventListener('visibilitychange', alVolver)
    espera = setTimeout(leer, SONDEO_MS)
    return () => {
      activa = false
      clearTimeout(espera)
      document.removeEventListener('visibilitychange', alVolver)
    }
  }, [token])

  useEffect(() => {
    setAhora(Date.now())
    const reloj = setInterval(() => setAhora(Date.now()), 15000)
    return () => clearInterval(reloj)
  }, [])

  const salas = useMemo(
    () =>
      datos.salas
        .map((s) => ({ ...s, ...resumirAgentes(s.agentes) }))
        .sort((a, b) => urgencia(a, ahora) - urgencia(b, ahora) || ((a.ultimo || '') < (b.ultimo || '') ? 1 : -1)),
    [datos, ahora]
  )

  const conProblemas = salas.filter((s) => s.problemas).length
  const enMarcha = salas.filter((s) => !s.terminada && s.agentes.length).length

  return (
    <main className="rs">
      <Head>
        <title>{`${conProblemas ? '🔴 ' : ''}Torres · ${enMarcha} en marcha`}</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Torres" />
      </Head>

      <header className="rs-top">
        <p>
          <span className={desconectado ? 'off' : ''} /> Torre de control
        </p>
        <h1>
          {enMarcha} {enMarcha === 1 ? 'torre en marcha' : 'torres en marcha'}
        </h1>
        <p className={`rs-estado${conProblemas ? ' mal' : ''}`}>
          {desconectado ? 'Sin conexión. Reintentando…' : conProblemas ? `${conProblemas} con problemas` : `${salas.length} ${salas.length === 1 ? 'sala abierta' : 'salas abiertas'}, todo en orden`}
        </p>
      </header>

      {!salas.length && <p className="rs-vacio">No hay salas abiertas. Crea una en el dashboard.</p>}

      <div className="rs-lista">
        {salas.map((s) => (
          <Tarjeta key={s.token} sala={s} ahora={ahora} />
        ))}
      </div>

      <style jsx global>{`
        .rs {
          max-width: 640px;
          min-height: 100vh;
          margin: 0 auto;
          padding: max(1rem, env(safe-area-inset-top)) 1rem 3rem;
          color: var(--text);
        }
        .rs-top {
          padding: 0.5rem 0.25rem 1rem;
        }
        .rs-top p {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          margin: 0;
          color: var(--muted);
          font-size: 0.72rem;
          font-variation-settings: 'wght' 650;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .rs-top span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--p-green);
        }
        .rs-top span.off {
          background: #dc5a5a;
        }
        .rs-top h1 {
          margin: 0.2rem 0;
          color: var(--text-strong);
          font-size: 1.7rem;
          letter-spacing: -0.02em;
        }
        .rs-top .rs-estado {
          color: var(--muted);
          font-size: 0.9rem;
          font-variation-settings: 'wght' 450;
          letter-spacing: 0;
          text-transform: none;
        }
        .rs-top .rs-estado.mal {
          color: #dc5a5a;
          font-variation-settings: 'wght' 650;
        }
        .rs-lista {
          display: grid;
          gap: 0.75rem;
        }
        .rs-torre {
          display: block;
          padding: 0.95rem 1rem;
          border: 1px solid var(--border);
          border-radius: 0.9rem;
          background: var(--surface);
          color: inherit;
          text-decoration: none;
        }
        .rs-torre:active {
          background: var(--surface-2);
        }
        .rs-torre.alerta {
          border-color: rgba(220, 90, 90, 0.6);
          background: rgba(220, 90, 90, 0.07);
        }
        .rs-torre.fin {
          opacity: 0.65;
        }
        .rs-cabeza {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 0.75rem;
        }
        .rs-cabeza h2 {
          min-width: 0;
          margin: 0;
          overflow: hidden;
          color: var(--text-strong);
          font-size: 1.05rem;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .rs-cabeza strong {
          flex-shrink: 0;
          color: var(--text-strong);
          font-size: 1.35rem;
          font-variant-numeric: tabular-nums;
        }
        .rs-barra {
          height: 8px;
          margin: 0.45rem 0;
          overflow: hidden;
          border-radius: 999px;
          background: var(--surface-2);
          box-shadow: inset 0 0 0 1px var(--border);
        }
        .rs-barra div {
          height: 100%;
          border-radius: 999px;
          background: var(--accent-2);
          transition: width 0.8s ease;
        }
        .rs-torre.alerta .rs-barra div {
          background: #dc5a5a;
        }
        .rs-torre.fin .rs-barra div {
          background: var(--p-green);
        }
        .rs-datos {
          margin: 0;
          color: var(--muted);
          font-size: 0.8rem;
        }
        .rs-problema {
          margin: 0.5rem 0 0;
          font-size: 0.85rem;
          line-height: 1.35;
        }
        .rs-problema b {
          color: #dc5a5a;
        }
        .rs-torre ul {
          display: grid;
          gap: 0.45rem;
          margin: 0.65rem 0 0;
          padding: 0.6rem 0 0;
          border-top: 1px solid var(--border);
          list-style: none;
        }
        .rs-torre li {
          display: grid;
          grid-template-columns: 20px minmax(0, 1fr) auto;
          gap: 0.55rem;
          align-items: center;
        }
        .rs-agente {
          min-width: 0;
        }
        .rs-agente b,
        .rs-agente small {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .rs-agente b {
          color: var(--text-strong);
          font-size: 0.85rem;
        }
        .rs-agente small {
          color: var(--muted);
          font-size: 0.75rem;
        }
        .rs-pct {
          color: var(--text-strong);
          font-size: 0.8rem;
          font-variant-numeric: tabular-nums;
        }
        .rs-vacio {
          padding: 2rem 1rem;
          border: 1px dashed var(--border);
          border-radius: 0.9rem;
          color: var(--muted);
          text-align: center;
        }
      `}</style>
    </main>
  )
}
