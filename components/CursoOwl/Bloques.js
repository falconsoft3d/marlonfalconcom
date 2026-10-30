import React, { useState } from 'react'

// Convierte `código`, **negrita** y [texto](url) del contenido de las lecciones
export function Texto({ children }) {
  const partes = children.split(/(`[^`]+`|\*\*.+?\*\*|\[[^\]]+\]\([^)]+\))/g)
  return partes.map((parte, i) => {
    if (/^`.+`$/.test(parte)) return <code key={i}>{parte.slice(1, -1)}</code>
    if (/^\*\*.+\*\*$/.test(parte)) return <b key={i}>{<Texto>{parte.slice(2, -2)}</Texto>}</b>
    const enlace = parte.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (enlace) return <a key={i} href={enlace[2]}>{enlace[1]}</a>
    return parte
  })
}

function Codigo({ titulo, codigo }) {
  const [copiado, setCopiado] = useState(false)

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(codigo)
      setCopiado(true)
      setTimeout(() => setCopiado(false), 1600)
    } catch (e) {}
  }

  return (
    <figure className="co-codigo">
      <figcaption>
        <span>{titulo}</span>
        <button type="button" className="co-copiar" onClick={copiar}>
          {copiado ? 'Copiado' : 'Copiar'}
        </button>
      </figcaption>
      <pre>
        <code>{codigo}</code>
      </pre>
    </figure>
  )
}

function Tabla({ cabecera, filas }) {
  return (
    <div className="co-tabla">
      <table>
        <thead>
          <tr>
            {cabecera.map((c) => (
              <th key={c}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filas.map((fila, i) => (
            <tr key={i}>
              {fila.map((celda, j) => (
                <td key={j}>
                  <Texto>{celda}</Texto>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Pinta un bloque de una lección. En el manual los ejercicios salen con la solución a la vista.
export default function Bloque({ bloque, archivos, impreso }) {
  const [tipo, a, b] = bloque
  switch (tipo) {
    case 'p':
      return (
        <p>
          <Texto>{a}</Texto>
        </p>
      )
    case 'lista':
      return (
        <ul>
          {a.map((item, i) => (
            <li key={i}>
              <Texto>{item}</Texto>
            </li>
          ))}
        </ul>
      )
    case 'aviso':
      return (
        <aside className="co-aviso">
          <Texto>{a}</Texto>
        </aside>
      )
    case 'tabla':
      return <Tabla cabecera={a} filas={b} />
    case 'archivo':
      return <Codigo titulo={a} codigo={archivos[a]} />
    case 'fragmento':
      return <Codigo titulo={a} codigo={b} />
    case 'ejercicio':
      return (
        <div className="co-ejercicio">
          <h3>Ejercicio</h3>
          <p>
            <Texto>{a}</Texto>
          </p>
          <details open={impreso}>
            <summary>Ver la solución</summary>
            <pre>
              <code>{b}</code>
            </pre>
          </details>
        </div>
      )
    default:
      return null
  }
}
