---
title: Mediciones o cubicación en Odoo BIM 2.0
date: 2022/12/18
description: Cómo introducir mediciones o cubicaciones por partida en Odoo BIM 2.0 con cantidades, dimensiones y fórmulas.
tag: bim20, odoo, construccion, odoo-construccion
author: Marlon Falcon Hernandez
---

# Mediciones o cubicación en Odoo BIM 2.0

import Image from 'next/image'

Se denomina mediciones a la toma de medidas de manera geométrica de las acciones a ejecutar en una obra o proyecto. Estas mediciones deben consignar, de manera detallada y localizada, todas las medidas, calculando con total precisión las cantidades de cada unidad de obra.

Por lo general, un profesional de la construcción parte de un proyecto, en el caso de obras nuevas, o de un levantamiento a pie de obra, en el caso de reformas. De ahí extrae los datos para cuantificar las acciones constructivas expresadas en partidas y convertirlas en un presupuesto.

Para ello, BIM 2.0 facilita la introducción de estos datos a nivel de partida de una manera muy simple, con la opción "Insertar medición", que nos permite introducir varias líneas de medición.

<Image
  src="/images/posts/bim_01.png"
  alt="odoo9"
  width={900}
  height={95}
  priority
  className="next-image"
/>

Las líneas de medición se pueden clasificar por cada grupo definido para la obra, al que se le asigna una descripción, y se introducen los valores obtenidos del proyecto o el levantamiento realizado. Las mediciones deben tomarse teniendo en cuenta la unidad de medida en que vamos a medir la partida que la contiene.

Para ello están habilitados los campos Cant (N), que indica la cantidad de veces que se repite esa línea de medición; Largo (X), Ancho (Y) y Alto (Z), que mediante las tres dimensiones permiten calcular áreas y volúmenes de los elementos más comunes en la construcción; y "Fórmula", donde se puede definir una fórmula para elementos poco comunes usando como referencia los valores introducidos en N, X, Y y Z.

<Image
  src="/images/posts/bim_02.png"
  alt="odoo9"
  width={1024}
  height={768}
  priority
  className="next-image"
/>

BIM 2.0 cuenta con algunas fórmulas predeterminadas y, además, guarda cualquier fórmula usada por el usuario para su uso posterior.

El uso de las mediciones, y el detalle con que se realicen, nos va a facilitar la certificación de obra, la obtención de datos a nivel de unidades de obra y la organización del presupuesto y su presentación al cliente.

Una vez introducidas, las mediciones forman parte de la memoria descriptiva de la obra y podrán ser utilizadas para varias funciones dentro del Presupuesto tales como:

- Certificación
- Informes de presupuesto
- Ofertas
- Cálculo de unidades de obra
