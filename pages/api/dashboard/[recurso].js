import { listar, crear, actualizar, borrar } from '../../../lib/falcondb'
import { conSesion } from '../../../lib/calendario/sesion'
import { zonaValida } from '../../../lib/calendario/zona'
import { normalizarUrl } from '../../../lib/calendario/ics'
import { crearToken, borrarAgentes } from '../../../lib/agentes'

// CRUD del dashboard: /api/dashboard/{ajustes|eventos|bloqueos|calendarios|reservas|mensajes|salas}
// GET lista · POST crea · PATCH ?id= actualiza · DELETE ?id= borra.
// Cada campo pasa por su validador: lo que no esté en la lista no se guarda.

class Invalido extends Error {}

const texto = (max, obligatorio = false) => (v, campo) => {
  const limpio = typeof v === 'string' ? v.trim().slice(0, max) : ''
  if (obligatorio && !limpio) throw new Invalido(`Falta ${campo}.`)
  return limpio || null
}
const entero = (min, max) => (v, campo) => {
  const n = Number(v)
  if (!Number.isInteger(n) || n < min || n > max) throw new Invalido(`${campo} debe estar entre ${min} y ${max}.`)
  return n
}
const booleano = (v) => v === true || v === 'true'
const fecha = (v, campo) => {
  if (!Date.parse(v)) throw new Invalido(`${campo} no es una fecha válida.`)
  return new Date(v).toISOString()
}
const slug = (v) => {
  const limpio = String(v || '').toLowerCase().trim().replace(/[^a-z0-9-]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60)
  if (!limpio) throw new Invalido('Falta el identificador de la URL.')
  return limpio
}
const zona = (v) => {
  if (!zonaValida(v)) throw new Invalido('Zona horaria no válida.')
  return v
}
const urlIcs = (v) => {
  const url = normalizarUrl(v)
  if (!/^https:\/\/\S+$/i.test(url)) throw new Invalido('La dirección del calendario debe empezar por https:// o webcal://')
  return url
}
const color = (v) => (/^#[0-9a-f]{6}$/i.test(v) ? v : null)
const estado = (v) => {
  if (!['confirmed', 'cancelled'].includes(v)) throw new Invalido('Estado no válido.')
  return v
}

const HORA = /^([01]\d|2[0-3]):[0-5]\d$|^24:00$/
const horario = (v) => {
  const limpio = {}
  for (let dia = 0; dia < 7; dia++) {
    const tramos = Array.isArray(v?.[dia]) ? v[dia] : []
    limpio[dia] = tramos
      .filter((t) => Array.isArray(t) && HORA.test(t[0]) && HORA.test(t[1]))
      .map(([a, b]) => {
        if (a >= b) throw new Invalido(`El tramo ${a}–${b} termina antes de empezar.`)
        return [a, b]
      })
      .sort((x, y) => (x[0] < y[0] ? -1 : 1))
  }
  return limpio
}

const ahora = () => new Date().toISOString()

const RECURSOS = {
  ajustes: {
    tabla: 'booking_settings',
    filtros: () => ({ order: 'id', limit: '1' }),
    campos: {
      timezone: zona,
      weekly_hours: horario,
      min_notice_hours: entero(0, 720),
      max_days_ahead: entero(1, 365),
      buffer_minutes: entero(0, 240),
      slot_step_minutes: entero(5, 240)
    },
    obligatorios: []
  },
  eventos: {
    tabla: 'booking_event_types',
    filtros: () => ({ order: 'sort_order' }),
    campos: {
      slug,
      title: texto(120, true),
      title_en: texto(120),
      title_ca: texto(120),
      title_ru: texto(120),
      description: texto(1000),
      description_en: texto(1000),
      description_ca: texto(1000),
      description_ru: texto(1000),
      duration_minutes: entero(5, 480),
      location: texto(200),
      location_en: texto(200),
      location_ca: texto(200),
      location_ru: texto(200),
      active: booleano,
      sort_order: entero(0, 999)
    },
    obligatorios: ['slug', 'title', 'duration_minutes']
  },
  bloqueos: {
    tabla: 'booking_blocks',
    filtros: () => ({ ends_at: `gt.${ahora()}`, order: 'starts_at' }),
    campos: { title: texto(120), starts_at: fecha, ends_at: fecha },
    obligatorios: ['starts_at', 'ends_at']
  },
  calendarios: {
    tabla: 'booking_calendars',
    filtros: () => ({ order: 'id' }),
    campos: { name: texto(80, true), ics_url: urlIcs, color, active: booleano },
    obligatorios: ['name', 'ics_url']
  },
  reservas: {
    tabla: 'bookings',
    filtros: (q) =>
      q.pasadas ? { starts_at: `lt.${ahora()}`, order: 'starts_at.desc', limit: '100' } : { ends_at: `gt.${ahora()}`, order: 'starts_at' },
    campos: { status: estado },
    obligatorios: [],
    soloEditar: true
  },
  mensajes: {
    tabla: 'contact_messages',
    filtros: () => ({ order: 'created_at.desc', limit: '200' }),
    campos: { read: booleano },
    obligatorios: [],
    sinCrear: true
  },
  salas: {
    tabla: 'agent_rooms',
    filtros: () => ({ order: 'created_at.desc' }),
    campos: { title: texto(120, true), active: booleano },
    obligatorios: ['title'],
    alCrear: () => ({ token: crearToken() }),
    alBorrar: borrarAgentes
  }
}

function validar(recurso, cuerpo, nuevo) {
  const fila = {}
  for (const [campo, validador] of Object.entries(recurso.campos)) {
    if (cuerpo[campo] !== undefined) fila[campo] = validador(cuerpo[campo], campo)
  }
  if (nuevo) {
    const falta = recurso.obligatorios.find((c) => fila[c] === undefined || fila[c] === null)
    if (falta) throw new Invalido(`Falta ${falta}.`)
  }
  if (fila.starts_at && fila.ends_at && fila.starts_at >= fila.ends_at) throw new Invalido('El final debe ser posterior al inicio.')
  return fila
}

export default conSesion(async function handler(req, res) {
  const recurso = RECURSOS[req.query.recurso]
  if (!recurso) return res.status(404).json({ error: 'Recurso desconocido.' })
  const id = Number(req.query.id)

  try {
    switch (req.method) {
      case 'GET':
        return res.status(200).json({ data: await listar(recurso.tabla, recurso.filtros(req.query)) })
      case 'POST':
        if (recurso.soloEditar || recurso.sinCrear) break
        return res.status(200).json({ data: await crear(recurso.tabla, { ...validar(recurso, req.body || {}, true), ...recurso.alCrear?.() }) })
      case 'PATCH': {
        if (!id) return res.status(400).json({ error: 'Falta el id.' })
        const cambios = validar(recurso, req.body || {}, false)
        if (recurso.tabla === 'bookings' && cambios.status === 'cancelled') cambios.cancelled_at = ahora()
        return res.status(200).json({ data: await actualizar(recurso.tabla, id, cambios) })
      }
      case 'DELETE':
        if (recurso.soloEditar || recurso.tabla === 'booking_settings') break
        if (!id) return res.status(400).json({ error: 'Falta el id.' })
        await recurso.alBorrar?.(id)
        await borrar(recurso.tabla, id)
        return res.status(200).json({ ok: true })
    }
    res.status(405).json({ error: 'Método no permitido' })
  } catch (e) {
    if (e instanceof Invalido) return res.status(400).json({ error: e.message })
    console.error('[dashboard]', req.query.recurso, e)
    const repetido = /unique|duplicate/i.test(e.message)
    res.status(repetido ? 409 : 502).json({ error: repetido ? 'Ya existe un registro con ese identificador.' : 'No se pudo guardar. Inténtalo de nuevo.' })
  }
})
