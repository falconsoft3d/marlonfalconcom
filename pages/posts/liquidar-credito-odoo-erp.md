---
title: ▷ Liquidar un credito en Odoo ERP con CreditPro
date: 2023/1/23
description: ▷ Liquidar un credito en Odoo ERP con CreditPro
tag: odoo, creditpro, creditos, prestamos
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Liquidar un credito en Odoo ERP con CreditPro

En el módulo de prestamos **CreditPro** de Odoo ERP se puede cerrar un crédito antes de que haya finalizado el plazo acordado puede tener consecuencias financieras, ya que el interés se calcula en base al plazo acordado. Si se cierra un crédito antes de tiempo, es probable que se deba pagar una cantidad adicional en forma de penalización por cierre anticipado, ya que el prestamista habrá perdido la posibilidad de generar ingresos por interés durante el plazo restante.

Cobrar solo el capital restante de un crédito es posible, pero dependerá de las condiciones del préstamo y de las políticas del prestamista. En algunos casos, el prestamista puede permitir el pago anticipado del capital sin penalización, pero seguirá debiendo pagar el interés adeudado. En otras ocasiones, el prestamista podría cobrar una penalización por pago anticipado del capital y no permitir el pago sólo del capital restante.

En CreditPro hemos incluido la opción de poder liquidar un crédito sin la necesidad de cobrar el interés restante de las cuotas pendientes para aquellos casos que así lo requieran  

Para eso incluimos la opción en los pagos de cuotas de liquidar el capital.

<Image
  src="/images/posts/odoo-limitar-credito.png"
  alt="owl-odoo"
  width={955}
  height={536}
  priority
  className="next-image"
/>

Al marcar esta opción se calcula el pago total del valor del capital de las cuotas pendientes de pago para seguir con el pago del crédito.

Además nos surgirá la pregunta ¿Qué sucede con el monto facturado de interés que no se va a pagar?
Pues como opción planteamos generar una factura rectificativa por el valor de la diferencia del interés en la factura, y para esto hemos parametrizado el módulo para que la factura rectificativa, odoo la haga por usted.

<Image
  src="/images/posts/odoo-limitar-credito-1.png"
  alt="owl-odoo"
  width={455}
  height={352}
  priority
  className="next-image"
/>
