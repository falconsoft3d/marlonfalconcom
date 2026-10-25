import React, { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Icon from '../Icon'
import posts from '../../data/posts.json'

const POR_PAGINA = 12

// Cada categoría agrupa varias etiquetas del frontmatter
const CATEGORIAS = [
  { id: 'odoo', nombre: 'Odoo', match: (t) => t.startsWith('odoo') || ['owl', 'rpc', 'desarrolloodoo'].includes(t) },
  { id: 'erp', nombre: 'ERP', match: (t) => t === 'erp' },
  {
    id: 'construccion',
    nombre: 'Construcción y BIM',
    match: (t) => ['bim', 'bim20', 'construccion', 'revit'].includes(t)
  },
  { id: 'python', nombre: 'Python y Django', match: (t) => ['python', 'django'].includes(t) },
  {
    id: 'javascript',
    nombre: 'JavaScript',
    match: (t) => ['javascript', 'react', 'nodejs', 'nextjs', 'bootstrap'].includes(t)
  },
  { id: 'flutter', nombre: 'Flutter y Dart', match: (t) => ['flutter', 'dart'].includes(t) },
  {
    id: 'devops',
    nombre: 'DevOps y Linux',
    match: (t) => ['docker', 'linux', 'ssh', 'kubernetes', 'postgresql'].includes(t)
  },
  { id: 'credito', nombre: 'Créditos', match: (t) => t.startsWith('credi') },
  {
    id: 'programacion',
    nombre: 'Programación',
    match: (t) => ['20pasos', 'programacion', 'api', 'tools', 'csharp', 'crud'].includes(t)
  },
  { id: 'metodologia', nombre: 'Metodología', match: (t) => ['metodologia', 'experto'].includes(t) }
]

const normalizar = (s) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')

const categoriasDe = (post) => {
  const ids = CATEGORIAS.filter((c) => post.tags.some(c.match)).map((c) => c.id)
  return ids.length ? ids : ['otros']
}

const INDEXADOS = posts.map((p) => ({
  ...p,
  categorias: categoriasDe(p),
  texto: normalizar([p.title, p.description, p.tags.join(' ')].join(' '))
}))

const CONTEO = INDEXADOS.reduce((acc, p) => {
  p.categorias.forEach((c) => (acc[c] = (acc[c] || 0) + 1))
  return acc
}, {})

const LISTA_CATEGORIAS = [
  { id: 'todas', nombre: 'Todas', total: INDEXADOS.length },
  ...CATEGORIAS.map((c) => ({ id: c.id, nombre: c.nombre, total: CONTEO[c.id] || 0 })).filter((c) => c.total),
  ...(CONTEO.otros ? [{ id: 'otros', nombre: 'Otros', total: CONTEO.otros }] : [])
]

const MESES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']
const formatoFecha = (iso) => {
  if (!iso) return ''
  const [y, m, d] = iso.split('-')
  return `${Number(d)} ${MESES[Number(m) - 1]} ${y}`
}

// Números de página con "…" cuando hay muchas
const paginas = (actual, total) => {
  const set = new Set([1, total, actual - 1, actual, actual + 1].filter((n) => n >= 1 && n <= total))
  const nums = [...set].sort((a, b) => a - b)
  const out = []
  nums.forEach((n, i) => {
    if (i && n - nums[i - 1] > 1) out.push('…' + n)
    out.push(n)
  })
  return out
}

export default function PostsExplorer() {
  const router = useRouter()
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('todas')
  const [tag, setTag] = useState('')
  const [page, setPage] = useState(1)

  // Estado inicial desde la URL (?q=&cat=&tag=&page=)
  useEffect(() => {
    if (!router.isReady) return
    const { q = '', cat = 'todas', tag = '', page = '1' } = router.query
    setQ(String(q))
    setCat(LISTA_CATEGORIAS.some((c) => c.id === cat) ? String(cat) : 'todas')
    setTag(String(tag))
    setPage(Math.max(1, parseInt(page, 10) || 1))
  }, [router.isReady])

  const sincronizar = (next) => {
    const estado = { q, cat, tag, page, ...next }
    const query = {}
    if (estado.q) query.q = estado.q
    if (estado.cat !== 'todas') query.cat = estado.cat
    if (estado.tag) query.tag = estado.tag
    if (estado.page > 1) query.page = estado.page
    router.replace({ pathname: router.pathname, query }, undefined, { shallow: true, scroll: false })
  }

  const actualizar = (next) => {
    if ('q' in next) setQ(next.q)
    if ('cat' in next) setCat(next.cat)
    if ('tag' in next) setTag(next.tag)
    setPage(next.page || 1)
    sincronizar({ page: 1, ...next })
  }

  const filtrados = useMemo(() => {
    const terminos = normalizar(q).split(/\s+/).filter(Boolean)
    return INDEXADOS.filter(
      (p) =>
        (cat === 'todas' || p.categorias.includes(cat)) &&
        (!tag || p.tags.includes(tag)) &&
        terminos.every((t) => p.texto.includes(t))
    )
  }, [q, cat, tag])

  const totalPaginas = Math.max(1, Math.ceil(filtrados.length / POR_PAGINA))
  const actual = Math.min(page, totalPaginas)
  const visibles = filtrados.slice((actual - 1) * POR_PAGINA, actual * POR_PAGINA)

  const irA = (n) => {
    setPage(n)
    sincronizar({ page: n })
    document.getElementById('posts-top')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="px" id="posts-top">
      <header className="px-head">
        <h2 className="px-title">Artículos</h2>
        <p className="px-lede">
          {INDEXADOS.length} artículos sobre Odoo, ERP, construcción, programación y más.
        </p>
        <label className="px-search">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input
            type="search"
            placeholder="Buscar artículos…"
            value={q}
            onChange={(e) => actualizar({ q: e.target.value })}
            aria-label="Buscar artículos"
          />
          {q && (
            <button type="button" className="px-clear" onClick={() => actualizar({ q: '' })} aria-label="Borrar búsqueda">
              ×
            </button>
          )}
        </label>
      </header>

      <div className="px-layout">
        <nav className="px-cats" aria-label="Categorías">
          <span className="px-cats-title">Categorías</span>
          {LISTA_CATEGORIAS.map((c) => (
            <button
              key={c.id}
              type="button"
              className={`px-cat${cat === c.id ? ' active' : ''}`}
              onClick={() => actualizar({ cat: c.id, tag: '' })}
              aria-pressed={cat === c.id}
            >
              <span>{c.nombre}</span>
              <span className="px-count">{c.total}</span>
            </button>
          ))}
        </nav>

        <div className="px-main">
          <div className="px-status">
            <span>
              {filtrados.length} {filtrados.length === 1 ? 'resultado' : 'resultados'}
              {totalPaginas > 1 && ` · página ${actual} de ${totalPaginas}`}
            </span>
            {tag && (
              <button type="button" className="px-active-tag" onClick={() => actualizar({ tag: '' })}>
                #{tag} <span aria-hidden="true">×</span>
              </button>
            )}
          </div>

          {visibles.length ? (
            <ul className="px-list">
              {visibles.map((p) => (
                <li key={p.slug} className="px-item">
                  <Link href={`/posts/${p.slug}`}>
                    <a className="px-link">
                      <span className="px-date">{formatoFecha(p.date)}</span>
                      <span className="px-item-title">{p.title}</span>
                      {p.description && p.description !== p.title && (
                        <span className="px-desc">{p.description}</span>
                      )}
                    </a>
                  </Link>
                  {p.tags.length > 0 && (
                    <div className="px-tags">
                      {p.tags.slice(0, 5).map((t) => (
                        <button
                          key={t}
                          type="button"
                          className={`px-tag${tag === t ? ' active' : ''}`}
                          onClick={() => actualizar({ tag: t })}
                        >
                          #{t}
                        </button>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-empty">
              <p>No hay artículos que coincidan con tu búsqueda.</p>
              <button type="button" className="px-btn" onClick={() => actualizar({ q: '', cat: 'todas', tag: '' })}>
                Ver todos los artículos
              </button>
            </div>
          )}

          {totalPaginas > 1 && (
            <nav className="px-pages" aria-label="Paginación">
              <button type="button" className="px-page" disabled={actual === 1} onClick={() => irA(actual - 1)}>
                ← Anterior
              </button>
              <div className="px-page-nums">
                {paginas(actual, totalPaginas).map((n) =>
                  typeof n === 'string' ? (
                    <span key={n} className="px-gap">
                      …
                    </span>
                  ) : (
                    <button
                      key={n}
                      type="button"
                      className={`px-page num${n === actual ? ' active' : ''}`}
                      onClick={() => irA(n)}
                      aria-current={n === actual ? 'page' : undefined}
                    >
                      {n}
                    </button>
                  )
                )}
              </div>
              <button
                type="button"
                className="px-page"
                disabled={actual === totalPaginas}
                onClick={() => irA(actual + 1)}
              >
                Siguiente <Icon name="arrow" size={14} />
              </button>
            </nav>
          )}
        </div>
      </div>

      <style jsx global>{`
        /* Sustituye el título y la lista por defecto del tema */
        article > h1:first-child,
        article > ul {
          display: none;
        }

        .px {
          position: relative;
          left: 50%;
          width: min(1120px, calc(100vw - 2rem));
          transform: translateX(-50%);
          scroll-margin-top: 1.5rem;
          color: var(--text);
        }

        .px .px-head {
          padding: 1rem 0 2rem;
        }
        .px .px-title {
          margin: 0 0 0.4rem;
          font-size: clamp(2rem, 4vw, 2.75rem);
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: var(--text-strong);
        }
        .px .px-lede {
          margin: 0 0 1.5rem;
          color: var(--muted);
        }
        .px .px-search {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          max-width: 560px;
          padding: 0 1rem;
          border: 1px solid var(--border);
          border-radius: 999px;
          background: var(--surface);
          color: var(--muted);
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .px .px-search:focus-within {
          border-color: var(--accent-2);
          box-shadow: 0 0 0 4px var(--tint);
        }
        .px .px-search input {
          flex: 1;
          min-width: 0;
          padding: 0.8rem 0;
          border: 0;
          outline: 0;
          background: transparent;
          color: var(--text-strong);
          font: inherit;
        }
        .px .px-search input::-webkit-search-cancel-button {
          display: none;
        }
        .px .px-clear {
          border: 0;
          background: transparent;
          color: var(--muted);
          font-size: 1.3rem;
          line-height: 1;
          cursor: pointer;
        }

        .px .px-layout {
          display: grid;
          grid-template-columns: 230px 1fr;
          gap: 2.5rem;
          align-items: start;
        }

        .px .px-cats {
          position: sticky;
          top: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        .px .px-cats-title {
          margin: 0 0 0.6rem 0.75rem;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--muted);
          font-variation-settings: 'wght' 650;
        }
        .px .px-cat {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          padding: 0.55rem 0.75rem;
          border: 1px solid transparent;
          border-radius: 0.6rem;
          background: transparent;
          color: var(--text);
          font: inherit;
          font-size: 0.92rem;
          text-align: left;
          cursor: pointer;
          transition: background-color 0.15s, color 0.15s;
        }
        .px .px-cat:hover {
          background: var(--surface);
          color: var(--text-strong);
        }
        .px .px-cat.active {
          background: var(--tint);
          border-color: var(--tint-border);
          color: var(--text-strong);
        }
        .px .px-count {
          font-size: 0.75rem;
          color: var(--muted);
          font-variant-numeric: tabular-nums;
        }
        .px .px-cat.active .px-count {
          color: var(--accent-2);
        }

        .px .px-status {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          min-height: 2rem;
          margin-bottom: 0.75rem;
          font-size: 0.85rem;
          color: var(--muted);
        }
        .px .px-active-tag {
          padding: 0.25rem 0.7rem;
          border: 1px solid var(--tint-border);
          border-radius: 999px;
          background: var(--tint);
          color: var(--accent-2);
          font: inherit;
          font-size: 0.8rem;
          cursor: pointer;
        }

        .px .px-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .px .px-list > .px-item {
          display: flex;
          flex-direction: column;
          margin: 0;
          padding: 0;
          border: 1px solid var(--border);
          border-radius: 1rem;
          background: var(--surface);
          transition: border-color 0.15s, transform 0.15s;
        }
        .px .px-list > .px-item::before {
          content: none;
        }
        .px .px-list > .px-item:hover {
          border-color: var(--tint-border);
          transform: translateY(-2px);
        }
        .px .px-link {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          flex: 1;
          padding: 1.2rem 1.3rem 0.8rem;
          color: var(--text);
          text-decoration: none;
        }
        .px .px-date {
          font-size: 0.78rem;
          color: var(--muted);
        }
        .px .px-item-title {
          font-size: 1.02rem;
          line-height: 1.35;
          color: var(--text-strong);
          font-variation-settings: 'wght' 650;
        }
        .px .px-desc {
          font-size: 0.88rem;
          line-height: 1.5;
          color: var(--muted);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .px .px-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
          padding: 0 1.3rem 1.1rem;
        }
        .px .px-tag {
          padding: 0.15rem 0.5rem;
          border: 1px solid var(--border);
          border-radius: 999px;
          background: var(--surface-2);
          color: var(--muted);
          font: inherit;
          font-size: 0.75rem;
          cursor: pointer;
          transition: color 0.15s, border-color 0.15s;
        }
        .px .px-tag:hover,
        .px .px-tag.active {
          color: var(--accent-2);
          border-color: var(--tint-border);
        }

        .px .px-empty {
          padding: 3rem 1.5rem;
          border: 1px dashed var(--border);
          border-radius: 1rem;
          text-align: center;
          color: var(--muted);
        }
        .px .px-empty p {
          margin: 0 0 1rem;
        }
        .px .px-btn {
          padding: 0.6rem 1.1rem;
          border: 0;
          border-radius: 999px;
          background: var(--accent);
          color: var(--on-accent);
          font: inherit;
          font-size: 0.9rem;
          cursor: pointer;
        }

        .px .px-pages {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          margin-top: 2rem;
        }
        .px .px-page-nums {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }
        .px .px-page {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
          min-width: 2.4rem;
          height: 2.4rem;
          padding: 0 0.9rem;
          border: 1px solid var(--border);
          border-radius: 999px;
          background: var(--surface);
          color: var(--text);
          font: inherit;
          font-size: 0.88rem;
          cursor: pointer;
          transition: border-color 0.15s, color 0.15s, background-color 0.15s;
        }
        .px .px-page.num {
          padding: 0;
          font-variant-numeric: tabular-nums;
        }
        .px .px-page:hover:not(:disabled) {
          border-color: var(--accent-2);
          color: var(--text-strong);
        }
        .px .px-page.active {
          background: var(--accent);
          border-color: var(--accent);
          color: var(--on-accent);
        }
        .px .px-page:disabled {
          opacity: 0.4;
          cursor: default;
        }
        .px .px-gap {
          padding: 0 0.2rem;
          color: var(--muted);
        }

        @media (max-width: 860px) {
          .px .px-layout {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          .px .px-cats {
            position: static;
            flex-direction: row;
            overflow-x: auto;
            gap: 0.4rem;
            padding-bottom: 0.25rem;
            scrollbar-width: none;
          }
          .px .px-cats-title {
            display: none;
          }
          .px .px-cat {
            flex-shrink: 0;
            border-color: var(--border);
            border-radius: 999px;
            white-space: nowrap;
          }
          .px .px-list {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 520px) {
          .px .px-page:not(.num) {
            font-size: 0;
            padding: 0;
            width: 2.4rem;
          }
          .px .px-page:not(.num)::after {
            font-size: 1rem;
          }
          .px .px-pages > .px-page:first-child::after {
            content: '←';
          }
          .px .px-pages > .px-page:last-child::after {
            content: '→';
          }
          .px .px-pages > .px-page:last-child svg {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}
