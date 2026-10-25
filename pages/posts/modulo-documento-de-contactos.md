---
title: ▷ Módulo de documento de contactos
date: 2023/1/11
description: ▷ Módulo de Odoo para gestionar los documentos de los contactos con plantillas y bloquear ventas, compras o facturas si falta documentación.
tag: odoo, desarrollo, marlon, modulos
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Módulo de documento de contactos

El módulo de documentos desarrollado por Marlon Falcón Hernández te permite gestionar los documentos de tus contactos, por ejemplo: cédula, pasaporte, licencia de conducir, etc.

<Image
  src="/images/posts/doc-01.png"
  alt="documentos-odoo"
  width={1701}
  height={882}
  priority
  className="next-image"
/>

Este módulo permite definir, mediante una plantilla, qué documentos se pueden cargar. Además, permite bloquear procesos en el sistema: por ejemplo, si un contacto no tiene la cédula cargada, no se le podrá hacer una factura.
El módulo permite bloquear los procesos de:
- Ventas
- Compras
- Facturas de venta
- Facturas de compra

<Image
  src="/images/posts/doc-02.png"
  alt="documentos-odoo"
  width={1701}
  height={882}
  priority
  className="next-image"
/>

Los documentos se pueden categorizar por tipo de documento, por ejemplo: contrato o venta.

<Image
  src="/images/posts/doc-03.png"
  alt="documentos-odoo"
  width={1701}
  height={882}
  priority
  className="next-image"
/>

Desde el contacto podemos ver los documentos que tiene cargados y, además, mediante una acción podemos asignarle una plantilla de documentos.

<Image
  src="/images/posts/doc-04.png"
  alt="documentos-odoo"
  width={1701}
  height={882}
  priority
  className="next-image"
/>