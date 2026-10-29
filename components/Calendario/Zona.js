import React, { useEffect, useMemo, useState } from 'react'
import Icon from '../Icon'
import { ZONA_MADRID, etiquetaDesfase, listaZonas, nombreZona, zonaDelNavegador, zonaValida } from '../../lib/calendario/zona'
import useTextos from './textos'

const CLAVE = 'calendario-zona'

// Zona en la que el visitante ve las horas: la que eligió la última vez o la de su navegador
export function useZona() {
  const [zona, setZonaActual] = useState(ZONA_MADRID)
  const [delNavegador, setDelNavegador] = useState(ZONA_MADRID)

  useEffect(() => {
    const navegador = zonaDelNavegador()
    setDelNavegador(navegador)
    let guardada = null
    try {
      guardada = localStorage.getItem(CLAVE)
    } catch (e) {}
    setZonaActual(zonaValida(guardada) ? guardada : navegador)
  }, [])

  const setZona = (siguiente) => {
    if (!zonaValida(siguiente)) return
    try {
      localStorage.setItem(CLAVE, siguiente)
    } catch (e) {}
    setZonaActual(siguiente)
  }

  return { zona, setZona, delNavegador }
}

export function SelectorZona({ zona, setZona, delNavegador }) {
  const t = useTextos()
  const zonas = useMemo(() => {
    const todas = [...new Set([ZONA_MADRID, delNavegador, zona, ...listaZonas()])]
    return todas.map((z) => [z, `${z.replace(/_/g, ' ')} (${etiquetaDesfase(z)})`])
  }, [delNavegador, zona])

  const atajos = [[ZONA_MADRID, t.zonaMadrid]]
  if (delNavegador !== ZONA_MADRID) atajos.push([delNavegador, `${t.zonaTuya} · ${nombreZona(delNavegador)}`])

  return (
    <div className="cal-zona">
      <label className="cal-zona-select">
        <Icon name="globe" size={16} />
        <span className="cal-sr">{t.zonaHoraria}</span>
        <select value={zona} onChange={(e) => setZona(e.target.value)} aria-label={t.zonaHoraria}>
          {zonas.map(([z, etiqueta]) => (
            <option key={z} value={z}>
              {etiqueta}
            </option>
          ))}
        </select>
      </label>
      <div className="cal-zona-atajos">
        {atajos.map(([z, etiqueta]) => (
          <button key={z} type="button" className={`cal-chip${zona === z ? ' on' : ''}`} onClick={() => setZona(z)} aria-pressed={zona === z}>
            {etiqueta}
          </button>
        ))}
      </div>
    </div>
  )
}
