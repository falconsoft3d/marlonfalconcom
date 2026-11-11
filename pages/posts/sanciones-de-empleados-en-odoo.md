---
title: ▷ Sanciones de empleados en Odoo - Gestión de casos disciplinarios con flujo y puntaje
date: 2026/11/11
description: ▷ Gestiona sanciones disciplinarias en Odoo 18, 19 y 20 - flujo de ocho pasos, días entre estados, documentos por caso y saldo de puntos por empleado.
tag: odoo, odoo-19, modulos-odoo, rrhh, recursos-humanos, sanciones
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Sanciones de empleados en Odoo: casos disciplinarios con flujo, documentos y puntaje

Gestionar las **sanciones disciplinarias de los empleados** suele acabar repartido entre correos, hojas de cálculo y carpetas compartidas. Cuando llega una inspección o un juicio laboral, nadie sabe con certeza quién informó el hecho, cuándo se tomó el descargo o cuántos días tardó Recursos Humanos en resolver. **Employee Sanctions** es un módulo para **Odoo 18, 19 y 20 (Community y Enterprise)** que lleva todo el **proceso disciplinario** dentro del ERP: un flujo de ocho pasos, el historial de cada cambio, los documentos del caso y un **saldo de puntos por empleado**.

## ¿Para quién es este módulo de sanciones en Odoo?

- **Departamentos de RRHH** que necesitan un registro ordenado y auditable de faltas y sanciones.
- **Empresas con varias sedes o departamentos**, donde cada responsable solo debe ver los casos de su equipo.
- **Empresas industriales, de logística, retail o seguridad**, con convenios que exigen apercibimientos por escrito y plazos claros.

Solo necesita la app **Empleados**, incluida en Odoo Community.

## Funciones principales

### Flujo disciplinario de ocho pasos

Cada caso avanza por **Borrador, Informado, Revisado por RRHH, Investigado, Descargo del empleado, Resolución, Notificación y Cierre**, con un botón para cada paso y siempre en orden. La resolución es obligatoria antes de notificar, así ninguna sanción llega al empleado sin estar justificada.

<Image
  src="/images/posts/modulos-odoo/hr_sanction/form.png"
  alt="Formulario de un caso sancionable en Odoo con un botón por cada paso del flujo disciplinario"
  width={2880}
  height={1720}
  className="next-image"
/>

### Todos los casos de un vistazo

La vista kanban agrupa los **casos sancionables por estado**, con el tipo de sanción y los puntos a descontar. La vista lista muestra referencia, empleado, departamento, responsable, tipo, puntos y estado.

<Image
  src="/images/posts/modulos-odoo/hr_sanction/kanban.png"
  alt="Kanban de sanciones de empleados en Odoo agrupado por estado"
  width={2880}
  height={940}
  className="next-image"
/>

### Días entre estados e historial completo

Cada cambio de estado queda registrado con **la fecha, el usuario que lo hizo y los días que el caso pasó en el estado anterior**. Con el informe de **días promedio por estado** descubres en qué fase se atascan los expedientes: si el descargo tarda semanas o si RRHH revisa en horas.

<Image
  src="/images/posts/modulos-odoo/hr_sanction/days.png"
  alt="Días promedio entre estados de los casos disciplinarios en Odoo"
  width={2000}
  height={1280}
  className="next-image"
/>

### Saldo de puntos por empleado

Cada empleado parte de **100 puntos** (el valor es configurable). Cuando una sanción llega a Notificación o Cierre, resta los puntos de su tipo. En la ficha del empleado aparecen botones inteligentes y una pestaña **Sanciones** con el puntaje inicial, los puntos descontados, el saldo y sus casos.

<Image
  src="/images/posts/modulos-odoo/hr_sanction/employee.png"
  alt="Ficha del empleado en Odoo con el saldo de puntos de sanciones"
  width={2880}
  height={1720}
  className="next-image"
/>

### Tipos de sanción configurables

Llamado de atención, apercibimiento, suspensiones, despido… Cada **tipo de sanción** tiene sus puntos, su descripción y su color. Los puntos propuestos pueden ajustarse en cada caso antes de notificarlo.

### Documentos por caso

Adjunta **descargos, informes y apercibimientos firmados** al expediente. Queda registrado qué empleado agregó cada documento, lo que facilita demostrar el proceso ante una auditoría.

### Acceso por departamento

Con el permiso **Usuario**, cada responsable ve los casos de su departamento, sus subdepartamentos y los casos que tiene asignados. Con **Usuario todos** se ven todos los casos, se configuran los tipos, se retroceden estados y se eliminan borradores.

### Análisis de sanciones

Kanban por estado, **tabla dinámica y gráficos por empleado, tipo o departamento**. Detecta qué áreas acumulan más faltas y qué tipos de sanción se aplican con más frecuencia.

### Integrado con Odoo

Chatter, actividades, **multicompañía** y botones inteligentes en la ficha del empleado. El módulo está traducido al español, inglés y chino.

## Beneficios para Recursos Humanos

- **Trazabilidad legal**: cada paso, fecha, usuario y documento queda registrado; los casos solo se pueden eliminar en borrador.
- **Plazos bajo control**: los días entre estados muestran los cuellos de botella del proceso.
- **Criterio homogéneo**: los tipos de sanción y sus puntos evitan decisiones arbitrarias entre departamentos.
- **Confidencialidad**: cada responsable ve únicamente lo que le corresponde.

## Cómo empezar en tres pasos

1. **Instala** Employee Sanctions desde Aplicaciones.
2. **Da acceso** en Ajustes > Usuarios, eligiendo Usuario o Usuario todos en Sanciones.
3. **Registra un caso** en Sanciones > Casos sancionables, describe el hecho y pulsa Informar.

## Preguntas frecuentes

**¿Cuándo se descuentan los puntos?**
Cuando el caso llega a Notificación o Cierre. Hasta entonces los puntos son una propuesta y se pueden cambiar.

**¿Un caso puede retroceder?**
Sí, un estado cada vez o directamente a Borrador, solo para usuarios con acceso a todos los departamentos. Cada movimiento queda registrado.

**¿Funciona con varias empresas?**
Sí. Cada caso pertenece a la empresa del empleado y se aplican las reglas multicompañía.

**¿Qué versiones de Odoo soporta?**
Odoo 18.0, 19.0 y 20.0, tanto Community como Enterprise.

## Descarga el módulo

Puedes ver la ficha completa, las capturas y el precio de **Employee Sanctions** en la [tienda de módulos Odoo](/tienda/odoo-module/19.0/hr_sanction). Si necesitas adaptarlo a tu convenio o integrarlo con nóminas, [contáctame](/contacto) y lo vemos juntos.
