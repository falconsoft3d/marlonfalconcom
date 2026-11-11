---
title: ▷ Edición masiva de campos en Odoo - Cambia muchos registros a la vez o desde Excel
date: 2026/11/11
description: ▷ Edición masiva en Odoo 18, 19 y 20 - cambia un campo en muchos registros a la vez o desde Excel, con vista previa, log de cambios y botón deshacer.
tag: odoo, odoo-19, modulos-odoo, edicion-masiva, importar-excel, productividad
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Edición masiva de campos en Odoo: muchos registros, un clic, y todo reversible

Cambiar la categoría de cuarenta productos, actualizar la lista de precios o añadir una etiqueta a doscientos contactos en Odoo suele significar abrir registro por registro, o lanzar una importación con el riesgo de sobrescribir datos que no querías tocar. **Batch Multi-Record Field Editor (Full Field Editor MFH)** es un módulo para **Odoo 18, 19 y 20 (Community y Enterprise)** que añade una acción de **edición masiva**: seleccionas los registros, eliges un campo y un valor, y se aplica a todos. Y si cada registro necesita su propio valor, lo cargas **desde un archivo Excel** con vista previa. Cada cambio queda en un **log de ediciones** y se puede **deshacer**.

## ¿Para quién es este módulo de edición masiva en Odoo?

- **Responsables de catálogo y e-commerce** que mueven productos entre categorías, cambian precios o marcan productos como Outlet o Best Seller.
- **Equipos comerciales y de marketing** que necesitan reasignar o etiquetar muchos contactos de una vez.
- **Administradores de Odoo** que quieren dar esta capacidad solo a usuarios de confianza y con trazabilidad completa.

Funciona con cualquier aplicación de Odoo y solo depende de los ajustes base.

## Funciones principales

### Acción "Edición masiva" en listas y formularios

En cualquier lista de un modelo permitido seleccionas los registros y abres **Acciones > Edición masiva**. Eliges el campo y el nuevo valor, y se escribe en todos los registros seleccionados con un solo clic. Por ejemplo, seis escritorios pasan a la categoría Desks sin abrir ni uno solo.

<Image
  src="/images/posts/modulos-odoo/full_field_editor/wizard.png"
  alt="Asistente de edición masiva en Odoo cambiando la categoría de varios productos a la vez"
  width={1600}
  height={760}
  className="next-image"
/>

### Todos los tipos de campo, con su entrada adecuada

El asistente se adapta al tipo de campo: **texto, texto largo, HTML, entero, decimal, monetario, sí/no, fecha, fecha y hora, selección, many2one y many2many**. Solo se ofrecen los campos que realmente puedes editar: los de solo lectura, técnicos, calculados sin inverso, contraseñas, tokens y claves de API nunca aparecen. También puedes **vaciar un campo**, salvo que sea obligatorio.

### Etiquetas y campos many2many: añadir, quitar o reemplazar

En los campos many2many, como las etiquetas de producto o de contacto, decides si **añades registros** a los que ya tiene cada uno, si los **quitas** o si los **reemplazas todos**. Ideal para añadir Outlet y Best Seller a un grupo de productos sin perder sus etiquetas actuales.

### Actualización masiva desde Excel con vista previa

Cuando cada registro necesita un valor distinto, usa **Edición masiva > Editar desde Excel**. La **columna A encuentra el registro** (referencia interna, correo, nombre, ID, categoría…) y la **columna B es el nuevo valor**. Se aceptan archivos **.xlsx, .xls y .csv**, y un botón descarga la **plantilla con los valores actuales**, por ejemplo los precios de hoy, para que solo cambies la columna B.

Antes de aplicar, la **vista previa** muestra cada fila con el registro encontrado, su valor anterior y el nuevo. Las filas con errores (referencia desconocida, un texto donde va un número, una opción que no existe) aparecen en rojo con el motivo y se omiten. Si dos filas apuntan al mismo registro, la segunda se marca como error.

<Image
  src="/images/posts/modulos-odoo/full_field_editor/excel-preview.png"
  alt="Vista previa de la actualización masiva de precios desde Excel en Odoo con filas erróneas marcadas"
  width={1600}
  height={900}
  className="next-image"
/>

### Tú eliges qué modelos se pueden editar en masa

En **Ajustes > Edición masiva** limitas la acción a los modelos que quieras, como Producto y Contacto. Si lo dejas vacío, se podrá editar en masa cualquier modelo en el que el usuario pueda escribir.

### Solo para usuarios de confianza y respetando permisos

Solo el grupo **Usuario de edición masiva** ve y ejecuta la acción. Además, el valor se escribe con los **permisos del propio usuario**: los permisos de acceso, las reglas de registro y los grupos de campo se siguen aplicando, así que nadie puede cambiar en masa lo que no podría cambiar a mano.

### Log de ediciones con valor anterior y nuevo

Cada edición masiva queda registrada en **Edición masiva > Log de ediciones**: quién, cuándo, qué modelo y campo, si vino de una selección o de Excel, y cuántos registros cambiaron. Al abrir una entrada ves **cada registro con su valor anterior y el nuevo**, y puedes abrir el registro con un clic.

<Image
  src="/images/posts/modulos-odoo/full_field_editor/log.png"
  alt="Log de ediciones masivas en Odoo con el valor anterior y el nuevo de cada registro"
  width={1600}
  height={900}
  className="next-image"
/>

### Deshacer una edición masiva

Desde el log pulsas **Deshacer** y todos los registros de esa edición recuperan su valor anterior, tanto si vino de una selección como de Excel. Los registros que alguien cambió o eliminó después se dejan como están y se cuentan en el mensaje, así no se pierde ningún trabajo posterior. La acción de deshacer también queda registrada.

<Image
  src="/images/posts/modulos-odoo/full_field_editor/undo.png"
  alt="Deshacer una edición masiva en Odoo y restaurar los valores anteriores"
  width={1600}
  height={900}
  className="next-image"
/>

## Beneficios de la edición masiva en Odoo

- **Ahorro de horas**: lo que antes eran cientos de clics se resuelve en uno, o en un archivo de dos columnas.
- **Sin sorpresas**: la vista previa del Excel enseña cada cambio antes de escribirlo.
- **Trazabilidad total**: siempre sabes qué valor había antes, quién lo cambió y cuándo.
- **Errores reversibles**: un botón Deshacer en lugar de restaurar una copia de seguridad.
- **Seguridad**: acceso por grupo y respeto de las reglas de registro existentes.

## Cómo empezar en tres pasos

1. **Instala** Full Field Editor MFH desde Aplicaciones. Funciona con cualquier aplicación, Community o Enterprise.
2. **Asigna el grupo** Usuario de edición masiva a las personas de confianza y, si quieres, limita los modelos en Ajustes > Edición masiva.
3. **Edita y comprueba**: selecciona registros y usa Acciones > Edición masiva, o Edición masiva > Editar desde Excel. El Log de ediciones muestra cada cambio.

## Preguntas frecuentes

**¿Qué campos se pueden editar en masa?**
Texto, texto largo, HTML, entero, decimal, monetario, sí/no, fecha, fecha y hora, selección, many2one y many2many. Los campos de solo lectura, técnicos, calculados sin inverso, contraseñas, tokens y claves de API nunca se ofrecen.

**¿Cómo tiene que ser el archivo Excel?**
Dos columnas: la A identifica el registro (referencia interna, correo, nombre, ID…) y la B es el nuevo valor. Admite .xlsx, .xls y .csv, y puedes descargar una plantilla con los valores actuales.

**¿Qué pasa si una fila del Excel está mal?**
La vista previa la marca en rojo con el motivo y solo se aplican las filas correctas.

**¿Puede un usuario cambiar registros que normalmente no puede editar?**
No. El valor se escribe con los permisos del usuario, así que se respetan los permisos de acceso, las reglas de registro y los grupos de campo.

**¿Puedo deshacer una edición masiva?**
Sí, desde el log de ediciones. Los registros vuelven a su valor anterior, salvo los que se modificaron o eliminaron después.

**¿Qué versiones de Odoo soporta?**
Odoo 18.0, 19.0 y 20.0, Community y Enterprise, en inglés y con traducción completa al español.

## Descarga el módulo

Puedes ver la ficha completa, las capturas y el precio de **Full Field Editor MFH** en la [tienda de módulos Odoo](/tienda/odoo-module/19.0/full_field_editor). Si necesitas adaptarlo a un flujo concreto de tu empresa, [contáctame](/contacto) y lo vemos juntos.
