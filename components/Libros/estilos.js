import css from 'styled-jsx/css'

// Estilos comunes de /libros y de la ficha de cada libro
export default css.global`
    /* La portada se presenta como un libro: lomo con luz y sombra al apoyarlo */
    .lb-u .lb-cover {
      position: relative;
      display: block;
      overflow: hidden;
      border-radius: 3px 8px 8px 3px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35), 0 18px 32px -14px rgba(0, 0, 0, 0.6);
      transition: transform 0.3s, box-shadow 0.3s;
    }
    .lb-u .lb-cover::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.32) 0,
        rgba(255, 255, 255, 0.14) 1.6%,
        rgba(0, 0, 0, 0.1) 3.5%,
        transparent 7%
      );
      pointer-events: none;
    }
    .lb-u .lb-cover:hover {
      transform: translateY(-4px) rotate(-0.8deg);
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35), 0 28px 40px -14px rgba(0, 0, 0, 0.65);
    }
    .lb-u .lb-cover img {
      margin: 0 !important;
    }

    .lb-u .lb-flags {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      margin: 0 0 0.6rem;
      color: var(--muted);
      font-size: 0.8rem;
    }
    .lb-u .lb-new {
      padding: 0.15rem 0.6rem;
      border-radius: 999px;
      background: var(--p-yellow);
      color: #3a2f15;
      font-size: 0.72rem;
      font-variation-settings: 'wght' 600;
    }
    .lb-u .lb-data {
      display: flex;
      flex-wrap: wrap;
      gap: 0.3rem 1rem;
      margin: 0.9rem 0 0;
      padding: 0;
      list-style: none;
      color: var(--text-strong);
      font-size: 0.85rem;
      font-variation-settings: 'wght' 600;
    }
    .lb-u .lb-data > li {
      margin: 0;
      padding: 0;
    }
    .lb-u .lb-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
      margin: 1rem 0 0;
      padding: 0;
      list-style: none;
    }
    .lb-u .lb-tags > li {
      margin: 0;
      padding: 0.2rem 0.65rem;
      border: 1px solid var(--border);
      border-radius: 999px;
      font-size: 0.75rem;
      color: var(--muted);
    }
    .lb-u .lb-data > li::before,
    .lb-u .lb-tags > li::before {
      content: none;
    }

    .lb-u .lb-btn,
    .lb-u a.lb-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      padding: 0.55rem 1.1rem;
      border: 1px solid var(--border);
      border-radius: 999px;
      background: var(--surface-2);
      color: var(--text-strong);
      font: inherit;
      font-size: 0.9rem;
      font-variation-settings: 'wght' 600;
      text-decoration: none;
      cursor: pointer;
      transition: border-color 0.2s, background 0.2s;
    }
    .lb-u .lb-btn:hover {
      border-color: var(--tint-border);
    }
    .lb-u a.lb-btn-main {
      border-color: var(--accent);
      background: var(--accent);
      color: var(--on-accent);
    }
    .lb-u a.lb-btn-main:hover {
      border-color: var(--accent-hover);
      background: var(--accent-hover);
    }

    /* Cabecera de las secciones de libros en otras páginas */
    .lb-u .lb-head {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 2rem;
    }
    .lb-u .lb-head-title {
      margin: 0 0 0.5rem;
      font-size: 1.75rem;
      line-height: 1.2;
      color: var(--text-strong);
    }
    .lb-u .lb-head-lede {
      margin: 0;
      color: var(--muted);
    }
`
