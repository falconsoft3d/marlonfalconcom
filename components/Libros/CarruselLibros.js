import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Cabecera from './Cabecera'
import { contraportada, librosPorNovedad } from './data'
import estilos from './estilos'

// La pista lleva los libros dos veces: al pasar de media pista se salta atrás y la copia ocupa el sitio del original
const pista = [...librosPorNovedad, ...librosPorNovedad]

// Ciclo de cada libro en ms: llega al centro, crece y se gira, enseña la contraportada y vuelve antes de seguir.
// VUELTA y el principio de VISTA cubren las transiciones de .lc-libro y .lc-tapas
const VIAJE = 2000
const VISTA = 3900
const VUELTA = 1100
const CICLO = VIAJE + VISTA + VUELTA

const suave = (t) => (t < 0.5 ? 2 * t * t : 1 - (2 - 2 * t) ** 2 / 2)

// Todos los libros pasando en bucle. Se detiene con el ratón o el teclado, y sin animación si el sistema la desactiva
export default function CarruselLibros() {
  const pistaRef = useRef(null)
  const [centrado, setCentrado] = useState(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const el = pistaRef.current
    const marco = el.parentElement
    const libros = el.children
    const total = librosPorNovedad.length

    // Desplazamiento de la pista que deja el libro i en el centro del marco
    const destino = (i) => libros[i].offsetLeft + libros[i].offsetWidth / 2 - marco.clientWidth / 2

    let i = 0
    while (destino(i) < 0) i++
    let origen = 0
    let t = 0
    let previo = performance.now()
    let frame

    const pintar = (ahora) => {
      if (!marco.matches(':hover, :focus-within')) t += Math.min(ahora - previo, 100)
      previo = ahora

      if (t >= CICLO) {
        const mediaPista = libros[total].offsetLeft - libros[0].offsetLeft
        t = 0
        origen = destino(i)
        i++
        if (origen >= mediaPista) {
          origen -= mediaPista
          i -= total
        }
      }

      const x = origen + (destino(i) - origen) * suave(Math.min(t / VIAJE, 1))
      el.style.transform = `translateX(${-x}px)`
      setCentrado(t >= VIAJE && t < VIAJE + VISTA ? i : null)
      frame = requestAnimationFrame(pintar)
    }

    frame = requestAnimationFrame(pintar)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div className="lc lb-u">
      <div className="lc-head">
        <Cabecera titulo={{ es: 'Mis libros', en: 'My books' }} />
      </div>

      <div className="lc-marco">
        <div className="lc-pista" ref={pistaRef}>
          {pista.map((libro, i) => {
            const copia = i >= librosPorNovedad.length
            return (
              <Link key={i} href={`/libros/${libro.slug}`}>
                <a
                  className={centrado === i ? 'lc-libro lc-centro' : 'lc-libro'}
                  aria-hidden={copia || undefined}
                  tabIndex={copia ? -1 : undefined}
                >
                  <span className="lc-tapas">
                    <span className="lb-cover">
                      <Image
                        src={libro.portada.src}
                        alt=""
                        width={libro.portada.ancho}
                        height={libro.portada.alto}
                        layout="responsive"
                        sizes="204px"
                        loading="eager"
                      />
                    </span>
                    <span className="lc-dorso">
                      <Image src={contraportada(libro)} alt="" layout="fill" objectFit="cover" sizes="204px" />
                    </span>
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
          /* Hueco para que el libro del centro crezca y gire sin cortarse */
          margin-top: -1.75rem;
          padding: 2.75rem 0 2.5rem;
          mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
        }
        .lc .lc-pista {
          position: relative;
          display: flex;
          align-items: flex-start;
          width: max-content;
        }
        /* Margen y no gap: media pista tiene que medir justo un juego de libros */
        .lc a.lc-libro {
          flex: 0 0 170px;
          margin-right: 1.75rem;
          color: var(--text-strong);
          text-decoration: none;
          perspective: 900px;
          transition: transform 0.45s ease 0.65s;
        }
        .lc a.lc-libro:hover {
          color: var(--accent-2);
        }
        /* Primero crece y luego gira; al volver, al revés */
        .lc a.lc-libro.lc-centro {
          position: relative;
          z-index: 1;
          transform: scale(1.2);
          transition-delay: 0s;
        }
        .lc .lc-tapas {
          position: relative;
          display: block;
          transform-style: preserve-3d;
          transition: transform 0.7s ease;
        }
        .lc a.lc-centro .lc-tapas {
          transform: rotateY(-180deg);
          transition-delay: 0.4s;
        }
        .lc .lb-cover,
        .lc .lc-dorso {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .lc .lc-dorso {
          position: absolute;
          inset: 0;
          overflow: hidden;
          border-radius: 8px 3px 3px 8px;
          background: var(--surface-2);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35), 0 18px 32px -14px rgba(0, 0, 0, 0.6);
          transform: rotateY(180deg);
        }
        /* Algunos PDF dejan un filo blanco en la última página: el zoom lo saca del recorte */
        .lc .lc-dorso img {
          margin: 0 !important;
          transform: scale(1.02);
        }
        .lc .lc-name {
          display: block;
          margin-top: 0.8rem;
          font-size: 0.9rem;
          line-height: 1.3;
          font-variation-settings: 'wght' 600;
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
