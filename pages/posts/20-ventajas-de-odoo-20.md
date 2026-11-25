---
title: ▷ Las 20 ventajas de Odoo 20 - Novedades de la nueva versión explicadas para empresas
date: 2026/11/25
description: ▷ Las 20 ventajas de Odoo 20 - conciliación bancaria automática, agentes de IA, servidor MCP, localización española renovada (SII, Veri*Factu, modelos AEAT), inventario, fabricación, TPV y qué revisar antes de migrar.
tag: odoo, odoo-20, novedades-odoo, erp, inteligencia-artificial, verifactu
author: Marlon Falcon Hernandez
---

# ▷ Las 20 ventajas de Odoo 20

**Odoo 20** se presentó el **24 de septiembre de 2026** en la keynote de Odoo Experience 2026 en Bruselas. Es una versión de **consolidación**. El titular es la **IA con agentes**, pero las mejoras que más se notan en el día a día están en contabilidad, inventario, fabricación y en la localización española.

Para este artículo he cruzado tres fuentes: las [notas oficiales de la versión](https://www.odoo.com/odoo-20-release-notes), la [documentación de Odoo 20.0](https://www.odoo.com/documentation/20.0/) y una **comparación del código fuente de Odoo 19 y Odoo 20**. Según ese recuento, Odoo Community pasa de 598 a 648 módulos y Enterprise de 720 a 904. Muchos módulos que antes se instalaban por separado ahora vienen integrados.

Una advertencia antes de empezar: Odoo **no ha publicado ninguna cifra oficial de rendimiento** para la versión 20. Si lees «un 30 % más rápido», no tiene respaldo oficial. Aquí solo vas a encontrar funciones concretas que se pueden comprobar.

## Finanzas y contabilidad

### 1. Conciliación bancaria automática con reglas y tolerancias

La conciliación es el trabajo más repetitivo de cualquier departamento financiero, y en Odoo 20 da un salto. Llegan:

- **Reglas de casación** (*Matching Rules*) para fijar tolerancias y el orden de casación.
- **Un botón para conciliar automáticamente** (*Run Auto Reconciliation*) cuando tú decides.
- **Agrupación de transacciones** del extracto.
- **Distribución analítica** en los desajustes.
- **Un informe resumen de conciliación** por periodo.

En el código aparece una tolerancia de pago en los modelos de conciliación: pequeñas diferencias, como comisiones o redondeos, ya no te obligan a tocar cada movimiento a mano.

### 2. Banco coherente y estados de pago que dicen la verdad

Odoo 20 introduce la **coherencia bancaria** (*Bank consistency*): todo asiento que afecte a una cuenta de banco tiene que salir de una transacción bancaria. Se acabaron los descuadres por asientos manuales.

Además, los estados de pago se renombran para que signifiquen lo que dicen: lo que era «En proceso» pasa a **«Pagado»** y lo que era «Pagado» pasa a **«Conciliado»**. El asistente de pago también **avisa de pagos pendientes para evitar pagar dos veces** la misma factura.

### 3. Predicción de líneas en las facturas de proveedor

Con la **predicción de líneas** (*Bill line prediction*), Odoo sugiere el producto, la cuenta, el impuesto, la analítica e incluso el vehículo de cada línea a partir del historial y de la descripción. Para una empresa que registra cientos de facturas de compra al mes, es tiempo que se recupera cada semana.

### 4. Pagar facturas desde Odoo y SEPA por método de pago

Con **«Pagar facturas desde Odoo»** (*Pay bills from Odoo*) puedes pagar facturas sueltas o en lote con **una sola firma** mediante una nueva interfaz de iniciación de pagos (PISP). La versión del fichero SEPA (PAIN) se configura ahora **por método de pago** y no por diario. Ojo: Odoo no ha detallado qué bancos cubre la iniciación de pagos, así que comprueba el tuyo antes de contar con ello.

### 5. Gastos que llegan a contabilidad como facturas borrador

Los gastos de empleados aprobados **generan facturas de proveedor en borrador**, y el contable los revisa en el mismo circuito que el resto de compras. Además, puedes fijar **límites de gasto por puesto de trabajo** y tienes un informe consolidado de gastos.

### 6. Un plan contable más sencillo y una revisión de asientos para asesorías

Los grupos de cuentas desaparecen y se sustituyen por **cuentas padre**, y los códigos de cuenta pasan a ser opcionales. En el código aparece además un **estado de revisión de asientos** con cinco valores: sin revisión, por revisar, revisado, supervisado y anomalía. Es muy útil para asesorías y despachos que revisan la contabilidad de sus clientes.

## Localización española

Las notas oficiales de Odoo 20 **no tienen un apartado para España**. Sin embargo, el código fuente muestra una **reorganización profunda de los módulos españoles**. Estas son las ventajas que se ven en el código.

### 7. Una sola clasificación de factura para SII, Veri\*Factu, TicketBAI y Facturae

El **tipo de factura** (F1, F2, F4, F5, F6, LC y las rectificativas R1 a R5), el **código de régimen de IVA** y el **régimen especial de la empresa** viven ahora en el módulo base `l10n_es`. Este último cubre el criterio de caja, el recargo de equivalencia, el REAGYP y el régimen simplificado.

SII, Veri\*Factu, TicketBAI y Facturae usan esos mismos datos. Clasificas la factura una vez y vale para todos los sistemas, en lugar de repetirlo en cada módulo.

### 8. Veri\*Factu y SII más robustos

- **Veri\*Factu** estrena un modelo de **emisor** con su propia secuencia de cadena, lotes y obligado a emitir, usa el módulo de certificados y muestra un **panel en el diario**. También bloquea la renumeración de facturas en producción para no romper la cadena de registros.
- **SII** deja el sistema genérico de facturación electrónica y pasa a un **documento SII propio**, que guarda el estado, el JSON, el XML y la respuesta de la AEAT, con un **contador de pendientes** en el diario. Reenviar los errores es mucho más fácil.

### 9. Modelos AEAT con asistentes de presentación

Los modelos **111, 115, 130, 303, 347, 349 y 390** pasan de ser asistentes de exportación a **asistentes de presentación** integrados en el flujo de declaraciones. El **303 admite la autoliquidación rectificativa** y el **349 admite periodo trimestral**.

### 10. Intrastat español, el TPV en los libros de IVA y Canarias en la misma plantilla

Llegan módulos nuevos para España:

- **Intrastat español** nativo.
- **Libro registro de IVA del TPV**: las ventas del punto de venta entran en los libros de IVA.
- **Tipo de documento de identidad en la tienda online**: pasaporte, NIE o certificado de residencia, para facturar bien a clientes extranjeros.

Además, el plan contable de **Canarias se integra en la plantilla común** y activa los impuestos canarios automáticamente según la empresa. Es ideal para grupos con sociedades peninsulares y canarias.

## Inteligencia artificial

### 11. Agentes de IA que trabajan, no solo responden

En Odoo 20 los agentes de IA:

- **Crean y actualizan registros**, incluso a partir de un PDF con instrucciones.
- Se lanzan desde **acciones automatizadas y programadas**.
- Aceptan **voz y archivos**.
- Muestran en directo lo que están haciendo.

En el código se ven sesiones persistentes con **confirmación antes de ejecutar herramientas**, búsqueda web, un modo «pensar más» y **delegación en otros agentes**. Además, las finanzas tienen un asistente (*AI-powered financial insights*) que responde preguntas usando solo la contabilidad de tu empresa.

### 12. Servidor MCP: conecta Odoo con Claude Code, Codex y otros agentes

Odoo 20 incorpora un **servidor MCP** (*Connect Odoo to anything*). Los agentes externos, como Claude Code, Codex o Antigravity, pueden leer y modificar datos de Odoo a través de las acciones de servidor que tú publicas como herramientas. La autenticación recomendada es **OAuth** y el administrador aprueba cada cliente ([documentación del servidor MCP](https://www.odoo.com/documentation/20.0/applications/productivity/ai/mcp_server.html)).

Si vas a pedir automatizaciones a una IA, te ayudará mi guía sobre [la forma correcta de hacer un prompt para Odoo](/posts/la-forma-correcta-de-hacer-un-prompt-para-odoo).

### 13. Web y eCommerce preparados para Google y para la IA

- Los **datos estructurados se añaden por defecto** para conseguir resultados enriquecidos en Google.
- Puedes generar un **llms.txt** para que los modelos de lenguaje entiendan tu web.
- Las imágenes adaptativas (**srcset**) mejoran la carga en el móvil.
- El **asistente web con IA** crea páginas, formularios y menús.
- La tienda online suma **devoluciones desde el portal**, fecha de entrega preferida y **solicitudes de desistimiento**, en línea con el derecho europeo de desistimiento.
- La lista de deseos y el comparador de productos vienen integrados de serie.

## Operaciones

### 14. Mínimos y máximos de stock sugeridos según la demanda

Las reglas de reabastecimiento pueden **sugerir el mínimo y el máximo a partir del historial de demanda**, la cobertura y la frecuencia de pedido. Se acabó calcularlos en una hoja de cálculo aparte.

### 15. Un inventario más completo de serie

- Las **transferencias por lotes, olas y clústeres** pasan a formar parte de Inventario.
- Hay **flujos entre empresas del grupo** para reabastecer una empresa desde otra.
- Puedes consultar el **inventario a una fecha pasada** y sacar un **informe de antigüedad de stock**.
- Inventario genera el **documento de transporte CMR** prerrellenado para el transporte por carretera.
- **Devoluciones simplificadas**: desaparece el asistente de devolución.

### 16. Fabricación continua y planificación visual

Fabricación es la app con más cambios:

- **Producción continua**: las operaciones posteriores arrancan con cantidades parciales.
- **División de órdenes de fabricación** que ya están en curso.
- Un único botón **«Producir»**.
- **Kanban y Gantt de órdenes de trabajo** con arrastrar y soltar.
- **Coste provisional y coste real** en cada orden de fabricación.

Calidad calcula además un **índice de calidad por proveedor**, que se ve en Compras.

### 17. TPV, Ventas y tienda online sin instalar Inventario

Para comercios y restaurantes pequeños, este cambio importa mucho: el **TPV puede funcionar con un inventario simplificado**, con una cantidad disponible por producto y sin albaranes. Ventas y la tienda online también pueden enviar sin la app de Inventario.

El TPV también gana:

- **Varias impresoras y cobro en varias divisas**.
- **Cargos por servicio**.
- **Pedido por QR en mesa** con pago al final.
- Productos **pospuestos** temporalmente en la cocina.
- Nuevos conectores de pago y efectivo habituales en España, como **SumUp, Mollie, Cashdro y Cashmatic**.

### 18. Servicio de campo integrado en Planificación

La app de **Servicio de campo** (*Field Service*) se integra en **Planificación**. Las intervenciones pasan a ser turnos y ganas:

- **Mapa de técnicos en vivo**.
- **Rutas ordenadas u optimizadas**.
- **Desplazamientos facturables** por distancia o con una tarifa fija.
- Un **formulario web** para que los clientes pidan intervenciones.
- Control de los **equipos del cliente bajo contrato**.

Si empiezas de cero, todo son ventajas. Si migras, lee el apartado de más abajo.

## Ventas, servicios y plataforma

### 19. Ventas, CRM y marketing más flexibles

- **Márgenes editables** que recalculan el precio.
- **Comisiones sobre lo cobrado** y comisiones para los managers.
- Plantillas de secciones con cantidades, numeración de líneas y precios por periodo.
- En CRM, **reparto de leads en rotación** y generación de leads con **Dun & Bradstreet**.
- En Marketing Automation, un **constructor visual de flujos** con arrastrar y soltar y webhooks.

### 20. Trabajo sin conexión y un móvil más cómodo

El **modo sin conexión** permite crear, editar, archivar y borrar registros sin internet: en el almacén, en la obra o en ruta. En el móvil hay:

- Una **paleta de comandos** que se abre deslizando hacia abajo.
- **Hojas inferiores** para las acciones.
- La opción de **compartir un archivo desde el teléfono** para crear una factura, un gasto o un lead.

Además, Odoo 20 trae un **motor de PDF propio** (Paper Muncher) como alternativa a wkhtmltopdf.

## Lo que debes revisar antes de migrar a Odoo 20

Toda versión nueva tiene un precio de migración. Estos son los puntos que reviso con mis clientes:

| Área | Qué cambia | Qué hacer |
| --- | --- | --- |
| IA | Todas las funciones de IA **consumen créditos IAP**. En el código desaparecen las claves propias de OpenAI y Google, y con la app de IA instalada, Odoo empuja del plan Standard al Custom | Presupuestar el consumo: Odoo no ha publicado el precio por petición |
| Servicio de campo | La app se integra en Planificación (los módulos `industry_fsm` pasan a `planning_field_service`) | Volver a formar a los técnicos y reescribir los desarrollos a medida |
| Nóminas | Desaparecen los apuntes de trabajo y la integración de Planificación con Nóminas | Revisar las estructuras salariales y la conexión con la gestoría |
| Contabilidad | Cuentas padre, modelos de amortización, nuevos estados de pago y coherencia bancaria | Revisar informes, filtros y el procedimiento de cierre |
| Permisos y chatter | Las reglas de registro se sustituyen por un nuevo modelo de accesos y el seguimiento de cambios se genera al vuelo | Auditar los módulos a medida |
| Proyecto | Desaparece el informe de rentabilidad del panel | Usar los informes de presupuesto y margen |
| Servidor propio | **Python 3.12 a 3.14 y PostgreSQL 16** (en Odoo 19 bastaban Python 3.10 y PostgreSQL 13) | Actualizar el sistema operativo y la base de datos |
| Validación de NIF por VIES | La consulta online pasa a ser opcional | Activarla de nuevo después de migrar |
| Precios | Varios partners hablan de una subida del plan Custom para clientes nuevos y de nuevos usuarios «Light» más baratos | Confirmarlo en odoo.com: no hay cifras oficiales coincidentes |

Mi recomendación: si **empiezas una implantación nueva, hazla directamente en Odoo 20**. Si **migras desde Odoo 19 o anteriores**, haz antes una prueba sobre una copia de la base de datos y revisa los desarrollos a medida uno por uno.

## Odoo 20, Veri\*Factu y la factura electrónica en España

- **Veri\*Factu ya estaba en Odoo 19.** La versión 20 lo refuerza por dentro, pero el flujo para el usuario es el mismo: certificado, envío a la AEAT, reintentos automáticos y código QR en facturas y tickets ([documentación de España en Odoo 20.0](https://www.odoo.com/documentation/20.0/applications/finance/fiscal_localizations/spain.html)).
- **Plazos de Veri\*Factu:** la norma vigente fija el **1 de enero de 2027** para quienes tributan en el Impuesto sobre Sociedades y el **1 de julio de 2027** para el resto. El 5 de octubre de 2026, Hacienda anunció su intención de aplazarlo **hasta octubre de 2028** ([nota de Hacienda](https://www.hacienda.gob.es/sgt/gabsehacienda/nota-informativa-verifactu.pdf)). Hasta que el aplazamiento se publique en el BOE, las fechas de 2027 siguen vigentes, así que **compruébalo en el BOE antes de decidir**.
- **Factura electrónica entre empresas (B2B):** la [Orden HAC/1028/2026](https://sede.agenciatributaria.gob.es/Sede/iva/novedades-iva/novedades-normativa-2026/orden-hac-1028-2026-2-electronica.html) fija el **6 de octubre de 2027** para empresas que facturan más de 8 millones de euros y el **6 de octubre de 2028** para el resto. Odoo todavía **no ha anunciado** cómo soportará el sistema español, aunque en la versión 20 sí trae módulos para Francia y Polonia. Si facturas más de 8 millones, pide a tu partner un compromiso por escrito.

## Preguntas frecuentes

**¿Cuándo salió Odoo 20?**
Se presentó el 24 de septiembre de 2026 en la keynote de Odoo Experience 2026, en Bruselas.

**¿Odoo 20 es más rápido que Odoo 19?**
Odoo no ha publicado cifras. Solo dice que algunas tareas son más rápidas, como la contabilización con modelos de conciliación, la sincronización del calendario o la reserva de citas. Desconfía de los porcentajes que circulan por internet.

**¿La IA de Odoo 20 está en Community?**
No. Los módulos de IA son de Enterprise y todas las funciones de IA consumen créditos IAP.

**¿Odoo 20 cumple con Veri\*Factu?**
Sí, igual que Odoo 19, y con una arquitectura interna más robusta. Revisa la configuración del certificado y del entorno de producción antes de la fecha que te corresponda.

**¿Merece la pena migrar ya?**
Para una implantación nueva, sí. Para una migración, depende de cuánto desarrollo a medida tengas, sobre todo en Servicio de campo, permisos, seguimiento de cambios y nóminas.

¿Quieres saber cómo te afecta Odoo 20 o planificar tu migración? [Contáctame](/contacto) y lo vemos juntos. También puedes leer las [diferencias entre Odoo Enterprise y Odoo Community](/posts/ventajas-odoo-enterprise-vs-odoo-community).
