---
title: ▷ Odoo ERP remesas para España
date: 2023/1/3
description: ▷ Módulo de Odoo 16 para gestionar remesas SEPA en España - mandatos de pago, generación del fichero XML y conciliación de cobros.
tag: odoo, erp, remesas
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Odoo ERP remesas para España
Las remesas son una forma de pago o cobro que consiste en la emisión de un importe correspondiente a una factura de una venta o de un servicio prestado. Una remesa es un documento por el que damos la orden al banco para que gestione el cobro o pago de un conjunto de compraventas realizadas.

Cada día es un método más utilizado, ya que facilita la gestión de cobros, más aún cuando emitimos muchas facturas.

Para operar con remesas es necesario enviar a la entidad bancaria un Mandato de Pago que avale que entre el cliente y nosotros existe esa relación de remesa, además del fichero pertinente que aporte los datos de la remesa.

<Image
  src="/images/posts/odoo-metodologia.png"
  alt="owl-odoo"
  width={1280}
  height={720}
  priority
  className="next-image"
/>

Para ello hemos desarrollado un módulo en Odoo 16 que nos permite la creación de los dos documentos.

**Mandato de Pago**: Partiendo de datos del cliente como entidad y cuenta bancaria y datos fiscales se genera el modelo de mandato SEPA que podremos enviar al banco.

**Remesa SEPA**: Una vez emitido un mandato podremos remesar una o varias facturas desde un formulario que permite aplicar varios filtros de búsqueda por:
- Fecha de vencimiento
- Tipo de efecto
- Cliente

Luego se genera un fichero en formato XML que se envía al banco para procesar la remesa.
Esto no se queda ahí: el módulo marca las facturas como en proceso de pago y una vez se aprueben los pagos los registra y marca las facturas como pagadas.

Y, por si fuera poco, permite que, una vez rechazada alguna factura dentro de una remesa podamos desconciliarla con un solo clic revirtiendo el asiento de pago y dejando la factura como no pagada y lista para incluir en próximas remesas.

# Mandatos de pago SEPA
Desde el módulo de Facturación, en el menú Clientes, en el menú clientes se accede a los mandatos de pagos.

<Image
  src="/images/posts/mandato-sepa-spain-1.png"
  alt="owl-odoo"
  width={620}
  height={210}
  priority
  className="next-image"
/>

- Contacto: cliente al que se le asigna el mandato de pago.
- Cuenta: cuenta bancaria del cliente (se carga por defecto desde el cliente).
- Banco: se carga por defecto desde el cliente.
- Tipo adeudado: se escoge el tipo de mandato.
- Tipo de contrato: se selecciona el tipo de contrato.
- Identificador: número que genera Odoo.
- Fecha: fecha en que se crea el mandato.
- Fecha de firma: fecha de firma del mandato.
- Documento firmado: desde el botón "Suba su archivo" se puede adjuntar el documento firmado.

Una vez rellenados los datos, el mandato se activa desde el botón Activar; se puede imprimir desde el botón Acción y enviar desde el botón Enviar mandato.

Mientras esté activo será usado para las remesas, una vez que se deje de usar se puede anular o cancelar.

# Configuración de remesas SEPA
En los diarios tenemos que configurar las siguientes cuentas:

<Image
  src="/images/posts/mandato-sepa-spain-2.png"
  alt="owl-odoo"
  width={659}
  height={260}
  priority
  className="next-image"
/>

- Cuenta de pago de gastos: cuenta que se usará.
- Cuenta de impago de gastos: pasos y asientos contables.
- Cuenta de gastos para descuentos.
- Cuenta de deudas por efectos descontados.

# Cuenta Bancaria
<Image
  src="/images/posts/mandato-sepa-spain-3.png"
  alt="owl-odoo"
  width={658}
  height={274}
  priority
  className="next-image"
/>

---

# Cuenta Bancaria
<Image
  src="/images/posts/mandato-sepa-spain-4.png"
  alt="owl-odoo"
  width={667}
  height={350}
  priority
  className="next-image"
/>
