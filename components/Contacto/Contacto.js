import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Icon from '../Icon'
import NinjaReto from '../Calendario/NinjaReto'
import { contactos } from '../Home/data'
import { useIdioma } from '../../lib/idioma'

const WHATSAPP = '34662470645'

const TEXTOS = {
  es: {
    titulo: 'Contacto · Marlon Falcón Hernández',
    descripcion: 'Contacta con Marlon Falcón Hernández para proyectos de Odoo, desarrollo web y apps, BIM 2.0 o formación. Valencia, España.',
    kicker: 'Contacto',
    h1: 'Hablemos de tu proyecto',
    lede: 'Odoo, desarrollo web y apps, BIM 2.0 o formación. Cuéntame qué necesitas y te respondo por WhatsApp o por email.',
    lugar: 'Valencia, España',
    canales: 'Otras formas de contactar',
    agendaTitulo: '¿Prefieres una videollamada?',
    agendaTexto: 'Reserva una reunión en mi calendario',
    formTitulo: 'Escríbeme',
    nombre: 'Nombre',
    email: 'Email',
    telefono: 'Teléfono o WhatsApp',
    empresa: 'Empresa',
    opcional: 'opcional',
    tema: '¿Sobre qué?',
    temas: ['Odoo', 'Web / App', 'BIM 2.0', 'Formación', 'Otro'],
    mensaje: 'Mensaje',
    mensajePh: 'Cuéntame tu proyecto, plazos y lo que necesitas.',
    enviar: 'Enviar por WhatsApp',
    enviando: 'Enviando…',
    nota: 'Al enviar se abre WhatsApp con tu mensaje listo para mandar. También me llega aquí, por si no lo envías.',
    errorReto: 'La suma de los ninjas no es correcta. Prueba con la nueva.',
    errorDatos: 'Indica tu nombre, un email válido y un mensaje.',
    errorEnvio: 'No se pudo enviar. Escríbeme directamente por WhatsApp.',
    gracias: (n) => `¡Gracias, ${n}!`,
    recibido: 'He recibido tu mensaje. Pulsa el botón para enviármelo también por WhatsApp y seguimos la conversación allí.',
    abrirWhatsapp: 'Abrir WhatsApp',
    otro: 'Enviar otro mensaje',
    mensajeWhatsapp: 'Hola Marlon, te escribo desde marlonfalcon.com/contacto.',
    retoTitulo: 'Demuestra que no eres un robot',
    retoAria: (a, b) => `Dos ninjas luchan y entre ellos está la suma ${a} más ${b}`,
    retoPregunta: '¿Cuánto suman los números entre los ninjas?',
    retoOtra: 'Otra suma',
    cargando: 'Cargando…'
  },
  en: {
    titulo: 'Contact · Marlon Falcón Hernández',
    descripcion: 'Get in touch with Marlon Falcón Hernández about Odoo, web and app development, BIM 2.0 or training projects. Valencia, Spain.',
    kicker: 'Contact',
    h1: 'Let’s talk about your project',
    lede: 'Odoo, web and app development, BIM 2.0 or training. Tell me what you need and I will reply on WhatsApp or by email.',
    lugar: 'Valencia, Spain',
    canales: 'Other ways to reach me',
    agendaTitulo: 'Prefer a video call?',
    agendaTexto: 'Book a meeting in my calendar',
    formTitulo: 'Write to me',
    nombre: 'Name',
    email: 'Email',
    telefono: 'Phone or WhatsApp',
    empresa: 'Company',
    opcional: 'optional',
    tema: 'What about?',
    temas: ['Odoo', 'Web / App', 'BIM 2.0', 'Training', 'Other'],
    mensaje: 'Message',
    mensajePh: 'Tell me about your project, timeline and what you need.',
    enviar: 'Send via WhatsApp',
    enviando: 'Sending…',
    nota: 'When you send it, WhatsApp opens with your message ready to go. It also reaches me here in case you do not send it.',
    errorReto: 'The ninjas’ sum is not right. Try the new one.',
    errorDatos: 'Please enter your name, a valid email and a message.',
    errorEnvio: 'It could not be sent. Message me directly on WhatsApp.',
    gracias: (n) => `Thank you, ${n}!`,
    recibido: 'I have received your message. Press the button to send it on WhatsApp too and we will continue there.',
    abrirWhatsapp: 'Open WhatsApp',
    otro: 'Send another message',
    mensajeWhatsapp: 'Hi Marlon, I am writing from marlonfalcon.com/contacto.',
    retoTitulo: 'Prove you are not a robot',
    retoAria: (a, b) => `Two ninjas are fighting and between them is the sum ${a} plus ${b}`,
    retoPregunta: 'What do the numbers between the ninjas add up to?',
    retoOtra: 'Another sum',
    cargando: 'Loading…'
  }
}

const VACIO = { nombre: '', email: '', telefono: '', empresa: '', tema: '', mensaje: '' }

function enlaceWhatsapp(d, t) {
  const texto = [
    t.mensajeWhatsapp,
    '',
    `👤 ${d.nombre}${d.empresa ? ` (${d.empresa})` : ''}`,
    `✉️ ${d.email}`,
    d.telefono && `📞 ${d.telefono}`,
    d.tema && `🏷 ${d.tema}`,
    '',
    d.mensaje
  ]
    .filter((l) => typeof l === 'string')
    .join('\n')
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`
}

// /contacto: datos de contacto y formulario con captcha de ninjas que termina en WhatsApp
export default function Contacto() {
  const { lang } = useIdioma()
  const t = TEXTOS[lang]
  const [datos, setDatos] = useState(VACIO)
  const [captcha, setCaptcha] = useState({ reto: '', respuesta: '' })
  const [renovar, setRenovar] = useState(0)
  const [enviando, setEnviando] = useState(false)
  const [error, setError] = useState('')
  const [enviado, setEnviado] = useState(null)

  const set = (campo) => (e) => setDatos({ ...datos, [campo]: e.target.value })

  const enviar = async (e) => {
    e.preventDefault()
    setEnviando(true)
    setError('')
    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...datos, lang, ...captcha })
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(json.reto ? t.errorReto : json.error === 'datos' ? t.errorDatos : t.errorEnvio)
      const url = enlaceWhatsapp(datos, t)
      setEnviado({ nombre: datos.nombre.split(' ')[0], url })
      window.open(url, '_blank', 'noopener')
    } catch (err) {
      setError(err.message)
      setRenovar((n) => n + 1)
    }
    setEnviando(false)
  }

  const otro = () => {
    setDatos(VACIO)
    setEnviado(null)
    setRenovar((n) => n + 1)
  }

  return (
    <div className="ct">
      <Head>
        <title>{t.titulo}</title>
        <meta name="description" content={t.descripcion} />
      </Head>

      <div className="ct-grid">
        <section className="ct-info">
          <span className="ct-kicker">{t.kicker}</span>
          <h1>{t.h1}</h1>
          <p className="ct-lede">{t.lede}</p>

          <div className="ct-persona">
            <img src="/images/avatar.png" alt="" width={56} height={56} />
            <div>
              <b>MSc. Marlon Falcón Hernández</b>
              <span>
                <Icon name="pin" size={14} /> {t.lugar}
              </span>
            </div>
          </div>

          <h2 className="ct-sub">{t.canales}</h2>
          <ul className="ct-canales">
            {contactos.map((c) => (
              <li key={c.nombre}>
                <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                  <span className="ct-icono">
                    <Icon name={c.icono} size={18} />
                  </span>
                  <span>
                    <small>{c.nombre}</small>
                    {c.valor}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <Link href="/calendario">
            <a className="ct-agenda">
              <span className="ct-icono">
                <Icon name="calendar" size={20} />
              </span>
              <span>
                <b>{t.agendaTitulo}</b>
                {t.agendaTexto}
              </span>
              <Icon name="arrow" size={18} />
            </a>
          </Link>
        </section>

        <section className="ct-form" aria-label={t.formTitulo}>
          {enviado ? (
            <div className="ct-ok">
              <span className="ct-ok-icono">
                <Icon name="check" size={28} />
              </span>
              <h2>{t.gracias(enviado.nombre)}</h2>
              <p>{t.recibido}</p>
              <a className="ct-btn wa" href={enviado.url} target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" size={18} /> {t.abrirWhatsapp}
              </a>
              <button type="button" className="ct-btn ghost" onClick={otro}>
                {t.otro}
              </button>
            </div>
          ) : (
            <form onSubmit={enviar}>
              <h2>{t.formTitulo}</h2>
              <div className="ct-campos">
                <label className="ct-field">
                  {t.nombre}
                  <input required autoComplete="name" value={datos.nombre} onChange={set('nombre')} />
                </label>
                <label className="ct-field">
                  {t.email}
                  <input required type="email" autoComplete="email" value={datos.email} onChange={set('email')} />
                </label>
                <label className="ct-field">
                  <span>
                    {t.telefono} <small>({t.opcional})</small>
                  </span>
                  <input type="tel" autoComplete="tel" value={datos.telefono} onChange={set('telefono')} />
                </label>
                <label className="ct-field">
                  <span>
                    {t.empresa} <small>({t.opcional})</small>
                  </span>
                  <input autoComplete="organization" value={datos.empresa} onChange={set('empresa')} />
                </label>
              </div>

              <fieldset className="ct-temas">
                <legend>{t.tema}</legend>
                {t.temas.map((tema) => (
                  <button
                    key={tema}
                    type="button"
                    className={datos.tema === tema ? 'on' : ''}
                    aria-pressed={datos.tema === tema}
                    onClick={() => setDatos({ ...datos, tema: datos.tema === tema ? '' : tema })}
                  >
                    {tema}
                  </button>
                ))}
              </fieldset>

              <label className="ct-field">
                {t.mensaje}
                <textarea required minLength={5} rows={5} placeholder={t.mensajePh} value={datos.mensaje} onChange={set('mensaje')} />
              </label>

              <NinjaReto onChange={setCaptcha} renovar={renovar} t={t} />

              {error && <p className="ct-error">{error}</p>}
              <button type="submit" className="ct-btn wa" disabled={enviando || !captcha.respuesta}>
                <Icon name="whatsapp" size={18} /> {enviando ? t.enviando : t.enviar}
              </button>
              <p className="ct-nota">{t.nota}</p>
            </form>
          )}
        </section>
      </div>

      <style jsx global>{`
        .ct {
          max-width: 1180px;
          margin: 0 auto;
          padding: 2.5rem 1.25rem 5rem;
          color: var(--text);
        }
        .ct a {
          text-decoration: none;
        }
        .ct-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
          gap: 3rem;
          align-items: start;
        }
        .ct-kicker {
          display: inline-block;
          margin-bottom: 0.75rem;
          padding: 0.3rem 0.8rem;
          border-radius: 999px;
          background: var(--tint);
          color: var(--accent-2);
          font-size: 0.8rem;
          font-variation-settings: 'wght' 650;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .ct-info h1 {
          margin: 0;
          font-size: clamp(2.1rem, 4.5vw, 3.1rem);
          line-height: 1.05;
          letter-spacing: -0.035em;
          color: var(--text-strong);
        }
        .ct-lede {
          max-width: 520px;
          margin: 1rem 0 0;
          color: var(--muted);
          font-size: 1.05rem;
        }
        .ct-persona {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          margin: 2rem 0;
        }
        .ct-persona img {
          width: 56px;
          height: 56px;
          margin: 0;
          border-radius: 50%;
          box-shadow: 0 0 0 3px var(--bg), 0 0 0 5px var(--p-blue);
        }
        .ct-persona b {
          display: block;
          color: var(--text-strong);
        }
        .ct-persona span {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          color: var(--muted);
          font-size: 0.88rem;
        }
        .ct-sub {
          margin: 0 0 0.75rem;
          color: var(--muted);
          font-size: 0.78rem;
          font-variation-settings: 'wght' 650;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .ct-canales {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.6rem;
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .ct-canales li {
          margin: 0;
        }
        .ct-canales a {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 0.9rem;
          border: 1px solid var(--border);
          border-radius: 0.85rem;
          background: var(--surface);
          color: var(--text-strong);
          font-size: 0.88rem;
          overflow-wrap: anywhere;
          transition: border-color 0.15s, transform 0.15s;
        }
        .ct-canales a:hover {
          border-color: var(--accent-2);
          transform: translateY(-1px);
        }
        .ct-canales small {
          display: block;
          color: var(--muted);
          font-size: 0.72rem;
        }
        .ct-icono {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 38px;
          height: 38px;
          border-radius: 0.7rem;
          background: var(--tint);
          color: var(--accent-2);
        }
        .ct-agenda {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          margin-top: 1.25rem;
          padding: 1rem 1.1rem;
          border: 1px solid var(--tint-border);
          border-radius: 1rem;
          background: linear-gradient(135deg, var(--tint), transparent);
          color: var(--text);
          font-size: 0.9rem;
          transition: border-color 0.15s;
        }
        .ct-agenda:hover {
          border-color: var(--accent-2);
        }
        .ct-agenda > span:nth-child(2) {
          flex: 1;
        }
        .ct-agenda b {
          display: block;
          color: var(--text-strong);
          font-size: 1rem;
        }
        .ct-agenda > svg {
          color: var(--accent-2);
        }

        .ct-form {
          padding: 1.75rem;
          border: 1px solid var(--border);
          border-radius: 1.25rem;
          background: var(--surface-2);
          box-shadow: 0 24px 60px -36px rgba(0, 0, 0, 0.45);
        }
        .ct-form form {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }
        .ct-form h2 {
          margin: 0;
          font-size: 1.35rem;
          color: var(--text-strong);
        }
        .ct-campos {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.9rem;
        }
        .ct-field {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          color: var(--text-strong);
          font-size: 0.85rem;
          font-variation-settings: 'wght' 600;
        }
        .ct-field small {
          color: var(--muted);
          font-variation-settings: 'wght' 450;
        }
        .ct-field input,
        .ct-field textarea {
          padding: 0.7rem 0.85rem;
          border: 1px solid var(--border);
          border-radius: 0.6rem;
          background: var(--bg);
          color: var(--text-strong);
          font: inherit;
          font-size: 0.95rem;
          font-variation-settings: 'wght' 450;
        }
        .ct-field input:focus,
        .ct-field textarea:focus {
          outline: 2px solid var(--tint-border);
          border-color: var(--accent-2);
        }
        .ct-temas {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin: 0;
          padding: 0;
          border: 0;
        }
        .ct-temas legend {
          margin-bottom: 0.4rem;
          padding: 0;
          color: var(--text-strong);
          font-size: 0.85rem;
          font-variation-settings: 'wght' 600;
        }
        .ct-temas button {
          padding: 0.4rem 0.85rem;
          border: 1px solid var(--border);
          border-radius: 999px;
          background: transparent;
          color: var(--text);
          font: inherit;
          font-size: 0.85rem;
          cursor: pointer;
        }
        .ct-temas button:hover {
          border-color: var(--accent-2);
        }
        .ct-temas button.on {
          background: var(--tint);
          border-color: var(--tint-border);
          color: var(--accent-2);
          font-variation-settings: 'wght' 600;
        }
        .ct-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          min-height: 50px;
          padding: 0 1.4rem;
          border: 1px solid transparent;
          border-radius: 999px;
          font: inherit;
          font-size: 0.98rem;
          font-variation-settings: 'wght' 650;
          cursor: pointer;
          transition: filter 0.15s, opacity 0.15s;
        }
        .ct-btn.wa {
          background: #25d366;
          color: #0b3d1f;
        }
        .ct-btn.wa:hover {
          filter: brightness(1.05);
        }
        .ct-btn:disabled {
          opacity: 0.55;
          cursor: not-allowed;
        }
        .ct-btn.ghost {
          background: transparent;
          border-color: var(--border);
          color: var(--text-strong);
        }
        .ct-error {
          margin: 0;
          padding: 0.7rem 0.9rem;
          border-radius: 0.6rem;
          background: rgba(220, 90, 90, 0.12);
          color: #c0392b;
          font-size: 0.9rem;
        }
        html.dark .ct-error {
          color: #f2a39b;
        }
        .ct-nota {
          margin: -0.4rem 0 0;
          color: var(--muted);
          font-size: 0.8rem;
          text-align: center;
        }
        .ct-ok {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.9rem;
          padding: 2rem 0.5rem;
          text-align: center;
        }
        .ct-ok p {
          max-width: 400px;
          margin: 0;
          color: var(--muted);
        }
        .ct-ok-icono {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(37, 211, 102, 0.18);
          color: #1a9e4b;
        }

        @media (max-width: 900px) {
          .ct-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
        @media (max-width: 560px) {
          .ct-campos,
          .ct-canales {
            grid-template-columns: 1fr;
          }
          .ct-form {
            padding: 1.25rem;
          }
        }
      `}</style>
    </div>
  )
}
