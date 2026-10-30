import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import Icon from '../Icon'
import MatrixRain from './MatrixRain'
import CountUp from './CountUp'
import CarruselLibros from '../Libros/CarruselLibros'
import posts from '../../data/posts.json'
import { tr, useIdioma } from '../../lib/idioma'
import {
  recorrido,
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

const TEXTOS = {
  es: {
    ubicacion: 'Valencia, España',
    subtitulo: 'Desarrollador y Consultor de Software · Odoo, Flutter, Django',
    lede:
      'Desarrollador de Odoo, Flutter y React con más de 3000 módulos y más de 200 proyectos en Chile, Panamá, Argentina, España, Paraguay, México, Puerto Rico, República Dominicana y USA. Dirección de proyectos, desarrollo y gestión funcional.',
    contacto: 'Contáctame',
    contratar: 'Cómo contratarme',
    verCv: 'Ver CV',
    cv: '/cv',
    vivo: 'Vivo en Valencia, España',
    titulaciones: 'Titulaciones',
    titulos: ['Ingeniero Civil', 'Máster en Arquitectura', 'Consultor SAP ERP'],
    vivido: 'Dónde he vivido',
    vividoLede: 'Tres países que han marcado mi forma de trabajar.',
    hoy: 'Hoy',
    tecnologias: 'Habilidades y Tecnologías',
    tecnologiasLede: (
      <>
        Referente en la enseñanza de Odoo y SAP R3 con más de 28 mil seguidores en YouTube. Desarrollador principal de{' '}
        <strong>PyERP</strong>, un ERP libre en Django.
      </>
    ),
    verticales: 'Soluciones Verticales',
    verticalesLede: 'Productos sobre Odoo ERP para sectores concretos.',
    servicios: 'Servicios',
    serviciosLede: 'Todo el ciclo de vida de tu Odoo ERP.',
    proyectos: 'Proyectos',
    proyectosLede: 'Productos propios en desarrollo y producción.',
    certificaciones: 'Certificaciones',
    destacados: 'Artículos destacados',
    destacadosLede: 'Guías y lecturas recomendadas para empezar.',
    todos: 'Ver todos los artículos',
    serie: 'serie',
    coleccion: (total) => `Colección de ${total} artículos.`,
    meses: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
    api: '# API para generar contraseñas aleatorias',
    datos: 'Datos de contacto',
    datosLede:
      'Msc. Ing. Marlon Falcón Hernández · Valencia, España. ¿Tienes un proyecto en mente? Escríbeme y lo hablamos.',
    whatsapp: 'Escríbeme por WhatsApp',
    paginaContacto: 'Página de contacto'
  },
  en: {
    ubicacion: 'Valencia, Spain',
    subtitulo: 'Software Developer and Consultant · Odoo, Flutter, Django',
    lede:
      'Odoo, Flutter and React developer with more than 3,000 modules and over 200 projects in Chile, Panama, Argentina, Spain, Paraguay, Mexico, Puerto Rico, the Dominican Republic and the USA. Project management, development and functional consulting.',
    contacto: 'Contact me',
    contratar: 'How to hire me',
    verCv: 'View résumé',
    cv: '/cv/en',
    vivo: 'Living in Valencia, Spain',
    titulaciones: 'Degrees',
    titulos: ['Civil Engineer', 'Master’s in Architecture', 'SAP ERP Consultant'],
    vivido: 'Where I have lived',
    vividoLede: 'Three countries that shaped the way I work.',
    hoy: 'Today',
    tecnologias: 'Skills and Technologies',
    tecnologiasLede: (
      <>
        A reference in Odoo and SAP R3 teaching, with more than 28k YouTube followers. Lead developer of{' '}
        <strong>PyERP</strong>, a free ERP built with Django.
      </>
    ),
    verticales: 'Vertical Solutions',
    verticalesLede: 'Products built on Odoo ERP for specific industries.',
    servicios: 'Services',
    serviciosLede: 'The whole lifecycle of your Odoo ERP.',
    proyectos: 'Projects',
    proyectosLede: 'My own products, in development and in production.',
    certificaciones: 'Certifications',
    destacados: 'Featured articles',
    destacadosLede: 'Guides and recommended reads to get started (in Spanish).',
    todos: 'View all articles',
    serie: 'series',
    coleccion: (total) => `A collection of ${total} articles.`,
    meses: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
    api: '# API to generate random passwords',
    datos: 'Contact details',
    datosLede:
      'MSc. Eng. Marlon Falcón Hernández · Valencia, Spain. Have a project in mind? Write to me and let’s talk.',
    whatsapp: 'Message me on WhatsApp',
    paginaContacto: 'Contact page'
  }
}

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

const COLORES = ['var(--p-blue)', 'var(--p-lavender)', 'var(--p-pink)', 'var(--p-green)', 'var(--p-yellow)', 'var(--p-peach)']
const limpiar = (s = '') => s.replace(/^▷\s*/, '').trim()

// Completa cada artículo destacado con fecha, etiquetas y descripción del índice de posts.
// Los enlaces a /tags/... son series: muestran cuántos artículos tienen.
const destacadosEn = (t) => articulos.map((a, i) => {
  const color = COLORES[i % COLORES.length]
  const tag = a.href.startsWith('/tags/') && a.href.slice(6)
  if (tag) {
    const total = posts.filter((p) => p.tags.includes(tag)).length
    return { ...a, color, serie: total, etiquetas: [t.serie, tag], descripcion: t.coleccion(total) }
  }
  const post = posts.find((p) => `/posts/${p.slug}` === a.href)
  if (!post) return { ...a, color, etiquetas: [] }
  const titulo = limpiar(post.title)
  const descripcion = limpiar(post.description)
  const [y, m, d] = (post.date || '').split('-')
  return {
    ...a,
    color,
    titulo,
    descripcion: descripcion !== titulo ? descripcion : '',
    etiquetas: post.tags.slice(0, 3),
    fecha: post.date && { dia: Number(d), mes: t.meses[Number(m) - 1], anio: y }
  }
})

// Banderas en SVG: los emojis de bandera no se ven en Windows
const BANDERAS = {
  cu: (
    <svg viewBox="0 0 30 20" aria-hidden="true">
      <rect width="30" height="20" fill="#002a8f" />
      <path d="M0 4h30v4H0zM0 12h30v4H0z" fill="#fff" />
      <path d="M0 0l13 10L0 20z" fill="#cf142b" />
      <path d="m5.2 7.2.7 2.1h2.2l-1.8 1.3.7 2.1-1.8-1.3-1.8 1.3.7-2.1-1.8-1.3h2.2z" fill="#fff" />
    </svg>
  ),
  cl: (
    <svg viewBox="0 0 30 20" aria-hidden="true">
      <rect width="30" height="20" fill="#fff" />
      <rect y="10" width="30" height="10" fill="#d52b1e" />
      <rect width="10" height="10" fill="#0039a6" />
      <path d="m5 2.4.8 2.4h2.5l-2 1.5.8 2.4-2.1-1.5-2.1 1.5.8-2.4-2-1.5h2.5z" fill="#fff" />
    </svg>
  ),
  es: (
    <svg viewBox="0 0 30 20" aria-hidden="true">
      <rect width="30" height="20" fill="#aa151b" />
      <rect y="5" width="30" height="10" fill="#f1bf00" />
    </svg>
  )
}

const dominio = (url) => url.replace(/^https?:\/\//, '').replace(/\/$/, '')

export default function Home() {
  const [matrix, setMatrix] = useState(false)
  const { lang } = useIdioma()
  const t = TEXTOS[lang]
  const destacados = useMemo(() => destacadosEn(t), [t])

  return (
    <div className="home">
      {/* Hero */}
      <section className="band band-hero">
        <div className="inner hero">
          <div className="hero-text">
            <span className="eyebrow">
              <Icon name="pin" size={14} /> {t.ubicacion}
            </span>
            <h1 className="hero-title">Marlon Falcón Hernández</h1>
            <p className="hero-subtitle">{t.subtitulo}</p>
            <p className="hero-lede">{t.lede}</p>
            <div className="hero-actions">
              <A href={WHATSAPP} className="btn btn-primary">
                {t.contacto} <Icon name="arrow" size={16} />
              </A>
              <A href="/posts/como-contratar-servicios-marlon" className="btn btn-ghost">
                {t.contratar}
              </A>
              <A href={t.cv} className="btn btn-ghost">
                <Icon name="file" size={16} /> {t.verCv}
              </A>
            </div>
          </div>

          <div
            className="hero-photo"
            onMouseEnter={() => setMatrix(true)}
            onMouseLeave={() => setMatrix(false)}
            onClick={() => setMatrix(!matrix)}
          >
            <div className="hero-grid" aria-hidden="true" />
            <div className={`hero-frame${matrix ? ' matrix-on' : ''}`}>
              <img src="/images/marlon_yellow.png" alt="Marlon Falcón Hernández" width={600} height={600} />
              <MatrixRain activo={matrix} />
            </div>
            <div className="hero-badge">
              <img src="/images/tech/python.svg" alt="" width={22} height={22} />
              <span>Odoo · Python</span>
            </div>
            <div className="hero-paella">
              <span className="hero-paella-icon" aria-hidden="true">
                🥘
              </span>
              {t.vivo}
            </div>
            <ul className="hero-titles" aria-label={t.titulaciones}>
              {t.titulos.map((titulo, i) => (
                <li key={i} style={{ '--c': ['var(--p-yellow)', 'var(--p-pink)', 'var(--p-green)'][i % 3] }}>
                  <span className="hero-cap" aria-hidden="true">
                    <Icon name="cap" size={16} />
                  </span>
                  {titulo}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="inner">
          <div className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.icono}>
                <span className="stat-icon" style={{ '--c': s.color }}>
                  <Icon name={s.icono} size={22} />
                </span>
                <div>
                  <p className="stat-value">
                    <CountUp fin={s.numero} sufijo={s.sufijo} />
                  </p>
                  <p className="stat-label">{tr(s.label, lang)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Libros */}
      <section className="band band-alt">
        <CarruselLibros />
      </section>

      {/* Recorrido */}
      <section className="band">
        <div className="inner">
          <h2 className="section-title center">{t.vivido}</h2>
          <p className="section-lede center">{t.vividoLede}</p>
          <ol className="timeline">
            {recorrido.map((r) => (
              <li key={r.anio} className={`tl-item${r.actual ? ' actual' : ''}`}>
                <span className="tl-flag">{BANDERAS[r.bandera]}</span>
                <span className="tl-year">
                  {r.anio}
                  {r.actual && <em>{t.hoy}</em>}
                </span>
                <h3 className="tl-title">{tr(r.titulo, lang)}</h3>
                <p className="tl-text">{tr(r.texto, lang)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Tecnologías */}
      <section className="band band-alt">
        <div className="inner">
          <h2 className="section-title center">{t.tecnologias}</h2>
          <p className="section-lede center">{t.tecnologiasLede}</p>
          <div className="tech-row">
            {tecnologias.map((tec) => (
              <A key={tec.nombre} href={tec.href} className="tech" aria-describedby={`tip-${tec.nombre}`}>
                {tec.wordmark ? (
                  <span className="odoo-wordmark">odoo</span>
                ) : (
                  <img src={tec.logo} alt="" width={36} height={36} loading="lazy" />
                )}
                <span className="tech-name">{tec.nombre}</span>
                <span className="tech-tip" id={`tip-${tec.nombre}`} role="tooltip">
                  <strong>{tec.nombre}</strong>
                  {tr(tec.explicacion, lang)}
                </span>
              </A>
            ))}
          </div>
        </div>
      </section>

      {/* Verticales y servicios */}
      <section className="band">
        <div className="inner">
          <div className="section-head">
            <h2 className="section-title">{t.verticales}</h2>
            <p className="section-lede">{t.verticalesLede}</p>
          </div>
          <div className="grid grid-3">
            {verticales.map((v) => (
              <A key={v.nombre} href={v.web} className="card card-link">
                <span className="card-icon">
                  <Icon name={v.icono} />
                </span>
                <h3 className="card-title">{v.nombre}</h3>
                <p className="card-text">{tr(v.descripcion, lang)}</p>
                <span className="card-meta">
                  {dominio(v.web)} <Icon name="external" size={14} />
                </span>
              </A>
            ))}
          </div>

          <div className="section-head spaced">
            <h2 className="section-title">{t.servicios}</h2>
            <p className="section-lede">{t.serviciosLede}</p>
          </div>
          <div className="grid grid-5">
            {servicios.map((s) => (
              <A key={s.href} href={s.href} className="card card-link card-compact">
                <span className="card-icon">
                  <Icon name={s.icono} />
                </span>
                <h3 className="card-title">{tr(s.nombre, lang)}</h3>
                <p className="card-text">{tr(s.descripcion, lang)}</p>
              </A>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section className="band band-alt">
        <div className="inner">
          <div className="section-head">
            <h2 className="section-title">{t.proyectos}</h2>
            <p className="section-lede">{t.proyectosLede}</p>
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
                    <p className="card-text">{tr(p.descripcion, lang)}</p>
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
        <div className="inner">
          <h2 className="section-title">{t.certificaciones}</h2>
          {certificaciones.map((c) => (
            <A key={c.nombre} href={c.imagen} className="card card-link cert">
              <img src={c.imagen} alt={c.nombre} className="cert-img" loading="lazy" />
              <div>
                <span className="card-icon small">
                  <Icon name="award" size={18} />
                </span>
                <h3 className="card-title">{c.nombre}</h3>
                <p className="card-text">{tr(c.descripcion, lang)}</p>
                <span className="card-meta">{c.anio}</span>
              </div>
            </A>
          ))}

        </div>

        <div className="inner">
          <div className="section-head spaced feat-head">
            <div>
              <h2 className="section-title">{t.destacados}</h2>
              <p className="section-lede">{t.destacadosLede}</p>
            </div>
            <A href="/posts" className="btn btn-ghost">
              {t.todos} <Icon name="arrow" size={16} />
            </A>
          </div>
          <div className="feat-grid">
            {destacados.map((a) => (
              <A key={a.href} href={a.href} className="feat">
                <span className="feat-date" style={{ '--c': a.color }} aria-hidden={!a.fecha && !a.serie}>
                  {a.fecha ? (
                    <>
                      <span className="feat-month">{a.fecha.mes}</span>
                      <span className="feat-day">{a.fecha.dia}</span>
                      <span className="feat-year">{a.fecha.anio}</span>
                    </>
                  ) : a.serie ? (
                    <>
                      <span className="feat-month">{t.serie}</span>
                      <span className="feat-day">{a.serie}</span>
                      <span className="feat-year">posts</span>
                    </>
                  ) : (
                    <Icon name="book" size={22} />
                  )}
                </span>
                <span className="feat-body">
                  {a.etiquetas.length > 0 && (
                    <span className="feat-tags">
                      {a.etiquetas.map((t) => (
                        <span key={t}>#{t}</span>
                      ))}
                    </span>
                  )}
                  <span className="feat-title">{a.titulo}</span>
                  {a.descripcion && <span className="feat-desc">{a.descripcion}</span>}
                </span>
                <span className="feat-arrow" aria-hidden="true">
                  <Icon name="arrow" size={16} />
                </span>
              </A>
            ))}
          </div>
        </div>

        <div className="inner">
          <h2 className="section-title spaced">API</h2>
          <div className="terminal">
            <div className="terminal-bar" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <div className="terminal-body">
              <span>{t.api}</span>
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
            <img
              src="/images/ninja.jpeg"
              alt="Ninja de Marlon Falcón"
              className="contact-ninja"
              width={600}
              height={600}
              loading="lazy"
            />
            <h2 className="section-title">{t.datos}</h2>
            <p className="section-lede">{t.datosLede}</p>
            <div className="hero-actions">
              <A href={WHATSAPP} className="btn btn-primary">
                {t.whatsapp} <Icon name="arrow" size={16} />
              </A>
              <A href="/contacto" className="btn btn-ghost">
                {t.paginaContacto}
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
          margin-top: -2.5rem;
          padding-top: 3rem;
          background: radial-gradient(60% 80% at 85% 20%, var(--glow), transparent 70%),
            radial-gradient(40% 60% at 0% 100%, rgba(230, 184, 203, 0.3), transparent 70%);
        }
        html.dark .home .band-hero {
          background: radial-gradient(60% 80% at 85% 20%, var(--glow), transparent 70%),
            radial-gradient(40% 60% at 0% 100%, rgba(181, 174, 207, 0.12), transparent 70%);
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
          background-image: radial-gradient(rgba(181, 174, 207, 0.7) 1px, transparent 1px);
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
          box-shadow: 0 30px 80px -20px var(--glow), 0 0 0 8px var(--tint);
        }
        .home .hero-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          margin: 0;
          transform: rotate(4deg) scale(1.1);
          transition: filter 0.5s;
        }
        .home .hero-frame {
          transition: border-color 0.5s, box-shadow 0.5s;
        }
        .home .hero-frame.matrix-on {
          border-color: rgba(0, 255, 65, 0.45);
          box-shadow: 0 30px 80px -20px rgba(0, 255, 65, 0.45), 0 0 0 8px rgba(0, 255, 65, 0.08);
        }
        .home .hero-frame.matrix-on img {
          filter: grayscale(1) contrast(1.2) brightness(0.4) sepia(1) hue-rotate(70deg) saturate(2.5);
        }
        .home .matrix-rain {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          transform: rotate(4deg) scale(1.1);
          pointer-events: none;
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
          background: color-mix(in srgb, var(--surface-2) 88%, transparent);
          backdrop-filter: blur(8px);
          border: 1px solid var(--border);
          font-size: 0.85rem;
          color: var(--text-strong);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
        }
        .home .hero-badge img {
          margin: 0;
        }
        .home .hero-titles {
          position: absolute;
          top: 16%;
          right: -16%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.6rem;
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .home .hero-titles > li {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          margin: 0;
          padding: 0.45rem 0.85rem 0.45rem 0.45rem;
          border: 1px solid var(--border);
          border-radius: 999px;
          background: color-mix(in srgb, var(--surface-2) 90%, transparent);
          backdrop-filter: blur(8px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          color: var(--text-strong);
          font-size: 0.85rem;
          white-space: nowrap;
          font-variation-settings: 'wght' 600;
          animation: hero-title-in 0.6s both;
        }
        .home .hero-titles > li:nth-child(2) {
          margin-left: 1.25rem;
          animation-delay: 0.12s;
        }
        .home .hero-titles > li:nth-child(3) {
          animation-delay: 0.24s;
        }
        .home .hero-titles > li::before {
          content: none;
        }
        .home .hero-cap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 1.9rem;
          height: 1.9rem;
          border-radius: 50%;
          background: var(--c);
          color: #2a2622;
        }
        .home .hero-paella {
          position: absolute;
          right: -10%;
          bottom: 4%;
          display: flex;
          align-items: center;
          gap: 0.55rem;
          padding: 0.45rem 0.9rem 0.45rem 0.45rem;
          border: 1px solid var(--border);
          border-radius: 999px;
          background: color-mix(in srgb, var(--surface-2) 90%, transparent);
          backdrop-filter: blur(8px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          color: var(--text-strong);
          font-size: 0.85rem;
          white-space: nowrap;
          font-variation-settings: 'wght' 600;
          animation: hero-title-in 0.6s 0.36s both;
        }
        .home .hero-paella-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 1.9rem;
          height: 1.9rem;
          border-radius: 50%;
          background: var(--p-peach);
          font-size: 1.05rem;
          line-height: 1;
          transition: transform 0.4s;
        }
        .home .hero-paella:hover .hero-paella-icon {
          transform: rotate(-20deg) scale(1.15);
        }
        @keyframes hero-title-in {
          from {
            opacity: 0;
            transform: translateX(12px);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .home .hero-titles > li,
          .home .hero-paella {
            animation: none;
          }
        }

        .home .stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin: 4rem 0 0;
        }
        .home .stat {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.1rem 1.25rem;
          border: 1px solid var(--border);
          border-radius: 1rem;
          background: var(--surface);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .home .stat:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 40px -24px var(--glow);
        }
        .home .stat-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 3rem;
          height: 3rem;
          border-radius: 0.9rem;
          background: var(--c);
          color: #2a2622;
          transition: transform 0.3s;
        }
        .home .stat:hover .stat-icon {
          transform: rotate(-8deg) scale(1.08);
        }
        .home .stat-value {
          margin: 0;
          font-size: 1.8rem;
          line-height: 1.1;
          color: var(--text-strong);
          font-variation-settings: 'wght' 750;
          font-variant-numeric: tabular-nums;
        }
        .home .stat-label {
          margin: 0.2rem 0 0;
          font-size: 0.85rem;
          line-height: 1.3;
          color: var(--muted);
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
        .home .btn.btn-primary {
          background: var(--accent);
          color: var(--on-accent);
        }
        .home .btn.btn-primary:hover {
          background: var(--accent-hover);
          transform: translateY(-1px);
        }
        .home .btn.btn-ghost {
          border: 1px solid var(--border);
          color: var(--text);
          background: transparent;
        }
        .home .btn.btn-ghost:hover {
          border-color: var(--accent-2);
          color: var(--text-strong);
        }

        /* Recorrido */
        .home .timeline {
          position: relative;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin: 1rem 0 0;
          padding: 0;
          list-style: none;
        }
        /* Línea que une los países */
        .home .timeline::before {
          content: '';
          position: absolute;
          top: 1.9rem;
          left: 16.66%;
          right: 16.66%;
          height: 3px;
          border-radius: 3px;
          background: linear-gradient(90deg, var(--p-blue), var(--p-pink), var(--p-yellow));
        }
        .home .timeline > .tl-item {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0;
          padding: 0 0.5rem;
          text-align: center;
        }
        .home .timeline > .tl-item::before {
          content: none;
        }
        .home .tl-flag {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 3.8rem;
          height: 3.8rem;
          border-radius: 50%;
          background: var(--surface-2);
          border: 3px solid var(--border);
          box-shadow: 0 10px 30px -12px var(--glow);
          transition: transform 0.3s;
        }
        .home .tl-flag svg {
          width: 2.1rem;
          height: 1.4rem;
          border-radius: 3px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
        }
        .home .tl-item:hover .tl-flag {
          transform: translateY(-4px) rotate(-6deg);
        }
        .home .tl-item.actual .tl-flag {
          border-color: var(--p-yellow);
        }
        .home .tl-item.actual .tl-flag::after {
          content: '';
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          border: 2px solid var(--p-yellow);
          animation: tl-pulso 2.2s ease-out infinite;
        }
        @keyframes tl-pulso {
          from {
            opacity: 0.8;
            transform: scale(0.9);
          }
          to {
            opacity: 0;
            transform: scale(1.35);
          }
        }
        .home .tl-year {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          margin-top: 1rem;
          font-size: 1.6rem;
          line-height: 1;
          color: var(--text-strong);
          font-variation-settings: 'wght' 800;
          font-variant-numeric: tabular-nums;
          letter-spacing: -0.02em;
        }
        .home .tl-year em {
          padding: 0.15rem 0.5rem;
          border-radius: 999px;
          background: var(--p-yellow);
          color: #2a2622;
          font-size: 0.7rem;
          font-style: normal;
          letter-spacing: 0.02em;
          font-variation-settings: 'wght' 650;
        }
        .home .tl-title {
          margin: 0.5rem 0 0.25rem;
          font-size: 1.05rem;
          color: var(--text-strong);
        }
        .home .tl-text {
          margin: 0;
          max-width: 30ch;
          font-size: 0.9rem;
          line-height: 1.5;
          color: var(--muted);
        }
        @media (max-width: 700px) {
          .home .timeline {
            grid-template-columns: 1fr;
            gap: 1.75rem;
            padding-left: 0.5rem;
          }
          .home .timeline::before {
            top: 1.9rem;
            bottom: 1.9rem;
            left: 2.35rem;
            right: auto;
            width: 3px;
            height: auto;
            background: linear-gradient(180deg, var(--p-blue), var(--p-pink), var(--p-yellow));
          }
          .home .timeline > .tl-item {
            display: grid;
            grid-template-columns: 3.8rem 1fr;
            column-gap: 1rem;
            align-items: start;
            text-align: left;
          }
          .home .tl-flag {
            grid-row: span 3;
          }
          .home .tl-year {
            margin-top: 0.2rem;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .home .tl-item.actual .tl-flag::after {
            animation: none;
          }
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
        .home .tech {
          position: relative;
        }
        .home .tech-tip {
          position: absolute;
          bottom: calc(100% + 12px);
          left: 50%;
          z-index: 5;
          width: 230px;
          padding: 0.75rem 0.9rem;
          border: 1px solid var(--border);
          border-radius: 0.8rem;
          background: var(--surface-2);
          box-shadow: 0 18px 40px -16px rgba(0, 0, 0, 0.35);
          color: var(--text);
          font-size: 0.82rem;
          line-height: 1.45;
          text-align: left;
          pointer-events: none;
          opacity: 0;
          transform: translate(var(--tx, -50%), 6px);
          transition: opacity 0.18s, transform 0.18s;
        }
        .home .tech-tip strong {
          display: block;
          margin-bottom: 0.2rem;
          color: var(--text-strong);
        }
        .home .tech-tip::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          width: 10px;
          height: 10px;
          margin-top: -5px;
          border-right: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          background: var(--surface-2);
          transform: translateX(-50%) rotate(45deg);
        }
        .home .tech:hover .tech-tip,
        .home .tech:focus-visible .tech-tip {
          opacity: 1;
          transform: translate(var(--tx, -50%), 0);
        }
        /* En los extremos de la fila, el tooltip se alinea al borde para no salirse de la pantalla */
        .home .tech:first-child .tech-tip {
          --tx: 0;
          left: 0;
        }
        .home .tech:first-child .tech-tip::after {
          left: 2.2rem;
        }
        .home .tech:last-child .tech-tip {
          --tx: 0;
          left: auto;
          right: 0;
        }
        .home .tech:last-child .tech-tip::after {
          left: auto;
          right: 1.4rem;
        }
        @media (max-width: 960px) {
          .home .tech:nth-child(4n + 1) .tech-tip {
            --tx: 0;
            left: 0;
          }
          .home .tech:nth-child(4n + 1) .tech-tip::after {
            left: 2.2rem;
          }
          .home .tech:nth-child(4n) .tech-tip {
            --tx: 0;
            left: auto;
            right: 0;
          }
          .home .tech:nth-child(4n) .tech-tip::after {
            left: auto;
            right: 1.4rem;
          }
          .home .tech-tip {
            width: 200px;
          }
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
          border-color: var(--tint-border);
          transform: translateY(-2px);
          box-shadow: 0 16px 40px -20px var(--glow);
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
          background: var(--tint);
          border: 1px solid var(--tint-border);
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
          color: rgba(42, 38, 34, 0.82);
          font-variation-settings: 'wght' 800;
        }
        .home .cover-0 {
          background: linear-gradient(135deg, var(--p-blue), var(--p-lavender));
        }
        .home .cover-1 {
          background: linear-gradient(135deg, var(--p-pink), var(--p-peach));
        }
        .home .cover-2 {
          background: linear-gradient(135deg, var(--p-yellow), var(--p-beige));
        }
        .home .cover-3 {
          background: linear-gradient(135deg, var(--p-green), var(--p-blue));
        }
        .home .cover-4 {
          background: linear-gradient(135deg, var(--p-lavender), var(--p-pink));
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

        /* Artículos destacados */
        .home .feat-head {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }
        .home .feat-head .section-lede {
          margin-bottom: 0;
        }
        .home .feat-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        .home .feat {
          display: flex;
          align-items: center;
          gap: 1.1rem;
          padding: 1rem 1.2rem 1rem 1rem;
          border: 1px solid var(--border);
          border-radius: 1rem;
          background: var(--surface);
          color: var(--text);
          text-decoration: none;
          transition: border-color 0.15s, transform 0.15s, box-shadow 0.15s;
        }
        .home .feat:hover {
          border-color: var(--tint-border);
          transform: translateY(-2px);
          box-shadow: 0 16px 40px -24px var(--glow);
        }
        .home .feat-date {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 4.25rem;
          height: 4.6rem;
          border-radius: 0.8rem;
          background: var(--c);
          color: #2a2622;
          line-height: 1;
          box-shadow: inset 0 -3px 0 rgba(0, 0, 0, 0.06);
        }
        .home .feat-month {
          font-size: 0.68rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-variation-settings: 'wght' 650;
          opacity: 0.75;
        }
        .home .feat-day {
          margin: 0.2rem 0 0.15rem;
          font-size: 1.55rem;
          letter-spacing: -0.02em;
          font-variation-settings: 'wght' 800;
          font-variant-numeric: tabular-nums;
        }
        .home .feat-year {
          font-size: 0.68rem;
          opacity: 0.7;
          font-variant-numeric: tabular-nums;
        }
        .home .feat-body {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          flex: 1;
          min-width: 0;
        }
        .home .feat-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          font-size: 0.72rem;
          color: var(--muted);
        }
        .home .feat-title {
          font-size: 1rem;
          line-height: 1.35;
          color: var(--text-strong);
          font-variation-settings: 'wght' 650;
        }
        .home .feat-desc {
          font-size: 0.85rem;
          line-height: 1.45;
          color: var(--muted);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .home .feat-arrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          border: 1px solid var(--border);
          color: var(--muted);
          transition: color 0.15s, border-color 0.15s, transform 0.15s;
        }
        .home .feat:hover .feat-arrow {
          color: var(--accent-2);
          border-color: var(--tint-border);
          transform: translateX(3px);
        }
        @media (max-width: 760px) {
          .home .feat-grid {
            grid-template-columns: 1fr;
          }
          .home .feat-arrow {
            display: none;
          }
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
          background: #161920;
          border-bottom: 1px solid #262b36;
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
          color: #8b95a7;
          font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
          font-size: 0.88rem;
          overflow-x: auto;
        }
        .home .terminal-cmd {
          color: #f3f4f6;
          text-decoration: none;
          white-space: nowrap;
        }
        .home .terminal-cmd:hover {
          color: var(--p-blue);
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
        .home .contact-ninja {
          display: block;
          width: 180px;
          height: auto;
          margin-bottom: 1.5rem;
          border: 1px solid var(--border);
          border-radius: 1.2rem;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
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
          border-color: var(--tint-border);
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
        @media (max-width: 1180px) {
          .home .hero-titles {
            right: -6%;
          }
          .home .hero-paella {
            right: -4%;
          }
        }
        @media (max-width: 820px) {
          .home .hero-titles {
            top: auto;
            bottom: 20%;
            right: -0.5rem;
            gap: 0.4rem;
          }
          .home .hero-titles > li {
            font-size: 0.75rem;
            padding: 0.3rem 0.7rem 0.3rem 0.3rem;
          }
          .home .hero-titles > li:nth-child(2) {
            margin-left: 0;
          }
          /* En móvil las titulaciones van en fila bajo la foto y la paella arriba a la derecha */
          .home .hero-photo {
            margin-bottom: 4.5rem;
          }
          .home .hero-titles {
            top: calc(100% + 0.9rem);
            bottom: auto;
            left: 50%;
            right: auto;
            width: max-content;
            max-width: calc(100vw - 2.5rem);
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            transform: translateX(-50%);
          }
          .home .hero-paella {
            top: 3%;
            bottom: auto;
            right: -0.5rem;
            font-size: 0.75rem;
            padding: 0.3rem 0.7rem 0.3rem 0.3rem;
          }
          .home .hero-paella-icon {
            width: 1.5rem;
            height: 1.5rem;
            font-size: 0.85rem;
          }
          .home .hero-cap {
            width: 1.5rem;
            height: 1.5rem;
          }
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
