import React from 'react'
import Icon from '../Icon'
import estilos from '../Contratar/estilos'
import {
  WHATSAPP,
  EMAIL,
  CONTRATAR,
  REVISADO,
  indice,
  calendario,
  modulos,
  planes,
  impuestos,
  modelos,
  verifactu,
  sii,
  ticketbai,
  bancos,
  ediciones,
  pasos,
  preguntas
} from './data'

const Ext = ({ href, className, children }) => (
  <a href={href} className={className} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
)

const whatsapp = (texto) => `https://wa.me/34662470645?text=${encodeURIComponent(texto)}`

// Llamada a implantar con nosotros al final de cada bloque, con el mensaje de WhatsApp ya escrito
function Llamada({ titulo, texto, mensaje }) {
  return (
    <div className="es-cta">
      <div>
        <strong>{titulo}</strong>
        <p>{texto}</p>
      </div>
      <Ext href={whatsapp(mensaje)} className="h-btn h-primary">
        <Icon name="whatsapp" size={17} /> Implántalo con nosotros
      </Ext>
    </div>
  )
}

const Checks = ({ items }) => (
  <ul className="h-checks">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
)

const Tarjetas = ({ items, columnas = 3 }) => (
  <div className={`es-cards c${columnas}`}>
    {items.map((item) => (
      <div className="es-mini" key={item.titulo}>
        <h3>{item.titulo}</h3>
        <p>{item.texto}</p>
      </div>
    ))}
  </div>
)

export default function OdooEspana() {
  return (
    <div className="hire es">
      {/* Portada */}
      <section className="hb hb-hero">
        <div className="hi hire-hero">
          <div>
            <span className="h-eyebrow">
              <Icon name="pin" size={14} /> Implantación de Odoo ERP en toda España
            </span>
            <h2 className="h-title">Odoo para empresas de España, listo para Hacienda</h2>
            <p className="h-lede">
              Implantamos Odoo con la localización española completa: plan contable, IVA, modelos de la AEAT,
              Verifactu, SII, TicketBAI y factura electrónica. Tú vendes; nosotros dejamos el ERP cumpliendo la
              normativa desde el primer día.
            </p>
            <div className="h-actions">
              <Ext href={WHATSAPP} className="h-btn h-primary">
                <Icon name="whatsapp" size={18} /> Quiero implantar Odoo
              </Ext>
              <a href={EMAIL} className="h-btn h-ghost">
                <Icon name="mail" size={18} /> Escríbenos un email
              </a>
            </div>
            <a href={CONTRATAR} className="h-pdf">
              <Icon name="file" size={15} /> Cómo trabajamos y tarifas, desde 50 €/hora
            </a>
          </div>
          <div className="hire-card es-cal">
            <p className="es-cal-t">
              <Icon name="calendar" size={16} /> Calendario que te afecta
            </p>
            <ol>
              {calendario.map((c) => (
                <li key={c.fecha + c.texto}>
                  <span>{c.fecha}</span>
                  <div>
                    <strong>{c.titulo}</strong>
                    <small>{c.texto}</small>
                  </div>
                </li>
              ))}
            </ol>
            <Ext href={whatsapp('Hola Marlon, quiero preparar mi empresa para Verifactu con Odoo.')} className="h-btn h-primary es-full">
              Prepárate antes del plazo
            </Ext>
          </div>
        </div>
        <nav className="hi es-toc" aria-label="Contenido de la página">
          {indice.map((i) => (
            <a key={i.id} href={`#${i.id}`}>
              {i.texto}
            </a>
          ))}
        </nav>
      </section>

      {/* Qué es */}
      <section className="hb hb-alt" id="localizacion">
        <div className="hi hi-narrow">
          <h2 className="h-section">Qué es la localización española de Odoo</h2>
          <div className="es-prose">
            <p>
              Odoo es un ERP que reúne en una sola aplicación la contabilidad, las ventas, las compras, el almacén, el
              CRM, los proyectos, el TPV, la web y los recursos humanos. Se usa en todo el mundo, y lo que lo adapta a
              cada país es su <strong>localización fiscal</strong>: un conjunto de módulos con el plan de cuentas, los
              impuestos, los informes y las conexiones con la administración tributaria de ese país.
            </p>
            <p>
              La de España se instala sola al crear la empresa con país España e incluye el Plan General de
              Contabilidad de 2008, el IVA con sus regímenes, los modelos de la AEAT y la comunicación electrónica con
              Hacienda: Verifactu, SII, TicketBAI de las Haciendas Forales y Facturae para las administraciones
              públicas.
            </p>
            <p>
              Instalar los módulos es fácil; <strong>configurarlos bien para tu empresa no lo es</strong>. Un impuesto mal
              definido descuadra el 303, una posición fiscal que falta lleva una venta intracomunitaria al IVA nacional
              y un certificado mal cargado deja facturas sin enviar a la AEAT. Ahí es donde entramos nosotros.
            </p>
          </div>
          <Llamada
            titulo="¿Ya usas Odoo y no sabes si está bien configurado?"
            texto="Revisamos tu localización española y te decimos qué falla antes de que llegue el trimestre."
            mensaje="Hola Marlon, ya uso Odoo en España y quiero que revises la configuración de la localización."
          />
        </div>
      </section>

      {/* Módulos */}
      <section className="hb" id="modulos">
        <div className="hi">
          <h2 className="h-section">Los módulos de la localización española</h2>
          <p className="h-sub">
            Estos son los módulos oficiales de Odoo para España en Odoo 19 y 20. Te indicamos cuáles vienen en la
            edición gratuita y cuáles necesitan Enterprise.
          </p>
          <div className="es-table" role="table" aria-label="Módulos de la localización española de Odoo">
            <div className="es-row es-head" role="row">
              <span role="columnheader">Módulo</span>
              <span role="columnheader">Para qué sirve</span>
              <span role="columnheader">Edición</span>
            </div>
            {modulos.map((m) => (
              <div className="es-row" role="row" key={m.tecnico}>
                <span role="cell">
                  <strong>{m.nombre}</strong>
                  <code>{m.tecnico}</code>
                </span>
                <span role="cell">{m.texto}</span>
                <span role="cell">
                  <em className={m.edicion === 'Enterprise' ? 'ent' : 'com'}>{m.edicion}</em>
                </span>
              </div>
            ))}
          </div>
          <Llamada
            titulo="No tienes que saber qué módulo instalar"
            texto="Te instalamos y configuramos exactamente los que necesita tu empresa, ni uno más."
            mensaje="Hola Marlon, quiero que me configuréis la localización española de Odoo."
          />
        </div>
      </section>

      {/* Plan contable e impuestos */}
      <section className="hb hb-alt" id="contabilidad">
        <div className="hi">
          <h2 className="h-section">Plan General Contable e impuestos</h2>
          <p className="h-sub">
            Elegimos contigo el plan contable que te corresponde y dejamos los impuestos y las posiciones fiscales para
            que cada factura vaya a su casilla sin que nadie lo piense.
          </p>
          <h3 className="es-h3">Planes contables disponibles</h3>
          <Tarjetas items={planes} columnas={4} />
          <h3 className="es-h3">Impuestos y regímenes</h3>
          <Tarjetas items={impuestos} />
          <Llamada
            titulo="¿Eres constructora, distribuidor o vendes a la UE?"
            texto="Inversión del sujeto pasivo, recargo de equivalencia o IVA intracomunitario: lo configuramos para tu caso."
            mensaje="Hola Marlon, necesito configurar en Odoo impuestos especiales de mi empresa en España."
          />
        </div>
      </section>

      {/* Modelos */}
      <section className="hb" id="modelos">
        <div className="hi">
          <h2 className="h-section">Modelos de la AEAT desde la contabilidad</h2>
          <p className="h-sub">
            Odoo calcula los modelos con los apuntes del periodo, te deja ver de qué factura sale cada casilla y genera
            el fichero para presentarlo en la sede electrónica.
          </p>
          <div className="es-models">
            {modelos.map((m) => (
              <div className="es-model" key={m.codigo}>
                <span className="es-code">{m.codigo}</span>
                <h3>{m.titulo}</h3>
                <p>{m.texto}</p>
              </div>
            ))}
          </div>
          <p className="es-note">
            Estos modelos vienen en el informe de impuestos de Odoo Enterprise. En Community se obtienen con los módulos
            de la comunidad OCA para España, que añaden además otros como el 123, el 180 o el 190.
          </p>
          <Llamada
            titulo="Que el trimestre deje de ser una pesadilla"
            texto="Cuadramos los modelos con tu gestoría en la implantación para que el primer 303 salga a la primera."
            mensaje="Hola Marlon, quiero sacar los modelos de la AEAT desde Odoo."
          />
        </div>
      </section>

      {/* Verifactu */}
      <section className="hb hb-alt" id="verifactu">
        <div className="hi hire-price">
          <div>
            <span className="es-tag">Obligatorio en 2027</span>
            <h2 className="h-section">Verifactu en Odoo</h2>
            <p className="h-sub">
              La Ley Antifraude obliga a que el programa de facturación garantice que las facturas no se pueden alterar.
              Según el Real Decreto-ley 15/2025, las sociedades tienen que cumplir desde el 1 de enero de 2027 y el
              resto, autónomos incluidos, desde el 1 de julio de 2027. Usar un programa que no cumple puede costar
              hasta 50.000 € de sanción por ejercicio.
            </p>
            <p className="es-small">
              No aplica a quien ya está en el SII ni a quien factura con TicketBAI en el País Vasco.
            </p>
          </div>
          <div>
            <h3 className="es-h3 top">Cómo lo resuelve Odoo</h3>
            <Checks items={verifactu} />
          </div>
        </div>
        <div className="hi">
          <Llamada
            titulo="El plazo llega antes de lo que parece"
            texto="Activamos Verifactu en tu Odoo, lo probamos con la AEAT y formamos a quien factura. También en el TPV."
            mensaje="Hola Marlon, quiero activar Verifactu en Odoo antes de la fecha obligatoria."
          />
        </div>
      </section>

      {/* SII */}
      <section className="hb" id="sii">
        <div className="hi hire-price">
          <div>
            <h2 className="h-section">SII: Suministro Inmediato de Información</h2>
            <p className="h-sub">
              Con el SII los libros de IVA se llevan en la sede de la AEAT: cada factura emitida o recibida se envía
              en pocos días. Odoo la envía al validarla, guarda la respuesta de Hacienda y te avisa de las rechazadas
              para corregirlas.
            </p>
          </div>
          <div>
            <h3 className="es-h3 top">¿Quién está obligado?</h3>
            <Checks items={sii} />
          </div>
        </div>
        <div className="hi">
          <Llamada
            titulo="¿Pasas al SII o tienes facturas rechazadas?"
            texto="Configuramos el certificado, los tipos de factura y las claves de régimen para que todo entre a la primera."
            mensaje="Hola Marlon, necesito ayuda con el SII en Odoo."
          />
        </div>
      </section>

      {/* TicketBAI */}
      <section className="hb hb-alt" id="ticketbai">
        <div className="hi">
          <h2 className="h-section">TicketBAI para empresas del País Vasco</h2>
          <p className="h-sub">
            Si tributas en Álava, Bizkaia o Gipuzkoa, tu Hacienda Foral te pide TicketBAI en lugar de Verifactu. Odoo
            firma cada factura, la encadena, le pone su QR y la envía a la Diputación que te toca.
          </p>
          <Tarjetas items={ticketbai} />
          <Llamada
            titulo="Empresas vascas: lo dejamos funcionando con tu Diputación"
            texto="Elegimos la Hacienda Foral, cargamos el certificado y probamos en el entorno de test antes de facturar de verdad."
            mensaje="Hola Marlon, mi empresa es del País Vasco y quiero TicketBAI en Odoo."
          />
        </div>
      </section>

      {/* Factura electrónica */}
      <section className="hb" id="factura-electronica">
        <div className="hi">
          <h2 className="h-section">Factura electrónica: Facturae, FACe y B2B</h2>
          <p className="h-sub">
            La factura en PDF por email tiene los días contados. Odoo ya trabaja con los formatos que te van a pedir.
          </p>
          <div className="es-cards c2">
            <div className="es-mini">
              <h3>A las administraciones públicas</h3>
              <p>
                Si trabajas para ayuntamientos, comunidades o ministerios, Odoo genera la factura en formato Facturae,
                firmada, con los códigos DIR3 de oficina contable, órgano gestor y unidad tramitadora, lista para FACe.
              </p>
            </div>
            <div className="es-mini">
              <h3>Entre empresas (Ley Crea y Crece)</h3>
              <p>
                El reglamento de la factura electrónica B2B ya está aprobado. El calendario previsto la hace obligatoria
                en octubre de 2027 para empresas de más de 8 millones de facturación y en octubre de 2028 para el resto,
                con aviso del estado de cada factura (pagada, rechazada…).
              </p>
            </div>
          </div>
          <Llamada
            titulo="Factura a la Administración y prepárate para el B2B"
            texto="Configuramos Facturae y FACe, y dejamos tu Odoo preparado para la factura electrónica entre empresas."
            mensaje="Hola Marlon, necesito factura electrónica (Facturae / FACe / B2B) en Odoo."
          />
        </div>
      </section>

      {/* Bancos */}
      <section className="hb hb-alt" id="bancos">
        <div className="hi">
          <h2 className="h-section">Bancos, SEPA y tesorería</h2>
          <p className="h-sub">La contabilidad solo es útil si el banco cuadra. Esto es lo que dejamos automatizado:</p>
          <Tarjetas items={bancos} columnas={4} />
          <Llamada
            titulo="Concilia el banco en minutos, no en días"
            texto="Conectamos tus bancos, preparamos las remesas SEPA y las reglas de conciliación."
            mensaje="Hola Marlon, quiero automatizar bancos y remesas SEPA en Odoo."
          />
        </div>
      </section>

      {/* Ediciones */}
      <section className="hb" id="ediciones">
        <div className="hi">
          <h2 className="h-section">¿Odoo Community u Odoo Enterprise?</h2>
          <p className="h-sub">
            Las dos sirven para cumplir con Hacienda en España. Cambia cuánto viene hecho y cuánto pagas en licencias.
            Implantamos ambas y te recomendamos la que te conviene.
          </p>
          <div className="es-cards c2">
            {ediciones.map((e) => (
              <div className={`es-mini es-ed${e.destacado ? ' best' : ''}`} key={e.titulo}>
                <span className="es-tag">{e.etiqueta}</span>
                <h3>{e.titulo}</h3>
                <Checks items={e.puntos} />
              </div>
            ))}
          </div>
          <Llamada
            titulo="¿No sabes cuál elegir?"
            texto="Cuéntanos cómo trabaja tu empresa y te decimos cuál te sale más a cuenta, sin compromiso."
            mensaje="Hola Marlon, quiero saber si me conviene Odoo Community o Enterprise."
          />
        </div>
      </section>

      {/* Implantación */}
      <section className="hb hb-alt" id="implantacion">
        <div className="hi">
          <h2 className="h-section">Cómo implantamos Odoo en tu empresa</h2>
          <p className="h-sub">
            Para grandes, medianas y pequeñas empresas de Madrid, Valencia, Barcelona, Bilbao, Sevilla o cualquier punto
            de España. En remoto, presencial o mixto con tu propio equipo, en tu servidor o en la nube.
          </p>
          <ol className="h-steps">
            {pasos.map((p, i) => (
              <li key={p.titulo}>
                <span className="h-num">{i + 1}</span>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
              </li>
            ))}
          </ol>
          <div className="h-tip">
            <Icon name="building" size={20} />
            <p>
              <strong>¿Eres constructora?</strong> Implantamos Odoo con BIM 2.0, nuestra vertical de construcción:
              presupuestos, certificaciones, hitos de facturación y control de costes por obra.{' '}
              <a href="/libros/proceso-de-obra-hitos-facturacion-bim-2-0" className="h-link">
                Descarga el manual gratis <Icon name="right" size={13} />
              </a>
            </p>
          </div>
          <Llamada
            titulo="Empieza con una reunión, sin compromiso"
            texto="Nos cuentas cómo trabajas y te decimos qué parte cubre Odoo de serie y qué habría que desarrollar."
            mensaje="Hola Marlon, quiero una reunión para implantar Odoo en mi empresa."
          />
        </div>
      </section>

      {/* Preguntas */}
      <section className="hb" id="preguntas">
        <div className="hi hi-narrow">
          <h2 className="h-section">Preguntas frecuentes</h2>
          <div className="h-faq">
            {preguntas.map((q) => (
              <details key={q.p}>
                <summary>{q.p}</summary>
                <p>{q.r}</p>
              </details>
            ))}
          </div>
          <p className="es-note">
            Fechas y obligaciones revisadas en {REVISADO}. La normativa cambia a menudo: antes de decidir, confírmalas
            con tu asesor fiscal o en la Agencia Tributaria.
          </p>
        </div>
      </section>

      {/* Llamada final */}
      <section className="hb hb-alt">
        <div className="hi">
          <div className="h-final">
            <h2>Implanta Odoo en España con nosotros</h2>
            <p>Escríbenos hoy y te respondemos con los siguientes pasos para tu empresa.</p>
            <div className="h-actions center">
              <Ext href={WHATSAPP} className="h-btn h-primary">
                <Icon name="whatsapp" size={18} /> WhatsApp +34 662 47 06 45
              </Ext>
              <a href={EMAIL} className="h-btn h-ghost">
                <Icon name="mail" size={18} /> mfalconsoft@gmail.com
              </a>
              <a href="tel:+34662470645" className="h-btn h-ghost">
                <Icon name="phone" size={18} /> Llámanos
              </a>
            </div>
            <div className="h-social">
              <Ext href="https://github.com/falconsoft3d" className="h-link">
                <Icon name="github" size={15} /> GitHub
              </Ext>
              <Ext href="https://www.youtube.com/@marlonfalconhdez" className="h-link">
                <Icon name="youtube" size={15} /> YouTube
              </Ext>
              <Ext href="https://t.me/falconsoft" className="h-link">
                <Icon name="telegram" size={15} /> Telegram
              </Ext>
              <Ext href="https://www.linkedin.com/in/marlon-falc%C3%B3n-3a2aa9a4/" className="h-link">
                <Icon name="linkedin" size={15} /> LinkedIn
              </Ext>
            </div>
            <p className="es-partner">
              ¿Eres una empresa de implantación de Odoo con experiencia demostrable? Buscamos partners en España:{' '}
              <Ext href={whatsapp('Hola Marlon, somos una empresa de Odoo y queremos ser partners en España.')} className="h-link">
                hablemos
              </Ext>
              .
            </p>
          </div>
        </div>
      </section>

      <style jsx global>{estilos}</style>
      <style jsx global>{`
        .hire.es .es-toc {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 2.5rem;
        }
        .hire.es .es-toc a {
          padding: 0.35rem 0.8rem;
          border: 1px solid var(--border);
          border-radius: 999px;
          background: var(--surface);
          color: var(--muted);
          font-size: 0.82rem;
        }
        .hire.es .es-toc a:hover {
          border-color: var(--accent-2);
          color: var(--text-strong);
        }
        .hire.es section[id] {
          scroll-margin-top: 4rem;
        }

        /* Calendario de la portada */
        .hire.es .es-cal {
          text-align: left;
        }
        .hire.es .es-cal-t {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          margin-bottom: 1rem;
          color: var(--text-strong);
          font-variation-settings: 'wght' 700;
        }
        .hire.es .es-cal ol {
          margin: 0 0 1.25rem;
          padding: 0;
          list-style: none;
        }
        .hire.es .es-cal li {
          display: flex;
          gap: 0.9rem;
          align-items: flex-start;
          margin: 0;
          padding: 0.65rem 0;
          border-bottom: 1px dashed var(--border);
        }
        .hire.es .es-cal li::before {
          content: none;
        }
        .hire.es .es-cal li > span {
          flex: 0 0 5.6rem;
          padding: 0.2rem 0.5rem;
          border-radius: 0.5rem;
          background: var(--tint);
          border: 1px solid var(--tint-border);
          color: var(--accent-2);
          font-size: 0.78rem;
          text-align: center;
          font-variation-settings: 'wght' 650;
        }
        .hire.es .es-cal strong {
          display: block;
          color: var(--text-strong);
          font-size: 0.92rem;
        }
        .hire.es .es-cal small {
          color: var(--muted);
          font-size: 0.8rem;
        }
        .hire.es a.es-full {
          display: flex;
          justify-content: center;
        }

        /* Texto */
        .hire.es .es-prose p {
          margin: 1rem 0 0;
          line-height: 1.7;
        }
        .hire.es .es-h3 {
          margin: 2rem 0 1rem;
          font-size: 1.1rem;
          color: var(--text-strong);
        }
        .hire.es .es-h3.top {
          margin-top: 0;
        }
        .hire.es .es-note,
        .hire.es .es-small {
          margin-top: 1.25rem;
          color: var(--muted);
          font-size: 0.88rem;
        }
        .hire.es .es-tag {
          display: inline-block;
          margin-bottom: 0.75rem;
          padding: 0.15rem 0.6rem;
          border-radius: 999px;
          background: var(--p-yellow);
          color: #2a2622;
          font-size: 0.75rem;
          font-variation-settings: 'wght' 650;
        }

        /* Tarjetas */
        .hire.es .es-cards {
          display: grid;
          gap: 1rem;
        }
        .hire.es .es-cards.c2 {
          grid-template-columns: repeat(2, 1fr);
        }
        .hire.es .es-cards.c3 {
          grid-template-columns: repeat(3, 1fr);
        }
        .hire.es .es-cards.c4 {
          grid-template-columns: repeat(4, 1fr);
        }
        .hire.es .es-mini {
          padding: 1.25rem;
          border: 1px solid var(--border);
          border-radius: 1rem;
          background: var(--surface);
        }
        .hire.es .hb-alt .es-mini {
          background: var(--bg);
        }
        .hire.es .es-mini h3 {
          margin-bottom: 0.4rem;
          font-size: 1rem;
          color: var(--text-strong);
        }
        .hire.es .es-mini p {
          font-size: 0.9rem;
          line-height: 1.55;
          color: var(--muted);
        }
        .hire.es .es-ed .h-checks {
          margin: 1rem 0 0;
        }
        .hire.es .es-ed.best {
          border: 2px solid var(--p-blue);
        }

        /* Tabla de módulos */
        .hire.es .es-table {
          border: 1px solid var(--border);
          border-radius: 1rem;
          overflow: hidden;
        }
        .hire.es .es-row {
          display: grid;
          grid-template-columns: 1.1fr 1.6fr 0.5fr;
          gap: 1rem;
          align-items: center;
          padding: 0.9rem 1.25rem;
          border-top: 1px solid var(--border);
          font-size: 0.9rem;
        }
        .hire.es .es-head {
          border-top: 0;
          background: var(--surface);
          color: var(--muted);
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .hire.es .es-row strong {
          display: block;
          color: var(--text-strong);
        }
        .hire.es .es-row code {
          font-size: 0.78rem;
          color: var(--accent-2);
        }
        .hire.es .es-row code::before,
        .hire.es .es-row code::after {
          content: none;
        }
        .hire.es .hire-price {
          align-items: start;
        }
        .hire.es .es-row em {
          padding: 0.15rem 0.55rem;
          border-radius: 999px;
          font-style: normal;
          font-size: 0.75rem;
          color: #2a2622;
          white-space: nowrap;
        }
        .hire.es .es-row em.com {
          background: var(--p-green);
        }
        .hire.es .es-row em.ent {
          background: var(--p-lavender);
        }

        /* Modelos */
        .hire.es .es-models {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }
        .hire.es .es-model {
          padding: 1.25rem;
          border: 1px solid var(--border);
          border-radius: 1rem;
          background: var(--surface);
        }
        .hire.es .es-code {
          display: inline-block;
          margin-bottom: 0.5rem;
          font-size: 1.8rem;
          line-height: 1;
          color: var(--accent-2);
          font-variation-settings: 'wght' 750;
        }
        .hire.es .es-model h3 {
          font-size: 1rem;
          color: var(--text-strong);
        }
        .hire.es .es-model p {
          margin-top: 0.3rem;
          font-size: 0.86rem;
          color: var(--muted);
        }

        /* Llamada a implantar */
        .hire.es .es-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.25rem;
          margin-top: 2rem;
          padding: 1.25rem 1.5rem;
          border: 1px solid var(--tint-border);
          border-left: 4px solid var(--accent);
          border-radius: 1rem;
          background: var(--tint);
        }
        .hire.es .es-cta strong {
          color: var(--text-strong);
          font-size: 1.05rem;
        }
        .hire.es .es-cta p {
          margin-top: 0.2rem;
          color: var(--muted);
          font-size: 0.92rem;
        }
        .hire.es .es-cta a.h-btn {
          flex-shrink: 0;
        }

        .hire.es .es-partner {
          margin-top: 1.75rem;
          color: var(--muted);
          font-size: 0.9rem;
        }

        @media (max-width: 960px) {
          .hire.es .es-cards.c4,
          .hire.es .es-models {
            grid-template-columns: repeat(2, 1fr);
          }
          .hire.es .es-cards.c3 {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 720px) {
          .hire.es .es-row {
            grid-template-columns: 1fr;
            gap: 0.35rem;
          }
          .hire.es .es-head {
            display: none;
          }
          .hire.es .es-cta {
            flex-direction: column;
            align-items: flex-start;
          }
        }
        @media (max-width: 560px) {
          .hire.es .es-cards.c2,
          .hire.es .es-cards.c3,
          .hire.es .es-cards.c4,
          .hire.es .es-models {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}
