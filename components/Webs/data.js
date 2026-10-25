// Comentarios de cada web, redactados con IA a partir del contenido y la captura de cada sitio.
// La clave es el slug del dominio (ver slug.js); la captura está en /images/webs/<slug>.png.
// Si añades una web nueva a la tabla mis_webs, aparecerá sola en la página;
// para que tenga captura ejecuta `npm run webs:shots` y añade aquí su comentario.

export const webs = [
  {
    slug: 'bim20-com',
    web: 'www.bim20.com',
    nombre: 'BIM 2.0',
    categoria: 'ERP · Construcción',
    comentario:
      'La web comercial de la vertical de construcción para Odoo. Va directa al grano: formulario de contacto en la portada y acceso inmediato a la presentación y al vídeo de ventas. Explica bien el alcance: presupuestos de obra, certificaciones de avance, registro de costes, análisis coste/beneficio y método del valor ganado.',
    destacados: ['Formulario de contacto en portada', 'Documentación, demo y curso básico', '24 funciones estándar sobre Odoo 17']
  },
  {
    slug: 'ticketproo-com',
    web: 'www.ticketproo.com',
    nombre: 'TicketProo',
    categoria: 'SaaS · Tickets',
    comentario:
      'Sistema de gestión de tickets con IA integrada para clasificar incidencias y sugerir respuestas. La portada, en tonos violeta, combina métricas, un buscador de catálogo y el blog, así que sirve tanto de producto como de escaparate. Es un proyecto de código abierto.',
    destacados: ['Clasificación de tickets con IA', 'Catálogo de productos y servicios', 'Código abierto']
  },
  {
    slug: 'erp-sqlite-xyz',
    web: 'www.erp-sqlite.xyz',
    nombre: 'ERPSqlite',
    categoria: 'ERP · Escritorio',
    comentario:
      'Un ERP de escritorio que funciona sin servidor: se descarga, se descomprime y guarda los datos en archivos SQLite, con una API compatible con Odoo. La captura del propio programa en la portada deja claro de un vistazo todo lo que incluye: ventas, tienda online, inventario, fabricación, RR. HH., presupuestos de obra con CAD y asistentes con IA.',
    destacados: ['Windows y macOS', 'Prueba gratuita de 90 días', 'API compatible con Odoo']
  },
  {
    slug: 'desk20-com',
    web: 'www.desk20.com',
    nombre: 'Desk20',
    categoria: 'SaaS · Soporte',
    comentario:
      'Plataforma de helpdesk inspirada en Zendesk que reúne tickets, conversaciones y clientes en un solo sitio. La portada es limpia y con una propuesta muy clara, con llamadas a la acción para empezar gratis o ver el dashboard. También es de código abierto.',
    destacados: ['Tickets con prioridades y agentes', 'Métricas en tiempo real', 'Código abierto']
  },
  {
    slug: 'openattendify-xyz',
    web: 'www.openattendify.xyz',
    nombre: 'OpenAttendify',
    categoria: 'SaaS · RR. HH.',
    comentario:
      'Control de asistencia de empleados: registro de entradas y salidas, ficha de empleados e informes, con soporte multiempresa. La portada explica qué hace en una frase y usa una foto de equipo que la hace cercana. Es de código abierto.',
    destacados: ['Multiempresa', 'Informes de asistencia', 'Código abierto']
  },
  {
    slug: 'nooxial-com',
    web: 'www.nooxial.com',
    nombre: 'Nooxial',
    categoria: 'Formación · LMS',
    comentario:
      'Plataforma de cursos online con una portada llamativa en verde lima y un mensaje directo: aprende a tu ritmo y sin suscripciones. Ya ofrece cursos de Odoo 19 (contabilidad, inventario, compras y básico) con certificados que se pueden compartir en LinkedIn.',
    destacados: ['Cursos de Odoo 19', 'Certificados para LinkedIn', 'Empieza gratis, sin tarjeta']
  },
  {
    slug: 'loocalproject-com',
    web: 'www.loocalproject.com',
    nombre: 'LoocalProject',
    categoria: 'App · Planificación',
    comentario:
      'Cronogramas para proyectos pequeños, con tareas y recursos, que se guardan en el propio navegador: sin cuentas ni servidores. Una idea muy práctica para planificar una obra rápido. Está en español e inglés y permite importar proyectos desde una URL.',
    destacados: ['Datos solo en tu navegador', 'Español e inglés', 'Importar proyectos por URL']
  },
  {
    slug: 'calculo-materiales-blue-vercel-app',
    web: 'calculo-materiales-blue.vercel.app',
    nombre: 'Cálculo de Materiales',
    categoria: 'Utilidad · Construcción',
    comentario:
      'Una calculadora sencilla para obra: eliges qué calcular (hormigón, bloque, ladrillo, pladur, repello o pintura) y te da los materiales necesarios. La interfaz es oscura y minimalista, con botones grandes, pensada para usarla en el móvil a pie de obra.',
    destacados: ['7 tipos de cálculo', 'Sin registro', 'Resumen de materiales']
  },
  {
    slug: 'erpmania-com',
    web: 'www.erpmania.com',
    nombre: 'ERPMania',
    categoria: 'Blog · Odoo',
    comentario:
      'Colección de trucos para Odoo y otros ERP, filtrable por ERP y por versión, con el nivel de dificultad de cada truco. El formato de lista es muy rápido de consultar: funciona como una chuleta para desarrolladores y administradores.',
    destacados: ['Filtros por ERP y versión', 'Nivel de dificultad por truco', 'Hecho con Next.js']
  },
  {
    slug: 'marlonfalcon-com',
    web: 'www.marlonfalcon.com',
    nombre: 'MarlonFalcon.com',
    categoria: 'Portfolio · Blog',
    comentario:
      'Esta misma web: portfolio, servicios y un blog con 287 artículos sobre Odoo, ERP y programación. Tiene modo claro y oscuro, buscador de artículos por categorías y el CV descargable en PDF en español e inglés.',
    destacados: ['287 artículos técnicos', 'Buscador por categorías', 'CV en español e inglés']
  }
]
