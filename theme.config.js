import Link from "next/link"

const YEAR = new Date().getFullYear()

export default {
  footer: (
    <>
    
    <small style={{ display: 'block', marginTop: '8rem' }}>

    <div className="menu-footer"> 
      <ul className="myul">
        <li><Link href="/odoo-espana"><a>Odoo España</a></Link></li>
        <li><Link href="/posts/bim20"><a>Odoo bim20</a></Link></li>
        <li><Link href="/posts/odoo-construccion"><a>Odoo Construcción</a></Link></li>
        <li><Link href="/contacto"><a>Contacto</a></Link></li>
      </ul>
      <ul className="myul">
        <li><Link href="/odoo-valencia"><a>Odoo Valencia</a></Link></li>
        <li><Link href="/posts/odoo-16"><a>Odoo 16</a></Link></li>
        <li><Link href="/posts/odoo-sis20"><a>Odoo Sis20</a></Link></li>
        <li><Link href="/posts/odoo-clinica"><a>Odoo Clinica</a></Link></li>
      </ul>
    </div> 

      <time>{YEAR}</time> @Marlon / mfalconsoft@gmail.com / +34 (662) 47 0645
      
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
          list-style: none;
          display: flex;
          justify-content: space-between;
          padding: 0;
          decoration: none;
          
        }

        .myul > li {
          margin: 0;
          decoration: none;
          list-style-type: none;
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
