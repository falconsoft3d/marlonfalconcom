---
title: "▷ Metodología para la implementación de Odoo BIM 2.0"
date: 2023/01/11
description: "▷ Propuesta de metodología en ocho fases para implementar Odoo BIM 2.0, desde servidores, instalación, formación, desarrollo y soporte."
tag: odoo, erp, metodologia, bim, odoo-construccion
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Metodología para la implementación de Odoo BIM 2.0
Esta es una propuesta de metodología para implementar Odoo BIM 2.0 en una empresa. Se basa en cinco años de experiencia en la implementación de Odoo BIM 1.0 y se puede adaptar a cualquier empresa que quiera implementar Odoo BIM 2.0.

<Image
  src="/images/posts/bim-20-metodologia.png"
  alt="owl-odoo"
  width={1584}
  height={396}
  priority
  className="next-image"
/>

## 1. Servidores
Se debe tener un servidor para producción y otro para desarrollo, que permitan clonar repositorios e instalar librerías con pip.
- Sistema Operativo: Ubuntu 20.04
- Memoria RAM: > 16GB
- Disco Duro: > 500GB
- Procesador: > 6 núcleos
- Odoo 16
- PostgreSQL 13
- Python 3.X

## 2. Instalación de Odoo ERP
Se debe instalar Odoo 16 con la localización contable del país.
- Crear los usuarios de Odoo y sus contraseñas.

## 3. Instalación de BIM
Instalaremos el módulo en producción y, a partir de una copia de producción, duplicaremos la base de datos en desarrollo.
- Desarrollo será un ambiente inestable que borraremos constantemente para asegurarnos de trabajar con una copia de producción.

## 4. Capacitación de una semana con usuarios
Se debe capacitar a los usuarios en el uso de Odoo BIM.
- Un consultor impartirá las clases y asignará tareas a los usuarios.
- Aprovecharemos para levantar los desarrollos que se necesiten.

## 5. Desarrollo
Dedicaremos como mínimo dos meses a desarrollar los requerimientos que se necesiten. Todo se registrará en tickets con el módulo [ticketPro](/posts/metodologia-implementacion-odoo-bim).
- Se usará la rama dev para subir los desarrollos.
- Se usará la rama master para subir los desarrollos estables.

## 6. Entrega del proyecto con el manual de usuario
El proyecto se entrega junto con el manual de usuario, que se actualiza con los desarrollos realizados.

## 7. Tres meses de soporte alto
Normalmente, durante los tres meses siguientes se hacen correcciones y mejoras, acompañando a los usuarios de forma remota.

## 8. Doce meses de soporte bajo
Ya no se hacen desarrollos, solo correcciones y pequeñas mejoras, acompañando a los usuarios de forma remota. Lo normal es que en esta etapa el sistema ya esté muy estable.