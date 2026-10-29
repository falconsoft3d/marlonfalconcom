import { Modulo } from '../../../components/Tienda'
import { obtenerModulo, REVALIDAR } from '../../../lib/odoo-apps'

// Las fichas se generan al primer acceso y se regeneran cada hora desde apps.odoo.com
export function getStaticPaths() {
  return { paths: [], fallback: 'blocking' }
}

export async function getStaticProps({ params }) {
  const modulo = await obtenerModulo(params.version, params.modulo)
  if (!modulo) return { notFound: true, revalidate: REVALIDAR }
  return { props: { modulo }, revalidate: REVALIDAR }
}

export default function ModuloPage({ modulo }) {
  return <Modulo modulo={modulo} />
}
