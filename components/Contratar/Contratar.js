import React from 'react'
import Icon from '../Icon'
import { WHATSAPP, EMAIL, PDF_TARIFA, confianza, ayudas, tramos, pasos, razones, preguntas } from './data'

const Ext = ({ href, className, children }) => (
  <a href={href} className={className} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
)

export default function Contratar() {
  return (
    <div className="hire">
      {/* Portada */}
      <section className="hb hb-hero">
        <div className="hi hire-hero">
          <div>
            <span className="h-eyebrow">
              <Icon name="pin" size={14} /> Freelance de Odoo ERP · Valencia, España
            </span>
            <h2 className="h-title">Hagamos que Odoo trabaje para tu empresa</h2>
            <p className="h-lede">
              Desarrollo, implantación y soporte de Odoo ERP con más de 200 proyectos a mis espaldas. Aquí tienes cómo
              trabajo, cuánto cuesta y cómo empezamos, sin letra pequeña.
            </p>
            <div className="h-actions">
              <Ext href={WHATSAPP} className="h-btn h-primary">
                <Icon name="whatsapp" size={18} /> Hablemos por WhatsApp
              </Ext>
              <a href={EMAIL} className="h-btn h-ghost">
                <Icon name="mail" size={18} /> Escríbeme un email
              </a>
            </div>
            <a href={PDF_TARIFA} className="h-pdf" target="_blank" rel="noopener noreferrer">
              <Icon name="file" size={15} /> Descargar forma de trabajo y tarifas (PDF)
            </a>
          </div>
          <div className="hire-card">
            <img src="/images/avatar.png" alt="Marlon Falcón Hernández" width={72} height={72} />
            <p className="hc-name">Marlon Falcón Hernández</p>
            <p className="hc-role">Ingeniero Civil · Máster en Arquitectura · Consultor SAP ERP</p>
            <div className="hc-stats">
              {confianza.map((c) => (
                <div key={c.etiqueta}>
                  <strong>{c.valor}</strong>
                  <span>{c.etiqueta}</span>
                </div>
              ))}
            </div>
            <p className="hc-price">
              Desde <strong>50 €/hora</strong> + IVA
            </p>
          </div>
        </div>
      </section>

      {/* En qué te ayudo */}
      <section className="hb">
        <div className="hi">
          <h2 className="h-section">¿En qué te puedo ayudar?</h2>
          <p className="h-sub">Si me escribes, seguramente sea por alguno de estos motivos.</p>
          <div className="h-grid">
            {ayudas.map((a) => (
              <div className="h-card" key={a.titulo}>
                <span className="h-icon" style={{ '--c': a.color }}>
                  <Icon name={a.icono} size={20} />
                </span>
                <h3>{a.titulo}</h3>
                <p>{a.texto}</p>
                {a.enlace && (
                  <Ext href={a.enlace.href} className="h-link">
                    {a.enlace.texto} <Icon name="external" size={13} />
                  </Ext>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifa */}
      <section className="hb hb-alt">
        <div className="hi hire-price">
          <div>
            <h2 className="h-section">Tarifa clara, por horas</h2>
            <p className="h-sub">
              Cuantas más horas, menor el precio por hora. Sin mínimos y con las horas válidas para desarrollo,
              formación o apoyo funcional.
            </p>
            <ul className="h-checks">
              <li>Precios más IVA, sin mínimo de horas.</li>
              <li>Sin precio cerrado hasta tener el levantamiento (DRF).</li>
              <li>Módulos ya hechos: se cotizan por las horas que llevó desarrollarlos.</li>
              <li>Planes de soporte mensuales con respuesta en 72 h o 24 h.</li>
            </ul>
            <a href={PDF_TARIFA} className="h-btn h-ghost" target="_blank" rel="noopener noreferrer">
              <Icon name="file" size={16} /> Ver todas las condiciones
            </a>
          </div>
          <div className="h-tiers" role="table" aria-label="Tarifa por tramos de horas">
            {tramos.map((t) => (
              <div className={`h-tier${t.destacado ? ' best' : ''}`} key={t.horas} role="row">
                <span role="cell">{t.horas}</span>
                <span role="cell">
                  <strong>{t.precio} €</strong>/hora
                </span>
                {t.destacado && <em>Mejor precio</em>}
              </div>
            ))}
            <p className="h-example">Ejemplo: 10 horas × 100 € = 1000 € + IVA.</p>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="hb">
        <div className="hi">
          <h2 className="h-section">Cómo trabajamos, paso a paso</h2>
          <p className="h-sub">Un proceso pensado para que no haya sorpresas por ninguna de las dos partes.</p>
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
            <Icon name="chat" size={20} />
            <p>
              <strong>Antes de la primera reunión:</strong> ten claro el diagrama de procesos de tu empresa, así veremos
              rápido dónde hay que hacer cambios.{' '}
              <Ext href="https://www.youtube.com/watch?v=gZo1EhjLLG4" className="h-link">
                Te explico cómo hacerlo en este vídeo <Icon name="external" size={13} />
              </Ext>
            </p>
          </div>
        </div>
      </section>

      {/* Por qué */}
      <section className="hb hb-alt">
        <div className="hi">
          <h2 className="h-section">Por qué trabajar conmigo</h2>
          <div className="h-grid">
            {razones.map((r) => (
              <div className="h-reason" key={r.titulo}>
                <Icon name={r.icono} size={22} />
                <h3>{r.titulo}</h3>
                <p>{r.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preguntas */}
      <section className="hb">
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
        </div>
      </section>

      {/* Llamada final */}
      <section className="hb">
        <div className="hi">
          <div className="h-final">
            <h2>¿Empezamos?</h2>
            <p>Cuéntame qué necesitas y te respondo con los siguientes pasos.</p>
            <div className="h-actions center">
              <Ext href={WHATSAPP} className="h-btn h-primary">
                <Icon name="whatsapp" size={18} /> WhatsApp +34 662 47 06 45
              </Ext>
              <a href={EMAIL} className="h-btn h-ghost">
                <Icon name="mail" size={18} /> mfalconsoft@gmail.com
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
          </div>
        </div>
      </section>

      <style jsx global>{`
        /* Esta página es una landing: se ocultan el título y la línea de fecha del post */
        article > h1:first-child,
        article > .meta-line {
          display: none;
        }

        .hire {
          color: var(--text);
        }
        .hire .hb {
          position: relative;
          left: 50%;
          width: 100vw;
          margin-left: -50vw;
          padding: 4.5rem 0;
        }
        .hire .hb-hero {
          margin-top: -2.5rem;
          padding-top: 3.5rem;
          background: radial-gradient(55% 80% at 90% 10%, var(--glow), transparent 70%);
        }
        .hire .hb-alt {
          background: var(--surface);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .hire .hi {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 1.25rem;
        }
        .hire .hi-narrow {
          max-width: 820px;
        }
        .hire h2,
        .hire h3,
        .hire p {
          margin: 0;
        }
        .hire a {
          text-decoration: none;
        }

        /* Portada */
        .hire .hire-hero {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        .hire .h-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.3rem 0.75rem;
          border: 1px solid var(--border);
          border-radius: 999px;
          background: var(--surface);
          color: var(--muted);
          font-size: 0.8rem;
        }
        .hire .h-title {
          margin: 1.1rem 0 0.9rem;
          font-size: clamp(2.2rem, 5vw, 3.4rem);
          line-height: 1.05;
          letter-spacing: -0.04em;
          color: var(--text-strong);
        }
        .hire .h-lede {
          max-width: 56ch;
          margin-bottom: 1.75rem;
          font-size: 1.05rem;
          color: var(--muted);
        }
        .hire .h-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .hire .h-actions.center {
          justify-content: center;
        }
        .hire a.h-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.3rem;
          border-radius: 999px;
          font-size: 0.95rem;
          font-variation-settings: 'wght' 600;
          transition: background-color 0.15s, border-color 0.15s, transform 0.15s;
        }
        .hire a.h-btn.h-primary {
          background: var(--accent);
          color: var(--on-accent);
        }
        .hire a.h-btn.h-primary:hover {
          background: var(--accent-hover);
          transform: translateY(-1px);
        }
        .hire a.h-btn.h-ghost {
          border: 1px solid var(--border);
          color: var(--text);
        }
        .hire a.h-btn.h-ghost:hover {
          border-color: var(--accent-2);
          color: var(--text-strong);
        }
        .hire a.h-pdf {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          margin-top: 1.1rem;
          font-size: 0.88rem;
          color: var(--accent-2);
        }
        .hire a.h-pdf:hover {
          text-decoration: underline;
        }

        .hire .hire-card {
          padding: 1.75rem;
          border: 1px solid var(--border);
          border-radius: 1.25rem;
          background: var(--surface);
          text-align: center;
          box-shadow: 0 30px 60px -35px var(--glow);
        }
        .hire .hire-card img {
          margin: 0 auto 0.75rem;
          border-radius: 50%;
          box-shadow: 0 0 0 3px var(--bg), 0 0 0 5px var(--p-blue);
        }
        .hire .hc-name {
          font-size: 1.1rem;
          color: var(--text-strong);
          font-variation-settings: 'wght' 700;
        }
        .hire .hc-role {
          margin-top: 0.25rem;
          font-size: 0.8rem;
          color: var(--muted);
        }
        .hire .hc-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.6rem;
          margin: 1.25rem 0;
        }
        .hire .hc-stats div {
          display: flex;
          flex-direction: column;
          padding: 0.7rem;
          border-radius: 0.8rem;
          background: var(--surface-2);
        }
        .hire .hc-stats strong {
          font-size: 1.4rem;
          line-height: 1.1;
          color: var(--text-strong);
        }
        .hire .hc-stats span {
          font-size: 0.75rem;
          color: var(--muted);
        }
        .hire .hc-price {
          padding-top: 1rem;
          border-top: 1px dashed var(--border);
          color: var(--muted);
        }
        .hire .hc-price strong {
          font-size: 1.3rem;
          color: var(--text-strong);
        }

        /* Secciones */
        .hire .h-section {
          font-size: 1.85rem;
          line-height: 1.2;
          color: var(--text-strong);
        }
        .hire .h-sub {
          max-width: 60ch;
          margin: 0.5rem 0 2rem;
          color: var(--muted);
        }
        .hire .h-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        .hire .h-card {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding: 1.4rem;
          border: 1px solid var(--border);
          border-radius: 1rem;
          background: var(--surface);
          transition: border-color 0.15s, transform 0.15s;
        }
        .hire .h-card:hover {
          border-color: var(--tint-border);
          transform: translateY(-2px);
        }
        .hire .h-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.6rem;
          height: 2.6rem;
          margin-bottom: 0.4rem;
          border-radius: 0.8rem;
          background: var(--c);
          color: #2a2622;
        }
        .hire .h-card h3,
        .hire .h-reason h3 {
          font-size: 1.05rem;
          color: var(--text-strong);
        }
        .hire .h-card p,
        .hire .h-reason p {
          font-size: 0.92rem;
          line-height: 1.55;
          color: var(--muted);
        }
        .hire a.h-link {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          color: var(--accent-2);
          font-size: 0.88rem;
        }
        .hire a.h-link:hover {
          text-decoration: underline;
        }
        .hire .h-card a.h-link {
          margin-top: auto;
          padding-top: 0.4rem;
        }

        /* Tarifa */
        .hire .hire-price {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        .hire .h-checks {
          margin: 0 0 1.75rem;
          padding: 0;
          list-style: none;
        }
        .hire .h-checks > li {
          position: relative;
          margin: 0 0 0.6rem;
          padding-left: 1.8rem;
        }
        .hire .h-checks.h-checks > li::before {
          content: '✓';
          position: absolute;
          left: 0;
          top: 0.05rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 1.25rem;
          height: 1.25rem;
          border-radius: 50%;
          background: var(--p-green);
          color: #2a2622;
          font-size: 0.75rem;
          font-weight: 700;
        }
        .hire .h-tiers {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .hire .h-tier {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.25rem;
          border: 1px solid var(--border);
          border-radius: 0.9rem;
          background: var(--surface-2);
          color: var(--muted);
        }
        .hire .h-tier strong {
          font-size: 1.35rem;
          color: var(--text-strong);
        }
        .hire .h-tier.best {
          border: 2px solid var(--p-blue);
          box-shadow: 0 16px 40px -24px var(--glow);
        }
        .hire .h-tier em {
          position: absolute;
          top: -0.65rem;
          right: 1rem;
          padding: 0.1rem 0.55rem;
          border-radius: 999px;
          background: var(--p-blue);
          color: var(--on-accent);
          font-size: 0.7rem;
          font-style: normal;
          font-variation-settings: 'wght' 650;
        }
        .hire .h-example {
          margin-top: 0.4rem;
          font-size: 0.82rem;
          color: var(--muted);
          text-align: right;
        }

        /* Proceso */
        .hire .h-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin: 0;
          padding: 0;
          list-style: none;
          counter-reset: none;
        }
        .hire .h-steps > li {
          margin: 0;
          padding: 1.25rem;
          border: 1px solid var(--border);
          border-radius: 1rem;
          background: var(--surface);
        }
        .hire .h-steps > li::before {
          content: none;
        }
        .hire .h-num {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2rem;
          height: 2rem;
          margin-bottom: 0.75rem;
          border-radius: 50%;
          background: var(--tint);
          border: 1px solid var(--tint-border);
          color: var(--accent-2);
          font-size: 0.9rem;
          font-variation-settings: 'wght' 700;
        }
        .hire .h-steps h3 {
          margin-bottom: 0.3rem;
          font-size: 1rem;
          color: var(--text-strong);
        }
        .hire .h-steps p {
          font-size: 0.88rem;
          line-height: 1.5;
          color: var(--muted);
        }
        .hire .h-tip {
          display: flex;
          gap: 0.9rem;
          align-items: flex-start;
          margin-top: 1.5rem;
          padding: 1.1rem 1.25rem;
          border-radius: 1rem;
          border-left: 4px solid var(--p-yellow);
          background: var(--surface);
          color: var(--accent-2);
        }
        .hire .h-tip p {
          color: var(--text);
          font-size: 0.95rem;
        }

        /* Por qué */
        .hire .h-reason {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
          padding: 1.25rem 0.25rem;
          color: var(--accent-2);
        }

        /* Preguntas */
        .hire .h-faq {
          margin-top: 1.5rem;
          border-top: 1px solid var(--border);
        }
        .hire .h-faq details {
          border-bottom: 1px solid var(--border);
        }
        .hire .h-faq summary {
          position: relative;
          padding: 1.1rem 2rem 1.1rem 0;
          list-style: none;
          color: var(--text-strong);
          font-variation-settings: 'wght' 600;
          cursor: pointer;
        }
        .hire .h-faq summary::-webkit-details-marker {
          display: none;
        }
        .hire .h-faq summary::after {
          content: '+';
          position: absolute;
          right: 0.25rem;
          top: 50%;
          transform: translateY(-50%);
          font-size: 1.4rem;
          color: var(--accent-2);
          transition: transform 0.2s;
        }
        .hire .h-faq details[open] summary::after {
          transform: translateY(-50%) rotate(45deg);
        }
        .hire .h-faq details p {
          padding: 0 0 1.2rem;
          color: var(--muted);
          line-height: 1.6;
        }

        /* Llamada final */
        .hire .h-final {
          padding: 3rem 1.5rem;
          border-radius: 1.5rem;
          text-align: center;
          background: linear-gradient(135deg, var(--tint), rgba(230, 184, 203, 0.22));
          border: 1px solid var(--border);
        }
        .hire .h-final h2 {
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          letter-spacing: -0.03em;
          color: var(--text-strong);
        }
        .hire .h-final > p {
          margin: 0.5rem 0 1.75rem;
          color: var(--muted);
        }
        .hire .h-social {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.25rem;
          margin-top: 1.5rem;
        }

        @media (max-width: 960px) {
          .hire .h-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .hire .h-steps {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 820px) {
          .hire .hb {
            padding: 3.25rem 0;
          }
          .hire .hire-hero,
          .hire .hire-price {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
        @media (max-width: 560px) {
          .hire .h-grid,
          .hire .h-steps {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}
