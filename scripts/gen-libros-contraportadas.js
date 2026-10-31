// Genera la contraportada de cada libro para el carrusel del home:
// public/libros/<slug>.pdf -> public/images/libros/contraportadas/<slug>.jpg
// Uso: `npm run libros:contraportadas`. La saca de la última página del PDF con pdftoppm (poppler).
// Los libros de COMPUESTAS no tienen esa página: se compone con Chrome sobre su portada y se pasa a JPEG con sips (macOS).
const { execFileSync } = require('child_process')
const fs = require('fs')
const os = require('os')
const path = require('path')

const raiz = path.join(__dirname, '..', 'public')
const pdfs = path.join(raiz, 'libros')
const portadas = path.join(raiz, 'images', 'libros')
const outDir = path.join(portadas, 'contraportadas')

// Lado largo de las portadas de public/images/libros
const LADO = 1287
const ANCHO = 910

// Páginas más grandes que su cubierta: se recorta el margen blanco, en píxeles a tamaño LADO
const RECORTES = {
  'tus-poemas': ['-x', 0, '-y', 0, '-W', 861, '-H', 1223],
  '50-canciones-de-rap': ['-x', 0, '-y', 0, '-W', 906, '-H', 1287]
}

const COMPUESTAS = {
  'aprende-abap-4': {
    acento: '#f2c14e',
    titulo: 'Aprende ABAP/4 con ejercicios prácticos',
    texto:
      'ABAP es el lenguaje de programación del sistema de gestión empresarial SAP R/3. Este libro enseña a programar en ABAP/4 con un lenguaje claro y sencillo: cada capítulo corresponde a un módulo de un curso de formación e incluye ejercicios prácticos para comprobar lo aprendido.',
    temas: ['ABAP/4', 'SAP', 'Tablas internas', 'Open SQL', 'Dynpro', 'IDocs']
  },
  'ia-gestion-proyectos-bim-erpsqlite': {
    acento: '#f4a460',
    titulo: 'Inteligencia Artificial aplicada a la Gestión de Proyectos BIM',
    texto:
      'Del modelo IFC a la decisión económica. Esta guía práctica para jefes de proyecto, BIM managers y técnicos de presupuestos muestra dónde aporta valor la IA en el coste, el plazo, las compras y la certificación de una obra, con ERPSqlite como base de datos única, una hoja de ruta de 90 días y un caso completo de 24 viviendas.',
    temas: ['IA', 'BIM', 'ERPSqlite', 'IFC y BC3', 'Valor ganado', 'MCP', 'Agentes', 'Prompts']
  },
  'json-rpc-en-odoo-20': {
    acento: '#c79ad6',
    titulo: 'JSON-RPC en Odoo 20',
    texto:
      'En Odoo 20 JSON-RPC sigue vivo, pero las integraciones nuevas deben usar JSON-2. Esta guía para desarrolladores e implantadores explica el protocolo, la API externa /jsonrpc, los controladores propios y el frontend OWL, con clientes en varios lenguajes, una tabla de migración y un caso práctico de mediciones de obra.',
    temas: ['JSON-RPC', 'JSON-2', 'API externa', 'Integraciones', 'Controladores', 'OWL', 'API keys', 'Migración']
  },
  'pedir-un-prompt-al-consultor': {
    acento: '#e9a26b',
    titulo: 'Pedir un prompt al consultor',
    texto:
      'Una guía breve para clientes y consultores. Sigue a una constructora que tarda tres días en aprobar cada factura de proveedor, desde la primera llamada hasta la entrega del prompt probado, y termina con plantillas listas para copiar: correo al consultor, guion de entrevista, esqueleto del prompt y petición de cambio.',
    temas: ['Inteligencia artificial', 'Prompts', 'Consultoría', 'Procesos', 'ERP', 'Plantillas']
  },
  'sql-para-odoo': {
    acento: '#6fb7e6',
    titulo: 'SQL para Odoo',
    texto:
      'Para administración, finanzas, operaciones o sistemas: saca de Odoo 16, 17 y 18 los informes que no trae de serie con consultas de solo lectura sobre PostgreSQL. No hace falta saber programar: parte de cero y recorre ventas, contabilidad, compras, inventario, CRM y proyectos con casos de una empresa ficticia y ejercicios resueltos.',
    temas: ['SQL', 'PostgreSQL', 'Odoo 16–18', 'Informes', 'Ventas', 'Contabilidad', 'Inventario', 'CRM']
  }
}

const chrome = [
  process.env.CHROME_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser'
]
  .filter(Boolean)
  .find((p) => fs.existsSync(p))
if (!chrome) {
  console.error('No se encontró Chrome. Define CHROME_PATH con la ruta del ejecutable.')
  process.exit(1)
}

const html = (slug, { acento, titulo, texto, temas }) => `<!doctype html>
<meta charset="utf-8">
<style>
  @font-face { font-family: 'Inter var'; src: url('file://${path.join(raiz, 'fonts', 'Inter-roman.latin.var.woff2')}'); font-weight: 100 900; }
  html, body { margin: 0; width: ${ANCHO}px; height: ${LADO}px; overflow: hidden; background: #0d1018; }
  .fondo { position: absolute; inset: -80px; background: url('file://${path.join(portadas, `${slug}.jpg`)}') center / cover; filter: blur(46px) saturate(1.3); }
  main { position: absolute; inset: 0; box-sizing: border-box; display: flex; flex-direction: column; padding: 110px 90px 90px; background: rgba(13, 16, 24, 0.86); color: #f3f1ec; font-family: 'Inter var', sans-serif; }
  h1 { margin: 0 0 50px; font-size: 76px; line-height: 1.08; letter-spacing: -0.02em; font-weight: 750; text-wrap: balance; }
  p { margin: 0; font-size: 33px; line-height: 1.5; color: #d7d4cc; }
  ul { display: flex; flex-wrap: wrap; gap: 14px; margin: 54px 0 0; padding: 0; list-style: none; }
  li { padding: 8px 24px; border: 2px solid ${acento}; border-radius: 999px; color: ${acento}; font-size: 25px; font-weight: 550; }
  footer { margin-top: auto; padding-top: 32px; border-top: 2px solid rgba(255, 255, 255, 0.22); font-size: 30px; font-weight: 650; }
  footer span { display: block; margin-top: 8px; color: #aaa69c; font-size: 24px; font-weight: 450; }
</style>
<div class="fondo"></div>
<main>
  <h1>${titulo}</h1>
  <p>${texto}</p>
  <ul>${temas.map((tema) => `<li>${tema}</li>`).join('')}</ul>
  <footer>Marlon Falcón Hernández<span>marlonfalcon.com</span></footer>
</main>`

// Perfil temporal: sin él, Chrome se engancha a la instancia que tengas abierta
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'libros-contra-'))

try {
  fs.mkdirSync(outDir, { recursive: true })

  for (const archivo of fs.readdirSync(pdfs).filter((f) => f.endsWith('.pdf'))) {
    const slug = path.basename(archivo, '.pdf')
    if (COMPUESTAS[slug]) continue
    const pdf = path.join(pdfs, archivo)
    const paginas = execFileSync('pdfinfo', [pdf], { encoding: 'utf8' }).match(/^Pages:\s+(\d+)/m)[1]
    const salida = ['-f', paginas, '-l', paginas, '-singlefile', '-scale-to', LADO, ...(RECORTES[slug] || []), '-jpeg', '-jpegopt', 'quality=85', pdf]
    execFileSync('pdftoppm', [...salida.map(String), path.join(outDir, slug)], { stdio: 'ignore' })
    console.log('Contraportada:', slug)
  }

  for (const [slug, libro] of Object.entries(COMPUESTAS)) {
    const pagina = path.join(tmp, 'contraportada.html')
    const png = path.join(tmp, 'contraportada.png')
    fs.writeFileSync(pagina, html(slug, libro))
    execFileSync(
      chrome,
      [
        '--headless=new',
        '--disable-gpu',
        '--hide-scrollbars',
        '--allow-file-access-from-files',
        `--user-data-dir=${path.join(tmp, 'perfil')}`,
        '--force-device-scale-factor=1',
        `--window-size=${ANCHO},${LADO}`,
        `--screenshot=${png}`,
        `file://${pagina}`
      ],
      { stdio: 'ignore', timeout: 60000 }
    )
    execFileSync('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', '85', png, '--out', path.join(outDir, `${slug}.jpg`)], { stdio: 'ignore' })
    console.log('Compuesta:', slug)
  }
} finally {
  fs.rmSync(tmp, { recursive: true, force: true })
}
