import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

const useIsoLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

// Cuenta animada hasta `fin` cuando el número entra en pantalla.
// En el servidor se renderiza el valor final, así se ve bien sin JavaScript.
export default function CountUp({ fin, sufijo = '', duracion = 1800 }) {
  const ref = useRef(null)
  const [valor, setValor] = useState(fin)

  useIsoLayoutEffect(() => {
    // Sin animación si el usuario la reduce o si es un navegador sin interfaz (capturas, vistas previas)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (/HeadlessChrome/.test(navigator.userAgent)) return
    setValor(0)

    let frame
    const animar = () => {
      const inicio = performance.now()
      const paso = (ahora) => {
        const t = Math.min(1, (ahora - inicio) / duracion)
        setValor(Math.round(easeOutCubic(t) * fin))
        if (t < 1) frame = requestAnimationFrame(paso)
      }
      frame = requestAnimationFrame(paso)
    }

    const observer = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          observer.disconnect()
          animar()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(ref.current)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [fin, duracion])

  return (
    <span ref={ref}>
      {valor}
      {sufijo}
    </span>
  )
}
