---
title: ▷ GMAO en Odoo - Mantenimiento preventivo y correctivo con órdenes de servicio y brigadas
date: 2026/11/11
description: ▷ GMAO para Odoo 19 Community - equipos y flota, preventivos por días y km, listas de chequeo, órdenes de servicio con firmas, brigadas y planificación.
tag: odoo, odoo-19, modulos-odoo, gmao, mantenimiento, mantenimiento-preventivo
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ GMAO en Odoo: mantenimiento preventivo y correctivo con órdenes de servicio y brigadas

En muchas empresas de mantenimiento los **preventivos** viven en un calendario de papel, las **inspecciones** en hojas sueltas y las **órdenes de trabajo** en un chat con los técnicos. El resultado es conocido: equipos que pasan de fecha, averías detectadas que nunca se reparan y clientes que esperan porque nadie sabe qué brigada tiene un hueco libre. **CMMS & Maintenance Management MFH** es un módulo de **GMAO (gestión de mantenimiento asistida por ordenador)** para **Odoo 19 Community** que reúne equipos, flota, listas de chequeo, planes preventivos, correctivos, órdenes de servicio y brigadas en un solo lugar, sin necesidad de ningún módulo Enterprise.

## ¿Para quién es este GMAO para Odoo?

- **Empresas de climatización y aire acondicionado**, que controlan sus equipos por BTU y toneladas.
- **Empresas de mantenimiento industrial o de edificios**, con máquinas, instalaciones y planes periódicos.
- **Empresas con flota propia**, que quieren programar el mantenimiento de sus vehículos por días y por kilómetros.
- **Servicios técnicos con brigadas en campo**, que necesitan planificar la semana y entregar al cliente una orden firmada.

Solo depende de **Conversaciones, Productos, Flota y Empleados**, todos incluidos en Odoo Community.

## Funciones principales

### Tablero de indicadores de mantenimiento

El tablero muestra de un vistazo las **órdenes de servicio abiertas y cerradas**, los **correctivos pendientes**, los **preventivos por hacer**, los equipos y las brigadas destacados y los **BTU atendidos** esta semana, este mes y este año. Es el punto de partida del responsable de mantenimiento cada mañana.

<Image
  src="/images/posts/modulos-odoo/base_gmao/dashboard.png"
  alt="Tablero del GMAO en Odoo con órdenes de servicio, correctivos pendientes, preventivos y BTU atendidos"
  width={1600}
  height={900}
  className="next-image"
/>

### Inventario de equipos y vehículos de la flota

Cada equipo se registra con **marca, modelo, BTU y toneladas, número de serie, ubicación y contacto**. Además, los **vehículos de la Flota de Odoo** entran también en el mantenimiento, de modo que un mismo sistema cubre máquinas, instalaciones y camiones o furgonetas.

### Planes de mantenimiento preventivo por días y kilómetros

Los **preventivos** se definen por **código de agenda**, combinando días y kilómetros. Cada plan muestra su fecha de vencimiento y sus kilómetros con alertas de **vencido, próximo a vencer y al día**. Al cerrar una orden de servicio, cada preventivo resuelto toma la fecha y los kilómetros de esa orden como último servicio y **recalcula automáticamente su próximo vencimiento**.

<Image
  src="/images/posts/modulos-odoo/base_gmao/preventives.png"
  alt="Planes de mantenimiento preventivo en Odoo con alertas de vencido, próximo a vencer y al día"
  width={1600}
  height={900}
  className="next-image"
/>

### Listas de chequeo que generan correctivos

Las inspecciones se hacen a partir de **plantillas de listas de chequeo reutilizables**. Cada línea se marca como OK o con una observación, y **cada observación se convierte en un correctivo pendiente** que espera su orden de servicio. Ninguna anomalía detectada en una revisión se queda olvidada.

### Órdenes de servicio completas con costes, fotos y firmas

La **orden de servicio** (orden de trabajo) recorre los estados **borrador, planificada, abierta y cerrada**. Incluye el control de tareas, la mano de obra, los productos utilizados, los correctivos y preventivos que resuelve, **fotos y firmas**, con sus costes calculados. Un asistente carga en la orden **los correctivos pendientes y los preventivos vencidos** con un clic.

<Image
  src="/images/posts/modulos-odoo/base_gmao/order.png"
  alt="Orden de servicio de mantenimiento en Odoo con tareas, mano de obra, productos, correctivos, preventivos y firmas"
  width={1600}
  height={900}
  className="next-image"
/>

### Brigadas, planificación semanal y disponibilidad

Cada **brigada** tiene su horario de trabajo. La **planificación** muestra la semana de las brigadas en un calendario, con las órdenes planificadas y abiertas por brigada y estado. La búsqueda de **disponibilidad** enseña el tiempo ocupado y libre de cada brigada en un día y encuentra **el primer hueco libre** y el mejor horario para una nueva orden.

<Image
  src="/images/posts/modulos-odoo/base_gmao/planning.png"
  alt="Planificación semanal de brigadas de mantenimiento en Odoo con las órdenes de servicio en calendario"
  width={1600}
  height={900}
  className="next-image"
/>

### PDF de la orden de servicio listo para firmar

La orden se imprime en **PDF para entregar al cliente**, con sus preventivos, correctivos, mano de obra, productos y **las dos firmas**. Es el justificante del trabajo realizado.

### Acceso controlado

Solo los usuarios del grupo **Usuario Mantenimiento GMAO** ven el módulo; el administrador recibe este permiso al instalarlo. El módulo está disponible en inglés y español.

## Beneficios para el departamento de mantenimiento

- **Ningún preventivo pasa de fecha**: las alertas y la renovación automática mantienen el plan al día.
- **Cada avería tiene seguimiento**: las observaciones de las inspecciones se convierten en correctivos pendientes.
- **Mejor uso de las brigadas**: la disponibilidad y la planificación semanal evitan huecos y solapes.
- **Costes reales por orden**: mano de obra y productos quedan registrados en cada intervención.
- **Sin licencias Enterprise**: funciona sobre Odoo 19 Community.

## Preguntas frecuentes

**¿Necesita Odoo Enterprise?**
No. Funciona en Odoo 19 Community y solo depende de Conversaciones, Productos, Flota y Empleados.

**¿Es solo para aire acondicionado?**
No. Los BTU y las toneladas están pensados para equipos de climatización, pero los equipos, códigos de agenda, tareas y listas de chequeo sirven para cualquier mantenimiento - máquinas, edificios o vehículos.

**¿Cómo se renuevan los preventivos?**
Al cerrar una orden de servicio, cada preventivo resuelto toma la fecha (y los kilómetros) de esa orden como su último servicio y se vuelve a calcular su próxima fecha de vencimiento.

**¿Quién puede ver el GMAO?**
Solo los usuarios del grupo Usuario Mantenimiento GMAO. El administrador lo recibe al instalar el módulo.

**¿En qué idiomas está?**
Inglés y español.

## Descarga el módulo

Consulta la ficha completa, todas las capturas y el precio de **CMMS & Maintenance Management MFH** en la [tienda de módulos Odoo](/tienda/odoo-module/19.0/base_gmao). Si necesitas adaptar el GMAO a tus equipos, tus planes de mantenimiento o tu forma de trabajar con las brigadas, [contáctame](/contacto) y lo vemos juntos.
