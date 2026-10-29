import React from 'react'
import Link from 'next/link'
import Icon from '../Icon'
import useCarrito from './useCarrito'
import { formatoPrecio, rutaModulo } from './data'

// Tarjeta de módulo con el formato de apps.odoo.com (la portada ya trae la etiqueta de versión)
export default function Tarjeta({ modulo: m }) {
  const { anadir, tiene } = useCarrito()
  const enCarrito = tiene(m.clave)
  const gratis = !(m.precio > 0)

  return (
    <div className="tc">
      <Link href={rutaModulo(m)}>
        <a className="tc-link">
          <span className="tc-cover">
            {m.imagen && <img src={m.imagen} alt="" loading="lazy" />}
            {m.resumen && <span className="tc-summary">{m.resumen}</span>}
          </span>
          <span className="tc-body">
            <span className="tc-name" title={m.nombre}>
              {m.nombre}
            </span>
            <span className="tc-row">
              <span className="tc-author">{m.autor}</span>
              <b className="tc-price">{gratis ? 'GRATIS' : formatoPrecio(m.precio, m.moneda)}</b>
            </span>
          </span>
        </a>
      </Link>

      <div className="tc-foot">
        <span className="tc-meta">
          {m.categoria}
          {m.descargas > 0 && (
            <span title="Descargas totales en Odoo Apps">
              <Icon name="download" size={13} /> {m.descargas}
            </span>
          )}
        </span>
        {gratis ? (
          <a className="tc-cart" href={m.url} target="_blank" rel="noopener noreferrer" title="Descargar gratis en Odoo Apps">
            <Icon name="external" size={16} />
          </a>
        ) : (
          <button
            type="button"
            className={`tc-cart${enCarrito ? ' in' : ''}`}
            onClick={() => anadir(m)}
            disabled={enCarrito}
            aria-label={enCarrito ? `${m.nombre} ya está en el carrito` : `Añadir ${m.nombre} al carrito`}
            title={enCarrito ? 'En el carrito' : 'Añadir al carrito'}
          >
            <Icon name={enCarrito ? 'check' : 'cart'} size={16} />
          </button>
        )}
      </div>

      <style jsx global>{`
        .tc {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid var(--border);
          border-radius: 0.6rem;
          background: var(--surface-2);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
          transition: box-shadow 0.2s, transform 0.2s, border-color 0.2s;
        }
        .tc:hover {
          transform: translateY(-2px);
          border-color: var(--tint-border);
          box-shadow: 0 18px 40px -24px var(--glow);
        }
        .tc-link {
          display: block;
          color: inherit;
        }
        .tc-cover {
          position: relative;
          display: block;
          aspect-ratio: 2 / 1;
          overflow: hidden;
          background: #d9d9d9;
        }
        .tc-cover img {
          width: 100%;
          height: 100%;
          margin: 0;
          object-fit: cover;
        }
        .tc-summary {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          padding: 1rem 1.1rem;
          background: rgba(38, 35, 42, 0.86);
          color: #fff;
          font-size: 0.88rem;
          line-height: 1.45;
          opacity: 0;
          transition: opacity 0.2s;
        }
        .tc:hover .tc-summary,
        .tc-link:focus-visible .tc-summary {
          opacity: 1;
        }
        .tc-body {
          display: block;
          padding: 0.8rem 0.9rem 0.25rem;
        }
        .tc-name {
          display: block;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: var(--text-strong);
          font-size: 1.12rem;
          font-variation-settings: 'wght' 650;
        }
        .tc-row {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 0.75rem;
          margin-top: 0.4rem;
        }
        .tc-author {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: var(--muted);
          font-size: 0.85rem;
        }
        .tc-price {
          flex-shrink: 0;
          color: var(--text-strong);
          font-size: 1.05rem;
        }
        .tc-foot {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          margin-top: auto;
          padding: 0.4rem 0.9rem 0.8rem;
        }
        .tc-meta {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--muted);
          font-size: 0.75rem;
        }
        .tc-meta span {
          display: inline-flex;
          align-items: center;
          gap: 0.2rem;
        }
        .tc-cart {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border: 1px solid var(--border);
          border-radius: 999px;
          background: transparent;
          color: var(--text-strong);
          cursor: pointer;
          transition: background-color 0.15s, border-color 0.15s;
        }
        .tc-cart:hover {
          border-color: var(--accent-2);
          background: var(--tint);
        }
        .tc-cart.in {
          border-color: var(--tint-border);
          background: var(--tint);
          color: var(--accent-2);
          cursor: default;
        }
      `}</style>
    </div>
  )
}
