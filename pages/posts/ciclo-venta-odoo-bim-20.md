---
title: ▷ Ciclo de venta en Odoo BIM 2.0
date: 2023/03/24
description: ▷ Ciclo de venta en Odoo BIM 2.0
tag: odoo, ventas, bim
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Ciclo de venta en Odoo BIM 2.0
En este post veremos como es el ciclo de venta de la vertical de construcción para Odoo ERP llamado BIM 2.0.

<Image
  src="/images/ciclo-venta-bim20.png"
  alt="odoo-erp"
  width={1520}
  height={620}
  priority
  className="next-image"
/>

## 1- Oportunidad de venta en el CRM
Muchas ventas nacen desde una oportunidad de un proyecto de construcción en el CRM. En el CRM podemos agregar los datos de la oportunidad de venta, como por ejemplo: nombre, cliente, etapa, etc. En la etapa podemos agregar las actividades que se deben realizar para cerrar la venta como reuniones, llamadas, etc.

## 2- Proyecto de construcción.
Desdel el CRM podemos crear la obra o el proyecto de construcción.

## 3- Presupuesto de construcción con capitulos, partidas, materiales, mano de obra, etc.
Desde la obra podemos crear el presupuesto, en el módulo bim hay varias herramientas para crear el presupuesto de construcción:
* Crear presupuesto manual.
* Crear presupuesto con importación de excel.
* Crear presupuesto con importación de BC3.
* Crear presupuesto desde una BOQ.
* Crear presupuesto desde otro presupuesto.
* Se puede copiar capitulo, partida entre presupuestos.

## 4- Certificación de obra.
La certificación de obra permite llevar el control de la obra, en el módulo bim hay varias herramientas para crear la certificación de obra:
* Certificación de obra por linea de partida.
* Certificación de obra por capítulo.

## 5- Estado de pago de obra.
Desde la certificación de obra podemos crear el estado de pago de obra. Es un procesos intermedio entre la certificación de obra y la factura de venta.

## 6- Factura de venta. 
Desde el estado de pago de obra podemos crear la factura de venta. En la factura de venta podemos agregar los impuestos, descuentos, etc. La factura de venta se puede pagar parcialmente.