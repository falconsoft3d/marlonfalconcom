---
title: ▷ Calculadora de créditos en Odoo ERP
date: 2023/01/30
description: ▷ Simula cuotas, intereses y capital de un préstamo con la calculadora de créditos de CreditPro para Odoo 16.
tag: creditos, odoo, erp
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Calculadora de créditos en Odoo ERP

Una calculadora de créditos o simulador es una herramienta en línea que permite a los usuarios estimar el costo total y el pago mensual de un préstamo en función de la cantidad del préstamo, la tasa de interés y el período de tiempo del préstamo. Al proporcionar esta información, una calculadora de créditos puede ayudar a los prestatarios a planificar y entender el impacto financiero de tomar un préstamo.

Dentro de **CreditPro** de **Odoo** **ERP**, módulo diseñado para Odoo en su versión 16, hemos creado una aplicación para simular los distintos tipos de créditos que se pueden generar según los 4 métodos de cálculo integrados:

* **Método francés**: cuotas constantes durante todo el préstamo; al principio se pagan más intereses y al final más capital.
* **Método alemán**: la amortización de capital es constante, por lo que las cuotas van disminuyendo con el tiempo.
* **Método flat o interés simple**: el interés se calcula siempre sobre el capital inicial.
* **Método americano**: durante el plazo solo se pagan intereses y el capital se devuelve completo al final.

La simulación tiene en cuenta los diferentes parámetros de interés, cuotas o porcentaje de financiación.
Para ello solo hay que acceder desde el menú de CreditPro a la opción **Calculadora de Crédito**.

Una vez allí, se seleccionan los parámetros a considerar.

<Image
  src="/images/posts/calculadora-credito.png"
  alt="solicitud-credito"
  width={743}
  height={470}
  priority
  className="next-image"
/>

De esta manera quedan simuladas las cuotas y los valores de interés y capital del crédito, lo que permite tanto al prestamista como al cliente conocer las distintas opciones posibles.

