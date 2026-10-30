import React from 'react'
import Icon from '../Icon'
import { tr } from '../../lib/idioma'

export default function Accion({ accion, lang }) {
  return (
    <a
      className={`lb-btn ${accion.principal ? 'lb-btn-main' : ''}`}
      href={accion.href}
      download={accion.descarga}
      target={accion.descarga ? undefined : '_blank'}
      rel={accion.descarga ? undefined : 'noopener noreferrer'}
    >
      <Icon name={accion.icono} size={16} /> {tr(accion.texto, lang)}
    </a>
  )
}
