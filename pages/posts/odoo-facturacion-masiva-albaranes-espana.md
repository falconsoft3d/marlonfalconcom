---
title: ▷ Odoo Facturación Masiva Albaranes España
date: 2023/1/3
description: ▷ Módulo Picking to invoice para Odoo - facturación masiva de albaranes entregados con filtros, agrupaciones y facturas rectificativas.
tag: fe, odoo, spain
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Odoo Facturación Masiva Albaranes España

Hoy en día es una costumbre, o más que eso, una necesidad poder emitir facturas a clientes por una agrupación de albaranes. El tradicional Presupuesto - Albarán - Factura con los mismos valores va quedando atrás.

Picking to invoice es un módulo desarrollado por nosotros, disponible para las versiones 14, 15 y 16 de Odoo, que surgió de esta necesidad. Permite, desde el módulo de Contabilidad, cargar los albaranes entregados y pendientes de facturar para realizar esta facturación masiva. Para ello se pueden realizar varios filtros como:

1. Clientes
2. Formas de pago
3. Fechas

Además, luego se pueden crear estas facturas agrupándolas, siempre dentro del mismo cliente, ya sea por:

1. Pedidos
2. Albaranes
3. Referencia
4. Dirección de entrega

Todas ellas son configurables en el partner.
También se contempla generar facturas rectificativas en los casos en que los albaranes sean negativos. De esta manera queda resuelto facturar albaranes masivamente.

# Facturación masiva (Picking to invoice)
Este módulo permite realizar facturaciones masivas cargando los albaranes realizados mediante varios filtros de selección. Además, permite realizar las facturas tanto en borrador como publicadas.

Para realizar la facturación se utiliza el menú de facturación masiva que se encuentra en el módulo Contabilidad / Clientes / Facturación masiva / Facturar albaranes. Para ello presionamos Crear.

<Image
  src="/images/posts/odoo-facturar-albaranes.png"
  alt="factura-electronica"
  width={579}
  height={230}
  priority
  className="next-image"
/>

El primer paso es usar el botón Buscar albaranes, para luego facturar los albaranes seleccionados.

- **Buscar albaranes:** al presionar este botón se ejecuta la orden de buscar todos los albaranes en estado de entregado y pendientes de facturar teniendo en cuenta los filtros seleccionados.

- **Muestras:** permite definir si se facturan o no los albaranes marcados como muestras.
- **Crear rectificativas:** si se marca esta casilla, los albaranes negativos se crearán como factura rectificativa; de lo contrario, se restan del resto de los albaranes positivos dentro de la misma factura.

Filtros:

1. Fecha: se establece un rango de fechas para ajustar el filtro.
2. Clientes: se establece un rango de números de cliente para ajustar el filtro (número de referencia del cliente).
3. Cliente: se establece el nombre del cliente a filtrar.
4. Plazo de pago: es un campo de selección múltiple donde se definen los plazos de pago que se quieran filtrar.
5. Periodicidad: es un campo de selección múltiple donde se define la periodicidad de facturación del cliente que se quiera filtrar.
6. Series: es un campo de selección múltiple donde se define la serie del cliente que se quiere filtrar.

Si no se selecciona ningún filtro se mostrarán todos los albaranes en estado de entrega y pendientes de facturar.

- Limpiar albaranes: permite limpiar la vista de la búsqueda realizada para realizar una nueva.
- Facturar: este botón permite crear de forma masiva las facturas correspondientes a los albaranes seleccionados según el método de facturación definido para el cliente.
- Imprimir: muestra un reporte de albaranes pendientes de facturación según el filtro seleccionado.


Una vez presionado el botón Facturar, se crean las facturas en estado borrador y se muestran en la esquina superior derecha. Para acceder a ellas y modificarlas solo hay que entrar en ese vínculo.

**Volver a borrador:** permite deshacer las facturas creadas en estado de borrador y volver a gestionar el filtro de albaranes.

También aparece el botón Publicar facturas que permite pasar todas las facturas a estado de publicado de forma masiva.

Las facturas publicadas que provienen de un pedido con un anticipo (entrega a cuenta) registrado toman el pago automáticamente.

Los albaranes de devolución se cargarán con valores negativos, lo que genera facturas rectificativas.
