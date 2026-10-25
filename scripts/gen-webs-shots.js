// Hace una captura de cada web de la tabla mis_webs y la guarda en public/images/webs/<slug>.png.
// Uso: con `npm run dev` arrancado, ejecuta `npm run webs:shots`.
// Para otro servidor, pasa la URL base: `node scripts/gen-webs-shots.js http://localhost:3123`
const { execFileSync } = require('child_process')
const fs = require('fs')
const os = require('os')
const path = require('path')
const { slugWeb } = require('../components/Webs/slug')

const base = (process.argv[2] || 'http://localhost:3000').replace(/\/$/, '')
const outDir = path.join(__dirname, '..', 'public', 'images', 'webs')

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

async function main() {
  const res = await fetch(`${base}/api/mis-webs`)
  const { data = [] } = await res.json()
  if (!data.length) throw new Error('La API no devolvió webs. ¿Está configurado MIS_WEBS_API_TOKEN?')

  fs.mkdirSync(outDir, { recursive: true })
  // Perfil temporal: sin él, Chrome se engancha a la instancia que tengas abierta
  const perfil = fs.mkdtempSync(path.join(os.tmpdir(), 'webs-shots-'))

  try {
    for (const w of data) {
      const slug = slugWeb(w.web)
      // Esta misma web se captura desde el servidor local, que tiene el diseño actual
      const url = slug === 'marlonfalcon-com' ? base : `https://${w.web.replace(/^https?:\/\//, '')}`
      const out = path.join(outDir, `${slug}.png`)
      try {
        execFileSync(
          chrome,
          [
            '--headless=new',
            '--disable-gpu',
            '--hide-scrollbars',
            `--user-data-dir=${perfil}`,
            '--force-device-scale-factor=1',
            '--window-size=1280,800',
            '--timeout=15000',
            `--screenshot=${out}`,
            url
          ],
          { stdio: 'ignore', timeout: 60000 }
        )
        console.log('Captura:', slug)
      } catch (e) {
        console.warn('No se pudo capturar', url, e.message)
      }
    }
  } finally {
    fs.rmSync(perfil, { recursive: true, force: true })
  }
}

main().catch((e) => {
  console.error(e.message)
  process.exit(1)
})
