---
title: ▷ Lista de chequeo de tareas para implementar Odoo ERP
date: 2023/01/14
description: ▷ Lista de tareas que deben estar listas antes y durante el día de la salida a producción de una implementación de Odoo ERP.
tag: odoo, erp, metodologia
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Lista de chequeo de tareas para implementar Odoo ERP
A continuación te mostraré la que considero una lista de chequeo general para implementar Odoo ERP, que te puede servir para cualquier proyecto de ERP. Está basada en mi experiencia, así que es una recomendación que puedes mejorar.

<Image
  src="/images/posts/check-list-odoo-erp.png"
  alt="factura-electronica"
  width={1280}
  height={720}
  priority
  className="next-image"
/>

# Día -1. Lo que debe estar listo el día anterior a la implementación
1. Instalar Odoo ERP con la localización base.
2. Instalar, si se requieren, los módulos complementarios de la localización.
3. Crear las compañías.
4. Definir los módulos base de Odoo que se instalarán, por ejemplo: CRM, Contabilidad, Facturación, etc.
5. Agregar los usuarios al sistema y asignarles los permisos base.
6. Cargar el maestro de clientes, proveedores y acreedores.
7. Cargar las categorías de productos.
8. Cargar los productos.
9. Definir si se usarán variantes de productos. En ese caso, cargar los atributos y sus valores.
10. Cargar los precios de los productos.
11. Cargar las cuentas contables.
12. Crear los diarios y asociar las cuentas contables.
13. Definir y configurar el método de costeo y cómo se generan los asientos contables.
14. Crear las unidades de medida.
15. Crear los impuestos y configurarlos.
16. Revisar cómo se realizarán las secuencias de los documentos.
17. Revisar los tipos de reportes que se usarán.
18. Crear los plazos de pago.
19. Definir el modelo de facturación de venta.
20. Definir el modelo de facturación de compra.
21. Definir el método de respaldo de la base de datos.
22. Cargar los almacenes.
23. Cargar las ubicaciones.
24. Cargar las cuentas analíticas.
25. Cargar las reglas de reabastecimiento.
26. Completar la información de los contactos (datos contables, dirección, etc.).
27. Cargar los bancos.
28. Hacer un respaldo de la base de datos antes del día de la salida a producción.

# Lo que debe estar listo el día de la salida a producción
1. Cargar los costes.
2. Cargar un inventario inicial.
3. Cargar el asiento de apertura contable.
