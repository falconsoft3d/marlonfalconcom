import { Curso } from '../../../components/CursoOwl'
import { leerArchivos } from '../../../lib/curso-owl'

export function getStaticProps() {
  return { props: { archivos: leerArchivos() } }
}

export default function CursoOwlPage(props) {
  return <Curso {...props} />
}
