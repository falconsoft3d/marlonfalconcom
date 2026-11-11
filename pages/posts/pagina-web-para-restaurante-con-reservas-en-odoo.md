---
title: ▷ Página web para restaurante en Odoo - Carta online y reserva de mesas
date: 2026/11/11
description: ▷ Web para restaurante en Odoo 19 - carta online con precios y etiquetas dietéticas, reserva de mesas, calendario de reservas, chefs, opiniones y galería.
tag: odoo, odoo-19, modulos-odoo, tema-web, restaurantes, reservas-online
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Página web para restaurante en Odoo: carta online, reserva de mesas y gestión de reservas

Muchos restaurantes tienen la carta en un PDF desactualizado, las reservas repartidas entre el teléfono, WhatsApp y una libreta, y una web que nadie se atreve a tocar. Cada cambio de precio o de plato obliga a llamar al diseñador, y cada reserva mal apuntada es una mesa vacía. **Restaurant Web U1** es un módulo para **Odoo 19 (Community y Enterprise)** que reúne en un solo sitio la **página web del restaurante** y su **gestión interna**: carta online, **reserva de mesas** y una app Restaurante para el equipo.

Es un solo módulo, sin nada más que comprar. Solo necesita **Sitio web, Blog y Conversaciones (mail)**, todos en Odoo Community, y no requiere el comercio electrónico. Añade una app **Restaurante** con sus propios grupos de seguridad (Restaurante / Usuario y Restaurante / Responsable) y una web que pasa a ser tu página de inicio.

## ¿Para quién es esta web de restaurante en Odoo?

- **Restaurantes, bistrós y asadores** que quieren una web cuidada con la carta siempre al día.
- **Locales con mucha demanda de reservas** que necesitan recibirlas online con sus reglas de horario y aforo.
- **Grupos de hostelería y restaurantes que ya usan Odoo** y quieren tener la web y las reservas en el mismo sistema.
- **Restaurantes con opciones vegetarianas, veganas o sin gluten** que quieren que el cliente las encuentre fácilmente.

## Funciones principales

### Página de inicio que abre el apetito

Títulos caligráficos, bordes en dientes de sierra y grandes fotos de platos: el ambiente de un restaurante clásico construido con tus datos de Odoo. La portada incluye un **slider de tres diapositivas** a pantalla completa con tu nombre, eslogan y botones hacia la carta y las reservas; la sección **Nuestra historia** con letra capital, firma de los chefs, números animados y collage de fotos; y un slider con los **especiales del chef**, con foto, descripción, precio y botón de reserva.

<Image
  src="/images/posts/modulos-odoo/restaurant_web_u1/portada.jpg"
  alt="Página web de restaurante en Odoo con slider de portada y botones hacia la carta y las reservas"
  width={1280}
  height={800}
  className="next-image"
/>

### Carta online siempre actualizada

Cada plato es un registro de la app Restaurante: **publícalo y aparecerá en la web**. En la portada, las categorías se convierten en pestañas y «Todo» muestra los primeros platos de cada una. Cada plato lleva foto redonda, nombre, una línea de puntos hasta el **precio en la moneda de tu empresa**, los ingredientes y sus etiquetas.

La página `/menu` muestra **todos los platos publicados por categoría**, con descripciones y filtros «Vegetariano», «Vegano», «Sin gluten» y «Picante».

<Image
  src="/images/posts/modulos-odoo/restaurant_web_u1/carta.jpg"
  alt="Carta online del restaurante en Odoo con platos por categoría, precios y etiquetas dietéticas"
  width={1280}
  height={800}
  className="next-image"
/>

### Etiquetas dietéticas en cada plato

Marca los platos como **vegetariano, vegano, sin gluten, picante, nuevo o especial del chef** y se mostrarán con distintivos de colores. En la ficha del plato también registras los **alérgenos**, el orden y si está publicado.

### Reserva de mesas online con reglas de horario

El formulario **«Reservar mesa»** está en la página de inicio y en `/reservation`. Pide nombre, correo, teléfono, fecha, **franjas horarias** y comensales y, en la página de reservas, también la ocasión, la ubicación y las peticiones especiales.

Cada solicitud se comprueba: no admite fechas ni horas pasadas, respeta tu **horario de reservas**, tu **día de cierre**, tu **ventana de reserva** y el **tamaño máximo de grupo**. Está protegido con token CSRF, un campo trampa oculto contra robots y validación del correo. Al terminar, el cliente ve una página de confirmación con la referencia, la fecha, la hora y los comensales.

<Image
  src="/images/posts/modulos-odoo/restaurant_web_u1/reserva.jpg"
  alt="Formulario de reserva de mesas online en Odoo con fecha, franja horaria, comensales y ocasión"
  width={1280}
  height={800}
  className="next-image"
/>

### App Restaurante para gestionar las reservas

Cada solicitud de la web llega como una **reserva en Odoo**, con el cliente como contacto. El equipo la gestiona en un **kanban por estado** (Nueva, Confirmada, En mesa, Hecha, Cancelada y No presentado) con comensales, ocasión y mesa, y también en **calendario, lista, tabla dinámica y gráfico** para ver el servicio del día y de la semana y analizar los cubiertos.

El formulario de reserva tiene botones **Confirmar, Sentar a los clientes, Hecha, No presentado y Cancelar**, con chatter y actividades. Al pulsar «Confirmar», el cliente recibe un **correo de confirmación** en su idioma. Las solicitudes web se asignan al responsable indicado en los ajustes, con una actividad para confirmarlas.

<Image
  src="/images/posts/modulos-odoo/restaurant_web_u1/reservas-kanban.jpg"
  alt="Kanban de reservas de restaurante en Odoo por estado - nueva, confirmada, en mesa y no presentado"
  width={1280}
  height={800}
  className="next-image"
/>

### Chefs, opiniones de clientes y galería

En **Restaurante › Chefs** guardas la foto, el puesto, la biografía, el plato estrella y las redes de cada cocinero; aparecen en la portada y en la página `/chefs`. Las **opiniones de clientes**, con texto, estrellas y foto, se muestran en un slider. La **galería** de ocho fotos en mosaico se edita con el constructor de sitios web e incluye un visor a pantalla completa que funciona con las flechas del teclado y Escape.

### Blog, contacto y pie de página

Las páginas interiores comparten un banner con foto, título caligráfico y ruta de navegación. El **blog de Odoo** adopta el tema y la portada muestra las «Últimas noticias»; se incluye un blog de demostración, «Diario de cocina». La página de **contacto** usa el formulario de Odoo con la dirección, el teléfono, el correo y el **horario de apertura**. El pie lleva tu logotipo en blanco, dirección, horario, un botón de reserva y tus redes sociales.

### Diseño y reglas de reserva desde Odoo

En **Restaurante › Configuración › Diseño** (o en los ajustes del Sitio web) defines el color principal, que también se aplica a la paleta del constructor de sitios web, el color oscuro, el logotipo en blanco, la página de inicio, el eslogan y el horario de apertura traducibles. Ahí también configuras las **reglas de reserva**: primera y última hora, franjas horarias, día de cierre, máximo de comensales, ventana de reserva, tiempo de mesa, responsable y correo de confirmación.

### Tres idiomas y diseño para móvil

Se instala en **inglés, español y catalán**, con todo traducido: páginas, cabecera, pie, app Restaurante, correo y carta de demostración. Cada bloque funciona desde 320 px, con un botón **«Reservar» en la cabecera móvil**, pestañas desplazables y campos de formulario grandes. Las imágenes se cargan de forma diferida y las fuentes Dancing Script, Oswald y Lato las sirve el propio módulo, así que no se carga nada de terceros antes del consentimiento de cookies.

## Beneficios para tu restaurante

- **Web y gestión interna en uno**: las reservas de la web llegan directamente a la app Restaurante de tu equipo.
- **Datos reales, no páginas estáticas**: platos, precios, chefs y opiniones son registros de Odoo; los cambias una vez y la web se actualiza.
- **Menos ausencias y llamadas**: reglas de reserva claras, página de confirmación y correo con la referencia.
- **A tu medida**: tus colores, logotipo, textos, fotos y horario, con el constructor de sitios web y un formulario de ajustes.
- **Reservas privadas**: solo los usuarios de los grupos Restaurante pueden verlas; los visitantes solo ven platos, chefs y opiniones publicados.

## Cómo empezar con tu web de restaurante

1. **Instala** Restaurant Web U1. La ruta `/restaurant` pasa a ser la página de inicio de los sitios web sin una personalizada.
2. **Configura el diseño y las reglas de reserva** en Restaurante › Configuración › Diseño.
3. **Carga tu carta** en Restaurante › Carta con platos, categorías, precios y etiquetas, y publícalos.
4. **Da acceso al equipo** con los grupos Restaurante / Usuario o Restaurante / Responsable.

## Preguntas frecuentes

**¿Necesito el comercio electrónico de Odoo?**
No. Solo depende de Sitio web, Blog y Conversaciones (mail), todos en Community.

**¿Sustituye mi página de inicio?**
Al instalarlo, `/restaurant` pasa a ser la página de inicio de los sitios web que no tienen una personalizada. Puedes cambiarlo en Diseño del restaurante y, al desinstalar, se restaura.

**¿Cómo se validan las reservas online?**
La fecha no puede estar en el pasado ni fuera de la ventana de reserva, la hora debe estar entre tu primera y tu última hora de reserva, el día de cierre se rechaza y el grupo debe estar dentro de tu máximo de comensales.

**¿El cliente recibe un correo de confirmación?**
Sí, cuando pulsas «Confirmar» recibe un correo en su idioma. Se puede desactivar en los ajustes de diseño.

**¿Puedo cambiar las fotos de la página de inicio?**
Sí. La galería y los bloques entre secciones se editan con el constructor de sitios web; los platos, chefs y opiniones vienen de la app Restaurante.

**¿Incluye datos de demostración?**
Sí: 7 categorías, 28 platos con fotos, 4 chefs, 4 opiniones, 9 reservas y 3 entradas de blog. En una base de datos sin demo, el botón «Cargar datos de ejemplo» los carga sin duplicar ni sobrescribir nada.

## Descarga el módulo

Puedes ver la ficha completa, todas las capturas y el precio de **Restaurant Web U1** en la [tienda de temas Odoo](/tienda/odoo-template/19.0/restaurant_web_u1). Si quieres adaptar la web a la imagen de tu restaurante o ampliar la gestión de reservas, [contáctame](/contacto) y lo vemos juntos.
