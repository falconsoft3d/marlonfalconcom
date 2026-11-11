---
title: ▷ Gestión de hoteles en Odoo - PMS con rack de habitaciones, check-in, minibar y facturación
date: 2026/11/11
description: ▷ Gestiona tu hotel en Odoo 19 - rack de habitaciones con arrastrar y soltar, reservas sin duplicados, check-in, check-out, minibar, limpieza y factura.
tag: odoo, odoo-19, modulos-odoo, hoteles, pms, reservas
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Gestión de hoteles en Odoo: rack de habitaciones, reservas, check-in y facturación

Muchos hoteles pequeños y medianos siguen llevando las **reservas** en un cuadrante de Excel, la limpieza en una pizarra y la facturación en otro programa. El resultado son **dobles reservas**, consumos de minibar que nunca se cobran y un recepcionista que no sabe qué habitaciones están listas para el siguiente huésped. **Hotel & Property Management System** es un módulo para **Odoo 19 (Community y Enterprise)** que convierte Odoo en un **PMS hotelero**: habitaciones, reservas, rack de planificación, check-in y check-out, servicios, minibar, limpieza y la factura de la estancia, todo en el mismo ERP.

## ¿Para quién es este módulo de gestión hotelera en Odoo?

- **Hoteles, hostales, apartahoteles y casas rurales** que quieren dejar el cuadrante en papel o en hoja de cálculo.
- **Cadenas o grupos con varios hoteles**, que necesitan filtrar el planning y el tablero por establecimiento.
- **Empresas que ya usan Odoo** para su contabilidad y quieren facturar las estancias sin pasar datos de un sistema a otro.

Se apoya en la app de **Facturación** de Odoo, incluida en Community.

## Funciones principales

### Rack de habitaciones con arrastrar y soltar

El corazón del módulo es el **rack de habitaciones**: las habitaciones en filas y los días en columnas, con un color para cada estado de la reserva. De un vistazo ves quién está en cada habitación, quién llega y quién se va. **Arrastra una reserva** para cambiar sus fechas o su habitación, o haz clic en un día libre para crear una nueva. También hay una vista semanal y un **calendario** con las noches de cada reserva.

<Image
  src="/images/posts/modulos-odoo/hotel_pro/planning.png"
  alt="Rack de habitaciones del hotel en Odoo con las reservas por días y colores según su estado"
  width={1600}
  height={900}
  className="next-image"
/>

### Reservas sin overbooking

Cada **reserva** pasa por borrador, confirmada, check-in, check-out, cancelada o no presentado. Una reserva confirmada o un huésped alojado **bloquean la habitación**: Odoo rechaza confirmar, hacer el check-in o mover otra reserva a esas mismas noches. Además se comprueba la **capacidad** de la habitación y se excluyen las que están en mantenimiento o fuera de servicio. Los borradores no bloquean, así que una posible sobreventa se detecta a tiempo en el planning.

### Búsqueda de habitaciones disponibles

Indica las fechas y el número de huéspedes y el asistente muestra las **habitaciones libres** del hotel. Reservas una con un solo clic, sin revisar el rack a mano.

### Tablero de ocupación e ingresos

El **tablero del hotel** muestra las habitaciones disponibles, ocupadas, reservadas y por limpiar hoy, las **llegadas y salidas** del día, el porcentaje de **ocupación**, los ingresos y la previsión de los próximos 30 días.

<Image
  src="/images/posts/modulos-odoo/hotel_pro/dashboard.png"
  alt="Tablero de gestión hotelera en Odoo con ocupación, llegadas, salidas e ingresos"
  width={1600}
  height={900}
  className="next-image"
/>

### Estancias con acompañantes, servicios y minibar

Cada **estancia** reúne el huésped, la habitación, las noches y los **acompañantes**. Durante la estancia se registran los **servicios** (desayuno, parking, spa…) y los consumos de **minibar**, y si el huésped cambia de habitación queda guardado el historial. Cada paso aparece en el chatter.

<Image
  src="/images/posts/modulos-odoo/hotel_pro/stay.png"
  alt="Ficha de una estancia en el hotel en Odoo con acompañantes, servicios y minibar"
  width={1600}
  height={900}
  className="next-image"
/>

### Check-out y factura de la estancia en un paso

Al hacer el **check-out** se genera la **factura de cliente** con las noches, los servicios (con el impuesto que elijas) y el minibar (con el impuesto de cada producto). La factura se publica y queda vinculada a la reserva, sin teclear nada dos veces.

<Image
  src="/images/posts/modulos-odoo/hotel_pro/checkout.png"
  alt="Check-out de un huésped en Odoo con el total de la estancia y la factura al cliente"
  width={1600}
  height={900}
  className="next-image"
/>

### Control de limpieza y mantenimiento

Tras cada check-out la habitación queda con **limpieza pendiente**. Las habitaciones pueden marcarse en mantenimiento o fuera de servicio, y basta **un clic para marcarla como limpia**. Así recepción sabe en todo momento qué habitaciones puede entregar.

### Registro de huéspedes

El **registro de huéspedes** guarda el documento de identidad o pasaporte, la nacionalidad y la fecha de nacimiento de cada huésped y acompañante, junto con sus estancias y su última reserva.

### Tres roles y multihotel

Permisos para **usuario, recepción y administrador del hotel**: los usuarios lo ven todo y registran consumos; recepción reserva, hace check-in, check-out y factura; el administrador configura. Funciona con **varios hoteles y varias empresas**, cada una con sus propios establecimientos.

## Beneficios para tu hotel

- **Cero dobles reservas**: las habitaciones confirmadas u ocupadas quedan bloqueadas.
- **Ningún consumo sin cobrar**: servicios y minibar se facturan junto con la estancia.
- **Recepción más ágil**: reservar, hacer el check-in y facturar desde el mismo sitio.
- **Datos en tiempo real**: ocupación, llegadas, salidas e ingresos en un tablero.
- **Todo en Odoo**: la factura llega directamente a tu contabilidad.

## Cómo empezar

1. **Instala** Hotel & Property Management System desde Aplicaciones.
2. **Carga los datos de ejemplo** en Hotel > Configuración > Cargar datos de ejemplo: se crea un hotel con habitaciones, tipos de habitación, servicios y minibar.
3. **Abre el planning** y crea tu primera reserva haciendo clic en un día libre.

## Preguntas frecuentes

**¿Se puede reservar una habitación dos veces?**
No. Una reserva confirmada o un huésped en la habitación la bloquea, y Odoo rechaza confirmar, hacer el check-in o mover otra reserva a esas noches. Los borradores no bloquean, para que veas la posible sobreventa en el planning.

**¿Cómo se factura la estancia?**
En el check-out, con una factura de cliente que incluye las noches, los servicios y el minibar. Se publica y queda vinculada a la reserva.

**¿Funciona con varios hoteles?**
Sí. Habitaciones, servicios y minibar pertenecen a un hotel, el tablero y el planning se filtran por hotel y cada empresa ve sus propios hoteles.

**¿Quién puede hacer qué?**
Los usuarios lo ven todo y registran consumos; recepción reserva, hace check-in y check-out y factura; el administrador del hotel configura.

**¿En qué idiomas está disponible?**
En inglés y español.

**¿Qué versión de Odoo necesita?**
Odoo 19, tanto Community como Enterprise.

## Descarga el módulo

Consulta la ficha completa, todas las capturas y el precio de **Hotel & Property Management System** en la [tienda de módulos Odoo](/tienda/odoo-module/19.0/hotel_pro). Si necesitas adaptarlo a tu hotel o conectarlo con otros procesos, [contáctame](/contacto) y lo vemos juntos.
