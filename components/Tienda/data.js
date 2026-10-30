// Email que recibe los comprobantes de pago manuales
export const EMAIL_COMPROBANTE = 'mfalconsoft@gmail.com'

// Cuenta de PayPal a la que se paga cuando la pasarela no está configurada
export const PAYPAL_CUENTA = 'mfalconsoft@gmail.com'

export const ODOO_AUTOR_URL =
  'https://apps.odoo.com/apps/modules/browse?author=Marlon%20Falc%C3%B3n%20Hern%C3%A1ndez'

export const ODOO_TEMAS_URL =
  'https://apps.odoo.com/apps/themes/browse?author=Marlon%20Falc%C3%B3n%20Hern%C3%A1ndez'

export const formatoPrecio = (precio, moneda = 'EUR') =>
  new Intl.NumberFormat('es-ES', { style: 'currency', currency: moneda }).format(precio)

export const etiquetaVersion = (version) => `Odoo ${version.replace(/\.0$/, '')}`

export const rutaModulo = (m) => `/tienda/${m.version}/${m.tecnico}`

// Las imágenes pasan por /api/tienda/imagen: Odoo Apps cambia su URL cada vez que se actualiza el módulo
export const imagenModulo = (m, tipo = 'portada') =>
  `/api/tienda/imagen?version=${m.version}&modulo=${m.tecnico}${tipo === 'icono' ? '&tipo=icono' : ''}`
