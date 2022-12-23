---
title: Odoo migraciones
date: 2022/12/23
description: Odoo migraciones
tag: odoo, odoo-migraciones
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# Odoo migraciones

Odoo es un ERP que todos los años cambia de versión, por lo que es necesario migrar a la nueva versión para poder disfrutar de las nuevas funcionalidades que ofrece Odoo. En este post explicaremos como migrar de una versión a otra. Odoo solo le da soporte a las últimas 3 versiones. Si bien es un proceso que podrías hacer solo te recomiendo que lo hagas con un experto o partner en Odoo ERP para que te ayude a migrar tu proyecto. [Contactar a Marlon para migrarme ahora](/contacto/).

# Versiones de Odoo ERP.
<Image
  src="/images/odoo-migraciones-version.png"
  alt="odoo-migracione"
  width={1280}
  height={720}
  priority
  className="next-image"
/>
Odoo ERP ha tenido 9 versiones desde su creación en el año 2005. Antes de Odoo ERP se llamaba Tiny ERP y OpenERP. A continuación se muestra una tabla con las versiones de Odoo ERP.

| Nombre   | Ver | Año   |
|----------|-----|-------|
| Tiny ERP | 1   | 2005  |
| OpenERP  | 5   | 2009  |
| Odoo     | 8   | 2014  |
| Odoo     | 9   | 2015  |
| Odoo     | 10  | 2016  |
| Odoo     | 11  | 2017  |
| Odoo     | 12  | 2018  |
| Odoo     | 13  | 2019  |
| Odoo     | 14  | 2020  |

# Pasos para la migración.
1. Crear una copia de seguridad de la base de datos.
2. Crear una copia de seguridad de los archivos.
3. Actualizar el código fuente, te en cuenta que las versiones de odoo pueden cambiar nombres de campos, tablas, etc.
4. Instalamos la nueva versión de Odoo.
5. Subimos los nuevos módulos migrados.
6. Migramos los datos.

# Tipos de migraciones según origen.
Independientemente del alcance de la migración, te recomiendo el acompañamiento de un experto en Odoo para que te ayude a migrar tu proyecto. Te dejo el enlace a contacto por si te interesa que te apoyemos. [Contactar a Marlon](/contacto/).

1. Odoo a Odoo. (Migración de una versión de Odoo a otra versión de Odoo).
Normalmente se realiza cuando se quiere actualizar a una nueva versión de Odoo, por ejemplo de la versión 12 a la versión 16 o cuando quedo mal implementado el proyecto y se quiere mejorar los procesos o rediseñar correctamente el proyecto.

<Image
  src="/images/sap-odoo.png"
  alt="odoo9"
  width={1280}
  height={720}
  priority
  className="next-image"
/>

2. 3ros a Odoo. (Migración de un sistema de gestión de terceros a Odoo). Cuando vienes de SAP, Oracle, Microsoft Dynamics, etc. y quieres migrar a Odoo. Tener en cuenta que es bueno que antes de hacer la migración los usuarios conozcan Odoo y sepan como funciona.

# Tipos de migraciones según alcance.
1. Migración de Partner, Productos, Categorías de productos.
2. Migración de Partner, Productos, Categorías de productos, Facturas y Pagos.
3. Migración de Partner, Productos, Categorías de productos, Facturas y Pagos, Ordenes de compra, Ordenes de venta, Ordenes de producción, Asistencia, Plan de calidad, Tickets, Empleados, Proyectos, CRM.
4. Migración total.

# ¿Cuanto cuesta una migración de Odoo?
Para saber el coste de una migración de Odoo ERP es importante evaluar el alcance de la migración. Estos son los factores que influyen en el coste de la migración.

1. Alcance de la migración.
2. Origen de la migración.
3. Módulos a migrar.
4. Infraestructura donde está instalado Odoo ERP o tambien el sistema de 3ros.

# ¿Qué puede fallar en una migración de Odoo?
1. Perdidas de información.
2. Perdida de funcionalidades.

# ¿Qué herramientas se usan para migrar Odoo?
1. Script de migración.
2. Acciones planificadas con RPC.
3. Soluciones de terceros.

# ¿Cuantos días se tarda en migrar Odoo?
Pude ser entre 1 y 3 meses dependiendo del alcance de la migración.

# ¿Cuando es necesario migrar Odoo?
1. Te recomiendo migrar Odoo cuando se acerca la fecha de fin de soporte de la versión que estas usando. O cuando necesitas una nueva funcionalidad que solo está disponible en la nueva versión de Odoo.

2. Si tu proyecto está mal implementado y quieres mejorar los procesos o rediseñar correctamente el proyecto.

3. O cada 5 años.
