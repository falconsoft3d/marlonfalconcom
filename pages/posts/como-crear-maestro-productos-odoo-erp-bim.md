---
title: ▷ Cómo crear un maestro de productos en Odoo ERP
date: 2023/11/29
description: ▷ Pasos para definir un maestro de productos ordenado en Odoo ERP - datos maestros, referencias, códigos de barras, tipos y permisos.
tag: odoo, bim, productos
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Cómo crear un maestro de productos en Odoo ERP
Crear un maestro de productos eficiente en Odoo ERP es fundamental para la gestión eficaz de tu negocio. Aquí te explicamos cómo hacerlo paso a paso:

1. **Definición de datos maestros**:
El primer paso es definir los datos maestros de tus productos. Estos son los campos que deberás completar:
* Nombre del producto: identificación clara y descriptiva.
* Referencia: número o código único para cada producto.
* Código de barras: utiliza el estándar EAN13, que consiste en 12 dígitos más un dígito de verificación.
* Categoría: clasificación del producto (por ejemplo, material de construcción, herramienta, etc.).
* Unidad de medida: establece cómo se mide el producto (litros, metros, unidades, etc.).
* Precio de venta y coste: define ambos precios para tener control financiero.
* Tipo de producto: puede ser almacenable, servicio o consumible. Recomendamos no usar consumible.
* Tipo BIM: clasificación adicional como materiales, mano de obra, equipos, administrativo (usado en funciones) o producto virtual.

2. **Definimos la forma de generación de la referencia del producto**.
* 0100010001  (Código de la Empresa - Código de la Categoría - Código del Producto)
* 0100010002  (Código de la Empresa - Código de la Categoría - Código del Producto)

3. **Definimos la forma de generación del código de barras del producto** o usamos los códigos de barras de cada producto. Normalmente se utiliza la norma EAN13:
código de barras = 12 dígitos + 1 dígito de verificación.

4. **Definimos qué productos vamos a introducir en el sistema**.
* Materiales de obra (cemento, arena, grava, etc.).
* Mano de obra (perfil albañil, perfil carpintero, etc.).
* Equipos (andamios, maquinaria, etc.).
* Servicios que compraremos o venderemos (servicio de transporte, alquiler de maquinaria, etc.).

5. **Definimos las reglas de permisos**.
* ¿Quién puede crear productos?
* ¿Quién puede modificar productos?
* ¿Quién puede eliminar productos?

## Conclusión
Crear un maestro de productos en Odoo ERP requiere atención al detalle y una comprensión clara de los productos que tu negocio maneja. Siguiendo estos pasos, podrás asegurar que tu sistema de ERP refleje de manera precisa y eficiente tu inventario y servicios ofrecidos.