// Genera la imagen para redes (1200x630) de cada libro a partir de su portada:
// public/images/libros/<slug>.jpg -> public/images/libros/og/<slug>.jpg
// Uso: `npm run libros:og`. Usa Chrome para componer la imagen y sips (macOS) para pasarla a JPEG.
const { execFileSync } = require('child_process')
const fs = require('fs')
const os = require('os')
const path = require('path')

const dir = path.join(__dirname, '..', 'public', 'images', 'libros')
const outDir = path.join(dir, 'og')

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

const html = (portada) => `<!doctype html>
<style>
  html, body { margin: 0; width: 1200px; height: 630px; overflow: hidden; background: #111; }
  .fondo { position: absolute; inset: -80px; background: url('${portada}') center / cover; filter: blur(46px) brightness(0.5) saturate(1.2); }
  img { position: absolute; top: 40px; left: 50%; height: 550px; transform: translateX(-50%); border-radius: 4px 10px 10px 4px; box-shadow: 0 30px 60px rgba(0, 0, 0, 0.65); }
</style>
<div class="fondo"></div>
<img src="${portada}">`

// Perfil temporal: sin él, Chrome se engancha a la instancia que tengas abierta
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'libros-og-'))

try {
  fs.mkdirSync(outDir, { recursive: true })
  for (const archivo of fs.readdirSync(dir).filter((f) => f.endsWith('.jpg'))) {
    const pagina = path.join(tmp, 'portada.html')
    const png = path.join(tmp, 'portada.png')
    fs.writeFileSync(pagina, html(`file://${path.join(dir, archivo)}`))
    execFileSync(
      chrome,
      [
        '--headless=new',
        '--disable-gpu',
        '--hide-scrollbars',
        `--user-data-dir=${path.join(tmp, 'perfil')}`,
        '--force-device-scale-factor=1',
        '--window-size=1200,630',
        `--screenshot=${png}`,
        `file://${pagina}`
      ],
      { stdio: 'ignore', timeout: 60000 }
    )
    execFileSync('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', '85', png, '--out', path.join(outDir, archivo)], { stdio: 'ignore' })
    console.log('Imagen:', archivo)
  }
} finally {
  fs.rmSync(tmp, { recursive: true, force: true })
}
