import { obtenerModulo } from '../../../lib/odoo-apps'
import { crearPedido, actualizarPedido } from '../../../lib/falcondb'
import { crearOrden, paypalConfigurado } from '../../../lib/paypal'

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_LINEAS = 30

const limpiar = (valor, max = 200) => (typeof valor === 'string' ? valor.trim().slice(0, max) : '')

function numeroPedido() {
  const fecha = new Date().toISOString().slice(2, 10).replace(/-/g, '')
  const azar = Math.random().toString(36).slice(2, 7).toUpperCase()
  return `MF-${fecha}-${azar}`
}

// Crea el pedido en falcondatabase y, si PayPal está configurado, su orden de pago.
// Sin PayPal el pedido queda a la espera del comprobante por email.
// Los precios se vuelven a leer de apps.odoo.com: nunca se confía en los del navegador.
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método no permitido' })

  const { cliente = {}, claves } = req.body || {}
  const conPaypal = paypalConfigurado()
  const nombre = limpiar(cliente.nombre)
  const email = limpiar(cliente.email).toLowerCase()

  if (!nombre || !EMAIL.test(email)) {
    return res.status(400).json({ error: 'Indica tu nombre y un email válido.' })
  }
  if (!Array.isArray(claves) || !claves.length || claves.length > MAX_LINEAS) {
    return res.status(400).json({ error: 'El carrito está vacío.' })
  }

  try {
    const unicas = [...new Set(claves.map(String))]
    const modulos = await Promise.all(
      unicas.map((clave) => {
        const [tecnico, version] = clave.split('@')
        return obtenerModulo(version, tecnico)
      })
    )

    const invalidos = unicas.filter((_, i) => !modulos[i] || !(modulos[i].precio > 0))
    if (invalidos.length) {
      return res.status(409).json({ error: 'Algunos módulos ya no están a la venta.', invalidos })
    }

    const moneda = modulos[0].moneda
    if (modulos.some((m) => m.moneda !== moneda)) {
      return res.status(409).json({ error: 'Los módulos tienen monedas distintas.' })
    }

    const lineas = modulos.map(({ clave, tecnico, version, nombre, precio }) => ({ clave, tecnico, version, nombre, precio }))
    const total = Math.round(lineas.reduce((s, l) => s + l.precio, 0) * 100) / 100
    const numero = numeroPedido()

    const pedido = await crearPedido({
      order_number: numero,
      customer_name: nombre,
      email,
      phone: limpiar(cliente.telefono, 40) || null,
      company: limpiar(cliente.empresa) || null,
      vat: limpiar(cliente.nif, 40) || null,
      country: limpiar(cliente.pais, 80) || null,
      notes: limpiar(cliente.notas, 2000) || null,
      items: lineas,
      total,
      currency: moneda,
      status: conPaypal ? 'pending' : 'awaiting_payment'
    })

    if (!conPaypal) {
      return res.status(200).json({ modo: 'manual', numero, token: pedido.download_token })
    }

    const orden = await crearOrden({ numero, lineas, total, moneda })
    await actualizarPedido(pedido.id, { paypal_order_id: orden.id })

    res.status(200).json({ modo: 'paypal', id: orden.id, numero })
  } catch (e) {
    console.error('[tienda/pedido]', e)
    res.status(502).json({ error: 'No se pudo iniciar el pago. Inténtalo de nuevo en unos minutos.' })
  }
}
