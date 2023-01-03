---
title: ▷ Módulo de Facturación Electrónica Odoo 16 ERP para España
date: 2023/1/3
description: ▷ Módulo de Facturación Electrónica Odoo 16 ERP para España
tag: fe, odoo, spain
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Módulo de Facturación Electrónica Odoo 16 ERP para España
La facturación electrónica es un proceso de facturación que se realiza a través de medios electrónicos, como Internet, correo electrónico, etc. La facturación electrónica es un proceso de facturación que se realiza a través de medios electrónicos, como Internet, correo electrónico, etc. A continuación se muestra un ejemplo de factura electrónica con un módulo de facturación electrónica para Odoo 16 ERP que he desarrollado para España.

## Configuración de los impuestos en la Facturación Electrónica para España
Asociar a los impuestos utilizados el tipo de código de impuestos, para eso vamos a el módulo facturación/configuración/impuestos pestaña opciones avanzadas.

<Image
  src="/images/posts/spain-factura-electronica-1.png"
  alt="factura-electronica"
  width={579}
  height={230}
  priority
  className="next-image"
/>

Entramos al grupo de impuestos y agregamos el tipo de código de impuestos. De una vez quedara listo para todas las compañías.

<Image
  src="/images/posts/spain-factura-electronica-2.png"
  alt="factura-electronica"
  width={654}
  height={97}
  priority
  className="next-image"
/>

Asociar los medios de pago de la factura electrónica a los plazos de pago de Odoo. Para eso vamos a el módulo facturación/configuración/plazos de pago. Y asignamos el medio de pago que corresponda a cada caso.

<Image
  src="/images/posts/spain-factura-electronica-3.png"
  alt="factura-electronica"
  width={657}
  height={218}
  priority
  className="next-image"
/>


Para cada cliente que se le remitirá una factura electrónica, se debe marcar el check de Factura electrónica y llenar los campos de Rol.

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

## Tipos de Facturas Electrónicas
1. FC:  Factura completa u ordinaria
2. FA: Factura simplificada.
3. AF: autofactura “Código sin uso desde la entrada en vigor del RD 1789/2010”.

## Clases de Facturas Electrónicas en España.
1. OO: Original
2. OR: Original rectificativa
3. OC: Original recapitulativa
4. CO: Duplicado original
5. CR: Duplicado rectificativa
6. CC: Duplicado recapitulativa

Una vez generada una factura si el cliente asociado tiene marcado el check de factura electrónica aparecerá la siguiente pestaña.

<Image
  src="/images/posts/spain-factura-electronica-6.png"
  alt="factura-electronica"
  width={628}
  height={182}
  priority
  className="next-image"
/>

Desde la pestaña Factura electrónica, accionamos el botón **GENERAR FACTURA ELECTRÓNICA**.
Una vez generada se mostrará el texto del fichero xml y se podrá descargar desde el botón Factura E xml.
Durante el proceso de creación existen varias validaciones de campos que deben estar llenos, el sistema irá avisando para que se cumplimenten los mismos.



