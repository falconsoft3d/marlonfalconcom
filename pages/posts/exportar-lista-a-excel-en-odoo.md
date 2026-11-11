---
title: ▷ Exportar listas a Excel en Odoo con un clic - Las columnas y filas que ves
date: 2026/11/11
description: ▷ Exporta cualquier vista de lista de Odoo 18, 19 y 20 a Excel (.xlsx) en un clic - columnas visibles, filas seleccionadas, números y fechas reales.
tag: odoo, odoo-19, modulos-odoo, exportar-excel, informes, productividad
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Exportar listas a Excel en Odoo con un clic: exactamente lo que ves en pantalla

La exportación estándar de Odoo es potente, pero para algo tan habitual como "pásame esta lista en Excel" obliga a elegir los campos uno a uno, y el resultado no siempre coincide con lo que tenías en pantalla. **One-Click List to Excel Export (Tree Excel Export MFH)** es un módulo para **Odoo 18, 19 y 20 (Community y Enterprise)** que añade la opción **Exportar a Excel** al menú de columnas de cada vista de lista. En un clic obtienes un archivo **.xlsx** con las columnas visibles y las filas de la pantalla, con **números y fechas como valores reales de Excel**.

## ¿Para quién es este módulo de exportación a Excel en Odoo?

- **Equipos de ventas y dirección comercial** que comparten listas de pedidos, presupuestos o clientes con el formato que ya han configurado.
- **Contabilidad y administración**, que necesitan llevar facturas e importes a Excel para sumarlos, filtrarlos o hacer gráficos.
- **Logística e inventario**, que exportan movimientos, albaranes o líneas de pedido sin pasar por el asistente de exportación.

Solo necesita el cliente web de Odoo y la librería de Python **xlsxwriter**, que ya forma parte de los requisitos de Odoo.

## Funciones principales

### Exportar a Excel en un clic desde cualquier lista

La opción **Exportar a Excel** aparece en el menú de opciones de columnas, a la derecha de las cabeceras, en todas las vistas de lista: **facturas, ventas, inventario** y también las listas de líneas dentro de los formularios.

<Image
  src="/images/posts/modulos-odoo/tree_excel_export/menu.png"
  alt="Opción Exportar a Excel en el menú de columnas de una vista de lista de Odoo"
  width={1600}
  height={680}
  className="next-image"
/>

### Lo que ves es lo que exportas

El archivo contiene **las columnas visibles, en el mismo orden y con los mismos títulos** que la lista. Si ocultas una columna, no se exporta. Así el Excel coincide siempre con la vista que has preparado.

### Números y fechas reales en el Excel

Cantidades, precios e importes llegan como **números de Excel**, listos para sumar, ordenar o hacer gráficos al momento. Las fechas y las fechas con hora son **fechas de Excel** con el formato de tu idioma, y las casillas de verificación también se exportan como valores reales.

<Image
  src="/images/posts/modulos-odoo/tree_excel_export/excel.png"
  alt="Archivo Excel exportado desde Odoo con importes y fechas como valores reales y filtros"
  width={1000}
  height={560}
  className="next-image"
/>

### Archivo listo para usar

Cada exportación sale con **cabeceras en negrita, la primera fila inmovilizada, filtros en cada columna** y anchos que se ajustan al contenido. Abres el archivo y ya puedes trabajar, sin dar formato.

### Exportar solo las filas seleccionadas

Selecciona algunas filas y solo esas van al archivo. Sin selección se exportan todas las filas de la pantalla.

<Image
  src="/images/posts/modulos-odoo/tree_excel_export/select.png"
  alt="Exportar a Excel solo las filas seleccionadas de una lista de Odoo"
  width={1600}
  height={680}
  className="next-image"
/>

### Listas agrupadas

En las listas agrupadas, por ejemplo pedidos agrupados por comercial, se exportan **las filas de los grupos abiertos**.

### Líneas dentro de un formulario

Las listas de líneas dentro de un formulario, como las líneas de un pedido de venta, tienen la misma opción en su menú de columnas.

<Image
  src="/images/posts/modulos-odoo/tree_excel_export/lines.png"
  alt="Exportar a Excel las líneas de un pedido de venta en Odoo desde el formulario"
  width={1600}
  height={860}
  className="next-image"
/>

### En inglés y español

El módulo está en inglés con una traducción completa al español, y los títulos de las columnas siguen el idioma del usuario.

## Beneficios de exportar a Excel con un clic

- **Rapidez**: de la lista al .xlsx sin abrir el asistente de exportación ni elegir campos.
- **Coherencia**: el archivo refleja exactamente las columnas y filas que ves.
- **Datos utilizables**: números y fechas reales, sin convertir texto a mano.
- **Seguridad**: el archivo solo contiene lo que la lista ya muestra a ese usuario.

## Cómo empezar en tres pasos

1. **Instala** Tree Excel Export desde Aplicaciones. Solo necesita el cliente web.
2. **Abre una lista** cualquiera y despliega el menú de opciones de columnas, a la derecha de las cabeceras.
3. **Exporta**: haz clic en Exportar a Excel y abre el archivo .xlsx.

## Preguntas frecuentes

**¿Qué filas se exportan?**
Las filas seleccionadas, o todas las de la pantalla si no hay ninguna seleccionada. Para exportar más filas, aumenta el número de registros por página en el paginador.

**¿Exporta datos que el usuario no puede ver?**
No. El archivo solo contiene lo que la lista ya muestra a ese usuario.

**¿Sustituye a la exportación estándar de Odoo?**
No. Añade una exportación rápida de la lista tal como la ves; la exportación estándar, con cualquier campo que elijas, sigue en el menú Acciones.

**¿Funciona en Odoo Community?**
Sí, en Community y Enterprise. Solo requiere la librería xlsxwriter, incluida en los requisitos de Odoo.

**¿Qué versiones de Odoo soporta?**
Odoo 18.0, 19.0 y 20.0.

## Descarga el módulo

Puedes ver la ficha completa, las capturas y el precio de **Tree Excel Export MFH** en la [tienda de módulos Odoo](/tienda/odoo-module/19.0/tree_excel_export). Si quieres cambiar en masa los datos que exportas, echa un vistazo a la [edición masiva de campos en Odoo](/posts/edicion-masiva-de-campos-en-odoo). Para cualquier adaptación, [contáctame](/contacto) y lo vemos juntos.
