import React, { useEffect, useState } from 'react'
import Icon from '../Icon'

const COLOR = {
  traje: '#1d2b4f',
  sombra: '#0f1a33',
  piel: '#f1c7a0',
  rojo: '#d62b2b',
  azul: '#2b5fd6',
  hoja: '#dfe6ee',
  naranja: '#f08a24'
}

// Un ninja mirando a la derecha, con la katana hacia delante. El de la derecha es el mismo en espejo.
function Ninja() {
  return (
    <g>
      {/* Cintas del pañuelo al viento */}
      <path className="nr-cinta" d="M-12 12 C-30 6 -38 16 -52 8 M-12 15 C-28 16 -36 26 -48 22" stroke={COLOR.rojo} strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* Piernas en guardia */}
      <path d="M-4 66 L-24 88 L-30 110 M6 66 L22 86 L30 110" stroke={COLOR.traje} strokeWidth="11" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M-36 110 H-24 M24 110 H38" stroke={COLOR.sombra} strokeWidth="6" strokeLinecap="round" />
      {/* Cuerpo y fajín */}
      <path d="M-13 30 Q0 24 13 30 L11 70 Q0 74 -11 70 Z" fill={COLOR.traje} />
      <path d="M-12 56 L12 50 L12 56 L-12 62 Z" fill="#fff" />
      <path d="M-10 30 L10 48" stroke="#fff" strokeWidth="3" />
      {/* Brazo de atrás */}
      <path d="M-8 36 L-22 50 L-16 60" stroke={COLOR.sombra} strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Katana */}
      <path d="M34 38 L98 4" stroke={COLOR.hoja} strokeWidth="4" strokeLinecap="round" />
      <path d="M36 37 L98 4" stroke="#9aa6b2" strokeWidth="1" />
      <path d="M24 44 L34 38" stroke={COLOR.sombra} strokeWidth="5" strokeLinecap="round" />
      <path d="M31 34 L37 43" stroke={COLOR.naranja} strokeWidth="3" strokeLinecap="round" />
      {/* Brazo de la espada */}
      <path d="M6 36 L20 46 L28 42" stroke={COLOR.traje} strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Cabeza, máscara y pañuelo rojo, blanco y azul */}
      <circle cx="0" cy="16" r="14" fill={COLOR.traje} />
      <path d="M-13 10 Q0 4 14 10 L14 16 Q0 12 -13 16 Z" fill={COLOR.rojo} />
      <path d="M-13 13 Q0 8 14 13" stroke="#fff" strokeWidth="1.6" fill="none" />
      <path d="M-4 18 Q6 15 14 18 L14 23 Q6 21 -4 23 Z" fill={COLOR.piel} />
      <path d="M4 20.5 L9 19.5" stroke={COLOR.sombra} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M-13 24 Q0 30 14 24" stroke={COLOR.azul} strokeWidth="3" fill="none" />
    </g>
  )
}

// Captcha local: la suma está escondida entre dos ninjas luchando.
// Pide un reto firmado a /api/calendario/reto y devuelve { reto, respuesta } con onChange.
export default function NinjaReto({ onChange, renovar, t }) {
  const [reto, setReto] = useState(null)
  const [respuesta, setRespuesta] = useState('')

  const pedir = () => {
    setReto(null)
    setRespuesta('')
    onChange({ reto: '', respuesta: '' })
    fetch('/api/calendario/reto')
      .then((res) => res.json())
      .then(setReto)
      .catch(() => {})
  }

  useEffect(pedir, [renovar])

  const escribir = (valor) => {
    const limpio = valor.replace(/\D/g, '').slice(0, 2)
    setRespuesta(limpio)
    onChange({ reto: reto?.reto || '', respuesta: limpio })
  }

  return (
    <div className="nr">
      <span className="nr-titulo">{t.retoTitulo}</span>
      <div className="nr-escena">
        <svg viewBox="0 0 320 150" role="img" aria-label={reto ? t.retoAria(reto.a, reto.b) : t.cargando}>
          <defs>
            <radialGradient id="nr-luz" cx="50%" cy="20%" r="60%">
              <stop offset="0" stopColor="#ffd27a" stopOpacity="0.9" />
              <stop offset="1" stopColor="#ffd27a" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* Luna y montañas al atardecer: los ninjas destacan como siluetas */}
          <circle cx="160" cy="40" r="34" className="nr-luna" />
          <path d="M0 150 L0 112 L48 84 L92 108 L138 78 L190 106 L236 82 L282 104 L320 90 L320 150 Z" className="nr-monte" />
          <ellipse cx="160" cy="138" rx="140" ry="8" className="nr-suelo" />
          <g className="nr-izq">
            <g transform="translate(66 26)">
              <Ninja />
            </g>
          </g>
          <g className="nr-der">
            <g transform="translate(254 26) scale(-1 1)">
              <Ninja />
            </g>
          </g>
          {/* Chispas donde chocan las katanas */}
          <g className="nr-chispas" transform="translate(160 32)">
            <circle r="18" fill="url(#nr-luz)" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((g) => (
              <path key={g} d="M0 -6 L0 -14" transform={`rotate(${g})`} stroke="#ffd27a" strokeWidth="2.2" strokeLinecap="round" />
            ))}
          </g>
          {/* La suma, entre los dos */}
          <g transform="translate(160 96)">
            <rect x="-46" y="-22" width="92" height="40" rx="10" className="nr-placa" />
            <text y="7" textAnchor="middle" className="nr-suma">
              {reto ? `${reto.a} + ${reto.b}` : '· · ·'}
            </text>
          </g>
        </svg>
      </div>
      <div className="nr-fila">
        <label className="cal-field nr-campo">
          <span>{t.retoPregunta}</span>
          <input
            required
            inputMode="numeric"
            autoComplete="off"
            pattern="[0-9]*"
            value={respuesta}
            disabled={!reto}
            onChange={(e) => escribir(e.target.value)}
            placeholder="?"
          />
        </label>
        <button type="button" className="cal-btn ghost nr-otra" onClick={pedir} title={t.retoOtra} aria-label={t.retoOtra}>
          <Icon name="refresh" size={16} />
        </button>
      </div>

      <style jsx global>{`
        .nr {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .nr-titulo {
          color: var(--text-strong);
          font-size: 0.85rem;
          font-variation-settings: 'wght' 600;
        }
        .nr-escena {
          border: 1px solid var(--border);
          border-radius: 0.9rem;
          background: linear-gradient(180deg, #f6d896 0%, #f2b79b 55%, #e6936f 100%);
          overflow: hidden;
        }
        .nr-luna {
          fill: #fff6e0;
          opacity: 0.85;
        }
        .nr-monte {
          fill: #c97a63;
          opacity: 0.45;
        }
        .nr-escena svg {
          display: block;
          width: 100%;
          height: auto;
          max-height: 170px;
        }
        .nr-suelo {
          fill: rgba(29, 43, 79, 0.3);
        }
        .nr-placa {
          fill: #fbf8f3;
          stroke: #1d2b4f;
          stroke-width: 3;
        }
        .nr-suma {
          fill: #1d2b4f;
          font-size: 24px;
          font-weight: 800;
          font-family: inherit;
          letter-spacing: 0.04em;
        }
        .nr-izq {
          animation: nr-ataque-izq 1.6s ease-in-out infinite;
        }
        .nr-der {
          animation: nr-ataque-der 1.6s ease-in-out infinite;
        }
        .nr-chispas {
          transform-box: fill-box;
          animation: nr-chispa 1.6s ease-in-out infinite;
        }
        .nr-cinta {
          animation: nr-viento 0.8s ease-in-out infinite alternate;
        }
        @keyframes nr-ataque-izq {
          0%, 100% { transform: translateX(-6px); }
          45%, 55% { transform: translateX(4px); }
        }
        @keyframes nr-ataque-der {
          0%, 100% { transform: translateX(6px); }
          45%, 55% { transform: translateX(-4px); }
        }
        @keyframes nr-chispa {
          0%, 35%, 70%, 100% { opacity: 0; }
          48% { opacity: 1; }
        }
        @keyframes nr-viento {
          from { transform: translateY(0); }
          to { transform: translateY(2px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .nr-izq,
          .nr-der,
          .nr-chispas,
          .nr-cinta {
            animation: none;
          }
          .nr-chispas {
            opacity: 1;
          }
        }
        .nr-fila {
          display: flex;
          align-items: flex-end;
          gap: 0.5rem;
        }
        .nr-campo {
          flex: 1;
        }
        .nr-campo input {
          font-size: 1.1rem;
          letter-spacing: 0.1em;
        }
        .nr-otra {
          width: 46px;
          min-height: 46px;
          padding: 0;
        }
      `}</style>
    </div>
  )
}
