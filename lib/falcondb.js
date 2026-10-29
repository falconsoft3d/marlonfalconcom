// Acceso a falcondatabase con la clave service. Solo en el servidor: la tabla
// shop_orders es privada y contiene datos de clientes.

const API_URL = process.env.FALCONDB_URL || 'https://falcondatabase.com/api/v1/dntmjqkfhehnzvutqrrd'

async function peticion(ruta, opciones = {}) {
  const clave = process.env.FALCONDB_SERVICE_KEY
  if (!clave) throw new Error('FALCONDB_SERVICE_KEY no configurado')

  const res = await fetch(`${API_URL}/tables/${ruta}`, {
    ...opciones,
    headers: { apikey: clave, 'Content-Type': 'application/json', ...opciones.headers }
  })
  const json = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(`falcondatabase respondió ${res.status}: ${JSON.stringify(json)}`)
  return json.data !== undefined ? json.data : json
}

const primera = (data) => (Array.isArray(data) ? data[0] : data) || null

export async function crearPedido(fila) {
  return primera(await peticion('shop_orders', { method: 'POST', body: JSON.stringify(fila) }))
}

export async function buscarPedido(filtros) {
  const query = new URLSearchParams({ ...filtros, limit: '1' })
  return primera(await peticion(`shop_orders?${query}`))
}

export async function actualizarPedido(id, cambios) {
  return primera(await peticion(`shop_orders/${id}`, { method: 'PATCH', body: JSON.stringify(cambios) }))
}
