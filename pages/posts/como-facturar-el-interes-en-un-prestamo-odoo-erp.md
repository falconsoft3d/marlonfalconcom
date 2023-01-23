---
title: ▷ Cómo facturar el interés en un préstamo en Odoo ERP
date: 2023/01/23
description: ▷ Cómo facturar el interés en un préstamo en Odoo ERP
tag: odoo, creditpro, prestamo
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Cómo facturar el interés en un préstamo en Odoo ERP
En el módulo **CreditPro** La factura de interés suele ser separada del capital en un préstamo o crédito. El capital es la cantidad principal del préstamo, mientras que el interés es una cantidad adicional que se cobra por el uso del dinero prestado. La factura de interés suele incluir información sobre el porcentaje de interés aplicado, el período de tiempo en el que se aplica el interés y la cantidad total de interés adeudada.

En algunos casos, el interés puede estar incluido en el precio de un producto o servicio. Por ejemplo, en el caso de un producto financiero como un bono, el precio de compra incluiría tanto el capital como el interés. Sin embargo, esto es menos común en el caso de productos y servicios no financieros.

En **CreditPro** hemos incluido ambas posibilidades, usted puede definir desde configuración como se emitirán sus facturas de manera conjunta o separados

<Image
  src="/images/posts/creditpro-fact-01.png"
  alt="odoo-erp"
  width={917}
  height={311}
  priority
  className="next-image"
/>

Si seleccionamos:

Factura única:  al aprobar el crédito se emitirá una factura donde se incluyen en un solo producto el capital y el interés

<Image
  src="/images/posts/creditpro-fact-02.png"
  alt="odoo-erp"
  width={921}
  height={435}
  priority
  className="next-image"
/>

Factura doble: al aprobar el crédito se generan dos facturas una por el capital y otra por el interés

<Image
  src="/images/posts/creditpro-fact-03.png"
  alt="odoo-erp"
  width={921}
  height={447}
  priority
  className="next-image"
/>


