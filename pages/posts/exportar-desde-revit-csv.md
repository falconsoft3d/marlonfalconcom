---
title: ▷ Exportar desde Revit a CSV
date: 2023/1/3
description: ▷ Cómo crear una tabla de planificación en Revit y exportarla como texto delimitado por comas (CSV) para usarla en un presupuesto o en Excel.
tag: revit, csv
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Exportar desde Revit a CSV

Revit es un software de modelado de información de construcción (BIM) para arquitectura, ingeniería y construcción. Incluye herramientas para el modelado, la planificación de proyectos y la colaboración en el diseño.

Una de sus ventajas es que toda la información del modelo se puede extraer en forma de listados de elementos y cantidades mediante las **tablas de planificación**. Exportar esas tablas a un fichero CSV permite llevar las cantidades a Excel o importarlas en un ERP como Odoo para elaborar el presupuesto de la obra. A continuación te muestro el proceso paso a paso.

## Paso 1: crear una tabla de planificación

En la pestaña **Vista**, abrimos el desplegable **Tablas de planificación** y elegimos **Tabla de planificación/Cantidades**.

<Image
  src="/images/posts/exportar-revit-1.png"
  alt="revit"
  width={1280}
  height={720}
  priority
  className="next-image"
/>

## Paso 2: elegir la categoría

En la ventana **Nueva tabla de planificación** seleccionamos la categoría de elementos que queremos listar (por ejemplo, **Multicategoría** para incluir todos), revisamos el nombre y la fase, y pulsamos **Aceptar**.

<Image
  src="/images/posts/exportar-revit-2.png"
  alt="revit"
  width={1280}
  height={720}
  priority
  className="next-image"
/>

## Paso 3: seleccionar los campos

En **Propiedades de tabla de planificación**, pestaña **Campos**, añadimos los campos que queremos exportar. En el ejemplo usamos **Código de montaje**, **Descripción de montaje** y **Recuento**. Pulsamos **Aceptar** y Revit genera la tabla.

<Image
  src="/images/posts/exportar-revit-3.png"
  alt="revit"
  width={1280}
  height={720}
  priority
  className="next-image"
/>

## Paso 4: exportar la tabla

Con la tabla abierta, vamos al menú de la aplicación (**R**) y seleccionamos **Exportar** / **Informes** / **Tabla de planificación**.

<Image
  src="/images/posts/exportar-revit-4.png"
  alt="revit"
  width={1280}
  height={720}
  priority
  className="next-image"
/>

## Paso 5: guardar el fichero

Elegimos la carpeta y el nombre del archivo. Revit lo guarda como **Texto delimitado (\*.txt)**.

<Image
  src="/images/posts/exportar-revit-5.png"
  alt="revit"
  width={1280}
  height={720}
  priority
  className="next-image"
/>

## Paso 6: configurar el delimitador

En las opciones de exportación indicamos la coma como **Delimitador de campo** y ninguno como **Cualificador de texto**, para obtener un formato CSV. Pulsamos **Aceptar**.

<Image
  src="/images/posts/exportar-revit-6.png"
  alt="revit"
  width={1280}
  height={720}
  priority
  className="next-image"
/>

## Paso 7: revisar el resultado

Al abrir el fichero con cualquier editor de texto vemos una línea por elemento, con los campos separados por comas. Si lo necesitas, puedes cambiar la extensión de `.txt` a `.csv` para abrirlo directamente con Excel.

<Image
  src="/images/posts/exportar-revit-7.png"
  alt="revit"
  width={1280}
  height={720}
  priority
  className="next-image"
/>
