import { buscarPedido } from './falcondb'

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
const NUMERO = /^MF-\d{6}-[A-Z0-9]{3,8}$/

// Un pedido solo se muestra a quien tiene su número y su token de acceso (download_token)
export async function pedidoConToken(numero, token) {
  if (!NUMERO.test(numero || '') || !UUID.test(token || '')) return null
  return buscarPedido({ order_number: `eq.${numero}`, download_token: `eq.${token}` })
}
