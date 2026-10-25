// Genera los PDF del CV (español e inglés) a partir de las páginas /cv y /cv/en.
// Uso: con `npm run dev` arrancado, ejecuta `npm run cv:pdf`.
// Para otro servidor, pasa la URL base: `node scripts/gen-cv-pdf.js http://localhost:3123`
const { execFileSync } = require('child_process')
const fs = require('fs')
const os = require('os')
const path = require('path')

const base = (process.argv[2] || 'http://localhost:3000').replace(/\/$/, '')
const salidas = [
  ['/cv', 'marlon-falcon-hernandez-cv.pdf'],
  ['/cv/en', 'marlon-falcon-hernandez-cv-en.pdf']
]

const candidatos = [
  process.env.CHROME_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser'
].filter(Boolean)
const chrome = candidatos.find((p) => fs.existsSync(p))
if (!chrome) {
  console.error('No se encontró Chrome. Define CHROME_PATH con la ruta del ejecutable.')
  process.exit(1)
}

// Perfil temporal: sin él, Chrome se engancha a la instancia que tengas abierta
const perfil = fs.mkdtempSync(path.join(os.tmpdir(), 'cv-pdf-'))

try {
  for (const [ruta, archivo] of salidas) {
    const out = path.join(__dirname, '..', 'public', archivo)
    execFileSync(
      chrome,
      [
        '--headless=new',
        '--disable-gpu',
        `--user-data-dir=${perfil}`,
        '--no-pdf-header-footer',
        '--virtual-time-budget=10000',
        `--print-to-pdf=${out}`,
        base + ruta
      ],
      { stdio: 'ignore', timeout: 60000 }
    )
    console.log('PDF generado:', out)
  }
} finally {
  fs.rmSync(perfil, { recursive: true, force: true })
}
