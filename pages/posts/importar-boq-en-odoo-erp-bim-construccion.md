---
title: ▷ Importar BOQ en Odoo ERP BIM Construcción
date: 2023/1/4
description: ▷ Importar BOQ en Odoo ERP BIM Construcción
tag: odoo, bim, construccion, boq
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Importar BOQ en Odoo ERP BIM Construcción
Un archivo BOQ, por sus siglas en Ingles (**Bill Of Quantity**),también conocido como lista de códigos y cantidades, es un archivo esencial en la industria de la construcción. Se utiliza para codificar y cuantificar los materiales en un proyecto de construcción.

Los archivos BOQ se utilizan en aplicaciones como:
1. AutoCAD
2. Revit
3. ArchiCAD
4. Navisworks
5. Tekla Structures
6. BIM 2.0 en ODOO ERP.

Los archivos **BOQ** son un lenguaje en común entre sistemas pata intercambiar información de listados de materiales con cantidades.

BIM 2.0 es una **vertical de construcción para Odoo ERP**, en este post vamos a ver como importar un archivo BOQ en **Odoo ERP BIM Construcción**.

## Pasos para la importación de un archivo BOQ en Odoo ERP BIM Construcción.
En Odoo BIM tenemos un Importador de BOQ que permite crearte plantillas reutilizables para importar archivos en Odoo ERP BIM Construcción. Para lo cual es necario tener APUs (**Analisis de precios unitarios**) Cargadas. Ya que el importador utiliza el código BIM del APU para relacionar los conceptos del BOQ con los APUs.


1. Creamos la plantilla de configuración del archivo BOQ. Para decirle a Odoo cual es la columna de código y cual es la de cantidad. Esto enlazara con las APUs y usando una plantilla de una obra llenará los valores.

<Image
  src="/images/posts/boq-1.png"
  alt="odoo9"
  width={1511}
  height={353}
  priority
  className="next-image"
/>

2. Cargamos el fichero según la plantilla y seleccionamos crear presupuesto desde el menu de integraciones de BIM 2.0.

<Image
  src="/images/posts/boq-2.png"
  alt="odoo9"
  width={1507}
  height={420}
  priority
  className="next-image"
/>

3. Cargamos el fichero según la plantilla y seleccionamos crear presupuesto. Ten en cuenta que el fichero debe estar en formato **.xlsx** o **csv**.

<Image
  src="/images/posts/boq-3.png"
  alt="odoo9"
  width={1498}
  height={844}
  priority
  className="next-image"
/>



