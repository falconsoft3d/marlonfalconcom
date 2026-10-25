---
title: ▷ Importar BOQ en Odoo ERP BIM Construcción
date: 2023/1/4
description: ▷ Cómo importar un archivo BOQ de cantidades en Odoo ERP BIM 2.0 para generar automáticamente el presupuesto de una obra a partir de los APU.
tag: odoo, bim, construccion, boq
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Importar BOQ en Odoo ERP BIM Construcción
Un archivo BOQ, por sus siglas en inglés (**Bill of Quantities**), también conocido como lista de códigos y cantidades, es un archivo esencial en la industria de la construcción. Se utiliza para codificar y cuantificar los materiales en un proyecto de construcción.

Los archivos BOQ se utilizan en aplicaciones como:
1. AutoCAD
2. Revit
3. ArchiCAD
4. Navisworks
5. Tekla Structures
6. BIM 2.0 en Odoo ERP.

Los archivos **BOQ** son un lenguaje común entre sistemas para intercambiar información de listados de materiales con cantidades.

BIM 2.0 es una **vertical de construcción para Odoo ERP**. En este post vamos a ver cómo importar un archivo BOQ en **Odoo ERP BIM Construcción**.

## Pasos para la importación de un archivo BOQ en Odoo ERP BIM Construcción
En Odoo BIM tenemos un importador de BOQ que permite crear plantillas reutilizables para importar archivos en Odoo ERP BIM Construcción. Para ello es necesario tener cargados los APU (**análisis de precios unitarios**), ya que el importador utiliza el código BIM del APU para relacionar los conceptos del BOQ con los APUs.


1. Creamos la plantilla de configuración del archivo BOQ, para indicarle a Odoo cuál es la columna de código y cuál la de cantidad. Así se enlazará con los APU y, usando una plantilla de obra, se rellenarán los valores.

<Image
  src="/images/posts/boq-1.png"
  alt="odoo9"
  width={1511}
  height={353}
  priority
  className="next-image"
/>

2. Desde el menú de integraciones de BIM 2.0 seleccionamos la opción de crear presupuesto.

<Image
  src="/images/posts/boq-2.png"
  alt="odoo9"
  width={1507}
  height={420}
  priority
  className="next-image"
/>

3. Cargamos el fichero según la plantilla y pulsamos crear presupuesto. Ten en cuenta que el fichero debe estar en formato **.xlsx** o **.csv**.

<Image
  src="/images/posts/boq-3.png"
  alt="odoo9"
  width={1498}
  height={844}
  priority
  className="next-image"
/>

Como resultado, Odoo genera el presupuesto de la obra con cada partida enlazada a su APU y con las cantidades del archivo BOQ, listo para revisarlo y ajustarlo.
