---
title: ▷ Gestión de concesionarios de coches en Odoo - Stock de vehículos, pruebas de conducción y ventas
date: 2026/11/11
description: ▷ Software para concesionarios en Odoo 19 Community y Enterprise - stock de coches nuevos y de ocasión, pruebas de conducción, tasaciones, ventas y margen.
tag: odoo, odoo-19, modulos-odoo, concesionario, venta-de-coches, vehiculos
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Gestión de concesionarios de coches en Odoo: stock de vehículos, pruebas de conducción y ventas

En muchos **concesionarios de coches** el stock vive en una hoja de cálculo, las pruebas de conducción en la agenda de cada comercial y las tasaciones de los coches de entrega en un papel grapado a la carpeta del cliente. Así es difícil saber cuántos días lleva un coche en la exposición, cuánto se ha ganado realmente con él o qué comercial tiene la próxima prueba. **Falcon Car Dealer C1** es un módulo para **Odoo 19 (Community y Enterprise)** que convierte Odoo en el **back office del concesionario**: stock de vehículos nuevos, de ocasión y km 0, pruebas de conducción en un calendario, solicitudes de clientes, tasación del vehículo de entrega, venta con margen y una **ficha del vehículo en PDF** lista para el parabrisas.

## ¿Para quién es este software de concesionario en Odoo?

- **Concesionarios oficiales y multimarca** que venden coches nuevos y necesitan controlar el stock, las reservas y las ventas.
- **Compraventas de vehículos de ocasión** que quieren saber el coste de compra, el reacondicionamiento y el margen de cada coche.
- **Grupos con varias empresas o sedes**, que necesitan separar vehículos, pruebas y solicitudes por compañía.
- **Concesionarios que trabajan en millas**, gracias a las unidades imperiales por empresa.

No depende de Flota, CRM ni Contabilidad: solo necesita **Contactos** y **Conversaciones**, así que funciona en cualquier Odoo 19 Community.

## Funciones principales

### Stock de vehículos nuevos, de ocasión y km 0

Cada coche se registra con **marca, modelo, versión, año, carrocería, combustible, cambio, tracción, potencia, kilometraje, consumo, CO2, etiqueta medioambiental, número de bastidor (VIN), matrícula, colores y garantía**. La vista kanban muestra en cada tarjeta la foto, el estado, el precio y la rebaja, el año, el kilometraje, el combustible, el cambio, los días en stock y el asesor comercial.

<Image
  src="/images/posts/modulos-odoo/falcon_car_dealer_c1/stock-vehiculos.jpg"
  alt="Stock de vehículos del concesionario en Odoo con foto, precio, kilometraje y días en stock"
  width={1440}
  height={900}
  className="next-image"
/>

### Embudo de vehículos por estado

El stock avanza por **Borrador, Disponible, Reservado, Vendido o Retirado** en un kanban. De un vistazo sabes qué coches están listos para la venta, cuáles están apartados para un cliente y cuáles ya han salido. La vista de lista añade la matrícula, los días en stock, el precio y lo que se publica en la web.

### Ficha del vehículo con coste, reacondicionamiento y margen

El formulario de cada coche reúne el precio, la insignia, el **coste de compra, el reacondicionamiento y el margen**, junto con los datos técnicos, el historial y la carrocería. Las bajadas de precio y los **días en stock** quedan a la vista para decidir cuándo rebajar un vehículo que no rota.

<Image
  src="/images/posts/modulos-odoo/falcon_car_dealer_c1/ficha-vehiculo.jpg"
  alt="Ficha de un coche en el software de concesionario de Odoo con coste de compra, reacondicionamiento y margen"
  width={1440}
  height={900}
  className="next-image"
/>

### Equipamiento y galería de fotos

El **equipamiento** se marca con casillas agrupadas en confort, seguridad, multimedia, exterior e interior. Cada vehículo admite **tantas fotos como quieras**, con pie de foto y ordenadas arrastrando y soltando.

### Calendario de pruebas de conducción

Las **pruebas de conducción** se organizan en un calendario por asesor comercial, con **comprobación del carné de conducir** y el resultado de cada prueba. Si usas también la web del concesionario, las solicitudes que llegan desde el sitio aparecen aquí directamente.

<Image
  src="/images/posts/modulos-odoo/falcon_car_dealer_c1/pruebas-conduccion.jpg"
  alt="Calendario de pruebas de conducción por asesor comercial en Odoo"
  width={1440}
  height={900}
  className="next-image"
/>

### Solicitudes de clientes y tasación del vehículo de entrega

Las **solicitudes de información, prueba de conducción, tasación del vehículo de entrega, financiación y reserva** se gestionan en un kanban con prioridades y actividades. Para la **tasación**, registras el coche del cliente con su marca, modelo, año y kilometraje y tu oferta, y desde ahí programas la prueba del coche nuevo.

### Venta con comprador, financiación y margen

Al marcar un vehículo como **vendido** se guarda el precio final, la fecha de venta, el comprador, el vehículo de entrega y la financiación. El módulo **calcula el margen** y marca como ganadas las solicitudes abiertas de ese comprador.

### Ficha de escaparate en PDF

Cada coche tiene una **ficha imprimible en PDF** con fotos, precio, especificaciones clave, detalles, equipamiento y el asesor. Imprímela para el parabrisas o envíala al cliente por correo.

<Image
  src="/images/posts/modulos-odoo/falcon_car_dealer_c1/ficha-escaparate-pdf.jpg"
  alt="Ficha de escaparate en PDF de un vehículo generada desde Odoo para el parabrisas"
  width={900}
  height={1392}
  className="next-image"
/>

### Marcas, modelos y asesores comerciales

El módulo trae **20 marcas** con sus modelos y tipos de carrocería. Cada **asesor comercial** tiene foto, cargo, idiomas, teléfonos y sus coches en stock y vendidos. No se incluye ningún logotipo de marca registrada: subes los que tengas permiso para usar.

### Análisis del stock y de las ventas

Informes con el **valor del stock por marca y estado** y gráficos de vehículos por tipo de carrocería y combustible, para entender qué tienes en exposición y qué se vende.

### Kilómetros o millas por empresa

En los ajustes eliges **unidades métricas (km, l/100 km) o imperiales (millas, mpg)** por empresa, además de la garantía por defecto. Al cambiar de sistema, el kilometraje y el consumo se convierten automáticamente.

## Beneficios para el concesionario

- **Stock bajo control**: cada coche con su estado, sus días en exposición y su historial de precios.
- **Margen real por vehículo**: coste de compra y reacondicionamiento frente al precio final de venta.
- **Ningún cliente se pierde**: pruebas, tasaciones y solicitudes de financiación en un mismo lugar, con actividades para el comercial.
- **Costes confidenciales**: solo el grupo Concesionario / Administrador ve los costes de compra y los márgenes.
- **Preparado para crecer**: multiempresa, traducido al inglés, español y catalán, y ampliable con la web del concesionario.

## Añade la página web del concesionario

Falcon Car Dealer C1 funciona por sí solo, pero si quieres publicar tu stock en internet tienes el **tema web Falcon Car Dealer Web C1**: portada con buscador por marca, modelo y precio, inventario con filtros, fichas de vehículo con reserva de prueba de conducción, comparador y formulario de tasación. Te lo cuento en detalle en el artículo sobre el [tema web para concesionario de coches en Odoo](/posts/tema-web-concesionario-de-coches-odoo).

## Preguntas frecuentes

**¿Funciona sin la web?**
Sí. Falcon Car Dealer C1 es el back office completo del concesionario y funciona por sí solo. La web pública se añade con Falcon Car Dealer Web C1.

**¿Depende de Flota, CRM o Contabilidad?**
No. Solo necesita Contactos y Conversaciones, así que funciona en cualquier Odoo 19 Community y también en Enterprise.

**¿Quién ve los costes de compra y los márgenes?**
Solo el grupo Concesionario / Administrador. Los comerciales ven los precios, las especificaciones y la actividad.

**¿Cómo cambio a millas?**
En Concesionario > Configuración > Ajustes > Unidades de medida eliges Imperial. El kilometraje pasa a millas y el consumo a mpg, tanto en Odoo como en las fichas del vehículo y en la web.

**¿Es multiempresa?**
Sí. Los vehículos, las pruebas de conducción y las solicitudes van por empresa, con reglas de registro, y los precios se muestran en la moneda de la empresa de cada vehículo.

**¿En qué idiomas está?**
En inglés, español y catalán.

## Descarga el módulo

Puedes ver la ficha completa, las capturas y el precio de **Falcon Car Dealer C1** en la [tienda de módulos Odoo](/tienda/odoo-module/19.0/falcon_car_dealer_c1). Si necesitas adaptarlo a tu concesionario o migrar tu stock actual, [contáctame](/contacto) y lo vemos juntos.
