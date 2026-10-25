import React from 'react'
import Link from 'next/link'
import Icon from '../Icon'
import {
  stats,
  tecnologias,
  verticales,
  servicios,
  proyectos,
  certificaciones,
  articulos,
  contactos
} from './data'

const WHATSAPP = 'https://wa.me/34662470645'

function A({ href, className, children, ...rest }) {
  if (href.startsWith('/')) {
    return (
      <Link href={href}>
        <a className={className} {...rest}>
          {children}
        </a>
      </Link>
    )
  }
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  )
}

const dominio = (url) => url.replace(/^https?:\/\//, '').replace(/\/$/, '')

export default function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="band band-hero">
        <div className="inner hero">
          <div className="hero-text">
            <span className="eyebrow">
              <Icon name="pin" size={14} /> Valencia, España
            </span>
            <h1 className="hero-title">Marlon Falcón Hernández</h1>
            <p className="hero-subtitle">Desarrollador y Consultor de Software · Odoo, Flutter, Django</p>
            <p className="hero-lede">
              Desarrollador de Odoo, Flutter y React con más de 3000 módulos y más de 200 proyectos en Chile, Panamá,
              Argentina, España, Paraguay, México, Puerto Rico, República Dominicana y USA. Dirección de proyectos,
              desarrollo y gestión funcional.
            </p>
            <div className="hero-actions">
              <A href={WHATSAPP} className="btn btn-primary">
                Contáctame <Icon name="arrow" size={16} />
              </A>
              <A href="/posts/como-contratar-servicios-marlon" className="btn btn-ghost">
                Cómo contratarme
              </A>
              <A href="/resume_marlon_falcon.pdf" className="btn btn-ghost">
                <Icon name="file" size={16} /> Ver CV
              </A>
            </div>
          </div>

          <div className="hero-photo">
            <div className="hero-grid" aria-hidden="true" />
            <div className="hero-frame">
              <img src="/images/marlon_yellow.png" alt="Marlon Falcón Hernández" width={600} height={600} />
            </div>
            <div className="hero-badge">
              <img src="/images/tech/python.svg" alt="" width={22} height={22} />
              <span>Odoo · Python</span>
            </div>
          </div>
        </div>

        <div className="inner">
          <dl className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Tecnologías */}
      <section className="band band-alt">
        <div className="inner">
          <h2 className="section-title center">Habilidades y Tecnologías</h2>
          <p className="section-lede center">
            Referente en la enseñanza de Odoo y SAP R3 con más de 28 mil seguidores en YouTube. Desarrollador principal
            de <strong>PyERP</strong>, un ERP libre en Django.
          </p>
          <div className="tech-row">
            {tecnologias.map((t) => (
              <A key={t.nombre} href={t.href} className="tech" title={t.nombre}>
                {t.wordmark ? (
                  <span className="odoo-wordmark">odoo</span>
                ) : (
                  <img src={t.logo} alt="" width={36} height={36} loading="lazy" />
                )}
                <span className="tech-name">{t.nombre}</span>
              </A>
            ))}
          </div>
        </div>
      </section>

      {/* Verticales y servicios */}
      <section className="band">
        <div className="inner">
          <div className="section-head">
            <h2 className="section-title">Soluciones Verticales</h2>
            <p className="section-lede">Productos sobre Odoo ERP para sectores concretos.</p>
          </div>
          <div className="grid grid-3">
            {verticales.map((v) => (
              <A key={v.nombre} href={v.web} className="card card-link">
                <span className="card-icon">
                  <Icon name={v.icono} />
                </span>
                <h3 className="card-title">{v.nombre}</h3>
                <p className="card-text">{v.descripcion}</p>
                <span className="card-meta">
                  {dominio(v.web)} <Icon name="external" size={14} />
                </span>
              </A>
            ))}
          </div>

          <div className="section-head spaced">
            <h2 className="section-title">Servicios</h2>
            <p className="section-lede">Todo el ciclo de vida de tu Odoo ERP.</p>
          </div>
          <div className="grid grid-5">
            {servicios.map((s) => (
              <A key={s.nombre} href={s.href} className="card card-link card-compact">
                <span className="card-icon">
                  <Icon name={s.icono} />
                </span>
                <h3 className="card-title">{s.nombre}</h3>
                <p className="card-text">{s.descripcion}</p>
              </A>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section className="band band-alt">
        <div className="inner">
          <div className="section-head">
            <h2 className="section-title">Proyectos</h2>
            <p className="section-lede">Productos propios en desarrollo y producción.</p>
          </div>
          <div className="grid grid-3">
            {proyectos.map((p, i) => {
              const content = (
                <>
                  <div className={`project-cover cover-${i % 5}`} aria-hidden="true">
                    <span>{p.nombre.slice(0, 2)}</span>
                  </div>
                  <div className="project-body">
                    <h3 className="card-title">{p.nombre}</h3>
                    <p className="card-text">{p.descripcion}</p>
                    {p.web && (
                      <span className="card-meta">
                        {dominio(p.web)} <Icon name="external" size={14} />
                      </span>
                    )}
                  </div>
                </>
              )
              return p.web ? (
                <A key={p.nombre} href={p.web} className="card card-link project">
                  {content}
                </A>
              ) : (
                <div key={p.nombre} className="card project">
                  {content}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Certificaciones, artículos y API */}
      <section className="band">
        <div className="inner narrow">
          <h2 className="section-title">Certificaciones</h2>
          {certificaciones.map((c) => (
            <A key={c.nombre} href={c.imagen} className="card card-link cert">
              <img src={c.imagen} alt={c.nombre} className="cert-img" loading="lazy" />
              <div>
                <span className="card-icon small">
                  <Icon name="award" size={18} />
                </span>
                <h3 className="card-title">{c.nombre}</h3>
                <p className="card-text">{c.descripcion}</p>
                <span className="card-meta">{c.anio}</span>
              </div>
            </A>
          ))}

          <h2 className="section-title spaced">Artículos destacados</h2>
          <ul className="articles">
            {articulos.map((a) => (
              <li key={a.href}>
                <A href={a.href} className="article">
                  <span>{a.titulo}</span>
                  <Icon name="arrow" size={16} />
                </A>
              </li>
            ))}
          </ul>
          <A href="/posts" className="btn btn-ghost more">
            Ver todos los artículos <Icon name="arrow" size={16} />
          </A>

          <h2 className="section-title spaced">API</h2>
          <div className="terminal">
            <div className="terminal-bar" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <div className="terminal-body">
              <span className="muted"># API para generar contraseñas aleatorias</span>
              <A href="/api/password/21" className="terminal-cmd">
                <span className="prompt">$</span> curl marlonfalcon.com/api/password/21
              </A>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="band band-alt" id="contacto">
        <div className="inner contact">
          <div className="contact-text">
            <h2 className="section-title">Datos de contacto</h2>
            <p className="section-lede">
              Msc. Ing. Marlon Falcón Hernández · Valencia, España. ¿Tienes un proyecto en mente? Escríbeme y lo
              hablamos.
            </p>
            <div className="hero-actions">
              <A href={WHATSAPP} className="btn btn-primary">
                Escríbeme por WhatsApp <Icon name="arrow" size={16} />
              </A>
              <A href="/contacto" className="btn btn-ghost">
                Página de contacto
              </A>
            </div>
          </div>
          <div className="contact-grid">
            {contactos.map((c) => (
              <A key={c.nombre} href={c.href} className="contact-tile">
                <Icon name={c.icono} size={22} />
                <span className="contact-name">{c.nombre}</span>
                <span className="contact-value">{c.valor}</span>
              </A>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        /* El título por defecto del tema se sustituye por el hero */
        article > h1:first-child {
          display: none;
        }

        .home {
          color: var(--text);
        }
        .home .band {
          position: relative;
          left: 50%;
          width: 100vw;
          margin-left: -50vw;
          padding: 5rem 0;
        }
        .home .band-alt {
          background: var(--surface);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .home .band-hero {
          margin-top: -2rem;
          padding-top: 3rem;
          background: radial-gradient(60% 80% at 85% 20%, rgba(59, 130, 246, 0.16), transparent 70%),
            radial-gradient(40% 60% at 0% 100%, rgba(59, 130, 246, 0.08), transparent 70%);
        }
        .home .inner {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 1.25rem;
        }
        .home .inner.narrow {
          max-width: 860px;
        }

        /* Tipografía */
        .home .section-title {
          margin: 0 0 0.5rem;
          font-size: 1.75rem;
          line-height: 1.2;
          color: var(--text-strong);
        }
        .home .section-title.spaced,
        .home .section-head.spaced {
          margin-top: 4rem;
        }
        .home .section-lede {
          margin: 0 0 2rem;
          color: var(--muted);
          max-width: 60ch;
        }
        .home .center {
          text-align: center;
          margin-left: auto;
          margin-right: auto;
        }
        .home .muted {
          color: var(--muted);
        }

        /* Hero */
        .home .hero {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        .home .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.3rem 0.75rem;
          border: 1px solid var(--border);
          border-radius: 999px;
          font-size: 0.8rem;
          color: var(--muted);
          background: var(--surface);
        }
        .home .hero-title {
          margin: 1.25rem 0 0.75rem;
          font-size: clamp(2.4rem, 5.5vw, 3.75rem);
          line-height: 1.05;
          letter-spacing: -0.04em;
          color: var(--text-strong);
        }
        .home .hero-subtitle {
          margin: 0 0 1.25rem;
          font-size: 1.2rem;
          color: var(--accent-2);
          font-variation-settings: 'wght' 600;
        }
        .home .hero-lede {
          margin: 0 0 2rem;
          color: var(--muted);
          max-width: 56ch;
        }
        .home .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .home .hero-photo {
          position: relative;
          aspect-ratio: 1;
          max-width: 420px;
          width: 100%;
          justify-self: center;
        }
        .home .hero-grid {
          position: absolute;
          inset: -8%;
          background-image: radial-gradient(rgba(96, 165, 250, 0.35) 1px, transparent 1px);
          background-size: 14px 14px;
          mask-image: radial-gradient(closest-side, #000 40%, transparent);
          -webkit-mask-image: radial-gradient(closest-side, #000 40%, transparent);
        }
        .home .hero-frame {
          position: absolute;
          inset: 8%;
          border-radius: 2rem;
          overflow: hidden;
          transform: rotate(-4deg);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 30px 80px -20px rgba(59, 130, 246, 0.45), 0 0 0 8px rgba(59, 130, 246, 0.08);
        }
        .home .hero-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          margin: 0;
          transform: rotate(4deg) scale(1.1);
        }
        .home .hero-badge {
          position: absolute;
          left: 0;
          bottom: 10%;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 0.9rem;
          border-radius: 0.9rem;
          background: rgba(23, 26, 33, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid var(--border);
          font-size: 0.85rem;
          color: var(--text-strong);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }
        .home .hero-badge img {
          margin: 0;
        }

        .home .stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin: 4rem 0 0;
        }
        .home .stat {
          display: flex;
          flex-direction: column-reverse;
          padding: 1.1rem 1.25rem;
          border: 1px solid var(--border);
          border-radius: 1rem;
          background: var(--surface);
        }
        .home .stat dd {
          margin: 0;
          font-size: 1.8rem;
          line-height: 1.1;
          color: var(--text-strong);
          font-variation-settings: 'wght' 750;
          font-variant-numeric: tabular-nums;
        }
        .home .stat dt {
          margin: 0.25rem 0 0;
          font-size: 0.85rem;
          color: var(--muted);
          font-variation-settings: 'wght' 450;
        }

        /* Botones */
        .home .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.7rem 1.2rem;
          border-radius: 999px;
          font-size: 0.95rem;
          text-decoration: none;
          font-variation-settings: 'wght' 600;
          transition: background-color 0.15s, border-color 0.15s, transform 0.15s;
        }
        .home .btn-primary {
          background: var(--accent);
          color: #fff;
        }
        .home .btn-primary:hover {
          background: var(--accent-hover);
          transform: translateY(-1px);
        }
        .home .btn-ghost {
          border: 1px solid var(--border);
          color: var(--text);
          background: transparent;
        }
        .home .btn-ghost:hover {
          border-color: var(--accent-2);
          color: var(--text-strong);
        }
        .home .btn.more {
          margin-top: 1.25rem;
        }

        /* Tecnologías */
        .home .tech-row {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          gap: 0.75rem;
        }
        .home .tech {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.6rem;
          padding: 1.1rem 0.5rem;
          border-radius: 1rem;
          border: 1px solid transparent;
          text-decoration: none;
          transition: border-color 0.15s, background-color 0.15s;
        }
        .home .tech:hover {
          border-color: var(--border);
          background: var(--bg);
        }
        .home .tech img {
          margin: 0;
          height: 36px;
          width: 36px;
        }
        .home .odoo-wordmark {
          height: 36px;
          display: flex;
          align-items: center;
          font-size: 1.6rem;
          letter-spacing: -0.02em;
          color: #a77c9c;
          font-variation-settings: 'wght' 700;
        }
        .home .tech-name {
          font-size: 0.85rem;
          color: var(--muted);
        }

        /* Tarjetas */
        .home .grid {
          display: grid;
          gap: 1rem;
        }
        .home .grid-3 {
          grid-template-columns: repeat(3, 1fr);
        }
        .home .grid-5 {
          grid-template-columns: repeat(5, 1fr);
        }
        .home .card {
          display: flex;
          flex-direction: column;
          padding: 1.4rem;
          border: 1px solid var(--border);
          border-radius: 1rem;
          background: var(--surface);
          color: var(--text);
          text-decoration: none;
          transition: border-color 0.15s, transform 0.15s, box-shadow 0.15s;
        }
        .home .band-alt .card {
          background: var(--surface-2);
        }
        .home .card-link:hover {
          border-color: rgba(96, 165, 250, 0.6);
          transform: translateY(-2px);
          box-shadow: 0 16px 40px -20px rgba(59, 130, 246, 0.5);
        }
        .home .card-compact {
          padding: 1.2rem;
        }
        .home .card-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          margin-bottom: 1rem;
          border-radius: 0.75rem;
          color: var(--accent-2);
          background: rgba(59, 130, 246, 0.12);
          border: 1px solid rgba(59, 130, 246, 0.25);
        }
        .home .card-icon.small {
          width: 2rem;
          height: 2rem;
          margin-bottom: 0.75rem;
        }
        .home .card-title {
          margin: 0 0 0.35rem;
          font-size: 1.05rem;
          line-height: 1.3;
          color: var(--text-strong);
        }
        .home .card-text {
          margin: 0;
          font-size: 0.92rem;
          line-height: 1.5;
          color: var(--muted);
        }
        .home .card-meta {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          margin-top: auto;
          padding-top: 1rem;
          font-size: 0.85rem;
          color: var(--accent-2);
        }

        /* Proyectos */
        .home .project {
          padding: 0;
          overflow: hidden;
        }
        .home .project-cover {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 120px;
          border-bottom: 1px solid var(--border);
        }
        .home .project-cover span {
          font-size: 2.4rem;
          letter-spacing: -0.04em;
          color: rgba(255, 255, 255, 0.92);
          font-variation-settings: 'wght' 800;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }
        .home .cover-0 {
          background: linear-gradient(135deg, #1e3a8a, #3b82f6);
        }
        .home .cover-1 {
          background: linear-gradient(135deg, #312e81, #6366f1);
        }
        .home .cover-2 {
          background: linear-gradient(135deg, #0c4a6e, #0ea5e9);
        }
        .home .cover-3 {
          background: linear-gradient(135deg, #4c1d95, #8b5cf6);
        }
        .home .cover-4 {
          background: linear-gradient(135deg, #134e4a, #14b8a6);
        }
        .home .project-body {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 1.2rem 1.4rem 1.4rem;
        }

        /* Certificaciones */
        .home .cert {
          flex-direction: row;
          align-items: center;
          gap: 1.5rem;
        }
        .home .cert-img {
          width: 180px;
          height: auto;
          margin: 0;
          border-radius: 0.6rem;
          border: 1px solid var(--border);
        }

        /* Artículos */
        .home .articles {
          margin: 1.25rem 0 0;
          padding: 0;
          list-style: none;
          border-top: 1px solid var(--border);
        }
        .home .articles > li {
          margin: 0;
          padding: 0;
          border-bottom: 1px solid var(--border);
        }
        .home .articles > li::before {
          content: none;
        }
        .home .article {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.95rem 0.25rem;
          color: var(--text);
          text-decoration: none;
          font-variation-settings: 'wght' 550;
          transition: color 0.15s, padding 0.15s;
        }
        .home .article svg {
          color: var(--muted);
          transition: transform 0.15s, color 0.15s;
        }
        .home .article:hover {
          color: var(--text-strong);
          padding-left: 0.6rem;
        }
        .home .article:hover svg {
          color: var(--accent-2);
          transform: translateX(3px);
        }

        /* API */
        .home .terminal {
          margin-top: 1.25rem;
          border: 1px solid var(--border);
          border-radius: 0.9rem;
          overflow: hidden;
          background: #0b0d11;
        }
        .home .terminal-bar {
          display: flex;
          gap: 0.4rem;
          padding: 0.7rem 0.9rem;
          background: var(--surface);
          border-bottom: 1px solid var(--border);
        }
        .home .terminal-bar i {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #ef4444;
        }
        .home .terminal-bar i:nth-child(2) {
          background: #f59e0b;
        }
        .home .terminal-bar i:nth-child(3) {
          background: #22c55e;
        }
        .home .terminal-body {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          padding: 1rem 1.1rem;
          font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
          font-size: 0.88rem;
          overflow-x: auto;
        }
        .home .terminal-cmd {
          color: var(--text-strong);
          text-decoration: none;
          white-space: nowrap;
        }
        .home .terminal-cmd:hover {
          color: var(--accent-2);
        }
        .home .prompt {
          color: #22c55e;
          margin-right: 0.4rem;
        }

        /* Contacto */
        .home .contact {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 3rem;
          align-items: center;
        }
        .home .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 0.75rem;
        }
        .home .contact-tile {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          padding: 1rem;
          border: 1px solid var(--border);
          border-radius: 0.9rem;
          background: var(--surface-2);
          color: var(--accent-2);
          text-decoration: none;
          min-width: 0;
          transition: border-color 0.15s, transform 0.15s;
        }
        .home .contact-tile:hover {
          border-color: rgba(96, 165, 250, 0.6);
          transform: translateY(-2px);
        }
        .home .contact-name {
          margin-top: 0.5rem;
          color: var(--text-strong);
          font-size: 0.95rem;
          font-variation-settings: 'wght' 650;
        }
        .home .contact-value {
          font-size: 0.8rem;
          color: var(--muted);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        /* Responsive */
        @media (max-width: 960px) {
          .home .grid-5 {
            grid-template-columns: repeat(3, 1fr);
          }
          .home .tech-row {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        @media (max-width: 820px) {
          .home .band {
            padding: 3.5rem 0;
          }
          .home .hero,
          .home .contact {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .home .hero-photo {
            max-width: 320px;
            grid-row: 1;
          }
          .home .grid-3 {
            grid-template-columns: repeat(2, 1fr);
          }
          .home .stats {
            grid-template-columns: repeat(2, 1fr);
            margin-top: 2.5rem;
          }
        }
        @media (max-width: 560px) {
          .home .grid-3,
          .home .grid-5 {
            grid-template-columns: 1fr;
          }
          .home .cert {
            flex-direction: column;
            align-items: flex-start;
          }
          .home .cert-img {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}
