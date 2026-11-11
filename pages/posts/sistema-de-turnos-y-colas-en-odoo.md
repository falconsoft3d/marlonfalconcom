---
title: ▷ Sistema de turnos y gestión de colas en Odoo - Pantalla de llamada en TV y quiosco
date: 2026/11/11
description: ▷ Sistema de turnos en Odoo 19 - tiques A001, llamada desde cada puesto, TV de sala de espera con voz, quiosco de autoservicio y tiempos de espera.
tag: odoo, odoo-19, modulos-odoo, gestion-de-colas, turnos, atencion-al-cliente
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Sistema de turnos en Odoo: gestión de colas con pantalla de llamada y quiosco

Una sala de espera sin orden genera discusiones sobre quién va primero, clientes que se marchan sin ser atendidos y personal que no sabe cuánta gente espera. Los **sistemas de turnos** tradicionales resuelven el problema, pero suelen ser aparatos cerrados que no hablan con tu ERP. **Queue Management System & TV Calling Display** es un módulo para **Odoo 19 (Community y Enterprise)** que convierte Odoo en un **sistema de gestión de colas** completo: el cliente coge su número, cada puesto llama al siguiente y la **TV de la sala de espera** lo anuncia en voz alta.

## ¿Para quién es este sistema de turnos en Odoo?

- **Clínicas, hospitales y farmacias** que necesitan dar prioridad a urgencias, personas mayores o embarazadas.
- **Bancos, oficinas públicas y gestorías** con varias ventanillas atendiendo distintos trámites.
- **Tiendas, talleres y servicios técnicos** con mostrador y cualquier negocio con sala de espera.

Solo depende de la app **Contactos**, así que funciona en Odoo Community sin más requisitos.

## Funciones principales

### Colas con letra y numeración diaria

Crea tantas **colas** como servicios tengas, cada una con su letra y su color: **A001, B002, LAB003…** La numeración vuelve a empezar desde 001 cada día, en la zona horaria de la empresa, y cada cola lleva su propio contador.

### Mesa de llamada para cada puesto

Cada **puesto** (ventanilla, mostrador o despacho) atiende sus colas. El empleado elige su puesto y pulsa **«Llamar al siguiente»**: primero salen los turnos urgentes y preferentes y después el resto por orden de llegada. Desde la misma pantalla puede **volver a llamar**, marcar el turno como atendiendo, atendido o no presentado. La mesa de llamada funciona también en el **móvil o la tablet**.

<Image
  src="/images/posts/modulos-odoo/turnos_pro/desk.png"
  alt="Mesa de llamada de turnos en Odoo con el botón Llamar al siguiente para cada puesto"
  width={1600}
  height={950}
  className="next-image"
/>

### Pantalla de llamada en la TV de la sala de espera

Abre el enlace secreto de la pantalla en el navegador de cualquier **Smart TV**. El turno llamado aparece en grande junto al puesto al que debe ir, con las últimas llamadas y cuántas personas esperan en cada cola. Con cada nueva llamada la pantalla **parpadea, suena y lo anuncia en voz alta**: «Turno A 20, Ventanilla 1». El diseño se adapta solo a **pantallas verticales**.

<Image
  src="/images/posts/modulos-odoo/turnos_pro/tv.png"
  alt="Pantalla de llamada de turnos en la TV de la sala de espera generada por Odoo"
  width={1600}
  height={900}
  className="next-image"
/>

### Quiosco de autoservicio para coger número

Coloca una **tablet en la entrada** y los clientes eligen su servicio, cada uno con su color y su letra. Al coger número ven cuántas personas tienen delante y, si hay una impresora de tiques conectada, el turno se imprime al momento.

<Image
  src="/images/posts/modulos-odoo/turnos_pro/kiosk.png"
  alt="Quiosco de autoservicio en tablet para coger número de turno en Odoo"
  width={1280}
  height={800}
  className="next-image"
/>

### Tiques impresos de 80 mm

Los turnos se emiten desde recepción (con el nombre y la prioridad si quieres) o desde el quiosco, y se imprimen en **tiques de 80 mm** compatibles con cualquier impresora térmica.

### Prioridades para urgencias y clientes preferentes

Los turnos **urgentes** se llaman antes que los **preferentes**, y estos antes que los normales; dentro de cada prioridad se respeta el orden de llegada. Un turno que no se presentó puede volver a la espera.

### Privacidad en pantalla

Por defecto la TV solo muestra **el número y el puesto**. Cada pantalla puede mostrar, si lo decides, el nombre corto del cliente («María L.»). Las páginas públicas no las indexan los buscadores y el enlace secreto se renueva con un clic.

### Tiempos de espera y estadísticas

Cada turno guarda sus **minutos de espera y de atención**. Las estadísticas por cola, puesto y día, en **tablas dinámicas y gráficos**, te dicen qué servicio acumula más espera y cuándo necesitas reforzar el personal.

<Image
  src="/images/posts/modulos-odoo/turnos_pro/stats.png"
  alt="Tabla dinámica con el tiempo medio de espera por cola del sistema de turnos en Odoo"
  width={1600}
  height={950}
  className="next-image"
/>

### Turnos desde otras aplicaciones

Una pequeña **API** (`for_origin`, `call_origin`, `close_origin`) permite dar un turno a cualquier registro de Odoo, como una cita o un pedido, y llamarlo desde un puesto.

## Beneficios del sistema de turnos en Odoo

- **Sala de espera ordenada**: cada cliente sabe su número y cuántos tiene delante.
- **Atención justa y priorizada**: urgencias y preferentes primero, el resto por orden de llegada.
- **Sin hardware propietario**: basta una Smart TV, una tablet y una impresora de tiques.
- **Decisiones con datos**: tiempos de espera y de atención por cola, puesto y día.
- **Integrado en tu ERP**: los turnos viven en Odoo junto a tus contactos y procesos.

## Preguntas frecuentes

**¿Qué necesito para la TV?**
Cualquier Smart TV con navegador, o un mini PC o stick conectado a la TV. Se abre el enlace de la pantalla y se toca una vez para activar el sonido, como exigen los navegadores. No hace falta app ni inicio de sesión.

**¿Y para el quiosco?**
Una tablet con navegador a pantalla completa. Si la impresora de tiques es la predeterminada, el turno se imprime solo.

**¿En qué orden se llaman los turnos?**
Primero los urgentes, después los preferentes y luego los normales; dentro de cada prioridad, por orden de llegada.

**¿La numeración empieza de nuevo cada día?**
Sí, desde 001 cada día, y cada cola tiene su propia numeración.

**¿En qué idioma habla la TV?**
En el idioma configurado en cada pantalla (inglés, español…), con la voz del navegador.

**¿Funciona en Odoo Community?**
Sí, en Odoo 19 Community y Enterprise; solo depende de Contactos.

## Descarga el módulo

Consulta la ficha completa, todas las capturas y el precio de **Queue Management System & TV Calling Display** en la [tienda de módulos Odoo](/tienda/odoo-module/19.0/turnos_pro). Si gestionas una clínica, quizá te interese también cómo [usar Odoo en clínicas y hospitales](/posts/odoo-clinica). Para adaptarlo a tu negocio, [contáctame](/contacto).
