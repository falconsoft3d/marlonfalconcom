---
title: ▷ Página web para tienda de mascotas y veterinaria en Odoo - Citas online y eCommerce
date: 2026/11/11
description: ▷ Página web para peluquería canina, veterinaria y tienda de mascotas en Odoo 19 - citas online validadas, servicios, equipo, testimonios y tienda online.
tag: odoo, odoo-19, modulos-odoo, tema-web, mascotas, citas-online
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Página web para tienda de mascotas y veterinaria en Odoo: citas online, servicios y tienda en uno

Un negocio de mascotas suele tener dos webs a medias: una página informativa para los servicios y otra plataforma para vender comida y accesorios. Las citas llegan por teléfono o WhatsApp y alguien las apunta a mano. **Web Pet1** es un **tema web para Odoo 19 (Community y Enterprise)** que reúne en un solo sitio la **web de tu negocio de cuidado de mascotas, las citas online y la tienda de mascotas**, con un pequeño back office propio: la aplicación **«Cuidado de mascotas»**.

Servicios, miembros del equipo y testimonios son registros de Odoo que se publican en la web con un clic, y la tienda es el **eCommerce de Odoo**, con el mismo stock, precios y pedidos que el resto de tu empresa.

## ¿Para quién es esta página web de mascotas en Odoo?

- **Peluquerías caninas y felinas** que quieren que sus clientes reserven online.
- **Clínicas veterinarias** que ofrecen revisiones y venden productos.
- **Residencias, hoteles y guarderías de mascotas**, **adiestradores y paseadores** de perros.
- **Tiendas de mascotas** que, además de vender comida, juguetes, camas y accesorios, prestan servicios.

Solo depende de módulos de Odoo Community: **eCommerce, lista de deseos, blog y conversaciones (mail)**.

## Funciones principales

### Landing page con personalidad que se convierte en tu página de inicio

Formas redondeadas, huellas, tarjetas onduladas y toques de color vivos. Al instalarlo, la landing pasa a ser tu **página de inicio**:

- **Hero** con tu título y texto, una mascota en el título, foto con forma orgánica, insignia giratoria, la tarjeta «Veterinario en el centro» y la **valoración media de tus testimonios**.
- **Sobre nosotros** con los años de experiencia de los ajustes y una lista de puntos.
- **Banda en movimiento** con una llamada a la acción como «Reserva tu cita online», editable y traducible.
- **Por qué elegirnos**: cuatro características con iconos.

<Image
  src="/images/posts/modulos-odoo/web_pet1/inicio.jpg"
  alt="Página de inicio de la web para tienda de mascotas y veterinaria en Odoo"
  width={1120}
  height={700}
  className="next-image"
/>

### Servicios para mascotas con su propia página

Peluquería, revisiones veterinarias, alojamiento, adiestramiento, guardería, paseos… cualquier servicio que ofrezcas. Cada uno aparece en **tarjetas onduladas** con icono, descripción breve, **precio «desde» y duración**. En **/services** se listan todos los servicios publicados y cada `/service/<nombre>` tiene foto, datos, descripción larga, horario, **campos SEO** y un formulario de cita con el servicio ya seleccionado.

<Image
  src="/images/posts/modulos-odoo/web_pet1/servicios.jpg"
  alt="Servicios de peluquería, veterinaria y alojamiento de mascotas en la web de Odoo"
  width={1120}
  height={700}
  className="next-image"
/>

### Citas online para mascotas que llegan a Odoo

El formulario de cita está en una banda de la página de inicio, en cada página de servicio y en la página completa **/appointment**. Recoge nombre del dueño, e-mail, teléfono, **nombre de la mascota, especie (perro, gato, pájaro, conejo u otra), raza, edad**, servicio, fecha, hora y notas.

- **Validadas**: e-mail válido, servicio publicado, una hora de la lista, **sin fechas pasadas**, sin superar la ventana de reserva y domingos solo si los permites. Si hay errores, el formulario conserva los valores y los muestra.
- **Protegidas** con token CSRF y un campo trampa oculto contra los robots.
- **En Odoo**: la cita se crea como «Nueva» con origen «Sitio web», el **cliente se vincula por e-mail o se crea**, y el responsable del servicio recibe una actividad.

<Image
  src="/images/posts/modulos-odoo/web_pet1/cita-online.jpg"
  alt="Formulario de cita online para mascotas con especie, raza, servicio, fecha y hora en Odoo"
  width={1120}
  height={700}
  className="next-image"
/>

### La aplicación «Cuidado de mascotas»: kanban y calendario de citas

Un pequeño back office con su propio menú y permisos de acceso:

- **Citas** en **kanban por estado** (nueva, confirmada, hecha, cancelada), **calendario por servicio y responsable**, lista y formulario con chatter y actividades, y filtros de próximas, mías o desde el sitio web.
- **Servicios** con icono, foto, descripciones, precio desde, duración, responsable y publicación.
- **Equipo y testimonios** con fotos, puestos, biografías, enlaces sociales y reseñas con valoración de 1 a 5.
- **Seguridad** en dos niveles (Usuario y Administrador): los visitantes solo leen lo publicado y nadie más lee las citas.

<Image
  src="/images/posts/modulos-odoo/web_pet1/citas-kanban.jpg"
  alt="Kanban de citas de mascotas por estado en la aplicación Cuidado de mascotas de Odoo"
  width={1120}
  height={700}
  className="next-image"
/>

### Tienda de mascotas sobre el eCommerce de Odoo

Comida, juguetes, camas y accesorios con tus productos y tus categorías. La página de inicio muestra **pestañas con las categorías principales** que cambian sin recargar, y las **tarjetas de producto** incluyen insignias de oferta, cintas, precios de comparación, lista de deseos y añadir al carrito. Las páginas de tienda, producto y carrito son las estándar de Odoo con el estilo del tema, así que **todos los proveedores de pago, métodos de envío y tarifas siguen funcionando**.

### Equipo, testimonios, contadores y blog que generan confianza

- **Contadores animados**: años de experiencia y mascotas felices (de los ajustes), especialistas y servicios (de tus registros).
- **Equipo** con fotos redondas, huellas y enlaces sociales; **/team** muestra también las biografías.
- **Testimonios** en un carrusel con estrellas, foto y mascota.
- **Blog y pie de página** con las tres últimas entradas, una galería, el horario y una **newsletter** que crea contactos con la etiqueta «Newsletter».

### Colores, textos y horarios desde Odoo

En **Sitio web › Configuración › Diseño Pet** (o Cuidado de mascotas › Configuración › Diseño) defines los **colores primario y secundario**, que también se aplican a la paleta del editor web, los textos del hero y de la banda en movimiento, el **horario de apertura** entre semana, sábado y domingo, la primera y última hora reservable, la franja en minutos, la **ventana de reserva** y los contadores.

### Inglés, español y catalán, RGPD y mobile-first

Los tres idiomas se instalan con el módulo, con todo traducido: páginas, cabecera, pie, errores del formulario, back office y datos de demostración. La **barra de cookies de Odoo** está activada y las fuentes Fredoka y Nunito las sirve el módulo, así que no se carga nada de terceros antes del consentimiento. Cada bloque funciona **desde 320 px**, con dos productos por fila y formularios a todo el ancho en móvil.

## Beneficios para tu negocio de mascotas

- **Web y back office en uno**: citas, servicios, equipo y testimonios se gestionan en Odoo, no en el código de las páginas.
- **Vende mientras cuidas**: la tienda es tu eCommerce de Odoo, con el mismo stock, precios y pedidos.
- **Menos llamadas**: los clientes reservan online con fechas y horas validadas y tu equipo confirma desde un kanban o un calendario.
- **Tuyo para cambiarlo**: colores, logo, textos, horarios y fotos con el editor web y un formulario de ajustes.

Si lo tuyo es una clínica de personas en lugar de una veterinaria, echa un vistazo a la [página web para clínicas con citas online en Odoo](/posts/pagina-web-para-clinicas-con-citas-online-en-odoo).

## Preguntas frecuentes

**¿Adónde van las citas del sitio web?**
A Cuidado de mascotas › Citas, como «Nueva», con el cliente vinculado o creado a partir del e-mail y una actividad para el responsable del servicio.

**¿Pueden los visitantes reservar en el pasado o de noche?**
No. Solo fechas futuras dentro de la ventana de reserva y en las horas entre la primera y la última cita definidas en los ajustes.

**¿Quién puede ver las citas?**
Solo los usuarios de los grupos de «Cuidado de mascotas». Los visitantes y los demás usuarios solo pueden leer los servicios, miembros del equipo y testimonios publicados.

**¿Tengo que vender productos?**
No. Si no hay productos publicados, la sección de tienda de la página de inicio se oculta.

**¿Sustituye mi página de inicio?**
Al instalarlo, /pet-care pasa a ser la página de inicio de los sitios web que no tienen una personalizada. Puedes cambiarla en Diseño Pet, en el campo URL de la página de inicio.

**¿Incluye datos de demostración?**
Sí: 6 servicios, 12 productos en 4 categorías, 4 miembros del equipo, 4 testimonios, 9 citas y 3 entradas de blog con fotos. En una base de datos sin datos de demostración, el botón «Cargar datos de ejemplo» de Diseño Pet los carga una vez, sin duplicados.

## Descarga el módulo

Puedes ver la ficha completa, todas las capturas y el precio de **Web Pet1** en la [tienda de temas Odoo](/tienda/odoo-template/19.0/web_pet1). Si quieres adaptar la web a tu peluquería, veterinaria o tienda de mascotas, o conectarla con el resto de tu Odoo, [contáctame](/contacto) y lo vemos juntos.
