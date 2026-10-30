import { leerEntrada, pedirEstado, resumen, leerSalas, guardarSalas } from './comun.js'

const SONDEO_MS = 3000
const SIN_SENAL_MS = 3 * 60 * 1000
const ESTADOS = { trabajando: 'Trabajando', esperando: 'En espera', bloqueado: 'Bloqueado', terminado: 'Terminado', error: 'Error' }

const $ = (id) => document.getElementById(id)

// Todo el texto entra con textContent: lo escriben los agentes y no debe interpretarse como HTML
function crear(etiqueta, clase, texto) {
  const nodo = document.createElement(etiqueta)
  if (clase) nodo.className = clase
  if (texto !== undefined) nodo.textContent = texto
  return nodo
}

const hash = (texto) => [...texto].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7)

function lista(titulo, tareas, marca, clase) {
  const bloque = crear('details', `lista ${clase}`)
  bloque.open = tareas.length > 0 && tareas.length <= 6
  bloque.append(crear('summary', '', `${titulo} (${tareas.length})`))
  const ul = crear('ul')
  tareas.forEach((tarea) => ul.append(crear('li', '', `${marca} ${tarea}`)))
  bloque.append(ul)
  return bloque
}

function prueba(url) {
  const { protocol, port, host } = new URL(url)
  if (protocol !== 'http:' && protocol !== 'https:') return null
  const nodo = crear('p', 'prueba')
  const enlace = crear('a', '', url)
  enlace.href = url
  enlace.target = '_blank'
  enlace.rel = 'noopener noreferrer'
  nodo.append(enlace, crear('b', '', port ? `Puerto ${port}` : host))
  return nodo
}

function fila(a) {
  const sinSenal = a.estado === 'trabajando' && Date.now() - new Date(a.actualizado) > SIN_SENAL_MS
  const nodo = crear('article', `agente ${sinSenal ? 'esperando' : a.estado}`)
  nodo.style.setProperty('--c', `hsl(${hash(a.nombre) % 360} 62% 56%)`)

  const cabecera = crear('div', 'cabecera')
  const nombre = crear('div', 'nombre')
  nombre.append(crear('b', '', a.nombre))
  if (a.rol) nombre.append(crear('span', '', a.rol))
  const dato = crear('div', 'dato')
  dato.append(crear('strong', '', `${a.progreso}%`), crear('span', 'chip', sinSenal ? 'Sin señal' : ESTADOS[a.estado] || a.estado))
  cabecera.append(nombre, dato)

  const barra = crear('div', 'barra')
  const relleno = crear('div')
  relleno.style.width = `${a.progreso}%`
  barra.append(relleno)

  nodo.append(cabecera, barra)
  if (a.tarea) nodo.append(crear('p', 'ahora', a.tarea))
  const enlace = a.url && prueba(a.url)
  if (enlace) nodo.append(enlace)
  nodo.append(lista('Hechas', a.hechas, '✓', 'hechas'), lista('Por realizar', a.pendientes, '○', 'pendientes'))
  return nodo
}

function mostrarAviso(texto) {
  $('aviso').textContent = texto || ''
  $('aviso').hidden = !texto
}

async function pintarSelector() {
  const { salas, activa } = await leerSalas()
  const selector = $('salas')
  selector.replaceChildren(...salas.map((s) => {
    const opcion = crear('option', '', s.titulo || 'Sala')
    opcion.value = s.token
    return opcion
  }))
  selector.value = activa || ''
  selector.parentElement.hidden = !salas.length
  const sala = salas.find((s) => s.token === activa)
  $('abrir').hidden = !sala
  if (sala) $('abrir').href = `${sala.base}/agentes/${sala.token}`
  return { salas, sala }
}

// Se repinta solo si hay novedades, para no cerrar las listas que el usuario haya abierto
let ultimo = ''

async function refrescar() {
  const { sala } = await pintarSelector()
  if (!sala) {
    $('total').hidden = true
    $('filas').replaceChildren()
    ultimo = ''
    mostrarAviso('Crea una sala en el dashboard y pega aquí su URL.')
    return
  }
  try {
    const estado = await pedirEstado(sala)
    $('luz').className = ''
    if (estado.cerrada) {
      mostrarAviso('Esta sala está cerrada o se ha borrado.')
      return
    }
    await recordarTitulo(sala, estado.sala.titulo)
    mostrarAviso(estado.agentes.length ? '' : 'Esperando al primer agente…')

    const huella = JSON.stringify(estado.agentes)
    if (huella === ultimo) return
    ultimo = huella

    const total = resumen(estado.agentes)
    const hechas = estado.agentes.reduce((n, a) => n + a.hechas.length, 0)
    const pendientes = estado.agentes.reduce((n, a) => n + a.pendientes.length, 0)
    $('total').hidden = !estado.agentes.length
    $('porcentaje').textContent = `${total.progreso}%`
    $('resumen').textContent = `${estado.agentes.length} agentes · ${hechas} de ${hechas + pendientes} tareas`
    $('barra-total').style.width = `${total.progreso}%`
    $('filas').replaceChildren(...estado.agentes.map(fila))
  } catch (e) {
    $('luz').className = 'off'
    mostrarAviso('Sin conexión con la torre. Reintentando…')
  }
}

async function recordarTitulo(sala, titulo) {
  if (sala.titulo === titulo) return
  const { salas } = await leerSalas()
  await guardarSalas({ salas: salas.map((s) => (s.token === sala.token ? { ...s, titulo } : s)) })
}

$('nueva').addEventListener('submit', async (e) => {
  e.preventDefault()
  const sala = leerEntrada($('entrada').value)
  if (!sala) return mostrarAviso('No encuentro un token en ese texto.')
  const { salas } = await leerSalas()
  const repetida = salas.some((s) => s.token === sala.token)
  await guardarSalas({ salas: repetida ? salas : [...salas, sala], activa: sala.token })
  $('entrada').value = ''
  ultimo = ''
  refrescar()
})

$('salas').addEventListener('change', async (e) => {
  await guardarSalas({ activa: e.target.value })
  ultimo = ''
  refrescar()
})

$('quitar').addEventListener('click', async () => {
  const { salas, activa } = await leerSalas()
  const quedan = salas.filter((s) => s.token !== activa)
  await guardarSalas({ salas: quedan, activa: quedan[0]?.token || null })
  ultimo = ''
  refrescar()
})

refrescar()
setInterval(refrescar, SONDEO_MS)
