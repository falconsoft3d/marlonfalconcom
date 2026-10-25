const { promises: fs } = require('fs')
const path = require('path')
const matter = require('gray-matter')

// Fecha como YYYY-MM-DD para no depender de la zona horaria al mostrarla
const toDay = (value) => {
  const d = new Date(value)
  if (isNaN(d)) return null
  const pad = (n) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

async function generate() {
  const dir = path.join(__dirname, '..', 'pages', 'posts')
  const files = (await fs.readdir(dir)).filter(
    (name) => /\.mdx?$/.test(name) && !name.startsWith('index.')
  )

  const posts = await Promise.all(
    files.map(async (name) => {
      let data
      try {
        data = matter(await fs.readFile(path.join(dir, name))).data
      } catch (e) {
        console.warn(`[posts-index] Frontmatter inválido en ${name}: ${e.reason || e.message}`)
        return null
      }
      const description = String(data.description || '')
      return {
        slug: name.replace(/\.mdx?$/, ''),
        title: data.title || name,
        date: data.date ? toDay(data.date) : null,
        description: description.length > 200 ? description.slice(0, 197) + '…' : description,
        tags: String(data.tag || '')
          .split(',')
          .map((t) => t.trim().toLowerCase())
          .filter(Boolean)
      }
    })
  )

  const validos = posts.filter(Boolean)
  validos.sort((a, b) => (b.date || '').localeCompare(a.date || ''))

  await fs.mkdir(path.join(__dirname, '..', 'data'), { recursive: true })
  await fs.writeFile(path.join(__dirname, '..', 'data', 'posts.json'), JSON.stringify(validos))
}

generate()
