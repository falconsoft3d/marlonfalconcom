---
title: ▷ Ciclo de venta en Odoo ERP
date: 2023/03/24
description: ▷ Ciclo de venta en Odoo ERP
tag: odoo, ventas
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Ciclo de compra en Odoo ERP
En este post veremos como es el ciclo de venta de Odoo ERP. Partiremos de cero y aprenderemos a utilizar Odoo ERP.

<Image
  src="/images/posts/ciclo-venta.png"
  alt="odoo-erp"
  width={1520}
  height={620}
  priority
  className="next-image"
/>

## Oportunidad de venta en el CRM
Muchas ventas nacen desde una oportunidad de venta en el CRM. En el CRM podemos agregar los datos de la oportunidad de venta, como por ejemplo: nombre, cliente, etapa, etc. En la etapa podemos agregar las actividades que se deben realizar para cerrar la venta como reuniones, llamadas, etc.

## Cotización de venta
Se utiliza para cotizar a los clientes los productos y servicios que compramos. En la cotización de venta podemos agregar productos, servicios, impuestos, descuentos, etc.

## Orden de venta
Es un estado más de la cotización. Cuando confirmamos la cotización de venta, esta pasa a ser una orden de venta. La orden de venta a su ves genera el albarán de venta en estado borrador.

## Albaranes de venta
El alabran de venta permite registrar la salida de mercancías en el almacén. Los datos se llenan automáticamente desde la orden de venta. En el albarán de venta podemos agregar las cantidades que se despachan, y se puede despachar parcialmente. Un pedido de venta puede tener varios albaranes de venta.

## Facturas de venta
La factura se crea desde el pedido de venta. En la factura de venta podemos agregar los impuestos, descuentos, etc. La factura de venta se puede pagar parcialmente.

## Pagos de venta
Las facturas se pagan con diarios, es decir para agregar un pago de venta debemos crear un diario. Los diarios son los medios de pago, por ejemplo: efectivo, cheque bbva, transferencia bbva, etc. Los pagos de venta se pueden hacer parcialmente.