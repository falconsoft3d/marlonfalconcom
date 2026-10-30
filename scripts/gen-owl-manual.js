// Genera el PDF del manual de OWL a partir de /cursos/owl-odoo-20/manual.
// Uso: con `npm run dev` arrancado, ejecuta `npm run owl:manual`.
// Para otro servidor, pasa la URL base: `node scripts/gen-owl-manual.js http://localhost:3123`
const { execFileSync } = require('child_process')
const fs = require('fs')
const os = require('os')
const path = require('path')

const base = (process.argv[2] || 'http://localhost:3000').replace(/\/$/, '')
const salida = path.join(__dirname, '..', 'public', 'cursos', 'manual-owl-odoo-20.pdf')

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

// Perfil temporal: sin él, Chrome se engancha a la instancia que tengas abierta
const perfil = fs.mkdtempSync(path.join(os.tmpdir(), 'owl-pdf-'))

try {
  execFileSync(
    chrome,
    ['--headless=new', '--disable-gpu', `--user-data-dir=${perfil}`, '--no-pdf-header-footer', '--virtual-time-budget=10000', `--print-to-pdf=${salida}`, `${base}/cursos/owl-odoo-20/manual`],
    { stdio: 'ignore', timeout: 120000 }
  )
  console.log('PDF generado:', salida)
} finally {
  fs.rmSync(perfil, { recursive: true, force: true })
}
