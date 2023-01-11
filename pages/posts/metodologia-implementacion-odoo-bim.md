---
title: ▷ Metodología para la implementación de Odoo BIM 2.0
date: 2023/01/11
description: ▷ Metodología para la implementación de Odoo BIM 2.0
tag: odoo, erp, metodologia, bim
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Metodología para la implementación de Odoo BIM 2.0.
Esta es una propuesta de metodología para implementar Odoo BIM 2.0 en una empresa. Se basa en la experiencia de 5 años de implementación de Odoo BIM 1.0. Se puede adaptar a cualquier empresa que quiera implementar Odoo BIM 2.0.

## 1. Servidores.
Se debe tener un servidor para producción y otro para desarrollo. Que permite clonar repos e instalar librerias con pip.
- Sistema Operativo: Ubuntu 20.04
- Memoria RAM: > 16GB
- Disco Duro: > 500GB

## 2. Instalación de Odoo ERP.
Se debe instalar Odoo 16 con la localización contable del país.
- Crear los usuarios de Odoo y contraseñas.

## 3. Instalación de BIM.
Entraremos he instalaremos el módulo en producción y con una copia de producción duplicaremos en desarrollo.
- Desarrollo sera un ambiente inestable que borraremos constantemente para asegurarnos de trabar con una copia de producción.

## 4. Capacitación de una semana con usuarios.
Se debe capacitar a los usuarios en el uso de Odoo BIM.
- Un consultor le entregara las clases y tareas a los usuarios.
- Aprovecharemos y levantaremos los desarrollos que se necesiten.

## 5. Desarrollo
Tomaremos 2 meses como mínimo para desarrollar los requerimientos que se necesiten. Todo se escribirá en ticket con el módulo ticketPro.
- Se usara la rama dev para subir los desarrollos.
- Se usara la rama master para subir los desarrollos estables.

## 6. Se entregara el proyecto con el manual de usuario.
El manual se actualiza con los desarrollos realizados.

## 7. Se hace 3 meses de soporte alto.
Normalmente los próximos 3 meses se hacen correcciones y mejoras. Acompañando a los usuarios de forma remota.

## 8. Se hace 12 meses de soporte bajo.
Ya no se hacen desarrollos, solo se hacen correcciones y mejoras. Acompañando a los usuarios de forma remota. Lo normal es que en esta etapa ya este el sistema muy estable.