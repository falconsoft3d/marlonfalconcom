---
title: ▷ Formato del archivo BOQ en la construcción.
date: 2023/1/4
description: ▷ Qué es un archivo BOQ (Bill of Quantities) en construcción, para qué sirve y ejemplos de formatos de columnas para importarlo.
tag: odoo, bim, construccion, boq
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Formato del archivo BOQ en la construcción.
Un archivo BOQ, por sus siglas en inglés (**Bill of Quantities**), también conocido como lista de precios unitarios o lista de cantidades, es un documento esencial en la industria de la construcción. Se utiliza para describir y cuantificar los materiales, trabajos y servicios necesarios para completar un proyecto de construcción.

Un archivo BOQ incluye una lista detallada de todos los elementos necesarios para el proyecto, junto con sus cantidades, precios unitarios y totales. Esto incluye materiales, mano de obra, equipo y cualquier otro costo asociado con el proyecto. El archivo BOQ también puede incluir especificaciones técnicas para cada elemento, así como plazos de entrega y condiciones de pago.

Un archivo BOQ es una herramienta valiosa para los contratistas y otros profesionales involucrados en la construcción, ya que les permite estimar el costo total de un proyecto y planificar su presupuesto de manera más precisa. También es útil para los propietarios de proyectos, ya que les permite comparar ofertas de diferentes contratistas y asegurar que están obteniendo el mejor trato posible.

En la actualidad, muchos archivos BOQ se crean y administran digitalmente, lo que facilita su actualización y acceso. Esto también permite una mayor colaboración entre los diferentes profesionales involucrados en el proyecto y acelera el proceso de toma de decisiones.

En resumen, un archivo BOQ es un documento esencial en la industria de la construcción que describe y cuantifica los materiales, trabajos y servicios necesarios para completar un proyecto. Ayuda a los contratistas y otros profesionales involucrados en la construcción a estimar el costo total de un proyecto y a los propietarios de proyectos a comparar ofertas de diferentes contratistas. Con la creación y gestión digital de los archivos BOQ, se facilita la colaboración y la toma de decisiones en el proyecto.

## Ejemplo 1: formato de columnas de un archivo BOQ

El formato más habitual incluye un código, la descripción del elemento, la unidad de medida y la cantidad:

| code | name       | uom | quantity |
|------|------------|-----|----------|
| 1    | Material 1 | m2  | 100      |
| 2    | Material 2 | u   | 22       |
| 3    | Material 3 | ml  | 33       |
| 4    | Material 4 | u   | 78       |

## Ejemplo 2: formato de columnas de un archivo BOQ

Los nombres de las columnas pueden variar según el programa que genere el archivo. En este caso están en español e incluyen una columna adicional de texto para observaciones:

| id | nombre     | unidad | cantidad | Text |
|----|------------|--------|----------|------|
| 1  | Material 1 | m2     | 100      |      |
| 2  | Material 2 | u      | 22       |      |
| 3  | Material 3 | ml     | 33       |      |
| 4  | Material 4 | u      | 78       |      |


## Ejemplo 3: formato de columnas de un archivo BOQ reducido

Si los elementos ya existen en el sistema de destino, basta con indicar el código y la cantidad:

| codigo | cantidad |
|--------|----------|
| 1      | 100      |
| 2      | 22       |
| 3      | 33       |
| 4      | 78       |

En cualquiera de los casos, lo importante es que el código de cada línea sea único y que las unidades de medida sean coherentes, para que el archivo se pueda importar sin errores en el software de presupuestos o en el ERP.
