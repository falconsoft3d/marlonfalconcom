// Llamadas del dashboard a /api/dashboard/*. Lanzan un Error con el mensaje del servidor.
export async function api(ruta, { method = 'GET', id, query = {}, body } = {}) {
  const params = new URLSearchParams(query)
  if (id) params.set('id', id)
  const res = await fetch(`/api/dashboard/${ruta}${params.toString() ? `?${params}` : ''}`, {
    method,
    headers: body ? { 'Content-Type': 'application/json' } : undefined,
    body: body ? JSON.stringify(body) : undefined
  })
  const json = await res.json().catch(() => ({}))
  if (!res.ok) {
    const error = new Error(json.error || 'Error inesperado.')
    error.status = res.status
    throw error
  }
  return json.data !== undefined ? json.data : json
}
