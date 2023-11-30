---
title: ▷ Cómo crear un maestro de productos en Odoo ERP
date: 2023/11/29
description: ▷ Cómo crear un maestro de productos en Odoo ERP
tag: odoo, bim, productos
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

#  ▷ Cómo crear un maestro de productos en Odoo ERP
Crear un maestro de productos eficiente en Odoo ERP es fundamental para la gestión eficaz de tu negocio. Aquí te explicamos cómo hacerlo paso a paso:

1. Definición de Datos Maestros:
El primer paso es definir los datos maestros de tus productos. Estos son los campos que deberás completar:
* Nombre del Producto: Identificación clara y descriptiva.
* Referencia: Número o código único para cada producto.
* Código de Barra: Utiliza el estándar EAN13, que consiste en 12 dígitos más un dígito de verificación.
* Categoría: Clasificación del producto (por ejemplo, material de construcción, herramienta, etc.).
* Unidad de Medida: Establece cómo se mide el producto (litros, metros, unidades, etc.).
* Precio de Venta y Costo: Define ambos precios para tener control financiero.
* Tipo de Producto: Puede ser almacenable, servicio o consumible. Recomendamos no usar consumible.
* Tipo BIM: Clasificación adicional como materiales, mano de obra, equipos, administrativo (usado en funciones) , producto virtual

2. Definimos la forma de generación de la referencia del producto.
* 0100010001  (Código de la Empresa - Código de la Categoría - Código del Producto)
* 0100010002  (Código de la Empresa - Código de la Categoría - Código del Producto)

3. Definimos la forma de generación del código de barra del producto o usamos los codigos barra de cada producto. Normalmente se utiliza la norma EAN13
código de barra = 12 dígitos + 1 dígito de verificación

4. Definimos que productos voy a introducir en el sistema.
* Materiales de Obra (Cemento, Arena, Grava, etc)
* Mano de Obra (Perfil Albañil, Perfil Carpintero, etc)
* Equipos (Andamios, Maquinaria, etc)
* Servicios que compraremos o venderemos (Servicio de Transporte, Servicio de Alquiler de Maquinaria, etc)

5. Definimos las reglas de permisos.
* ¿Quién puede crear productos?
* ¿Quién puede modificar productos?
* ¿Quién puede eliminar productos?

## Conclusión:
Crear un maestro de productos en Odoo ERP requiere atención al detalle y una comprensión clara de los productos que tu negocio maneja. Siguiendo estos pasos, podrás asegurar que tu sistema de ERP refleje de manera precisa y eficiente tu inventario y servicios ofrecidos.