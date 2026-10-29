import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Icon from '../Icon'
import Marco from './Marco'
import { EMAIL_COMPROBANTE, PAYPAL_CUENTA, formatoPrecio, etiquetaVersion } from './data'

function enlaceComprobante(p) {
  const asunto = `Comprobante de pago · pedido ${p.numero}`
  const cuerpo = [
    `Hola Marlon,`,
    ``,
    `Adjunto el comprobante de PayPal del pedido ${p.numero} (${formatoPrecio(p.total, p.moneda)}):`,
    ...p.lineas.map((l) => `- ${l.nombre} · ${etiquetaVersion(l.version)} (${l.tecnico})`),
    ``,
    `Enviad los módulos a: ${p.email}`,
    ``,
    `Gracias,`,
    p.nombre
  ].join('\n')
  return `mailto:${EMAIL_COMPROBANTE}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`
}

// Estado de un pedido: instrucciones de pago manual o confirmación de PayPal
export default function Pedido() {
  const router = useRouter()
  const [pedido, setPedido] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!router.isReady) return
    const { numero, t } = router.query
    fetch(`/api/tienda/estado?numero=${encodeURIComponent(numero)}&t=${encodeURIComponent(t || '')}`)
      .then(async (res) => {
        const json = await res.json()
        if (!res.ok) throw new Error(json.error)
        setPedido(json)
      })
      .catch((e) => setError(e.message || 'No se pudo cargar el pedido.'))
  }, [router.isReady, router.query])

  const pagado = pedido?.estado === 'paid'

  return (
    <Marco titulo="Tu pedido · Tienda de módulos Odoo">
      {error && (
        <div className="tn-empty">
          <p>{error}</p>
          <Link href="/tienda">
            <a className="tn-btn">Volver a la tienda</a>
          </Link>
        </div>
      )}

      {!pedido && !error && <p className="tn-lede">Cargando pedido…</p>}

      {pedido && (
        <div className="tp">
          <span className={`tp-status${pagado ? ' ok' : ''}`}>
            <Icon name={pagado ? 'check' : 'mail'} size={16} />
            {pagado ? 'Pago confirmado' : 'Pendiente de pago'}
          </span>
          <h1 className="tn-title">Pedido {pedido.numero}</h1>
          <p className="tn-lede">
            {pagado
              ? `Gracias, ${pedido.nombre}. He recibido tu pago por PayPal. Te enviaré el código fuente de los módulos a ${pedido.email}.`
              : `Gracias, ${pedido.nombre}. Tu pedido está registrado. Sigue estos pasos para recibir los módulos en ${pedido.email}.`}
          </p>

          {!pagado && (
            <ol className="tp-steps">
              <li>
                <b>Paga {formatoPrecio(pedido.total, pedido.moneda)} por PayPal</b>
                <span>
                  Envía el pago a la cuenta <code>{PAYPAL_CUENTA}</code> e indica el concepto <code>{pedido.numero}</code>.
                </span>
                <a className="tn-btn ghost" href="https://www.paypal.com/myaccount/transfer/homepage/pay" target="_blank" rel="noopener noreferrer">
                  Abrir PayPal <Icon name="external" size={15} />
                </a>
              </li>
              <li>
                <b>Envía el comprobante por email</b>
                <span>
                  Manda el comprobante de PayPal a <code>{EMAIL_COMPROBANTE}</code> con el número de pedido.
                </span>
                <a className="tn-btn" href={enlaceComprobante(pedido)}>
                  <Icon name="mail" size={17} /> Enviar comprobante
                </a>
              </li>
              <li>
                <b>Recibe los módulos</b>
                <span>En cuanto verifique el pago te enviaré el código fuente a {pedido.email}.</span>
              </li>
            </ol>
          )}

          <section className="tp-summary" aria-label="Resumen del pedido">
            {pedido.lineas.map((l) => (
              <div key={l.clave} className="tp-line">
                <span>
                  {l.nombre} <span className="tn-badge">{etiquetaVersion(l.version)}</span>
                </span>
                <b>{formatoPrecio(l.precio, pedido.moneda)}</b>
              </div>
            ))}
            <div className="tp-line tp-total">
              <span>Total</span>
              <b>{formatoPrecio(pedido.total, pedido.moneda)}</b>
            </div>
          </section>

          <p className="tp-keep">
            Guarda este enlace para consultar tu pedido. ¿Dudas? Escríbeme a{' '}
            <a href={`mailto:${EMAIL_COMPROBANTE}?subject=${encodeURIComponent(`Pedido ${pedido.numero}`)}`}>{EMAIL_COMPROBANTE}</a>.
          </p>
        </div>
      )}

      <style jsx global>{`
        .tp {
          max-width: 720px;
        }
        .tp-status {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          margin-bottom: 1rem;
          padding: 0.3rem 0.8rem;
          border-radius: 999px;
          background: rgba(246, 216, 150, 0.35);
          color: #8a6417;
          font-size: 0.82rem;
          font-variation-settings: 'wght' 650;
        }
        .tp-status.ok {
          background: rgba(165, 195, 143, 0.35);
          color: #3e6b26;
        }
        html.dark .tp-status {
          color: var(--p-yellow);
        }
        html.dark .tp-status.ok {
          color: var(--p-green);
        }
        .tp-steps {
          display: grid;
          gap: 1rem;
          margin: 2rem 0;
          padding: 0;
          list-style: none;
          counter-reset: paso;
        }
        .tp-steps li {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.4rem;
          margin: 0;
          padding: 1.1rem 1.25rem 1.1rem 3.5rem;
          border: 1px solid var(--border);
          border-radius: 0.9rem;
          background: var(--surface);
          counter-increment: paso;
        }
        .tp-steps li::before {
          content: counter(paso);
          position: absolute;
          left: 1.1rem;
          top: 1.05rem;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 1.6rem;
          height: 1.6rem;
          border-radius: 50%;
          background: var(--accent);
          color: var(--on-accent);
          font-size: 0.85rem;
          font-variation-settings: 'wght' 700;
        }
        .tp-steps b {
          color: var(--text-strong);
        }
        .tp-steps span {
          color: var(--muted);
          font-size: 0.9rem;
        }
        .tp-steps .tn-btn {
          margin-top: 0.4rem;
          min-height: 40px;
        }
        .tp-summary {
          margin-top: 2rem;
          border-top: 1px solid var(--border);
        }
        .tp-line {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.75rem 0;
          border-bottom: 1px solid var(--border);
        }
        .tp-line .tn-badge {
          margin-left: 0.4rem;
          padding: 0.1rem 0.45rem;
          font-size: 0.7rem;
        }
        .tp-total b {
          font-size: 1.25rem;
          color: var(--text-strong);
        }
        .tp-keep {
          margin-top: 1.5rem;
          color: var(--muted);
          font-size: 0.85rem;
        }
        .tp-keep a {
          color: var(--accent-2);
        }
      `}</style>
    </Marco>
  )
}
