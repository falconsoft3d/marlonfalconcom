import { leerSalas, pedirEstado, resumen } from './comun.js'

// Mira las salas aunque el panel esté cerrado: pone el porcentaje en el icono y avisa de los cambios importantes
const ALARMA = 'revisar-salas'

function preparar() {
  chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true })
  chrome.alarms.create(ALARMA, { periodInMinutes: 0.5 })
  revisar()
}

function avisar(titulo, mensaje) {
  chrome.notifications.create({ type: 'basic', iconUrl: 'iconos/128.png', title: titulo, message: mensaje })
}

async function revisar() {
  const { salas, activa } = await leerSalas()
  const { vistos = {} } = await chrome.storage.local.get('vistos')
  const nuevos = {}
  let insignia = ''
  let color = '#3f7fa3'

  for (const sala of salas) {
    let estado
    try {
      estado = await pedirEstado(sala)
    } catch (e) {
      nuevos[sala.token] = vistos[sala.token]
      continue
    }
    if (estado.cerrada) continue

    const antes = vistos[sala.token]
    const total = resumen(estado.agentes)
    if (antes) {
      for (const a of estado.agentes) {
        const cambio = antes.agentes[a.id] !== a.estado
        if (cambio && (a.estado === 'bloqueado' || a.estado === 'error')) {
          avisar(`${a.nombre}: ${a.estado}`, a.tarea || estado.sala.titulo)
        }
      }
      if (total.terminada && !antes.terminada) avisar('Equipo terminado', estado.sala.titulo)
    }
    nuevos[sala.token] = {
      terminada: total.terminada,
      agentes: Object.fromEntries(estado.agentes.map((a) => [a.id, a.estado]))
    }

    if (sala.token === activa && estado.agentes.length) {
      insignia = `${total.progreso}`
      if (total.problemas) color = '#dc5a5a'
      else if (total.terminada) color = '#4f8a3a'
    }
  }

  await chrome.storage.local.set({ vistos: nuevos })
  chrome.action.setBadgeText({ text: insignia })
  chrome.action.setBadgeBackgroundColor({ color })
}

chrome.runtime.onInstalled.addListener(preparar)
chrome.runtime.onStartup.addListener(preparar)
chrome.alarms.onAlarm.addListener((alarma) => alarma.name === ALARMA && revisar())
chrome.storage.onChanged.addListener((cambios) => (cambios.salas || cambios.activa) && revisar())
