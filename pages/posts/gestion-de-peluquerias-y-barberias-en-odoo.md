---
title: ▷ Gestión de peluquerías, barberías y salones de belleza en Odoo - Agenda, citas y cobro
date: 2026/11/11
description: ▷ Software para peluquerías, barberías y salones de belleza en Odoo 19 - agenda por profesional, citas sin solapes, fichas de clientes, cobro y comisiones.
tag: odoo, odoo-19, modulos-odoo, peluquerias, barberias, salones-de-belleza
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Gestión de peluquerías, barberías y salones de belleza en Odoo: agenda, citas y cobro

En un salón de belleza o una barbería el día se decide en la agenda: una cita mal encajada deja a un profesional parado, una reserva doble hace esperar a dos clientes y una alergia olvidada puede acabar en un disgusto. Si además las citas están en una libreta y el cobro en otra herramienta, nadie sabe cuánto facturó cada profesional. **Salon & Barbershop Management** (Tijera Pro) es un módulo para **Odoo 19 (Community y Enterprise)** que gestiona la **agenda por profesional**, las **citas sin reservas dobles**, los clientes sin cita, las **fichas de clientes**, el **cobro de la visita** y las **comisiones**.

## ¿Para quién es este software de gestión de peluquerías en Odoo?

- **Peluquerías y barberías** con varios profesionales y sillones.
- **Salones de belleza y centros de estética** con cabinas, mesas de manicura y lavacabezas.
- **Cadenas con varios salones**, cada uno con su horario, sus recursos y su equipo.
- Negocios que pagan **comisiones** a sus profesionales y quieren calcularlas sin hojas de cálculo.

Solo depende de **Conversaciones (Mail)** y **Facturación**, incluidas en Odoo Community.

## Funciones principales

### Agenda del salón por profesional

El día del salón se ve como **una fila por profesional**. Los bloques muestran el cliente y el servicio, coloreados según el estado de la cita. Haz clic en un hueco libre para reservar y **arrastra y suelta** para mover una cita a otra hora o a otro profesional; las ausencias aparecen sombreadas.

<Image
  src="/images/posts/modulos-odoo/tijera_pro/agenda.png"
  alt="Agenda de peluquería en Odoo con una fila por profesional y citas coloreadas por estado"
  width={1600}
  height={900}
  className="next-image"
/>

### Reserva de citas en un minuto con huecos libres

Elige el cliente y los servicios y el módulo te muestra los **huecos libres del día**, con el profesional y el recurso disponibles. El aviso de alergia del cliente aparece en el mismo momento de reservar.

<Image
  src="/images/posts/modulos-odoo/tijera_pro/reserva.png"
  alt="Reserva de cita en Odoo para salón de belleza con servicios, huecos libres y aviso de alergia"
  width={1600}
  height={900}
  className="next-image"
/>

### Sin reservas dobles

Al reservar, mover o reprogramar se comprueban el **horario de apertura**, los turnos y descansos, las ausencias del profesional, los cierres del salón, sus otras citas y los recursos. Solo un responsable puede reservar fuera del horario.

### Servicios encadenados con su profesional y su recurso

Una misma cita puede llevar **varios servicios seguidos**: corte, después color y después peinado, cada uno con su profesional y su sillón o cabina. Cada servicio define su precio, sus minutos en la agenda (con tiempo de preparación y limpieza), el recurso que necesita, los materiales que usa y su comisión.

### Recursos del salón - sillones, cabinas y lavacabezas

Cada salón tiene sus **recursos**: sillones, cabinas, mesas de manicura, lavacabezas… Cuando un servicio necesita uno, la agenda le asigna uno libre; una cabina con capacidad 1 admite un servicio a la vez.

### Clientes sin cita

Un **cliente sin cita** empieza al momento con el primer profesional libre, sin romper la agenda del resto.

### Estados de la cita y la vista Hoy

Cada cita pasa por **reservada, confirmada, en espera, en servicio, terminada, cancelada o no presentado**. La vista **Hoy** muestra las citas del día con sus botones y las cifras del salón: en espera, en servicio, terminadas, ingresos y lo que falta por cobrar.

### Fichas de clientes con alergias y preferencias

La **ficha del cliente** guarda sus alergias (en rojo en cada cita), preferencias, profesional preferido, notas y todas sus visitas. La lista de clientes muestra el teléfono, el profesional preferido, las alergias, las visitas y las **ausencias sin aviso**.

<Image
  src="/images/posts/modulos-odoo/tijera_pro/ficha-cliente.png"
  alt="Ficha de cliente de peluquería en Odoo con alergias, preferencias, profesional preferido e historial de visitas"
  width={1600}
  height={900}
  className="next-image"
/>

### Cobro de la visita con factura

Cuando termina la visita, **Cobrar** crea la factura de cliente con cada servicio (producto, precio e impuestos), la valida y, si quieres, registra el pago al momento **en efectivo o con tarjeta**.

<Image
  src="/images/posts/modulos-odoo/tijera_pro/cobro.png"
  alt="Cobro de la visita en Odoo con factura pagada en efectivo o con tarjeta"
  width={1600}
  height={900}
  className="next-image"
/>

### Profesionales y comisiones

Cada profesional tiene sus especialidades, sus salones, su **comisión** y un horario semanal por salón. El informe de **comisiones** muestra lo que cada profesional facturó y ganó, por mes.

### Varios salones y permisos por usuario

Cada salón tiene su horario de apertura con descansos, zona horaria, intervalo de la agenda y recursos. Recepción, profesionales, responsables y administradores tienen sus propios permisos, y el administrador puede **limitar a cada usuario a algunos salones**.

## Beneficios para tu peluquería o barbería

- **Agenda llena y sin solapes**: huecos libres al instante y comprobación de horarios, ausencias y recursos.
- **Mejor atención**: alergias y preferencias visibles en cada cita y el historial de cada cliente.
- **Cobro rápido**: la factura sale de la propia visita, pagada en efectivo o con tarjeta.
- **Comisiones sin cálculos manuales**: lo facturado y ganado por cada profesional, mes a mes.
- **Control de varios salones** desde un solo Odoo.

## Preguntas frecuentes

**¿Se puede reservar dos veces a un profesional?**
No. Al reservar, mover o reprogramar se comprueban su horario, sus ausencias, el horario y los cierres del salón, sus otras citas y los recursos. Solo un responsable puede reservar fuera del horario.

**¿Y si un servicio necesita un sillón o una cabina?**
Cada servicio indica el recurso que necesita y la agenda le asigna uno libre del salón. Una cabina con capacidad 1 admite un servicio a la vez.

**¿Cómo se cobran las visitas?**
Al terminar la visita, Cobrar crea la factura con cada servicio, la valida y, si quieres, registra el pago en efectivo o con tarjeta.

**¿Funciona con varios salones?**
Sí. Cada salón tiene su horario, sus recursos y sus profesionales, y un profesional puede trabajar en varios salones con un horario para cada uno.

**¿Qué versiones de Odoo soporta?**
Odoo 19, tanto Community como Enterprise.

**¿En qué idiomas está?**
En inglés y español.

## Descarga el módulo

Puedes ver la ficha completa, todas las capturas y el precio de **Salon & Barbershop Management** en la [tienda de módulos Odoo](/tienda/odoo-module/19.0/tijera_pro). Si necesitas adaptarlo a tu salón o a tu forma de trabajar, [contáctame](/contacto) y lo vemos juntos.
