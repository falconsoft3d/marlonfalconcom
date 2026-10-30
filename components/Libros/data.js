// Catálogo de /libros. Para añadir un libro: portada en public/images/libros y una entrada aquí.
// Los libros están en español: el índice no se traduce, solo los textos de la ficha.
// Cada libro tiene su página en /libros/<slug>. La imagen para redes (public/images/libros/og) sale de `npm run libros:og`.
import { SITIO } from '../Tienda/data'

export const urlLibro = (libro) => `${SITIO}/libros/${libro.slug}`

export const libros = [
  {
    slug: 'odoo-20-para-nuevos-programadores',
    titulo: 'Odoo 20 para Nuevos Programadores',
    subtitulo: {
      es: 'Curso paso a paso de desarrollo de módulos, de cero a integraciones',
      en: 'A step-by-step module development course, from zero to integrations'
    },
    portada: { src: '/images/libros/odoo-20-para-nuevos-programadores.jpg', ancho: 911, alto: 1287 },
    fecha: { es: 'Octubre de 2026', en: 'October 2026' },
    nuevo: true,
    datos: {
      es: ['26 capítulos', '105 páginas', 'En español'],
      en: ['26 chapters', '105 pages', 'In Spanish']
    },
    descripcion: {
      es: 'Para quien sabe algo de Python y nunca ha creado un módulo de Odoo. Empieza con la instalación en Windows, Mac o Docker y termina con facturas, pagos, APIs e inteligencia artificial. Cada capítulo parte de un ejercicio real probado en Odoo 20 y acaba con una prueba y un reto.',
      en: 'For anyone who knows some Python and has never built an Odoo module. It starts with installing on Windows, Mac or Docker and ends with invoices, payments, APIs and artificial intelligence. Each chapter starts from a real exercise tested on Odoo 20 and closes with a test and a challenge.'
    },
    temas: {
      es: ['Odoo 20', 'Python', 'Módulos', 'Seguridad', 'Informes PDF', 'Contabilidad', 'API JSON-2', 'Claude'],
      en: ['Odoo 20', 'Python', 'Modules', 'Security', 'PDF reports', 'Accounting', 'JSON-2 API', 'Claude']
    },
    acciones: [
      {
        href: '/libros/odoo-20-para-nuevos-programadores.pdf',
        texto: { es: 'Descargar PDF', en: 'Download PDF' },
        icono: 'download',
        principal: true,
        descarga: 'Odoo20_para_Nuevos_Programadores.pdf'
      },
      {
        href: '/libros/odoo-20-para-nuevos-programadores.pdf',
        texto: { es: 'Leer online', en: 'Read online' },
        icono: 'external'
      }
    ],
    capitulos: [
      'Introducción',
      'Instalar Odoo 20 en Windows y Mac',
      'Qué es Odoo y cómo está construido',
      'Capítulo 0 · Python básico para Odoo',
      'Capítulo 1 · Hola mundo: tu primer módulo',
      'Capítulo 2 · Añadir, ocultar y eliminar campos',
      'Capítulo 3 · Campos calculados',
      'Capítulo 4 · Traducciones',
      'Capítulo 5 · Datos iniciales y de demostración',
      'Capítulo 6 · Secuencias',
      'Capítulo 7 · Documento con líneas y pestañas',
      'Capítulo 8 · Varios teléfonos por contacto y botón inteligente',
      'Capítulo 9 · Permisos: quién puede confirmar ventas y ver precios',
      'Capítulo 10 · Filtros y agrupaciones personalizadas',
      'Capítulo 11 · Informes PDF: personalizar la factura',
      'Capítulo 12 · Modificar el presupuesto de venta',
      'Capítulo 13 · Asistente desde el menú Acción',
      'Capítulo 14 · Fechas: buscar ventas por rango',
      'Capítulo 15 · Ajustes propios en Configuración',
      'Capítulo 16 · Exportar productos a Excel',
      'Capítulo 17 · Importar productos desde CSV y Excel',
      'Capítulo 18 · Crear una factura desde código',
      'Capítulo 19 · Crear un asiento contable',
      'Capítulo 20 · Factura, pago y conciliación',
      'Capítulo 21 · Leer y escribir en Odoo desde fuera: API JSON-2',
      'Capítulo 22 · Subir ficheros a un FTP con una tarea programada',
      'Capítulo 23 · Tu propia API REST con token',
      'Capítulo 24 · Una página web que busca empleados',
      'Capítulo 25 · Odoo shell: Python directo contra tu base de datos',
      'Capítulo 26 · Programar Odoo con Claude',
      'Anexo · Chuleta de migración de Odoo 16 a Odoo 20'
    ]
  },
  {
    slug: 'owl-para-odoo-20',
    titulo: 'OWL para Odoo 20',
    subtitulo: {
      es: 'Curso paso a paso del framework web de Odoo, de tu primer componente a un proyecto completo',
      en: 'A step-by-step course on the Odoo web framework, from your first component to a complete project'
    },
    portada: { src: '/images/libros/owl-para-odoo-20.jpg', ancho: 909, alto: 1287 },
    fecha: { es: 'Octubre de 2026', en: 'October 2026' },
    nuevo: true,
    datos: {
      es: ['17 capítulos', '86 páginas', 'En español'],
      en: ['17 chapters', '86 pages', 'In Spanish']
    },
    descripcion: {
      es: 'Continúa Odoo 20 para Nuevos Programadores y lleva tus módulos al navegador: componentes, estado, servicios, widgets de campo, vistas propias, Punto de Venta y sitio web. Cada capítulo es un módulo real que se construye por pasos y termina con una prueba y un reto, hasta un tablero de tareas con arrastrar y soltar.',
      en: 'It continues Odoo 20 para Nuevos Programadores and takes your modules to the browser: components, state, services, field widgets, custom views, Point of Sale and website. Each chapter is a real module built step by step that ends with a test and a challenge, up to a drag-and-drop task board.'
    },
    temas: {
      es: ['OWL', 'JavaScript', 'Componentes', 'Servicios', 'Widgets', 'Punto de Venta', 'Sitio web', 'Hoot'],
      en: ['OWL', 'JavaScript', 'Components', 'Services', 'Widgets', 'Point of Sale', 'Website', 'Hoot']
    },
    acciones: [
      {
        href: '/libros/owl-para-odoo-20.pdf',
        texto: { es: 'Descargar PDF', en: 'Download PDF' },
        icono: 'download',
        principal: true,
        descarga: 'OWL-para-Odoo-20.pdf'
      },
      {
        href: '/libros/owl-para-odoo-20.pdf',
        texto: { es: 'Leer online', en: 'Read online' },
        icono: 'external'
      }
    ],
    capitulos: [
      'Introducción',
      'Qué es OWL y cómo encaja en Odoo 20',
      'Capítulo 0 · JavaScript moderno para OWL',
      'Capítulo 1 · Hola mundo: tu primer componente',
      'Capítulo 2 · Plantillas QWeb en OWL',
      'Capítulo 3 · Estado y reactividad con useState',
      'Capítulo 4 · Componentes hijos, props y slots',
      'Capítulo 5 · Eventos y comunicación entre componentes',
      'Capítulo 6 · Ciclo de vida y hooks',
      'Capítulo 7 · Servicios: hablar con el servidor',
      'Capítulo 8 · Registros: dónde Odoo busca tus piezas',
      'Capítulo 9 · Un widget de campo propio',
      'Capítulo 10 · Modificar componentes de Odoo con patch y t-inherit',
      'Capítulo 11 · Personalizar vistas: controlador de lista y kanban',
      'Capítulo 12 · Un icono en la barra superior (systray)',
      'Capítulo 13 · Un servicio propio',
      'Capítulo 14 · Pruebas con Hoot y depuración',
      'Capítulo 15 · OWL en el Punto de Venta',
      'Capítulo 16 · Sitio web y portal: Interactions',
      'Capítulo 17 · Proyecto final: tablero de tareas del equipo',
      'Apéndice A · Chuleta de OWL',
      'Apéndice B · Errores frecuentes',
      'Apéndice C · Migración desde versiones anteriores'
    ]
  },
  {
    slug: 'odoo-20-con-claude-code',
    titulo: 'Odoo 20 con Claude Code',
    subtitulo: {
      es: 'Buenas prácticas para programar módulos de Odoo con un agente de IA',
      en: 'Best practices for building Odoo modules with an AI agent'
    },
    portada: { src: '/images/libros/odoo-20-con-claude-code.jpg', ancho: 900, alto: 1275 },
    fecha: { es: 'Octubre de 2026', en: 'October 2026' },
    nuevo: true,
    datos: {
      es: ['5 capítulos', '31 páginas', 'En español'],
      en: ['5 chapters', '31 pages', 'In Spanish']
    },
    descripcion: {
      es: 'Claude Code escribe código muy deprisa, pero solo escribe buen código Odoo si le das contexto, límites y una forma de comprobar su trabajo. Este libro enseña a construir esas tres cosas con ejercicios sobre Odoo 20: del primer CLAUDE.md al ciclo explorar, planificar, codificar y verificar.',
      en: 'Claude Code writes code very fast, but it only writes good Odoo code if you give it context, limits and a way to check its work. This book teaches you to build those three things with Odoo 20 exercises: from the first CLAUDE.md to the explore, plan, code and verify cycle.'
    },
    temas: {
      es: ['Claude Code', 'CLAUDE.md', 'Inteligencia artificial', 'Modo plan', 'Permisos', 'Seguridad'],
      en: ['Claude Code', 'CLAUDE.md', 'Artificial intelligence', 'Plan mode', 'Permissions', 'Security']
    },
    acciones: [
      {
        href: '/libros/odoo-20-con-claude-code.pdf',
        texto: { es: 'Descargar PDF', en: 'Download PDF' },
        icono: 'download',
        principal: true,
        descarga: 'Odoo-20-con-Claude-Code.pdf'
      },
      {
        href: '/libros/odoo-20-con-claude-code.pdf',
        texto: { es: 'Leer online', en: 'Read online' },
        icono: 'external'
      }
    ],
    capitulos: [
      'Introducción',
      'Qué es Claude Code y cómo encaja en el desarrollo con Odoo 20',
      'Capítulo 0 · Instalar Claude Code y preparar un repositorio Odoo 20',
      'Capítulo 1 · CLAUDE.md: enseñar Odoo 20 al agente',
      'Capítulo 2 · Tu primer módulo con Claude Code',
      'Capítulo 3 · Modo plan, prompts y contexto',
      'Capítulo 4 · Permisos y seguridad'
    ]
  },
  {
    slug: 'aprende-abap-4',
    titulo: 'Aprende ABAP/4 con ejercicios prácticos',
    subtitulo: {
      es: 'Programación ABAP para SAP R/3',
      en: 'ABAP programming for SAP R/3'
    },
    portada: { src: '/images/libros/aprende-abap-4.jpg', ancho: 900, alto: 1229 },
    datos: {
      es: ['16 capítulos', '74 ejercicios', 'En español'],
      en: ['16 chapters', '74 exercises', 'In Spanish']
    },
    descripcion: {
      es: 'ABAP es el lenguaje de programación del sistema de gestión empresarial SAP R/3. Este libro enseña a programar en ABAP/4 con un lenguaje claro y sencillo: cada capítulo corresponde a un módulo de un curso de formación e incluye ejercicios prácticos para comprobar lo aprendido.',
      en: 'ABAP is the programming language of the SAP R/3 enterprise resource planning system. This book teaches ABAP/4 programming in clear, simple language: each chapter matches a module of a training course and includes practical exercises to check what you have learned.'
    },
    temas: {
      es: ['ABAP/4', 'SAP', 'Tablas internas', 'Open SQL', 'Dynpro', 'IDocs'],
      en: ['ABAP/4', 'SAP', 'Internal tables', 'Open SQL', 'Dynpro', 'IDocs']
    },
    acciones: [
      {
        href: 'https://github.com/mis-libros/ABAP',
        texto: { es: 'Descargar en GitHub', en: 'Download on GitHub' },
        icono: 'github',
        principal: true
      }
    ],
    capitulos: [
      'Capítulo 1 · Introducción a SAP ERP',
      'Capítulo 2 · Programación básica en ABAP',
      'Capítulo 3 · Operadores de condición',
      'Capítulo 4 · Bucles',
      'Capítulo 5 · Parámetros y subrutinas',
      'Capítulo 6 · Tablas internas',
      'Capítulo 7 · Diccionario de datos',
      'Capítulo 8 · OPEN SQL: consultas ABAP',
      'Capítulo 9 · Ampliaciones y notas',
      'Capítulo 10 · Programación orientada a objetos',
      'Capítulo 11 · Programación de diálogos',
      'Capítulo 12 · DYNPRO',
      'Capítulo 13 · Batch Inputs',
      'Capítulo 14 · Formularios',
      'Capítulo 15 · Object Navigator',
      'Capítulo 16 · IDocs (Intermediate Document)'
    ]
  }
]
