---
title: ▷ Ciclo de venta en Odoo ERP
date: 2023/03/24
description: ▷ Las etapas del ciclo de venta en Odoo ERP - oportunidad en el CRM, cotización, pedido, albarán, factura y cobro.
tag: odoo, ventas
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Ciclo de venta en Odoo ERP
En este post veremos cómo es el ciclo de venta de Odoo ERP. Partiremos de cero y recorreremos cada uno de los documentos que intervienen, desde la primera oportunidad comercial hasta el cobro de la factura.

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
Se utiliza para ofrecer a los clientes los productos y servicios que vendemos. En la cotización de venta podemos agregar productos, servicios, impuestos, descuentos, etc.

## Orden de venta
Es un estado más de la cotización. Cuando confirmamos la cotización de venta, esta pasa a ser una orden de venta. La orden de venta, a su vez, genera el albarán de venta en estado borrador.

## Albaranes de venta
El albarán de venta permite registrar la salida de mercancías en el almacén. Los datos se rellenan automáticamente desde la orden de venta. En el albarán de venta podemos indicar las cantidades que se despachan, y el envío puede ser parcial. Un pedido de venta puede tener varios albaranes de venta.

## Facturas de venta
La factura se crea desde el pedido de venta. En la factura de venta podemos agregar los impuestos, descuentos, etc. La factura de venta se puede cobrar parcialmente.

## Pagos de venta
Las facturas se cobran con diarios, es decir, para registrar un pago de venta debemos tener creado un diario. Los diarios representan los medios de pago, por ejemplo: efectivo, cheque BBVA, transferencia BBVA, etc. Los pagos de venta pueden ser parciales.

## Conclusión

Todos los documentos del ciclo quedan enlazados, por lo que desde el pedido de venta podemos consultar en cualquier momento qué se ha entregado, qué se ha facturado y qué queda pendiente de cobro.
