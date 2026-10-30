import Link from 'next/link'
import ButtonCall from '../WhatsappLink/ButtonCall'
import MisWebs from '../MisWebs'
import Icon from '../Icon'
import { tr, useIdioma } from '../../lib/idioma'

const YEAR = new Date().getFullYear()

const MENU = [
  {
    titulo: 'Odoo',
    links: [
      ['/odoo-espana', { es: 'Odoo España', en: 'Odoo Spain' }],
      ['/posts/odoo-erp', 'Odoo ERP'],
      ['/posts/odoo-16', 'Odoo 16'],
      ['/posts/instalar-odoo-16', { es: 'Instalar Odoo 16', en: 'Install Odoo 16' }],
      ['/posts/ventajas-odoo', { es: 'Ventajas Odoo', en: 'Odoo advantages' }]
    ]
  },
  {
    titulo: { es: 'Verticales', en: 'Verticals' },
    links: [
      ['/posts/bim20', 'Odoo bim20'],
      ['/posts/odoo-construccion', { es: 'Odoo Construcción', en: 'Odoo Construction' }],
      ['/posts/odoo-sis20', 'Odoo Sis20'],
      ['/posts/odoo-clinica', { es: 'Odoo Clínica', en: 'Odoo Clinic' }],
      ['/posts/erp-open-source', 'ERP open source']
    ]
  },
  {
    titulo: { es: 'Servicios', en: 'Services' },
    links: [
      ['/posts/servicios-odoo', { es: 'Servicios Odoo', en: 'Odoo services' }],
      ['/posts/consultor-odoo', { es: 'Consultor Odoo', en: 'Odoo consultant' }],
      ['/posts/desarrollo-odoo', { es: 'Desarrollo Odoo', en: 'Odoo development' }],
      ['/posts/soporte-odoo', { es: 'Soporte Odoo', en: 'Odoo support' }],
      ['/posts/odoo-migraciones', { es: 'Odoo Migraciones', en: 'Odoo migrations' }],
      ['/posts/auditoria-odoo', { es: 'Auditoría Odoo', en: 'Odoo audit' }],
      ['/posts/odoo-como-implementar', { es: 'Implementar Odoo', en: 'Implement Odoo' }]
    ]
  },
  {
    titulo: { es: 'Sitio', en: 'Site' },
    links: [
      ['/', { es: 'Inicio', en: 'Home' }],
      ['/posts', 'Blog'],
      ['/tienda', { es: 'Tienda Odoo', en: 'Odoo store' }],
      ['/categorias', { es: 'Categorías', en: 'Categories' }],
      ['/cursos', { es: 'Cursos', en: 'Courses' }],
      ['/libros', { es: 'Libros', en: 'Books' }],
      ['/imagenes', { es: 'Imágenes', en: 'Images' }],
      ['/webs', { es: 'Mis webs', en: 'My websites' }],
      [{ es: '/cv', en: '/cv/en' }, { es: 'Currículum', en: 'Résumé' }],
      ['/contacto', { es: 'Contacto', en: 'Contact' }]
    ]
  }
]

const SOCIAL = [
  ['https://github.com/falconsoft3d', 'github', 'GitHub'],
  ['https://www.youtube.com/@marlonfalconhdez', 'youtube', 'YouTube'],
  ['https://www.linkedin.com/in/marlon-falc%C3%B3n-3a2aa9a4/', 'linkedin', 'LinkedIn'],
  ['https://t.me/falconsoft', 'telegram', 'Telegram'],
  ['/feed.xml', 'rss', 'RSS']
]

const TEXTOS = {
  es: {
    lema: 'Desarrollador y consultor de Odoo ERP, Flutter y Django desde Valencia, España.',
    enlaces: 'Enlaces del sitio'
  },
  en: {
    lema: 'Odoo ERP, Flutter and Django developer and consultant based in Valencia, Spain.',
    enlaces: 'Site links'
  }
}

export default function SiteFooter() {
  const { lang } = useIdioma()
  const t = TEXTOS[lang]

  return (
    <footer className="site-footer">
      <div className="inner">
        <div className="footer-top">
          <div className="footer-brand">
            <strong>Marlon Falcón Hernández</strong>
            <p>{t.lema}</p>
            <ButtonCall />
          </div>

          <nav className="menu-footer" aria-label={t.enlaces}>
            {MENU.map((col) => (
              <div key={tr(col.titulo, 'es')}>
                <h4>{tr(col.titulo, lang)}</h4>
                <ul className="myul">
                  {col.links.map(([href, label]) => (
                    <li key={tr(href, 'es')}><Link href={tr(href, lang)}><a>{tr(label, lang)}</a></Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <MisWebs />

        <div className="footer-bottom">
          <span>
            © <time>{YEAR}</time> Marlon Falcón Hernández · mfalconsoft@gmail.com · +34 (662) 47 0645
          </span>
          <div className="social">
            {SOCIAL.map(([href, icon, label]) => (
              <a key={icon} href={href} aria-label={label} title={label}>
                <Icon name={icon} size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .site-footer {
          position: relative;
          left: 50%;
          width: 100vw;
          margin-left: -50vw;
          margin-top: 6rem;
          padding: 4rem 0 2rem;
          background: var(--surface);
          border-top: 1px solid var(--border);
          font-size: 0.9rem;
          color: var(--muted);
        }

        .inner {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 1.25rem;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1fr 2.4fr;
          gap: 3rem;
          padding-bottom: 3rem;
        }

        .footer-brand strong {
          display: block;
          color: var(--text-strong);
          font-size: 1.05rem;
        }

        .footer-brand p {
          margin: 0.5rem 0 1.5rem;
          line-height: 1.5;
        }

        .footer-brand :global(.container-button) {
          justify-content: flex-start;
        }

        .menu-footer {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .menu-footer h4 {
          margin: 0 0 0.9rem;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--text-strong);
        }

        .myul {
          margin: 0;
          padding: 0;
          list-style-type: none !important;
        }

        .myul > li {
          margin: 0 0 0.55rem;
          padding: 0;
        }

        .myul > li::before {
          content: none;
        }

        .myul > li > a {
          color: var(--muted);
          text-decoration: none;
          transition: color 0.15s;
        }

        .myul > li > a:hover {
          color: var(--text-strong);
        }

        .footer-bottom {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border);
          font-size: 0.8rem;
        }

        .social {
          display: flex;
          gap: 0.5rem;
        }

        .social a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.25rem;
          height: 2.25rem;
          border-radius: 50%;
          border: 1px solid var(--border);
          color: var(--muted);
          transition: color 0.15s, border-color 0.15s;
        }

        .social a:hover {
          color: var(--accent-2);
          border-color: var(--accent-2);
        }

        @media screen and (max-width: 820px) {
          .footer-top {
            grid-template-columns: 1fr;
          }
          .menu-footer {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </footer>
  )
}
