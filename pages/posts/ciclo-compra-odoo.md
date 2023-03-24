---
title: ▷ Ciclo de compra en Odoo ERP
date: 2023/03/24
description: ▷ Ciclo de compra en Odoo ERP
tag: odoo, compras
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Ciclo de compra en Odoo ERP
En este post veremos como es el ciclo de compra de Odoo ERP. Partiremos de cero y aprenderemos a utilizar Odoo ERP.

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
Es un estado más de la cotización. Cuando confirmamos la cotización de compra, esta pasa a ser una orden de compra. La orden de compra a su ves genera el albarán de compra en estado borrador.

## Albaranes de compra
El alabran de compra permite registrar la entrada de mercancías en el almacén. Los datos se llenan automáticamente desde la orden de compra. En el albarán de compra podemos agregar las cantidades que se recibieron, y se puede recibir parcialmente. Un pedido de compra puede tener varios albaranes de compra.

## Facturas de compra
La factura se crea desde el pedido de compra. En la factura de compra podemos agregar los impuestos, descuentos, etc. La factura de compra se puede pagar parcialmente.

## Pagos de compra
Las facturas se pagan con diarios, es decir para agregar un pago de compra debemos crear un diario. Los diarios son los medios de pago, por ejemplo: efectivo, cheque bbva, transferencia bbva, etc. Los pagos de compra se pueden hacer parcialmente.