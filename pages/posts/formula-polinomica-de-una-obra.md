---
title: ▷ Fórmula polinómica de una obra
date: 2023/01/13
description: ▷ Fórmula polinómica de una obra
tag: odoo, erp, construccion, formula-polinomica
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Fórmula polinómica de una obra
Se entiende por “fórmula polinómica” la representación matemática de la estructura de costos de un presupuesto de construcción, constituida por la sumatoria de términos, denominados monomios, que consideran la participación o incidencia de los principales recursos (mano de obra, materiales, equipo, gastos generales, otros). El resultado de esta fórmula nos muestra  un coeficiente (k) que representa la relación entre el presupuesto base (contrato) y el presupuesto actual. 

<Image
  src="/images/posts/formula-polinomica-01.png"
  alt="odoo-fomula-polinomica"
  width={665}
  height={309}
  priority
  className="next-image"
/>

Los resultados de esta ecuación son utilizados para aplicar reajustes a los presupuestos de obras una vez que hay variabilidad de los costos de los recursos en el tiempo

Dentro de Odoo ERP BIM 2.0 hemos recreado el cálculo del coeficiente (k) a través de la fórmula polinómica y aprovechando el uso de los presupuestos históricos que nos permite guardar el presupuesto en varias fechas tomando como referencia que la primera vez que lo guardemos será el presupuesto del contrato o presupuesto inicial

<Image
  src="/images/posts/formula-polinomica-02.png"
  alt="odoo-fom"
  width={1061}
  height={143}
  priority
  className="next-image"
/>

Una vez creada una modificación del presupuesto se recalcula el coeficiente  (k)  tomando como base el primer presupuesto histórico guardado.

<Image
  src="/images/posts/formula-polinomica-03.png"
  alt="odoo-fom"
  width={1082}
  height={562}
  priority
  className="next-image"
/>




