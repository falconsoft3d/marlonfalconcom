import LibroPage from '../../components/Libros/LibroPage'
import { libros } from '../../components/Libros/data'

export function getStaticPaths() {
  return { paths: libros.map(({ slug }) => ({ params: { slug } })), fallback: false }
}

export function getStaticProps({ params }) {
  return { props: { slug: params.slug } }
}

export default function Libro({ slug }) {
  return <LibroPage libro={libros.find((libro) => libro.slug === slug)} />
}
