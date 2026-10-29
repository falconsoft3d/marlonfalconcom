import React, { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import Icon from '../Icon'
import Marco from './Marco'
import Tarjeta from './Tarjeta'
import { ODOO_AUTOR_URL, etiquetaVersion } from './data'

const ORDENES = {
  relevancia: (a, b) => a.orden - b.orden,
  nombre: (a, b) => a.nombre.localeCompare(b.nombre, 'es'),
  'precio-asc': (a, b) => a.precio - b.precio,
  'precio-desc': (a, b) => b.precio - a.precio,
  descargas: (a, b) => b.descargas - a.descargas
}

const normalizar = (s = '') =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')

// Catálogo leído de apps.odoo.com, agrupado por versión de Odoo como en Odoo Apps
export default function Tienda({ modulos, actualizado }) {
  const router = useRouter()
  const [version, setVersion] = useState('todas')
  const [categoria, setCategoria] = useState('')
  const [precio, setPrecio] = useState('')
  const [orden, setOrden] = useState('relevancia')
  const [busqueda, setBusqueda] = useState('')

  // La versión elegida vive en la URL (?version=16.0) para poder enlazarla
  useEffect(() => {
    if (router.isReady && typeof router.query.version === 'string') setVersion(router.query.version)
  }, [router.isReady, router.query.version])

  const elegirVersion = (v) => {
    setVersion(v)
    const query = v === 'todas' ? {} : { version: v }
    router.replace({ pathname: '/tienda', query }, undefined, { shallow: true, scroll: false })
  }

  const versiones = useMemo(() => {
    const cuenta = {}
    modulos.forEach((m) => (cuenta[m.version] = (cuenta[m.version] || 0) + 1))
    return Object.keys(cuenta)
      .sort((a, b) => parseFloat(b) - parseFloat(a))
      .map((v) => [v, cuenta[v]])
  }, [modulos])

  const categorias = useMemo(
    () => [...new Set(modulos.map((m) => m.categoria).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'es')),
    [modulos]
  )

  const filtrados = useMemo(() => {
    const q = normalizar(busqueda.trim())
    return modulos
      .filter((m) => version === 'todas' || m.version === version)
      .filter((m) => !categoria || m.categoria === categoria)
      .filter((m) => !precio || (precio === 'gratis' ? !(m.precio > 0) : m.precio > 0))
      .filter((m) => !q || normalizar(`${m.nombre} ${m.tecnico} ${m.resumen} ${m.categoria}`).includes(q))
      .sort(ORDENES[orden])
  }, [modulos, version, categoria, precio, orden, busqueda])

  // Con "Todas" se muestra una sección por versión, de la más nueva a la más antigua
  const grupos = useMemo(() => {
    if (version !== 'todas') return [[version, filtrados]]
    return versiones.map(([v]) => [v, filtrados.filter((m) => m.version === v)]).filter(([, lista]) => lista.length)
  }, [version, versiones, filtrados])

  const tecnicos = new Set(modulos.map((m) => m.tecnico)).size

  return (
    <Marco
      titulo="Tienda de módulos Odoo · Marlon Falcón Hernández"
      descripcion="Compra módulos de Odoo de Marlon Falcón Hernández para Odoo 14 a 20: contabilidad, facturación electrónica, ventas, construcción y logística."
    >
      <header className="ts-head">
        <div>
          <h1 className="tn-title">Módulos de Odoo</h1>
          <p className="tn-lede">
            {tecnicos} módulos publicados en{' '}
            <a href={ODOO_AUTOR_URL} target="_blank" rel="noopener noreferrer">
              Odoo Apps
            </a>
            , con el código fuente completo. Elige la versión de tu Odoo, añádelos al carrito y paga con PayPal.
          </p>
        </div>
        <label className="ts-search">
          <Icon name="search" size={17} />
          <input
            type="search"
            placeholder="Buscar módulo…"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            aria-label="Buscar módulo"
          />
        </label>
      </header>

      <div className="ts-bar">
        <label>
          <span>Categoría</span>
          <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
            <option value="">Todas</option>
            {categorias.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
        <label>
          <span>Precio</span>
          <select value={precio} onChange={(e) => setPrecio(e.target.value)}>
            <option value="">Todos</option>
            <option value="pago">De pago</option>
            <option value="gratis">Gratis</option>
          </select>
        </label>
        <label>
          <span>Versión</span>
          <select value={version} onChange={(e) => elegirVersion(e.target.value)}>
            <option value="todas">Todas</option>
            {versiones.map(([v]) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </label>
        <label className="ts-sort">
          <span>Ordenar por</span>
          <select value={orden} onChange={(e) => setOrden(e.target.value)}>
            <option value="relevancia">Relevancia</option>
            <option value="nombre">Nombre</option>
            <option value="precio-asc">Precio: menor a mayor</option>
            <option value="precio-desc">Precio: mayor a menor</option>
            <option value="descargas">Descargas</option>
          </select>
        </label>
      </div>

      <nav className="ts-versions" aria-label="Versiones de Odoo">
        <button type="button" className={version === 'todas' ? 'on' : ''} onClick={() => elegirVersion('todas')}>
          Todas <small>{modulos.length}</small>
        </button>
        {versiones.map(([v, n]) => (
          <button key={v} type="button" className={version === v ? 'on' : ''} onClick={() => elegirVersion(v)}>
            {etiquetaVersion(v)} <small>{n}</small>
          </button>
        ))}
      </nav>

      {grupos.length === 0 && <p className="tn-empty">No hay módulos con esos filtros.</p>}

      {grupos.map(([v, lista]) => (
        <section key={v} className="ts-group">
          <h2>
            {etiquetaVersion(v)}
            <span>
              {lista.length} {lista.length === 1 ? 'módulo' : 'módulos'}
            </span>
          </h2>
          <div className="ts-grid">
            {lista.map((m) => (
              <Tarjeta key={m.clave} modulo={m} />
            ))}
          </div>
        </section>
      ))}

      <p className="ts-sync">
        Catálogo sincronizado con Odoo Apps · actualizado el{' '}
        {new Date(actualizado).toLocaleString('es-ES', { dateStyle: 'long', timeStyle: 'short', timeZone: 'Europe/Madrid' })}
      </p>

      <style jsx global>{`
        .ts-head {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 1.5rem;
          padding-bottom: 1.5rem;
        }
        .ts-head .tn-lede a {
          color: var(--accent-2);
        }
        .ts-search {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex: 0 1 320px;
          height: 44px;
          padding: 0 1rem;
          border: 1px solid var(--border);
          border-radius: 999px;
          background: var(--surface-2);
          color: var(--muted);
        }
        .ts-search:focus-within {
          border-color: var(--accent-2);
        }
        .ts-search input {
          flex: 1;
          min-width: 0;
          border: 0;
          outline: 0;
          background: transparent;
          color: var(--text-strong);
          font: inherit;
        }

        .ts-bar {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem 1.5rem;
          padding: 0.75rem 1rem;
          border: 1px solid var(--border);
          border-radius: 0.75rem;
          background: var(--surface);
        }
        .ts-bar label {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.85rem;
          color: var(--muted);
        }
        .ts-bar .ts-sort {
          margin-left: auto;
        }
        .ts-bar select {
          padding: 0.35rem 0.5rem;
          border: 1px solid var(--border);
          border-radius: 0.45rem;
          background: var(--surface-2);
          color: var(--text-strong);
          font: inherit;
          font-variation-settings: 'wght' 600;
        }

        .ts-versions {
          display: flex;
          gap: 0.4rem;
          margin: 1.25rem 0 0.5rem;
          overflow-x: auto;
          padding-bottom: 0.25rem;
        }
        .ts-versions button {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          height: 36px;
          padding: 0 0.9rem;
          border: 1px solid var(--border);
          border-radius: 999px;
          background: transparent;
          color: var(--text);
          font: inherit;
          font-size: 0.88rem;
          cursor: pointer;
          transition: background-color 0.15s, border-color 0.15s;
        }
        .ts-versions button:hover {
          border-color: var(--accent-2);
        }
        .ts-versions button.on {
          border-color: #26232a;
          background: #26232a;
          color: #fff;
        }
        html.dark .ts-versions button.on {
          border-color: var(--p-blue);
          background: var(--p-blue);
          color: var(--on-accent);
        }
        .ts-versions small {
          opacity: 0.65;
          font-size: 0.75rem;
        }

        .ts-group h2 {
          display: flex;
          align-items: baseline;
          gap: 0.75rem;
          margin: 2rem 0 1rem;
          font-size: 1.5rem;
          letter-spacing: -0.02em;
          color: var(--text-strong);
        }
        .ts-group h2 span {
          color: var(--muted);
          font-size: 0.9rem;
          font-variation-settings: 'wght' 450;
        }
        .ts-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1.75rem 1.5rem;
        }
        .ts-sync {
          margin: 3rem 0 0;
          color: var(--muted);
          font-size: 0.78rem;
          text-align: center;
        }

        @media (max-width: 1080px) {
          .ts-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        @media (max-width: 820px) {
          .ts-head {
            flex-direction: column;
            align-items: stretch;
          }
          .ts-search {
            flex-basis: auto;
          }
          .ts-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .ts-bar .ts-sort {
            margin-left: 0;
          }
        }
        @media (max-width: 540px) {
          .ts-grid {
            grid-template-columns: minmax(0, 1fr);
          }
        }
      `}</style>
    </Marco>
  )
}
