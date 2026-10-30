import React, { useCallback, useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Icon from '../Icon'
import { api } from './api'
import Reservas from './Reservas'
import Mensajes from './Mensajes'
import Ocupado from './Ocupado'
import Horario from './Horario'
import Bloqueos from './Bloqueos'
import Calendarios from './Calendarios'
import Eventos from './Eventos'
import Agentes from './Agentes'

const PESTANAS = [
  ['reservas', 'Reservas', 'users'],
  ['mensajes', 'Mensajes', 'mail'],
  ['ocupado', 'Horas ocupadas', 'calendar'],
  ['horario', 'Horario', 'clock'],
  ['bloqueos', 'No trabajo', 'close'],
  ['calendarios', 'Calendarios', 'refresh'],
  ['eventos', 'Reuniones', 'chat'],
  ['agentes', 'Agentes', 'rocket']
]

function Login({ alEntrar }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [enviando, setEnviando] = useState(false)

  const entrar = async (e) => {
    e.preventDefault()
    setEnviando(true)
    setError('')
    try {
      await api('login', { method: 'POST', body: { password } })
      alEntrar()
    } catch (err) {
      setError(err.message)
      setEnviando(false)
    }
  }

  return (
    <form className="db-login" onSubmit={entrar}>
      <h1>Dashboard</h1>
      <p className="db-muted">Configura el calendario de reservas de /calendario.</p>
      <label className="db-field">
        Contraseña
        <input type="password" autoComplete="current-password" autoFocus value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      {error && <p className="db-error">{error}</p>}
      <button className="db-btn" type="submit" disabled={enviando || !password}>
        {enviando ? 'Entrando…' : 'Entrar'}
      </button>
    </form>
  )
}

// /dashboard: configuración del calendario de reservas guardada en falcondatabase
export default function Dashboard() {
  const [sesion, setSesion] = useState(null)
  const [errorSesion, setErrorSesion] = useState('')
  const [pestana, setPestana] = useState('reservas')
  const [ajustes, setAjustes] = useState(null)

  useEffect(() => {
    api('login')
      .then((r) => setSesion(r.sesion))
      .catch((e) => setErrorSesion(e.message))
    // Al volver de Google la URL trae ?pestana=calendarios
    let guardada = new URLSearchParams(window.location.search).get('pestana')
    try {
      guardada = guardada || sessionStorage.getItem('dashboard-pestana')
    } catch (e) {}
    if (PESTANAS.some(([id]) => id === guardada)) setPestana(guardada)
  }, [])

  const cargarAjustes = useCallback(() => api('ajustes').then((filas) => setAjustes(filas[0] || null)), [])

  useEffect(() => {
    if (sesion) cargarAjustes().catch((e) => e.status === 401 && setSesion(false))
  }, [sesion, cargarAjustes])

  const elegir = (id) => {
    setPestana(id)
    try {
      sessionStorage.setItem('dashboard-pestana', id)
    } catch (e) {}
  }

  const salir = async () => {
    await api('login', { method: 'DELETE' }).catch(() => {})
    setSesion(false)
  }

  const zona = ajustes?.timezone || 'Europe/Madrid'
  const props = { zona, ajustes, cargarAjustes }

  return (
    <div className="db">
      <Head>
        <title>Dashboard · Calendario</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      {errorSesion && <p className="db-error">{errorSesion}</p>}
      {sesion === false && <Login alEntrar={() => setSesion(true)} />}

      {sesion && (
        <>
          <div className="db-top">
            <div>
              <h1>Calendario de reservas</h1>
              <p className="db-muted">
                Página pública:{' '}
                <Link href="/calendario">
                  <a target="_blank">marlonfalcon.com/calendario</a>
                </Link>{' '}
                · Zona del horario: <b>{zona}</b>
              </p>
            </div>
            <button type="button" className="db-btn ghost" onClick={salir}>
              Salir
            </button>
          </div>

          <nav className="db-tabs" aria-label="Secciones">
            {PESTANAS.map(([id, etiqueta, icono]) => (
              <button key={id} type="button" className={pestana === id ? 'on' : ''} onClick={() => elegir(id)} aria-current={pestana === id ? 'page' : undefined}>
                <Icon name={icono} size={16} /> {etiqueta}
              </button>
            ))}
          </nav>

          <section className="db-panel">
            {pestana === 'reservas' && <Reservas {...props} />}
            {pestana === 'mensajes' && <Mensajes {...props} />}
            {pestana === 'ocupado' && <Ocupado {...props} />}
            {pestana === 'horario' && <Horario {...props} />}
            {pestana === 'bloqueos' && <Bloqueos {...props} />}
            {pestana === 'calendarios' && <Calendarios {...props} />}
            {pestana === 'eventos' && <Eventos {...props} />}
            {pestana === 'agentes' && <Agentes {...props} />}
          </section>
        </>
      )}

      <style jsx global>{`
        .db {
          max-width: 1180px;
          margin: 0 auto;
          padding: 2rem 1.25rem 5rem;
          color: var(--text);
        }
        .db h1 {
          margin: 0;
          font-size: clamp(1.6rem, 3.5vw, 2.1rem);
          letter-spacing: -0.02em;
          color: var(--text-strong);
        }
        .db h2 {
          margin: 0 0 0.25rem;
          font-size: 1.2rem;
          color: var(--text-strong);
        }
        .db h3 {
          margin: 0 0 0.5rem;
          font-size: 1rem;
          color: var(--text-strong);
        }
        .db a {
          color: var(--accent-2);
          text-decoration: none;
        }
        .db-muted {
          margin: 0.25rem 0 0;
          color: var(--muted);
          font-size: 0.9rem;
        }
        .db-error {
          margin: 0.75rem 0;
          padding: 0.65rem 0.9rem;
          border-radius: 0.6rem;
          background: rgba(220, 90, 90, 0.12);
          color: #c0392b;
          font-size: 0.88rem;
        }
        html.dark .db-error {
          color: #f2a39b;
        }
        .db-ok {
          color: #3e6b26;
          font-size: 0.88rem;
        }
        html.dark .db-ok {
          color: var(--p-green);
        }

        .db-login {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-width: 360px;
          margin: 4rem auto;
          padding: 2rem;
          border: 1px solid var(--border);
          border-radius: 1rem;
          background: var(--surface);
        }

        .db-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .db-tabs {
          display: flex;
          gap: 0.25rem;
          margin-bottom: 1.5rem;
          padding-bottom: 0.25rem;
          border-bottom: 1px solid var(--border);
          overflow-x: auto;
        }
        .db-tabs button {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          flex-shrink: 0;
          padding: 0.6rem 0.9rem;
          border: 0;
          border-radius: 0.6rem 0.6rem 0 0;
          background: transparent;
          color: var(--muted);
          font: inherit;
          font-size: 0.9rem;
          cursor: pointer;
        }
        .db-tabs button:hover {
          color: var(--text-strong);
        }
        .db-tabs button.on {
          color: var(--text-strong);
          background: var(--surface);
          box-shadow: inset 0 -2px 0 var(--accent-2);
          font-variation-settings: 'wght' 600;
        }

        .db-head {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-end;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }
        .db-card {
          padding: 1.25rem;
          border: 1px solid var(--border);
          border-radius: 0.9rem;
          background: var(--surface);
        }
        .db-stack {
          display: grid;
          gap: 0.75rem;
        }
        .db-row {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-end;
          gap: 0.75rem;
        }
        .db-grid2 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 0.75rem;
        }

        .db-field {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          min-width: 0;
          color: var(--text-strong);
          font-size: 0.82rem;
          font-variation-settings: 'wght' 600;
        }
        .db-field small {
          color: var(--muted);
          font-variation-settings: 'wght' 450;
        }
        .db input:not([type='checkbox']):not([type='color']),
        .db select,
        .db textarea {
          min-width: 0;
          padding: 0.55rem 0.7rem;
          border: 1px solid var(--border);
          border-radius: 0.55rem;
          background: var(--surface-2);
          color: var(--text-strong);
          font: inherit;
          font-size: 0.9rem;
          font-variation-settings: 'wght' 450;
        }
        .db input[type='color'] {
          width: 42px;
          height: 38px;
          padding: 2px;
          border: 1px solid var(--border);
          border-radius: 0.55rem;
          background: var(--surface-2);
        }
        .db-check {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.88rem;
          cursor: pointer;
        }

        .db-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          min-height: 38px;
          padding: 0 1rem;
          border: 1px solid transparent;
          border-radius: 999px;
          background: var(--accent);
          color: var(--on-accent);
          font: inherit;
          font-size: 0.88rem;
          font-variation-settings: 'wght' 650;
          white-space: nowrap;
          cursor: pointer;
        }
        .db-btn:hover {
          background: var(--accent-hover);
        }
        .db-btn:disabled {
          opacity: 0.55;
          cursor: not-allowed;
        }
        .db-btn.ghost {
          background: transparent;
          border-color: var(--border);
          color: var(--text-strong);
        }
        .db-btn.ghost:hover {
          border-color: var(--accent-2);
        }
        .db-btn.danger {
          background: transparent;
          border-color: rgba(220, 90, 90, 0.45);
          color: #c0392b;
        }
        html.dark .db-btn.danger {
          color: #f2a39b;
        }
        .db-btn.icon {
          width: 38px;
          padding: 0;
        }

        .db-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.88rem;
        }
        .db-table th {
          padding: 0.6rem 0.75rem;
          border-bottom: 1px solid var(--border);
          color: var(--muted);
          font-size: 0.75rem;
          font-variation-settings: 'wght' 600;
          letter-spacing: 0.03em;
          text-align: left;
          text-transform: uppercase;
        }
        .db-table td {
          padding: 0.75rem;
          border-bottom: 1px solid var(--border);
          vertical-align: top;
        }
        .db-scroll {
          overflow-x: auto;
        }
        .db-tag {
          display: inline-block;
          padding: 0.15rem 0.55rem;
          border-radius: 999px;
          background: var(--tint);
          color: var(--accent-2);
          font-size: 0.75rem;
          font-variation-settings: 'wght' 600;
        }
        .db-tag.off {
          background: rgba(220, 90, 90, 0.12);
          color: #c0392b;
        }
        .db-empty {
          padding: 2rem;
          border: 1px dashed var(--border);
          border-radius: 0.9rem;
          color: var(--muted);
          text-align: center;
        }
        .db code {
          padding: 0.1rem 0.35rem;
          border-radius: 0.3rem;
          background: var(--surface-2);
          font-size: 0.82em;
          word-break: break-all;
        }

        @media (max-width: 640px) {
          .db-top {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}
