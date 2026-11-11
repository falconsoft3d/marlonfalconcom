---
title: ▷ Coste de albaranes en Odoo - Coste unitario, subtotal y coste total de cada traslado
date: 2026/11/11
description: ▷ Muestra el coste de recepciones, entregas y traslados en Odoo 18, 19 y 20 - coste unitario y subtotal por línea, coste total y conversión de moneda.
tag: odoo, odoo-19, modulos-odoo, inventario, coste-de-albaranes, valoracion
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Coste de albaranes en Odoo: coste unitario, subtotal y coste total de cada traslado

En Odoo, un albarán de recepción o de entrega te dice **qué productos** se mueven y **cuántos**, pero no **cuánto valen**. Para saber el coste de una recepción hay que abrir el pedido de compra, restar el descuento, convertir la moneda y ajustar la unidad de medida a mano. **Picking Cost & Valuation Manager** es un módulo para **Odoo 18, 19 y 20 (Community y Enterprise)** que muestra el **coste de cada traslado** directamente en el albarán: el **coste unitario y el subtotal de cada línea** y el **coste total** de recepciones, entregas y traslados internos.

## ¿Para quién es este módulo de coste de albaranes en Odoo?

- **Responsables de almacén y logística** que quieren saber cuánto vale cada recepción o entrega sin salir de Inventario.
- **Departamentos de compras y administración** que comprueban el coste real de lo recibido, con descuentos y en la moneda de la empresa.
- **Empresas que compran en el extranjero** o en unidades distintas a las de su stock (docenas, cajas, paquetes).
- **Empresas que dan de alta activos** a partir de sus compras y no quieren que esos artículos inflen el coste del traslado.

Usa las apps **Inventario** y **Compra**, ambas incluidas en Odoo Community.

## Funciones principales

### Coste total de cada traslado en la lista

La lista de traslados muestra el **coste total de cada albarán**, y al seleccionar varios aparece la suma al pie. Así ves de un vistazo cuánto valen las recepciones del día o las entregas de una semana.

<Image
  src="/images/posts/modulos-odoo/picking_standard_price_2/transfers.png"
  alt="Lista de traslados de Odoo con el coste total de cada albarán y la suma de la selección"
  width={1600}
  height={340}
  className="next-image"
/>

### Coste unitario y subtotal en cada línea del albarán

Dentro de recepciones, entregas y traslados internos, cada línea muestra su **coste unitario** y su **subtotal de coste**, y el **coste total del traslado** aparece al pie del albarán.

### El coste real del pedido de compra, con descuento

Las recepciones toman el precio de **su propia línea del pedido de compra, después del descuento**. Unas sillas compradas a 128,00 con un 5 % de descuento se valoran a 121,60 en el albarán, sin cálculos manuales.

<Image
  src="/images/posts/modulos-odoo/picking_standard_price_2/receipt.png"
  alt="Recepción en Odoo con coste unitario tras descuento, subtotal por línea y coste total del albarán"
  width={1040}
  height={720}
  className="next-image"
/>

### Conversión a la moneda de la empresa

Si compras en **dólares u otra divisa**, el módulo convierte el coste a la **moneda de la empresa**. Mesas y monitores comprados en USD aparecen valorados en euros en la recepción.

<Image
  src="/images/posts/modulos-odoo/picking_standard_price_2/usd.png"
  alt="Albarán de Odoo con una compra en dólares valorada en euros, la moneda de la empresa"
  width={1040}
  height={720}
  className="next-image"
/>

### Coste por unidad del producto, con cualquier unidad de medida

Compras por docenas y recibes por unidades: el coste siempre se calcula **por unidad del producto**. Por ejemplo, papel comprado a 36,00 la docena con un 10 % de descuento se recibe como 60 paquetes a 2,70 cada uno.

<Image
  src="/images/posts/modulos-odoo/picking_standard_price_2/dozens.png"
  alt="Coste por unidad en un albarán de Odoo para un producto comprado por docenas"
  width={1040}
  height={720}
  className="next-image"
/>

### Valoración al coste del producto

Cuando el traslado no viene de un pedido de compra (una entrega, por ejemplo), o si marcas **Usar coste del producto**, la línea se valora al **coste del producto (precio estándar)**.

### Excluir del coste los artículos que pasan a ser activos

El campo **Cant. activos** deja fuera del coste parte de una línea. Si de diez sillas recibidas una se queda como **activo de la empresa**, solo nueve entran en el coste del albarán.

### Actualización masiva del coste

El botón **Actualizar coste** recalcula un traslado después de cambiar precios, y **Actualizar coste total**, desde el menú Acciones, actualiza **muchos traslados seleccionados a la vez**.

### Costes visibles solo para quien corresponde

Los costes solo se muestran a los usuarios del grupo **Coste de albaranes**. Los administradores de Inventario lo tienen por defecto; el resto del personal de almacén sigue trabajando sin ver precios.

## Beneficios para el almacén y las compras

- **Coste a la vista**: cada albarán dice cuánto vale, sin abrir pedidos de compra ni hacer cuentas.
- **Datos fiables**: descuentos, divisas y unidades de medida se aplican automáticamente.
- **Sin riesgo para la contabilidad**: el módulo solo muestra el coste; no toca la valoración de stock ni los asientos.
- **Confidencialidad**: los precios solo los ve quien tiene permiso.

Si quieres sacar más partido al almacén, repasa también las [ventajas de Odoo para la gestión de inventario](/posts/ventajas-odoo-gestion-inventario).

## Cómo empezar en tres pasos

1. **Instala** Picking Standard Price desde Aplicaciones (usa Inventario y Compra).
2. **Da acceso**: los administradores de Inventario ven los costes al momento; añade otros usuarios al grupo Coste de albaranes.
3. **Abre un traslado**: las recepciones de pedidos de compra muestran su coste directamente; usa Actualizar coste si cambias precios.

## Preguntas frecuentes

**¿De dónde sale el coste del albarán?**
De la línea del pedido de compra del movimiento: su precio después del descuento, en la moneda de la empresa y por unidad del producto. Si no hay pedido de compra, del coste del producto (precio estándar).

**¿Qué cantidad se valora?**
La cantidad reservada o hecha en cada línea, menos su Cant. activos. Antes de reservar nada, se usa la cantidad solicitada.

**¿Cambia la valoración de stock o la contabilidad?**
No. El módulo solo muestra el coste de los traslados; la contabilidad y la valoración de stock no se modifican.

**¿Funciona en Odoo Community?**
Sí, en Community y Enterprise. Necesita Inventario y Compra.

**¿Qué idiomas incluye?**
Inglés, con traducción completa al español.

**¿Qué versiones de Odoo soporta?**
Odoo 18.0, 19.0 y 20.0.

## Descarga el módulo

Puedes ver la ficha completa, las capturas y el precio de **Picking Cost & Valuation Manager** en la [tienda de módulos Odoo](/tienda/odoo-module/19.0/picking_standard_price_2). Si necesitas adaptarlo a tu forma de valorar el inventario, [contáctame](/contacto) y lo vemos juntos.
