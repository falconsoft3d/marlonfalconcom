---
title: ▷ Gestión de clínicas, clínicas dentales y hospitales en Odoo - Pacientes, agenda, odontograma y camas
date: 2026/11/11
description: ▷ Software para clínicas, dentistas y hospitales en Odoo 19 - agenda sin citas dobles, sala de espera, consultas firmadas, odontograma, camas y facturación.
tag: odoo, odoo-19, modulos-odoo, clinicas, clinica-dental, hospitales
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Gestión de clínicas, clínicas dentales y hospitales en Odoo: pacientes, agenda, odontograma y camas

En muchas clínicas la agenda vive en un programa, la historia clínica en otro, las radiografías en una carpeta y la facturación en una hoja de cálculo. El resultado son citas dobles, pacientes esperando sin saber su turno, alergias que nadie ve a tiempo y cuentas que se quedan sin cobrar. **Clinic, Hospital & Medical Management** (SIS Pro) es un módulo para **Odoo 19 (Community y Enterprise)** que reúne en el ERP todo el **sistema de información sanitaria**: pacientes, agenda, sala de espera, **consultas firmadas**, **odontograma**, órdenes, **hospitalización con mapa de camas** y facturación.

Si quieres conocer el enfoque general de Odoo en el sector salud, también puedes leer [Odoo para clínicas y hospitales](/posts/odoo-clinica).

## ¿Para quién es este software de gestión clínica en Odoo?

- **Clínicas médicas y policlínicas** con varias especialidades, consultas y profesionales.
- **Clínicas dentales** que necesitan odontograma, historial por diente y presupuestos firmados.
- **Pequeños hospitales** con plantas, camas, ingresos y medicación pautada.
- **Grupos con varios centros**, cada uno con sus sedes, consultas y zona horaria.

Solo depende de **Conversaciones (Mail)** y **Facturación**, ambas incluidas en Odoo Community.

## Funciones principales

### Pacientes con historia clínica y alertas

Cada paciente tiene su **número de historia clínica** y documentos sin duplicados. La ficha reúne alertas, historia, consultas, signos vitales, órdenes, ingresos, cuenta y citas. Las **alergias, enfermedades crónicas y riesgos** aparecen en color en todas las pantallas y solo se retiran indicando un motivo.

### Agenda médica sin citas dobles

La agenda muestra **una fila por profesional** con su horario: haz clic en un hueco libre para citar y arrastra la cita para moverla. Al citar se comprueban el horario del profesional, la consulta y las demás citas del paciente, de modo que **no hay citas dobles**. Solo un médico puede dar un sobreturno, y queda marcado. La cita propone los huecos libres del profesional y admite **recordatorios por correo y WhatsApp**.

### Sala de espera, turnos y Mi cola

La **sala de espera** muestra las consultas y los sillones dentales, libres u ocupados, quién espera (los urgentes primero) y a quién se espera, con su turno (C001, C002…), sus alertas y sus botones. Admite pacientes sin cita, y cada médico tiene su vista **Mi cola** con sus pacientes y los de la cola general de su especialidad.

<Image
  src="/images/posts/modulos-odoo/sis_pro/sala-de-espera.png"
  alt="Sala de espera de la clínica en Odoo con turnos, consultas y sillones dentales libres u ocupados"
  width={1600}
  height={1000}
  className="next-image"
/>

### Consultas firmadas con sello SHA-256

La consulta recoge textos, **signos vitales, diagnósticos CIE-10** y órdenes. Al firmarla se sella con **SHA-256**: ya no se puede modificar, las correcciones se añaden como adendas encadenadas a la firma y cualquier cambio hecho por detrás se detecta al verificarla. Hay **plantillas rápidas** de texto por especialidad (endodoncia, periodoncia, ortodoncia) y recetas en un clic.

<Image
  src="/images/posts/modulos-odoo/sis_pro/consulta-firmada.png"
  alt="Consulta médica firmada en Odoo con signos vitales, diagnósticos CIE-10 y sello SHA-256"
  width={1600}
  height={900}
  className="next-image"
/>

### Órdenes médicas y recetas en PDF

**Laboratorio, imagen, procedimientos y medicación**, cada uno con su lista de trabajo para el laboratorio y enfermería: los urgentes primero y el resultado registrado en la propia orden. La **receta en PDF** incluye profesional, número de colegiado, paciente, tratamiento y la firma electrónica.

### Odontograma interactivo para clínicas dentales

Numeración **FDI** con dentición permanente, temporal y **mixta**. Elige una patología o un tratamiento y marca caries, obturaciones, coronas o implantes **cara por cara** (mesial, oclusal, distal, vestibular y lingual). Los colores indican el estado: diagnosticado en rojo, planificado en naranja, realizado en azul y existente en verde.

<Image
  src="/images/posts/modulos-odoo/sis_pro/odontograma.png"
  alt="Odontograma interactivo en Odoo con numeración FDI y tratamientos marcados por cara del diente"
  width={1334}
  height={592}
  className="next-image"
/>

### Historial de cada diente e imágenes clínicas

Haz clic en un diente para ver cada marca con su fecha y profesional, los tratamientos y sus **radiografías: antes y después**. Las imágenes clínicas (panorámicas, periapicales, de aleta de mordida, CBCT y fotos) se guardan por diente y por arcada.

### Planes de tratamiento dentales firmados

Los tratamientos del odontograma se convierten en un **presupuesto por fases** con precios y descuentos. El paciente lo **firma en pantalla** y se cobra por tratamiento o **a plazos**. El PDF del presupuesto recoge las fases, el total, los plazos y ambas firmas.

### Hospitalización y mapa de camas

El **mapa de camas** muestra por planta las camas ocupadas, disponibles, en limpieza y en mantenimiento; un clic en una cama libre inicia el ingreso. Cada ingreso tiene sus **notas de evolución, medicación pautada y sus dosis**, signos vitales, traslados, alta y su cuenta.

<Image
  src="/images/posts/modulos-odoo/sis_pro/mapa-de-camas.png"
  alt="Mapa de camas del hospital en Odoo con camas ocupadas, libres, en limpieza y en mantenimiento"
  width={1600}
  height={900}
  className="next-image"
/>

### Facturación de pacientes

La consulta firmada, las pruebas realizadas y las dosis administradas durante un ingreso van a la **cuenta del paciente**; la estancia se cobra por días según la tarifa de la planta. Desde Cuentas de pacientes ves lo pendiente de facturar, generas la factura y registras el pago en efectivo o por banco.

### Panel de la clínica

Un **panel imprimible** con las citas del día por estado, el tiempo de espera, las consultas firmadas, las órdenes pendientes, las camas y la facturación.

### Confidencialidad y auditoría

Los datos clínicos son solo para los profesionales sanitarios: enfermería los lee y los médicos los modifican. Recepción registra pacientes y citas y solo ve las alertas críticas. Cada consulta, cambio, firma e impresión queda en el **registro de auditoría**, y cada usuario solo ve sus centros.

## Beneficios para clínicas y hospitales

- **Todo en un solo sistema**: agenda, historia clínica, odontograma, hospitalización y facturación en Odoo.
- **Seguridad del paciente**: alertas en color en todas las pantallas y consultas que no se pueden alterar tras la firma.
- **Menos esperas y menos huecos**: agenda sin citas dobles, turnos y colas por médico y especialidad.
- **Más ingresos cobrados**: cada consulta, prueba, dosis y día de estancia llega a la cuenta del paciente.
- **Cumplimiento y privacidad**: roles, centros por usuario y auditoría de cada acción.

## Preguntas frecuentes

**¿Quién ve los datos clínicos?**
Solo los profesionales sanitarios: enfermería los lee y los médicos los modifican. Recepción gestiona pacientes y citas y solo ve las alertas críticas. Todo queda en el registro de auditoría.

**¿Se puede cambiar una consulta después de firmarla?**
No. La consulta firmada se sella con SHA-256; las correcciones se añaden como adendas y cualquier cambio hecho por detrás se detecta al verificarla.

**¿Sirve para una clínica dental?**
Sí. La especialidad dental incluye odontograma FDI por caras (permanente, temporal y mixto), historial de cada diente con sus radiografías, planes de tratamiento firmados, tratamientos con precios, plantillas de endodoncia, periodoncia y ortodoncia, y los sillones dentales en la sala de espera.

**¿Funciona con varios centros?**
Sí. Cada centro tiene sus sedes, consultas, plantas y zona horaria; cada usuario solo ve sus centros y un profesional puede trabajar en varios con un horario para cada uno.

**¿Funciona en Odoo Community?**
Sí, en Odoo 19 Community y Enterprise. Solo depende de Conversaciones (Mail) y Facturación.

**¿En qué idiomas está?**
En inglés y español.

## Descarga el módulo

Puedes ver la ficha completa, todas las capturas y el precio de **Clinic, Hospital & Medical Management** en la [tienda de módulos Odoo](/tienda/odoo-module/19.0/sis_pro). Si necesitas adaptarlo a tu clínica, tu especialidad o tus procesos de facturación, [contáctame](/contacto) y lo vemos juntos.
