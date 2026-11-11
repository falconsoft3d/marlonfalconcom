---
title: ▷ OCR de facturas de proveedor en Odoo con IA - Digitaliza PDF y fotos con Claude
date: 2026/11/11
description: ▷ Digitaliza facturas de proveedor en Odoo 19 con IA - OCR de PDF y fotos con Claude, importación masiva, borrador automático y aprendizaje por proveedor.
tag: odoo, odoo-19, modulos-odoo, ocr, facturas-de-proveedor, inteligencia-artificial
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ OCR de facturas de proveedor en Odoo con IA: digitaliza PDF y fotos con Claude

Teclear a mano cada **factura de proveedor** es lento y propenso a errores: un NIF mal copiado, una fecha cambiada, un total que no cuadra o la misma factura registrada dos veces. Y cuando llegan decenas de PDF al mes, el departamento de contabilidad se convierte en un equipo de captura de datos. **AI Vendor Bill & Invoice OCR Reader** (OCR Pro) es un módulo para **Odoo 19 (Community y Enterprise)** que lee tus facturas en PDF o en foto con **Claude, la IA de Anthropic**, crea la factura en borrador con proveedor, líneas, impuestos y totales, y **aprende de cada proveedor** lo que corriges.

## ¿Para quién es este OCR de facturas para Odoo?

- **Departamentos de contabilidad y administración** que reciben muchas facturas de compra en PDF o en papel.
- **Asesorías y gestorías** que registran facturas de varios proveedores y quieren reducir el tecleo.
- **Pymes** que fotografían tickets y facturas con el móvil y necesitan pasarlos a Odoo sin errores.

Solo depende de **Facturación**, así que funciona en Odoo Community.

## Funciones principales

### Lectura de facturas con IA: PDF y fotos

Claude lee directamente el PDF (todas sus páginas) o la foto de la factura y extrae **proveedor, NIF, número, fechas, moneda, líneas, impuestos y totales**. No hay que instalar ningún motor de OCR en el servidor: admite **PDF, JPG, PNG y WebP**, y las fotos se reducen a 1600 px antes de leerlas.

### Importación masiva de facturas

Suelta un lote de PDF o fotos y cada documento se lee por separado y genera **su propia factura en borrador**. La lista de documentos digitalizados muestra el proveedor, el número, el total leído, la factura creada y el estado de cada uno: leído, hecho o con error.

<Image
  src="/images/posts/modulos-odoo/ocr_pro/documentos.png"
  alt="Lista de facturas de proveedor digitalizadas con OCR en Odoo con su estado y total leído"
  width={1600}
  height={1000}
  className="next-image"
/>

### Mira lo que leyó la IA

Cada documento muestra la página original con **un recuadro de color sobre cada campo encontrado**: proveedor, NIF, número, fechas y total, junto con las líneas leídas. Revisas de un vistazo que todo esté bien y **creas la factura con un clic**.

<Image
  src="/images/posts/modulos-odoo/ocr_pro/lectura.png"
  alt="Factura en PDF con recuadros de color sobre los campos leídos por el OCR con IA en Odoo"
  width={1600}
  height={1000}
  className="next-image"
/>

### Botón OCR en cualquier factura en borrador

¿Ya tienes la factura creada? El **botón OCR** aparece en cualquier factura de proveedor o de cliente en borrador: subes el PDF o la foto, la IA la lee y rellena la factura. El archivo original queda guardado en el **chatter** de la factura.

<Image
  src="/images/posts/modulos-odoo/ocr_pro/boton-ocr.png"
  alt="Botón OCR en una factura de proveedor en borrador de Odoo"
  width={1600}
  height={1000}
  className="next-image"
/>

### Aprende de cada proveedor

Al confirmar una factura rellenada con OCR, el módulo guarda **lo que corregiste en la cabecera** (por ejemplo, qué número es el de factura) y **el producto y los impuestos de cada concepto**. La siguiente factura de ese proveedor se lee, se corrige igual y sus líneas reciben automáticamente su producto e impuestos.

<Image
  src="/images/posts/modulos-odoo/ocr_pro/correcciones.png"
  alt="Correcciones aprendidas por proveedor en el OCR de facturas de Odoo"
  width={1600}
  height={1000}
  className="next-image"
/>

### Proveedores encontrados o creados automáticamente

El proveedor se busca por **NIF** (con o sin el prefijo del país) y, si no aparece, por nombre, ignorando puntos y espacios: «S.L.» y «SL» son lo mismo. Si es nuevo, se crea con su dirección.

### Impuestos correctos en cada línea

Se aplica el impuesto de compra (o de venta) con el porcentaje leído en la factura, o los **impuestos aprendidos para ese concepto**.

### Sin facturas duplicadas

El módulo detecta cuando **el mismo archivo se importa dos veces**, para que ninguna factura se contabilice por partida doble.

## Beneficios para tu contabilidad

- **Menos tecleo**: la IA rellena cabecera, líneas, impuestos y totales.
- **Menos errores**: ves sobre el documento lo que se leyó y las correcciones se aplican solas en las siguientes facturas.
- **Cada vez más preciso**: cuantas más facturas confirmas de un proveedor, mejor se completan las siguientes.
- **Trazabilidad**: el PDF o la foto original queda en el chatter de cada factura.

## Preguntas frecuentes

**¿Qué IA usa el OCR de facturas?**
Claude, de Anthropic. Configuras tu clave API en Ajustes o se usa la variable ANTHROPIC_API_KEY del servidor.

**¿Necesito instalar un motor de OCR en el servidor?**
No. Claude lee el PDF directamente, todas sus páginas, y también las fotos.

**¿Qué formatos de archivo admite?**
PDF, JPG, PNG y WebP.

**¿Sirve también para facturas de cliente?**
Sí. El botón OCR funciona en cualquier factura de proveedor o de cliente en borrador.

**¿Funciona en Odoo Community?**
Sí, solo depende de Facturación. Está disponible para Odoo 19 en inglés y español.

## Descarga el módulo

Puedes ver la ficha completa, las capturas y el precio de **AI Vendor Bill & Invoice OCR Reader** en la [tienda de módulos Odoo](/tienda/odoo-module/19.0/ocr_pro). Si necesitas adaptarlo a tu flujo contable o a tus proveedores, [contáctame](/contacto) y lo vemos juntos.
