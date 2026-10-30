import { Sala } from '../../components/Agentes'
import { buscarSala, leerEstado, origenDe } from '../../lib/agentes'

// Página con token: no se indexa ni pasa el token a otras webs por el Referer
export async function getServerSideProps({ params, req, res }) {
  const sala = await buscarSala(params.token)
  if (!sala) return { notFound: true }
  res.setHeader('Cache-Control', 'no-store')
  res.setHeader('X-Robots-Tag', 'noindex, nofollow')
  res.setHeader('Referrer-Policy', 'no-referrer')
  return { props: { token: params.token, inicial: await leerEstado(sala), origen: origenDe(req) } }
}

export default function SalaPage(props) {
  return <Sala {...props} />
}
