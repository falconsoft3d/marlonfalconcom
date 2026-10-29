import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Icon from '../Icon'
import Marco from './Marco'
import { EMAIL_COMPROBANTE, PAYPAL_CUENTA, formatoPrecio, etiquetaVersion } from './data'
import useTextos from './textos'

function enlaceComprobante(p, t) {
  const asunto = t.asunto(p.numero)
  const cuerpo = [
    t.hola,
    ``,
    t.adjunto(p.numero, formatoPrecio(p.total, p.moneda)),
    ...p.lineas.map((l) => `- ${l.nombre} · ${etiquetaVersion(l.version)} (${l.tecnico})`),
    ``,
    t.enviad(p.email),
    ``,
    t.gracias,
    p.nombre
  ].join('\n')
  return `mailto:${EMAIL_COMPROBANTE}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`
}

// Estado de un pedido: instrucciones de pago manual o confirmación de PayPal
export default function Pedido() {
  const router = useRouter()
  const t = useTextos()
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
      .catch((e) => setError(e.message || t.errorPedido))
  }, [router.isReady, router.query])

  const pagado = pedido?.estado === 'paid'

  return (
    <Marco titulo={t.pedidoTitulo}>
      {error && (
        <div className="tn-empty">
          <p>{error}</p>
          <Link href="/tienda">
            <a className="tn-btn">{t.volver}</a>
          </Link>
        </div>
      )}

      {!pedido && !error && <p className="tn-lede">{t.cargandoPedido}</p>}

      {pedido && (
        <div className="tp">
          <span className={`tp-status${pagado ? ' ok' : ''}`}>
            <Icon name={pagado ? 'check' : 'mail'} size={16} />
            {pagado ? t.pagoConfirmado : t.pendiente}
          </span>
          <h1 className="tn-title">
            {t.pedido} {pedido.numero}
          </h1>
          <p className="tn-lede">{pagado ? t.graciasPagado(pedido) : t.graciasPendiente(pedido)}</p>

          {!pagado && (
            <ol className="tp-steps">
              <li>
                <b>{t.paga(formatoPrecio(pedido.total, pedido.moneda))}</b>
                <span>
                  {t.pagaAntes}
                  <code>{PAYPAL_CUENTA}</code>
                  {t.pagaMedio}
                  <code>{pedido.numero}</code>.
                </span>
                <a className="tn-btn ghost" href="https://www.paypal.com/myaccount/transfer/homepage/pay" target="_blank" rel="noopener noreferrer">
                  {t.abrirPaypal} <Icon name="external" size={15} />
                </a>
              </li>
              <li>
                <b>{t.envia}</b>
                <span>
                  {t.enviaAntes}
                  <code>{EMAIL_COMPROBANTE}</code>
                  {t.enviaDespues}
                </span>
                <a className="tn-btn" href={enlaceComprobante(pedido, t.email)}>
                  <Icon name="mail" size={17} /> {t.enviarComprobante}
                </a>
              </li>
              <li>
                <b>{t.recibe}</b>
                <span>{t.recibeTexto(pedido.email)}</span>
              </li>
            </ol>
          )}

          <section className="tp-summary" aria-label={t.resumen}>
            {pedido.lineas.map((l) => (
              <div key={l.clave} className="tp-line">
                <span>
                  {l.nombre} <span className="tn-badge">{etiquetaVersion(l.version)}</span>
                </span>
                <b>{formatoPrecio(l.precio, pedido.moneda)}</b>
              </div>
            ))}
            <div className="tp-line tp-total">
              <span>{t.total}</span>
              <b>{formatoPrecio(pedido.total, pedido.moneda)}</b>
            </div>
          </section>

          <p className="tp-keep">
            {t.guarda}
            <a href={`mailto:${EMAIL_COMPROBANTE}?subject=${encodeURIComponent(`${t.pedido} ${pedido.numero}`)}`}>{EMAIL_COMPROBANTE}</a>.
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
