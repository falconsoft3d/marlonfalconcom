// Contenido de la página "Cómo contratar mis servicios".
// Las condiciones salen del documento de forma de trabajo: /doc/forma_de_trabajo_mfh.pdf

const mensaje = encodeURIComponent('Hola Marlon, he visto tu web y quiero hablar contigo sobre un proyecto de Odoo.')
export const WHATSAPP = `https://wa.me/34662470645?text=${mensaje}`
export const EMAIL = `mailto:mfalconsoft@gmail.com?subject=${encodeURIComponent('Proyecto de Odoo ERP')}`
export const PDF_TARIFA = '/doc/forma_de_trabajo_mfh.pdf'

export const confianza = [
  { valor: '200+', etiqueta: 'proyectos' },
  { valor: '3000+', etiqueta: 'módulos Odoo' },
  { valor: '9', etiqueta: 'países' },
  { valor: '28k', etiqueta: 'seguidores en YouTube' }
]

export const ayudas = [
  {
    icono: 'building',
    color: 'var(--p-yellow)',
    titulo: 'Odoo para constructoras',
    texto: 'Implanto Odoo con BIM 2.0, mi vertical de construcción: presupuestos, certificaciones, costes y valor ganado.',
    enlace: { href: 'https://www.bim20.com', texto: 'Ver BIM 2.0' }
  },
  {
    icono: 'code',
    color: 'var(--p-blue)',
    titulo: 'Desarrollo a medida',
    texto: 'Módulos, informes e integraciones para lo que Odoo no trae de serie, con el código bajo tu control.'
  },
  {
    icono: 'rocket',
    color: 'var(--p-green)',
    titulo: 'Implementación de Odoo',
    texto: 'De la toma de requisitos a la puesta en marcha: configuración, migración de datos y formación a tu equipo.'
  },
  {
    icono: 'box',
    color: 'var(--p-lavender)',
    titulo: 'Módulos ya desarrollados',
    texto: '¿Has visto un módulo mío en redes? Mándame el enlace y te lo cotizo según las horas que llevó hacerlo.'
  },
  {
    icono: 'refresh',
    color: 'var(--p-pink)',
    titulo: 'Migraciones de versión',
    texto: 'Llevo tus desarrollos a la versión nueva de Odoo cuando decidas actualizar, sin perder datos.'
  },
  {
    icono: 'chat',
    color: 'var(--p-peach)',
    titulo: 'Auditoría y rescate',
    texto: '¿Tu Odoo de otro proveedor da errores? Lo audito, te digo qué falla y cuántas horas cuesta resolverlo.'
  }
]

export const tramos = [
  { horas: '1 – 5 h', precio: 120 },
  { horas: '5 – 20 h', precio: 100 },
  { horas: '20 – 100 h', precio: 65 },
  { horas: 'Más de 100 h', precio: 50, destacado: true }
]

export const pasos = [
  { titulo: 'Me escribes', texto: 'Por WhatsApp o email, con una idea general de lo que necesitas.' },
  { titulo: 'Reunión inicial', texto: 'Online por Google Meet, Zoom o Whereby. También presencial si hace falta.' },
  {
    titulo: 'Levantamiento (DRF)',
    texto: 'Documentamos cada requisito en TicketProo para que tu equipo lo revise y valide uno a uno.'
  },
  { titulo: 'Presupuesto por horas', texto: 'Con el alcance claro estimo las horas. Sin DRF no doy precio cerrado.' },
  { titulo: 'Lo evalúas', texto: 'Tienes 15 días para revisar el presupuesto con calma y decidir.' },
  {
    titulo: 'Arrancamos',
    texto: 'Con un anticipo del 50 %. En proyectos de más de 1000 horas, los pagos son mensuales.'
  },
  { titulo: 'Avances semanales', texto: 'Reuniones con lo hecho cada semana y cada petición registrada en un ticket.' },
  { titulo: 'Entrega y soporte', texto: 'Pagas el 50 % restante al recibirlo y, si quieres, seguimos con un plan de soporte.' }
]

export const razones = [
  {
    icono: 'globe',
    titulo: 'Experiencia real',
    texto: 'Más de 200 proyectos en 9 países y localizaciones de Odoo para Argentina, Chile, Panamá y Paraguay.'
  },
  {
    icono: 'file',
    titulo: 'Todo por escrito',
    texto: 'Requisitos, cambios y errores van a tickets: siempre sabes qué se pidió, qué se hizo y cuánto costó.'
  },
  {
    icono: 'award',
    titulo: 'Garantía de 3 años',
    texto: 'Sobre el trabajo entregado y validado, mientras mantengas el soporte y nadie más toque esos módulos.'
  },
  {
    icono: 'terminal',
    titulo: 'Desarrollo con IA',
    texto: 'Programo con asistentes de IA a diario: entrego antes y con pruebas, sin bajar la calidad.'
  },
  {
    icono: 'cap',
    titulo: 'Formación incluida en las horas',
    texto: 'Las horas sirven igual para desarrollo, formación o apoyo funcional. Tu equipo aprende a usarlo bien.'
  },
  {
    icono: 'users',
    titulo: 'Trato directo',
    texto: 'Hablas con quien hace el trabajo, sin intermediarios ni cuentas comerciales de por medio.'
  }
]

export const preguntas = [
  {
    p: '¿Das presupuesto cerrado?',
    r: 'Trabajo por horas. Primero hacemos el levantamiento (DRF) y con el alcance claro te doy una estimación. Si las horas estimadas no alcanzan, las adicionales se facturan aparte.'
  },
  {
    p: '¿La tarifa incluye IVA?',
    r: 'No. Todas las tarifas son más IVA, sin mínimo de horas. Cuantas más horas contratas, menor es el precio por hora.'
  },
  {
    p: '¿Odoo tendrá todo lo que necesito?',
    r: 'Normalmente Odoo cubre entre un 60 % y un 80 % de lo que busca una empresa. Te recomiendo revisar lo que trae de serie en odoo.com antes de empezar: lo que no esté en la documentación oficial se considera desarrollo.'
  },
  {
    p: '¿Con qué versiones trabajas?',
    r: 'Implanto y desarrollo en las versiones actuales de Odoo, Community y Enterprise. Recomiendo trabajar con una de las tres últimas versiones; si eliges Enterprise tendrás muchos más módulos.'
  },
  {
    p: '¿Ofreces soporte después de la entrega?',
    r: 'Sí, con planes mensuales según el tiempo de respuesta (72 h o 24 h) y las horas incluidas. El soporte no incluye nuevos desarrollos ni migraciones. Tienes los precios en el PDF de tarifas.'
  },
  {
    p: '¿Tengo que dedicarle tiempo a la implantación?',
    r: 'Sí. Cada proceso que diseñemos tienes que validarlo para comprobar que se comporta como lo necesitas. Si no se valida a tiempo, luego cuesta el doble en la operación.'
  },
  {
    p: '¿Mantienes la confidencialidad?',
    r: 'Sí. Ninguna de las partes comparte con terceros la información del proyecto sin una autorización firmada.'
  }
]
