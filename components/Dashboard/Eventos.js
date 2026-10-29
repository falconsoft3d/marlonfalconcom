import React, { useEffect, useState } from 'react'
import Icon from '../Icon'
import { api } from './api'

// Título, lugar y descripción se traducen; en español el campo no lleva sufijo
const IDIOMAS = [
  ['es', 'Español'],
  ['en', 'Inglés'],
  ['ca', 'Catalán'],
  ['ru', 'Ruso']
]
const TRADUCIBLES = ['title', 'location', 'description']
const sufijo = (idioma) => (idioma === 'es' ? '' : `_${idioma}`)

const CAMPOS = ['slug', 'duration_minutes', 'active', 'sort_order', ...TRADUCIBLES.flatMap((c) => IDIOMAS.map(([i]) => c + sufijo(i)))]
const NUEVO = { ...Object.fromEntries(CAMPOS.map((c) => [c, ''])), duration_minutes: 60, active: true, sort_order: 0 }

const aSlug = (texto) =>
  texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

function FormEvento({ inicial, alGuardar, alBorrar }) {
  const [form, setForm] = useState(inicial)
  const [estado, setEstado] = useState('')
  const [error, setError] = useState('')
  const [idioma, setIdioma] = useState('es')
  const nuevo = !inicial.id
  const s = sufijo(idioma)
  const respaldo = idioma === 'ca' ? 'el español' : idioma === 'ru' ? 'el inglés' : idioma === 'en' ? 'el español' : ''
  const set = (campo, valor) => {
    setForm({ ...form, [campo]: valor })
    setEstado('')
  }

  const guardar = async (e) => {
    e.preventDefault()
    setError('')
    setEstado('guardando')
    const cuerpo = Object.fromEntries(CAMPOS.map((c) => [c, form[c]]))
    cuerpo.duration_minutes = Number(cuerpo.duration_minutes)
    cuerpo.sort_order = Number(cuerpo.sort_order)
    try {
      await api('eventos', nuevo ? { method: 'POST', body: cuerpo } : { method: 'PATCH', id: form.id, body: cuerpo })
      setEstado('guardado')
      await alGuardar()
    } catch (err) {
      setError(err.message)
      setEstado('')
    }
  }

  return (
    <form className="db-card db-stack" onSubmit={guardar}>
      <div className="db-head" style={{ marginBottom: 0 }}>
        <h3>{nuevo ? 'Nueva reunión' : form.title}</h3>
        <label className="db-check">
          <input type="checkbox" checked={form.active} onChange={(e) => set('active', e.target.checked)} /> Visible en /calendario
        </label>
      </div>
      <div className="ev-idiomas" role="tablist" aria-label="Idioma de los textos">
        {IDIOMAS.map(([i, nombre]) => (
          <button key={i} type="button" role="tab" aria-selected={idioma === i} className={idioma === i ? 'on' : ''} onClick={() => setIdioma(i)}>
            {nombre}
          </button>
        ))}
        {respaldo && <span className="db-muted">Si lo dejas vacío se muestra {respaldo}.</span>}
      </div>
      <div className="db-grid2">
        <label className="db-field">
          Título
          <input
            required={idioma === 'es'}
            value={form[`title${s}`] || ''}
            onChange={(e) =>
              idioma === 'es' ? setForm({ ...form, title: e.target.value, slug: nuevo ? aSlug(e.target.value) : form.slug }) : set(`title${s}`, e.target.value)
            }
          />
        </label>
        <label className="db-field">
          Lugar
          <input value={form[`location${s}`] || ''} placeholder="Google Meet, WhatsApp, teléfono…" onChange={(e) => set(`location${s}`, e.target.value)} />
        </label>
        <label className="db-field" style={{ gridColumn: '1 / -1' }}>
          Descripción
          <textarea rows={3} value={form[`description${s}`] || ''} onChange={(e) => set(`description${s}`, e.target.value)} />
        </label>
        <label className="db-field">
          URL
          <input required value={form.slug} onChange={(e) => set('slug', aSlug(e.target.value))} />
          <small>marlonfalcon.com/calendario/{form.slug || '…'}</small>
        </label>
        <div className="db-row">
          <label className="db-field" style={{ flex: 1 }}>
            Duración (min)
            <input type="number" min="5" max="480" step="5" required value={form.duration_minutes} onChange={(e) => set('duration_minutes', e.target.value)} />
          </label>
          <label className="db-field" style={{ flex: 1 }}>
            Orden
            <input type="number" min="0" value={form.sort_order} onChange={(e) => set('sort_order', e.target.value)} />
          </label>
        </div>
      </div>
      {error && <p className="db-error">{error}</p>}
      <div className="db-row">
        <button type="submit" className="db-btn" disabled={estado === 'guardando'}>
          {nuevo ? <Icon name="plus" size={16} /> : null} {estado === 'guardando' ? 'Guardando…' : nuevo ? 'Crear reunión' : 'Guardar'}
        </button>
        {estado === 'guardado' && <span className="db-ok">Guardado</span>}
        {!nuevo && (
          <a className="db-btn ghost" href={`/calendario/${form.slug}`} target="_blank" rel="noopener noreferrer">
            Ver <Icon name="external" size={14} />
          </a>
        )}
        {!nuevo && (
          <button type="button" className="db-btn danger" onClick={() => alBorrar(form)} style={{ marginLeft: 'auto' }}>
            Borrar
          </button>
        )}
      </div>
    </form>
  )
}

// Tipos de reunión que se pueden reservar
export default function Eventos() {
  const [eventos, setEventos] = useState(null)
  const [creando, setCreando] = useState(false)
  const [error, setError] = useState('')

  const cargar = () =>
    api('eventos')
      .then(setEventos)
      .catch((e) => setError(e.message))
  useEffect(() => {
    cargar()
  }, [])

  const borrar = async (e) => {
    if (!window.confirm(`¿Borrar “${e.title}”? Las reservas ya hechas se conservan.`)) return
    try {
      await api('eventos', { method: 'DELETE', id: e.id })
      await cargar()
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <>
      <div className="db-head">
        <div>
          <h2>Tipos de reunión</h2>
          <p className="db-muted">Cada uno tiene su propia URL y duración. Todos comparten horario, bloqueos y calendarios.</p>
        </div>
        {!creando && (
          <button type="button" className="db-btn" onClick={() => setCreando(true)}>
            <Icon name="plus" size={16} /> Nueva reunión
          </button>
        )}
      </div>
      {error && <p className="db-error">{error}</p>}
      {!eventos && !error && <p className="db-muted">Cargando…</p>}
      <div className="db-stack">
        {creando && (
          <FormEvento
            inicial={{ ...NUEVO, sort_order: (eventos?.length || 0) + 1 }}
            alGuardar={async () => {
              setCreando(false)
              await cargar()
            }}
          />
        )}
        {eventos?.map((e) => (
          <FormEvento key={e.id} inicial={e} alGuardar={cargar} alBorrar={borrar} />
        ))}
      </div>

      <style jsx global>{`
        .ev-idiomas {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.4rem;
        }
        .ev-idiomas button {
          padding: 0.35rem 0.8rem;
          border: 1px solid var(--border);
          border-radius: 999px;
          background: transparent;
          color: var(--text);
          font: inherit;
          font-size: 0.8rem;
          cursor: pointer;
        }
        .ev-idiomas button.on {
          background: var(--tint);
          border-color: var(--tint-border);
          color: var(--accent-2);
          font-variation-settings: 'wght' 600;
        }
      `}</style>
    </>
  )
}
