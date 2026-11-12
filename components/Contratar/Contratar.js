import React from 'react'
import Icon from '../Icon'
import UltimosLibros from '../Libros/UltimosLibros'
import estilos from './estilos'
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

      {/* Libros */}
      <section className="hb">
        <div className="hi">
          <UltimosLibros />
        </div>
      </section>

      {/* Preguntas */}
      <section className="hb hb-alt">
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

      <style jsx global>{estilos}</style>
    </div>
  )
}
