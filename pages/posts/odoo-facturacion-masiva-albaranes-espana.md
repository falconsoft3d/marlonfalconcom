---
title: ▷ Odoo Facturación Masiva Albaranes España.
date: 2023/1/3
description: ▷ Odoo Facturación Masiva Albaranes España.
tag: fe, odoo, spain
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Odoo Facturación Masiva Albaranes España.

Hoy en día es una costumbre, o más que eso, una necesidad poder emitir facturas a clientes por una agrupación de albaranes. El tradicional Presupuesto - Albarán - Factura con los mismos valores va quedando atrás.

Picking to invoice, es un módulo dessaarrollado por nosotros que está disponible en Odoo en las versiones 14, 15, 16 y que surgió de esta necesidad, y permite desde el módulo de contabilidad llamar los albaranes entregados y pendientes de facturar para realizar esta facturación masiva. Para ello se pueden realizar varios filtros como:

1. Clientes
2. Formas de pago
3. Fechas

Además luego se puede crear estas facturas en orden de agrupamiento siempre considerando dentro del mismo cliente ya sea por:

1. Pedidos
2. Albaranes
3. Referencia
4. Dirección de entrega

Todas ellas configurables en el Partner.
También se tiene en cuenta generar facturas rectificativas en los casos que los albaranes sean negativos. De esta manera queda resuelto facturar albaranes masivamente.

# Facturación masiva (Picking to invoice)
Este módulo permite realizar facturaciones masivas cargando los albaranes realizados usando varios filtros de selección. Además permite realizar las facturas tanto en borrador como publicadas.

Para realizar la facturación se utiliza el menú de facturación masiva que se encuentra en el módulo Contabilidad / Clientes / Facturación masiva / Facturar  albaranes. Para ello presionamos Crear.

<Image
  src="/images/posts/odoo-facturar-albaranes.png"
  alt="factura-electronica"
  width={579}
  height={230}
  priority
  className="next-image"
/>

El primer paso es usar el botón Buscar albaranes, para luego facturar los albaranes seleccionados.
Buscar albaranes: Al presionar este botón se ejecuta la orden de buscar todos los albaranes en estado de entregado y pendientes de facturar teniendo en cuenta los filtros seleccionados.

Muestras: permite definir si se tomaran si se facturan los albaranes marcados como muestras o no
Crear Rectificativas: Si se marca este check los albaranes que son negativos se crearán como factura rectificativa de lo contrario se restan con el resto de los albaranes positivos dentro de la misma factura

Filtros:

1. Fecha: Se establece un rango de fecha para ajustar el filtro.
2. Clientes: Se establece un rango de número de clientes para ajustar el filtro (Número de referencia del cliente)
3. Cliente: se establece el nombre del cliente a filtrar
4. Plazo de pago: Es un campo de selección múltiple donde se definen los plazos de pagos que se quieran filtrar.
5. Periodicidad: Es un campo de selección múltiple donde se define la periodicidad de facturación del cliente que se quieran filtrar.
6. Series: Es un campo de selección múltiple donde se define la serie del cliente que se quiere filtrar.

Si no se selecciona ningún filtro se mostrarán todos los albaranes en estado de entrega y pendientes de facturar.

- Limpiar albaranes: Permite limpiar la vista de la búsqueda realizada para realizar una nueva.
- Facturar: Este botón permite crear de forma masiva las facturas correspondientes a los albaranes seleccionados según el método de facturación definido para el cliente.
- Imprimir: Muestra un reporte de albaranes pendientes de facturación según el filtro seleccionado.


Una vez presionado el botón Facturar, se crean las facturas en estado borrador mostrándose en la esquina superior derecha. Para acceder a ellas y modificarlas solo hay que entrar en ese vínculo.
Volver a borrador: Permite regresar atrás las facturas creadas en estado de borrador y volver a gestionar el filtro de albaranes.

También aparece el botón Publicar facturas que permite pasar todas las facturas a estado de publicado de forma masiva.

Las facturas publicadas que provienen de un pedido con entrada a cuenta registrada toman el pago automáticamente.

Los albaranes de devolución se cargaran con valores negativos provocando facturas rectificativas





