import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Cabecera from './Cabecera'
import { librosPorNovedad } from './data'
import estilos from './estilos'

// La pista lleva los libros dos veces y se desplaza media pista: al reiniciar, la copia ocupa el sitio del original
const pista = [...librosPorNovedad, ...librosPorNovedad]

// Así la velocidad no cambia al añadir libros
const SEGUNDOS_POR_LIBRO = 7

// Todos los libros pasando en bucle. Se detiene con el ratón o el teclado, y sin animación si el sistema la desactiva
export default function CarruselLibros() {
  return (
    <div className="lc lb-u">
      <div className="lc-head">
        <Cabecera titulo={{ es: 'Mis libros', en: 'My books' }} />
      </div>

      <div className="lc-marco">
        <div className="lc-pista" style={{ animationDuration: `${librosPorNovedad.length * SEGUNDOS_POR_LIBRO}s` }}>
          {pista.map((libro, i) => {
            const copia = i >= librosPorNovedad.length
            return (
              <Link key={i} href={`/libros/${libro.slug}`}>
                <a className="lc-libro" aria-hidden={copia || undefined} tabIndex={copia ? -1 : undefined}>
                  <span className="lb-cover">
                    <Image
                      src={libro.portada.src}
                      alt=""
                      width={libro.portada.ancho}
                      height={libro.portada.alto}
                      layout="responsive"
                      sizes="170px"
                      loading="eager"
                    />
                  </span>
                  <span className="lc-name">{libro.titulo}</span>
                </a>
              </Link>
            )
          })}
        </div>
      </div>

      <style jsx global>{estilos}</style>
      <style jsx global>{`
        .lc {
          color: var(--text);
        }
        .lc .lc-head {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 1.25rem;
        }
        .lc .lc-marco {
          overflow: hidden;
          padding: 0.5rem 0 1rem;
          mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
        }
        .lc .lc-pista {
          display: flex;
          align-items: flex-start;
          width: max-content;
          animation: lc-pasar linear infinite;
        }
        .lc .lc-marco:hover .lc-pista,
        .lc .lc-marco:focus-within .lc-pista {
          animation-play-state: paused;
        }
        /* Margen y no gap: media pista tiene que medir justo un juego de libros */
        .lc a.lc-libro {
          flex: 0 0 170px;
          margin-right: 1.75rem;
          color: var(--text-strong);
          text-decoration: none;
        }
        .lc a.lc-libro:hover {
          color: var(--accent-2);
        }
        .lc .lc-name {
          display: block;
          margin-top: 0.8rem;
          font-size: 0.9rem;
          line-height: 1.3;
          font-variation-settings: 'wght' 600;
        }
        @keyframes lc-pasar {
          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 760px) {
          .lc a.lc-libro {
            flex-basis: 130px;
            margin-right: 1.25rem;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .lc .lc-marco {
            overflow-x: auto;
            mask-image: none;
            -webkit-mask-image: none;
          }
          .lc .lc-pista {
            animation: none;
            padding: 0 1.25rem;
          }
          .lc a.lc-libro[aria-hidden='true'] {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}
