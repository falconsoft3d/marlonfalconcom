import React, { useEffect, useState } from 'react'
import Icon from '../Icon'
import { api } from './api'

// Avisos por Telegram de reservas y mensajes de contacto: estado, guía, detector de grupos y prueba
export default function AvisosTelegram() {
  const [info, setInfo] = useState(null)
  const [grupos, setGrupos] = useState(null)
  const [estado, setEstado] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    api('telegram')
      .then(setInfo)
      .catch((e) => setError(e.message))
  }, [])

  const detectar = async () => {
    setEstado('buscando')
    setError('')
    try {
      const r = await api('telegram', { query: { grupos: '1' } })
      setGrupos(r)
    } catch (e) {
      setError(e.message)
    }
    setEstado('')
  }

  const probar = async (chatId) => {
    setEstado(`enviando-${chatId || ''}`)
    setError('')
    try {
      await api('telegram', { method: 'POST', body: chatId ? { chatId } : {} })
      setEstado('enviado')
    } catch (e) {
      setError(e.message)
      setEstado('')
    }
  }

  if (!info && !error) return null

  return (
    <div className="db-card db-stack" style={{ marginBottom: '1.5rem' }}>
      <div className="db-head" style={{ marginBottom: 0 }}>
        <div>
          <h3>Avisos por Telegram</h3>
          <p className="db-muted">
            {info?.configurado
              ? `Activados: cada reserva nueva o cancelada y cada mensaje de /contacto llega al grupo ${info.grupo}.`
              : info?.bot
              ? 'Falta el grupo: añade TELEGRAM_CHAT_ID en Vercel (usa «Detectar grupo»).'
              : 'Desactivados: crea un bot y añádelo a un grupo para recibir un aviso con cada reserva.'}
          </p>
        </div>
        <div className="db-row">
          {estado === 'enviado' && <span className="db-ok">Enviado, revisa Telegram</span>}
          {info?.bot && (
            <button type="button" className="db-btn ghost" onClick={detectar} disabled={!!estado && estado !== 'enviado'}>
              <Icon name="search" size={15} /> {estado === 'buscando' ? 'Buscando…' : 'Detectar grupo'}
            </button>
          )}
          {info?.configurado && (
            <button type="button" className="db-btn ghost" onClick={() => probar()} disabled={!!estado && estado !== 'enviado'}>
              <Icon name="telegram" size={15} /> {estado === 'enviando-' ? 'Enviando…' : 'Enviar prueba'}
            </button>
          )}
        </div>
      </div>
      {error && <p className="db-error">{error}</p>}

      {grupos && (
        <div className="tg-grupos">
          {!grupos.grupos.length && (
            <p className="db-muted">
              No veo grupos todavía. Escribe <code>/start@{grupos.bot}</code> en el grupo y vuelve a pulsar «Detectar grupo».
            </p>
          )}
          {grupos.grupos.map((g) => (
            <div key={g.id} className="tg-grupo">
              <span>
                <b>{g.titulo}</b> <code>{g.id}</code>
              </span>
              <button type="button" className="db-btn ghost" onClick={() => probar(g.id)} disabled={!!estado && estado !== 'enviado'}>
                {estado === `enviando-${g.id}` ? 'Enviando…' : 'Probar aquí'}
              </button>
            </div>
          ))}
        </div>
      )}

      {info && !info.configurado && (
        <details className="tg-guia" open>
          <summary>Activarlos (5 minutos)</summary>
          <ol>
            <li>
              En Telegram abre <a href="https://t.me/BotFather" target="_blank" rel="noopener noreferrer">@BotFather</a>, envía <code>/newbot</code> y sigue los
              pasos. Te dará el <b>token</b> del bot (el agente).
            </li>
            <li>Crea un grupo (p. ej. «Reservas marlonfalcon.com»), añade el bot y escribe cualquier mensaje.</li>
            <li>
              En Vercel → Settings → Environment Variables añade <code>TELEGRAM_BOT_TOKEN</code> con el token y vuelve a desplegar.
            </li>
            <li>
              Vuelve aquí, pulsa <b>Detectar grupo</b> y copia el id del grupo (empieza por <code>-</code>) en <code>TELEGRAM_CHAT_ID</code>. Despliega otra vez.
            </li>
            <li>Pulsa «Enviar prueba».</li>
          </ol>
        </details>
      )}

      <style jsx global>{`
        .tg-guia {
          padding: 0.75rem 1rem;
          border: 1px solid var(--tint-border);
          border-radius: 0.75rem;
          background: var(--tint);
          font-size: 0.9rem;
        }
        .tg-guia summary {
          color: var(--text-strong);
          font-variation-settings: 'wght' 600;
          cursor: pointer;
        }
        .tg-guia ol {
          display: grid;
          gap: 0.4rem;
          margin: 0.75rem 0;
          padding-left: 1.25rem;
        }
        .tg-guia li {
          margin: 0;
        }
        .tg-grupos {
          display: grid;
          gap: 0.5rem;
        }
        .tg-grupo {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          padding: 0.6rem 0.9rem;
          border: 1px solid var(--border);
          border-radius: 0.65rem;
          background: var(--surface-2);
        }
      `}</style>
    </div>
  )
}
