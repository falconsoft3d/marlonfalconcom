---
title: ▷ Configuración de los asientos de inventario en Odoo ERP
date: 2022/12/31
description: ▷ Configuración de los asientos de inventario en Odoo ERP
tag: odoo, asientos, inventario
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Configuración de los asientos de inventario en Odoo ERP
Para configurar los asientos de inventario en Odoo ERP debemos seguir los siguientes pasos:

1. Ingresamos a la configuración de la categoría de producto.

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

4. Tipos de cuentas contables.
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

