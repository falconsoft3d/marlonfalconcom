---
title: ▷ Búsqueda de productos en Odoo por palabras en cualquier orden y sin acentos
date: 2026/11/11
description: ▷ Busca productos en Odoo 18, 19 y 20 por palabras en cualquier orden, sin acentos - nombre, referencia, código de barras y de proveedor en facturas y pedidos.
tag: odoo, odoo-19, modulos-odoo, productos, busqueda, ventas
author: Marlon Falcon Hernandez
image: /images/posts/modulos-odoo/product_unordered_search/invoice.png
---
import Image from 'next/image'

# ▷ Búsqueda de productos en Odoo por palabras en cualquier orden

Tu comercial sabe que el producto es «una válvula de 30», pero en Odoo se llama **Válvula de bola de latón de 30 mm**. Escribe «valvula 30» en la línea de la factura y **Odoo estándar no encuentra nada**: falta el acento y las palabras no van seguidas. Con catálogos de cientos o miles de referencias, esto se traduce en tiempo perdido, productos duplicados y líneas con el artículo equivocado. **Product Unordered Search** es un módulo para **Odoo 18, 19 y 20 (Community y Enterprise)** que permite **buscar productos por cualquiera de sus palabras, en cualquier orden y sin importar acentos ni mayúsculas**, en facturas, pedidos y cualquier búsqueda de productos.

## ¿Para quién es este buscador de productos para Odoo?

- **Distribuidores, ferreterías y suministros industriales** con catálogos grandes y nombres largos de producto.
- **Equipos de ventas, compras y facturación** que eligen productos a diario en presupuestos, pedidos y facturas.
- **Almacenes** que buscan artículos en los traslados por nombre, referencia o código de barras.

Solo necesita la app **Productos**, incluida en Ventas, Facturación, Compra e Inventario.

## Funciones principales

### Busca productos con las palabras en cualquier orden

«valvula 300», «300 valvula» o «mm 300 valvula»: **todas encuentran Válvula de bola de latón de 300 mm**. El orden de las palabras deja de importar; solo tienen que aparecer todas en el producto.

<Image
  src="/images/posts/modulos-odoo/product_unordered_search/before_invoice.png"
  alt="Línea de factura en Odoo estándar sin resultados al buscar el producto valvula 30"
  width={1046}
  height={581}
  className="next-image"
/>

### Basta con parte de una palabra

No hace falta escribir el nombre exacto. **«valv 30» encuentra las válvulas de 30 mm, 300 mm y 300 PSI**. Cada palabra puede ser solo un fragmento.

<Image
  src="/images/posts/modulos-odoo/product_unordered_search/invoice.png"
  alt="Búsqueda de productos en una factura de Odoo que encuentra las válvulas por palabras sin acento"
  width={1046}
  height={581}
  className="next-image"
/>

### Búsqueda sin acentos ni mayúsculas

«valvula» encuentra **Válvula** y «LATON» encuentra **latón**, **sin instalar la extensión unaccent en PostgreSQL**. El módulo guarda su propia clave de búsqueda sin acentos. Si prefieres activar unaccent para todo Odoo, lo explico en [cómo buscar sin acentos en Odoo](/posts/como-buscar-sin-acentos-odoo); con o sin ella, el módulo funciona igual.

### Nombre, referencia interna, código de barras y código de proveedor

Cada palabra puede estar en el **nombre, la referencia interna, el código de barras o el código del producto del proveedor**. Una búsqueda como «bv laton 300» combina referencia y nombre en la misma consulta.

### Todos los idiomas instalados

El nombre del producto se busca en **todos los idiomas de la base de datos**: escríbelo en español o en inglés y el producto aparece igualmente.

### En todos los campos de producto

Funciona donde elijas un producto: **facturas de cliente y de proveedor, presupuestos, pedidos de venta y de compra, traslados y tarifas**.

<Image
  src="/images/posts/modulos-odoo/product_unordered_search/sale.png"
  alt="Presupuesto de venta en Odoo encontrando la válvula de latón al buscar 300 laton"
  width={1046}
  height={563}
  className="next-image"
/>

### Listas de productos y catálogo

También en el **filtro Producto de las listas de productos**, en el catálogo de productos de pedidos y facturas y en la opción «Producto» de la búsqueda de cualquier lista.

<Image
  src="/images/posts/modulos-odoo/product_unordered_search/list.png"
  alt="Filtro Producto en la lista de productos de Odoo buscando acero 300 en cualquier orden"
  width={1600}
  height={420}
  className="next-image"
/>

### Rápido con catálogos grandes

La clave de búsqueda se guarda con un **índice de trigramas**: menos de **0,2 segundos por búsqueda con 30.000 productos**. Los resultados de Odoo, como una referencia exacta, siguen saliendo primero.

## Beneficios de la búsqueda de productos por palabras

- **Menos tiempo por línea**: se escribe lo que se recuerda, en el orden que sea.
- **Menos errores y duplicados**: si el producto existe, aparece, aunque no se escriba su nombre exacto.
- **Sin configuración**: los productos existentes quedan listos al instalar, en todos los idiomas.
- **Sin riesgo**: no se modifica ningún dato de los productos; al desinstalar, la búsqueda vuelve a ser la estándar.

## Cómo empezar en tres pasos

1. **Instala** Product Unordered Search desde Aplicaciones.
2. **Nada que configurar**: tus productos existentes quedan listos al momento.
3. **Busca** escribiendo las palabras que recuerdes, en cualquier orden, donde elijas un producto.

## Preguntas frecuentes

**¿Cambia los resultados que ya da Odoo?**
No. Los resultados de Odoo salen primero (referencia exacta, código de barras, texto tal cual) y los productos encontrados palabra por palabra se añaden después.

**¿Tienen que aparecer todas las palabras?**
Sí. Cada palabra escrita debe estar en algún lugar del producto; cuantas más palabras, menos resultados.

**¿Busca en los atributos de las variantes, como «Rojo»?**
No. Las palabras se buscan en el nombre, las referencias internas, los códigos de barras y los códigos de proveedor, como hace Odoo; los valores de atributos no forman parte del nombre.

**¿Funciona en el Punto de venta y en la tienda online?**
El módulo cubre el backoffice. El Punto de venta busca en el navegador con su propio motor y la tienda del sitio web ya busca palabra por palabra.

**¿Qué pasa si lo desinstalo?**
Las búsquedas vuelven a ser las de Odoo estándar. No se modifica ningún dato de los productos.

**¿Qué versiones de Odoo soporta?**
Odoo 18.0, 19.0 y 20.0, tanto Community como Enterprise.

## Descarga el módulo

Puedes ver la ficha completa, las capturas y el precio de **Product Unordered Search** en la [tienda de módulos Odoo](/tienda/odoo-module/19.0/product_unordered_search). Si necesitas adaptar la búsqueda a tu catálogo o a otros modelos, [contáctame](/contacto) y lo vemos juntos.
