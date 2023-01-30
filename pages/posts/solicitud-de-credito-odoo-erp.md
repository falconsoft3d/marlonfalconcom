---
title: ▷ Solicitud de crédito en Odoo ERP, módulo CreditPro
date: 2023/01/30
description: ▷ Solicitud de crédito en Odoo ERP, módulo CreditPro
tag: odoo, erp, credito
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Solicitud de crédito en Odoo ERP, módulo CreditPro
Una solicitud de crédito es una petición formal que se hace a una entidad financiera o a una institución crediticia para obtener un préstamo. En la solicitud del módulo **CreditPro** de **Odoo** **ERP** 16, el solicitante debe proporcionar información sobre su situación financiera y crediticia, como ingresos, gastos, activos y deudas existentes. La entidad financiera utilizará esta información para evaluar la capacidad del solicitante para reembolsar el préstamo y determinar si se le otorgará el crédito solicitado.

<Image
  src="/images/posts/credit-pro-portada.png"
  alt="solicitud-credito"
  width={851}
  height={315}
  priority
  className="next-image"
/>

Los documentos que se suelen requerir para una solicitud de crédito pueden variar dependiendo de la entidad financiera o institución crediticia. Sin embargo, algunos de los documentos comunes que se pueden solicitar incluyen:

* Identificación personal: Pasaporte, DNI, NIE, etc.
* Comprobante de residencia: Recibo de luz, agua, teléfono, etc.
* Informe de ingresos y gastos: Declaración de la renta, nómina, certificado de empleo, estado de cuenta bancaria, etc.
* Informe de crédito: Un informe de crédito es un historial de las deudas que ha tenido el solicitante, y puede ser utilizado por la entidad financiera para evaluar la capacidad del solicitante para reembolsar el préstamo.
* Garantías: Puede ser necesario aportar garantías para respaldar la solicitud de crédito, como propiedades o vehículos.

Es importante tener en cuenta que pueden solicitar documentos adicionales si es necesario.

En CreditPro,  nuestro módulo de gestión de créditos para Odoo 16, generamos un flujo de solicitud  de crédito a partir de las ventas, donde según los permisos del usuario solo podrá hacer una venta si cuenta con un crédito aprobado o el pago del 100% del valor de la venta.

Además este usuario solo va a llenar los datos necesarios para solicitar el crédito el cual será marcado como solicitado y enviará una notificación al encargado de aprobar los créditos para su análisis.

<Image
  src="/images/posts/solicitud-credito-1.png"
  alt="solicitud-credito"
  width={760}
  height={365}
  priority
  className="next-image"
/>

<Image
  src="/images/posts/solicitud-credito-2.png"
  alt="solicitud-credito"
  width={770}
  height={540}
  priority
  className="next-image"
/>


El encargado de solicitar el crédito junto al cliente deben llenar datos como

* Producto a vender
* Codeudor
* Frecuencia
* Cuotas
* Documentación adjunta
* Tipo de crédito
* Categoría
* % de financiación

Una vez llenos solo deberá accionar en solicitud y ya estará listo este paso, solo queda esperar a que se apruebe el crédito para seguir el proceso


