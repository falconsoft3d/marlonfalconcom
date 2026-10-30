import React, { useEffect, useState } from 'react'
import Icon from '../Icon'
import { urlLibro } from './data'
import { useIdioma } from '../../lib/idioma'

const TEXTOS = {
  es: {
    compartir: 'Compartir',
    titulo: 'Compartir este libro',
    copiar: 'Copiar enlace',
    copiado: 'Enlace copiado',
    mensaje: (titulo) => `${titulo}, un libro de Marlon Falcón Hernández`
  },
  en: {
    compartir: 'Share',
    titulo: 'Share this book',
    copiar: 'Copy link',
    copiado: 'Link copied',
    mensaje: (titulo) => `${titulo}, a book by Marlon Falcón Hernández`
  }
}

function useCopiar(url, etiqueta) {
  const [copiado, setCopiado] = useState(false)

  useEffect(() => {
    if (!copiado) return
    const temporizador = setTimeout(() => setCopiado(false), 2000)
    return () => clearTimeout(temporizador)
  }, [copiado])

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopiado(true)
    } catch (e) {
      window.prompt(etiqueta, url)
    }
  }

  return [copiado, copiar]
}

// Botón de las tarjetas de /libros: abre el menú de compartir del sistema o, si no hay, copia el enlace
export function BotonCompartir({ libro }) {
  const { lang } = useIdioma()
  const t = TEXTOS[lang]
  const url = urlLibro(libro)
  const [copiado, copiar] = useCopiar(url, t.copiar)

  const compartir = async () => {
    if (!navigator.share) return copiar()
    try {
      await navigator.share({ title: libro.titulo, text: t.mensaje(libro.titulo), url })
    } catch (e) {
      // El usuario cerró el menú de compartir
    }
  }

  return (
    <button type="button" className="lb-btn" onClick={compartir}>
      <Icon name={copiado ? 'check' : 'share'} size={16} /> <span aria-live="polite">{copiado ? t.copiado : t.compartir}</span>
    </button>
  )
}

// Fila de redes de la página de cada libro
export default function Compartir({ libro }) {
  const { lang } = useIdioma()
  const t = TEXTOS[lang]
  const url = urlLibro(libro)
  const [copiado, copiar] = useCopiar(url, t.copiar)
  const mensaje = t.mensaje(libro.titulo)
  const enlace = encodeURIComponent(url)
  const texto = encodeURIComponent(mensaje)

  const redes = [
    { nombre: 'WhatsApp', icono: 'whatsapp', href: `https://wa.me/?text=${encodeURIComponent(`${mensaje} ${url}`)}` },
    { nombre: 'LinkedIn', icono: 'linkedin', href: `https://www.linkedin.com/sharing/share-offsite/?url=${enlace}` },
    { nombre: 'Telegram', icono: 'telegram', href: `https://t.me/share/url?url=${enlace}&text=${texto}` },
    { nombre: 'Email', icono: 'mail', href: `mailto:?subject=${encodeURIComponent(libro.titulo)}&body=${encodeURIComponent(`${mensaje}\n${url}`)}` }
  ]

  return (
    <div className="lb-share">
      <span className="lb-share-title">{t.titulo}</span>
      <div className="lb-share-list">
        {redes.map((red) => (
          <a key={red.nombre} className="lb-share-item" href={red.href} target="_blank" rel="noopener noreferrer" aria-label={red.nombre} title={red.nombre}>
            <Icon name={red.icono} size={18} />
          </a>
        ))}
        <button type="button" className="lb-share-item lb-share-copy" onClick={copiar}>
          <Icon name={copiado ? 'check' : 'link'} size={16} /> <span aria-live="polite">{copiado ? t.copiado : t.copiar}</span>
        </button>
      </div>

      <style jsx>{`
        .lb-share {
          margin-top: 1.5rem;
          padding-top: 1.1rem;
          border-top: 1px solid var(--border);
        }
        .lb-share-title {
          display: block;
          margin-bottom: 0.6rem;
          color: var(--muted);
          font-size: 0.72rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .lb-share-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .lb-share-item {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          min-width: 40px;
          height: 40px;
          padding: 0 0.7rem;
          border: 1px solid var(--border);
          border-radius: 999px;
          background: var(--surface-2);
          color: var(--text-strong);
          font: inherit;
          font-size: 0.85rem;
          text-decoration: none;
          cursor: pointer;
          transition: border-color 0.2s;
        }
        .lb-share-item:hover {
          border-color: var(--tint-border);
        }
      `}</style>
    </div>
  )
}
