---
title: ▷ Odoo presupuesto construcción
date: 2023/1/15
description: ▷ Cómo crear presupuestos de obra por partidas con estructura de árbol en Odoo usando el módulo Odoo BIM 2.0.
tag: odoo, bim, presupuesto, construccion, odoo-construccion
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Odoo presupuesto construcción

Con el módulo **Odoo BIM 2.0** podemos generar presupuestos por partidas de obra, para ello se debe configurar el producto como partida de obra. A continuación se muestra cómo se vería un presupuesto de obra.

Ten en cuenta que en la construcción los presupuestos tienen por lo general una estructura de árbol, por lo que se debe configurar el producto como partida de obra. Un proyecto tiene varios presupuestos, y estos están compuestos por capítulos que se organizan en partidas de obra, que a su vez se desglosan en subpartidas o recursos.

<Image
  src="/images/posts/odoo-bim-presupuesto-01.png"
  alt="factura-electronica"
  width={1783}
  height={853}
  priority
  className="next-image"
/>

Los conceptos que componen el árbol de presupuesto pueden ser de tipo Partida, Capítulo, Función, Materiales, Mano de Obra, Equipos, Subcontratos, etc.

<Image
  src="/images/posts/odoo-bim-presupuesto-02.png"
  alt="factura-electronica"
  width={1778}
  height={844}
  priority
  className="next-image"
/>

Los presupuestos de obras de construcción se muestran en 4 vistas diferentes: Presupuesto, Ejecución, Programación y Certificación.

<Image
  src="/images/posts/odoo-bim-presupuesto-03.png"
  alt="factura-electronica"
  width={1774}
  height={850}
  priority
  className="next-image"
/>

Desde el árbol de presupuesto podemos crear su estructura. Para ello se debe seleccionar el concepto, hacer clic con el botón derecho y seleccionar la opción **Crear Hijo**.

<Image
  src="/images/posts/odoo-bim-presupuesto-04.png"
  alt="factura-electronica"
  width={1783}
  height={853}
  priority
  className="next-image"
/>