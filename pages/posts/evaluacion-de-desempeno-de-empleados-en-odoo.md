---
title: ▷ Evaluación de desempeño de empleados en Odoo - Encuestas entre compañeros y tablero de KPI
date: 2026/11/11
description: ▷ Evalúa el desempeño de tus empleados en Odoo 18, 19 y 20 - plantillas por puesto, preguntas 1-5, enlace sin cuenta, ranking y tablero de KPI.
tag: odoo, odoo-19, modulos-odoo, rrhh, evaluacion-de-desempeno, kpi
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Evaluación de desempeño de empleados en Odoo: encuestas, ranking y KPI

La **evaluación de desempeño de los empleados** suele hacerse con formularios sueltos, hojas de cálculo que alguien tiene que consolidar a mano y resultados que llegan tarde a la reunión individual. Además, cuando un empleado cambia de puesto o se renombra una pregunta, el histórico deja de cuadrar. **Employee Performance Evaluation & KPIs** es un módulo para **Odoo 18, 19 y 20 (Community y Enterprise)** que organiza las **evaluaciones entre compañeros** dentro del ERP: plantillas por puesto de trabajo, encuestas que se responden en Odoo o mediante un enlace, y un **tablero de KPI** con la puntuación media, el ranking y los comentarios.

## ¿Para quién es este módulo de evaluación de empleados en Odoo?

- **Departamentos de RRHH** que quieren medir el desempeño cada trimestre o semestre sin consolidar respuestas a mano.
- **Responsables de equipo** que preparan reuniones individuales y necesitan puntos fuertes y aspectos a mejorar de cada persona.
- **Empresas con varios puestos y departamentos**, donde cada puesto se evalúa con sus propias preguntas.
- **Grupos multiempresa** que quieren un proceso de evaluación común.

Solo necesita la app **Empleados**, incluida en Odoo Community.

## Funciones principales

### Tablero de KPI de desempeño

El tablero reúne **encuestas y respuestas, la puntuación media sobre 5, el porcentaje de valoraciones positivas (4 y 5) y la cobertura**, es decir, cuántos empleados han sido evaluados. Debajo aparecen la media de cada pregunta, la distribución de puntuaciones, el ranking de empleados y los últimos comentarios. Puedes filtrarlo por encuesta o por empleado.

<Image
  src="/images/posts/modulos-odoo/hr_employee_eval/dashboard.png"
  alt="Tablero de KPI de evaluación de desempeño de empleados en Odoo con puntuación media, cobertura y ranking"
  width={1600}
  height={900}
  className="next-image"
/>

### Plantillas de evaluación por puesto de trabajo

Cada **plantilla de evaluación** se vincula a uno o varios **puestos de trabajo**. Al generar una encuesta, el módulo carga automáticamente los empleados que ocupan esos puestos. La plantilla incluye además las instrucciones que verá cada evaluador.

<Image
  src="/images/posts/modulos-odoo/hr_employee_eval/template.png"
  alt="Plantilla de evaluación de empleados en Odoo con preguntas de puntuación 1-5 y puestos de trabajo"
  width={1600}
  height={800}
  className="next-image"
/>

### Preguntas de puntuación del 1 al 5

Trabajo en equipo, comunicación, fiabilidad o cualquier **competencia** que quieras medir: cada pregunta se puntúa del 1 al 5 y lleva un breve texto de ayuda para que todos los evaluadores la interpreten igual.

### Preguntas abiertas para el feedback

«¿Qué hace mejor esta persona?», «¿Qué podría mejorar?»: las **preguntas abiertas** pueden ser obligatorias u opcionales y se responden para cada empleado. Las respuestas se agrupan por persona, listas para la próxima **reunión individual**.

### Un enlace para todo el equipo, sin cuenta de Odoo

Compartes **un único enlace** y cualquiera responde desde un formulario público, sin usuario de Odoo. Los empleados con sesión iniciada encuentran su nombre ya rellenado, y el administrador puede abrir el formulario con el botón Responder. El formulario funciona en cualquier dispositivo y muestra el logo de tu empresa.

<Image
  src="/images/posts/modulos-odoo/hr_employee_eval/filled.png"
  alt="Formulario público de evaluación entre compañeros en Odoo con puntuaciones y comentarios por empleado"
  width={980}
  height={760}
  className="next-image"
/>

### Respuestas en blanco que no penalizan

Cada evaluador puntúa solo a los compañeros con los que ha trabajado y **deja en blanco al resto**. Esos blancos nunca bajan la media de nadie, y la cobertura muestra cuántos empleados han recibido evaluación. Un mismo navegador o un mismo nombre no pueden enviar una segunda evaluación para la encuesta.

### Ranking de empleados y análisis por pregunta

El **ranking** muestra quién puntúa mejor, con cuántos evaluadores, y la media de cada persona en cada pregunta. En el análisis tienes una **tabla dinámica** de la puntuación media por empleado y pregunta, con decimales, que puedes pasar a gráfico o lista y agrupar por puesto, departamento o encuesta.

<Image
  src="/images/posts/modulos-odoo/hr_employee_eval/analysis.png"
  alt="Análisis de la evaluación de desempeño en Odoo - tabla dinámica de puntuación media por empleado y pregunta"
  width={1600}
  height={580}
  className="next-image"
/>

### Encuestas por periodo con fecha límite

Una encuesta por trimestre o semestre, con su plantilla, fechas, número de respuestas, puntuación media y estado. Puedes **fijar una fecha límite o cerrar la encuesta**, y el enlace mostrará entonces que está cerrada. La lista de respuestas indica evaluador, fecha, origen (Odoo o enlace externo), empleados evaluados y puntuación media.

### Un historial que no se reescribe

Cada respuesta conserva **el puesto, el departamento y la pregunta** para los que se dio. Un ascenso o una pregunta renombrada nunca alteran los resultados pasados, así puedes comparar periodos con datos fiables.

### Privado por diseño

Solo el grupo **Administrador de Encuesta** ve el menú, las respuestas y quién las dio. Los empleados no ven las evaluaciones de sus compañeros, ni las suyas. El módulo está preparado para **multiempresa**.

## Beneficios para Recursos Humanos

- **Menos trabajo manual**: las respuestas se convierten solas en KPI, ranking y análisis.
- **Más participación**: un enlace sin cuenta de Odoo que funciona en el móvil.
- **Resultados justos**: los blancos no penalizan y la cobertura indica si hay datos suficientes.
- **Feedback útil**: comentarios agrupados por empleado para preparar cada reunión individual.
- **Confidencialidad**: solo RRHH ve quién evaluó a quién.

Si además gestionas expedientes disciplinarios, puedes complementarlo con el módulo de [sanciones de empleados en Odoo](/posts/sanciones-de-empleados-en-odoo).

## Cómo empezar en tres pasos

1. **Instala** el módulo desde Aplicaciones. Solo necesita la aplicación Empleados, incluida en Odoo Community.
2. **Prepara** la evaluación: da a RRHH el grupo Administrador de Encuesta y crea una plantilla con tus preguntas y puestos de trabajo.
3. **Evalúa**: genera una encuesta, ábrela y comparte su enlace. El tablero se va llenando a medida que tu equipo responde.

## Preguntas frecuentes

**¿Los evaluadores necesitan una cuenta de Odoo?**
No. El enlace abre un formulario público donde escriben su nombre y responden. Los empleados con sesión iniciada encuentran su nombre ya rellenado.

**¿Alguien puede responder dos veces?**
No. Tras enviar, el mismo navegador ve la página de agradecimiento y se rechaza una segunda evaluación con el mismo nombre.

**¿Quién ve las respuestas?**
Solo los usuarios del grupo Administrador de Encuesta. Los empleados no ven ni las evaluaciones de sus compañeros ni las suyas.

**¿Una respuesta en blanco baja la media?**
No. Un empleado dejado en blanco se omite: solo cuentan las puntuaciones dadas.

**¿Y si un empleado cambia de puesto?**
Cada respuesta conserva el puesto y el departamento que tenía el empleado cuando se dio, así que los resultados pasados se mantienen.

**¿Qué versiones de Odoo soporta?**
Odoo 18.0, 19.0 y 20.0, Community y Enterprise. Incluye inglés y una traducción completa al español.

## Descarga el módulo

Consulta la ficha completa, las capturas y el precio de **Employee Performance Evaluation & KPIs** en la [tienda de módulos Odoo](/tienda/odoo-module/19.0/hr_employee_eval). Si necesitas adaptar las preguntas o el proceso de evaluación a tu empresa, [contáctame](/contacto) y lo vemos juntos.
