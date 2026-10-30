// Estados de un agente y texto que se le pasa a Claude. Lo usan el servidor, la sala y el dashboard.
export const ESTADOS = {
  trabajando: 'Trabajando',
  esperando: 'En espera',
  bloqueado: 'Bloqueado',
  terminado: 'Terminado',
  error: 'Error'
}

// Un agente que sigue trabajando pero lleva este tiempo sin informar se muestra como «Sin señal»
export const SIN_SENAL_MS = 3 * 60 * 1000

export function resumirAgentes(agentes) {
  const suma = (valor) => agentes.reduce((n, a) => n + valor(a), 0)
  return {
    progreso: agentes.length ? Math.round(suma((a) => a.progreso) / agentes.length) : 0,
    hechas: suma((a) => a.hechas.length),
    pendientes: suma((a) => a.pendientes.length),
    trabajando: agentes.filter((a) => a.estado === 'trabajando').length,
    problemas: agentes.filter((a) => a.estado === 'bloqueado' || a.estado === 'error').length,
    terminada: agentes.length > 0 && agentes.every((a) => a.estado === 'terminado')
  }
}

export const urlSala = (origen, token) => `${origen}/agentes/${token}`
export const urlResumen = (origen, token) => `${origen}/agentes/resumen/${token}`
export const urlApi = (origen, token) => `${origen}/api/agentes/${token}`

export const instrucciones = (origen, token) => `Mientras trabajas, informa de tu progreso en mi Torre de control:
${urlSala(origen, token)}

Cada agente envía un informe al empezar, cada vez que termina una tarea o cambia de tarea, y al acabar:

curl -sS -X POST ${urlApi(origen, token)} -H 'Content-Type: application/json' --data-binary @- <<'JSON'
{"agente":"Explorador","rol":"Revisa el código","estado":"trabajando","tarea":"Probando el checkout","url":"http://localhost:3000","hechas":["Localizar el checkout"],"pendientes":["Revisar PayPal","Escribir las pruebas"]}
JSON

- agente: nombre corto y siempre el mismo. Identifica la fila.
- rol: para qué sirve ese agente, en pocas palabras.
- estado: trabajando, esperando, bloqueado, terminado o error.
- tarea: qué está haciendo ahora, en una frase.
- url: dónde estás probando la app, con su puerto. Envíala en cuanto arranques un servidor y actualízala si cambia. Si solo conoces el puerto, envía "puerto":3000.
- hechas y pendientes: las listas completas en cada informe. El progreso se calcula con ellas.
- progreso (opcional): de 0 a 100, solo si no hay lista de tareas.

Si lanzas subagentes, pasa estas instrucciones a cada uno con un nombre distinto.
No escribas contraseñas, claves ni datos de clientes en los informes: esta URL no pide contraseña.
Si un informe falla, sigue con tu trabajo.`
