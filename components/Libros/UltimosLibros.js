import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Cabecera from './Cabecera'
import { ultimosLibros } from './data'
import estilos from './estilos'
import { tr, useIdioma } from '../../lib/idioma'

const NUEVO = { es: 'Nuevo', en: 'New' }

// Novedades para otras páginas del sitio: va dentro de una banda de la página que la usa
export default function UltimosLibros() {
  const { lang } = useIdioma()

  return (
    <div className="ul lb-u">
      <Cabecera titulo={{ es: 'Últimos libros', en: 'Latest books' }} />

      <div className="ul-grid">
        {ultimosLibros.map((libro) => (
          <Link key={libro.slug} href={`/libros/${libro.slug}`}>
            <a className="ul-card">
              <span className="lb-cover">
                <Image src={libro.portada.src} alt="" width={libro.portada.ancho} height={libro.portada.alto} layout="responsive" sizes="110px" />
              </span>
              <span className="ul-body">
                {libro.nuevo && <span className="lb-new">{tr(NUEVO, lang)}</span>}
                <span className="ul-name">{libro.titulo}</span>
                <span className="ul-sub">{tr(libro.subtitulo, lang)}</span>
                <span className="ul-data">{tr(libro.datos, lang).slice(0, 2).join(' · ')}</span>
              </span>
            </a>
          </Link>
        ))}
      </div>

      <style jsx global>{estilos}</style>
      <style jsx global>{`
        .ul {
          color: var(--text);
        }
        .ul .ul-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1rem;
        }
        .ul a.ul-card {
          display: grid;
          grid-template-columns: 110px minmax(0, 1fr);
          gap: 1.1rem;
          align-items: start;
          padding: 1.1rem;
          border: 1px solid var(--border);
          border-radius: 1rem;
          background: var(--surface-2);
          color: var(--text);
          text-decoration: none;
          transition: border-color 0.15s, transform 0.15s, box-shadow 0.15s;
        }
        .ul a.ul-card:hover {
          border-color: var(--tint-border);
          transform: translateY(-2px);
          box-shadow: 0 16px 40px -20px var(--glow);
        }
        .ul .ul-body {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.4rem;
          min-width: 0;
        }
        .ul .ul-name {
          color: var(--text-strong);
          font-size: 1.05rem;
          line-height: 1.3;
          font-variation-settings: 'wght' 650;
        }
        .ul .ul-sub {
          color: var(--muted);
          font-size: 0.85rem;
          line-height: 1.45;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .ul .ul-data {
          color: var(--text-strong);
          font-size: 0.8rem;
          font-variation-settings: 'wght' 600;
        }

        @media (max-width: 960px) {
          .ul .ul-grid {
            grid-template-columns: minmax(0, 1fr);
          }
        }
      `}</style>
    </div>
  )
}
