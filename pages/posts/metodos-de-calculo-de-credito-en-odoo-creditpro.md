---
title: ▷ Métodos de cálculo de préstamos con CreditPro en Odoo ERP
date: 2023/01/24
description: ▷ Diferencias entre los métodos de amortización francés, alemán y americano, y cómo se calculan los préstamos con CreditPro en Odoo ERP.
tag: odoo, credito, creditpro
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Métodos de cálculo de préstamos con CreditPro en Odoo ERP
Existen varios métodos para calcular las cuotas de un crédito o préstamo, y cada institución financiera elige el que mejor se adapta a cada tipo de crédito. Algunos de los métodos más comunes son:

1. El método de amortización francés: el prestatario paga una cuota fija en cada periodo, que incluye una parte de capital y otra de intereses. Al principio la mayor parte de la cuota son intereses y, a medida que avanza el préstamo, la parte de capital amortizado va aumentando.

2. El método de amortización alemán: el prestatario amortiza la misma cantidad de capital en cada periodo. Como los intereses se calculan sobre el capital pendiente, que disminuye, la cuota total es más alta al principio y va bajando con el tiempo.

3. El método de amortización americano: el prestatario paga solo intereses durante el plazo del préstamo y devuelve el capital íntegramente al final.

Cada uno tiene sus aplicaciones y ventajas, por lo que es importante entender bien cuál de ellos se ajusta a cada situación para elegir el más adecuado al configurar un crédito en CreditPro en Odoo ERP.

El método francés y el alemán son los más utilizados, por lo que son los que hemos implementado en nuestro módulo CreditPro para Odoo 16 ERP. Ambos pueden aplicarse tanto con una tasa de interés fija como variable; lo que los diferencia es cómo se reparte el pago entre capital e intereses. Cada uno tiene sus ventajas y desventajas.

## Método francés

Algunas de sus principales ventajas son:

* Mayor estabilidad: la cuota es la misma en todos los periodos (con tasa fija), lo que permite al prestatario saber exactamente cuánto tendrá que pagar y planificar mejor sus finanzas.
* Cuotas iniciales más bajas: al comienzo del préstamo la cuota es menor que en el método alemán, lo que facilita afrontar los primeros pagos.
* Mayor aceptación: es el sistema más común, por lo que resulta familiar para los clientes y fácil de comparar entre distintas ofertas.

Entre sus principales desventajas están:
* Mayor costo total: como el capital se amortiza más despacio al principio, el prestatario paga más intereses en total que con el método alemán.
* Amortización lenta al inicio: durante los primeros periodos la deuda pendiente baja poco, porque la mayor parte de la cuota son intereses.

## Método alemán

Algunas de sus principales ventajas son:

* Menor costo total: al amortizar más capital desde el principio, los intereses totales son menores.
* La deuda baja más rápido: el capital pendiente disminuye de forma constante en cada periodo.
* Cuotas decrecientes: el esfuerzo de pago se reduce con el paso del tiempo.

Entre sus principales desventajas están:
* Cuotas iniciales más altas: los primeros pagos son los más elevados, lo que exige una mayor capacidad de pago al inicio.
* Menor estabilidad: la cuota cambia en cada periodo, lo que hace algo más compleja la planificación.
* Menor aceptación: es menos común que el método francés.

## Ejemplos de cálculo de crédito: método francés vs. alemán

Aquí se muestran los dos métodos de cálculo para las mismas condiciones: en el caso del francés, el término amortizativo (cuota) es fijo y, en el caso del alemán, es variable y lo que queda fijo es la cuota de amortización.

- Capital inicial: 10000
- Años: 3
- Interés: 2%

<Image
  src="/images/posts/credito-calculo.png"
  alt="credito-calculo"
  width={935}
  height={673}
  priority
  className="next-image"
/>
