// Texto de un campo en los idiomas del calendario. Si falta una traducción,
// el catalán cae al español y el ruso al inglés (y el inglés al español).
const traducir = (e, campo) => {
  const es = e[campo] || ''
  const en = e[`${campo}_en`] || es
  return { es, en, ca: e[`${campo}_ca`] || es, ru: e[`${campo}_ru`] || en }
}

// Datos de un tipo de reunión que se pueden enseñar en la web pública
export const eventoPublico = (e) => ({
  slug: e.slug,
  titulo: traducir(e, 'title'),
  descripcion: traducir(e, 'description'),
  lugar: traducir(e, 'location'),
  duracion: e.duration_minutes
})
