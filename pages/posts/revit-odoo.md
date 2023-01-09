---
title: ▷ Importar desde Revit a Odoo
date: 2023/1/9
description: ▷ Importar desde Revit a Odoo
tag: revit, odoo
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Importar desde Revit a Odoo

**Odoo ERP** con el módulo **BIM 2.0** permite importar desde **Revit** a **Odoo** , el listado de materiales. Odoo es un ERP open source que permite gestionar la información de una empresa, desde la facturación, compras, ventas, inventarios, contabilidad, etc. 

Revit es un software de modelado 3D paramétrico, que permite crear modelos BIM (Building Information Modeling) para la construcción.

para importar los materiales desde **Revit** a **Odoo** seguiremos los siguientes pasos:

1- Creamos nuestro modelo BIM en Revit.
<Image
  src="/images/posts/odoo-revit-a1.png"
  alt="owl-odoo"
  width={1142}
  height={590}
  priority
  className="next-image"
/>


2- Vamos al menu de tabla de planificación y seleccionamos la opción de exportar a excel.
<Image
  src="/images/posts/odoo-revit-a2.png"
  alt="owl-odoo"
  width={1142}
  height={590}
  priority
  className="next-image"
/>

3- Exportamos el codigo y las cantidades de los materiales.
<Image
  src="/images/posts/odoo-revit-a3.png"
  alt="owl-odoo"
  width={1142}
  height={590}
  priority
  className="next-image"
/>

4- En el módulo de BIM 2.0 en Odoo, seleccionamos la opción de importar desde excel.
<Image
  src="/images/posts/odoo-revit-a4.png"
  alt="owl-odoo"
  width={1142}
  height={590}
  priority
  className="next-image"
/>

5- Nos crea un nuevo presupuesto con los materiales importados.
<Image
  src="/images/posts/odoo-revit-a5.png"
  alt="owl-odoo"
  width={1142}
  height={590}
  priority
  className="next-image"
/>