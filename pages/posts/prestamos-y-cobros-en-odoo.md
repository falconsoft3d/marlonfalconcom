---
title: ▷ Préstamos y cobros en Odoo - Cuadro de amortización, mora y cartera de créditos
date: 2026/11/11
description: ▷ Gestiona préstamos en Odoo 19 - amortización francesa o alemana, cobros con mora, aportes a capital, estado de cuenta en PDF e informe de la cartera.
tag: odoo, odoo-19, modulos-odoo, prestamos, cobros, amortizacion
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Préstamos y cobros en Odoo: cuadro de amortización, mora y cartera

Prestar dinero a clientes, socios o empleados y controlarlo en una hoja de cálculo funciona hasta que llega el primer retraso: hay que calcular la mora a mano, decidir qué parte del pago va a interés y cuál a capital, y rehacer el cuadro cada vez que alguien adelanta dinero. **Falcon Credit (Loans & Collections Management MFH)** es un módulo para **Odoo 19 (Community y Enterprise)** que gestiona **préstamos a tus contactos** dentro del ERP: **cuadro de amortización francés o alemán**, cobros con mora, aportes a capital, modificación de cuotas, **estado de cuenta en PDF** e **informe de la cartera**.

## ¿Para quién es este módulo de préstamos en Odoo?

- **Financieras, cooperativas y casas de empeño** que conceden préstamos y necesitan un control claro de cuotas y morosidad.
- **Empresas que financian a sus clientes** o prestan dinero a socios, distribuidores o empleados.
- **Negocios que todavía calculan cuotas en Excel** y quieren centralizar préstamos, cobros y cartera en Odoo.

Solo depende de **Contactos** y **Conversaciones**, ambos incluidos en Odoo Community.

## Funciones principales

### Cuadro de amortización francés o alemán

Elige el **sistema francés (cuota fija)** o el **sistema alemán (capital constante y cuota decreciente)**, con una periodicidad de pago que va de **semanal a anual**. El interés se calcula con la tasa nominal anual dividida entre los pagos del año, sobre el capital pendiente de cada periodo, y la última cuota absorbe el redondeo.

### Previsualiza el préstamo antes de activarlo

Antes de dar el préstamo por bueno ves **la cuota, el interés y cada fila del cuadro de amortización**. Así compruebas las condiciones con el cliente sin generar nada definitivo.

<Image
  src="/images/posts/modulos-odoo/falcon_credit/preview.png"
  alt="Previsualización del cuadro de amortización de un préstamo en Odoo antes de activarlo"
  width={1600}
  height={950}
  className="next-image"
/>

### Préstamos con su estado de un vistazo

La lista de préstamos muestra **capital, tasa, cuotas pagadas, saldo pendiente, importe vencido en rojo y próxima cuota**. En la ficha de cada préstamo tienes tarjetas de resumen, las cuotas con su estado y todos los cobros registrados en el chatter.

<Image
  src="/images/posts/modulos-odoo/falcon_credit/loan.png"
  alt="Ficha de un préstamo en Odoo con tarjetas de resumen, cuotas y estado de cada una"
  width={1600}
  height={950}
  className="next-image"
/>

### Cobros aplicados en orden: mora, interés y capital

Al registrar un cobro, Odoo te muestra **lo que se debe hoy con su mora**. El pago se aplica cuota a cuota y en orden: **primero la mora, luego el interés y después el capital**. Si el cliente paga de más, el excedente adelanta el pago de las cuotas siguientes; si paga menos, se aplica igualmente en ese orden.

<Image
  src="/images/posts/modulos-odoo/falcon_credit/payment.png"
  alt="Registro de un cobro de préstamo en Odoo con mora, interés y capital pendientes"
  width={1600}
  height={950}
  className="next-image"
/>

### Mora automática con días de gracia

Cuando una cuota se paga con más días de retraso que los **días de gracia**, se cobra un **porcentaje de la cuota como mora**, una sola vez. Si quieres tener un gesto con el cliente, puedes **condonar la mora** en el mismo cobro.

### Aportes a capital: menos cuota o menos plazo

Un **aporte a capital** recalcula las cuotas pendientes de cobro y te deja elegir: **reducir el importe de la cuota o reducir el número de cuotas**.

### Modificar cuotas y reestructurar el préstamo

Con **Modificar cuotas** fijas otro plazo, otra cuota, otra tasa o un nuevo primer vencimiento para las cuotas que aún no se han cobrado. Es la forma rápida de **reestructurar un préstamo** sin crear uno nuevo.

### Anular cobros

Si te equivocaste al registrar un pago, **el último cobro se puede anular** y sus cuotas vuelven a quedar pendientes. Cada cobro muestra su desglose de capital, interés y mora.

### Estado de cuenta en PDF para el cliente

Genera un **estado de cuenta del préstamo en PDF** con el resumen, todas las cuotas y todos los cobros, listo para enviar al cliente.

### Informe de la cartera de préstamos y morosidad

El panel de la cartera reúne **total prestado, capital pendiente, interés y mora cobrados, importe vencido, morosidad, lo cobrado este mes y lo previsto en los próximos 30 días**, además de los **cobros previstos para 12 meses**, el detalle por contacto y las cuotas vencidas. Todas las cuotas de la cartera se pueden analizar también en tabla dinámica y gráfico.

<Image
  src="/images/posts/modulos-odoo/falcon_credit/dashboard.png"
  alt="Informe de la cartera de préstamos en Odoo con capital pendiente, morosidad y cobros previstos"
  width={1600}
  height={950}
  className="next-image"
/>

## Beneficios de gestionar préstamos en Odoo

- **Cálculos sin errores**: cuotas, intereses, mora y redondeo los calcula el módulo, no una fórmula de Excel.
- **Morosidad bajo control**: sabes en todo momento qué está vencido, quién debe y cuánto vas a cobrar en los próximos meses.
- **Flexibilidad con el cliente**: aportes a capital, cambios de plazo o tasa y condonación de mora sin rehacer el préstamo.
- **Independiente de la contabilidad**: no genera asientos, así que funciona aunque no tengas un plan contable configurado.

## Preguntas frecuentes

**¿Cómo se calcula el interés de cada cuota?**
Con la tasa nominal anual dividida entre los pagos del año, aplicada sobre el capital pendiente de cada periodo. En el sistema francés la cuota es fija; en el alemán el capital es el mismo cada periodo y la cuota baja.

**¿Cómo se aplica un cobro parcial o un pago de más?**
Cuota a cuota y en orden: mora, interés y capital. Lo que sobra adelanta el pago de las cuotas siguientes.

**¿Cuándo se cobra la mora?**
Cuando una cuota se paga con más días de retraso que los días de gracia. Es un porcentaje de la cuota, se cobra una sola vez y se puede condonar.

**¿Puedo reducir la cuota o el plazo de un préstamo?**
Sí. Un aporte a capital recalcula las cuotas pendientes con una cuota menor o menos cuotas, y «Modificar cuotas» permite fijar otro plazo, cuota, tasa o primer vencimiento.

**¿Genera asientos contables?**
No. Gestiona los préstamos y sus cobros al margen de la contabilidad, por eso solo depende de Contactos y Conversaciones.

**¿En qué idiomas está disponible?**
En inglés y español.

## Descarga el módulo

Consulta la ficha completa, todas las capturas y el precio de **Falcon Credit** en la [tienda de módulos Odoo](/tienda/odoo-module/19.0/falcon_credit). Si buscas una solución con solicitudes y aprobación de créditos, lee también sobre [la gestión de créditos en Odoo](/posts/gestion-de-creditos-odoo-erp). Para adaptarlo a tu financiera, [contáctame](/contacto).
