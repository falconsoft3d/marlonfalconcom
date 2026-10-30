import React, { useEffect, useState } from 'react'
import Icon from '../Icon'
import { api } from './api'
import { formatoFecha } from '../../lib/calendario/zona'

const LOCALE = 'es-ES'
const VACIO = { name: '', ics_url: '', color: '#b5aecf' }

const MOTIVOS = {
  'sin-configurar': 'Faltan GOOGLE_CLIENT_ID y GOOGLE_CLIENT_SECRET en las variables de entorno.',
  'enlace-caducado': 'La conexión tardó demasiado o el enlace no es válido. Vuelve a pulsar «Conectar con Google».',
  redirect_uri_mismatch: 'Google no reconoce el URI de redireccionamiento: añade en tu cliente OAuth el que aparece abajo, tal cual.',
  'sin-refresh-token': 'Google no devolvió permiso permanente. Quita el acceso de la app en myaccount.google.com/permissions y vuelve a conectar.',
  access_denied: 'Cancelaste el permiso en Google.'
}

const ocultarUrl = (url) => url.replace(/(private-)[^/]+/, '$1••••••').replace(/^(https:\/\/[^/]+\/).{12,}(.{10})$/, '$1…$2')
const cuando = (iso) => (iso ? formatoFecha(iso, 'Europe/Madrid', LOCALE, { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }) : 'nunca')

function Paso({ n, children }) {
  return (
    <li className="ca-paso">
      <span>{n}</span>
      <div>{children}</div>
    </li>
  )
}

// Cuentas de Google conectadas con OAuth: botón de conexión y elección de calendarios
function Google() {
  const [info, setInfo] = useState(null)
  const [error, setError] = useState('')
  const [aviso, setAviso] = useState('')
  const [ocupado, setOcupado] = useState(null)

  const cargar = () =>
    api('google/cuentas')
      .then(setInfo)
      .catch((e) => setError(e.message))

  useEffect(() => {
    cargar()
    const q = new URLSearchParams(window.location.search)
    if (q.get('google') === 'ok') setAviso(`Cuenta ${q.get('email')} conectada. Marca abajo qué calendarios cuentan como ocupados.`)
    if (q.get('google') === 'error') setError(MOTIVOS[q.get('motivo')] || `Google: ${q.get('motivo')}`)
    if (q.get('google')) window.history.replaceState(null, '', '/dashboard')
  }, [])

  const accion = async (cuenta, opciones) => {
    setOcupado(cuenta.id)
    setError('')
    try {
      await api('google/cuentas', { id: cuenta.id, ...opciones })
      await cargar()
    } catch (e) {
      setError(e.message)
    }
    setOcupado(null)
  }

  const alternarCalendario = (cuenta, id) => {
    const seleccion = cuenta.calendars.filter((c) => (c.id === id ? !c.selected : c.selected)).map((c) => c.id)
    accion(cuenta, { method: 'PATCH', body: { seleccion } })
  }

  const desconectar = (cuenta) => {
    if (window.confirm(`¿Desconectar ${cuenta.email}? Se revoca el permiso en Google.`)) accion(cuenta, { method: 'DELETE' })
  }

  return (
    <div className="db-card db-stack">
      <div className="db-head" style={{ marginBottom: 0 }}>
        <div>
          <h3>Cuentas de Google (Gmail)</h3>
          <p className="db-muted">La forma fácil: conecta cada cuenta con un clic. Solo se leen las horas ocupadas, nunca los títulos.</p>
        </div>
        {info?.configurado && (
          <a className="ca-google" href="/api/dashboard/google/conectar">
            <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
              <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.6 5.4 2.6 13.3l7.9 6.1C12.4 13.6 17.7 9.5 24 9.5z" />
              <path fill="#4285F4" d="M46.1 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.4c-.5 2.9-2.2 5.3-4.6 6.9l7.3 5.7c4.3-3.9 7-9.8 7-17.1z" />
              <path fill="#FBBC05" d="M10.5 28.6c-.5-1.4-.8-2.9-.8-4.6s.3-3.2.8-4.6l-7.9-6.1C.9 16.6 0 20.2 0 24s.9 7.4 2.6 10.7l7.9-6.1z" />
              <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.3-5.7c-2 1.4-4.7 2.3-8.6 2.3-6.3 0-11.6-4.1-13.5-9.9l-7.9 6.1C6.6 42.6 14.6 48 24 48z" />
            </svg>
            {info.cuentas?.length ? 'Conectar otra cuenta de Google' : 'Conectar con Google'}
          </a>
        )}
      </div>

      {aviso && <p className="db-ok">{aviso}</p>}
      {error && <p className="db-error">{error}</p>}
      {!info && !error && <p className="db-muted">Cargando…</p>}

      {/* Si Google responde redirect_uri_mismatch, este URI no está en el cliente OAuth tal cual */}
      {info?.configurado && (
        <div className="ca-uri">
          <span className="db-muted">URI de redireccionamiento que debe estar autorizado en Google Cloud:</span>
          <div className="db-row">
            <code style={{ flex: 1 }}>{info.redirectUri}</code>
            <button type="button" className="db-btn ghost" onClick={() => navigator.clipboard?.writeText(info.redirectUri).then(() => setAviso('URI copiado.'))}>
              Copiar
            </button>
          </div>
        </div>
      )}

      {info && !info.configurado && (
        <details className="ca-guia" open>
          <summary>Activar el botón «Conectar con Google» (una sola vez)</summary>
          <ol>
            <Paso n="1">
              Entra en <a href="https://console.cloud.google.com/projectcreate" target="_blank" rel="noopener noreferrer">Google Cloud Console</a> y crea un proyecto
              (p. ej. «marlonfalcon calendario»).
            </Paso>
            <Paso n="2">
              Activa la <a href="https://console.cloud.google.com/apis/library/calendar-json.googleapis.com" target="_blank" rel="noopener noreferrer">Google Calendar API</a>.
            </Paso>
            <Paso n="3">
              En <a href="https://console.cloud.google.com/auth/branding" target="_blank" rel="noopener noreferrer">Google Auth Platform</a> configura la pantalla de
              consentimiento: tipo <b>Externo</b>, tu email como soporte, y en <b>Público</b> pulsa <b>Publicar app</b> (en modo «Prueba» Google corta la conexión a los 7 días).
            </Paso>
            <Paso n="4">
              En <a href="https://console.cloud.google.com/auth/clients" target="_blank" rel="noopener noreferrer">Clientes</a> crea un <b>ID de cliente OAuth</b> de tipo
              <b> Aplicación web</b> con estos URI de redireccionamiento autorizados (producción, con www, y local):
              <code>https://www.marlonfalcon.com/api/dashboard/google/callback</code>
              <code>http://localhost:3000/api/dashboard/google/callback</code>
              Tienen que coincidir letra por letra con el que usa esta página: <code>{info.redirectUri}</code>
            </Paso>
            <Paso n="5">
              Copia el ID y el secreto en Vercel (y en <code>.env.local</code>) como <code>GOOGLE_CLIENT_ID</code> y <code>GOOGLE_CLIENT_SECRET</code>, y vuelve a desplegar.
            </Paso>
            <Paso n="6">
              Pulsa «Conectar con Google». Como la app no está verificada, Google avisa: entra en <b>Configuración avanzada → Ir a … (no seguro)</b>. Es tu propia app.
            </Paso>
          </ol>
        </details>
      )}

      {info?.cuentas?.map((cuenta) => (
        <div key={cuenta.id} className="ca-cuenta">
          <div className="ca-cuenta-cab">
            <div>
              <b>{cuenta.email}</b> {!cuenta.active && <span className="db-tag off">Pausada</span>}
              <div className="db-muted">
                Calendarios leídos: {cuando(cuenta.last_sync_at)}
                {cuenta.last_error && <span className="db-tag off"> {cuenta.last_error}</span>}
              </div>
            </div>
            <div className="db-row">
              <button type="button" className="db-btn ghost" disabled={ocupado === cuenta.id} onClick={() => accion(cuenta, { method: 'POST' })}>
                <Icon name="refresh" size={15} /> Releer calendarios
              </button>
              <button
                type="button"
                className="db-btn ghost"
                disabled={ocupado === cuenta.id}
                onClick={() => accion(cuenta, { method: 'PATCH', body: { active: !cuenta.active } })}
              >
                {cuenta.active ? 'Pausar' : 'Activar'}
              </button>
              <button type="button" className="db-btn danger" disabled={ocupado === cuenta.id} onClick={() => desconectar(cuenta)}>
                Desconectar
              </button>
            </div>
          </div>
          <div className="ca-cals">
            {(cuenta.calendars || []).map((c) => (
              <label key={c.id} className="db-check">
                <input type="checkbox" checked={!!c.selected} disabled={ocupado === cuenta.id} onChange={() => alternarCalendario(cuenta, c.id)} />
                <i style={{ background: c.color || 'var(--p-lavender)' }} />
                {c.summary} {c.primary && <span className="db-tag">principal</span>}
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

// Calendarios por dirección iCal: Outlook, iCloud, Odoo… o Google sin OAuth
function Ics() {
  const [calendarios, setCalendarios] = useState(null)
  const [form, setForm] = useState(VACIO)
  const [error, setError] = useState('')
  const [ocupado, setOcupado] = useState(null)

  const cargar = () =>
    api('calendarios')
      .then(setCalendarios)
      .catch((e) => setError(e.message))
  useEffect(() => {
    cargar()
  }, [])

  const sincronizar = async (id) => {
    setOcupado(id)
    try {
      await api('sincronizar', { method: 'POST', body: { id } })
      await cargar()
    } catch (e) {
      setError(e.message)
    }
    setOcupado(null)
  }

  const crear = async (e) => {
    e.preventDefault()
    setError('')
    setOcupado('nuevo')
    try {
      const nuevo = await api('calendarios', { method: 'POST', body: form })
      setForm(VACIO)
      await sincronizar(nuevo.id)
    } catch (err) {
      setError(err.message)
    }
    setOcupado(null)
  }

  const cambiar = async (c, cambios) => {
    try {
      await api('calendarios', { method: 'PATCH', id: c.id, body: cambios })
      await cargar()
    } catch (e) {
      setError(e.message)
    }
  }

  const quitar = async (c) => {
    if (!window.confirm(`¿Quitar el calendario “${c.name}”?`)) return
    try {
      await api('calendarios', { method: 'DELETE', id: c.id })
      await cargar()
    } catch (e) {
      setError(e.message)
    }
  }

  return (
    <div className="db-card db-stack">
      <div>
        <h3>Calendarios por dirección iCal</h3>
        <p className="db-muted">Para Outlook, iCloud u otros, o para añadir un calendario de Google sin conectar la cuenta.</p>
      </div>

      <details className="ca-guia">
        <summary>Cómo añadir cada calendario de Google con su dirección secreta iCal</summary>
        <ol>
          <Paso n="1">
            Abre <a href="https://calendar.google.com/calendar/r/settings" target="_blank" rel="noopener noreferrer">Google Calendar → Configuración</a> en el ordenador
            (desde el móvil no se puede).
          </Paso>
          <Paso n="2">
            En la columna izquierda, en <b>Configuración de mis calendarios</b>, pulsa el calendario que quieras (tu calendario principal tiene tu nombre o tu email).
          </Paso>
          <Paso n="3">
            Baja hasta <b>Integrar el calendario</b> y copia la <b>Dirección secreta en formato iCal</b> (termina en <code>/basic.ics</code>). No uses la «dirección
            pública»: solo funciona si el calendario es público. En cuentas de empresa (Google Workspace) a veces no aparece la secreta: usa «Conectar con
            Google» o, en <b>Permisos de acceso a eventos</b>, hazlo público con <b>Ver solo libre/ocupado</b> y pega la dirección pública.
          </Paso>
          <Paso n="4">Pégala abajo con un nombre (p. ej. «Gmail personal») y pulsa Añadir. Se comprueba al momento y verás cuántos eventos ocupados tiene.</Paso>
          <Paso n="5">
            Repite con cada calendario y cada cuenta de Gmail. Google actualiza esta dirección cada pocas horas; para que se vea al momento usa «Conectar con Google».
          </Paso>
        </ol>
        <p className="db-muted">
          Outlook: Configuración → Calendario → Calendarios compartidos → Publicar un calendario → copia el enlace ICS. iCloud: en el calendario, Compartir → Calendario público
          → copia el enlace (webcal://).
        </p>
      </details>

      <form className="db-row" onSubmit={crear}>
        <label className="db-field" style={{ flex: '1 1 180px' }}>
          Nombre
          <input required value={form.name} placeholder="Gmail personal" onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </label>
        <label className="db-field" style={{ flex: '3 1 320px' }}>
          Dirección iCal (https:// o webcal://)
          <input required value={form.ics_url} placeholder="https://calendar.google.com/calendar/ical/…/basic.ics" onChange={(e) => setForm({ ...form, ics_url: e.target.value })} />
        </label>
        <label className="db-field">
          Color
          <input type="color" value={form.color} onChange={(e) => setForm({ ...form, color: e.target.value })} />
        </label>
        <button type="submit" className="db-btn" disabled={ocupado === 'nuevo'}>
          <Icon name="plus" size={16} /> {ocupado === 'nuevo' ? 'Comprobando…' : 'Añadir'}
        </button>
      </form>

      {error && <p className="db-error">{error}</p>}
      {calendarios && !calendarios.length && <p className="db-muted">Aún no hay calendarios iCal.</p>}
      {calendarios?.map((c) => (
        <div key={c.id} className="ca-cuenta ca-cuenta-cab">
          <div style={{ minWidth: 0 }}>
            <b>
              <i className="ca-color" style={{ background: c.color || 'var(--p-lavender)' }} /> {c.name}
            </b>{' '}
            {!c.active && <span className="db-tag off">Pausado</span>}
            <div className="db-muted">
              <code>{ocultarUrl(c.ics_url)}</code>
            </div>
            <div className="db-muted">
              Leído: {cuando(c.last_sync_at)}
              {c.last_error ? <span className="db-tag off"> {c.last_error}</span> : c.events_count != null && ` · ${c.events_count} eventos ocupados próximos`}
            </div>
          </div>
          <div className="db-row">
            <button type="button" className="db-btn ghost" disabled={ocupado === c.id} onClick={() => sincronizar(c.id)}>
              <Icon name="refresh" size={15} /> {ocupado === c.id ? 'Leyendo…' : 'Probar'}
            </button>
            <button type="button" className="db-btn ghost" onClick={() => cambiar(c, { active: !c.active })}>
              {c.active ? 'Pausar' : 'Activar'}
            </button>
            <button type="button" className="db-btn ghost icon" onClick={() => quitar(c)} aria-label={`Quitar ${c.name}`}>
              <Icon name="trash" size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Calendarios({ ajustes }) {
  const [copiado, setCopiado] = useState(false)
  const [origen, setOrigen] = useState('https://marlonfalcon.com')
  useEffect(() => setOrigen(window.location.origin), [])
  const feed = ajustes?.feed_token ? `${origen}/api/calendario/feed?token=${ajustes.feed_token}` : ''

  const copiar = () => {
    navigator.clipboard?.writeText(feed).then(() => setCopiado(true))
  }

  return (
    <>
      <div className="db-head">
        <div>
          <h2>Calendarios conectados</h2>
          <p className="db-muted">Sus horas ocupadas no se pueden reservar en /calendario. Puedes conectar varios.</p>
        </div>
      </div>

      <div className="db-stack">
        <Google />
        <Ics />

        {feed && (
          <div className="db-card db-stack">
            <div>
              <h3>Ver las reservas en tu Google Calendar</h3>
              <p className="db-muted">
                En Google Calendar: Otros calendarios → <b>+</b> → Desde URL, y pega esta dirección privada. Google la consulta cada pocas horas.
              </p>
            </div>
            <div className="db-row">
              <code style={{ flex: 1 }}>{feed}</code>
              <button type="button" className="db-btn ghost" onClick={copiar}>
                {copiado ? 'Copiada' : 'Copiar'}
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        .ca-google {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          height: 42px;
          padding: 0 1.1rem;
          border: 1px solid #dadce0;
          border-radius: 999px;
          background: #fff;
          color: #3c4043 !important;
          font-size: 0.9rem;
          font-variation-settings: 'wght' 600;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12);
          white-space: nowrap;
        }
        .ca-google:hover {
          background: #f8faff;
          border-color: #c6dafc;
        }
        .ca-uri {
          display: grid;
          gap: 0.35rem;
          font-size: 0.85rem;
        }
        .ca-cuenta {
          padding: 0.9rem 1rem;
          border: 1px solid var(--border);
          border-radius: 0.75rem;
          background: var(--surface-2);
        }
        .ca-cuenta-cab {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.75rem;
        }
        .ca-cals {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem 1.25rem;
          margin-top: 0.75rem;
          padding-top: 0.75rem;
          border-top: 1px solid var(--border);
        }
        .ca-cals i,
        .ca-color {
          display: inline-block;
          width: 10px;
          height: 10px;
          border-radius: 3px;
        }
        .ca-guia {
          padding: 0.75rem 1rem;
          border: 1px solid var(--tint-border);
          border-radius: 0.75rem;
          background: var(--tint);
        }
        .ca-guia summary {
          color: var(--text-strong);
          font-variation-settings: 'wght' 600;
          cursor: pointer;
        }
        .ca-guia ol {
          display: grid;
          gap: 0.6rem;
          margin: 0.9rem 0 0.5rem;
          padding: 0;
          list-style: none;
        }
        .ca-paso {
          display: flex;
          gap: 0.7rem;
          margin: 0;
          font-size: 0.9rem;
        }
        .ca-paso > span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 50%;
          background: var(--accent-2);
          color: #fff;
          font-size: 0.75rem;
          font-variation-settings: 'wght' 700;
        }
        html.dark .ca-paso > span {
          color: var(--on-accent);
        }
        .ca-paso code {
          display: block;
          margin: 0.35rem 0;
        }
      `}</style>
    </>
  )
}
