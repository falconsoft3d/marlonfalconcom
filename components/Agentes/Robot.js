import React from 'react'

const hash = (texto) => [...texto].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7)

export const colorAgente = (nombre) => `hsl(${hash(nombre) % 360} 62% 56%)`

function Ojos({ estado }) {
  if (estado === 'terminado') {
    return <path d="M12 18q3-4 6 0M22 18q3-4 6 0" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
  }
  if (estado === 'bloqueado' || estado === 'error') {
    return <path d="m13 14 4 4m0-4-4 4m10-4 4 4m0-4-4 4" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
  }
  if (estado === 'esperando') {
    return <path d="M12 17h6M22 17h6" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
  }
  return (
    <g className="ag-ojos" fill="#fff">
      <circle cx="15" cy="16" r="2.6" />
      <circle cx="25" cy="16" r="2.6" />
    </g>
  )
}

// Cada agente tiene su robot: el nombre decide el color, la cabeza y la antena
export default function Robot({ nombre, estado, size = 34 }) {
  const h = hash(nombre)
  const color = colorAgente(nombre)
  const antena = 2 + ((h >> 3) % 3) * 2

  return (
    <svg className={`ag-robot ${estado}`} viewBox="0 0 40 44" width={size} height={(size * 44) / 40} aria-hidden="true">
      <path d={`M20 8V${8 - antena}`} stroke={color} strokeWidth="2" />
      <circle className="ag-antena" cx="20" cy={7 - antena} r="2" fill={color} />
      <rect x="7" y="8" width="26" height="18" rx={[3, 7, 11][h % 3]} fill={color} />
      <Ojos estado={estado} />
      <rect x="13" y="28" width="14" height="8" rx="3" fill={color} opacity="0.75" />
      <rect className="ag-pie izq" x="14" y="37" width="4" height="6" rx="2" fill={color} />
      <rect className="ag-pie der" x="22" y="37" width="4" height="6" rx="2" fill={color} />
    </svg>
  )
}
