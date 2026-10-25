---
title: ▷ Ciclo de venta en Odoo BIM 2.0
date: 2023/03/24
description: ▷ Etapas del ciclo de venta en BIM 2.0, la vertical de construcción para Odoo - CRM, obra, presupuesto, certificación, estado de pago y factura.
tag: odoo, ventas, bim
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Ciclo de venta en Odoo BIM 2.0
En este post veremos cómo es el ciclo de venta de BIM 2.0, la vertical de construcción para Odoo ERP. A diferencia del ciclo de venta estándar de Odoo, aquí el proceso gira en torno a la obra: se presupuesta, se certifica lo ejecutado y se factura según el avance.

<Image
  src="/images/ciclo-venta-bim20.png"
  alt="odoo-erp"
  width={1520}
  height={620}
  priority
  className="next-image"
/>

## 1. Oportunidad de venta en el CRM
Muchas ventas nacen desde una oportunidad de un proyecto de construcción en el CRM. En el CRM podemos agregar los datos de la oportunidad de venta, como por ejemplo: nombre, cliente, etapa, etc. En la etapa podemos agregar las actividades que se deben realizar para cerrar la venta como reuniones, llamadas, etc.

## 2. Proyecto de construcción
Desde el CRM podemos crear la obra o el proyecto de construcción.

## 3. Presupuesto de construcción con capítulos, partidas, materiales, mano de obra, etc.
Desde la obra podemos crear el presupuesto. En el módulo BIM hay varias herramientas para crear el presupuesto de construcción:
* Crear presupuesto manual.
* Crear presupuesto con importación de Excel.
* Crear presupuesto con importación de BC3.
* Crear presupuesto desde una BOQ.
* Crear presupuesto desde otro presupuesto.
* Copiar capítulos y partidas entre presupuestos.

## 4. Certificación de obra
La certificación de obra permite llevar el control de lo ejecutado en la obra. En el módulo BIM hay varias herramientas para crear la certificación de obra:
* Certificación de obra por línea de partida.
* Certificación de obra por capítulo.

## 5. Estado de pago de obra
Desde la certificación de obra podemos crear el estado de pago de obra. Es un proceso intermedio entre la certificación de obra y la factura de venta.

## 6. Factura de venta
Desde el estado de pago de obra podemos crear la factura de venta. En la factura de venta podemos agregar los impuestos, descuentos, etc. La factura de venta se puede pagar parcialmente.