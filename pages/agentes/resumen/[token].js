import { Resumen } from '../../../components/Agentes'
import { leerResumen } from '../../../lib/agentes'

// Página con token, como las salas: no se indexa ni pasa el token a otras webs por el Referer
export async function getServerSideProps({ params, res }) {
  const inicial = await leerResumen(params.token)
  if (!inicial) return { notFound: true }
  res.setHeader('Cache-Control', 'no-store')
  res.setHeader('X-Robots-Tag', 'noindex, nofollow')
  res.setHeader('Referrer-Policy', 'no-referrer')
  return { props: { token: params.token, inicial } }
}

export default function ResumenPage(props) {
  return <Resumen {...props} />
}
