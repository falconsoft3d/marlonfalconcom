import React from 'react'
import Head from 'next/head'
import { SITIO } from '../Tienda/data'
import Bloque from './Bloques'
import { LECCIONES, VERSION_ODOO, VERSION_OWL } from './lecciones'

// Versión para imprimir del curso. Los colores son fijos: el PDF no depende del tema del sitio.
export default function Manual({ archivos }) {
  return (
    <main className="mn">
      <Head>
        <title>Manual de OWL en Odoo 20</title>
        <meta name="robots" content="noindex" />
        <link rel="canonical" href={`${SITIO}/cursos/owl-odoo-20`} />
      </Head>

      <section className="mn-portada">
        <p>Manual</p>
        <h1>OWL en Odoo 20</h1>
        <h2>Guía de iniciación a OWL 3 con ejemplos probados</h2>
        <footer>
          <b>Marlon Falcón Hernández</b>
          <span>marlonfalcon.com/cursos/owl-odoo-20</span>
          <span>
            Ejemplos ejecutados en Odoo {VERSION_ODOO} con OWL {VERSION_OWL}
          </span>
        </footer>
      </section>

      <section className="mn-indice">
        <h2>Índice</h2>
        <ol>
          {LECCIONES.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`}>{l.titulo}</a>
            </li>
          ))}
        </ol>
      </section>

      {LECCIONES.map((l, i) => (
        <section key={l.id} id={l.id} className="mn-leccion">
          <p className="mn-numero">Lección {i + 1}</p>
          <h2>{l.titulo}</h2>
          <p className="mn-resumen">{l.resumen}</p>
          {l.bloques.map((bloque, j) => (
            <Bloque key={j} bloque={bloque} archivos={archivos} impreso />
          ))}
        </section>
      ))}

      <style jsx global>{`
        @page {
          size: A4;
          margin: 18mm 16mm;
        }
        html,
        body {
          color-scheme: light !important;
          background: #fff !important;
          color: #2a2622 !important;
        }
        .mn {
          max-width: 760px;
          margin: 0 auto;
          color: #2a2622;
          font-size: 11pt;
          line-height: 1.5;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
        .mn-portada {
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 250mm;
          page-break-after: always;
        }
        .mn-portada p {
          margin: 0;
          color: #3f7fa3;
          font-size: 12pt;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .mn-portada h1 {
          margin: 0.2em 0;
          color: #2a2622;
          font-size: 44pt;
          line-height: 1.05;
          letter-spacing: -0.03em;
        }
        .mn-portada h2 {
          margin: 0;
          color: #5f5850;
          font-size: 16pt;
          font-weight: 500;
        }
        .mn-portada footer {
          display: grid;
          gap: 0.2em;
          margin-top: 3em;
          padding-top: 1em;
          border-top: 2px solid #3f7fa3;
          color: #5f5850;
          font-size: 10pt;
        }
        .mn-portada footer b {
          color: #2a2622;
          font-size: 12pt;
        }
        .mn-indice {
          page-break-after: always;
        }
        .mn-indice h2,
        .mn-leccion h2 {
          margin: 0 0 0.2em;
          color: #2a2622;
          font-size: 20pt;
          line-height: 1.2;
        }
        .mn-indice ol {
          display: grid;
          gap: 0.35em;
          margin-top: 1em;
          padding-left: 1.5em;
          list-style: decimal;
        }
        .mn a {
          color: #2f6d91;
          text-decoration: none;
        }
        .mn-leccion {
          page-break-before: always;
        }
        .mn-numero {
          margin: 0;
          color: #3f7fa3;
          font-size: 9pt;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .mn-resumen {
          margin: 0 0 1em;
          color: #5f5850;
        }
        .mn-leccion p {
          margin: 0 0 0.7em;
        }
        .mn-leccion > ul {
          margin: 0 0 0.8em;
          padding-left: 1.2em;
          list-style: disc;
        }
        .mn-leccion li {
          margin-bottom: 0.2em;
        }
        .mn code {
          padding: 0.05em 0.25em;
          border-radius: 3px;
          background: #f1ece4;
          color: #2a2622;
          font-size: 0.86em;
        }
        .mn .co-aviso {
          margin: 0 0 0.8em;
          padding: 0.6em 0.8em;
          border-left: 3px solid #3f7fa3;
          background: #eaf3f8;
          page-break-inside: avoid;
        }
        .mn .co-codigo {
          margin: 0 0 0.8em;
          border: 1px solid #ddd5c8;
          border-radius: 5px;
          background: #faf7f2;
        }
        .mn .co-codigo figcaption {
          padding: 0.25em 0.7em;
          border-bottom: 1px solid #ddd5c8;
          color: #5f5850;
          font-size: 8.5pt;
          page-break-after: avoid;
        }
        .mn .co-copiar {
          display: none;
        }
        .mn pre {
          margin: 0;
          padding: 0.6em 0.7em;
          color: #2a2622;
          font-size: 8.5pt;
          line-height: 1.4;
          white-space: pre-wrap;
          word-break: break-word;
        }
        .mn pre code {
          padding: 0;
          background: none;
          font-size: inherit;
        }
        .mn .co-tabla {
          margin: 0 0 0.8em;
        }
        .mn table {
          width: 100%;
          border-collapse: collapse;
          font-size: 9.5pt;
        }
        .mn th,
        .mn td {
          padding: 0.3em 0.45em;
          border-bottom: 1px solid #ddd5c8;
          text-align: left;
          vertical-align: top;
        }
        .mn tr {
          page-break-inside: avoid;
        }
        .mn th {
          color: #5f5850;
        }
        .mn .co-ejercicio {
          margin: 0 0 0.8em;
          padding: 0.6em 0.8em;
          border: 1px dashed #9cc1d6;
          border-radius: 5px;
          page-break-inside: avoid;
        }
        .mn .co-ejercicio h3 {
          margin: 0 0 0.2em;
          color: #2a2622;
          font-size: 11pt;
        }
        .mn .co-ejercicio summary {
          color: #5f5850;
          font-size: 9.5pt;
          list-style: none;
        }
      `}</style>
    </main>
  )
}
