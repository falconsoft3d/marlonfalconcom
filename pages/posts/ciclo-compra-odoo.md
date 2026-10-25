---
title: ▷ Ciclo de compra en Odoo ERP
date: 2023/03/24
description: ▷ Las etapas del ciclo de compra en Odoo ERP - cotización, orden de compra, albarán, factura y pago al proveedor.
tag: odoo, compras
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Ciclo de compra en Odoo ERP
En este post veremos cómo es el ciclo de compra de Odoo ERP. Partiremos de cero y recorreremos cada uno de los documentos que intervienen, desde que pedimos precio al proveedor hasta que le pagamos.

<Image
  src="/images/posts/ciclo-compra-odoo.png"
  alt="odoo-erp"
  width={1520}
  height={620}
  priority
  className="next-image"
/>

## Cotización de compra
Se utiliza para cotizar a los proveedores los productos y servicios que compramos. En la cotización de compra podemos agregar productos, servicios, impuestos, descuentos, etc.

## Orden de compra
Es un estado más de la cotización. Cuando confirmamos la cotización de compra, esta pasa a ser una orden de compra. La orden de compra, a su vez, genera el albarán de compra en estado borrador.

## Albaranes de compra
El albarán de compra permite registrar la entrada de mercancías en el almacén. Los datos se rellenan automáticamente desde la orden de compra. En el albarán de compra podemos indicar las cantidades que se recibieron, y la recepción puede ser parcial. Un pedido de compra puede tener varios albaranes de compra.

## Facturas de compra
La factura se crea desde el pedido de compra. En la factura de compra podemos agregar los impuestos, descuentos, etc. La factura de compra se puede pagar parcialmente.

## Pagos de compra
Las facturas se pagan con diarios, es decir, para registrar un pago de compra debemos tener creado un diario. Los diarios representan los medios de pago, por ejemplo: efectivo, cheque BBVA, transferencia BBVA, etc. Los pagos de compra se pueden hacer parcialmente.

## Conclusión

Cada documento del ciclo queda enlazado con el anterior, por lo que desde la orden de compra podemos ver en todo momento qué se ha recibido, qué se ha facturado y qué queda pendiente de pago.
