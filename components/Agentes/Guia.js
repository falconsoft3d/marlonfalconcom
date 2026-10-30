import React from 'react'
import Copiar from './Copiar'
import { ESTADOS, instrucciones, urlApi } from './instrucciones'

const CAMPOS = [
  ['agente', 'Obligatorio. Nombre corto y siempre el mismo: identifica la fila.'],
  ['rol', 'Para qué sirve ese agente.'],
  ['estado', Object.keys(ESTADOS).join(', ') + '.'],
  ['tarea', 'Lo que está haciendo ahora, en una frase.'],
  ['url', 'Dónde está probando la app, con su puerto, por ejemplo http://localhost:3000. Se conserva hasta que envíe otra; con una cadena vacía se quita.'],
  ['puerto', 'Alternativa a url si solo conoce el puerto: se muestra como http://localhost:<puerto>.'],
  ['hechas', 'Lista completa de tareas terminadas.'],
  ['pendientes', 'Lista completa de tareas por realizar.'],
  ['progreso', 'De 0 a 100. Solo hace falta si no se envían listas: con ellas se calcula solo.']
]

// Documentación de la Torre de control. Sin token (dashboard) muestra el formato con un marcador.
export default function Guia({ origen, token }) {
  const texto = instrucciones(origen, token || '<token>')

  return (
    <div className="ag-guia">
      <section>
        <h3>1. Conecta a Claude</h3>
        <p>
          Pega este texto en Claude Code junto con tu encargo. Cada agente aparecerá como una fila en cuanto envíe su primer informe; no hay que crearlos antes.
        </p>
        <pre>{texto}</pre>
        {token && (
          <Copiar className="ag-btn" texto={texto}>
            Copiar instrucciones para Claude
          </Copiar>
        )}
      </section>

      <section>
        <h3>2. Qué envía cada agente</h3>
        <p>
          Un <code>POST</code> a <code>{urlApi(origen, token || '<token>')}</code> con este JSON. Cada informe sustituye al anterior de ese agente, y con el mismo token un{' '}
          <code>GET</code> devuelve el estado de toda la sala.
        </p>
        <div className="ag-tabla">
          <table>
            <tbody>
              {CAMPOS.map(([campo, explicacion]) => (
                <tr key={campo}>
                  <th>
                    <code>{campo}</code>
                  </th>
                  <td>{explicacion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h3>3. Plugin de Chrome</h3>
        <p>Abre la sala en el panel lateral de Chrome mientras trabajas, muestra el porcentaje sobre el icono y te avisa si un agente se bloquea, falla o si termina todo el equipo.</p>
        <ol>
          <li>
            <a href="/torre-de-control-chrome.zip" download>
              Descarga el plugin
            </a>{' '}
            y descomprímelo en una carpeta que no vayas a borrar.
          </li>
          <li>
            Abre <code>chrome://extensions</code> y activa el <b>Modo de desarrollador</b>.
          </li>
          <li>
            Pulsa <b>Cargar descomprimida</b> y elige esa carpeta.
          </li>
          <li>Pulsa el icono del plugin y pega la URL de la sala o solo el token. Puedes seguir varias salas a la vez.</li>
        </ol>
      </section>

      <section>
        <h3>4. Resumen en el móvil</h3>
        <p>
          La pestaña Agentes del dashboard tiene una URL con todas las salas abiertas, ordenadas por urgencia. Se actualiza sola, y al tocar una torre entras en su sala. En el móvil, ábrela y elige <b>Añadir a pantalla de inicio</b>.
        </p>
      </section>

      <section>
        <h3>Seguridad</h3>
        <ul>
          <li>La URL es la contraseña: quien la tenga puede ver la sala y escribir en ella.</li>
          <li>Pide a tus agentes que no envíen claves ni datos de clientes.</li>
          <li>Al cerrar una sala desde el dashboard, la URL deja de funcionar al momento, también para Claude y el plugin.</li>
          <li>La URL del resumen abre todas las salas: guárdala solo en tu móvil. Si se filtra, usa <b>Cambiar URL</b> en el dashboard.</li>
          <li>Si un agente lleva 3 minutos sin informar y sigue trabajando, su fila muestra «Sin señal».</li>
        </ul>
      </section>

      <style jsx global>{`
        .ag-guia {
          display: grid;
          gap: 1.75rem;
          color: var(--text);
          font-size: 0.92rem;
          line-height: 1.55;
        }
        .ag-guia h3 {
          margin: 0 0 0.4rem;
          color: var(--text-strong);
          font-size: 1rem;
        }
        .ag-guia p {
          margin: 0 0 0.75rem;
        }
        .ag-guia pre {
          max-height: 300px;
          margin: 0 0 0.75rem;
          padding: 0.9rem 1rem;
          overflow: auto;
          border: 1px solid var(--border);
          border-radius: 0.6rem;
          background: var(--surface-2);
          color: var(--text-strong);
          font-size: 0.78rem;
          line-height: 1.5;
          white-space: pre-wrap;
          word-break: break-word;
        }
        .ag-guia code {
          padding: 0.1rem 0.35rem;
          border-radius: 0.3rem;
          background: var(--surface-2);
          font-size: 0.85em;
          word-break: break-all;
        }
        .ag-guia a {
          color: var(--accent-2);
        }
        .ag-guia ol,
        .ag-guia ul {
          display: grid;
          gap: 0.3rem;
          margin: 0;
          padding-left: 1.25rem;
        }
        .ag-tabla {
          overflow-x: auto;
        }
        .ag-guia table {
          width: 100%;
          border-collapse: collapse;
        }
        .ag-guia th,
        .ag-guia td {
          padding: 0.45rem 0.6rem;
          border-top: 1px solid var(--border);
          text-align: left;
          vertical-align: top;
        }
        .ag-guia th {
          white-space: nowrap;
        }
        .ag-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          min-height: 38px;
          padding: 0 1rem;
          border: 1px solid transparent;
          border-radius: 999px;
          background: var(--accent);
          color: var(--on-accent);
          font: inherit;
          font-size: 0.88rem;
          font-variation-settings: 'wght' 650;
          cursor: pointer;
        }
        .ag-btn:hover {
          background: var(--accent-hover);
        }
      `}</style>
    </div>
  )
}
