---
title: ▷ Métodos de cálculo de prestamos con CreditPro en Odoo ERP
date: 2023/01/24
description: ▷ Métodos de cálculo de prestamos con CreditPro en Odoo ERP
tag: odoo, credito, creditpro
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Métodos de cálculo de prestamos con CreditPro en Odoo ERP
En el módulo **CreditPro** existen varios métodos para calcular el monto de un crédito o prestamo, dependiendo del tipo de crédito y de la institución financiera que lo otorgue. Algunos de los métodos más comunes son:

1. El método de amortización francés: Este método se utiliza para calcular el monto de un crédito con una tasa de interés fija. El prestatario paga una cantidad fija cada mes, que incluye una parte del capital y el interés correspondiente.

2. El método de amortización alemán: Este método se utiliza para calcular el monto de un crédito con una tasa de interés variable. El prestatario paga una cantidad fija cada mes, pero la parte del capital que se amortiza varía cada mes.

3. El método de amortización americano: Este método se utiliza para calcular el monto de un crédito en el que el prestatario paga sólo intereses durante un período de tiempo determinado, y luego comienza a pagar tanto intereses como capital.

Cada uno tiene sus aplicaciones y ventajas, es importante que se entienda bien cual de ellos se aplica a la situación específica para poder elegir el mejor crédito para usar en CreditPro en Odoo ERP.

El crédito francés y alemán son los más utilizados por lo que son los que hemos implementado en nuestro módulo para Odoo 16 ERP CreditPro. El crédito francés se refiere al sistema de crédito en el que las instituciones financieras prestan dinero a los prestatarios con una tasa de interés fija durante todo el plazo del préstamo. El crédito alemán se refiere al sistema de crédito en el que las instituciones financieras prestan dinero a los prestatarios con una tasa de interés variable, que puede cambiar durante el plazo del préstamo. Ambos sistemas tienen sus ventajas y desventajas.

El crédito francés tiene varias ventajas y desventajas. 

Algunas de las principales ventajas son:

* Mayor estabilidad: La tasa de interés es fija, lo que significa que el prestatario sabe exactamente cuánto tendrá que pagar cada mes durante todo el plazo del préstamo. Esto le permite planificar mejor sus finanzas y evitar sorpresas.

* Mayor seguridad: La tasa de interés fija es menos volátil que la tasa de interés variable, lo que significa que el prestatario tiene menos riesgo de que su cuota mensual aumente significativamente.
* Mayor transparencia: El prestatario sabe exactamente cuánto tendrá que pagar en total, incluyendo intereses y comisiones, lo que le permite comparar diferentes ofertas de crédito.
Mayor aceptación: El crédito francés es más común y aceptado en general.

Entre las principales desventajas del crédito francés están:
* Mayor costo: A menudo, la tasa de interés es más alta que la tasa de interés variable, lo que significa que el prestatario tendrá que pagar más intereses en total.
* Menor flexibilidad: El prestatario no puede ajustar su cuota mensual en función de sus ingresos o circunstancias cambiantes.
* Menor rentabilidad: Si las tasas de interés bajan, el prestatario no se beneficiará de las reducciones.
* Menor capacidad de adaptación: El prestatario no puede adaptarse a las fluctuaciones del mercado financiero.

El crédito alemán tiene varias ventajas y desventajas. Algunas de las principales ventajas son:

* Mayor flexibilidad: La tasa de interés es variable, lo que significa que el prestatario puede ajustar su cuota mensual en función
* Ingresos o circunstancias cambiantes. Esto le permite adaptarse mejor a las fluctuaciones del mercado financiero.
* Menor costo: A menudo, la tasa de interés es más baja que la tasa de interés fija, lo que significa que el prestatario tendrá que pagar menos intereses en total.
* Mayor rentabilidad: Si las tasas de interés bajan, el prestatario se beneficiará de las reducciones.

Entre las principales desventajas del crédito alemán están:
* Mayor incertidumbre: La tasa de interés es variable, lo que significa que el prestatario no sabe exactamente cuánto tendrá que pagar cada mes. Esto puede dificultar la planificación financiera.
* Mayor riesgo: La tasa de interés variable es más volátil que la tasa de interés fija, lo que significa que el prestatario tiene más riesgo de que su cuota mensual aumente significativamente.
* Menor transparencia: El prestatario no sabe exactamente cuánto tendrá que pagar en total, incluyendo intereses y comisiones, lo que dificulta comparar diferentes ofertas de crédito.
* Menor aceptación: El crédito alemán es menos común y aceptado en general.

Ejemplos de cálculo de crédito método Francés vs Alemán:

Aquí se muestran los dos métodos de cálculo para las mismas condiciones, en el caso del Francés el término amortizativo (Cuota) es  fijo y en el caso del Alemán es variable y lo que queda fijo es la cuota de amortización.

Capital Inicial : 10000
Años: 3
Interés: 2%

<Image
  src="/images/posts/credito-calculo.png"
  alt="credito-calculo"
  width={935}
  height={673}
  priority
  className="next-image"
/>






