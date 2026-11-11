---
title: ▷ Página web para clínicas y hospitales en Odoo - Citas online, médicos y departamentos
date: 2026/11/11
description: ▷ Página web para clínicas y hospitales en Odoo 19 - citas online con RGPD, médicos con horario semanal, departamentos, calendario de citas y blog de salud.
tag: odoo, odoo-19, modulos-odoo, clinicas, citas-online, sitio-web
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Página web para clínicas y hospitales en Odoo con citas online

En muchas clínicas el teléfono no para: pacientes que preguntan el horario de un especialista, que quieren pedir cita o cambiarla, y una recepción que lo apunta todo a mano. Y cuando existe una web, suele ser un folleto estático o depende de un servicio de reservas externo con cuota mensual. **Med Web D1** es un módulo para **Odoo 19 (Community y Enterprise)** que reúne en una sola compra la **página web de la clínica o el hospital** y el **mostrador de citas online**: departamentos, médicos con perfil y horario semanal, reserva de citas con consentimiento RGPD y un calendario de citas por médico dentro de Odoo.

No es una historia clínica electrónica: gestiona el sitio web público y las citas, y guarda solo los datos necesarios para gestionarlas.

## ¿Para quién es esta web de clínica en Odoo?

- **Clínicas privadas y centros médicos** que quieren que los pacientes pidan cita online a cualquier hora.
- **Hospitales y policlínicas** con varios departamentos y especialistas que necesitan una página por servicio y por médico.
- **Consultas con varios profesionales** que quieren publicar el horario semanal de cada médico y validar las reservas contra él.
- **Empresas que ya usan Odoo** y prefieren no pagar un servicio de reservas externo.

Solo depende de **Sitio web**, **Blog** y **Correo**, todos en Odoo Community: no necesitas comprar ningún otro módulo.

## Funciones principales

### Página de inicio de clínica que inspira confianza

Al instalar el módulo, la página de la clínica pasa a ser la página de inicio. Incluye una **barra superior con el teléfono de urgencias**, correo, horario de apertura, redes y selector de idioma; un carrusel de cabecera con llamadas a la acción; cajas de información rápida (urgencias, horario de los médicos y horario de apertura); quiénes somos; departamentos; **contadores reales** de médicos y departamentos; médicos; formulario de cita; testimonios; blog de salud y boletín.

<Image
  src="/images/posts/modulos-odoo/med_web_D1/inicio.jpg"
  alt="Página web de clínica en Odoo con teléfono de urgencias, carrusel y horario de apertura"
  width={1280}
  height={800}
  className="next-image"
/>

### Departamentos médicos con página propia

Cada **departamento o especialidad** tiene nombre, icono, imagen, descripción breve y extensa y servicios, todo traducible. En /departments se muestran como tarjetas, y cada departamento tiene su página con menú lateral, caja de urgencias, horario, servicios, franja de reserva y **los médicos del departamento**. Con botón de publicar, metaetiquetas, imagen Open Graph y mapa del sitio para el **SEO**.

### Perfiles de médicos con horario semanal

En /doctors el paciente filtra por departamento con un clic. Cada **perfil de médico** muestra foto, título, departamento, especialidad, años de experiencia, idiomas, teléfono, correo y redes, además de formación, experiencia y biografía. El **horario semanal** (día, horas y nota) se comprueba al reservar, y el botón **«Reserva con este médico»** abre el formulario con el médico ya elegido.

<Image
  src="/images/posts/modulos-odoo/med_web_D1/medico.jpg"
  alt="Perfil de médico con horario semanal y reserva de cita en la web de la clínica en Odoo"
  width={960}
  height={1466}
  className="next-image"
/>

### Citas online con validación y consentimiento RGPD

El formulario de **cita online** está en la página de inicio, en cada médico y en /appointment. El paciente elige departamento y médico (cargados **sin recargar la página**), fecha y hora. El sistema rechaza fechas pasadas o fuera de la ventana de reservas, días no laborables, horas fuera del horario de la clínica o del médico y correos no válidos. Una **casilla obligatoria de consentimiento al tratamiento de datos de salud** guarda el consentimiento y su fecha en la cita, y el formulario se protege con **honeypot y token CSRF**. Al terminar, una página de confirmación muestra la referencia, la fecha y el médico.

<Image
  src="/images/posts/modulos-odoo/med_web_D1/cita-online.jpg"
  alt="Formulario de citas online para clínicas en Odoo con departamento, médico, fecha y hora"
  width={1280}
  height={800}
  className="next-image"
/>

### Calendario de citas por médico en Odoo

Una nueva aplicación **«Clínica»** funciona como mostrador de citas: **calendario por médico** con filtros, **kanban por estado** (solicitada, confirmada, realizada, cancelada y no se presentó), lista con filtros (mis citas, solicitudes, próximas, desde el sitio web, primera visita) y agrupaciones por médico, departamento, estado o día. Cada cita tiene paciente, contacto vinculado o creado a partir del correo, fecha de nacimiento, motivo, duración, responsable, notas, origen y consentimiento, con chatter.

<Image
  src="/images/posts/modulos-odoo/med_web_D1/calendario-citas.jpg"
  alt="Calendario de citas médicas por médico en la aplicación Clínica de Odoo"
  width={1280}
  height={800}
  className="next-image"
/>

### Confirmación por correo y actividades

Las citas llegan como **«Solicitada»**. El botón **«Confirmar»** envía al paciente un correo con los detalles, y el usuario del médico recibe una **actividad** por cada solicitud, para que ninguna petición se quede sin atender.

### Médicos, departamentos y testimonios en el back office

Gestiona desde Odoo lo que muestra la web: **médicos** en kanban con foto, perfil, horario semanal y redes; **departamentos** con selector de iconos, servicios y descripción; y **testimonios** con nombre, texto, estrellas y foto, con un interruptor para publicarlos.

### Roles y privacidad de las citas

Dos niveles de acceso: **Recepción** gestiona las citas y **Administrador** gestiona además médicos, departamentos, testimonios y diseño. Los visitantes, los usuarios del portal y el resto de empleados **no pueden leer las citas**.

### Colores, horarios y ajustes de reservas

Desde Diseño de la clínica eliges los **colores principal y secundario** (el principal actualiza la paleta de Odoo), el teléfono de urgencias y el horario de apertura, y configuras las citas online: **días laborables, primera y última hora, franja en minutos y antelación máxima** de reserva. Un botón carga todos los datos de ejemplo en una base creada sin datos de demostración.

### Contacto, idiomas y diseño mobile-first

La página de contacto muestra dirección, teléfonos, urgencias y horario en tarjetas, el formulario de Odoo y un acceso directo a la cita. El sitio viene en **inglés, español y catalán**, con la barra de cookies de la UE activada y las fuentes Titillium Web y Open Sans servidas por el propio módulo. Todo está pensado para **móvil y tableta**, con imágenes diferidas y JavaScript ligero.

## Beneficios de una web de clínica con citas en Odoo

- **Menos llamadas**: los pacientes reservan solos a cualquier hora y la recepción solo confirma.
- **Sin cuotas externas**: web y gestión de citas en una sola compra, sin servicio de reservas de terceros.
- **Agenda real**: las reservas se validan contra el horario de la clínica y el de cada médico.
- **Cuidado de los datos de salud**: consentimiento explícito con fecha, acceso restringido y solo los datos necesarios.
- **Todo en Odoo**: contactos, correo, chatter y actividades del estándar, en Community y Enterprise.

Si buscas una solución de gestión sanitaria más amplia, también puedes leer [Odoo para clínicas y hospitales](/posts/odoo-clinica).

## Cómo empezar

1. **Instala** Med Web D1 desde Aplicaciones.
2. **Configura** en Diseño de la clínica los colores, el teléfono de urgencias, el horario y las reglas de las citas online.
3. **Da de alta** tus departamentos y médicos con su horario semanal, o carga los datos de ejemplo con un clic: 8 departamentos, 8 médicos, 12 citas, 4 testimonios y 3 publicaciones del blog.

## Preguntas frecuentes

**¿Necesito otro módulo?**
No. Depende de website, website_blog y mail, todos en Odoo Community.

**¿Quién puede ver las citas?**
Solo los usuarios de los grupos de Clínica. Visitantes, usuarios del portal y el resto de empleados no pueden leerlas.

**¿Es una historia clínica electrónica?**
No. Gestiona el sitio web y las citas. Las historias clínicas se guardan en tu software médico.

**¿La cita se confirma automáticamente?**
No. Llega como «Solicitada» y el botón «Confirmar» envía el correo al paciente. El usuario del médico recibe una actividad.

**¿Cómo configuro los días y horas de trabajo?**
En Diseño de la clínica defines días, primera y última hora, franja y ventana de reservas. Cada médico puede tener además su horario semanal, que también se comprueba online.

**¿Cumple el RGPD?**
El consentimiento al tratamiento de datos de salud es obligatorio y se guarda con su fecha, la barra de cookies se activa y las fuentes se sirven en local. El módulo añade una página /privacy enlazada desde el consentimiento, cuyo texto conviene revisar para tu clínica.

## Descarga el módulo

Puedes ver la ficha completa, las capturas y el precio de **Med Web D1** en la [tienda de aplicaciones de Odoo](https://apps.odoo.com/apps/themes/19.0/med_web_D1). Si necesitas adaptar la web de tu clínica o integrarla con tu software médico, [contáctame](/contacto) y lo vemos juntos.
