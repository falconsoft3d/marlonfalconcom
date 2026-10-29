import Tienda from '../../components/Tienda'
import { obtenerCatalogo, REVALIDAR } from '../../lib/odoo-apps'

// El catálogo se lee de apps.odoo.com y se regenera cada hora
export async function getStaticProps() {
  const modulos = await obtenerCatalogo()
  return {
    props: { modulos, actualizado: new Date().toISOString() },
    revalidate: REVALIDAR
  }
}

export default function TiendaPage(props) {
  return <Tienda {...props} />
}
