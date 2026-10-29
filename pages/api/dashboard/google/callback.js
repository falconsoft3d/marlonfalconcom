import { buscar, crear, actualizar } from '../../../../lib/falcondb'
import { haySesion, estadoValido } from '../../../../lib/calendario/sesion'
import { intercambiarCodigo, listarCalendarios, urlVuelta } from '../../../../lib/calendario/google'

const volver = (res, query) => res.redirect(302, `/dashboard?${new URLSearchParams({ pestana: 'calendarios', ...query })}`)

// Google vuelve aquí tras dar permiso: se guarda la cuenta (o se renueva si ya estaba) con sus calendarios
export default async function handler(req, res) {
  if (!haySesion(req)) return res.redirect(302, '/dashboard')
  const { code, state, error } = req.query
  if (error) return volver(res, { google: 'error', motivo: String(error) })
  if (!code || !estadoValido(state)) return volver(res, { google: 'error', motivo: 'enlace-caducado' })

  try {
    const tokens = await intercambiarCodigo(String(code), urlVuelta(req))
    if (!tokens.refresh_token) return volver(res, { google: 'error', motivo: 'sin-refresh-token' })

    const existente = await buscar('booking_google_accounts', { email: tokens.email })
    const calendars = await listarCalendarios({ refresh_token: tokens.refresh_token }, existente?.calendars || [])
    const fila = { refresh_token: tokens.refresh_token, calendars, active: true, last_sync_at: new Date().toISOString(), last_error: null }

    if (existente) await actualizar('booking_google_accounts', existente.id, fila)
    else await crear('booking_google_accounts', { email: tokens.email, ...fila })

    volver(res, { google: 'ok', email: tokens.email })
  } catch (e) {
    console.error('[dashboard/google/callback]', e)
    volver(res, { google: 'error', motivo: e.message.slice(0, 120) })
  }
}
