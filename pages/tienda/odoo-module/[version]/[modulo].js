import { Modulo } from '../../../../components/Tienda'
import { fichaEstatica } from '../../../../lib/odoo-apps'

// Las fichas se generan al primer acceso y se regeneran cada hora desde apps.odoo.com
export function getStaticPaths() {
  return { paths: [], fallback: 'blocking' }
}

export function getStaticProps({ params }) {
  return fichaEstatica(params, 'modulo')
}

export default function ModuloPage({ modulo }) {
  return <Modulo modulo={modulo} />
}
