---
title: Desarrollo Odoo ERP
date: 2022/12/18
description: Qué es el desarrollo en Odoo ERP, qué tecnologías se usan y qué tipos de desarrollos se pueden hacer para adaptar el sistema a cada empresa.
tag: odoo
author: Marlon Falcon Hernandez
---

# Desarrollo Odoo ERP

El desarrollo en Odoo es el proceso de crear o modificar módulos para ampliar las funcionalidades del ERP. Odoo está construido de forma modular: cada aplicación (Ventas, Compras, Inventario, Contabilidad, etc.) es un módulo, y cualquier mejora o adaptación se realiza también mediante módulos que se instalan sobre el sistema.

Los desarrollos agregan funciones para las cuales el sistema no estaba diseñado originalmente. Los realizan tanto Odoo S.A. como terceros: partners, desarrolladores independientes y la comunidad, por ejemplo a través de la OCA (Odoo Community Association).

## Tecnologías que se utilizan

- **Python**: lógica de negocio, modelos de datos y controladores.
- **XML**: definición de vistas, menús, acciones, datos y permisos.
- **QWeb**: motor de plantillas de Odoo, usado en informes PDF, sitio web y algunas vistas.
- **JavaScript** (y el framework OWL en las versiones recientes): componentes de la interfaz web.
- **HTML y CSS/SCSS**: maquetación y estilos.
- **PostgreSQL**: base de datos sobre la que trabaja el ORM de Odoo.

## Tipos de desarrollo más comunes

- **Módulos nuevos**: crear modelos, vistas y menús para cubrir un proceso que Odoo no contempla.
- **Herencia de módulos existentes**: añadir campos, modificar vistas o cambiar el comportamiento de un módulo estándar sin tocar su código original.
- **Informes**: crear o personalizar documentos PDF (facturas, presupuestos, albaranes) con QWeb.
- **Integraciones**: conectar Odoo con otros sistemas mediante su API XML-RPC/JSON-RPC o controladores HTTP propios.
- **Automatizaciones**: acciones planificadas, acciones de servidor y reglas automáticas.

## Conclusión

Gracias a su arquitectura modular y a su sistema de herencia, Odoo permite adaptar el ERP a casi cualquier necesidad sin modificar el núcleo, lo que facilita mantener y actualizar el sistema. Antes de desarrollar, conviene revisar si ya existe un módulo estándar o de la comunidad que cubra la necesidad.
