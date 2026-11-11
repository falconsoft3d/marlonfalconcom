---
title: ▷ Gestión de obras y presupuestos de construcción en Odoo - capítulos, certificaciones y costes
date: 2026/11/11
description: ▷ Gestiona obras en Odoo 18, 19 y 20 - presupuestos por capítulos importables desde Excel, certificaciones, compras, costes de obra y aprobación del cliente.
tag: odoo, odoo-19, modulos-odoo, construccion, presupuestos-de-obra, gestion-de-obras
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Gestión de obras y presupuestos de construcción en Odoo

En muchas constructoras el **presupuesto de obra** vive en una hoja de cálculo, el avance en los partes del encargado, las compras en otro programa y el margen real solo se conoce cuando la obra ya ha terminado. **Construction Project & Cost Manager** (SPM Cost & Construction Manager) es un módulo para **Odoo 18, 19 y 20 (Community y Enterprise)** que lleva el proyecto de construcción **desde el presupuesto hasta la factura**: capítulos, partidas y recursos, tareas con avance, **certificaciones**, compras desde el presupuesto, **costes de obra** y la aprobación del cliente mediante un enlace seguro.

## ¿Para quién es este módulo de gestión de obras en Odoo?

- **Constructoras y contratistas** que quieren presupuestar, ejecutar y certificar sin salir del ERP.
- **Empresas de reformas, instalaciones y obra civil** que necesitan saber el coste real y el margen de cada proyecto mientras se ejecuta.
- **Jefes de obra y encargados** que registran el avance semanal y las incidencias en obra.
- **Departamentos de compras** que quieren pedir materiales y maquinaria a partir de lo presupuestado.

Utiliza Contabilidad, Compra, Empleados, Asistencias, CRM y Sitio web, todos incluidos en Odoo Community.

## Funciones principales

### Proyectos de construcción con costes, ventas y margen

Cada proyecto tiene su cliente, importe, etiquetas, etapa y cuenta analítica. Desde la ficha accedes a sus **presupuestos, gastos, pedidos de compra, requisiciones y asistencias**, con el importe, las ventas, los costes, el beneficio y el **margen del proyecto** siempre a la vista.

<Image
  src="/images/posts/modulos-odoo/base_spmmanager/project.png"
  alt="Proyecto de construcción en Odoo con presupuestos, compras, gastos, costes y margen de obra"
  width={1600}
  height={900}
  className="next-image"
/>

### Presupuestos de obra por capítulos, partidas y recursos

El **presupuesto de construcción** se organiza en capítulos y partidas, y cada partida en sus recursos: **mano de obra, material, maquinaria y subcontratas**, con cantidades y precios unitarios. Los totales y el margen se calculan automáticamente al modificar cualquier línea.

<Image
  src="/images/posts/modulos-odoo/base_spmmanager/budget.png"
  alt="Presupuesto de obra en Odoo con capítulos, partidas y recursos de mano de obra, material y maquinaria"
  width={1600}
  height={900}
  className="next-image"
/>

### Importar el presupuesto de obra desde Excel

No hace falta volver a teclear el presupuesto. Puedes **cargarlo completo desde un archivo Excel** con las columnas habituales PARTIDA, NAT, UNIDAD, DESCRIPCION, MEDICION y PRECIO; los recursos que no existen se crean solos.

### Tareas e informes de trabajo con avance

Las **tareas se generan a partir de las partidas del presupuesto**, una por partida. El encargado registra el avance en **informes de trabajo semanales** y el avance anterior se arrastra automáticamente, de modo que cada tarea muestra cuánto se ha ejecutado.

### Certificaciones de obra listas para facturar

Cada periodo **certificas las cantidades ejecutadas frente al presupuesto** y las facturas al cliente desde Odoo. La certificación de obra deja de ser un cálculo manual en una hoja aparte.

<Image
  src="/images/posts/modulos-odoo/base_spmmanager/certification.png"
  alt="Certificación de obra en Odoo con las cantidades ejecutadas frente al presupuesto lista para facturar"
  width={1600}
  height={900}
  className="next-image"
/>

### Compras desde el presupuesto

Las **requisiciones de compra** cargan los materiales y la maquinaria del presupuesto con su precio, los agrupan por proveedor y se convierten en **pedidos de compra**. Compras pide exactamente lo que se presupuestó.

### Costes de obra reales y margen

Los **gastos de obra** por empleado y proyecto, las **horas de mano de obra con su coste** (a partir de las asistencias) y las compras se suman al coste real del proyecto. Así conoces el margen mientras la obra avanza, no cuando ya es tarde.

### Aprobación del presupuesto por el cliente

Envía al cliente un **enlace seguro**: abre el presupuesto, lo revisa y **lo aprueba o lo rechaza sin necesidad de una cuenta de Odoo**. Un segundo enlace de solo lectura le muestra las tareas y el avance del proyecto.

<Image
  src="/images/posts/modulos-odoo/base_spmmanager/portal.png"
  alt="Aprobación del presupuesto de obra por el cliente en Odoo mediante un enlace seguro sin iniciar sesión"
  width={1600}
  height={900}
  className="next-image"
/>

### Tickets de incidencias en obra

Los **tickets** registran las incidencias en obra con su proyecto, cliente y estado, para que ningún problema quede en una llamada o un mensaje perdido.

### Presupuestos anuales, masivos e informes SQL

El módulo incluye **presupuestos anuales y masivos** e **informes SQL** para administradores, limitados a sentencias SELECT de solo lectura.

## Beneficios para la empresa constructora

- **Un único sistema**: presupuesto, ejecución, compras, costes y facturación en el mismo ERP.
- **Margen bajo control**: el coste real se actualiza con gastos, mano de obra y compras.
- **Certificar es más rápido**: lo ejecutado frente al presupuesto, listo para facturar.
- **Clientes más implicados**: aprueban el presupuesto y siguen el avance desde un enlace, sin usuario.
- **Sin doble tecleo**: el presupuesto se importa desde Excel y las tareas y compras salen de él.

Si estás preparando tus primeros presupuestos, te puede ayudar esta guía con los [10 pasos para elaborar un presupuesto de obra](/posts/10-pasos-para-elaborar-un-presupuesto-de-obra-odoo-bim).

## Cómo empezar en tres pasos

1. **Instala** Construction Project & Cost Manager desde Aplicaciones.
2. **Presupuesta**: crea un proyecto y su presupuesto, o impórtalo desde Excel, y genera las tareas a partir de sus partidas.
3. **Ejecuta**: registra informes de trabajo, certifica cada periodo, compra desde el presupuesto y sigue los costes y el margen.

## Preguntas frecuentes

**¿Funciona en Odoo Community?**
Sí. Necesita Contabilidad, Compra, Empleados, Asistencias, CRM y Sitio web, todos incluidos en Community.

**¿Necesita el cliente un usuario de Odoo para aprobar un presupuesto?**
No. El cliente recibe un enlace seguro y desde él aprueba o rechaza el presupuesto.

**¿Puedo importar mis presupuestos de obra?**
Sí, desde Excel con las columnas PARTIDA, NAT, UNIDAD, DESCRIPCION, MEDICION y PRECIO. Los recursos que faltan se crean automáticamente.

**¿Quién puede ejecutar informes SQL?**
Solo los administradores, y únicamente sentencias SELECT de solo lectura.

**¿Qué idiomas incluye?**
Inglés, con traducción completa al español.

**¿Qué versiones de Odoo soporta?**
Odoo 18.0, 19.0 y 20.0, tanto Community como Enterprise.

## Descarga el módulo

Puedes ver la ficha completa, las capturas y el precio de **Construction Project & Cost Manager** en la [tienda de módulos Odoo](/tienda/odoo-module/19.0/base_spmmanager). Si necesitas adaptarlo a tu forma de presupuestar o integrarlo con tu contabilidad de obra, [contáctame](/contacto) y lo vemos juntos.
