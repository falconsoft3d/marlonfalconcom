---
title: ▷ TMS en Odoo - Gestión de transporte y flota de camiones con portal del conductor
date: 2026/11/11
description: ▷ TMS para Odoo 15 a 20 - solicitudes de transporte, rutas y precios por cliente, flota con GPS, neumáticos, planillas KM y nómina de conductores por km.
tag: odoo, odoo-19, modulos-odoo, tms, transporte, gestion-de-flotas
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ TMS en Odoo: gestión de transporte y flota de camiones con portal del conductor

Una empresa de transporte que mueve cargas para el **sector energético** maneja cada día solicitudes de clientes, camiones, conductores, inspecciones antes de la salida, neumáticos, kilómetros y nóminas. Cuando todo eso vive en hojas de cálculo y llamadas, cuesta saber qué camión está libre, qué precio aplicar a cada cliente o cuánto hay que pagar a cada conductor a fin de mes. **Transport & Fleet TMS Management MFH** es un **TMS (sistema de gestión de transporte)** para **Odoo 15.0 a 20.0, Community y Enterprise**, que lleva todo el ciclo dentro del ERP: desde la solicitud de transporte hasta la factura, pasando por la flota, el mantenimiento y la **nómina por kilómetro** de los conductores.

Si quieres repasar antes qué debe incluir un sistema de este tipo, tienes una guía en [qué es un ERP especializado en TMS](/posts/que-es-un-erp-tms).

## ¿Para quién es este TMS para Odoo?

- **Empresas de transporte de energía y combustibles**, que necesitan check lists de salida con extintores, kit ADR y mangueras.
- **Transportistas por carretera con flota propia**, que quieren controlar camiones, neumáticos y mantenimiento en un solo sistema.
- **Operadores logísticos con muchos viajes al día**, que reciben las cargas en Excel o desde pedidos de venta.
- **Empresas que pagan a sus conductores por kilómetro**, con complementos, pagos extra y deducciones.

Usa las aplicaciones **Flota, Empleados, Ventas, Facturación y Mantenimiento** de Odoo.

## Funciones principales

### Solicitudes de transporte del borrador a la factura

Cada **solicitud de transporte** recorre todo el flujo: se programa, se le asigna camión y conductor, se inspecciona, se conduce, se audita y se factura. La lista muestra cada carga con su cliente, ruta, camión, conductor, precio y pesos, y los colores indican el estado de cada solicitud. En el formulario aparecen la barra de estado, los datos de la carga y las **coordenadas de inicio y fin**.

<Image
  src="/images/posts/modulos-odoo/base_tms_energy/requests.png"
  alt="Solicitudes de transporte en el TMS de Odoo con cliente, ruta, camión, conductor, precio y estado"
  width={1600}
  height={900}
  className="next-image"
/>

### Rutas con tramos y listas de precios por cliente

Las **rutas** se definen con origen, destino, tipo de ruta, tramos, distancia, duración y precio base, y el producto de venta se crea a partir de la ruta. Con las **listas de precios por cliente** el mismo viaje puede tener un precio distinto para cada cliente, con fechas de validez, y la solicitud toma automáticamente el precio vigente.

### Flota con GPS en el mapa

Un mapa sobre **OpenStreetMap** muestra la **última posición GPS de cada camión**, con su conductor y su matrícula, y permite buscar por nombre o matrícula.

<Image
  src="/images/posts/modulos-odoo/base_tms_energy/fleet_map.jpg"
  alt="Mapa de la flota de camiones en Odoo con la posición GPS de cada vehículo"
  width={1600}
  height={900}
  className="next-image"
/>

### Check list del vehículo, neumáticos y mantenimiento

Antes de cada salida, el **check list del vehículo** comprueba luces, frenos, extintores, **kit ADR**, mangueras, neumáticos y documentos. El **control de neumáticos** registra cada cambio con su posición, marca, modelo, medida, número de serie y km de instalación. Las **órdenes de mantenimiento** recogen repuestos y trabajos de cada vehículo con su coste unitario y el importe total.

### Planillas KM de los conductores

La **planilla KM** reúne los viajes del conductor día a día con los kilómetros recorridos, los coeficientes y los totales, en una planilla lista para imprimir.

### Nómina de conductores por kilómetro

Las **nóminas** agrupan los viajes del periodo y pagan a cada conductor según su **coste por km**. Las **reglas salariales se basan en fórmulas**: salario base, complementos, pagos extra y deducciones que se apoyan unas en otras.

<Image
  src="/images/posts/modulos-odoo/base_tms_energy/payroll.png"
  alt="Nómina de conductores en Odoo calculada por los kilómetros recorridos en cada viaje"
  width={1600}
  height={900}
  className="next-image"
/>

### Importación de solicitudes desde Excel o pedidos de venta

Descarga la plantilla, rellena contacto, producto y cantidad, y **crea muchas solicitudes de transporte a la vez desde un archivo Excel**. También puedes generarlas desde las líneas de un **pedido de venta**.

### Portal del conductor desde el móvil

Cada conductor entra con su propio usuario en **/tms/portal**, sin necesidad de un usuario de Odoo. Ve el total de sus solicitudes, las que están en curso, completadas y pendientes, consulta los detalles de cada carga e **inicia o completa el viaje desde su móvil**. El acceso, la contraseña y el coste por km se definen en la ficha del empleado, y la contraseña se guarda cifrada con hash.

<Image
  src="/images/posts/modulos-odoo/base_tms_energy/portal_home.png"
  alt="Portal del conductor del TMS de Odoo con sus cargas en curso, completadas y pendientes"
  width={1600}
  height={900}
  className="next-image"
/>

## Beneficios para tu empresa de transporte

- **Todo el ciclo en un sistema**: solicitud, asignación, inspección, viaje, auditoría y factura.
- **Precios sin errores**: cada solicitud aplica la lista de precios vigente del cliente.
- **Flota bajo control**: posición GPS, check lists, neumáticos y costes de mantenimiento por vehículo.
- **Nóminas automáticas**: el pago a cada conductor sale de los km recorridos y de tus reglas salariales.
- **Sin licencias extra para conductores**: el portal TMS tiene su propio acceso.

## Cómo empezar en tres pasos

1. **Instala** el TMS desde Aplicaciones. Usa Flota, Empleados, Ventas, Facturación y Mantenimiento.
2. **Configura** tus rutas y listas de precios, añade tus camiones y activa el portal en la ficha de empleado de cada conductor.
3. **Trabaja** creando o importando las solicitudes, asígnalas y deja que cada conductor las gestione desde el portal.

## Preguntas frecuentes

**¿Necesita un conductor un usuario de Odoo?**
No. El portal TMS tiene su propio acceso, con un usuario y una contraseña definidos en la ficha del empleado, así que no consume ninguna licencia de usuario.

**¿Se guardan de forma segura las contraseñas del portal?**
Sí. Se guardan cifradas con hash (PBKDF2-SHA512) y solo los responsables de RR. HH. pueden cambiarlas.

**¿Quién puede ver los datos del TMS?**
Solo los usuarios internos. Los usuarios del portal de Odoo y el público no tienen acceso a solicitudes, rutas ni nóminas.

**¿Qué idiomas incluye?**
Inglés, más una traducción completa al español del back office y del portal del conductor.

**¿Qué versiones de Odoo soporta?**
Odoo 15.0 a 20.0, Community y Enterprise.

## Descarga el módulo

Consulta la ficha completa, todas las capturas y el precio de **Transport & Fleet TMS Management MFH** en la [tienda de módulos Odoo](/tienda/odoo-module/19.0/base_tms_energy). Si necesitas adaptar el TMS a tus rutas, tus tarifas o tu convenio de conductores, [contáctame](/contacto) y lo vemos juntos.
