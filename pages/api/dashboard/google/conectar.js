import { haySesion, crearEstado } from '../../../../lib/calendario/sesion'
import { googleConfigurado, urlAutorizacion, urlVuelta } from '../../../../lib/calendario/google'

// Botón "Conectar con Google": lleva a la pantalla de permisos de Google
export default function handler(req, res) {
  if (!haySesion(req)) return res.redirect(302, '/dashboard')
  if (!googleConfigurado()) return res.redirect(302, '/dashboard?google=error&motivo=sin-configurar')
  res.redirect(302, urlAutorizacion(crearEstado(), urlVuelta(req)))
}
