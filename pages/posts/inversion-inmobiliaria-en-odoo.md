---
title: ▷ Inversión inmobiliaria en Odoo - Comprar, reformar, alquilar y vender propiedades
date: 2026/11/11
description: ▷ Gestiona tu inversión inmobiliaria en Odoo 19 - compra, reforma, alquiler por habitaciones, contratos, rentabilidad, hipoteca y venta de propiedades.
tag: odoo, odoo-19, modulos-odoo, inversion-inmobiliaria, alquiler-por-habitaciones, rentabilidad
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Inversión inmobiliaria en Odoo: comprar, reformar, alquilar y vender propiedades

Quien **invierte en inmuebles** suele llevar cada piso en una hoja de cálculo distinta: el precio de compra en una, las facturas de la reforma en una carpeta, los contratos de alquiler en el correo y la cuota de la hipoteca en una calculadora online. Al final nadie sabe con certeza **cuánto renta cada propiedad** ni cuánto se ganó realmente al venderla. **Real Estate & Property Management MFH (Home Pro)** es un módulo para **Odoo 19 (Community y Enterprise)** que reúne todo el ciclo de la inversión dentro del ERP: **comprar, reformar, alquilar (entero o por habitaciones) y vender**, con la rentabilidad, el beneficio de la operación y una página para compradores con simulador de hipoteca.

## ¿Para quién es este módulo de inversión inmobiliaria en Odoo?

- **Inversores inmobiliarios** que compran, reforman y venden viviendas (*flipping*) y quieren saber el margen real de cada operación.
- **Propietarios que alquilan pisos por habitaciones**, con varios inquilinos, fianzas y contratos que vencen en fechas distintas.
- **Gestores de patrimonio y pequeñas promotoras** que necesitan ver de un vistazo qué inmuebles están comprados, en reforma, en alquiler o en venta.

Si lo que tienes es una **agencia inmobiliaria** que intermedia ventas y alquileres de terceros, con agentes, ofertas y visitas, el módulo adecuado es otro: lo explico en [software para agencia inmobiliaria en Odoo](/posts/agencia-inmobiliaria-en-odoo).

## Funciones principales

### Kanban de propiedades por estado de la inversión

Cada inmueble avanza por **Borrador, Visitado, Comprado, Remodelando, En alquiler, En venta y Vendido**. Arrastras la tarjeta y el cambio queda registrado en el chatter. Cada tarjeta muestra la foto de portada, el lugar, dormitorios, baños, superficie, precio, habitaciones alquiladas y si el inmueble está «Con inquilinos».

<Image
  src="/images/posts/modulos-odoo/home_pro/kanban.png"
  alt="Kanban de inversión inmobiliaria en Odoo con propiedades por estado - comprado, remodelando, en alquiler y en venta"
  width={1600}
  height={950}
  className="next-image"
/>

### Fotos de cada propiedad

Sube varias fotos a la vez; la primera es la portada. Con un clic se amplían en un visor, y desde el menú de cada foto puedes convertirla en portada o eliminarla.

### Alquiler del inmueble entero o por habitaciones

Decide si alquilas la vivienda completa o **cada habitación por separado**, con su renta y su inquilino. La vista de habitaciones muestra, inmueble por inmueble, cuáles están libres, alquiladas o no disponibles.

### Contratos de alquiler sin solapamientos

Cada **contrato de alquiler** tiene inquilino principal y otros inquilinos, fechas, renta y fianza, y puede estar en vigor, finalizado o cancelado. Al activar un contrato la habitación queda alquilada con su inquilino; al finalizarlo queda libre. Dos contratos activos de la misma habitación (o del inmueble entero) **nunca se solapan**, y la lista separa los contratos en vigor, por vencer y vencidos.

### Rentabilidad del alquiler y simulación de hipoteca

La pestaña de rentabilidad calcula la **cuota de la hipoteca** (cuota constante, sistema francés) con la entrada, el interés y el plazo que elijas, los **ingresos actuales y con todo alquilado**, el **beneficio al mes** (ingresos menos cuota menos gastos mensuales) y la **rentabilidad bruta** (ingresos anuales entre precio).

<Image
  src="/images/posts/modulos-odoo/home_pro/rentabilidad.png"
  alt="Cálculo de rentabilidad bruta de un inmueble en alquiler en Odoo con cuota de hipoteca y beneficio mensual"
  width={1600}
  height={950}
  className="next-image"
/>

### Beneficio de la operación de compra, reforma y venta

Vincula al inmueble las **facturas de compra**: la reforma, el notario, los materiales... El coste es el precio de compra más esas facturas (los reembolsos restan y las otras monedas se convierten). Frente al precio de venta, Odoo muestra el **beneficio, el margen y la rentabilidad de la inversión**.

### Página pública para compradores con simulador de hipoteca

Cada propiedad puede tener una **página para compradores** con la galería, los datos, las rentas de las habitaciones según los contratos y un **simulador de hipoteca en vivo**. Nunca muestra los nombres de los inquilinos y los buscadores no la indexan. La compartes con un enlace o un **código QR**, que puedes renovar o desactivar en cualquier momento. También hay un catálogo con todos los inmuebles de un estado (por defecto, «En venta»).

<Image
  src="/images/posts/modulos-odoo/home_pro/pagina-compradores.png"
  alt="Página pública de un inmueble en venta generada desde Odoo con fotos, rentas y simulador de hipoteca"
  width={1600}
  height={1449}
  className="next-image"
/>

### Importar anuncios de Idealista o Fotocasa con IA

Escribe la dirección de un anuncio (Idealista, Fotocasa...) o pega su texto: **Claude** lee el precio, las habitaciones, la superficie, la dirección, la descripción y las fotos, y crea el inmueble en Odoo. Solo necesitas tu clave API en Ajustes.

<Image
  src="/images/posts/modulos-odoo/home_pro/importar-ia.png"
  alt="Importar un anuncio de Idealista o Fotocasa en Odoo con inteligencia artificial"
  width={1600}
  height={950}
  className="next-image"
/>

### Integrado con CRM, Proyecto y Facturación

Cada inmueble tiene sus **oportunidades del CRM**, su proyecto, sus documentos y sus **tickets de soporte**, que son tareas del proyecto del inmueble. Así las incidencias de los inquilinos quedan ligadas a la propiedad.

## Beneficios para el inversor inmobiliario

- **Números reales**: la rentabilidad y el beneficio salen de los contratos y de las facturas, no de estimaciones en una hoja de cálculo.
- **Cartera ordenada**: de un vistazo sabes qué está comprado, en reforma, alquilado o en venta.
- **Menos huecos de alquiler**: los contratos por vencer y vencidos avisan antes de que una habitación se quede vacía.
- **Venta más rápida**: una página para compradores con rentas y simulador de hipoteca lista para compartir.
- **Alta de inmuebles en segundos**: la importación con IA evita copiar a mano los anuncios.

## Preguntas frecuentes

**¿Se puede alquilar un piso por habitaciones?**
Sí. Eliges «Por habitaciones» y haces un contrato para cada una. Al activar el contrato la habitación queda alquilada; al finalizarlo, libre.

**¿Cómo se calcula la rentabilidad?**
Sobre el precio de venta: cuota de hipoteca con sistema francés, beneficio igual a ingresos menos cuota menos gastos mensuales, y rentabilidad bruta igual a ingresos anuales entre precio. «Actual» usa las habitaciones alquiladas y «con todo alquilado», todas.

**¿Qué ve un comprador en la página pública?**
Fotos, datos, las rentas de las habitaciones según los contratos y el simulador de hipoteca. Nunca los nombres de los inquilinos.

**¿Cómo funciona la importación con IA?**
Usa Claude con tu clave API configurada en Ajustes. Escribes la dirección del anuncio o pegas su texto y el inmueble se crea con sus fotos.

**¿Funciona en Odoo Community?**
Sí, en Odoo 19 Community y Enterprise. Depende de Facturación, CRM y Proyecto.

**¿En qué idiomas está?**
Inglés y español.

## Descarga el módulo

Puedes ver la ficha completa, todas las capturas y el precio de **Real Estate & Property Management MFH** en la [tienda de módulos Odoo](/tienda/odoo-module/19.0/home_pro). Si quieres adaptarlo a tu forma de invertir o conectarlo con tu contabilidad, [contáctame](/contacto) y lo vemos juntos.
