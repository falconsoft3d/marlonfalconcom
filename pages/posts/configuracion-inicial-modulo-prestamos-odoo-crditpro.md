---
title: ▷ Configuración inicial del módulo de préstamos CreditPro para Odoo ERP
date: 2023/01/18
description: ▷ Parámetros que hay que configurar en CreditPro, el módulo de préstamos para Odoo - usuarios, productos, contactos y el propio módulo.
tag: odoo, erp, credito, credipro
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Configuración inicial del módulo de préstamos CreditPro para Odoo ERP

Para parametrizar el módulo de crédito de **Odoo** llamado **CreditPro**, es necesario establecer ciertos parámetros como los siguientes:

1. Límites de crédito: establecer los límites máximos de crédito que se permitirán a los clientes.
2. Tasa de interés: establecer la tasa de interés aplicable a los préstamos.
3. Plazos de pago: establecer los plazos de pago disponibles para los clientes, ya sea en meses o años.
4. Requisitos de aprobación: establecer los requisitos que los clientes deben cumplir para ser aprobados para un préstamo.
5. Comisiones: establecer las comisiones que se aplicarán por servicios como pagos tardíos o cancelaciones anticipadas.
6. Protección de datos: establecer medidas para garantizar la seguridad y privacidad de los datos personales de los clientes.
7. Sistemas de información: establecer los sistemas de información necesarios para llevar a cabo el proceso de solicitud, aprobación y desembolso de los préstamos.
8. Proceso de cumplimiento: establecer los procesos necesarios para cumplir con las regulaciones y leyes aplicables al otorgamiento de créditos.

Es importante tener en cuenta que estos parámetros pueden variar dependiendo del país o región donde se esté ofreciendo el servicio de crédito. Además, es recomendable revisar y actualizar periódicamente estos parámetros para asegurar que cumplen con las regulaciones y leyes en vigor y para adaptarse a las necesidades del mercado.

Nuestro módulo de gestión de créditos **CreditPro** requiere varios parámetros configurables en diferentes menús de Odoo: a nivel de usuarios, productos, contactos o del propio modelo de créditos.

## Parámetros a nivel de usuario

Permisos que van desde aprobar créditos o reprogramar cuotas hasta qué documentos podremos ver.

<Image
  src="/images/posts/creditpro-odoo-m-01.png"
  alt="credito"
  width={1522}
  height={554}
  priority
  className="next-image"
/>

Además, desde las preferencias del usuario definiremos el almacén, el diario de pago y la cuenta analítica que usará en el sistema.

<Image
  src="/images/posts/creditpro-odoo-m-02.png"
  alt="credito"
  width={1548}
  height={384}
  priority
  className="next-image"
/>

## Parámetros a nivel de productos

Desde la categoría de los productos se pueden definir el tipo de crédito, la categoría de crédito, el interés y el porcentaje máximo a financiar. Esto permite aplicar diferentes porcentajes de interés o financiación a distintas gamas de productos.


<Image
  src="/images/posts/creditpro-odoo-m-03.png"
  alt="credito"
  width={1566}
  height={650}
  priority
  className="next-image"
/>

## Parámetros a nivel de contacto (partner)

En la ficha del contacto se definen los límites de riesgo de crédito.

<Image
  src="/images/posts/creditpro-odoo-m-04.png"
  alt="credito"
  width={1656}
  height={640}
  priority
  className="next-image"
/>


## Parámetros del propio módulo de crédito

En el menú Configuración encontramos:

- **Configuración / Tipo de crédito**: se definen el nombre y la descripción.
- **Configuración / Frecuencia**: se establecen la frecuencia y las cuotas permitidas para cada frecuencia.

<Image
  src="/images/posts/creditpro-odoo-m-05.png"
  alt="credito"
  width={1554}
  height={504}
  priority
  className="next-image"
/>

- **Configuración / Cuotas**: se definen las cuotas que se usarán.

<Image
  src="/images/posts/creditpro-odoo-m-06.png"
  alt="credito"
  width={1552}
  height={366}
  priority
  className="next-image"
/>

### Configuración general

<Image
  src="/images/posts/creditpro-odoo-m-07.png"
  alt="credito"
  width={1548}
  height={850}
  priority
  className="next-image"
/>

Desde esta vista podremos definir:

- Los parámetros para la facturación de la mora, desde el importe hasta las condiciones en que se aplicará.
- Los usuarios que aprueban créditos.
- Si la facturación de capital e interés será conjunta o separada en dos facturas.
- El flujo de automatización que se ejecutará al aprobar el crédito (desde la aprobación hasta la creación del pago del valor inicial), según se defina.


