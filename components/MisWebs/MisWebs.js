import React, { useEffect, useState } from 'react'

const toUrl = (web) => (/^https?:\/\//.test(web) ? web : `https://${web}`)

export default function MisWebs() {
  const [webs, setWebs] = useState([])

  useEffect(() => {
    fetch('/api/mis-webs')
      .then((res) => res.json())
      .then((json) => setWebs(json.data || []))
      .catch(() => setWebs([]))
  }, [])

  if (!webs.length) return null

  return (
    <div className="mis-webs">
      <h4>Mis webs</h4>
      <ul>
        {webs.map((item) => (
          <li key={item.id}>
            <a href={toUrl(item.web)} target="_blank" rel="noopener noreferrer">
              {item.nombre}
            </a>
            {item.descripcion && <span>{item.descripcion}</span>}
          </li>
        ))}
      </ul>

      <style jsx>{`
        .mis-webs {
          padding: 2.5rem 0;
          border-top: 1px solid var(--border);
        }
        .mis-webs h4 {
          margin: 0 0 1rem;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--text-strong);
        }
        .mis-webs ul {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 0.75rem;
          padding: 0;
          margin: 0;
          list-style-type: none !important;
        }
        .mis-webs li {
          margin: 0;
          padding: 0.75rem 0.9rem;
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          border: 1px solid var(--border);
          border-radius: 0.75rem;
          background: var(--surface-2);
          transition: border-color 0.15s;
        }
        .mis-webs li::before {
          content: none;
        }
        .mis-webs li:hover {
          border-color: var(--accent-2);
        }
        .mis-webs a {
          color: var(--text-strong);
          text-decoration: none;
          font-weight: 600;
        }
        .mis-webs a:hover {
          color: var(--accent-2);
        }
        .mis-webs span {
          font-size: 0.8rem;
          color: var(--muted);
        }
      `}</style>
    </div>
  )
}
