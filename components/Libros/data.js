// Catálogo de /libros. Para añadir un libro: portada en public/images/libros, una entrada aquí y su slug al principio de ULTIMOS.
// Los libros están en español: el índice no se traduce, solo los textos de la ficha.
// Cada libro tiene su página en /libros/<slug>. La imagen para redes (public/images/libros/og) sale de `npm run libros:og`
// y la contraportada del carrusel del home (public/images/libros/contraportadas), de `npm run libros:contraportadas`.
import { SITIO } from '../Tienda/data'

export const urlLibro = (libro) => `${SITIO}/libros/${libro.slug}`
export const contraportada = (libro) => `/images/libros/contraportadas/${libro.slug}.jpg`

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
    slug: 'json-rpc-en-odoo-20',
    titulo: 'JSON-RPC en Odoo 20',
    subtitulo: {
      es: 'Guía completa del protocolo, la API externa y la migración a JSON-2',
      en: 'A complete guide to the protocol, the external API and the migration to JSON-2'
    },
    portada: { src: '/images/libros/json-rpc-en-odoo-20.jpg', ancho: 909, alto: 1287 },
    fecha: { es: 'Octubre de 2026', en: 'October 2026' },
    nuevo: true,
    datos: {
      es: ['11 capítulos', '29 páginas', 'En español'],
      en: ['11 chapters', '29 pages', 'In Spanish']
    },
    descripcion: {
      es: 'En Odoo 20 JSON-RPC sigue vivo, pero las integraciones nuevas deben usar JSON-2. Esta guía para desarrolladores e implantadores explica el protocolo, la API externa /jsonrpc, los controladores propios y el frontend OWL, con clientes en varios lenguajes, una tabla de migración y un caso práctico de mediciones de obra.',
      en: 'JSON-RPC is still alive in Odoo 20, but new integrations should use JSON-2. This guide for developers and implementers explains the protocol, the external /jsonrpc API, custom controllers and the OWL frontend, with clients in several languages, a migration table and a practical case on construction measurements.'
    },
    temas: {
      es: ['JSON-RPC', 'JSON-2', 'API externa', 'Integraciones', 'Controladores', 'OWL', 'API keys', 'Migración'],
      en: ['JSON-RPC', 'JSON-2', 'External API', 'Integrations', 'Controllers', 'OWL', 'API keys', 'Migration']
    },
    acciones: [
      {
        href: '/libros/json-rpc-en-odoo-20.pdf',
        texto: { es: 'Descargar PDF', en: 'Download PDF' },
        icono: 'download',
        principal: true,
        descarga: 'JSON-RPC_en_Odoo_20.pdf'
      },
      {
        href: '/libros/json-rpc-en-odoo-20.pdf',
        texto: { es: 'Leer online', en: 'Read online' },
        icono: 'external'
      }
    ],
    capitulos: [
      'Prólogo',
      'Capítulo 1 · Qué es JSON-RPC 2.0',
      'Capítulo 2 · Las APIs RPC de Odoo y su estado en Odoo 20',
      'Capítulo 3 · Arquitectura interna de JSON-RPC en Odoo',
      'Capítulo 4 · La API externa /jsonrpc',
      'Capítulo 5 · CRUD completo por JSON-RPC',
      'Capítulo 6 · JSON-2: la API externa de Odoo 20',
      'Capítulo 7 · Controladores JSON-RPC propios',
      'Capítulo 8 · JSON-RPC en el frontend OWL',
      'Capítulo 9 · Clientes en varios lenguajes',
      'Capítulo 10 · Errores, seguridad y rendimiento',
      'Capítulo 11 · Caso práctico: mediciones de obra desde una app externa',
      'Apéndice A · Chuletario',
      'Apéndice B · Códigos de error JSON-RPC 2.0',
      'Apéndice C · Checklist de migración a Odoo 20'
    ]
  },
  {
    slug: 'sql-para-odoo',
    titulo: 'SQL para Odoo',
    subtitulo: {
      es: 'Consultas paso a paso con las tablas reales de Odoo y casos de negocio simulados',
      en: 'Step-by-step queries with the real Odoo tables and simulated business cases'
    },
    portada: { src: '/images/libros/sql-para-odoo.jpg', ancho: 901, alto: 1278 },
    fecha: { es: '2026', en: '2026' },
    nuevo: true,
    datos: {
      es: ['11 capítulos', '34 páginas', 'En español'],
      en: ['11 chapters', '34 pages', 'In Spanish']
    },
    descripcion: {
      es: 'Para administración, finanzas, operaciones o sistemas: saca de Odoo 16, 17 y 18 los informes que no trae de serie con consultas de solo lectura sobre PostgreSQL. No hace falta saber programar: parte de cero y recorre ventas, contabilidad, compras, inventario, CRM y proyectos con casos de una empresa ficticia y ejercicios resueltos.',
      en: 'For administration, finance, operations or IT: get the reports Odoo 16, 17 and 18 do not offer out of the box with read-only PostgreSQL queries. No programming needed: it starts from zero and covers sales, accounting, purchasing, inventory, CRM and projects with cases from a fictional company and solved exercises.'
    },
    temas: {
      es: ['SQL', 'PostgreSQL', 'Odoo 16–18', 'Informes', 'Ventas', 'Contabilidad', 'Inventario', 'CRM'],
      en: ['SQL', 'PostgreSQL', 'Odoo 16–18', 'Reports', 'Sales', 'Accounting', 'Inventory', 'CRM']
    },
    acciones: [
      {
        href: '/libros/sql-para-odoo.pdf',
        texto: { es: 'Descargar PDF', en: 'Download PDF' },
        icono: 'download',
        principal: true,
        descarga: 'SQL_para_Odoo.pdf'
      },
      {
        href: '/libros/sql-para-odoo.pdf',
        texto: { es: 'Leer online', en: 'Read online' },
        icono: 'external'
      }
    ],
    capitulos: [
      'Introducción',
      'Capítulo 1 · Cómo guarda Odoo los datos',
      'Capítulo 2 · Conectarse y explorar la base de datos',
      'Capítulo 3 · Primeras consultas: los contactos',
      'Capítulo 4 · Unir tablas con JOIN',
      'Capítulo 5 · Ventas: totales, agrupaciones y rankings',
      'Capítulo 6 · Facturación y contabilidad',
      'Capítulo 7 · Compras',
      'Capítulo 8 · Inventario',
      'Capítulo 9 · CRM y proyectos',
      'Capítulo 10 · Técnicas avanzadas',
      'Capítulo 11 · Buenas prácticas y errores frecuentes',
      'Anexo · Mapa de tablas y ejercicios'
    ]
  },
  {
    slug: 'scrum-en-odoo-20',
    titulo: 'Scrum en Odoo 20',
    subtitulo: {
      es: 'Juega el partido completo: Scrum con las herramientas que ya tienes en Odoo',
      en: 'Play the full game: Scrum with the tools you already have in Odoo'
    },
    portada: { src: '/images/libros/scrum-en-odoo-20.jpg', ancho: 910, alto: 1289 },
    fecha: { es: '2026', en: '2026' },
    nuevo: true,
    datos: {
      es: ['10 capítulos', '24 páginas', 'En español'],
      en: ['10 chapters', '24 pages', 'In Spanish']
    },
    descripcion: {
      es: 'Una guía práctica para consultores, equipos de desarrollo y empresas de servicios. Con el baloncesto como hilo conductor, enseña a montar el backlog, usar hitos como Sprints, medir el burndown y la velocidad, automatizar con IA y facturar por Sprint, y termina con un caso completo de implantación y un módulo de ejemplo.',
      en: 'A practical guide for consultants, development teams and service companies. With basketball as its thread, it shows how to build the backlog, use milestones as Sprints, track burndown and velocity, automate with AI and invoice per Sprint, and ends with a complete implementation case and a sample module.'
    },
    temas: {
      es: ['Scrum', 'Odoo 20', 'Proyectos', 'Sprints', 'Backlog', 'Burndown', 'Automatización', 'Facturación'],
      en: ['Scrum', 'Odoo 20', 'Projects', 'Sprints', 'Backlog', 'Burndown', 'Automation', 'Invoicing']
    },
    acciones: [
      {
        href: '/libros/scrum-en-odoo-20.pdf',
        texto: { es: 'Descargar PDF', en: 'Download PDF' },
        icono: 'download',
        principal: true,
        descarga: 'Scrum-en-Odoo-20.pdf'
      },
      {
        href: '/libros/scrum-en-odoo-20.pdf',
        texto: { es: 'Leer online', en: 'Read online' },
        icono: 'external'
      }
    ],
    capitulos: [
      'Calentamiento: por qué Scrum y por qué Odoo 20',
      'Capítulo 1 · El reglamento: Scrum en esencia',
      'Capítulo 2 · Preparar la cancha: configuración de Odoo 20',
      'Capítulo 3 · El draft: construir el Product Backlog',
      'Capítulo 4 · Salto inicial: Sprint Planning',
      'Capítulo 5 · Balón en juego: ejecutar el Sprint',
      'Capítulo 6 · El marcador: métricas del equipo',
      'Capítulo 7 · Tiempo muerto: Review y Retrospectiva',
      'Capítulo 8 · Jugadas ensayadas: automatizaciones, Studio e IA',
      'Capítulo 9 · Liga profesional: escalar Scrum y conectar con el negocio',
      'Capítulo 10 · Partido real: un caso práctico completo',
      'Apéndice A · Checklist de arranque',
      'Apéndice B · Glosario Scrum ↔ Odoo',
      'Apéndice C · Módulo de ejemplo: story points y Sprints'
    ]
  },
  {
    slug: 'odoo-en-la-nube',
    titulo: 'Odoo en la nube',
    subtitulo: {
      es: 'Los 10 mejores proveedores de servidores: ventajas, precios y comparativas',
      en: 'The 10 best server providers: advantages, prices and comparisons'
    },
    portada: { src: '/images/libros/odoo-en-la-nube.jpg', ancho: 911, alto: 1288 },
    fecha: { es: 'Octubre de 2026', en: 'October 2026' },
    nuevo: true,
    datos: {
      es: ['6 capítulos', '14 páginas', 'En español'],
      en: ['6 chapters', '14 pages', 'In Spanish']
    },
    descripcion: {
      es: 'Compara diez proveedores para alojar Odoo, de Odoo.sh a AWS, Azure, Google Cloud, DigitalOcean, Hetzner, OVHcloud, IONOS, Vultr y Akamai, con precios consultados en octubre de 2026. Explica cómo dimensionar el servidor, recomienda una opción por tipo de cliente y cierra con una arquitectura de referencia y una lista de comprobación.',
      en: 'It compares ten providers for hosting Odoo, from Odoo.sh to AWS, Azure, Google Cloud, DigitalOcean, Hetzner, OVHcloud, IONOS, Vultr and Akamai, with prices checked in October 2026. It explains how to size the server, recommends an option for each type of client and closes with a reference architecture and a checklist.'
    },
    temas: {
      es: ['Odoo', 'Servidores', 'Cloud', 'VPS', 'PostgreSQL', 'Nginx', 'Copias de seguridad', 'Precios'],
      en: ['Odoo', 'Servers', 'Cloud', 'VPS', 'PostgreSQL', 'Nginx', 'Backups', 'Pricing']
    },
    acciones: [
      {
        href: '/libros/odoo-en-la-nube.pdf',
        texto: { es: 'Descargar PDF', en: 'Download PDF' },
        icono: 'download',
        principal: true,
        descarga: 'Odoo-en-la-nube.pdf'
      },
      {
        href: '/libros/odoo-en-la-nube.pdf',
        texto: { es: 'Leer online', en: 'Read online' },
        icono: 'external'
      }
    ],
    capitulos: [
      'Introducción',
      'Capítulo 1 · Qué necesita Odoo para ir rápido',
      'Capítulo 2 · Cómo se han evaluado',
      'Capítulo 3 · Los 10 proveedores, uno a uno',
      'Capítulo 4 · Comparativa global',
      'Capítulo 5 · Qué proveedor elegir según el cliente',
      'Capítulo 6 · Arquitectura de referencia y buenas prácticas',
      'Conclusiones'
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
    slug: 'git-y-github-desde-la-terminal',
    titulo: 'Git y GitHub desde la terminal',
    subtitulo: {
      es: 'Del primer commit al Pull Request, sin salir de la línea de comandos',
      en: 'From the first commit to the Pull Request, without leaving the command line'
    },
    portada: { src: '/images/libros/git-y-github-desde-la-terminal.jpg', ancho: 910, alto: 1287 },
    fecha: { es: '2026', en: '2026' },
    nuevo: true,
    datos: {
      es: ['12 capítulos', '24 páginas', 'En español'],
      en: ['12 chapters', '24 pages', 'In Spanish']
    },
    descripcion: {
      es: 'Una guía práctica de comandos para quien usa Git a medias desde un editor y para quien empieza de cero. Recorre con git y gh el ciclo diario, las ramas, los conflictos, los Pull Requests, las releases y GitHub Actions, enseña a deshacer errores y termina con una chuleta de 30 comandos esenciales.',
      en: 'A practical command guide for those who half-use Git from an editor and for complete beginners. With git and gh it covers the daily cycle, branches, conflicts, Pull Requests, releases and GitHub Actions, shows how to undo mistakes and ends with a cheat sheet of 30 essential commands.'
    },
    temas: {
      es: ['Git', 'GitHub', 'Terminal', 'CLI gh', 'Ramas', 'Merge y rebase', 'Pull Requests', 'GitHub Actions'],
      en: ['Git', 'GitHub', 'Terminal', 'gh CLI', 'Branches', 'Merge and rebase', 'Pull Requests', 'GitHub Actions']
    },
    acciones: [
      {
        href: '/libros/git-y-github-desde-la-terminal.pdf',
        texto: { es: 'Descargar PDF', en: 'Download PDF' },
        icono: 'download',
        principal: true,
        descarga: 'Git-y-GitHub-desde-la-terminal.pdf'
      },
      {
        href: '/libros/git-y-github-desde-la-terminal.pdf',
        texto: { es: 'Leer online', en: 'Read online' },
        icono: 'external'
      }
    ],
    capitulos: [
      'Introducción',
      'Capítulo 1 · Instalación y configuración inicial',
      'Capítulo 2 · Conceptos básicos',
      'Capítulo 3 · Crear y clonar repositorios',
      'Capítulo 4 · El ciclo diario',
      'Capítulo 5 · Ramas',
      'Capítulo 6 · Remotos: sincronizar con GitHub',
      'Capítulo 7 · Flujo de trabajo con GitHub: forks y Pull Requests',
      'Capítulo 8 · Issues, tags y releases',
      'Capítulo 9 · Deshacer errores',
      'Capítulo 10 · Técnicas avanzadas',
      'Capítulo 11 · GitHub Actions desde la terminal',
      'Capítulo 12 · Buenas prácticas y convenciones',
      'Apéndice · Chuleta de comandos'
    ]
  },
  {
    slug: 'manual-bim-2-0',
    titulo: 'BIM 2.0 · Manual de uso para arquitectos',
    subtitulo: {
      es: 'Gestión de obra sobre Odoo 19, del primer presupuesto a la última certificación',
      en: 'Construction management on Odoo 19, from the first budget to the final certification'
    },
    portada: { src: '/images/libros/manual-bim-2-0.jpg', ancho: 1287, alto: 909 },
    fecha: { es: 'Octubre de 2026', en: 'October 2026' },
    nuevo: true,
    datos: {
      es: ['16 capítulos', '97 páginas', 'En español'],
      en: ['16 chapters', '97 pages', 'In Spanish']
    },
    descripcion: {
      es: 'Para arquitectos, aparejadores y jefes de obra que usan BIM 2.0 sobre Odoo 19, sin necesidad de saber informática ni contabilidad. Sigue la vida de una obra de ejemplo de 24 viviendas: presupuesto, planificación, certificación, control en obra, compras, valor ganado, flujo de caja, integración con Revit e inteligencia artificial, con capturas del programa en cada paso.',
      en: 'For architects, quantity surveyors and site managers who use BIM 2.0 on Odoo 19, with no need for IT or accounting knowledge. It follows the life of a sample 24-home project: budget, planning, certification, site control, purchasing, earned value, cash flow, Revit integration and artificial intelligence, with screenshots of the program at every step.'
    },
    temas: {
      es: ['BIM 2.0', 'Odoo 19', 'Construcción', 'Presupuestos', 'Certificaciones', 'Valor ganado', 'Flujo de caja', 'Revit'],
      en: ['BIM 2.0', 'Odoo 19', 'Construction', 'Budgets', 'Certifications', 'Earned value', 'Cash flow', 'Revit']
    },
    acciones: [
      {
        href: '/libros/manual-bim-2-0.pdf',
        texto: { es: 'Descargar PDF', en: 'Download PDF' },
        icono: 'download',
        principal: true,
        descarga: 'Manual_BIM20_Odoo19.pdf'
      },
      {
        href: '/libros/manual-bim-2-0.pdf',
        texto: { es: 'Leer online', en: 'Read online' },
        icono: 'external'
      }
    ],
    capitulos: [
      'Cómo leer este manual',
      'Capítulo 1 · Teoría del presupuesto',
      'Capítulo 2 · Primeros pasos',
      'Capítulo 3 · La obra',
      'Capítulo 4 · El presupuesto',
      'Capítulo 5 · Precios e importación',
      'Capítulo 6 · Planificación',
      'Capítulo 7 · Certificación y cobro',
      'Capítulo 8 · Control en obra',
      'Capítulo 9 · Compras y gastos',
      'Capítulo 10 · Valor ganado',
      'Capítulo 11 · Flujo de caja',
      'Capítulo 12 · Dashboards',
      'Capítulo 13 · Integración BIM',
      'Capítulo 14 · Inteligencia artificial',
      'Capítulo 15 · Promoción, mantenimiento y portal',
      'Capítulo 16 · Configuración y roles'
    ]
  },
  {
    slug: 'bim-paso-a-paso-con-erpsqlite',
    titulo: 'BIM paso a paso con ERPSqlite',
    subtitulo: {
      es: 'La metodología BIM explicada y aplicada, del primer plano a la última certificación',
      en: 'The BIM methodology explained and applied, from the first drawing to the final certification'
    },
    portada: { src: '/images/libros/bim-paso-a-paso-con-erpsqlite.jpg', ancho: 911, alto: 1287 },
    fecha: { es: 'Octubre de 2026', en: 'October 2026' },
    nuevo: true,
    datos: {
      es: ['15 capítulos', '113 páginas', 'En español'],
      en: ['15 chapters', '113 pages', 'In Spanish']
    },
    descripcion: {
      es: 'Para constructoras, estudios y pymes que quieren trabajar con BIM sin grandes inversiones. Explica la metodología en un lenguaje claro (ISO 19650, IFC, LOD, entorno común de datos, 4D y 5D) y la aplica en nueve pasos a una vivienda modular de ejemplo con ERPSqlite: del plano y las mediciones al presupuesto, la planificación, la certificación y la entrega, con plantillas y listas de comprobación.',
      en: 'For construction companies, studios and small businesses that want to work with BIM without large investments. It explains the methodology in clear language (ISO 19650, IFC, LOD, common data environment, 4D and 5D) and applies it in nine steps to a sample modular home with ERPSqlite: from the drawing and quantities to the budget, planning, certification and handover, with templates and checklists.'
    },
    temas: {
      es: ['BIM', 'ERPSqlite', 'ISO 19650', 'IFC', 'Mediciones', 'Presupuestos', 'Planificación 4D', 'Certificaciones'],
      en: ['BIM', 'ERPSqlite', 'ISO 19650', 'IFC', 'Quantities', 'Budgets', '4D planning', 'Certifications']
    },
    acciones: [
      {
        href: '/libros/bim-paso-a-paso-con-erpsqlite.pdf',
        texto: { es: 'Descargar PDF', en: 'Download PDF' },
        icono: 'download',
        principal: true,
        descarga: 'BIM_paso_a_paso_con_ERPSqlite.pdf'
      },
      {
        href: '/libros/bim-paso-a-paso-con-erpsqlite.pdf',
        texto: { es: 'Leer online', en: 'Read online' },
        icono: 'external'
      }
    ],
    capitulos: [
      'Prólogo',
      'Capítulo 1 · Qué es BIM y por qué cambia la forma de construir',
      'Capítulo 2 · Dimensiones, niveles de información y openBIM',
      'Capítulo 3 · La gestión de la información: ISO 19650 sin complicaciones',
      'Capítulo 4 · ERPSqlite: una plataforma BIM ligera para la pyme',
      'Capítulo 5 · Paso 1: arrancar el proyecto',
      'Capítulo 6 · Paso 2: el plan de ejecución BIM y el entorno común de datos',
      'Capítulo 7 · Paso 3: modelar el edificio en el CAD',
      'Capítulo 8 · Paso 4: disciplinas, coordinación y exportación IFC',
      'Capítulo 9 · Paso 5: 5D, del modelo a las mediciones y el presupuesto',
      'Capítulo 10 · Paso 6: 4D, planificar la obra con el modelo',
      'Capítulo 11 · Paso 7: ejecutar y controlar la obra',
      'Capítulo 12 · Paso 8: certificar, facturar y medir la rentabilidad',
      'Capítulo 13 · Paso 9: entregar el modelo, as-built, 6D y 7D',
      'Capítulo 14 · IA, API y automatización al servicio del BIM',
      'Capítulo 15 · Caso completo: la Vivienda modular Albufera de principio a fin',
      'Anexos · Herramientas de consulta',
      'Epílogo'
    ]
  },
  {
    slug: 'ia-gestion-proyectos-bim-erpsqlite',
    titulo: 'Inteligencia Artificial aplicada a la Gestión de Proyectos BIM',
    subtitulo: {
      es: 'Del modelo IFC a la decisión económica: flujos de trabajo con ERPSqlite, el ERP de escritorio sin servidor',
      en: 'From the IFC model to the economic decision: workflows with ERPSqlite, the serverless desktop ERP'
    },
    portada: { src: '/images/libros/ia-gestion-proyectos-bim-erpsqlite.jpg', ancho: 911, alto: 1287 },
    fecha: { es: 'Octubre de 2026', en: 'October 2026' },
    nuevo: true,
    datos: {
      es: ['12 capítulos', '38 páginas', 'En español'],
      en: ['12 chapters', '38 pages', 'In Spanish']
    },
    descripcion: {
      es: 'Para jefes de proyecto, BIM managers, técnicos de presupuestos y jefes de obra que quieren pasar de la curiosidad por la IA a un flujo de trabajo real, sin necesidad de programar. Muestra dónde aporta valor en el coste, el plazo, las compras y la certificación, con ERPSqlite como base de datos única, e incluye una hoja de ruta de 90 días, un caso de 24 viviendas y una biblioteca de prompts.',
      en: 'For project managers, BIM managers, cost estimators and site managers who want to move from curiosity about AI to a real workflow, with no programming needed. It shows where AI adds value in cost, schedule, purchasing and certification, with ERPSqlite as the single database, and includes a 90-day roadmap, a 24-home case study and a prompt library.'
    },
    temas: {
      es: ['Inteligencia artificial', 'BIM', 'ERPSqlite', 'IFC', 'BC3', 'Valor ganado', 'MCP', 'Prompts'],
      en: ['Artificial intelligence', 'BIM', 'ERPSqlite', 'IFC', 'BC3', 'Earned value', 'MCP', 'Prompts']
    },
    acciones: [
      {
        href: '/libros/ia-gestion-proyectos-bim-erpsqlite.pdf',
        texto: { es: 'Descargar PDF', en: 'Download PDF' },
        icono: 'download',
        principal: true,
        descarga: 'IA_Gestion_Proyectos_BIM_ERPSqlite.pdf'
      },
      {
        href: '/libros/ia-gestion-proyectos-bim-erpsqlite.pdf',
        texto: { es: 'Leer online', en: 'Read online' },
        icono: 'external'
      }
    ],
    capitulos: [
      'Prólogo',
      'Capítulo 1 · El nuevo escenario: BIM, datos e inteligencia artificial',
      'Capítulo 2 · Conceptos de IA que todo gestor BIM debe dominar',
      'Capítulo 3 · ERPSqlite: la columna vertebral de datos del proyecto',
      'Capítulo 4 · Del modelo al presupuesto (5D): IFC, BC3 y mediciones',
      'Capítulo 5 · Planificación y control del plazo (4D)',
      'Capítulo 6 · Compras, inventario y cadena de suministro',
      'Capítulo 7 · Control económico: certificaciones, costes y valor ganado',
      'Capítulo 8 · Asistentes y agentes de IA conectados al ERP',
      'Capítulo 9 · Analítica, BI e IA predictiva sobre SQLite',
      'Capítulo 10 · Gobernanza, seguridad y ética de los datos',
      'Capítulo 11 · Hoja de ruta de implantación en 90 días',
      'Capítulo 12 · Caso práctico: edificio residencial de 24 viviendas',
      'Conclusiones',
      'Anexo A · Glosario',
      'Anexo B · Biblioteca de prompts para gestión BIM',
      'Anexo C · Consultas y scripts de referencia',
      'Anexo D · Lista de verificación de madurez IA-BIM'
    ]
  },
  {
    slug: 'manual-crm-odoo-19',
    titulo: 'CRM en Odoo 19 · Manual de usuario',
    subtitulo: {
      es: 'Del primer contacto a la oportunidad ganada: leads, flujo de ventas, actividades, equipos y previsión',
      en: 'From first contact to the won opportunity: leads, sales pipeline, activities, teams and forecasting'
    },
    portada: { src: '/images/libros/manual-crm-odoo-19.jpg', ancho: 1287, alto: 910 },
    fecha: { es: 'Octubre de 2026', en: 'October 2026' },
    nuevo: true,
    datos: {
      es: ['11 capítulos', '137 páginas', 'En español'],
      en: ['11 chapters', '137 pages', 'In Spanish']
    },
    descripcion: {
      es: 'Tomo 1 de la colección de manuales de Odoo 19. Para quien trabaja a diario con Odoo y para quien lo configura en su empresa, sin necesidad de saber informática. Recorre CRM pantalla a pantalla con capturas reales de Odoo 19 Enterprise: calificar leads, gestionar oportunidades, programar actividades, crear presupuestos, organizar equipos y leer el pronóstico.',
      en: 'Volume 1 of the Odoo 19 manuals collection. For people who work with Odoo every day and those who set it up in their company, with no IT knowledge needed. It walks through CRM screen by screen with real Odoo 19 Enterprise screenshots: qualifying leads, managing opportunities, scheduling activities, creating quotations, organising teams and reading the forecast.'
    },
    temas: {
      es: ['Odoo 19', 'CRM', 'Leads', 'Oportunidades', 'Actividades', 'Equipos de ventas', 'Pronóstico', 'Manual de usuario'],
      en: ['Odoo 19', 'CRM', 'Leads', 'Opportunities', 'Activities', 'Sales teams', 'Forecast', 'User manual']
    },
    acciones: [
      {
        href: '/libros/manual-crm-odoo-19.pdf',
        texto: { es: 'Descargar PDF', en: 'Download PDF' },
        icono: 'download',
        principal: true,
        descarga: 'Manual_CRM_Odoo19.pdf'
      },
      {
        href: '/libros/manual-crm-odoo-19.pdf',
        texto: { es: 'Leer online', en: 'Read online' },
        icono: 'external'
      }
    ],
    capitulos: [
      'Sobre este manual',
      'Capítulo 1 · Primeros pasos en Odoo',
      'Capítulo 2 · Cómo funciona CRM',
      'Capítulo 3 · Calificar leads',
      'Capítulo 4 · Gestionar oportunidades',
      'Capítulo 5 · Actividades y reuniones',
      'Capítulo 6 · Presupuestos y clientes',
      'Capítulo 7 · Equipos de ventas',
      'Capítulo 8 · Conseguir nuevos contactos',
      'Capítulo 9 · Informes',
      'Capítulo 10 · Configurar CRM',
      'Capítulo 11 · Permisos, problemas y glosario',
      'Mapa de menús'
    ]
  },
  {
    slug: 'manual-ventas-odoo-19',
    titulo: 'Ventas en Odoo 19 · Manual de usuario',
    subtitulo: {
      es: 'Del presupuesto al pedido facturado: productos, precios, plantillas, firma, pago e informes',
      en: 'From quotation to invoiced order: products, prices, templates, signature, payment and reports'
    },
    portada: { src: '/images/libros/manual-ventas-odoo-19.jpg', ancho: 1287, alto: 910 },
    fecha: { es: 'Octubre de 2026', en: 'October 2026' },
    nuevo: true,
    datos: {
      es: ['14 capítulos', '140 páginas', 'En español'],
      en: ['14 chapters', '140 pages', 'In Spanish']
    },
    descripcion: {
      es: 'Tomo 2 de la colección de manuales de Odoo 19. Para quien vende con Odoo y para quien configura la aplicación, sin necesidad de saber informática. Recorre Ventas con capturas reales de Odoo 19 Enterprise: crear presupuestos y plantillas, enviarlos para firmar y cobrar en línea, confirmar pedidos, facturar por partes o con anticipos, fijar precios y analizar lo vendido.',
      en: 'Volume 2 of the Odoo 19 manuals collection. For people who sell with Odoo and those who configure the app, with no IT knowledge needed. It walks through Sales with real Odoo 19 Enterprise screenshots: creating quotations and templates, sending them for signature and online payment, confirming orders, invoicing in parts or with down payments, setting prices and analysing what was sold.'
    },
    temas: {
      es: ['Odoo 19', 'Ventas', 'Presupuestos', 'Pedidos', 'Facturación', 'Precios', 'Pagos en línea', 'Manual de usuario'],
      en: ['Odoo 19', 'Sales', 'Quotations', 'Orders', 'Invoicing', 'Prices', 'Online payments', 'User manual']
    },
    acciones: [
      {
        href: '/libros/manual-ventas-odoo-19.pdf',
        texto: { es: 'Descargar PDF', en: 'Download PDF' },
        icono: 'download',
        principal: true,
        descarga: 'Manual_Ventas_Odoo19.pdf'
      },
      {
        href: '/libros/manual-ventas-odoo-19.pdf',
        texto: { es: 'Leer online', en: 'Read online' },
        icono: 'external'
      }
    ],
    capitulos: [
      'Sobre este manual',
      'Capítulo 1 · Primeros pasos en Odoo',
      'Capítulo 2 · Cómo funciona la venta',
      'Capítulo 3 · Crear un presupuesto',
      'Capítulo 4 · Plantillas de presupuesto',
      'Capítulo 5 · Enviar, firmar y cobrar',
      'Capítulo 6 · Confirmar y gestionar el pedido',
      'Capítulo 7 · Facturar los pedidos',
      'Capítulo 8 · Clientes',
      'Capítulo 9 · Productos y precios',
      'Capítulo 10 · Equipos de ventas',
      'Capítulo 11 · Pagos en línea',
      'Capítulo 12 · Informes de ventas',
      'Capítulo 13 · Configurar la aplicación',
      'Capítulo 14 · Permisos, problemas y glosario',
      'Mapa de menús'
    ]
  },
  {
    slug: 'manual-inventario-odoo-19',
    titulo: 'Inventario en Odoo 19 · Manual de usuario',
    subtitulo: {
      es: 'La mercancía bajo control: almacenes, ubicaciones, movimientos, lotes, reposición y valoración',
      en: 'Goods under control: warehouses, locations, moves, lots, replenishment and valuation'
    },
    portada: { src: '/images/libros/manual-inventario-odoo-19.jpg', ancho: 1287, alto: 910 },
    fecha: { es: 'Octubre de 2026', en: 'October 2026' },
    nuevo: true,
    datos: {
      es: ['12 capítulos', '138 páginas', 'En español'],
      en: ['12 chapters', '138 pages', 'In Spanish']
    },
    descripcion: {
      es: 'Tomo 3 de la colección de manuales de Odoo 19. Para quien trabaja en el almacén y para quien lo configura, sin necesidad de saber informática. Recorre Inventario con capturas reales de Odoo 19 Enterprise: recibir y entregar mercancía, contar existencias, reponer con reglas de mínimo y máximo, seguir lotes y números de serie, valorar el stock y definir almacenes y rutas.',
      en: 'Volume 3 of the Odoo 19 manuals collection. For people who work in the warehouse and those who set it up, with no IT knowledge needed. It walks through Inventory with real Odoo 19 Enterprise screenshots: receiving and delivering goods, counting stock, replenishing with minimum and maximum rules, tracking lots and serial numbers, valuing stock and defining warehouses and routes.'
    },
    temas: {
      es: ['Odoo 19', 'Inventario', 'Almacenes', 'Lotes', 'Reposición', 'Valoración', 'Código de barras', 'Manual de usuario'],
      en: ['Odoo 19', 'Inventory', 'Warehouses', 'Lots', 'Replenishment', 'Valuation', 'Barcode', 'User manual']
    },
    acciones: [
      {
        href: '/libros/manual-inventario-odoo-19.pdf',
        texto: { es: 'Descargar PDF', en: 'Download PDF' },
        icono: 'download',
        principal: true,
        descarga: 'Manual_Inventario_Odoo19.pdf'
      },
      {
        href: '/libros/manual-inventario-odoo-19.pdf',
        texto: { es: 'Leer online', en: 'Read online' },
        icono: 'external'
      }
    ],
    capitulos: [
      'Sobre este manual',
      'Capítulo 1 · Primeros pasos en Odoo',
      'Capítulo 2 · Cómo funciona Inventario',
      'Capítulo 3 · Recibir y entregar mercancía',
      'Capítulo 4 · El traslado a fondo',
      'Capítulo 5 · Contar y ajustar existencias',
      'Capítulo 6 · Reponer existencias',
      'Capítulo 7 · Productos, lotes y paquetes',
      'Capítulo 8 · Informes',
      'Capítulo 9 · Valoración y código de barras',
      'Capítulo 10 · Los ajustes de Inventario',
      'Capítulo 11 · Almacenes, rutas y catálogos',
      'Capítulo 12 · Permisos, errores y glosario',
      'Mapa de menús'
    ]
  },
  {
    slug: 'manual-compras-odoo-19',
    titulo: 'Compras en Odoo 19 · Manual de usuario',
    subtitulo: {
      es: 'De la solicitud de presupuesto a la factura del proveedor: pedidos, recepciones, proveedores y control',
      en: 'From request for quotation to vendor bill: orders, receipts, vendors and control'
    },
    portada: { src: '/images/libros/manual-compras-odoo-19.jpg', ancho: 1287, alto: 910 },
    fecha: { es: 'Octubre de 2026', en: 'October 2026' },
    nuevo: true,
    datos: {
      es: ['12 capítulos', '135 páginas', 'En español'],
      en: ['12 chapters', '135 pages', 'In Spanish']
    },
    descripcion: {
      es: 'Tomo 4 de la colección de manuales de Odoo 19. Para quien compra con Odoo y para quien configura la aplicación, sin necesidad de saber informática. Recorre Compras con capturas reales de Odoo 19 Enterprise: preparar solicitudes de presupuesto, confirmar pedidos, recibir la mercancía, cuadrar las facturas de proveedor, gestionar precios y plazos, y automatizar la reposición.',
      en: 'Volume 4 of the Odoo 19 manuals collection. For people who buy with Odoo and those who configure the app, with no IT knowledge needed. It walks through Purchase with real Odoo 19 Enterprise screenshots: preparing requests for quotation, confirming orders, receiving goods, matching vendor bills, managing prices and lead times, and automating replenishment.'
    },
    temas: {
      es: ['Odoo 19', 'Compras', 'Pedidos', 'Proveedores', 'Recepciones', 'Facturas', 'Reposición', 'Manual de usuario'],
      en: ['Odoo 19', 'Purchase', 'Orders', 'Vendors', 'Receipts', 'Bills', 'Replenishment', 'User manual']
    },
    acciones: [
      {
        href: '/libros/manual-compras-odoo-19.pdf',
        texto: { es: 'Descargar PDF', en: 'Download PDF' },
        icono: 'download',
        principal: true,
        descarga: 'Manual_Compras_Odoo19.pdf'
      },
      {
        href: '/libros/manual-compras-odoo-19.pdf',
        texto: { es: 'Leer online', en: 'Read online' },
        icono: 'external'
      }
    ],
    capitulos: [
      'Sobre este manual',
      'Capítulo 1 · Primeros pasos en Odoo',
      'Capítulo 2 · Cómo funciona Compra',
      'Capítulo 3 · Crear una solicitud de presupuesto',
      'Capítulo 4 · Enviar y confirmar el pedido',
      'Capítulo 5 · Recibir la mercancía',
      'Capítulo 6 · Facturas de proveedor',
      'Capítulo 7 · Proveedores',
      'Capítulo 8 · Productos y precios de proveedor',
      'Capítulo 9 · Reposición y compras automáticas',
      'Capítulo 10 · Informes y análisis',
      'Capítulo 11 · Configuración',
      'Capítulo 12 · Permisos, errores y glosario',
      'Mapa de menús'
    ]
  },
  {
    slug: 'manual-contabilidad-facturacion-odoo-19',
    titulo: 'Contabilidad y Facturación en Odoo 19 · Manual de usuario',
    subtitulo: {
      es: 'Facturas, cobros, bancos, impuestos, activos, cierres e informes, con el plan contable español',
      en: 'Invoices, payments, banks, taxes, assets, closings and reports, with the Spanish chart of accounts'
    },
    portada: { src: '/images/libros/manual-contabilidad-facturacion-odoo-19.jpg', ancho: 1287, alto: 910 },
    fecha: { es: 'Octubre de 2026', en: 'October 2026' },
    nuevo: true,
    datos: {
      es: ['14 capítulos', '180 páginas', 'En español'],
      en: ['14 chapters', '180 pages', 'In Spanish']
    },
    descripcion: {
      es: 'Tomo 5 de la colección de manuales de Odoo 19. Para quien lleva la contabilidad con Odoo y para quien la configura, con la localización española. Recorre la aplicación con capturas reales de Odoo 19 Enterprise: facturas de cliente y de proveedor, cobros y remesas SEPA, conciliación bancaria, analítica, activos e impuestos, cierres, informes y cada ajuste.',
      en: 'Volume 5 of the Odoo 19 manuals collection. For people who keep the books with Odoo and those who set it up, with the Spanish localisation. It walks through the app with real Odoo 19 Enterprise screenshots: customer invoices and vendor bills, payments and SEPA batches, bank reconciliation, analytics, assets and taxes, closings, reports and every setting.'
    },
    temas: {
      es: ['Odoo 19', 'Contabilidad', 'Facturación', 'Bancos', 'Impuestos', 'España', 'Cierres', 'Manual de usuario'],
      en: ['Odoo 19', 'Accounting', 'Invoicing', 'Banks', 'Taxes', 'Spain', 'Closings', 'User manual']
    },
    acciones: [
      {
        href: '/libros/manual-contabilidad-facturacion-odoo-19.pdf',
        texto: { es: 'Descargar PDF', en: 'Download PDF' },
        icono: 'download',
        principal: true,
        descarga: 'Manual_Contabilidad_Facturacion_Odoo19.pdf'
      },
      {
        href: '/libros/manual-contabilidad-facturacion-odoo-19.pdf',
        texto: { es: 'Leer online', en: 'Read online' },
        icono: 'external'
      }
    ],
    capitulos: [
      'Sobre este manual',
      'Capítulo 1 · Primeros pasos en Odoo',
      'Capítulo 2 · Conceptos',
      'Capítulo 3 · Tablero y menús',
      'Capítulo 4 · Facturas de cliente',
      'Capítulo 5 · Cobros y clientes',
      'Capítulo 6 · Proveedores',
      'Capítulo 7 · Bancos y conciliación',
      'Capítulo 8 · Asientos y analítica',
      'Capítulo 9 · Activos, préstamos y diferidos',
      'Capítulo 10 · Impuestos y España',
      'Capítulo 11 · Cierre y revisión',
      'Capítulo 12 · Informes',
      'Capítulo 13 · Configuración',
      'Capítulo 14 · Roles, errores y glosario',
      'Mapa de menús'
    ]
  },
  {
    slug: 'pedir-un-prompt-al-consultor',
    titulo: 'Pedir un prompt al consultor',
    subtitulo: {
      es: 'Cómo un cliente convierte un proceso lento en un prompt que funciona',
      en: 'How a client turns a slow process into a prompt that works'
    },
    portada: { src: '/images/libros/pedir-un-prompt-al-consultor.jpg', ancho: 909, alto: 1287 },
    fecha: { es: 'Octubre de 2026', en: 'October 2026' },
    nuevo: true,
    datos: {
      es: ['5 capítulos', '9 páginas', 'En español'],
      en: ['5 chapters', '9 pages', 'In Spanish']
    },
    descripcion: {
      es: 'Una guía breve para clientes y consultores. Sigue a una constructora que tarda tres días en aprobar cada factura de proveedor, desde la primera llamada hasta la entrega del prompt probado, y termina con plantillas listas para copiar: correo al consultor, guion de entrevista, esqueleto del prompt y petición de cambio.',
      en: 'A short guide for clients and consultants. It follows a construction company that takes three days to approve each supplier invoice, from the first call to the delivery of a tested prompt, and ends with ready-to-copy templates: email to the consultant, interview script, prompt skeleton and change request.'
    },
    temas: {
      es: ['Inteligencia artificial', 'Prompts', 'Consultoría', 'Procesos', 'ERP', 'Plantillas'],
      en: ['Artificial intelligence', 'Prompts', 'Consulting', 'Processes', 'ERP', 'Templates']
    },
    acciones: [
      {
        href: '/libros/pedir-un-prompt-al-consultor.pdf',
        texto: { es: 'Descargar PDF', en: 'Download PDF' },
        icono: 'download',
        principal: true,
        descarga: 'Pedir-un-prompt-al-consultor.pdf'
      },
      {
        href: '/libros/pedir-un-prompt-al-consultor.pdf',
        texto: { es: 'Leer online', en: 'Read online' },
        icono: 'external'
      }
    ],
    capitulos: [
      'Introducción',
      'Capítulo 1 · El cliente detecta el proceso',
      'Capítulo 2 · Cómo pedírselo al consultor',
      'Capítulo 3 · La entrevista de descubrimiento',
      'Capítulo 4 · El consultor construye el prompt',
      'Capítulo 5 · Probar, medir y entregar',
      'Anexo · Plantillas listas para copiar'
    ]
  },
  {
    slug: 'vender-erp-con-el-metodo-spin',
    titulo: 'Vender ERP con el método SPIN',
    subtitulo: {
      es: 'Cómo convertir una conversación de descubrimiento en un proyecto de implantación que el cliente quiere comprar',
      en: 'How to turn a discovery conversation into an implementation project the client wants to buy'
    },
    portada: { src: '/images/libros/vender-erp-con-el-metodo-spin.jpg', ancho: 914, alto: 1357 },
    fecha: { es: 'Octubre de 2026', en: 'October 2026' },
    nuevo: true,
    datos: {
      es: ['15 capítulos', '64 páginas', '120 preguntas', 'En español'],
      en: ['15 chapters', '64 pages', '120 questions', 'In Spanish']
    },
    descripcion: {
      es: 'Adapta el método SPIN a la venta consultiva de proyectos ERP: menos demos y más preguntas, para que sea el cliente quien descubra, cuantifique y defienda el valor del cambio. Incluye un mapa de dolores por área, un caso completo en una constructora, cómo convertir la conversación en propuesta, un plan de entrenamiento de 30 días y 120 preguntas listas para usar.',
      en: 'It adapts the SPIN method to consultative selling of ERP projects: fewer demos and more questions, so that the client discovers, quantifies and defends the value of change. It includes a pain map by area, a complete case in a construction company, how to turn the conversation into a proposal, a 30-day training plan and 120 ready-to-use questions.'
    },
    temas: {
      es: ['Ventas', 'SPIN', 'ERP', 'Odoo', 'Consultoría', 'Preventa', 'Objeciones', 'Propuestas'],
      en: ['Sales', 'SPIN', 'ERP', 'Odoo', 'Consulting', 'Pre-sales', 'Objections', 'Proposals']
    },
    acciones: [
      {
        href: '/libros/vender-erp-con-el-metodo-spin.pdf',
        texto: { es: 'Descargar PDF', en: 'Download PDF' },
        icono: 'download',
        principal: true,
        descarga: 'Vender_ERP_con_SPIN.pdf'
      },
      {
        href: '/libros/vender-erp-con-el-metodo-spin.pdf',
        texto: { es: 'Leer online', en: 'Read online' },
        icono: 'external'
      }
    ],
    capitulos: [
      'Prólogo',
      'Capítulo 1 · Por qué vender un ERP no se parece a vender software',
      'Capítulo 2 · El origen del método SPIN',
      'Capítulo 3 · Necesidades implícitas y explícitas',
      'Capítulo 4 · Las cuatro fases de una reunión de venta',
      'Capítulo 5 · Preguntas de Situación',
      'Capítulo 6 · Preguntas de Problema',
      'Capítulo 7 · Preguntas de Implicación',
      'Capítulo 8 · Preguntas de Necesidad-Beneficio',
      'Capítulo 9 · Mapa de dolores por área funcional',
      'Capítulo 10 · Caso práctico: una constructora de tamaño medio',
      'Capítulo 11 · Varios interlocutores, una sola venta',
      'Capítulo 12 · Prevenir objeciones en vez de rebatirlas',
      'Capítulo 13 · De la conversación a la propuesta',
      'Capítulo 14 · Errores frecuentes del consultor ERP',
      'Capítulo 15 · Plan de entrenamiento de 30 días',
      'Anexo · Banco de 120 preguntas SPIN para ERP',
      'Epílogo'
    ]
  },
  {
    slug: 'desde-lo-alto-de-la-montana',
    titulo: 'Desde lo alto de la montaña',
    subtitulo: {
      es: 'Psicología cognitivo-conductual para vivir la tercera edad con calma, sentido y esperanza',
      en: 'Cognitive behavioural psychology for living later life with calm, meaning and hope'
    },
    portada: { src: '/images/libros/desde-lo-alto-de-la-montana.jpg', ancho: 935, alto: 1210 },
    fecha: { es: 'Octubre de 2026', en: 'October 2026' },
    nuevo: true,
    datos: {
      es: ['11 capítulos', '20 páginas', 'En español'],
      en: ['11 chapters', '20 pages', 'In Spanish']
    },
    descripcion: {
      es: 'Un manual para personas mayores, familiares, cuidadores y profesionales. Con casos cotidianos, técnicas sencillas y ejercicios semanales, acompaña en la jubilación, la soledad, el duelo, la salud, la preocupación, la tristeza y la memoria, e incluye 9 hojas de trabajo. Es una guía de autoayuda: no sustituye la atención de un profesional.',
      en: 'A manual for older people, relatives, carers and professionals. With everyday cases, simple techniques and weekly exercises, it offers support through retirement, loneliness, grief, health, worry, sadness and memory, and includes 9 worksheets. It is a self-help guide: it does not replace professional care.'
    },
    temas: {
      es: ['Psicología', 'Terapia cognitivo-conductual', 'Tercera edad', 'Jubilación', 'Soledad', 'Duelo', 'Ansiedad', 'Memoria'],
      en: ['Psychology', 'Cognitive behavioural therapy', 'Later life', 'Retirement', 'Loneliness', 'Grief', 'Anxiety', 'Memory']
    },
    acciones: [
      {
        href: '/libros/desde-lo-alto-de-la-montana.pdf',
        texto: { es: 'Descargar PDF', en: 'Download PDF' },
        icono: 'download',
        principal: true,
        descarga: 'Desde-lo-alto-de-la-montana.pdf'
      },
      {
        href: '/libros/desde-lo-alto-de-la-montana.pdf',
        texto: { es: 'Leer online', en: 'Read online' },
        icono: 'external'
      }
    ],
    capitulos: [
      'Introducción',
      'Capítulo 1 · Lo que pensamos cambia lo que sentimos',
      'Capítulo 2 · Los mitos de la vejez y las trampas del pensamiento',
      'Capítulo 3 · La jubilación: cuando el trabajo ya no dice quién soy',
      'Capítulo 4 · Soledad: del aislamiento al encuentro',
      'Capítulo 5 · El duelo: aprender a vivir con la ausencia',
      'Capítulo 6 · Salud, dolor y limitaciones: hacer lo posible con lo que hay',
      'Capítulo 7 · Preocupación y ansiedad: domar el «¿y si…?»',
      'Capítulo 8 · Tristeza: la acción va antes que las ganas',
      'Capítulo 9 · Memoria: olvidos normales y miedo a la demencia',
      'Capítulo 10 · Desde lo alto de la montaña: sentido, legado y finitud',
      'Capítulo 11 · Tu plan personal y cuándo pedir ayuda',
      'Anexo · Hojas de trabajo'
    ]
  },
  {
    slug: 'cuidar-mayores-trastorno-bipolar',
    titulo: 'Cuidar a nuestros mayores con trastorno bipolar',
    subtitulo: {
      es: 'Guía práctica para familiares: entender, acompañar, prevenir crisis y cuidarse a uno mismo',
      en: 'A practical guide for relatives: understand, support, prevent crises and look after yourself'
    },
    portada: { src: '/images/libros/cuidar-mayores-trastorno-bipolar.jpg', ancho: 911, alto: 1288 },
    fecha: { es: '2026', en: '2026' },
    nuevo: true,
    datos: {
      es: ['10 capítulos', '20 páginas', 'En español'],
      en: ['10 chapters', '20 pages', 'In Spanish']
    },
    descripcion: {
      es: 'Una guía para hijos, nietos y parejas que acompañan a una persona mayor con trastorno bipolar. Enseña a reconocer las señales de manía y depresión, ayudar con la medicación y el litio, comunicarse en cada fase y actuar en una crisis, con el marco legal en España, seis fichas prácticas y teléfonos de ayuda. No sustituye la atención médica.',
      en: 'A guide for children, grandchildren and partners supporting an older person with bipolar disorder. It shows how to recognise the signs of mania and depression, help with medication and lithium, communicate in each phase and act in a crisis, with the legal framework in Spain, six practical worksheets and helplines. It does not replace medical care.'
    },
    temas: {
      es: ['Salud mental', 'Trastorno bipolar', 'Tercera edad', 'Cuidadores', 'Familia', 'Medicación', 'Crisis', 'Ley 8/2021'],
      en: ['Mental health', 'Bipolar disorder', 'Later life', 'Carers', 'Family', 'Medication', 'Crisis', 'Spanish Law 8/2021']
    },
    acciones: [
      {
        href: '/libros/cuidar-mayores-trastorno-bipolar.pdf',
        texto: { es: 'Descargar PDF', en: 'Download PDF' },
        icono: 'download',
        principal: true,
        descarga: 'Cuidar_mayores_trastorno_bipolar.pdf'
      },
      {
        href: '/libros/cuidar-mayores-trastorno-bipolar.pdf',
        texto: { es: 'Leer online', en: 'Read online' },
        icono: 'external'
      }
    ],
    capitulos: [
      'Prólogo: para quienes cuidan',
      'Capítulo 1 · Entender el trastorno bipolar en la vejez',
      'Capítulo 2 · Reconocer los episodios y las señales de alerta',
      'Capítulo 3 · Diagnóstico, equipo de salud y enfermedades asociadas',
      'Capítulo 4 · La medicación en personas mayores',
      'Capítulo 5 · Comunicarse y convivir',
      'Capítulo 6 · Rutinas que protegen: sueño, alimentación y actividad',
      'Capítulo 7 · Seguridad y manejo de crisis',
      'Capítulo 8 · Aspectos legales, sociales y económicos en España',
      'Capítulo 9 · Cuidar al cuidador',
      'Capítulo 10 · Plan de acción familiar y fichas prácticas',
      'Recursos útiles',
      'Epílogo: lo que queda'
    ]
  },
  {
    slug: 'curso-basico-de-guitarra',
    titulo: 'Curso Básico de Guitarra',
    subtitulo: {
      es: '100 lecciones con pentagrama, tablatura y ejercicios',
      en: '100 lessons with staff notation, tablature and exercises'
    },
    portada: { src: '/images/libros/curso-basico-de-guitarra.jpg', ancho: 909, alto: 1290 },
    fecha: { es: 'Octubre de 2026', en: 'October 2026' },
    nuevo: true,
    datos: {
      es: ['100 lecciones', '125 páginas', 'En español'],
      en: ['100 lessons', '125 pages', 'In Spanish']
    },
    descripcion: {
      es: 'Para quien nunca ha tocado una guitarra y quiere llegar a un nivel intermedio. En 100 lecciones con pentagrama, tablatura y ejercicios con una meta concreta, enseña acordes abiertos y con cejilla, rasgueos, escalas, arpegios, fingerstyle y armonía práctica, y termina con los ritmos cubanos y latinos: bolero, guajira, son, cha-cha-chá, habanera y bossa nova. Incluye plan de estudio y hoja de autoevaluación.',
      en: 'For anyone who has never played a guitar and wants to reach an intermediate level. In 100 lessons with staff notation, tablature and exercises with a specific goal, it teaches open and barre chords, strumming, scales, arpeggios, fingerstyle and practical harmony, and ends with Cuban and Latin rhythms: bolero, guajira, son, cha-cha-chá, habanera and bossa nova. It includes a study plan and a self-assessment sheet.'
    },
    temas: {
      es: ['Guitarra', 'Música', 'Acordes', 'Tablatura', 'Pentagrama', 'Fingerstyle', 'Ritmos cubanos', 'Armonía'],
      en: ['Guitar', 'Music', 'Chords', 'Tablature', 'Staff notation', 'Fingerstyle', 'Cuban rhythms', 'Harmony']
    },
    acciones: [
      {
        href: '/libros/curso-basico-de-guitarra.pdf',
        texto: { es: 'Descargar PDF', en: 'Download PDF' },
        icono: 'download',
        principal: true,
        descarga: 'Curso_Basico_de_Guitarra.pdf'
      },
      {
        href: '/libros/curso-basico-de-guitarra.pdf',
        texto: { es: 'Leer online', en: 'Read online' },
        icono: 'external'
      }
    ],
    capitulos: [
      'Cómo usar este libro',
      'Lección 1 · Las partes de la guitarra',
      'Lección 2 · Las cuerdas y sus nombres',
      'Lección 3 · Afinar con afinador',
      'Lección 4 · Afinar de oído: el quinto traste',
      'Lección 5 · La postura',
      'Lección 6 · Las manos y su numeración',
      'Lección 7 · Pulsar con la mano izquierda',
      'Lección 8 · Cuerdas al aire con el pulgar',
      'Lección 9 · La araña cromática',
      'Lección 10 · Leer tablatura',
      'Lección 11 · El pulso y el metrónomo',
      'Lección 12 · Redondas, blancas y negras',
      'Lección 13 · Corcheas: el «y»',
      'Lección 14 · Los silencios',
      'Lección 15 · Compases de 4/4 y 3/4',
      'Lección 16 · Las notas en el pentagrama',
      'Lección 17 · Notas en la 1ª cuerda',
      'Lección 18 · Notas en la 2ª cuerda',
      'Lección 19 · Notas en la 3ª cuerda',
      'Lección 20 · Notas graves: 4ª, 5ª y 6ª cuerdas',
      'Lección 21 · Leer un diagrama de acorde',
      'Lección 22 · Mi menor y La menor',
      'Lección 23 · Mi mayor y La mayor',
      'Lección 24 · Re mayor y Re menor',
      'Lección 25 · Do mayor y Sol mayor',
      'Lección 26 · Cambiar sin parar: el dedo pivote',
      'Lección 27 · Acordes de séptima: E7, A7, D7 y G7',
      'Lección 28 · Si séptima y Do séptima',
      'Lección 29 · Menores con séptima: Am7, Em7 y Dm7',
      'Lección 30 · Acordes maj7: color y dulzura',
      'Lección 31 · Acordes suspendidos: sus2 y sus4',
      'Lección 32 · Cadd9 y las voces abiertas',
      'Lección 33 · Rasgueo en negras',
      'Lección 34 · Corcheas: abajo y arriba',
      'Lección 35 · El patrón de balada',
      'Lección 36 · El patrón folk',
      'Lección 37 · Acentos',
      'Lección 38 · El golpe apagado',
      'Lección 39 · Semicorcheas',
      'Lección 40 · Ritmo de vals (3/4)',
      'Lección 41 · Bajo alterno',
      'Lección 42 · Rasgueo en 6/8',
      'Lección 43 · Escala de Do mayor',
      'Lección 44 · Do mayor en toda la primera posición',
      'Lección 45 · Melodía en Do: «Brisa de Viñales»',
      'Lección 46 · Escala de Sol mayor',
      'Lección 47 · Escala de La menor natural',
      'Lección 48 · Pentatónica menor: primera caja',
      'Lección 49 · Secuencias en la pentatónica',
      'Lección 50 · Pentatónica mayor',
      'Lección 51 · La escala de blues',
      'Lección 52 · Melodía en Sol: «Guajirita»',
      'Lección 53 · Lectura a primera vista',
      'Lección 54 · Ligados ascendentes (hammer-on)',
      'Lección 55 · Arpegio p-i-m-a',
      'Lección 56 · Arpegio p-i-m-a-m-i',
      'Lección 57 · Arpegio con bajo alterno',
      'Lección 58 · Travis picking (I)',
      'Lección 59 · Travis picking (II)',
      'Lección 60 · Arpegio en 3/4: el sonido de la serenata',
      'Lección 61 · El pellizco',
      'Lección 62 · Melodía con bajo',
      'Lección 63 · Arpegio y rasgueo combinados',
      'Lección 64 · Estudio en La menor: «Atardecer»',
      'Lección 65 · Power chords',
      'Lección 66 · Power chords móviles',
      'Lección 67 · Media cejilla',
      'Lección 68 · Fa mayor con cejilla completa',
      'Lección 69 · Forma de Mi: mayores y menores móviles',
      'Lección 70 · Forma de La: Si♭, Si menor, Do menor',
      'Lección 71 · Encontrar cualquier acorde',
      'Lección 72 · Séptimas con cejilla',
      'Lección 73 · Progresión con cejillas',
      'Lección 74 · Cejilla rítmica: cortes',
      'Lección 75 · Intervalos',
      'Lección 76 · Cómo se construye un acorde',
      'Lección 77 · Los acordes de una tonalidad',
      'Lección 78 · I – IV – V: los tres pilares',
      'Lección 79 · La progresión I – V – vi – IV',
      'Lección 80 · Tonalidad menor y su dominante',
      'Lección 81 · Dominantes secundarias',
      'Lección 82 · Disminuidos y sextas',
      'Lección 83 · Transportar y el capotraste',
      'Lección 84 · Sacar canciones de oído',
      'Lección 85 · La clave cubana',
      'Lección 86 · El bolero',
      'Lección 87 · La guajira',
      'Lección 88 · El son: el bajo anticipado',
      'Lección 89 · Guaracha y rasgueo rápido',
      'Lección 90 · Cha-cha-chá',
      'Lección 91 · La habanera',
      'Lección 92 · Bossa nova',
      'Lección 93 · Rumba',
      'Lección 94 · La trova: acompañar la voz',
      'Lección 95 · Ligados descendentes (pull-off)',
      'Lección 96 · Deslizamientos (slides)',
      'Lección 97 · Bending y vibrato',
      'Lección 98 · Armónicos naturales',
      'Lección 99 · Dinámica y expresión',
      'Lección 100 · Pieza final: «El trovador del valle»',
      'Plan de estudio',
      'Hoja de autoevaluación',
      'Glosario'
    ]
  },
  {
    slug: 'guitarra-de-trova-cubana',
    titulo: 'Guitarra de trova cubana',
    subtitulo: {
      es: 'Curso completo con cancionero: bolero, criolla, guajira, habanera, son y filin',
      en: 'A complete course with songbook: bolero, criolla, guajira, habanera, son and filin'
    },
    portada: { src: '/images/libros/guitarra-de-trova-cubana.jpg', ancho: 909, alto: 1287 },
    fecha: { es: 'Octubre de 2026', en: 'October 2026' },
    nuevo: true,
    datos: {
      es: ['14 capítulos', '101 páginas', '28 canciones', 'En español'],
      en: ['14 chapters', '101 pages', '28 songs', 'In Spanish']
    },
    descripcion: {
      es: 'Para quien ya conoce los acordes básicos y quiere acompañarse con la guitarra al estilo de los trovadores cubanos. Reúne los 20 arpegios esenciales, la clave, el tresillo y el cinquillo, los ritmos de la trova, la armonía del filin y un cancionero de 28 piezas con acordes, entre canciones de dominio público, poemas para musicalizar y temas de estudio. Incluye un plan de 12 semanas y un cuaderno de práctica.',
      en: 'For anyone who already knows the basic chords and wants to accompany themselves on guitar in the style of Cuban trovadores. It brings together the 20 essential arpeggios, the clave, tresillo and cinquillo, the rhythms of trova, the harmony of filin and a songbook of 28 pieces with chords, including public domain songs, poems to set to music and study pieces. It includes a 12-week plan and a practice notebook.'
    },
    temas: {
      es: ['Guitarra', 'Trova cubana', 'Bolero', 'Son', 'Habanera', 'Filin', 'Arpegios', 'Cancionero'],
      en: ['Guitar', 'Cuban trova', 'Bolero', 'Son', 'Habanera', 'Filin', 'Arpeggios', 'Songbook']
    },
    acciones: [
      {
        href: '/libros/guitarra-de-trova-cubana.pdf',
        texto: { es: 'Descargar PDF', en: 'Download PDF' },
        icono: 'download',
        principal: true,
        descarga: 'Curso_Guitarra_Trova_Cubana.pdf'
      },
      {
        href: '/libros/guitarra-de-trova-cubana.pdf',
        texto: { es: 'Leer online', en: 'Read online' },
        icono: 'external'
      }
    ],
    capitulos: [
      'Presentación',
      'Cómo leer este libro',
      'Sobre el repertorio de este libro',
      'Capítulo 1 · Qué es la trova cubana',
      'Capítulo 2 · La guitarra del trovador',
      'Capítulo 3 · La mano derecha',
      'Capítulo 4 · La mano izquierda',
      'Capítulo 5 · Los 20 arpegios esenciales',
      'Capítulo 6 · La clave, el tresillo y el cinquillo',
      'Capítulo 7 · El bolero trovadoresco',
      'Capítulo 8 · Criolla, guajira y punto',
      'Capítulo 9 · La habanera y la contradanza',
      'Capítulo 10 · El son en la guitarra',
      'Capítulo 11 · Armonía de la trova y del filin',
      'Capítulo 12 · Acompañar la voz',
      'Capítulo 13 · Nueva trova y estilo propio',
      'Capítulo 14 · Estudios para guitarra sola',
      'Canción 1 · Arroz con leche',
      'Canción 2 · Tengo una muñeca',
      'Canción 3 · Señora Santana',
      'Canción 4 · Son de la Ma Teodora',
      'Canción 5 · La Bayamesa (Himno de Bayamo)',
      'Canción 6 · La paloma',
      'Canción 7 · La golondrina',
      'Canción 8 · La bayamesa (1851)',
      'Canción 9 · Tristezas',
      'Canción 10 · El manisero',
      'Canción 11 · Yo soy un hombre sincero',
      'Canción 12 · Cultivo una rosa blanca',
      'Canción 13 · La niña de Guatemala',
      'Canción 14 · Mi caballero',
      'Canción 15 · Al partir',
      'Canción 16 · Volverán las oscuras golondrinas',
      'Canción 17 · Caminante, no hay camino',
      'Canción 18 · Para Aragón, en España',
      'Canción 19 · Si ves un monte de espumas',
      'Canción 20 · Rimas XXI y XXIII',
      'Canción 21 · Lo fatal',
      'Canción 22 · Bolero del portal',
      'Canción 23 · Criolla de la tarde',
      'Canción 24 · Guajira de las doce semanas',
      'Canción 25 · Décima del aprendiz',
      'Canción 26 · Habanera del puerto',
      'Canción 27 · Son del aprendiz',
      'Canción 28 · Canción para empezar',
      'Acordes por tonalidad',
      'Resumen de ritmos',
      'Plan de estudio de 12 semanas',
      'Cuaderno de práctica',
      'Plantilla de décima',
      'Repertorio para escuchar y sacar de oído',
      'Glosario'
    ]
  },
  {
    slug: 'rimas-desde-cero',
    titulo: 'Rimas desde Cero',
    subtitulo: {
      es: 'Aprende a rapear en 30 días: ritmo, rima, flow, voz y freestyle',
      en: 'Learn to rap in 30 days: rhythm, rhyme, flow, voice and freestyle'
    },
    portada: { src: '/images/libros/rimas-desde-cero.jpg', ancho: 909, alto: 1286 },
    fecha: { es: 'Octubre de 2026', en: 'October 2026' },
    nuevo: true,
    datos: {
      es: ['20 capítulos', '26 páginas', 'Plan de 30 días', 'En español'],
      en: ['20 chapters', '26 pages', '30-day plan', 'In Spanish']
    },
    descripcion: {
      es: 'Para quien siempre ha querido rapear y parte de cero, sin saber música. Enseña a contar el compás, encontrar rimas, crear tu flow, escribir letras con estructura y punchlines, cuidar la voz e improvisar en freestyle, y llega hasta grabar en casa, hacer beats y publicar. Termina con un plan de 30 días para tener tu primer tema grabado y un glosario.',
      en: 'For anyone who has always wanted to rap and is starting from zero, with no musical knowledge. It teaches you to count the bar, find rhymes, build your flow, write structured lyrics and punchlines, look after your voice and freestyle, and goes on to recording at home, making beats and releasing your music. It ends with a 30-day plan to get your first track recorded and a glossary.'
    },
    temas: {
      es: ['Rap', 'Música', 'Rimas', 'Flow', 'Freestyle', 'Letras', 'Voz', 'Beats'],
      en: ['Rap', 'Music', 'Rhymes', 'Flow', 'Freestyle', 'Lyrics', 'Voice', 'Beats']
    },
    acciones: [
      {
        href: '/libros/rimas-desde-cero.pdf',
        texto: { es: 'Descargar PDF', en: 'Download PDF' },
        icono: 'download',
        principal: true,
        descarga: 'Rimas-desde-Cero-Aprende-a-Rapear.pdf'
      },
      {
        href: '/libros/rimas-desde-cero.pdf',
        texto: { es: 'Leer online', en: 'Read online' },
        icono: 'external'
      }
    ],
    capitulos: [
      'Capítulo 1 · Qué es el rap',
      'Capítulo 2 · El ritmo: aprender a contar',
      'Capítulo 3 · La rima: el corazón de la letra',
      'Capítulo 4 · El flow: cómo suenan tus palabras',
      'Capítulo 5 · Escribir tu primera letra',
      'Capítulo 6 · Recursos literarios y punchlines',
      'Capítulo 7 · La voz: respiración y dicción',
      'Capítulo 8 · Freestyle: rapear sin papel',
      'Capítulo 9 · Grabar en casa',
      'Capítulo 10 · Escuchar como un rapero',
      'Capítulo 11 · Métrica: contar sílabas',
      'Capítulo 12 · Rima avanzada y banco de rimas',
      'Capítulo 13 · Storytelling: contar historias',
      'Capítulo 14 · Estilos y subgéneros',
      'Capítulo 15 · Estribillos, ganchos y melodía',
      'Capítulo 16 · El directo: escenario y micrófono',
      'Capítulo 17 · Haz tus propios beats',
      'Capítulo 18 · Bloqueo creativo, disciplina y mentalidad',
      'Capítulo 19 · Identidad artística, difusión y derechos',
      'Capítulo 20 · Plan de práctica de 30 días',
      'Glosario del rapero'
    ]
  },
  {
    slug: 'robotica-e-impresion-3d',
    titulo: 'Robótica e Impresión 3D',
    subtitulo: {
      es: 'Construye tu primer robot con piezas de Amazon y un chasis diseñado e impreso por ti',
      en: 'Build your first robot with parts from Amazon and a chassis you design and print yourself'
    },
    portada: { src: '/images/libros/robotica-e-impresion-3d.jpg', ancho: 912, alto: 1287 },
    fecha: { es: 'Octubre de 2026', en: 'October 2026' },
    nuevo: true,
    datos: {
      es: ['9 capítulos', '36 páginas', '5 programas para Arduino', 'En español'],
      en: ['9 chapters', '36 pages', '5 Arduino programs', 'In Spanish']
    },
    descripcion: {
      es: 'Para quien nunca ha soldado un cable ni ha encendido una impresora 3D. Con componentes fáciles de conseguir en Amazon, enseña lo básico de la electrónica, a programar Arduino con LEDs, botones, servos y sensores, a elegir y calibrar una impresora y a diseñar piezas en Tinkercad. Termina con un robot móvil que esquiva obstáculos, con un chasis hecho por ti, una guía de solución de problemas y un glosario.',
      en: 'For anyone who has never soldered a wire or switched on a 3D printer. Using parts that are easy to find on Amazon, it teaches the basics of electronics, how to program Arduino with LEDs, buttons, servos and sensors, how to choose and calibrate a printer and how to design parts in Tinkercad. It ends with a mobile robot that avoids obstacles, on a chassis you made yourself, plus a troubleshooting guide and a glossary.'
    },
    temas: {
      es: ['Robótica', 'Arduino', 'Impresión 3D', 'Electrónica', 'Sensores', 'Motores', 'Tinkercad', 'PLA'],
      en: ['Robotics', 'Arduino', '3D printing', 'Electronics', 'Sensors', 'Motors', 'Tinkercad', 'PLA']
    },
    acciones: [
      {
        href: '/libros/robotica-e-impresion-3d.pdf',
        texto: { es: 'Descargar PDF', en: 'Download PDF' },
        icono: 'download',
        principal: true,
        descarga: 'Robotica_e_Impresion_3D.pdf'
      },
      {
        href: '/libros/robotica-e-impresion-3d.pdf',
        texto: { es: 'Leer online', en: 'Read online' },
        icono: 'external'
      }
    ],
    capitulos: [
      'Antes de empezar',
      'Capítulo 1 · La lista de la compra',
      'Capítulo 2 · Herramientas y puesto de trabajo',
      'Capítulo 3 · Electricidad sin miedo',
      'Capítulo 4 · Primeros pasos con Arduino',
      'Capítulo 5 · Tu primera impresora 3D',
      'Capítulo 6 · Diseña tus propias piezas',
      'Capítulo 7 · Proyectos de entrenamiento',
      'Capítulo 8 · Proyecto final: robot evita-obstáculos',
      'Capítulo 9 · Solución de problemas',
      'Glosario',
      'Lista de comprobación final'
    ]
  },
  {
    slug: 'el-zorro-y-la-tigre',
    titulo: 'El Zorro y la Tigre',
    subtitulo: {
      es: 'Lo que pesa el oro. Una fábula sobre la avaricia y la humildad',
      en: 'What gold weighs. A fable about greed and humility'
    },
    portada: { src: '/images/libros/el-zorro-y-la-tigre.jpg', ancho: 908, alto: 1287 },
    fecha: { es: 'Octubre de 2026', en: 'October 2026' },
    nuevo: true,
    datos: {
      es: ['12 capítulos', '50 páginas', 'Ilustrada en estilo manga', 'En español'],
      en: ['12 chapters', '50 pages', 'Manga-style illustrations', 'In Spanish']
    },
    descripcion: {
      es: 'Una novela ilustrada en estilo manga. En el Bosque de los Helechos viven Tilo, un zorro curioso, y Ámbar, una tigre que solo toma lo que necesita. Un verano de sequía, Tilo cruza la Colina del Humo, descubre el pueblo de Valdeoro y acepta el trato de Don Ceferino Garra, un hombre que nunca tiene bastante. Una historia sobre lo que pesa el oro, lo poco que hace falta para ser feliz y el valor de volver a casa.',
      en: 'A novel with manga-style illustrations. In the Fern Forest live Tilo, a curious fox, and Ámbar, a tigress who only takes what she needs. One summer of drought, Tilo crosses Smoke Hill, discovers the town of Valdeoro and accepts a deal from Don Ceferino Garra, a man who never has enough. A story about what gold weighs, how little it takes to be happy and the courage to come home.'
    },
    temas: {
      es: ['Novela ilustrada', 'Manga', 'Fábula', 'Avaricia', 'Humildad', 'Amistad', 'Naturaleza'],
      en: ['Illustrated novel', 'Manga', 'Fable', 'Greed', 'Humility', 'Friendship', 'Nature']
    },
    acciones: [
      {
        href: '/libros/el-zorro-y-la-tigre.pdf',
        texto: { es: 'Descargar PDF', en: 'Download PDF' },
        icono: 'download',
        principal: true,
        descarga: 'El_Zorro_y_la_Tigre.pdf'
      },
      {
        href: '/libros/el-zorro-y-la-tigre.pdf',
        texto: { es: 'Leer online', en: 'Read online' },
        icono: 'external'
      }
    ],
    capitulos: [
      'Capítulo I · El Bosque de los Helechos',
      'Capítulo II · El humo al otro lado de la colina',
      'Capítulo III · Valdeoro',
      'Capítulo IV · La primera moneda',
      'Capítulo V · La despensa secreta',
      'Capítulo VI · El trato del collar',
      'Capítulo VII · El invierno largo',
      'Capítulo VIII · La piel de rayas',
      'Capítulo IX · La noche de la trampa',
      'Capítulo X · Lo que pesa el oro',
      'Capítulo XI · El granero vacío',
      'Capítulo XII · Lo que cabe en una cueva',
      'Moraleja'
    ]
  },
  {
    slug: 'tus-poemas',
    titulo: 'Tus Poemas',
    subtitulo: {
      es: 'Poemas de amor a la manera de José María Vargas Vila',
      en: 'Love poems in the manner of José María Vargas Vila'
    },
    portada: { src: '/images/libros/tus-poemas.jpg', ancho: 861, alto: 1223 },
    fecha: { es: 'Octubre de 2026', en: 'October 2026' },
    nuevo: true,
    datos: {
      es: ['24 poemas', '34 páginas', 'Primera edición', 'En español'],
      en: ['24 poems', '34 pages', 'First edition', 'In Spanish']
    },
    descripcion: {
      es: 'Veinticuatro poemas en prosa lírica, escritos a la manera de José María Vargas Vila, que siguen el arco de una pasión en cuatro partes: el deslumbramiento, la posesión, la ausencia y las cenizas. Cada poema lleva su propio tatuaje, una marca de tinta dibujada sobre la piel, y el libro se abre con un pórtico y se cierra con un epílogo.',
      en: 'Twenty-four poems in lyrical prose, written in the manner of José María Vargas Vila, that follow the arc of a passion in four parts: dazzlement, possession, absence and ashes. Each poem carries its own tattoo, an ink mark drawn on the skin, and the book opens with a portico and closes with an epilogue.'
    },
    temas: {
      es: ['Poesía', 'Poemas de amor', 'Prosa lírica', 'Vargas Vila', 'Tatuajes'],
      en: ['Poetry', 'Love poems', 'Lyrical prose', 'Vargas Vila', 'Tattoos']
    },
    acciones: [
      {
        href: '/libros/tus-poemas.pdf',
        texto: { es: 'Descargar PDF', en: 'Download PDF' },
        icono: 'download',
        principal: true,
        descarga: 'Tus_Poemas.pdf'
      },
      {
        href: '/libros/tus-poemas.pdf',
        texto: { es: 'Leer online', en: 'Read online' },
        icono: 'external'
      }
    ],
    capitulos: [
      'Pórtico',
      'El Deslumbramiento · Apareciste',
      'El Deslumbramiento · Tus ojos',
      'El Deslumbramiento · Elogio de tu voz',
      'El Deslumbramiento · El lirio y la llama',
      'El Deslumbramiento · Plegaria pagana',
      'El Deslumbramiento · Tu nombre',
      'La Posesión · Nupcias de las almas',
      'La Posesión · Tus manos',
      'La Posesión · El jardín cerrado',
      'La Posesión · Canto a tu boca',
      'La Posesión · Mar de medianoche',
      'La Posesión · Soberbia del amor',
      'La Ausencia · Te fuiste en otoño',
      'La Ausencia · La lámpara apagada',
      'La Ausencia · Carta que no enviaré',
      'La Ausencia · Los días sin ti',
      'La Ausencia · Celos',
      'La Ausencia · Interrogación a la noche',
      'Las Cenizas · Lo que queda',
      'Las Cenizas · Rosas muertas',
      'Las Cenizas · El retrato',
      'Las Cenizas · Perdón',
      'Las Cenizas · Inmortalidad',
      'Las Cenizas · Tus poemas',
      'Epílogo · Última palabra'
    ]
  },
  {
    slug: '50-canciones-de-rap',
    titulo: '50 Canciones de Rap',
    subtitulo: {
      es: 'Versos, coros e historias',
      en: 'Verses, choruses and stories'
    },
    portada: { src: '/images/libros/50-canciones-de-rap.jpg', ancho: 906, alto: 1287 },
    fecha: { es: 'Octubre de 2026', en: 'October 2026' },
    nuevo: true,
    datos: {
      es: ['50 canciones', '109 páginas', 'Para beats de 80 a 92 BPM', 'En español'],
      en: ['50 songs', '109 pages', 'For 80 to 92 BPM beats', 'In Spanish']
    },
    descripcion: {
      es: 'Cincuenta letras originales de rap de barrio, de espejo y de conciencia, cada una con cinco estrofas y un coro para rapearla sobre un beat lento. Se dividen en cuatro partes: la calle donde uno nace, el espejo donde uno se busca, veinte historias de gente que podría ser tu vecino y la conciencia que, al final, nos levanta. Cada canción lleva su propio tatuaje.',
      en: 'Fifty original rap lyrics about the neighbourhood, the mirror and conscience, each with five verses and a chorus to rap over a slow beat. They are divided into four parts: the street where you are born, the mirror where you look for yourself, twenty stories of people who could be your neighbours and the conscience that lifts us up in the end. Each song carries its own tattoo.'
    },
    temas: {
      es: ['Rap', 'Letras', 'Música', 'Barrio', 'Historias', 'Conciencia social', 'Tatuajes'],
      en: ['Rap', 'Lyrics', 'Music', 'Neighbourhood', 'Stories', 'Social conscience', 'Tattoos']
    },
    acciones: [
      {
        href: '/libros/50-canciones-de-rap.pdf',
        texto: { es: 'Descargar PDF', en: 'Download PDF' },
        icono: 'download',
        principal: true,
        descarga: '50_Canciones_de_Rap.pdf'
      },
      {
        href: '/libros/50-canciones-de-rap.pdf',
        texto: { es: 'Leer online', en: 'Read online' },
        icono: 'external'
      }
    ],
    capitulos: [
      'Intro',
      'Calle · 1. Barrio de cartón',
      'Calle · 2. La bala perdida',
      'Calle · 3. Autobús de las seis',
      'Calle · 4. El niño de los caramelos',
      'Calle · 5. Escalera sin baranda',
      'Calle · 6. Pan y plomo',
      'Calle · 7. Madre de esquina',
      'Calle · 8. El que no salió',
      'Calle · 9. Noches de apagón',
      'Calle · 10. Ley del silencio',
      'Espejo · 11. Conversación con mi sombra',
      'Espejo · 12. Lo que no dije',
      'Espejo · 13. Cuaderno de tachones',
      'Espejo · 14. Ego',
      'Espejo · 15. Insomnio',
      'Espejo · 16. Mi peor enemigo',
      'Espejo · 17. Cicatrices',
      'Espejo · 18. Carta a mi yo de niño',
      'Espejo · 19. Máscaras',
      'Espejo · 20. Volver a empezar',
      'Historias · 21. Los zapatos de Andrés',
      'Historias · 22. La visita',
      'Historias · 23. Velorio en el cuarto piso',
      'Historias · 24. Rosa y Manuel',
      'Historias · 25. El último tren',
      'Historias · 26. Herencia',
      'Historias · 27. La carta de Yaneth',
      'Historias · 28. El boxeador',
      'Historias · 29. El taxista de la noche',
      'Historias · 30. Cien años',
      'Historias · 31. Café frío',
      'Historias · 32. El hijo del policía',
      'Historias · 33. La niña del violín',
      'Historias · 34. Mensaje no enviado',
      'Historias · 35. Dos extraños',
      'Historias · 36. Pabellón seis',
      'Historias · 37. La maestra del páramo',
      'Historias · 38. Domingo en el hospital',
      'Historias · 39. El pescador',
      'Historias · 40. Después de mí',
      'Conciencia · 41. Pantallas',
      'Conciencia · 42. Mercado de almas',
      'Conciencia · 43. Pueblo dormido',
      'Conciencia · 44. Los de arriba',
      'Conciencia · 45. Libros contra balas',
      'Conciencia · 46. Migrante',
      'Conciencia · 47. Tierra prestada',
      'Conciencia · 48. Despierta',
      'Conciencia · 49. Semilla',
      'Conciencia · 50. Mañana es nuestro'
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

// Novedades de «Cómo contratar» y primeros libros del carrusel del home: el último publicado va primero
const ULTIMOS = ['ia-gestion-proyectos-bim-erpsqlite', 'bim-paso-a-paso-con-erpsqlite', 'manual-crm-odoo-19']

export const ultimosLibros = ULTIMOS.map((slug) => libros.find((libro) => libro.slug === slug))

// Todo el catálogo con las novedades delante, para el carrusel del home
export const librosPorNovedad = [...ultimosLibros, ...libros.filter((libro) => !ULTIMOS.includes(libro.slug))]
