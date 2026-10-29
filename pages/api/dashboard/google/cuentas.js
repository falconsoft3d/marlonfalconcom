import { listar, buscar, actualizar, borrar } from '../../../../lib/falcondb'
import { conSesion } from '../../../../lib/calendario/sesion'
import { googleConfigurado, listarCalendarios, urlVuelta } from '../../../../lib/calendario/google'

// El refresh token nunca sale del servidor
const publica = ({ refresh_token, ...cuenta }) => cuenta

// GET lista las cuentas · PATCH ?id= { active, seleccion: [ids] } · POST ?id= relee sus calendarios
// · DELETE ?id= desconecta la cuenta y revoca el permiso en Google
export default conSesion(async function handler(req, res) {
  const id = Number(req.query.id)

  try {
    if (req.method === 'GET') {
      const cuentas = googleConfigurado() ? await listar('booking_google_accounts', { order: 'id' }) : []
      return res.status(200).json({ configurado: googleConfigurado(), redirectUri: urlVuelta(req), cuentas: cuentas.map(publica) })
    }

    const cuenta = id && (await buscar('booking_google_accounts', { id: String(id) }))
    if (!cuenta) return res.status(404).json({ error: 'Cuenta no encontrada.' })

    if (req.method === 'PATCH') {
      const cambios = {}
      if (typeof req.body?.active === 'boolean') cambios.active = req.body.active
      if (Array.isArray(req.body?.seleccion)) {
        const elegidos = new Set(req.body.seleccion.map(String))
        cambios.calendars = (cuenta.calendars || []).map((c) => ({ ...c, selected: elegidos.has(c.id) }))
      }
      return res.status(200).json({ data: publica(await actualizar('booking_google_accounts', id, cambios)) })
    }

    if (req.method === 'POST') {
      let cambios
      try {
        cambios = { calendars: await listarCalendarios(cuenta, cuenta.calendars || []), last_sync_at: new Date().toISOString(), last_error: null }
      } catch (e) {
        cambios = { last_sync_at: new Date().toISOString(), last_error: String(e.message).slice(0, 300) }
      }
      return res.status(200).json({ data: publica(await actualizar('booking_google_accounts', id, cambios)) })
    }

    if (req.method === 'DELETE') {
      await fetch(`https://oauth2.googleapis.com/revoke?token=${encodeURIComponent(cuenta.refresh_token)}`, { method: 'POST' }).catch(() => {})
      await borrar('booking_google_accounts', id)
      return res.status(200).json({ ok: true })
    }

    res.status(405).json({ error: 'Método no permitido' })
  } catch (e) {
    console.error('[dashboard/google/cuentas]', e)
    res.status(502).json({ error: 'No se pudo completar la operación con Google.' })
  }
})
