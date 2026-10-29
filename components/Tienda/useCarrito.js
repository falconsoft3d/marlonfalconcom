import { useCallback, useEffect, useState } from 'react'

const CLAVE = 'tienda-carrito'
const EVENTO = 'tienda-carrito'

function leer() {
  try {
    const lineas = JSON.parse(localStorage.getItem(CLAVE) || '[]')
    return Array.isArray(lineas) ? lineas : []
  } catch (e) {
    return []
  }
}

function guardar(lineas) {
  try {
    localStorage.setItem(CLAVE, JSON.stringify(lineas))
  } catch (e) {}
  window.dispatchEvent(new Event(EVENTO))
}

// Carrito en localStorage, sincronizado entre componentes y pestañas.
// Cada línea es un módulo en una versión: una licencia, sin cantidades.
export default function useCarrito() {
  const [lineas, setLineas] = useState([])

  useEffect(() => {
    const sincronizar = () => setLineas(leer())
    sincronizar()
    window.addEventListener(EVENTO, sincronizar)
    window.addEventListener('storage', sincronizar)
    return () => {
      window.removeEventListener(EVENTO, sincronizar)
      window.removeEventListener('storage', sincronizar)
    }
  }, [])

  const anadir = useCallback((m) => {
    const actuales = leer()
    if (actuales.some((l) => l.clave === m.clave)) return
    const { clave, tecnico, version, nombre, precio, moneda, imagen } = m
    guardar([...actuales, { clave, tecnico, version, nombre, precio, moneda, imagen }])
  }, [])

  const quitar = useCallback((clave) => guardar(leer().filter((l) => l.clave !== clave)), [])
  const vaciar = useCallback(() => guardar([]), [])
  const tiene = useCallback((clave) => lineas.some((l) => l.clave === clave), [lineas])

  const total = lineas.reduce((s, l) => s + l.precio, 0)

  return { lineas, total, anadir, quitar, vaciar, tiene }
}
