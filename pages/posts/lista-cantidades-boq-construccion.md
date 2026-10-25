---
title: ▷ ¿Qué son las listas de cantidades (BOQ) en construcción?
date: 2023/1/9
description: ▷ Qué es una lista de cantidades (BoQ) en construcción, para qué sirve y cómo importarla a Odoo para crear presupuestos con BIM 2.0.
tag: boq, odoo, revit, odoo-construccion
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ ¿Qué son las listas de cantidades (BOQ) en construcción?

Una lista de cantidades (a veces denominada '**BoQ**' o '**BQ**') es un documento, generalmente preparado por un consultor de costos (en el ámbito anglosajón, un *quantity surveyor*), que recoge las cantidades medidas de las partidas identificadas en los planos y especificaciones de un proyecto, como un edificio. La preparación de una lista de cantidades requiere que el diseño esté completo y que se haya preparado una especificación.
Las cantidades enumeradas en una lista de cantidades pueden medirse en términos de número, longitud, área, volumen, peso o tiempo.

## ¿Para qué sirve una lista de cantidades?
Las listas de cantidades generalmente se preparan como parte de la documentación de la licitación que se envía a los posibles proveedores para obtener un precio. La lista de cantidades ayuda a los licitadores a calcular los costos de construcción de su oferta y, como todas las ofertas cotizan las mismas cantidades (en lugar de que cada licitador las mida a partir de los planos y especificaciones), proporciona una estimación justa y precisa y una forma útil de comparar las ofertas.
Es muy importante que las listas de cantidades se preparen de acuerdo con una metodología estándar. Esto ayuda a evitar ambigüedades o malentendidos y a prevenir disputas por diferentes interpretaciones de lo que se ha cotizado.

Nuestro software BIM 2.0, especializado en la construcción, incluye una función para importar elementos BIM a partir de listas de cantidades. Dada la variedad de formatos de estas listas, hemos encontrado una forma de que el usuario cree sus propias plantillas de importación, ya sea para ficheros en formato Excel o CSV. Estas plantillas le permitirán crear un presupuesto a partir de cualquier fichero con este formato que incluya el código de la actividad constructiva y la cantidad.

Puedes usarlo para importar a Odoo cualquier lista de cantidades que tengas en formato Excel o CSV desde AutoCAD, Revit, Navisworks, etc.

Ejemplo de tabla **BoQ**

<Image
  src="/images/posts/boq-001.png"
  alt="owl-odoo"
  width={1034}
  height={329}
  priority
  className="next-image"
/>

Con un fichero como este definimos una plantilla de tipo Excel donde buscaremos los campos **CODE** y **COUNT** para crear un presupuesto dentro de Odoo ERP en el módulo **BIM 2.0**.

<Image
  src="/images/posts/boq-002.png"
  alt="owl-odoo"
  width={938}
  height={231}
  priority
  className="next-image"
/>

De esta manera, solo tendríamos que tener en nuestra base de datos un precio unitario para cada código importado, y el presupuesto quedaría conformado al importar el fichero de una sola vez.

<Image
  src="/images/posts/boq-003.png"
  alt="owl-odoo"
  width={944}
  height={327}
  priority
  className="next-image"
/>

En este proceso obtenemos como resultado un presupuesto conformado con las actividades de la lista de cantidades **(BoQ)** y, en el proceso, dejamos un log de importación que detalla las actividades que no tenemos en nuestra base de datos para poder añadirlas.