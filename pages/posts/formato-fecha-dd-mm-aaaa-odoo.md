---
title: ▷ Formato de fecha dd/mm/aaaa en Odoo - Widget para leer y escribir fechas igual en todos los idiomas
date: 2026/11/11
description: ▷ Muestra y escribe fechas dd/mm/aaaa en Odoo 19 y 20 sea cual sea el idioma - escritura rápida, bloqueo de fechas imposibles y botón de calendario.
tag: odoo, odoo-19, modulos-odoo, widgets, formato-de-fecha, vistas
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Formato de fecha dd/mm/aaaa en Odoo: el mismo formato para todos los usuarios

En Odoo, **el formato de fecha depende del idioma de cada usuario**. Un usuario en español ve 05/03/2026, pero otro con el idioma inglés (EE. UU.) ve 03/05/2026 en el mismo campo. En empresas con equipos internacionales, o con algún usuario que tiene el idioma en inglés, eso acaba en **vencimientos mal puestos, entregas en el mes equivocado y facturas con la fecha cambiada**. **DD/MM/YYYY Date Widget Formatter** (Widget Simple Date) es un módulo para **Odoo 19 y 20 (Community y Enterprise)** que añade el widget `simple_date`: los campos de fecha donde lo pongas **se muestran y se escriben siempre como dd/mm/aaaa**, sin importar el idioma del usuario.

## ¿Para quién es este widget de fecha para Odoo?

- **Empresas con usuarios en varios idiomas**, donde unos ven las fechas como dd/mm/aaaa y otros como mm/dd/aaaa.
- **Equipos de administración y facturación** que necesitan teclear fechas rápido y sin errores.
- **Desarrolladores e integradores de Odoo** que quieren un formato de fecha fijo en vistas concretas añadiendo un solo atributo.

Solo depende del cliente web de Odoo, así que funciona en cualquier instalación.

## Funciones principales

### Fechas siempre en dd/mm/aaaa, sea cual sea el idioma

Con el widget, **una fecha se lee igual para todos**: 05/03/2026 es el 5 de marzo también para quien usa Odoo en inglés de EE. UU. En una factura, la fecha de factura y la de vencimiento aparecen como 28/10/2026 y 27/11/2026, aunque el idioma del usuario escriba las fechas como 10/28/2026.

<Image
  src="/images/posts/modulos-odoo/widget_simple_date/form.png"
  alt="Factura en Odoo con las fechas en formato dd/mm/aaaa para un usuario con idioma inglés"
  width={1040}
  height={375}
  className="next-image"
/>

### Escritura rápida de fechas abreviadas

No hace falta escribir la fecha completa. Teclea **5/3/26, 5-3-2026, 5.3.2026 o 05032026** y el campo la convierte en 05/03/2026. Siempre se interpreta **primero el día**, y los años de dos cifras se completan como 20xx. Al guardar, el chatter confirma que se registró el día correcto.

<Image
  src="/images/posts/modulos-odoo/widget_simple_date/typed.png"
  alt="Fecha abreviada convertida a dd/mm/aaaa en un campo de fecha de Odoo"
  width={1040}
  height={375}
  className="next-image"
/>

### Validación de fechas imposibles

Fechas como **31/02/2026 o 13/13/2026** marcan el campo en rojo y **el registro no se guarda hasta que se corrige**. Se acabaron las fechas inventadas por un error al teclear.

<Image
  src="/images/posts/modulos-odoo/widget_simple_date/invalid.png"
  alt="Campo de fecha en rojo en Odoo al escribir una fecha imposible como 31/02/2026"
  width={1040}
  height={375}
  className="next-image"
/>

### Botón de calendario del navegador

Junto al campo hay un **botón de calendario** que abre el selector de fechas del propio navegador, tanto en escritorio como en el móvil.

### Funciona en formularios y en listas

El widget sirve en **vistas de formulario y vistas de lista**, editables o de solo lectura. En una factura publicada, por ejemplo, la fecha se muestra como texto dd/mm/aaaa.

<Image
  src="/images/posts/modulos-odoo/widget_simple_date/list.png"
  alt="Lista de facturas de cliente en Odoo con las fechas en formato dd/mm/aaaa"
  width={1600}
  height={395}
  className="next-image"
/>

### Se activa con un solo atributo

Basta con añadir `widget="simple_date"` a cualquier campo de fecha de tus vistas, por ejemplo `<field name="date_deadline" widget="simple_date"/>`. Si el campo tenía un placeholder, se mantiene.

### Ligero y sin configuración

**Sin modelos Python, sin datos adicionales y sin nada que configurar**: solo depende del cliente web. El módulo está en inglés, con traducción completa al español. Si te interesan otros widgets de las vistas de Odoo, tienes ejemplos en [este artículo sobre widgets de Odoo](/posts/odoo-widgets).

## Beneficios de un formato de fecha fijo en Odoo

- **Menos errores**: nadie confunde el 5 de marzo con el 3 de mayo por tener otro idioma.
- **Captura más rápida**: fechas abreviadas como 5/3/26 o 05032026.
- **Datos fiables**: las fechas imposibles no llegan a guardarse.
- **Sin riesgo para tus datos**: el valor de la fecha se guarda igual que siempre; solo cambia cómo se muestra y se escribe.

## Cómo empezar en tres pasos

1. **Instala** Widget Simple Date desde Aplicaciones. Solo necesita el cliente web.
2. **Añade el widget** en tu vista: `widget="simple_date"` en el campo de fecha que quieras.
3. **Escribe fechas**: los usuarios leen y teclean dd/mm/aaaa en ese campo, sea cual sea su idioma.

## Preguntas frecuentes

**¿Cambia la forma en que se guardan las fechas?**
No. El campo conserva su valor de fecha normal; solo cambia cómo se muestra y cómo se escribe.

**¿Qué campos admite?**
Campos de fecha. Los campos de fecha y hora mantienen el widget estándar de Odoo.

**¿Cambia todos los campos de fecha de Odoo?**
No, solo aquellos en los que pongas `widget="simple_date"`. Para las vistas estándar, añádelo con una vista heredada.

**¿Funciona en Odoo Community?**
Sí, en Community y Enterprise. Solo depende del cliente web.

**¿Qué versiones de Odoo soporta?**
Odoo 19.0 y 20.0.

## Descarga el módulo

Puedes ver la ficha completa, las capturas y el precio de **DD/MM/YYYY Date Widget Formatter** en la [tienda de módulos Odoo](/tienda/odoo-module/19.0/widget_simple_date). Si necesitas aplicarlo a tus vistas o adaptarlo a tu instalación, [contáctame](/contacto) y lo vemos juntos.
