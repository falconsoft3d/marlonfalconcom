import fs from 'fs'
import path from 'path'
import { LECCIONES } from '../components/CursoOwl/lecciones'

const RAIZ = path.join(process.cwd(), 'data', 'curso-owl')

// El código del curso se lee de los módulos reales, que son los que se instalan y se prueban en Odoo 20
export function leerArchivos() {
  const archivos = {}
  for (const leccion of LECCIONES) {
    for (const [tipo, ruta] of leccion.bloques) {
      if (tipo === 'archivo') archivos[ruta] = fs.readFileSync(path.join(RAIZ, ruta), 'utf8').trimEnd()
    }
  }
  return archivos
}
