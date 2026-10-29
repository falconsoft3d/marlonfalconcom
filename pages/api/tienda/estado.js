import { pedidoConToken } from '../../../lib/pedido-publico'

export default async function handler(req, res) {
  try {
    const pedido = await pedidoConToken(req.query.numero, req.query.t)
    if (!pedido) return res.status(404).json({ error: 'Pedido no encontrado.' })

    res.setHeader('Cache-Control', 'no-store')
    res.status(200).json({
      numero: pedido.order_number,
      nombre: pedido.customer_name,
      email: pedido.email,
      estado: pedido.status,
      fecha: pedido.paid_at || pedido.created_at,
      lineas: pedido.items,
      total: Number(pedido.total),
      moneda: pedido.currency
    })
  } catch (e) {
    console.error('[tienda/estado]', e)
    res.status(502).json({ error: 'No se pudo consultar el pedido.' })
  }
}
