---
title: Mediciones o cubicación en Odoo BIM 2.0
date: 2022/12/18
description: Mediciones o cubicación en Odoo BIM 2.0
tag: bim20, odoo, construccion, odoo-construccion
author: Marlon Falcon Hernandez
---

# Mediciones o cubicación en Odoo BIM 2.0

import Image from 'next/image'

Se denomina mediciones a la toma de medidas de manera geométrica de las acciones a ejecutar en una obra o proyecto. Estas mediciones deben consignar, de manera detallada y en forma localizada todas las medidas, realizando con total precisión las cantidades en cada unidad de obra.

Por lo general, un profesional de la construcción, parte de un proyecto para obras nuevas o un levantamiento a pie de obra para reformas, donde extrae los datos para poder cuantificar cantidades de acciones constructivas expresadas en partidas y convertirlo en un presupuesto.

Para ello BIM 2.0 facilita la introducción de estos datos a nivel de partida de una manera bien simple introduciendo la opción de ¨insertar medición¨ que nos permite introducir varias líneas de medición.

<Image
  src="/images/posts/bim_01.png"
  alt="odoo9"
  width={900}
  height={95}
  priority
  className="next-image"
/>

Las líneas de medición se pueden clasificar por cada grupo definido para obra donde se le asigna una descripción y se introducen los valores obtenidos del proyecto o el levantamiento realizado. Las mediciones deben tomarse teniendo en cuenta la unidad de medida en que vamos a medir la partida que la contiene.

Para ello está habilitado Cant (N) que nos indica la cantidad de veces que se repite esa línea de medición, Largo (X), Ancho (Y) y Alto (Z) que mediante las tres dimensiones nos permite calcular áreas y volúmenes de los elementos mas comunes en la construcción, y ¨Formula¨ donde se puede definir una formula para elementos poco comunes usando como referencia los valores introducidos en N, X, Y, Z.

<Image
  src="/images/posts/bim_02.png"
  alt="odoo9"
  width={1024}
  height={768}
  priority
  className="next-image"
/>

BIM 2.0 cuenta con algunas formulas de manera predeterminada, además de que guarda en su memoria cualquier formula usada por el usuario para su posterior uso.

El uso de las mediciones y el detalle con que se realicen las mismas nos va a permitir facilidades en la certificación de obra, en los datos que podamos obtener a nivel de unidades de obras y en la organización del presupuesto y la presentación del mismo al cliente.

Una vez introducidas las mediciones forman parte de la memoria descriptiva de la obra y podrán ser utilizadas para varias funciones dentro del Presupuesto tales como:

- Certificación
- Informes de presupuesto
- Ofertas
- Cálculo de unidades de obras
