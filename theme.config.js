import Link from "next/link"

const YEAR = new Date().getFullYear()

export default {
  footer: (
    <>
    
    <small style={{ display: 'block', marginTop: '8rem' }}>

    <hr/>

    <div className="menu-footer"> 
      <ul className="myul">
        <li><Link href="/odoo-espana"><a>Odoo España</a></Link></li>
        <li><Link href="/posts/bim20"><a>Odoo bim20</a></Link></li>
        <li><Link href="/posts/odoo-construccion"><a>Odoo Construcción</a></Link></li>
        <li><Link href="/contacto"><a>Contacto</a></Link></li>
      </ul>
      <ul className="myul">
        <li><Link href="/posts/odoo-migraciones"><a>Odoo Migraciones</a></Link></li>
        <li><Link href="/posts/odoo-16"><a>Odoo 16</a></Link></li>
        <li><Link href="/posts/odoo-sis20"><a>Odoo Sis20</a></Link></li>
        <li><Link href="/posts/odoo-clinica"><a>Odoo Clinica</a></Link></li>
      </ul>
      <ul className="myul">
        <li><Link href="/posts/instalar-odoo-16"><a>Instalar Odoo 16</a></Link></li>
        <li><Link href="/posts/consultor-odoo"><a>Consultor Odoo</a></Link></li>
        <li><Link href="/posts/desarrollo-odoo"><a>Desarrollo Odoo</a></Link></li>
        <li><Link href="/posts/soporte-odoo"><a>Soporte Odoo</a></Link></li>
      </ul>
      <ul className="myul">
        <li><Link href="/posts/servicios-odoo"><a>Servicios Odoo</a></Link></li>
        <li><Link href="/posts/auditoria-odoo"><a>Auditoria Odoo</a></Link></li>
        <li><Link href="/posts/odoo-como-implementar"><a>Implementar Odoo</a></Link></li>
        <li><Link href="/posts/ventajas-odoo"><a>Ventajas Odoo</a></Link></li>
      </ul>
    </div>

    <hr/>

      <time>{YEAR}</time> mfalconsoft@gmail.com / +34 (662) 47 0645
      
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }

        .menu-footer {
          padding-bottom: 4rem;
        }

        .myul {
          display: flex;
          justify-content: space-between;
          padding: 0;
          list-style-type: none !important;
        }

        .myul > li {
          margin: 0;
          decoration: none;
          
        }

        .myul > li > a {
          text-decoration: none;
        }

        ul > li > a:hover {
          text-decoration: underline;
        }

      `}</style>
    </small>
    </>
  )
}
