// Catálogo de /libros. Para añadir un libro: portada en public/images/libros, una entrada aquí y su slug al principio de ULTIMOS.
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
const ULTIMOS = ['manual-bim-2-0', 'vender-erp-con-el-metodo-spin', 'cuidar-mayores-trastorno-bipolar']

export const ultimosLibros = ULTIMOS.map((slug) => libros.find((libro) => libro.slug === slug))

// Todo el catálogo con las novedades delante, para el carrusel del home
export const librosPorNovedad = [...ultimosLibros, ...libros.filter((libro) => !ULTIMOS.includes(libro.slug))]
