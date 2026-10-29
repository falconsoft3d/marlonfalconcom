import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Icon from '../Icon'
import useCarrito from './useCarrito'
import { formatoPrecio } from './data'
import useTextos from './textos'

// Estructura y estilos comunes de todas las páginas de la tienda
export default function Marco({ titulo, descripcion, children }) {
  const { lineas, total } = useCarrito()
  const t = useTextos()

  return (
    <div className="tn">
      <Head>
        <title>{titulo}</title>
        {descripcion && <meta name="description" content={descripcion} />}
      </Head>

      <div className="tn-top">
        <Link href="/tienda">
          <a className="tn-home">
            <Icon name="box" size={16} /> {t.tienda}
          </a>
        </Link>
        <Link href="/tienda/carrito">
          <a className="tn-cartbtn" aria-label={t.carritoLabel(lineas.length)}>
            <Icon name="cart" size={18} />
            <span>{lineas.length ? formatoPrecio(total, lineas[0].moneda) : t.carrito}</span>
            {lineas.length > 0 && <b className="tn-count">{lineas.length}</b>}
          </a>
        </Link>
      </div>

      {children}

      <style jsx global>{`
        .tn {
          max-width: 1180px;
          margin: 0 auto;
          padding: 1.5rem 1.25rem 5rem;
          color: var(--text);
        }
        .tn a {
          text-decoration: none;
        }
        .tn-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding-bottom: 1.25rem;
        }
        .tn-home {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          color: var(--muted);
          font-size: 0.85rem;
        }
        .tn-home:hover {
          color: var(--text-strong);
        }
        .tn-cartbtn {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          height: 40px;
          padding: 0 1rem;
          border: 1px solid var(--border);
          border-radius: 999px;
          background: var(--surface);
          color: var(--text-strong);
          font-size: 0.88rem;
          font-variation-settings: 'wght' 600;
          transition: border-color 0.15s;
        }
        .tn-cartbtn:hover {
          border-color: var(--accent-2);
        }
        .tn-count {
          position: absolute;
          top: -6px;
          right: -6px;
          min-width: 20px;
          height: 20px;
          padding: 0 5px;
          border-radius: 999px;
          background: var(--accent-2);
          color: #fff;
          font-size: 0.7rem;
          line-height: 20px;
          text-align: center;
        }

        .tn-title {
          margin: 0 0 0.5rem;
          font-size: clamp(1.9rem, 4vw, 2.6rem);
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: var(--text-strong);
        }
        .tn-lede {
          max-width: 680px;
          margin: 0;
          color: var(--muted);
        }

        .tn-badge {
          display: inline-flex;
          align-items: center;
          padding: 0.2rem 0.65rem;
          border-radius: 0.35rem;
          background: #26232a;
          color: #fff;
          font-size: 0.78rem;
          font-variation-settings: 'wght' 650;
          letter-spacing: 0;
        }

        .tn-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          min-height: 44px;
          padding: 0 1.25rem;
          border: 1px solid transparent;
          border-radius: 999px;
          background: var(--accent);
          color: var(--on-accent);
          font: inherit;
          font-size: 0.92rem;
          font-variation-settings: 'wght' 650;
          cursor: pointer;
          transition: background-color 0.15s, border-color 0.15s, opacity 0.15s;
        }
        .tn-btn:hover {
          background: var(--accent-hover);
        }
        .tn-btn:disabled {
          opacity: 0.55;
          cursor: not-allowed;
        }
        .tn-btn.ghost {
          background: transparent;
          border-color: var(--border);
          color: var(--text-strong);
        }
        .tn-btn.ghost:hover {
          border-color: var(--accent-2);
        }
        .tn-btn.in {
          background: var(--tint);
          border-color: var(--tint-border);
          color: var(--accent-2);
        }

        .tn-empty {
          padding: 3rem 1.5rem;
          border: 1px dashed var(--border);
          border-radius: 1rem;
          text-align: center;
          color: var(--muted);
        }
        .tn-empty p {
          margin: 0 0 1.25rem;
        }
        .tn-error {
          margin: 0.75rem 0 0;
          padding: 0.75rem 1rem;
          border-radius: 0.6rem;
          background: rgba(220, 90, 90, 0.12);
          color: #c0392b;
          font-size: 0.9rem;
        }
        html.dark .tn-error {
          color: #f2a39b;
        }
      `}</style>
    </div>
  )
}
