import React from 'react'
import Link from 'next/link'
import Icon from '../Icon'
import Marco from './Marco'
import useCarrito from './useCarrito'
import { formatoPrecio, etiquetaVersion, imagenModulo } from './data'
import useTextos from './textos'

// Ficha de un módulo en una versión, con el resto de versiones publicadas
export default function Modulo({ modulo: m }) {
  const { anadir, tiene } = useCarrito()
  const t = useTextos()
  const enCarrito = tiene(m.clave)
  const gratis = !(m.precio > 0)
  const esWeb = m.tipo === 'tema'

  return (
    <Marco
      titulo={`${m.nombre} · ${etiquetaVersion(m.version)} · ${t.moduloTitulo}`}
      descripcion={m.resumen || (esWeb ? t.webs : t).moduloDescripcion(m.nombre, etiquetaVersion(m.version))}
    >
      <nav className="tm-crumbs" aria-label={t.ruta}>
        <Link href="/tienda">
          <a>{t.tiendaCorta}</a>
        </Link>
        <span>/</span>
        <Link href={`/tienda?${esWeb ? 'tipo=webs&' : ''}version=${m.version}`}>
          <a>{etiquetaVersion(m.version)}</a>
        </Link>
        <span>/</span>
        <b>{m.nombre}</b>
      </nav>

      <div className="tm">
        <div className={`tm-cover${esWeb ? ' tema' : ''}`}>
          {m.imagen && <img src={imagenModulo(m)} alt={t.portada(m.nombre)} />}
        </div>

        <div className="tm-info">
          <div className="tm-title">
            {m.icono && <img className="tm-icon" src={imagenModulo(m, 'icono')} alt="" width={64} height={64} />}
            <div>
              <h1>{m.nombre}</h1>
              <p>
                {t.por} {m.autor}
              </p>
            </div>
            <strong className="tm-price">{gratis ? t.gratis : formatoPrecio(m.precio, m.moneda)}</strong>
          </div>

          <div className="tm-tags">
            <span className="tn-badge">v {m.version}</span>
            {m.categoria && <span className="tm-cat">{m.categoria}</span>}
            {m.licencia && <span className="tm-cat">{m.licencia}</span>}
          </div>

          {m.resumen && <p className="tm-summary">{m.resumen}</p>}

          <div className="tm-actions">
            {gratis ? (
              <a className="tn-btn" href={m.url} target="_blank" rel="noopener noreferrer">
                <Icon name="download" size={18} /> {t.descargarGratis}
              </a>
            ) : enCarrito ? (
              <Link href="/tienda/carrito">
                <a className="tn-btn in">
                  <Icon name="check" size={18} /> {t.verCarrito}
                </a>
              </Link>
            ) : (
              <button type="button" className="tn-btn" onClick={() => anadir(m)}>
                <Icon name="cart" size={18} /> {t.anadir}
              </button>
            )}
            <a className="tn-btn ghost" href={m.url} target="_blank" rel="noopener noreferrer">
              {t.ficha} <Icon name="external" size={15} />
            </a>
          </div>

          <table className="tm-table">
            <tbody>
              <tr>
                <th>{t.versiones}</th>
                <td className="tm-versions">
                  {m.versiones.map((v) =>
                    v === m.version ? (
                      <span key={v} className="on" aria-current="page">
                        {v}
                      </span>
                    ) : (
                      <Link key={v} href={`/tienda/${v}/${m.tecnico}`}>
                        <a>{v}</a>
                      </Link>
                    )
                  )}
                </td>
              </tr>
              {m.dependencias.length > 0 && (
                <tr>
                  <th>{t.dependencias}</th>
                  <td>{m.dependencias.join(' · ')}</td>
                </tr>
              )}
              {m.lineas > 0 && (
                <tr>
                  <th>{t.lineas}</th>
                  <td>{m.lineas.toLocaleString(t.locale)}</td>
                </tr>
              )}
              <tr>
                <th>{t.tecnico}</th>
                <td>
                  <code>{m.tecnico}</code>
                </td>
              </tr>
              <tr>
                <th>{t.entrega}</th>
                <td>{t.entregaTexto}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <style jsx global>{`
        .tm-crumbs {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
          font-size: 0.85rem;
          color: var(--muted);
        }
        .tm-crumbs a {
          color: var(--accent-2);
        }
        .tm-crumbs b {
          color: var(--text-strong);
        }
        .tm {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
          gap: 2.5rem;
          align-items: start;
        }
        .tm-cover {
          overflow: hidden;
          aspect-ratio: 2 / 1;
          border: 1px solid var(--border);
          border-radius: 0.75rem;
          background: #d9d9d9;
          box-shadow: 0 18px 40px -28px var(--glow);
        }
        .tm-cover img {
          width: 100%;
          height: 100%;
          margin: 0;
          object-fit: cover;
        }
        .tm-cover.tema {
          aspect-ratio: auto;
        }
        .tm-cover.tema img {
          height: auto;
        }
        .tm-title {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        .tm-icon {
          margin: 0;
          border-radius: 0.6rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
        }
        .tm-title h1 {
          margin: 0;
          font-size: 1.6rem;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--text-strong);
        }
        .tm-title p {
          margin: 0.25rem 0 0;
          color: var(--muted);
          font-size: 0.9rem;
        }
        .tm-price {
          margin-left: auto;
          padding-left: 1rem;
          white-space: nowrap;
          font-size: 1.6rem;
          color: var(--text-strong);
        }
        .tm-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin: 1rem 0;
        }
        .tm-cat {
          padding: 0.2rem 0.65rem;
          border-radius: 999px;
          background: var(--tint);
          color: var(--accent-2);
          font-size: 0.78rem;
          font-variation-settings: 'wght' 600;
        }
        .tm-summary {
          margin: 0 0 1.25rem;
          line-height: 1.6;
        }
        .tm-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-bottom: 1.5rem;
        }
        .tm-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.88rem;
        }
        .tm-table th,
        .tm-table td {
          padding: 0.65rem 0;
          border-top: 1px solid var(--border);
          text-align: left;
          vertical-align: top;
        }
        .tm-table th {
          width: 38%;
          padding-right: 1rem;
          color: var(--muted);
          font-variation-settings: 'wght' 600;
        }
        .tm-versions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }
        .tm-versions a,
        .tm-versions span {
          padding: 0.15rem 0.55rem;
          border-radius: 0.35rem;
          background: var(--surface);
          border: 1px solid var(--border);
          color: var(--text-strong);
          font-size: 0.8rem;
        }
        .tm-versions a:hover {
          border-color: var(--accent-2);
        }
        .tm-versions span.on {
          background: #26232a;
          border-color: #26232a;
          color: #fff;
        }
        @media (max-width: 860px) {
          .tm {
            grid-template-columns: minmax(0, 1fr);
            gap: 1.5rem;
          }
          .tm-title {
            flex-wrap: wrap;
          }
          .tm-price {
            margin-left: 0;
            padding-left: 0;
            width: 100%;
          }
        }
      `}</style>
    </Marco>
  )
}
