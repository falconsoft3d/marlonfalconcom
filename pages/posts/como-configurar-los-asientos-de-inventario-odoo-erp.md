---
title: ▷ Configuración de los asientos de inventario en Odoo ERP
date: 2022/12/31
description: ▷ Cómo configurar en la categoría de producto las cuentas que usa Odoo para generar los asientos de inventario y de facturas.
tag: odoo, asientos, inventario
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Configuración de los asientos de inventario en Odoo ERP
Cuando trabajamos con valoración de inventario automatizada (perpetua), Odoo genera asientos contables cada vez que entra o sale mercancía del almacén. Las cuentas que utiliza para esos asientos se definen principalmente en la categoría de producto, por lo que es importante configurarla bien antes de empezar a operar.

Para configurar los asientos de inventario en Odoo ERP debemos seguir los siguientes pasos:

1. Ingresamos en la configuración de la categoría de producto (Inventario → Configuración → Categorías de productos) y revisamos el método de coste, la valoración del inventario y las cuentas de stock.

<Image
  src="/images/posts/categorias.png"
  alt="owl-odoo"
  width={1461}
  height={626}
  priority
  className="next-image"
/>

2. Ejemplo de asientos de inventario en Odoo ERP y de las facturas.

<Image
  src="/images/posts/categorias1.png"
  alt="owl-odoo"
  width={1292}
  height={463}
  priority
  className="next-image"
/>

3. Ejemplo de asientos de factura.

<Image
  src="/images/posts/asiento-factura.jpeg"
  alt="owl-odoo"
  width={356}
  height={205}
  priority
  className="next-image"
/>

4. Tipos de cuentas contables que intervienen en cada documento.
```
[FACTURA DE VENTA]
Ventas de Giro = Ingresos
Iva Venta == Pasivo actual

[FACTURA DE COMPRA]
Proveedores == Coste directo de la ventas
IVA Compra == Activos Actuales

[CLIENTES]
Deudores por Ventas == A Cobrar

[PROVEEDOR]
Por pagar proveedores vario == A Pagar
```

Los nombres de las cuentas y los tipos pueden variar según el plan contable del país (la localización instalada), por lo que conviene revisarlos con el contador de la empresa antes de configurarlos.
