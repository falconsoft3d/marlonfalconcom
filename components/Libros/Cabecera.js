import React from 'react'
import Link from 'next/link'
import Icon from '../Icon'
import { tr, useIdioma } from '../../lib/idioma'

const TEXTOS = {
  es: { lede: 'Libros gratuitos en español, con PDF para descargar.', todos: 'Ver todos los libros' },
  en: { lede: 'Free books in Spanish, with a PDF to download.', todos: 'View all books' }
}

// Título de las secciones de libros en otras páginas del sitio. Sus estilos están en estilos.js
export default function Cabecera({ titulo }) {
  const { lang } = useIdioma()
  const t = TEXTOS[lang]

  return (
    <div className="lb-head">
      <div>
        <h2 className="lb-head-title">{tr(titulo, lang)}</h2>
        <p className="lb-head-lede">{t.lede}</p>
      </div>
      <Link href="/libros">
        <a className="lb-btn">
          {t.todos} <Icon name="arrow" size={16} />
        </a>
      </Link>
    </div>
  )
}
