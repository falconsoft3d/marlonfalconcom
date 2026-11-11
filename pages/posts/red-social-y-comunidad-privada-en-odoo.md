---
title: ▷ Red social y comunidad privada en Odoo - Perfiles, muro de noticias, amigos y moderación
date: 2026/11/11
description: ▷ Crea una red social privada en el sitio web de Odoo 19 - perfiles con portada, muro de noticias, fotos y vídeos, amigos, notificaciones, denuncias y moderación.
tag: odoo, odoo-19, modulos-odoo, red-social, comunidad-online, temas-odoo
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Red social y comunidad privada en Odoo: perfiles, muro de noticias y moderación

Asociaciones, clubes, colegios profesionales o empresas con una base de clientes fiel suelen montar su **comunidad online** en un grupo de Facebook, un canal de mensajería o una plataforma externa. El problema es siempre el mismo: los datos de los miembros viven en manos de otro, cada persona necesita otra cuenta y no hay forma real de controlar la privacidad ni la moderación. **Falcon Social S1** es un tema web para **Odoo 19 (Community y Enterprise)** que convierte el sitio web de Odoo en una **red social privada**: perfiles con portada, muro de noticias, publicaciones con fotos y vídeos, me gusta, comentarios, amigos, notificaciones y una aplicación de moderación en el backoffice.

Los miembros son **usuarios del portal de Odoo**: mismo registro, mismo inicio de sesión y ninguna base de datos aparte.

## ¿Para quién es esta red social en Odoo?

- **Asociaciones, clubes y colectivos** que quieren un espacio propio para sus socios, sin depender de redes sociales comerciales.
- **Empresas que ya usan Odoo** y desean crear una comunidad de clientes, socios o distribuidores con la misma cuenta del portal.
- **Comunidades de vecinos, alumnos o profesionales** que necesitan publicar, comentar y conectar en un entorno privado y moderado.
- **Organizaciones europeas** que buscan una comunidad con consentimiento de cookies y sin terceros cargados antes del consentimiento.

Solo depende de **Sitio web**, **Portal** y **Conversaciones (mail)**, todos incluidos en Odoo Community. No hay nada más que comprar.

## Funciones principales

### Página de inicio de la comunidad lista en un clic

Al instalarlo, la portada de la comunidad pasa a ser la **página principal del sitio web**. Muestra el nombre y el lema de la comunidad con los botones para unirse e iniciar sesión, **cifras reales** de miembros, publicaciones y amistades leídas de tu base de datos, y una sección de privacidad con llamada a la acción. Solo aparecen los miembros y publicaciones marcados como públicos, así que nadie queda expuesto sin quererlo.

### Muro de noticias con editor de publicaciones

El **muro de noticias** reúne en tres columnas las publicaciones de los amigos y las publicaciones públicas de la comunidad. El editor permite escribir texto, subir **hasta cuatro fotos**, pegar un enlace de **YouTube o Vimeo** y elegir la visibilidad de cada publicación. Las publicaciones muestran galerías de fotos, me gusta con las caras de quien los dio, comentarios con sus propios me gusta y un botón «Cargar más». En los laterales aparecen el mini perfil, los cumpleaños del día, sugerencias de amistad, las últimas fotos y la actividad reciente.

<Image
  src="/images/posts/modulos-odoo/falcon_social_s1/muro.jpg"
  alt="Muro de noticias de la red social en Odoo con editor de publicaciones, sugerencias de amistad y fotos recientes"
  width={1280}
  height={800}
  className="next-image"
/>

### Vídeos sin rastreadores

El reproductor de vídeo **solo se carga cuando el miembro pulsa reproducir** y usa la dirección de privacidad mejorada de YouTube. Así la comunidad no envía datos a terceros por el simple hecho de abrir el muro.

### Perfiles de miembro como en una red social de verdad

Cada perfil tiene **portada, foto redonda y cuatro pestañas**: Biografía, con las publicaciones que el visitante puede ver; Información, con sobre mí, ciudad, intereses, sitio web y cumpleaños (solo día y mes, y únicamente si el miembro quiere); Amigos; y Fotos, un álbum creado automáticamente a partir de sus publicaciones. Cada miembro edita su perfil, sus fotos y su privacidad desde el propio sitio web.

<Image
  src="/images/posts/modulos-odoo/falcon_social_s1/perfil.jpg"
  alt="Perfil de miembro en la comunidad de Odoo con portada, avatar y pestañas de biografía, información, amigos y fotos"
  width={1280}
  height={800}
  className="next-image"
/>

### Directorio de miembros, amigos y notificaciones

El **directorio de miembros** permite buscar por nombre, ciudad o titular, con una tarjeta para cada persona. Las **solicitudes de amistad** se envían, aceptan, rechazan o cancelan desde la misma página, y nadie puede insistir después de un rechazo. Una **campana de notificaciones** en la barra superior avisa de los me gusta, los comentarios y las solicitudes nuevas.

<Image
  src="/images/posts/modulos-odoo/falcon_social_s1/miembros.jpg"
  alt="Directorio de miembros de la red social en Odoo con buscador y tarjetas de perfil"
  width={1280}
  height={800}
  className="next-image"
/>

### Privacidad en tres niveles

Cada publicación puede ser **pública, solo para miembros o solo para amigos**, y cada perfil, público o solo para miembros. Los visitantes sin cuenta solo ven perfiles públicos y publicaciones públicas, y **gana siempre la regla más estricta**: una publicación pública de un perfil privado sigue oculta. Los perfiles nuevos empiezan como solo para miembros y cada persona decide si se hace pública.

### Seguridad a nivel de base de datos

Las reglas viven en la capa de datos de Odoo, no solo en las páginas, por lo que se cumplen también frente a llamadas directas a la API. Hay **reglas de registro en cada modelo**, una lista blanca de los campos que un miembro puede escribir, y cada acción se comprueba en el servidor con el usuario conectado: solo el autor edita o elimina su publicación y solo el destinatario acepta una solicitud. Las imágenes se validan (JPEG, PNG, WEBP o GIF de hasta 5 MB, sin SVG) y **se reconstruyen al subirlas**, eliminando la ubicación y cualquier contenido oculto. Todo el texto se escapa contra XSS, los correos y el año de nacimiento nunca se muestran y hay **límites de frecuencia** contra el abuso. El módulo incluye **90 pruebas automáticas**, la mayoría sobre privacidad y seguridad.

### Denuncias y moderación en la aplicación Comunidad

El backoffice suma una aplicación **Comunidad** de primer nivel para el grupo Moderador. Cualquier miembro puede **denunciar una publicación** con un motivo y detalles; los moderadores la revisan con chatter y deciden ocultarla o descartar la denuncia. Desde la misma aplicación se ven todas las publicaciones con su audiencia real, se despublica cualquiera con un clic y se **archiva a un miembro para suspenderlo**. Cuando un usuario del portal elimina su cuenta, su perfil y su contenido salen de la comunidad al instante. El autor de una publicación nunca sabe quién la denunció.

<Image
  src="/images/posts/modulos-odoo/falcon_social_s1/denuncias.jpg"
  alt="Gestión de denuncias de publicaciones en la aplicación Comunidad de Odoo para moderadores"
  width={1280}
  height={764}
  className="next-image"
/>

### Tu marca y tus reglas

En Comunidad › Configuración › Diseño (también en Sitio web › Configuración › Diseño de la comunidad) defines el **color principal** (que también pasa a la paleta del sitio web de Odoo) y el color oscuro del carril lateral y la barra superior, el **nombre y el lema** traducibles, si el **registro es público o solo por invitación** y la **visibilidad predeterminada** de las publicaciones.

### Tres idiomas, móvil y preparado para la UE

Todos los textos de las páginas y del backoffice están traducidos al **inglés, español y catalán**, con selector de idioma. En los teléfonos, el carril izquierdo se convierte en una **barra de pestañas inferior**. Incluye consentimiento de cookies al instalar, una página de política de privacidad para adaptar y la fuente Inter servida por el propio módulo, sin terceros antes del consentimiento.

## Beneficios de tener tu comunidad en Odoo

- **Tus datos se quedan contigo**: la comunidad vive en tu base de datos de Odoo, no en una plataforma que vende atención.
- **Una sola cuenta**: clientes, socios o vecinos usan el mismo usuario del portal para todo en Odoo.
- **Privacidad demostrable**: reglas a nivel de registro y 90 pruebas automáticas, no solo botones ocultos.
- **Moderación desde el primer día**: denuncias, publicaciones ocultas y miembros suspendidos.
- **Diseño familiar**: carril izquierdo, barra superior, tarjetas y pestañas que nadie necesita aprender.

## Cómo empezar

1. **Instala** Falcon Social S1 desde Aplicaciones: la comunidad se convierte en la página principal si tu sitio no tiene una personalizada.
2. **Carga los datos de ejemplo** con el botón «Cargar datos de ejemplo» del formulario de diseño o de los ajustes del sitio web, si quieres ver la comunidad funcionando.
3. **Personaliza** colores, nombre, lema, registro y visibilidad en Comunidad › Configuración › Diseño, y adapta la página de política de privacidad.

## Preguntas frecuentes

**¿Mis miembros necesitan una licencia de Odoo?**
No. Los miembros son usuarios del portal, que no ocupan una plaza de usuario de pago de Enterprise.

**¿Puedo hacer que la comunidad sea solo por invitación?**
Sí. Desactiva «Permitir registro público» en el diseño e invita como usuarios del portal a las personas que elijas.

**¿Qué pueden ver los visitantes sin cuenta?**
Solo lo que los miembros decidieron hacer público: perfiles públicos y sus publicaciones públicas. Un perfil nuevo empieza como solo para miembros.

**¿Incluye datos de demostración?**
Sí: diez miembros ficticios con portadas, 26 publicaciones, comentarios, me gusta, amistades y solicitudes pendientes. Los miembros ficticios no tienen contraseña, así que nadie puede iniciar sesión con ellos, y para quitarlos basta con eliminar esos usuarios en Ajustes › Usuarios.

**¿Funciona con varios sitios web?**
El diseño se configura por sitio web; los miembros y las publicaciones de la comunidad se comparten entre los sitios web de la base de datos.

**¿Qué versiones de Odoo soporta?**
Odoo 19.0, en Community y Enterprise.

## Descarga el módulo

Consulta la ficha completa, las capturas y el precio de **Falcon Social S1** en la [tienda de temas Odoo](/tienda/odoo-template/19.0/falcon_social_s1). Si quieres adaptar la comunidad a tu asociación o empresa, o integrarla con otros procesos de Odoo, [contáctame](/contacto) y lo vemos juntos.
