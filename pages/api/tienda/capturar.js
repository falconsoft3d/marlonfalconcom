import { buscarPedido, actualizarPedido } from '../../../lib/falcondb'
import { capturarOrden } from '../../../lib/paypal'

// Cobra la orden aprobada en PayPal y marca el pedido como pagado
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método no permitido' })

  const id = typeof req.body?.id === 'string' ? req.body.id.trim() : ''
  if (!/^[A-Z0-9]{8,40}$/.test(id)) return res.status(400).json({ error: 'Orden de PayPal no válida.' })

  try {
    const pedido = await buscarPedido({ paypal_order_id: `eq.${id}` })
    if (!pedido) return res.status(404).json({ error: 'Pedido no encontrado.' })

    if (pedido.status !== 'paid') {
      const orden = await capturarOrden(id)
      const captura = orden.purchase_units?.[0]?.payments?.captures?.[0]
      const correcto =
        orden.status === 'COMPLETED' &&
        captura?.status === 'COMPLETED' &&
        captura.amount?.currency_code === pedido.currency &&
        captura.amount?.value === Number(pedido.total).toFixed(2)

      if (!correcto) {
        await actualizarPedido(pedido.id, { status: 'payment_error', paypal_capture_id: captura?.id || null })
        return res.status(402).json({ error: 'PayPal no confirmó el pago. No se ha realizado ningún cargo completo.' })
      }

      await actualizarPedido(pedido.id, {
        status: 'paid',
        paypal_capture_id: captura.id,
        paid_at: new Date().toISOString()
      })
    }

    res.status(200).json({ numero: pedido.order_number, token: pedido.download_token })
  } catch (e) {
    console.error('[tienda/capturar]', e)
    res.status(502).json({ error: 'No se pudo confirmar el pago. Si se te ha cobrado, escríbeme y lo resuelvo.' })
  }
}
