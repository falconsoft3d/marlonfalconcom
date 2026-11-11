---
title: ▷ Migrar una base de datos de Odoo 8 a Odoo 19 - Módulo de migración por XML-RPC
date: 2026/11/11
description: ▷ Migra tus datos de Odoo 8 a 18 (o de otro 19) a Odoo 19 - productos, contactos, ventas, compras, facturas y asientos, con comparación lado a lado.
tag: odoo, odoo-19, modulos-odoo, migracion-odoo, migraciones, xml-rpc
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Migrar una base de datos de Odoo 8 a Odoo 19 paso a paso

Muchas empresas siguen trabajando en Odoo 10, 12 o 14 porque **migrar la base de datos** parece un salto al vacío: ¿se mantendrán los números de factura?, ¿cuadrarán los saldos contables?, ¿qué pasa si algo falla a mitad? **Migrate Odoo Pro MFH (Odoo Database Migration Tool)** es un módulo para **Odoo 19 (Community y Enterprise)** que trae a tu nueva base de datos los datos de **cualquier Odoo desde la 8.0 hasta la 19.0**, por **XML-RPC**, paso a paso y **sin tocar la base de datos antigua**. Al terminar, una comparación pone ambas bases de datos lado a lado para demostrar que todo coincide.

## ¿Para quién es esta herramienta de migración de Odoo?

- **Empresas en versiones antiguas de Odoo** (8.0 a 18.0, Community o Enterprise) que quieren pasar a Odoo 19.
- **Empresas que cambian de servidor** y necesitan mover una compañía de un Odoo 19 a otro.
- **Partners e implantadores de Odoo** que buscan migraciones repetibles y verificables para sus clientes.

Se instala en la base de datos nueva junto con **Ventas, Compra, CRM, Inventario y Facturación**.

## Funciones principales

### Migración desde cualquier Odoo de la 8.0 a la 19.0

Te conectas al Odoo antiguo con su dirección, base de datos, usuario y contraseña (o clave API). El módulo **detecta la versión** y lee sus empresas. La base de datos antigua **solo se lee**: no se escribe nada en ella. Está probado con bases de datos reales de Odoo 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 y 19, cada una migrada a 19 y verificada.

### Tú eliges qué datos migrar

Unidades de medida, categorías de producto, **productos, contactos**, cuentas analíticas, **oportunidades del CRM, ventas, compras**, transferencias de inventario, **facturas, asientos contables, pagos y conciliaciones**. Desmarca lo que no necesites: lo que un paso necesita viene con él, así que migrar las ventas trae sus productos y contactos aunque esos pasos estén desmarcados.

### Migración por lotes: detén y reanuda cuando quieras

La migración avanza **lote tras lote**, con el botón Migrar ahora o **en segundo plano**. Cada lote se guarda, cada paso continúa donde se detuvo y **nada se migra dos veces**. Puedes ver lo que tiene la base de datos antigua y lo procesado, migrado o fallido en cada paso.

<Image
  src="/images/posts/modulos-odoo/migrate_odoo_pro/migration.png"
  alt="Migración de una base de datos antigua a Odoo 19 con el progreso de cada paso"
  width={1600}
  height={900}
  className="next-image"
/>

### Facturas con el mismo número, importes y estado

Facturas, asientos, pedidos y transferencias **conservan el número que tenían y el estado que tenían**: publicadas, pagadas o pagadas parcialmente. Las facturas mantienen fecha, líneas, impuestos y totales, y los pagos se publican y se **concilian de nuevo**.

<Image
  src="/images/posts/modulos-odoo/migrate_odoo_pro/invoices.png"
  alt="Facturas migradas a Odoo 19 con su número, importes y estado originales"
  width={1600}
  height={300}
  className="next-image"
/>

### Plan contable emparejado por código

**Cuentas, diarios e impuestos se emparejan por su código** (solo con una cuenta del mismo tipo) y se crean cuando faltan. Las líneas a cobrar, a pagar y de impuestos usan las cuentas de la factura antigua. Si el plan antiguo tiene 8 dígitos y el nuevo 6, la opción «Adaptar a los dígitos de este plan» resuelve la diferencia.

### Cada registro conserva su ID antiguo

El mapa de la migración relaciona **cada registro antiguo con el nuevo** en que se convirtió, e indica si se creó o se usó uno existente. El ID antiguo se puede buscar en contactos, productos, ventas, facturas y transferencias.

<Image
  src="/images/posts/modulos-odoo/migrate_odoo_pro/records.png"
  alt="Mapa de la migración de Odoo con cada registro antiguo y su ID en la nueva base de datos"
  width={1600}
  height={700}
  className="next-image"
/>

### Registro de errores y reintento

Lo que no se pudo migrar queda anotado **con el motivo**, junto con lo que se creó o adaptó por el camino. La migración sigue con los demás registros y el botón **Reintentar errores** los vuelve a traer cuando corrijas la causa.

### Comparación lado a lado de ambas bases de datos

La comparación muestra **los registros de cada paso, los totales de ventas, compras, facturas y pagos, cada factura, el saldo de cada cuenta y el stock de cada producto** en el Odoo antiguo y en el nuevo. Pruebas, no esperanzas: sabes exactamente qué coincide.

<Image
  src="/images/posts/modulos-odoo/migrate_odoo_pro/compare.png"
  alt="Comparación lado a lado de la base de datos antigua y Odoo 19 tras la migración"
  width={1600}
  height={900}
  className="next-image"
/>

### Multiempresa: una compañía cada vez

Eliges la empresa de la base de datos antigua y la migras, con sus registros y los compartidos, a la empresa que elijas en el nuevo Odoo. Para varias compañías, se crea una migración por cada una.

## Beneficios de migrar Odoo con este módulo

- **Riesgo cero sobre los datos originales**: el Odoo antiguo solo se lee por XML-RPC.
- **Contabilidad que cuadra**: mismos números de factura, mismas cuentas y saldos comprobados uno a uno.
- **Migración controlada**: por lotes, reanudable y sin duplicados.
- **Trazabilidad**: cada registro migrado guarda su ID antiguo y cada error su motivo.

## Cómo empezar en tres pasos

1. **Instala** Migrate Odoo Pro MFH en la base de datos nueva, con Ventas, Compra, CRM, Inventario y Facturación.
2. **Conecta** en Migrar Odoo > Migraciones > Nuevo: escribe la dirección, la base de datos, el usuario y la contraseña del Odoo antiguo y pulsa Conectar.
3. **Migra y compara**: pulsa Migrar ahora (o activa Migrar en segundo plano) hasta completar todos los pasos y después pulsa Comparar.

## Preguntas frecuentes

**¿Desde qué versiones de Odoo puedo migrar?**
Desde Odoo 8.0 hasta 19.0, Community o Enterprise, a Odoo 19. También desde otro Odoo 19, para mover una empresa a un servidor nuevo.

**¿Se modifica algo en la base de datos antigua?**
No. El Odoo antiguo solo se lee, por XML-RPC, con el usuario que indiques.

**¿Las facturas quedan iguales?**
Sí: mismo número, fecha, líneas, impuestos, totales y estado, con sus cuentas a cobrar, a pagar y de impuestos. La comparación lo demuestra factura por factura.

**¿Puedo migrar solo una parte de los datos?**
Sí, desmarcando los pasos que no quieras. Las dependencias necesarias (por ejemplo, los productos de una venta) se traen igualmente.

**¿Qué pasa si falla un registro?**
Se anota en el registro con el motivo, la migración continúa con los demás y Reintentar errores lo vuelve a intentar después de corregir la causa.

**¿Puedo detener la migración y reanudarla?**
Sí. Cada lote se guarda; basta con pulsar de nuevo Migrar ahora o dejar que siga en segundo plano. Nada se migra dos veces.

## Descarga el módulo

Consulta la ficha completa, las capturas y el precio de **Migrate Odoo Pro** en la [tienda de módulos Odoo](/tienda/odoo-module/19.0/migrate_odoo_pro). Si quieres entender antes los tipos de migración y sus riesgos, lee mi guía sobre [migraciones de Odoo](/posts/odoo-migraciones). Y si prefieres que me encargue yo de tu migración, [contáctame](/contacto).
