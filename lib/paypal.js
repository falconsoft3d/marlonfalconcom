// API REST de PayPal (Orders v2). PAYPAL_ENV=live para cobrar de verdad; por defecto sandbox.

const API = process.env.PAYPAL_ENV === 'live' ? 'https://api-m.paypal.com' : 'https://api-m.sandbox.paypal.com'

// Sin credenciales la tienda funciona en modo manual: pago por PayPal y comprobante por email
export const paypalConfigurado = () =>
  Boolean(process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID && process.env.PAYPAL_CLIENT_SECRET)

async function token() {
  const id = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
  const secreto = process.env.PAYPAL_CLIENT_SECRET
  if (!id || !secreto) throw new Error('Credenciales de PayPal no configuradas')

  const res = await fetch(`${API}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${id}:${secreto}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials'
  })
  const json = await res.json()
  if (!res.ok) throw new Error(`PayPal OAuth ${res.status}: ${json.error_description || ''}`)
  return json.access_token
}

async function llamar(ruta, cuerpo) {
  const res = await fetch(`${API}${ruta}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${await token()}`, 'Content-Type': 'application/json' },
    body: cuerpo ? JSON.stringify(cuerpo) : undefined
  })
  const json = await res.json()
  if (!res.ok) throw new Error(`PayPal ${res.status}: ${json.message || json.name || ''}`)
  return json
}

const importe = (moneda, valor) => ({ currency_code: moneda, value: valor.toFixed(2) })

export function crearOrden({ numero, lineas, total, moneda }) {
  return llamar('/v2/checkout/orders', {
    intent: 'CAPTURE',
    purchase_units: [
      {
        reference_id: numero,
        invoice_id: numero,
        description: `Módulos Odoo · pedido ${numero}`,
        amount: { ...importe(moneda, total), breakdown: { item_total: importe(moneda, total) } },
        items: lineas.map((l) => ({
          name: `${l.nombre} (v${l.version})`.slice(0, 127),
          sku: l.clave.slice(0, 127),
          quantity: '1',
          category: 'DIGITAL_GOODS',
          unit_amount: importe(moneda, l.precio)
        }))
      }
    ],
    payment_source: {
      paypal: {
        experience_context: {
          brand_name: 'Marlon Falcón',
          locale: 'es-ES',
          shipping_preference: 'NO_SHIPPING',
          user_action: 'PAY_NOW'
        }
      }
    }
  })
}

export function capturarOrden(id) {
  return llamar(`/v2/checkout/orders/${encodeURIComponent(id)}/capture`)
}
