import { Manual } from '../../../components/CursoOwl'
import { leerArchivos } from '../../../lib/curso-owl'

// Versión para imprimir del curso: `npm run owl:manual` la convierte en el PDF descargable
export function getStaticProps() {
  return { props: { archivos: leerArchivos() } }
}

export default function ManualPage(props) {
  return <Manual {...props} />
}
