// Email que recibe los comprobantes de pago manuales
export const EMAIL_COMPROBANTE = 'mfalconsoft@gmail.com'

// Cuenta de PayPal a la que se paga cuando la pasarela no está configurada
export const PAYPAL_CUENTA = 'mfalconsoft@gmail.com'

export const ODOO_AUTOR_URL =
  'https://apps.odoo.com/apps/modules/browse?author=Marlon%20Falc%C3%B3n%20Hern%C3%A1ndez'

export const ODOO_TEMAS_URL =
  'https://apps.odoo.com/apps/themes/browse?author=Marlon%20Falc%C3%B3n%20Hern%C3%A1ndez'

export const SITIO = 'https://www.marlonfalcon.com'

// Primer tramo de la URL de cada ficha: lleva las palabras que se buscan en Google
export const SECCIONES = { modulo: 'odoo-module', tema: 'odoo-template' }

export const formatoPrecio = (precio, moneda = 'EUR') =>
  new Intl.NumberFormat('es-ES', { style: 'currency', currency: moneda }).format(precio)

export const etiquetaVersion = (version) => `Odoo ${version.replace(/\.0$/, '')}`

// Las líneas guardadas en carritos antiguos no traen tipo: si son webs, su ficha redirige a la ruta correcta
export const rutaModulo = (m) => `/tienda/${SECCIONES[m.tipo] || SECCIONES.modulo}/${m.version}/${m.tecnico}`

// Las imágenes pasan por /api/tienda/imagen: Odoo Apps cambia su URL cada vez que se actualiza el módulo
export const imagenModulo = (m, tipo = 'portada') =>
  `/api/tienda/imagen?version=${m.version}&modulo=${m.tecnico}${tipo === 'icono' ? '&tipo=icono' : ''}`
