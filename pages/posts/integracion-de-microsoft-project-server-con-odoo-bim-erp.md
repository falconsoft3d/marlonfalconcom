---
title: ▷ Integración de Microsoft Project Server con Odoo BIM ERP
date: 2023/01/16
description: ▷ Cómo exportar presupuestos de Odoo BIM 2.0 a Microsoft Project en XML y volver a importarlos para planificar obras de construcción.
tag: odoo, bim, construccion, odoo-construccion
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Integración de Microsoft Project Server con Odoo BIM ERP
Microsoft Project es un software de gestión de proyectos profesionales que permite mantener un control sobre todos los procesos y tareas para conseguir una planificación y ejecución óptima. En este artículo veremos cómo integrar Microsoft Project Server con Odoo BIM ERP.

Odoo BIM 2.0 es un módulo diseñado para Odoo 16 que permite la gestión de obra desde la oportunidad de negocio hasta la facturación. Es un ERP que permite la planificación, ejecución y control de obras constructivas tales como edificaciones, viviendas, industrias, reformas, instalaciones, etc.

<Image
  src="/images/posts/odoo-project.png"
  alt="odoo-erp"
  width={1280}
  height={720}
  priority
  className="next-image"
/>

El ERP Odoo BIM 2.0 contiene el cálculo de la duración de cada partida en función de las horas de trabajo planificadas, tomando como referencia el tiempo más desfavorable dentro de la partida y expresando en días la duración de la misma. Además, permite usar relaciones entre las partidas para definir sus predecesoras con varios criterios.

<Image
  src="/images/posts/odoo-project-01.png"
  alt="odoo-erp"
  width={1008}
  height={596}
  priority
  className="next-image"
/>

## Datos de ejemplo:
- Partida: colocación de bloque de hormigón, e=14 cm, 1 cara vista. Cantidad: 100 m2.
- Horas hábiles por día para este presupuesto: 9 horas (este dato se define en la configuración de BIM).

En esta partida se introdujeron dos tipos de mano de obra (albañil y ayudante) y un equipo. Para cada recurso se calcula el tiempo a considerar dividiendo la cantidad de horas entre su disponibilidad, y se selecciona el que tiene el mayor tiempo, que en este caso sería el equipo hormigonera, con 0,50 horas. Este valor se multiplica por la cantidad definida en el presupuesto para esa partida: 100 m2 x 0,50 horas = 50 horas. A su vez, dividimos este valor entre 9 horas y obtenemos 5,55 días, que sería el valor a usar para calcular la fecha de fin y llevarlo al diagrama de Gantt.

## Integración de Odoo ERP con Microsoft Project
Hemos diseñado la interacción del ERP Odoo 16 BIM 2.0 con Microsoft Project de manera que, desde un presupuesto creado, podremos exportar un fichero en formato XML el cual se puede abrir con Microsoft Project cargando datos como la lista de tareas en función de las partidas del presupuesto con su tiempo de ejecución calculado, la disponibilidad de los recursos y las relaciones de dependencias entre ellas.

<Image
  src="/images/posts/odoo-project-02.png"
  alt="odoo-erp"
  width={938}
  height={578}
  priority
  className="next-image"
/>

Con las ventajas de manejo de este software se podrán realizar los ajustes pertinentes en cuanto a programación del proyecto y se volverá a importar en el ERP Odoo 16 BIM 2.0 para continuar con la gestión de nuestro proyecto de construcción en el resto de las etapas. El único requisito es que hay que guardar el proyecto en formato XML para que Odoo 16 BIM 2.0 pueda leerlo.

Ejemplo de presupuesto dentro de Odoo BIM.

<Image
  src="/images/posts/odoo-project-03.png"
  alt="odoo-erp"
  width={940}
  height={373}
  priority
  className="next-image"
/>

Ejemplo de presupuesto exportado a Microsoft Project.

<Image
  src="/images/posts/odoo-project-04.png"
  alt="odoo-erp"
  width={924}
  height={373}
  priority
  className="next-image"
/>

Además, hemos incorporado la posibilidad de crear certificaciones de avance de obra mediante la importación de estos ficheros, siempre que se haya marcado algún nivel de avance en las actividades del proyecto.

Con esta integración logramos aprovechar las ventajas de ambos programas, haciendo que sea más fácil para el usuario final la administración y planificación de proyectos de construcción.



