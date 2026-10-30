// Código común del panel y del service worker
const BASE = 'https://www.marlonfalcon.com'
const TOKEN = /[\w-]{32}/

// Acepta la URL de la sala o solo el token. Otra web no se admite: el plugin solo habla con la torre.
export function leerEntrada(texto) {
  const limpio = texto.trim()
  const token = limpio.match(TOKEN)?.[0]
  if (!token) return null
  const local = limpio.match(/^http:\/\/localhost(:\d+)?/)?.[0]
  return { token, base: local || BASE }
}

export async function pedirEstado(sala) {
  const res = await fetch(`${sala.base}/api/agentes/${sala.token}`, { cache: 'no-store' })
  if (res.status === 404) return { cerrada: true }
  if (!res.ok) throw new Error('La torre no responde')
  return res.json()
}

export function resumen(agentes) {
  const suma = agentes.reduce((n, a) => n + a.progreso, 0)
  return {
    progreso: agentes.length ? Math.round(suma / agentes.length) : 0,
    problemas: agentes.filter((a) => a.estado === 'bloqueado' || a.estado === 'error').length,
    terminada: agentes.length > 0 && agentes.every((a) => a.estado === 'terminado')
  }
}

export const leerSalas = async () => (await chrome.storage.local.get({ salas: [], activa: null }))
export const guardarSalas = (cambios) => chrome.storage.local.set(cambios)
