import { fichaEstatica } from '../../../lib/odoo-apps'

// Ruta antigua de las fichas: redirige de forma permanente a /tienda/odoo-module y /tienda/odoo-template
export function getStaticPaths() {
  return { paths: [], fallback: 'blocking' }
}

export function getStaticProps({ params }) {
  return fichaEstatica(params)
}

export default function RutaAntigua() {
  return null
}
