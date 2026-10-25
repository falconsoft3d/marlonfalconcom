import React, { useEffect, useRef } from 'react'

const CARACTERES = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789<>/{}=+*'
const TAM = 14
const FPS = 24

// Lluvia de caracteres al estilo Matrix sobre un canvas transparente.
// Solo anima mientras `activo` es true; al desactivarse se desvanece.
export default function MatrixRain({ activo }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1
    const width = canvas.offsetWidth
    const height = canvas.offsetHeight
    // Redimensionar borra el canvas: solo se hace si cambia el tamaño, para que la estela se desvanezca al salir
    if (canvas.width !== Math.round(width * dpr) || canvas.height !== Math.round(height * dpr)) {
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    const columnas = Math.ceil(width / TAM)
    const gotas = Array.from({ length: columnas }, () => Math.random() * -20)
    let frame
    let ultimo = 0
    let apagado = 0

    const pintar = (t) => {
      frame = requestAnimationFrame(pintar)
      if (t - ultimo < 1000 / FPS) return
      ultimo = t

      // Borra un poco lo anterior para dejar estela sin oscurecer la foto
      ctx.globalCompositeOperation = 'destination-out'
      ctx.fillStyle = `rgba(0, 0, 0, ${activo ? 0.12 : 0.25})`
      ctx.fillRect(0, 0, width, height)
      ctx.globalCompositeOperation = 'source-over'

      if (!activo) {
        if (++apagado > 20) {
          ctx.clearRect(0, 0, width, height)
          cancelAnimationFrame(frame)
        }
        return
      }

      ctx.font = `${TAM}px ui-monospace, Menlo, monospace`
      gotas.forEach((y, i) => {
        const x = i * TAM
        const char = CARACTERES[Math.floor(Math.random() * CARACTERES.length)]
        ctx.fillStyle = '#d6ffd9'
        ctx.shadowColor = '#00ff41'
        ctx.shadowBlur = 8
        ctx.fillText(char, x, y * TAM)
        ctx.shadowBlur = 0
        ctx.fillStyle = 'rgba(0, 255, 65, 0.85)'
        ctx.fillText(CARACTERES[(i * 7 + Math.floor(y)) % CARACTERES.length], x, (y - 1) * TAM)
        gotas[i] = y * TAM > height && Math.random() > 0.95 ? 0 : y + 1
      })
    }

    frame = requestAnimationFrame(pintar)
    return () => cancelAnimationFrame(frame)
  }, [activo])

  return <canvas ref={canvasRef} className="matrix-rain" aria-hidden="true" />
}
