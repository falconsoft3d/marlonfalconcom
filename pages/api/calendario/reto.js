import { crearReto } from '../../../lib/calendario/reto'

// Nueva suma para el captcha de los ninjas (ver components/Calendario/NinjaReto.js)
export default function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')
  res.status(200).json(crearReto())
}
