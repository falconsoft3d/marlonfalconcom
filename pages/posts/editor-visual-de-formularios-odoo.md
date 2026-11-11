---
title: ▷ Editor visual de formularios y listas en Odoo - Un IDE con arrastrar y soltar y Claude
date: 2026/11/11
description: ▷ Editor visual de formularios y listas para Odoo 18, 19 y 20 - arrastrar y soltar, asistente Claude, vista previa, campos x_ y exportar como módulo.
tag: odoo, odoo-19, modulos-odoo, desarrollo-odoo, vistas-odoo, inteligencia-artificial
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Editor visual de formularios y listas en Odoo: un IDE con arrastrar y soltar y Claude

Mover un campo en un formulario, añadir una columna a una lista o crear un **campo calculado** en Odoo suele significar escribir una vista heredada en XML, actualizar el módulo y cruzar los dedos para que no se rompa nada. **Visual Form & List Builder (IDE) MFH** es un módulo para **Odoo 18, 19 y 20 (Community y Enterprise)** que pone un **IDE dentro de Odoo**, inspirado en Odoo.sh y Visual Studio Code: diseñas **formularios y listas con arrastrar y soltar**, pides cambios a **Claude** en lenguaje natural, ves una **vista previa en vivo** y, cuando quieras, lo **exportas como módulo**.

## ¿Para quién es este editor visual de Odoo?

- **Administradores de Odoo** que quieren adaptar formularios y listas sin esperar a un desarrollador.
- **Consultores funcionales** que necesitan prototipar cambios de vistas delante del cliente.
- **Desarrolladores** que buscan acelerar las herencias de vistas y llevarlas luego a su repositorio o a Odoo.sh.
- **Empresas en Odoo Community** que buscan una alternativa a Odoo Studio para personalizar vistas.

Solo necesita el cliente web (`web`), incluido en Odoo Community.

## Funciones principales

### Diseñador de formularios con arrastrar y soltar

**Arrastra campos, grupos, páginas y separadores** al formulario, y mueve, oculta o elimina cualquier nodo. A la izquierda tienes el árbol de la vista y los campos del modelo (**inspector de componentes y modelos**), en el centro el formulario, a la derecha las propiedades del nodo seleccionado y debajo el XML.

<Image
  src="/images/posts/modulos-odoo/visual_dev/disenador.png"
  alt="Diseñador visual de formularios en Odoo con árbol de la vista, propiedades y panel XML"
  width={1600}
  height={900}
  className="next-image"
/>

### Inspector de propiedades de cada campo

Cambia la **etiqueta, el widget, el placeholder y las opciones**, y define las condiciones **invisible, solo lectura y obligatorio** sin tocar el XML. Para los campos relacionales tienes el **constructor de dominios** de Odoo, así no tienes que escribir el dominio a mano.

### Asistente Claude para cambiar vistas en lenguaje natural

Describe el cambio con tus palabras, por ejemplo *«pon el email del cliente debajo del cliente»*. Claude escribe la herencia, Odoo la comprueba y el diseñador te la muestra para que la **deshagas o la guardes**. Si Odoo rechaza el cambio, Claude corrige su propia respuesta una vez.

<Image
  src="/images/posts/modulos-odoo/visual_dev/claude.png"
  alt="Asistente Claude en Odoo modificando un formulario a partir de una instrucción en lenguaje natural"
  width={1600}
  height={900}
  className="next-image"
/>

### Campos nuevos x_ y campos calculados

Crea **campos x_ de cualquier tipo habitual** sin salir del diseñador, incluidos los **campos calculados**. Describe lo que debe devolver y Claude escribe las dependencias y el código Python, o escríbelos tú mismo.

<Image
  src="/images/posts/modulos-odoo/visual_dev/campo-nuevo.png"
  alt="Creación de un campo calculado x_ en Odoo con el código Python escrito por Claude"
  width={1600}
  height={900}
  className="next-image"
/>

### Vista previa en vivo antes de guardar

Mira el **formulario real de un registro** con los cambios pendientes y datos reales antes de guardar nada. Nada llega a tus usuarios hasta que pulsas guardar.

<Image
  src="/images/posts/modulos-odoo/visual_dev/vista-previa.png"
  alt="Vista previa en vivo del formulario de Odoo con los cambios pendientes y datos reales"
  width={1600}
  height={900}
  className="next-image"
/>

### Diseño de vistas de lista

No solo formularios: elige una **vista de lista**, arrastra campos para añadir columnas, hazlas **opcionales**, añade **totales** o convierte la lista en **editable**.

### Panel XML editable

La **herencia de vista** que genera el diseñador aparece en un panel XML que puedes editar a mano, junto a la vista resultante. Ideal para quien quiere el control fino del código.

### Vistas heredadas, historial y versiones

Cada cambio se guarda como una **vista heredada** encima de la original, que nunca se modifica. Puedes desactivarla o restablecerla. El **historial** registra el usuario, la fecha y el XML antes y después, y cada versión muestra sus diferencias con la anterior y se puede restaurar, incluso después de un restablecimiento.

### Actualizaciones de módulos seguras

Si una actualización de un módulo elimina aquello a lo que apunta una personalización, Visual Dev la **desactiva al final de la actualización** e indica el motivo, en lugar de dejar que la vista falle. **Abrir en Visual Dev** trae el XML listo para corregirlo.

### Exportar como módulo de Odoo

Descarga tus vistas y campos como un **módulo de Odoo instalable**, listo para tu repositorio o para **Odoo.sh**. Si trabajas con código, aquí tienes [cómo configurar Visual Studio Code para Odoo](/posts/odoo-visual-studio-code).

### Reservado a administradores

Solo los administradores del grupo **Desarrollador Visual Dev** pueden abrir el IDE, cambiar vistas y crear campos, porque los cambios afectan a todos los usuarios y un campo calculado ejecuta código Python en el servidor.

## Beneficios de personalizar Odoo con un editor visual

- **Cambios en minutos**: de una idea a una vista guardada sin ciclos de desarrollo y despliegue.
- **Sin riesgo**: Odoo valida cada cambio y la vista original siempre se puede recuperar.
- **Funciona en Odoo.sh**: los cambios se guardan en la base de datos, sin escribir archivos.
- **Del prototipo al código**: exporta como módulo cuando quieras versionarlo en tu repositorio.
- **IA que acelera**: Claude escribe herencias y campos calculados a partir de una frase.

## Cómo empezar en tres pasos

1. **Instala** Visual Dev MFH desde Aplicaciones. Solo necesita el cliente web, incluido en Odoo Community.
2. **Configura Claude** (opcional): escribe tu clave de la API de Claude en Visual Dev > Ajustes e instala el paquete `anthropic` en el servidor. Todo lo demás funciona sin ella.
3. **Diseña**: abre Visual Dev, elige un modelo y cambia su formulario o su lista. Previsualiza, guarda y todos los usuarios lo verán.

## Preguntas frecuentes

**¿Dónde se guardan los cambios?**
En la base de datos, como una vista heredada de la vista original, igual que hace Odoo Studio. No se escribe ningún archivo, así que también funciona en Odoo.sh. Con Exportar como módulo obtienes un módulo instalable con las mismas vistas y campos.

**¿Puedo volver al formulario original?**
Sí. Desactiva la personalización para ocultarla o restablécela para eliminarla. Mientras diseñas también funcionan deshacer, rehacer y descartar.

**¿Y si un cambio rompe el formulario?**
Odoo comprueba cada cambio antes de aceptarlo. Si no puede aplicarlo, lo rechaza indicando el motivo y no se guarda nada.

**¿Sobrevive a las actualizaciones de módulos?**
Sí. La personalización sigue siendo una vista heredada aplicada después de los demás módulos, y si una actualización la deja sin destino, se desactiva y te dice por qué.

**¿Qué datos se envían a Claude?**
La petición, la vista y la lista de campos del modelo; ningún dato de los registros. En Ajustes eliges Claude Opus 5.5 o Sonnet 5.5 y el nivel de esfuerzo.

**¿Qué versiones de Odoo soporta?**
Odoo 18.0, 19.0 y 20.0, Community y Enterprise. Incluye inglés y traducción completa al español.

## Descarga el módulo

Consulta la ficha completa, las capturas y el precio de **Visual Form & List Builder (IDE) MFH** en la [tienda de módulos Odoo](/tienda/odoo-module/19.0/visual_dev). Si necesitas ayuda para personalizar tus vistas o desarrollar un módulo a medida, [contáctame](/contacto).
