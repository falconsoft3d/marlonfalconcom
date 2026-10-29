import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useIdioma } from '../../lib/idioma'

const toUrl = (web) => (/^https?:\/\//.test(web) ? web : `https://${web}`)

// Globo con tres meridianos desfasados que se desplazan para simular que gira
const Globo = ({ size, className }) => (
  <svg
    className={`mw-globe ${className}`}
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    {[0, 1, 2].map((i) => (
      <path key={i} className="mw-meridiano" d="M12 2a10 10 0 0 1 0 20" />
    ))}
  </svg>
)

const TEXTOS = {
  es: { titulo: 'Mis webs', todas: 'Ver con capturas →' },
  en: { titulo: 'My websites', todas: 'View with screenshots →' }
}

export default function MisWebs() {
  const [webs, setWebs] = useState([])
  const { lang } = useIdioma()
  const t = TEXTOS[lang]

  useEffect(() => {
    fetch('/api/mis-webs')
      .then((res) => res.json())
      .then((json) => setWebs(json.data || []))
      .catch(() => setWebs([]))
  }, [])

  if (!webs.length) return null

  return (
    <div className="mis-webs">
      <div className="mis-webs-head">
        <h4>
          <Globo size={18} className="mw-globe-head" /> {t.titulo}
        </h4>
        <Link href="/webs">
          <a className="mis-webs-all">{t.todas}</a>
        </Link>
      </div>
      <ul>
        {webs.map((item) => (
          <li key={item.id}>
            <a href={toUrl(item.web)} target="_blank" rel="noopener noreferrer">
              <Globo size={15} className="mw-globe-card" />
              <span className="mw-nombre">
                {/* Los dominios largos se parten por los puntos, no a mitad de palabra */}
                {item.nombre.split('.').map((parte, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && (
                      <>
                        .<wbr />
                      </>
                    )}
                    {parte}
                  </React.Fragment>
                ))}
              </span>
            </a>
            {item.descripcion && <span>{item.descripcion}</span>}
          </li>
        ))}
      </ul>

      <style jsx>{`
        .mis-webs {
          padding: 2.5rem 0;
          border-top: 1px solid var(--border);
        }
        .mis-webs-head {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        .mis-webs .mis-webs-all {
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--accent-2);
        }
        .mis-webs h4 {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin: 0;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--text-strong);
        }
        .mis-webs ul {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 0.75rem;
          padding: 0;
          margin: 0;
          list-style-type: none !important;
        }
        .mis-webs li {
          min-width: 0;
          margin: 0;
          padding: 0.75rem 0.9rem;
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          border: 1px solid var(--border);
          border-radius: 0.75rem;
          background: var(--surface-2);
          transition: border-color 0.15s;
        }
        .mis-webs li::before {
          content: none;
        }
        .mis-webs li:hover {
          border-color: var(--accent-2);
        }
        .mis-webs a {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          min-width: 0;
          color: var(--text-strong);
          text-decoration: none;
          font-weight: 600;
        }
        .mis-webs a:hover {
          color: var(--accent-2);
        }
        .mis-webs span {
          font-size: 0.8rem;
          color: var(--muted);
        }
        .mis-webs .mw-nombre {
          min-width: 0;
          font-size: inherit;
          color: inherit;
          overflow-wrap: anywhere;
        }

        .mis-webs :global(.mw-globe) {
          flex-shrink: 0;
          color: var(--accent-2);
          overflow: visible;
        }
        .mis-webs :global(.mw-globe-head) {
          animation: mw-brillo 2.4s ease-in-out infinite;
        }
        .mis-webs :global(.mw-meridiano) {
          transform-origin: 12px 12px;
          animation: mw-gira 3s ease-in-out infinite;
        }
        .mis-webs :global(.mw-meridiano:nth-child(4)) {
          animation-delay: -1s;
        }
        .mis-webs :global(.mw-meridiano:nth-child(5)) {
          animation-delay: -2s;
        }
        /* En las tarjetas el globo solo gira al pasar el ratón */
        .mis-webs :global(.mw-globe-card) {
          opacity: 0.75;
          transition: opacity 0.15s;
        }
        .mis-webs :global(.mw-globe-card .mw-meridiano) {
          animation-play-state: paused;
        }
        .mis-webs li:hover :global(.mw-globe-card) {
          opacity: 1;
        }
        .mis-webs li:hover :global(.mw-globe-card .mw-meridiano) {
          animation-play-state: running;
        }
        @keyframes mw-gira {
          0% {
            transform: scaleX(-1);
            opacity: 0;
          }
          15%,
          85% {
            opacity: 1;
          }
          100% {
            transform: scaleX(1);
            opacity: 0;
          }
        }
        @keyframes mw-brillo {
          0%,
          100% {
            filter: none;
          }
          50% {
            filter: drop-shadow(0 0 4px var(--accent-2));
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .mis-webs :global(.mw-globe-head),
          .mis-webs :global(.mw-meridiano) {
            animation: none;
          }
          .mis-webs :global(.mw-meridiano) {
            transform: scaleX(0.4);
          }
        }
      `}</style>
    </div>
  )
}
