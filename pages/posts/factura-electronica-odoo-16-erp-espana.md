---
title: ▷ Módulo de Facturación Electrónica Odoo 16 ERP para España
date: 2023/1/3
description: ▷ Cómo configurar y generar facturas electrónicas en formato Facturae con un módulo para Odoo 16 ERP adaptado a España.
tag: fe, odoo, spain
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Módulo de Facturación Electrónica Odoo 16 ERP para España
La facturación electrónica es un proceso de facturación que se realiza a través de medios electrónicos, como Internet o el correo electrónico, en lugar de en papel. En España, las facturas electrónicas dirigidas a las administraciones públicas se emiten en formato **Facturae**, un estándar XML que se puede firmar digitalmente y presentar a través de plataformas como FACe.

A continuación se muestra un ejemplo de factura electrónica con un módulo de facturación electrónica para Odoo 16 ERP que he desarrollado para España.

## Configuración de los impuestos en la facturación electrónica para España
Primero debemos asociar a los impuestos utilizados el tipo de código de impuesto. Para eso vamos al módulo Facturación / Configuración / Impuestos, pestaña Opciones avanzadas.

<Image
  src="/images/posts/spain-factura-electronica-1.png"
  alt="factura-electronica"
  width={579}
  height={230}
  priority
  className="next-image"
/>

Entramos al grupo de impuestos y agregamos el tipo de código de impuestos. De esta forma quedará listo para todas las compañías.

<Image
  src="/images/posts/spain-factura-electronica-2.png"
  alt="factura-electronica"
  width={654}
  height={97}
  priority
  className="next-image"
/>

## Medios de pago
A continuación asociamos los medios de pago de la factura electrónica a los plazos de pago de Odoo. Para eso vamos al módulo Facturación / Configuración / Plazos de pago y asignamos el medio de pago que corresponda a cada caso.

<Image
  src="/images/posts/spain-factura-electronica-3.png"
  alt="factura-electronica"
  width={657}
  height={218}
  priority
  className="next-image"
/>


## Configuración de los clientes y de la factura
En cada cliente al que se le remita una factura electrónica se debe marcar la casilla Factura electrónica y rellenar los campos de Rol.

<Image
  src="/images/posts/spain-factura-electronica-4.png"
  alt="factura-electronica"
  width={659}
  height={433}
  priority
  className="next-image"
/>

Desde el formulario de factura se selecciona el Tipo de documento y la Clase de factura.

<Image
  src="/images/posts/spain-factura-electronica-5.png"
  alt="factura-electronica"
  width={662}
  height={239}
  priority
  className="next-image"
/>

## Tipos de facturas electrónicas
1. FC: factura completa u ordinaria.
2. FA: factura simplificada.
3. AF: autofactura (código sin uso desde la entrada en vigor del RD 1789/2010).

## Clases de facturas electrónicas en España
1. OO: original.
2. OR: original rectificativa.
3. OC: original recapitulativa.
4. CO: duplicado original.
5. CR: duplicado rectificativa.
6. CC: duplicado recapitulativa.

## Generar la factura electrónica
Una vez generada una factura, si el cliente asociado tiene marcada la casilla de factura electrónica, aparecerá la siguiente pestaña.

<Image
  src="/images/posts/spain-factura-electronica-6.png"
  alt="factura-electronica"
  width={628}
  height={182}
  priority
  className="next-image"
/>

Desde la pestaña Factura electrónica, accionamos el botón **GENERAR FACTURA ELECTRÓNICA**.
Una vez generada, se mostrará el texto del fichero XML y se podrá descargar desde el botón Factura E xml.
Durante el proceso de creación se validan varios campos obligatorios; si falta alguno, el sistema irá avisando para que se cumplimente.



