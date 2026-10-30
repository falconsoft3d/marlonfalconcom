import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import Icon from '../Icon'
import Marco from './Marco'
import Tarjeta from './Tarjeta'
import { ODOO_AUTOR_URL, ODOO_TEMAS_URL, etiquetaVersion } from './data'
import useTextos from './textos'

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

// Al entrar se lee el catálogo en vivo de apps.odoo.com y, mientras tanto, se muestra la carga
export default function Tienda() {
  const t = useTextos()
  const [datos, setDatos] = useState(null)
  const [error, setError] = useState(false)

  const cargar = useCallback(() => {
    setError(false)
    fetch('/api/tienda/catalogo')
      .then((res) => {
        if (!res.ok) throw new Error()
        return res.json()
      })
      .then(setDatos)
      .catch(() => setError(true))
  }, [])

  useEffect(cargar, [cargar])

  if (datos) return <Catalogo {...datos} />

  return (
    <Marco titulo={t.catalogoTitulo} descripcion={t.catalogoDescripcion}>
      <h1 className="tn-title">{t.catalogoH1}</h1>

      {error ? (
        <div className="tn-empty">
          <p>{t.errorCatalogo}</p>
          <button type="button" className="tn-btn" onClick={cargar}>
            {t.reintentar}
          </button>
        </div>
      ) : (
        <div className="tl" role="status" aria-live="polite">
          <p className="tl-msg">
            <span className="tl-spin" aria-hidden="true" />
            {t.cargandoCatalogo}
          </p>
          <div className="tl-grid" aria-hidden="true">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="tl-card">
                <span className="tl-cover" />
                <span className="tl-line" />
                <span className="tl-line short" />
              </div>
            ))}
          </div>
        </div>
      )}

      <style jsx global>{`
        .tl-msg {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin: 0.5rem 0 2rem;
          color: var(--muted);
        }
        .tl-spin {
          width: 20px;
          height: 20px;
          border: 2px solid var(--border);
          border-top-color: var(--accent-2);
          border-radius: 50%;
          animation: tl-giro 0.8s linear infinite;
        }
        .tl-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1.75rem 1.5rem;
        }
        .tl-card {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          padding-bottom: 1.25rem;
          border: 1px solid var(--border);
          border-radius: 0.9rem;
          background: var(--surface);
          overflow: hidden;
        }
        .tl-cover,
        .tl-line {
          display: block;
          background: linear-gradient(90deg, var(--surface-2) 25%, var(--border) 50%, var(--surface-2) 75%);
          background-size: 200% 100%;
          animation: tl-brillo 1.4s ease-in-out infinite;
        }
        .tl-cover {
          aspect-ratio: 2 / 1;
        }
        .tl-line {
          height: 0.9rem;
          margin: 0 1.1rem;
          border-radius: 999px;
        }
        .tl-line.short {
          width: 45%;
        }
        @keyframes tl-giro {
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes tl-brillo {
          from {
            background-position: 200% 0;
          }
          to {
            background-position: -200% 0;
          }
        }
        @media (max-width: 1080px) {
          .tl-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        @media (max-width: 820px) {
          .tl-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 540px) {
          .tl-grid {
            grid-template-columns: minmax(0, 1fr);
          }
        }
      `}</style>
    </Marco>
  )
}

// Catálogo con una pestaña por tipo (módulos y webs), agrupado por versión de Odoo como en Odoo Apps
function Catalogo({ modulos, actualizado }) {
  const router = useRouter()
  const t = useTextos()
  const [version, setVersion] = useState('todas')
  const [categoria, setCategoria] = useState('')
  const [precio, setPrecio] = useState('')
  const [orden, setOrden] = useState('relevancia')
  const [busqueda, setBusqueda] = useState('')

  // La versión elegida vive en la URL (?version=16.0) para poder enlazarla
  useEffect(() => {
    if (router.isReady && typeof router.query.version === 'string') setVersion(router.query.version)
  }, [router.isReady, router.query.version])

  // La pestaña también vive en la URL (?tipo=webs)
  const tipo = router.query.tipo === 'webs' ? 'tema' : 'modulo'
  const c = tipo === 'tema' ? t.webs : t

  const navegar = (nuevoTipo, v) => {
    const query = {}
    if (nuevoTipo === 'tema') query.tipo = 'webs'
    if (v !== 'todas') query.version = v
    router.replace({ pathname: '/tienda', query }, undefined, { shallow: true, scroll: false })
  }

  const elegirVersion = (v) => {
    setVersion(v)
    navegar(tipo, v)
  }

  // Cada pestaña tiene sus categorías, y puede que no tenga la versión elegida
  const elegirTipo = (nuevoTipo) => {
    const v = modulos.some((m) => m.tipo === nuevoTipo && m.version === version) ? version : 'todas'
    setCategoria('')
    setVersion(v)
    navegar(nuevoTipo, v)
  }

  const delTipo = useMemo(() => modulos.filter((m) => m.tipo === tipo), [modulos, tipo])

  const versiones = useMemo(() => {
    const cuenta = {}
    delTipo.forEach((m) => (cuenta[m.version] = (cuenta[m.version] || 0) + 1))
    return Object.keys(cuenta)
      .sort((a, b) => parseFloat(b) - parseFloat(a))
      .map((v) => [v, cuenta[v]])
  }, [delTipo])

  const categorias = useMemo(
    () => [...new Set(delTipo.map((m) => m.categoria).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'es')),
    [delTipo]
  )

  const filtrados = useMemo(() => {
    const q = normalizar(busqueda.trim())
    return delTipo
      .filter((m) => version === 'todas' || m.version === version)
      .filter((m) => !categoria || m.categoria === categoria)
      .filter((m) => !precio || (precio === 'gratis' ? !(m.precio > 0) : m.precio > 0))
      .filter((m) => !q || normalizar(`${m.nombre} ${m.tecnico} ${m.resumen} ${m.categoria}`).includes(q))
      .sort(ORDENES[orden])
  }, [delTipo, version, categoria, precio, orden, busqueda])

  // Con "Todas" se muestra una sección por versión, de la más nueva a la más antigua
  const grupos = useMemo(() => {
    if (version !== 'todas') return [[version, filtrados]]
    return versiones.map(([v]) => [v, filtrados.filter((m) => m.version === v)]).filter(([, lista]) => lista.length)
  }, [version, versiones, filtrados])

  const tecnicos = new Set(delTipo.map((m) => m.tecnico)).size

  return (
    <Marco
      titulo={t.catalogoTitulo}
      descripcion={t.catalogoDescripcion}
    >
      <header className="ts-head">
        <div>
          <h1 className="tn-title">{c.catalogoH1}</h1>
          <p className="tn-lede">
            {c.publicados(tecnicos)}
            <a href={tipo === 'tema' ? ODOO_TEMAS_URL : ODOO_AUTOR_URL} target="_blank" rel="noopener noreferrer">
              Odoo Apps
            </a>
            {c.publicadosFin}
          </p>
        </div>
        <label className="ts-search">
          <Icon name="search" size={17} />
          <input
            type="search"
            placeholder={c.buscar}
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            aria-label={c.buscarLabel}
          />
        </label>
      </header>

      <nav className="ts-tabs" aria-label={t.tipoLabel}>
        {Object.keys(t.pestanas).map((clave) => (
          <button key={clave} type="button" className={tipo === clave ? 'on' : ''} onClick={() => elegirTipo(clave)}>
            {t.pestanas[clave]} <small>{modulos.filter((m) => m.tipo === clave).length}</small>
          </button>
        ))}
      </nav>

      <div className="ts-bar">
        <label>
          <span>{t.categoria}</span>
          <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
            <option value="">{t.todas}</option>
            {categorias.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
        <label>
          <span>{t.precio}</span>
          <select value={precio} onChange={(e) => setPrecio(e.target.value)}>
            <option value="">{t.todos}</option>
            <option value="pago">{t.dePago}</option>
            <option value="gratis">{t.gratis}</option>
          </select>
        </label>
        <label>
          <span>{t.version}</span>
          <select value={version} onChange={(e) => elegirVersion(e.target.value)}>
            <option value="todas">{t.todas}</option>
            {versiones.map(([v]) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </label>
        <label className="ts-sort">
          <span>{t.ordenarPor}</span>
          <select value={orden} onChange={(e) => setOrden(e.target.value)}>
            {Object.keys(ORDENES).map((clave) => (
              <option key={clave} value={clave}>
                {t.ordenes[clave]}
              </option>
            ))}
          </select>
        </label>
      </div>

      <nav className="ts-versions" aria-label={t.versionesLabel}>
        <button type="button" className={version === 'todas' ? 'on' : ''} onClick={() => elegirVersion('todas')}>
          {t.todas} <small>{delTipo.length}</small>
        </button>
        {versiones.map(([v, n]) => (
          <button key={v} type="button" className={version === v ? 'on' : ''} onClick={() => elegirVersion(v)}>
            {etiquetaVersion(v)} <small>{n}</small>
          </button>
        ))}
      </nav>

      {grupos.length === 0 && <p className="tn-empty">{c.sinModulos}</p>}

      {grupos.map(([v, lista]) => (
        <section key={v} className="ts-group">
          <h2>
            {etiquetaVersion(v)}
            <span>{c.modulos(lista.length)}</span>
          </h2>
          <div className="ts-grid">
            {lista.map((m) => (
              <Tarjeta key={m.clave} modulo={m} />
            ))}
          </div>
        </section>
      ))}

      <p className="ts-sync">
        {t.sincronizado}
        {new Date(actualizado).toLocaleString(t.locale, { dateStyle: 'long', timeStyle: 'short', timeZone: 'Europe/Madrid' })}
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

        .ts-tabs {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1.25rem;
          border-bottom: 1px solid var(--border);
        }
        .ts-tabs button {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          margin-bottom: -1px;
          padding: 0.6rem 0.1rem;
          border: 0;
          border-bottom: 2px solid transparent;
          background: transparent;
          color: var(--muted);
          font: inherit;
          font-variation-settings: 'wght' 600;
          cursor: pointer;
          transition: color 0.15s, border-color 0.15s;
        }
        .ts-tabs button:hover {
          color: var(--text-strong);
        }
        .ts-tabs button.on {
          border-bottom-color: var(--accent-2);
          color: var(--text-strong);
        }
        .ts-tabs small {
          opacity: 0.65;
          font-size: 0.75rem;
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
