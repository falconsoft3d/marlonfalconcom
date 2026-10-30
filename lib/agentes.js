import crypto from 'crypto'
import { buscar, listar, crear, actualizar, borrar } from './falcondb'
import { ESTADOS } from '../components/Agentes/instrucciones'

// Torre de control: los agentes informan en /api/agentes/<token> y su estado se ve en /agentes/<token>.
// El token es la única credencial de la sala. Cada agente tiene su fila, así no se pisan al informar a la vez.

const TOKEN = /^[\w-]{32}$/
const MAX_AGENTES = 40
const MAX_TAREAS = 50
const MAX_LOG = 20
const URL_PRUEBA = /^https?:\/\/\S+$/i

export class Invalido extends Error {}

export const crearToken = () => crypto.randomBytes(24).toString('base64url')

export const origenDe = (req) => `${req.headers['x-forwarded-proto'] || 'http'}://${req.headers.host}`

const limpio = (v, max) => (typeof v === 'string' ? v.trim().slice(0, max) : '')

const lista = (v) =>
  (Array.isArray(v) ? v : [])
    .map((tarea) => limpio(tarea, 200))
    .filter(Boolean)
    .slice(0, MAX_TAREAS)

// Dónde prueba la app el agente: la URL, o solo el puerto si es local. Se enlaza en la página, así que solo admite http(s).
function urlPrueba({ url, puerto }, anterior) {
  if (url === undefined && puerto === undefined) return anterior || null
  if (url === '' || puerto === '') return null
  if (url !== undefined) {
    if (!URL_PRUEBA.test(url)) throw new Invalido('"url" debe empezar por http:// o https://.')
    return url.slice(0, 300)
  }
  const numero = Number(puerto)
  if (!Number.isInteger(numero) || numero < 1 || numero > 65535) throw new Invalido('"puerto" debe ser un número entre 1 y 65535.')
  return `http://localhost:${numero}`
}

export function buscarSala(token) {
  if (!TOKEN.test(token || '')) return null
  return buscar('agent_rooms', { token: `eq.${token}`, active: 'eq.true' })
}

const agentesDe = (sala) => listar('agent_states', { room_id: `eq.${sala.id}`, order: 'created_at' })

export async function leerEstado(sala) {
  const agentes = await agentesDe(sala)
  return {
    sala: { titulo: sala.title, creada: sala.created_at },
    agentes: agentes.map((a) => ({
      id: a.id,
      nombre: a.name,
      rol: a.role,
      estado: a.status,
      progreso: a.progress,
      tarea: a.task,
      url: a.test_url,
      hechas: a.done_tasks || [],
      pendientes: a.pending_tasks || [],
      log: a.log || [],
      inicio: a.created_at,
      actualizado: a.updated_at
    }))
  }
}

export async function reportar(sala, cuerpo) {
  const name = limpio(cuerpo.agente, 60)
  if (!name) throw new Invalido('Falta "agente": el nombre corto y fijo de quien informa.')
  if (cuerpo.estado !== undefined && !ESTADOS[cuerpo.estado]) {
    throw new Invalido(`"estado" debe ser uno de: ${Object.keys(ESTADOS).join(', ')}.`)
  }
  const progresoPedido = cuerpo.progreso === undefined ? undefined : Number(cuerpo.progreso)
  if (progresoPedido !== undefined && !(progresoPedido >= 0 && progresoPedido <= 100)) {
    throw new Invalido('"progreso" debe estar entre 0 y 100.')
  }

  const agent_key = `${sala.id}:${name.toLowerCase()}`
  const actual = await buscar('agent_states', { agent_key: `eq.${agent_key}` })
  if (!actual && (await agentesDe(sala)).length >= MAX_AGENTES) {
    throw new Invalido(`Esta sala ya tiene ${MAX_AGENTES} agentes.`)
  }

  const hechas = cuerpo.hechas === undefined ? actual?.done_tasks || [] : lista(cuerpo.hechas)
  const pendientes = cuerpo.pendientes === undefined ? actual?.pending_tasks || [] : lista(cuerpo.pendientes)
  const total = hechas.length + pendientes.length

  let progress = Math.round(progresoPedido ?? (total ? (hechas.length / total) * 100 : actual?.progress ?? 0))
  if (cuerpo.estado === 'terminado' && !pendientes.length) progress = 100

  const anterior = actual?.status === 'terminado' ? 'trabajando' : actual?.status
  const status = cuerpo.estado || (progress === 100 ? 'terminado' : anterior || 'trabajando')
  const task = cuerpo.tarea === undefined ? actual?.task || null : limpio(cuerpo.tarea, 200) || null
  const test_url = urlPrueba(cuerpo, actual?.test_url)

  const ahora = new Date().toISOString()
  const log = actual?.log || []
  const hayNovedad = task !== actual?.task || status !== actual?.status
  const fila = {
    name,
    role: limpio(cuerpo.rol, 120) || actual?.role || null,
    status,
    progress,
    task,
    test_url,
    done_tasks: hechas,
    pending_tasks: pendientes,
    log: hayNovedad ? [...log, { t: ahora, tarea: task, estado: status }].slice(-MAX_LOG) : log,
    updated_at: ahora
  }

  try {
    if (actual) await actualizar('agent_states', actual.id, fila)
    else await crear('agent_states', { ...fila, room_id: sala.id, agent_key })
  } catch (e) {
    // Dos primeros informes a la vez: el segundo ya encuentra la fila y la actualiza
    if (!actual && /unique|duplicate/i.test(e.message)) return reportar(sala, cuerpo)
    throw e
  }
  await actualizar('agent_rooms', sala.id, { last_report_at: ahora })
  return { ok: true, agente: name, estado: status, progreso: progress }
}

// Al borrar una sala se borran sus agentes
export async function borrarAgentes(salaId) {
  const agentes = await agentesDe({ id: salaId })
  await Promise.all(agentes.map((a) => borrar('agent_states', a.id)))
}
