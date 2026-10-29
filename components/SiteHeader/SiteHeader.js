import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Icon from '../Icon'
import useCarrito from '../Tienda/useCarrito'

const LINKS = [
  ['/', 'Inicio'],
  ['/posts', 'Artículos'],
  ['/webs', 'Webs'],
  ['/odoo-espana', 'Odoo'],
  ['/odoo-programa-gestion-construccion', 'Bim 2.0'],
  ['/tienda', 'Tienda'],
  ['/cursos', 'Cursos'],
  ['/libros', 'Libros'],
  ['/contacto', 'Contacto']
]

const WHATSAPP = 'https://wa.me/34662470645'

// Guarda el tema en la misma clave que usa next-themes (tema de Nextra)
function useTema() {
  const [tema, setTema] = useState(null)

  useEffect(() => {
    setTema(document.documentElement.classList.contains('dark') ? 'dark' : 'light')
  }, [])

  const alternar = () => {
    const siguiente = tema === 'dark' ? 'light' : 'dark'
    const html = document.documentElement
    html.classList.toggle('dark', siguiente === 'dark')
    html.style.colorScheme = siguiente
    try {
      localStorage.setItem('theme', siguiente)
    } catch (e) {}
    setTema(siguiente)
  }

  return [tema, alternar]
}

export default function SiteHeader() {
  const router = useRouter()
  const [tema, alternarTema] = useTema()
  const [abierto, setAbierto] = useState(false)
  const { lineas } = useCarrito()

  useEffect(() => {
    const cerrar = () => setAbierto(false)
    router.events.on('routeChangeStart', cerrar)
    return () => router.events.off('routeChangeStart', cerrar)
  }, [router.events])

  const activo = (href) =>
    href === '/' ? router.pathname === '/' : router.asPath === href || router.asPath.startsWith(href + '/') || router.asPath.startsWith(href + '?')

  const etiquetaTema = tema === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'

  return (
    <header className={`site-header${abierto ? ' open' : ''}`}>
      <div className="sh-inner">
        <Link href="/">
          <a className="sh-brand" aria-label="Marlon Falcón Hernández, inicio">
            <img className="sh-logo" src="/images/avatar.png" alt="" width={38} height={38} />
            <span className="sh-name">
              <strong>Marlon Falcón</strong>
              <small>Odoo · Full Stack · IA</small>
            </span>
          </a>
        </Link>

        <nav className="sh-nav" aria-label="Principal">
          {LINKS.map(([href, label]) => (
            <Link key={href} href={href}>
              <a className={`sh-link${activo(href) ? ' active' : ''}`} aria-current={activo(href) ? 'page' : undefined}>
                {label}
              </a>
            </Link>
          ))}
        </nav>

        <div className="sh-actions">
          <button type="button" className="sh-icon" onClick={alternarTema} aria-label={etiquetaTema} title={etiquetaTema}>
            {/* Antes de montar no sabemos el tema: el icono se oculta para evitar parpadeos */}
            <span style={{ visibility: tema ? 'visible' : 'hidden', display: 'inline-flex' }}>
              <Icon name={tema === 'dark' ? 'sun' : 'moon'} size={18} />
            </span>
          </button>
          {lineas.length > 0 && (
            <Link href="/tienda/carrito">
              <a className="sh-icon sh-cart" aria-label={`Carrito: ${lineas.length} módulos`} title="Carrito">
                <Icon name="cart" size={18} />
                <b>{lineas.length}</b>
              </a>
            </Link>
          )}
          <Link href="/cv">
            <a className="sh-btn sh-ghost">CV</a>
          </Link>
          <a className="sh-btn sh-primary" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
            Contáctame
          </a>
          <button
            type="button"
            className="sh-icon sh-burger"
            onClick={() => setAbierto(!abierto)}
            aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={abierto}
          >
            <Icon name={abierto ? 'close' : 'menu'} size={20} />
          </button>
        </div>
      </div>

      <style jsx global>{`
        /* La navegación por defecto del tema se sustituye por este header */
        .nav-line {
          display: none !important;
        }

        .site-header {
          position: sticky;
          top: 0;
          z-index: 50;
          margin: 0 -1rem;
          background: color-mix(in srgb, var(--bg) 82%, transparent);
          backdrop-filter: saturate(160%) blur(12px);
          -webkit-backdrop-filter: saturate(160%) blur(12px);
          border-bottom: 1px solid var(--border);
        }
        .sh-inner {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          max-width: 1180px;
          height: 64px;
          margin: 0 auto;
          padding: 0 1.25rem;
        }

        .sh-brand {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          flex-shrink: 0;
          text-decoration: none;
        }
        .sh-logo {
          width: 38px;
          height: 38px;
          margin: 0;
          border-radius: 50%;
          box-shadow: 0 0 0 2px var(--bg), 0 0 0 4px var(--p-blue), 0 6px 18px -6px var(--glow);
          transition: transform 0.3s;
        }
        .sh-brand:focus:not(:focus-visible) {
          outline: none;
        }
        .sh-brand:hover .sh-logo {
          transform: rotate(-8deg) scale(1.06);
        }
        .sh-name {
          display: flex;
          flex-direction: column;
          line-height: 1.15;
        }
        .sh-name strong {
          font-size: 0.95rem;
          color: var(--text-strong);
        }
        .sh-name small {
          font-size: 0.72rem;
          color: var(--muted);
        }

        .sh-nav {
          display: flex;
          align-items: center;
          gap: 0.15rem;
          margin: 0 auto;
        }
        .sh-link {
          padding: 0.45rem 0.75rem;
          border-radius: 999px;
          font-size: 0.9rem;
          color: var(--muted);
          text-decoration: none;
          transition: color 0.15s, background-color 0.15s;
        }
        .sh-link:hover {
          color: var(--text-strong);
          background: var(--surface);
        }
        .sh-link.active {
          color: var(--text-strong);
          background: var(--surface);
          font-variation-settings: 'wght' 600;
        }

        .sh-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-shrink: 0;
        }
        .sh-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border: 1px solid var(--border);
          border-radius: 999px;
          background: transparent;
          color: var(--text);
          cursor: pointer;
          transition: color 0.15s, border-color 0.15s;
        }
        .sh-icon:hover {
          color: var(--text-strong);
          border-color: var(--accent-2);
        }
        .sh-cart {
          position: relative;
        }
        .sh-cart b {
          position: absolute;
          top: -5px;
          right: -5px;
          min-width: 18px;
          height: 18px;
          padding: 0 4px;
          border-radius: 999px;
          background: var(--accent-2);
          color: #fff;
          font-size: 0.65rem;
          line-height: 18px;
          text-align: center;
        }
        .sh-btn {
          display: inline-flex;
          align-items: center;
          height: 38px;
          padding: 0 1rem;
          border-radius: 999px;
          font-size: 0.88rem;
          text-decoration: none;
          font-variation-settings: 'wght' 600;
          transition: background-color 0.15s, border-color 0.15s;
        }
        .sh-ghost {
          border: 1px solid var(--border);
          color: var(--text);
        }
        .sh-ghost:hover {
          border-color: var(--accent-2);
          color: var(--text-strong);
        }
        .sh-primary {
          background: var(--accent);
          color: var(--on-accent);
        }
        .sh-primary:hover {
          background: var(--accent-hover);
        }
        .sh-burger {
          display: none;
        }

        @media (max-width: 1020px) {
          .sh-nav {
            display: none;
          }
          .sh-actions {
            margin-left: auto;
          }
          .sh-burger {
            display: inline-flex;
          }
          .site-header.open .sh-nav {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            position: absolute;
            top: 64px;
            left: 0;
            right: 0;
            margin: 0;
            padding: 0.75rem 1.25rem 1.25rem;
            background: var(--bg);
            border-bottom: 1px solid var(--border);
            box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.4);
          }
          .site-header.open .sh-link {
            padding: 0.75rem 0.9rem;
            border-radius: 0.6rem;
            font-size: 1rem;
          }
        }
        @media (max-width: 560px) {
          .sh-name small,
          .sh-ghost {
            display: none;
          }
          .sh-inner {
            gap: 0.75rem;
          }
          .sh-primary {
            padding: 0 0.85rem;
          }
        }
        @media (max-width: 400px) {
          .sh-name {
            display: none;
          }
        }
      `}</style>
    </header>
  )
}
