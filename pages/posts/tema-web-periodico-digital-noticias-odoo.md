---
title: ▷ Tema web de periódico digital para Odoo - Web de noticias y revista sobre el Blog de Odoo
date: 2026/11/11
description: ▷ Tema de periódico digital para Odoo 19 - portada de diario, teletipo de última hora, secciones con color, lo más leído, autores, vídeo y boletín.
tag: odoo, odoo-19, modulos-odoo, tema-web, periodico-digital, web-de-noticias
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Tema web de periódico digital para Odoo: una web de noticias con portada de diario

Un **periódico digital** o una **revista online** necesita algo más que un blog: una portada con las noticias más importantes, secciones claras, un **teletipo de última hora** y una barra lateral que mantenga al lector dentro del sitio. Con el Blog estándar de Odoo todo eso hay que montarlo a mano, bloque a bloque. **News Web J1** es un **tema de noticias y revista para Odoo 19 (Community y Enterprise)** que convierte el Blog de Odoo en un diario: cada blog es una **sección del periódico** (Mundo, Economía, Deportes, Tecnología, Cultura, Salud…) y cada publicación es un **artículo** con su autor, fecha, portada, etiquetas y número de visitas.

Es un solo módulo y no hay nada más que comprar. Solo depende de **Sitio web, Blog y Conversaciones (mail)**, todos incluidos en Odoo Community. La publicación, las etiquetas, el SEO, las traducciones y el constructor de sitios web siguen siendo los de Odoo, con unos pocos campos extra pensados para el periódico.

## ¿Para quién es este tema de noticias para Odoo?

- **Periódicos digitales locales y regionales** que quieren una portada de diario sin pagar una plataforma aparte.
- **Revistas online y medios temáticos** (deportes, tecnología, cultura, salud) que organizan su contenido por secciones.
- **Empresas, asociaciones y colegios profesionales** que publican mucha actualidad y quieren que su blog parezca un medio de comunicación.
- **Agencias y redacciones** que ya trabajan con Odoo y prefieren tener la web y la gestión en el mismo sistema.

## Funciones principales

### Portada de periódico generada con tus artículos

La portada se construye sola a partir de los **artículos publicados**. Arriba, una barra con la fecha, tus redes sociales, el selector de idioma, el acceso y la **búsqueda de noticias**. Debajo, una **cabecera de diario** con tu logotipo centrado, un eslogan traducible, la fecha de la edición y un botón de suscripción. El menú muestra las secciones con sus colores junto a los elementos del menú de tu sitio web.

<Image
  src="/images/posts/modulos-odoo/news_web_j1/portada.jpg"
  alt="Portada de periódico digital en Odoo con cabecera de diario, menú de secciones y mosaico de noticias destacadas"
  width={1280}
  height={800}
  className="next-image"
/>

### Teletipo de última hora y mosaico de destacados

Marca un artículo como **«Última hora»** y aparecerá en el **teletipo**, que pasa las noticias de una en una, con flechas, y se detiene al pasar el ratón por encima. Los artículos marcados como **«Destacado»** forman el **mosaico de la portada**, que se completa con los más recientes y una franja de titulares debajo.

### Secciones del periódico con color propio

Cada blog es una sección con su **color**, que se usa en el menú, en las etiquetas y en las barras de título. Las dos primeras secciones de la portada se muestran en formato ancho, con un artículo grande y una lista; las siguientes van en parejas de columnas. En cada sección decides si se **muestra en la portada** y en qué orden, y en los ajustes eliges cuántos artículos muestra cada bloque (de 2 a 10).

### Lo más leído, autores principales y nube de etiquetas

La **barra lateral** está pensada para que el lector siga navegando:

- **Lo más leído**, ordenado por las visitas reales que registra Odoo, con barras y número de vistas, y una pestaña con las últimas noticias.
- **Autores principales**, los que más artículos han publicado, con su foto.
- **Nube de etiquetas** de los artículos publicados y una caja de suscripción al boletín.

<Image
  src="/images/posts/modulos-odoo/news_web_j1/lo-mas-leido.jpg"
  alt="Barra lateral de la web de noticias en Odoo con lo más leído, autores principales y nube de etiquetas"
  width={1280}
  height={800}
  className="next-image"
/>

### Bloque de vídeo y fotos sin cookies de terceros

Pega una **URL de YouTube o Vimeo** en cualquier artículo y el vídeo se reproduce en el propio sitio, también en la página del artículo en lugar de la imagen de portada. El vídeo solo se carga cuando el lector pulsa reproducir, desde el dominio sin cookies de YouTube: antes de eso no llega nada a ningún tercero. El bloque se completa con **historias en fotos** de tus artículos más leídos.

### Páginas de sección y de artículo con diseño de diario

Las páginas del Blog de Odoo adoptan el diseño del periódico:

- **Página de sección**: título con el color de la sección, ruta de navegación, tarjetas y paginación. Las páginas de etiqueta, de búsqueda y de «todas las noticias» usan el mismo diseño.
- **Página del artículo**: color de la sección, fecha, autor, **tiempo de lectura**, vistas, portada o vídeo, caja del autor, **botones para compartir**, etiquetas y **artículos relacionados** de la misma sección.

El título y el texto del artículo se siguen editando en el constructor de sitios web, como siempre.

<Image
  src="/images/posts/modulos-odoo/news_web_j1/articulo.jpg"
  alt="Página de artículo del periódico digital en Odoo con tiempo de lectura, autor y botones para compartir"
  width={1280}
  height={800}
  className="next-image"
/>

### Una página para cada autor

Cada periodista tiene su **página de autor** en `/news/author/...` con foto, cargo, biografía, número de artículos y de vistas, y sus artículos con paginación. La foto, el nombre y el puesto salen del contacto de Odoo; la biografía es un campo nuevo traducible. Por privacidad, solo tienen página los autores con artículos publicados.

### Boletín de noticias con suscriptores en Odoo

El formulario de **newsletter** convierte cada correo en un **contacto con la etiqueta «Boletín»**, listado en Sitio web › Configuración › Suscriptores del boletín y listo para tus campañas de correo electrónico. Incluye validación del correo y un campo oculto contra robots. El pie de página muestra tus datos de contacto, redes sociales, las últimas publicaciones y las secciones.

### Configuración del periódico desde Odoo

En **Sitio web › Configuración › Diseño de noticias** (o en los ajustes del Sitio web) defines el **color principal**, que también se aplica a la paleta del constructor de sitios web, el eslogan de la cabecera, si el teletipo está activo, los artículos por bloque de sección y por página. En cada artículo tienes la imagen de portada, «Destacado», «Última hora», la URL del vídeo y el tiempo de lectura, que se calcula a partir del texto.

<Image
  src="/images/posts/modulos-odoo/news_web_j1/ajustes.jpg"
  alt="Ajustes de Diseño de noticias en Odoo con color principal, eslogan y opciones del teletipo"
  width={1280}
  height={800}
  className="next-image"
/>

### Datos de ejemplo con un clic

Un botón **«Cargar datos de ejemplo»** carga las secciones, artículos, autores y fotos en una base de datos creada sin datos de demostración, y deja el sitio web como la demo. Nada se duplica y tus datos reales nunca se sustituyen.

### Tres idiomas y diseño para móvil

El tema se instala en **inglés, español y catalán**, con el selector de idioma en la cabecera y todo traducido: páginas, cabecera, pie, ajustes y artículos de ejemplo. Está **diseñado para móvil primero**: mosaico apilado, una franja con las secciones bajo la cabecera y el menú móvil de Odoo. Las imágenes se cargan de forma diferida, el JavaScript es ligero y las fuentes Roboto y Roboto Condensed las sirve el propio módulo.

## Beneficios de montar tu periódico digital en Odoo

- **Diseño de diario profesional**: teletipo, mosaico, secciones, lo más leído y autores, lo que el lector espera de un medio.
- **Sin datos duplicados**: artículos, etiquetas, autores, visitas y SEO se quedan en el Blog estándar de Odoo.
- **Solo contenido publicado**: los borradores y las publicaciones programadas nunca llegan a la portada, al teletipo, a la barra lateral ni a las páginas de autor.
- **A tu medida**: tu logotipo, color, secciones y textos, con el constructor de sitios web y un formulario de ajustes.
- **Pensado para el RGPD**: barra de cookies de Odoo activada, fuentes servidas por el módulo y vídeos que solo se cargan al pulsar reproducir.

## Cómo empezar con tu web de noticias

1. **Instala** News Web J1. La ruta `/news` pasa a ser la página de inicio de los sitios web que no tienen una personalizada.
2. **Crea las secciones** en Sitio web › Sitio › Blogs, eligiendo el color de cada una y si se muestra en la portada.
3. **Publica artículos** en Sitio web › Sitio › Publicaciones del blog y marca «Destacado» o «Última hora» para el mosaico y el teletipo.
4. **Ajusta el diseño** en Sitio web › Configuración › Diseño de noticias.

## Preguntas frecuentes

**¿Necesito otro módulo para usar el tema de noticias?**
No. Depende del Sitio web, el Blog y el correo de Odoo, todos incluidos en Community.

**¿Sustituye mi página de inicio?**
Al instalarlo, `/news` pasa a ser la página de inicio de los sitios web sin una portada personalizada. Puedes cambiarlo en Diseño de noticias y, si desinstalas el módulo, se restaura.

**¿Cómo pongo un artículo en el teletipo de última hora?**
Abre el artículo en Sitio web › Sitio › Publicaciones del blog y marca «Última hora». Para el mosaico de la portada, marca «Destacado». Solo se muestran los artículos publicados.

**¿Dónde veo los suscriptores del boletín?**
En Sitio web › Configuración › Suscriptores del boletín. Son contactos de Odoo con la etiqueta «Boletín».

**¿Incluye datos de demostración?**
Sí: seis secciones, 31 artículos ficticios con fotos, seis autores y etiquetas. Los textos están escritos para el tema, sin personas ni hechos reales.

**¿Qué idiomas incluye?**
Inglés, español y catalán.

## Descarga el módulo

Puedes ver la ficha completa, todas las capturas y el precio de **News Web J1** en la [tienda de temas Odoo](/tienda/odoo-template/19.0/news_web_j1). Si quieres adaptar el tema a la imagen de tu medio o migrar tus noticias a Odoo, [contáctame](/contacto) y lo vemos juntos.
