import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Icon from '../Icon'
import Marco from './Marco'
import useCarrito from './useCarrito'
import { EMAIL_COMPROBANTE, formatoPrecio, etiquetaVersion, rutaModulo, imagenModulo } from './data'
import useTextos from './textos'

const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Las etiquetas de cada campo están en textos.js
const CAMPOS = [
  ['nombre', 'text', 'name'],
  ['email', 'email', 'email'],
  ['empresa', 'text', 'organization'],
  ['nif', 'text', 'off'],
  ['pais', 'text', 'country-name'],
  ['telefono', 'tel', 'tel']
]

async function enviar(url, cuerpo, errorGenerico) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cuerpo)
  })
  const json = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(json.error || errorGenerico)
  return json
}

// Carga el SDK de PayPal una sola vez
function usePaypal(moneda, locale) {
  const [listo, setListo] = useState(false)
  useEffect(() => {
    if (!PAYPAL_CLIENT_ID || !moneda) return
    if (window.paypal) return setListo(true)
    const s = document.createElement('script')
    s.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=${moneda}&intent=capture&locale=${locale}&disable-funding=paylater`
    s.onload = () => setListo(true)
    document.body.appendChild(s)
  }, [moneda])
  return listo
}

export default function Carrito() {
  const router = useRouter()
  const { lineas, total, quitar, vaciar } = useCarrito()
  const t = useTextos()
  const [cliente, setCliente] = useState({ nombre: '', email: '', empresa: '', nif: '', pais: t.paisInicial, telefono: '', notas: '' })
  const [error, setError] = useState('')
  const [enviando, setEnviando] = useState(false)
  const [acepto, setAcepto] = useState(false)

  const moneda = lineas[0]?.moneda || 'EUR'
  const paypalListo = usePaypal(lineas.length ? moneda : null, t.paypalLocale)
  const botones = useRef(null)

  // El país por defecto depende del idioma mientras el usuario no lo haya cambiado
  useEffect(() => {
    setCliente((c) => (['España', ''].includes(c.pais) ? { ...c, pais: t.paisInicial } : c))
  }, [t])

  // Los botones de PayPal se crean una vez: leen siempre el formulario y los textos más recientes
  const estado = useRef({})
  estado.current = { cliente, lineas, acepto, t }

  const validar = () => {
    const { cliente: c, acepto: a, t: textos } = estado.current
    if (!c.nombre.trim() || !EMAIL.test(c.email.trim())) return textos.errorDatos
    if (!a) return textos.errorCondiciones
    return ''
  }

  const verPedido = ({ numero, token }) => {
    vaciar()
    router.push(`/tienda/pedido/${numero}?t=${token}`)
  }

  const crearPedido = () =>
    enviar(
      '/api/tienda/pedido',
      {
        cliente: estado.current.cliente,
        claves: estado.current.lineas.map((l) => l.clave)
      },
      estado.current.t.errorGenerico
    )

  useEffect(() => {
    if (!paypalListo || !botones.current || !lineas.length) return
    const contenedor = botones.current
    const instancia = window.paypal.Buttons({
      style: { layout: 'vertical', shape: 'pill', label: 'pay', height: 45 },
      onClick: (_, actions) => {
        const fallo = validar()
        setError(fallo)
        return fallo ? actions.reject() : actions.resolve()
      },
      createOrder: async () => {
        try {
          const pedido = await crearPedido()
          if (pedido.modo === 'manual') {
            verPedido(pedido)
            throw new Error('manual')
          }
          return pedido.id
        } catch (e) {
          if (e.message !== 'manual') setError(e.message)
          throw e
        }
      },
      onApprove: async (data) => {
        setEnviando(true)
        try {
          verPedido(await enviar('/api/tienda/capturar', { id: data.orderID }, estado.current.t.errorGenerico))
        } catch (e) {
          setError(e.message)
          setEnviando(false)
        }
      },
      onError: () => setError((actual) => actual || estado.current.t.errorPaypal)
    })
    instancia.render(contenedor)
    return () => {
      instancia.close && instancia.close().catch(() => {})
      contenedor.innerHTML = ''
    }
    // Se recrean solo si cambia el contenido del carrito
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paypalListo, lineas.map((l) => l.clave).join()])

  const pedidoManual = async (e) => {
    e.preventDefault()
    const fallo = validar()
    setError(fallo)
    if (fallo) return
    setEnviando(true)
    try {
      verPedido(await crearPedido())
    } catch (err) {
      setError(err.message)
      setEnviando(false)
    }
  }

  const cambiar = (campo) => (e) => setCliente({ ...cliente, [campo]: e.target.value })

  return (
    <Marco titulo={t.carritoTitulo}>
      <h1 className="tn-title">{t.carrito}</h1>

      {lineas.length === 0 ? (
        <div className="tn-empty">
          <p>{t.vacio}</p>
          <Link href="/tienda">
            <a className="tn-btn">{t.verModulos}</a>
          </Link>
        </div>
      ) : (
        <div className="tk">
          <section className="tk-lines" aria-label={t.enCarritoLabel}>
            {lineas.map((l) => (
              <div key={l.clave} className="tk-line">
                <Link href={rutaModulo(l)}>
                  <a className="tk-thumb">{l.imagen && <img src={imagenModulo(l)} alt="" />}</a>
                </Link>
                <div className="tk-desc">
                  <Link href={rutaModulo(l)}>
                    <a className="tk-name">{l.nombre}</a>
                  </Link>
                  <span>
                    <span className="tn-badge">{etiquetaVersion(l.version)}</span> <code>{l.tecnico}</code>
                  </span>
                </div>
                <b className="tk-price">{formatoPrecio(l.precio, l.moneda)}</b>
                <button type="button" className="tk-remove" onClick={() => quitar(l.clave)} aria-label={t.quitar(l.nombre)}>
                  <Icon name="trash" size={17} />
                </button>
              </div>
            ))}
            <p className="tk-note">{t.nota}</p>
          </section>

          <form className="tk-checkout" onSubmit={pedidoManual} noValidate>
            <h2>{t.tusDatos}</h2>
            <div className="tk-fields">
              {CAMPOS.map(([campo, tipo, auto]) => (
                <label key={campo}>
                  <span>{t.campos[campo]}</span>
                  <input type={tipo} autoComplete={auto} value={cliente[campo]} onChange={cambiar(campo)} />
                </label>
              ))}
              <label className="wide">
                <span>{t.notas}</span>
                <textarea rows={3} value={cliente.notas} onChange={cambiar('notas')} />
              </label>
            </div>

            <div className="tk-total">
              <span>
                {t.total} ({t.modulos(lineas.length)})
              </span>
              <b>{formatoPrecio(total, moneda)}</b>
            </div>

            <label className="tk-accept">
              <input type="checkbox" checked={acepto} onChange={(e) => setAcepto(e.target.checked)} />
              <span>{t.acepto}</span>
            </label>

            {PAYPAL_CLIENT_ID ? (
              <div className="tk-pay">
                {!paypalListo && <p className="tk-loading">{t.cargandoPaypal}</p>}
                <div ref={botones} aria-busy={enviando} />
              </div>
            ) : (
              <div className="tk-pay">
                <button type="submit" className="tn-btn tk-submit" disabled={enviando}>
                  {enviando ? t.registrando : t.confirmar}
                </button>
                <p className="tk-manual">
                  {t.manualAntes}
                  <b>{EMAIL_COMPROBANTE}</b>
                  {t.manualDespues}
                </p>
              </div>
            )}

            {error && <p className="tn-error" role="alert">{error}</p>}
          </form>
        </div>
      )}

      <style jsx global>{`
        .tk {
          display: grid;
          grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr);
          gap: 2.5rem;
          align-items: start;
          margin-top: 1.5rem;
        }
        .tk-line {
          display: grid;
          grid-template-columns: 120px minmax(0, 1fr) auto auto;
          align-items: center;
          gap: 1rem;
          padding: 1rem 0;
          border-bottom: 1px solid var(--border);
        }
        .tk-line:first-child {
          border-top: 1px solid var(--border);
        }
        .tk-thumb {
          display: block;
          overflow: hidden;
          aspect-ratio: 2 / 1;
          border-radius: 0.4rem;
          background: #d9d9d9;
        }
        .tk-thumb img {
          width: 100%;
          height: 100%;
          margin: 0;
          object-fit: cover;
        }
        .tk-desc {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          min-width: 0;
        }
        .tk-desc code {
          color: var(--muted);
          font-size: 0.78rem;
        }
        .tk-name {
          color: var(--text-strong);
          font-variation-settings: 'wght' 650;
        }
        .tk-price {
          color: var(--text-strong);
          white-space: nowrap;
        }
        .tk-remove {
          display: inline-flex;
          padding: 0.4rem;
          border: 0;
          border-radius: 0.4rem;
          background: transparent;
          color: var(--muted);
          cursor: pointer;
        }
        .tk-remove:hover {
          color: #c0392b;
          background: rgba(220, 90, 90, 0.1);
        }
        .tk-note {
          margin: 1rem 0 0;
          color: var(--muted);
          font-size: 0.82rem;
        }

        .tk-checkout {
          position: sticky;
          top: 84px;
          padding: 1.5rem;
          border: 1px solid var(--border);
          border-radius: 1rem;
          background: var(--surface);
        }
        .tk-checkout h2 {
          margin: 0 0 1rem;
          font-size: 1.15rem;
          color: var(--text-strong);
        }
        .tk-fields {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }
        .tk-fields label {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          font-size: 0.8rem;
          color: var(--muted);
        }
        .tk-fields .wide {
          grid-column: 1 / -1;
        }
        .tk-fields input,
        .tk-fields textarea {
          width: 100%;
          padding: 0.55rem 0.7rem;
          border: 1px solid var(--border);
          border-radius: 0.5rem;
          background: var(--surface-2);
          color: var(--text-strong);
          font: inherit;
          font-size: 0.92rem;
        }
        .tk-fields input:focus,
        .tk-fields textarea:focus {
          outline: 2px solid var(--tint-border);
          border-color: var(--accent-2);
        }
        .tk-total {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin: 1.25rem 0 1rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border);
        }
        .tk-total b {
          font-size: 1.5rem;
          color: var(--text-strong);
        }
        .tk-accept {
          display: flex;
          gap: 0.6rem;
          align-items: flex-start;
          margin-bottom: 1rem;
          font-size: 0.82rem;
          cursor: pointer;
        }
        .tk-accept input {
          margin-top: 0.2rem;
        }
        .tk-submit {
          width: 100%;
        }
        .tk-manual,
        .tk-loading {
          margin: 0.75rem 0 0;
          color: var(--muted);
          font-size: 0.82rem;
          line-height: 1.5;
        }

        @media (max-width: 900px) {
          .tk {
            grid-template-columns: minmax(0, 1fr);
          }
          .tk-checkout {
            position: static;
          }
        }
        @media (max-width: 560px) {
          .tk-line {
            grid-template-columns: 84px minmax(0, 1fr) auto;
          }
          .tk-price {
            grid-column: 2;
          }
          .tk-remove {
            grid-row: 1;
            grid-column: 3;
          }
          .tk-fields {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Marco>
  )
}
