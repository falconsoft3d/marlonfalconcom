import React, { useState } from 'react'
import Icon from '../Icon'

// Botón que copia un texto y confirma durante un momento
export default function Copiar({ texto, children, className }) {
  const [copiado, setCopiado] = useState(false)

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(texto)
      setCopiado(true)
      setTimeout(() => setCopiado(false), 1800)
    } catch (e) {
      window.prompt('Copia este texto:', texto)
    }
  }

  return (
    <button type="button" className={className} onClick={copiar}>
      <Icon name={copiado ? 'check' : 'file'} size={15} /> {copiado ? 'Copiado' : children}
    </button>
  )
}
