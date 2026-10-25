---
title: ▷ Fórmula polinómica de un presupuesto Odoo BIM
date: 2023/04/26
description: ▷ Qué es la fórmula polinómica de reajuste de precios de una obra, su estructura básica y el significado de cada uno de sus monomios.
tag: odoo, bim
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Fórmula polinómica de un presupuesto Odoo BIM
La fórmula polinómica es un procedimiento de cálculo para obtener el incremento de costos que los presupuestos de una obra experimentan con el tiempo.

Esta fórmula es también una representación matemática de los costos que se registran durante el presupuesto de una obra. Cada fórmula está formada por monomios, y cada uno representa uno de los rubros que afectan al costo final del insumo o servicio: la mano de obra, los materiales, los equipos o los gastos generales.

Estructura básica de la fórmula polinómica:

```
K= a(Jr/Jo) + b(Mr/Mo) + c(Er/Eo) + d(Vr/Vo) + e(GUr/GUo)
```

En la cual:

K: Es el coeficiente de reajuste de valorizaciones de obra, como resultado de la variación de precios de los elementos que intervienen en la construcción. Será expresado con aproximación al milésimo.

a: Factor de incidencia de la mano de obra.

b: Incidencia de todos los monomios relacionados con los materiales usados en la construcción.

c: Factor de incidencia correspondiente a los equipos.

d: Incidencia correspondiente a varios.

e: Factor de incidencia de los gastos generales y utilidades.

Cada cociente compara el índice de precios de un recurso en la fecha de reajuste (subíndice r) con su índice en la fecha base del presupuesto (subíndice o). Por ejemplo, Jr/Jo es la variación del índice de la mano de obra. Los factores de incidencia (a, b, c, d, e) suman 1, de forma que, si los precios no varían, K vale 1.

Cabe precisar que el Decreto Supremo N° 001-79-VC propuesto por el Ministerio de Economía y Finanzas, indica que uno de los requisitos que deben cumplir las fórmulas polinómicas es que el número de monomios sea como máximo 8. Por ejemplo, desglosando los materiales en varios monomios:

```
K= a(Jr/Jo) + b1(Mr/Mo)  + b2(Mr/Mo) + b3(Mr/Mo) + b4(Mr/Mo) + c(Er/Eo) + d(Vr/Vo) + e(GUr/GUo)
```
