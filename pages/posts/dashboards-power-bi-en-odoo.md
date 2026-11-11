---
title: ▷ Dashboards estilo Power BI en Odoo - Business Intelligence con IA de Claude
date: 2026/11/11
description: ▷ Dashboards estilo Power BI en Odoo 19 - 11 tipos de gráfico, tableros diseñados por Claude, chat para preguntar a tus datos y exportación a PDF.
tag: odoo, odoo-19, modulos-odoo, business-intelligence, dashboards, inteligencia-artificial
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Dashboards estilo Power BI en Odoo: Business Intelligence con inteligencia artificial

Muchas empresas tienen todos sus datos en Odoo, pero para ver un **cuadro de mando** de verdad terminan exportando a Excel o pagando licencias de **Power BI**, montando conectores y esperando a que alguien de sistemas escriba las consultas. **Business Intelligence (BI) Analytics MFH** es un módulo para **Odoo 19** que lleva los **dashboards estilo Power BI dentro de Odoo**: tableros sobre una cuadrícula de 12 columnas, 11 tipos de gráfico y la **IA de Claude** para diseñar tableros completos a partir de una frase y responder preguntas sobre tus datos.

## ¿Para quién es este módulo de BI en Odoo?

- **Gerencia y dirección** que quiere ver ventas, facturación y cobros de un vistazo sin salir del ERP.
- **Responsables de finanzas y comerciales** que necesitan indicadores actualizados sin pedir informes a cada rato.
- **Consultores e implantadores de Odoo** que quieren entregar cuadros de mando a medida en minutos.
- **Empresas que pagan Power BI** solo para analizar los datos de Odoo.

Solo depende del módulo de mensajería de Odoo (`mail`), por lo que se instala en cualquier base de datos.

## Funciones principales

### 11 tipos de gráfico para tus dashboards

**Indicadores (KPI), medidores, columnas, barras, líneas, áreas, circular, anillo, dispersión, cascada y tablas.** Con esta variedad cubres desde el KPI de ventas del mes hasta la evolución de la facturación o el ranking de clientes.

<Image
  src="/images/posts/modulos-odoo/x_bi/ventas.png"
  alt="Dashboard de análisis de ventas en Odoo estilo Power BI con indicadores, ventas por mes y por comercial"
  width={1600}
  height={900}
  className="next-image"
/>

### Cuadrícula de 12 columnas al estilo Power BI

Cada tablero se organiza en una **cuadrícula de 12 columnas**. Desde el propio dashboard puedes **mover, ensanchar, estrechar, editar o eliminar** cada gráfico, sin abrir formularios técnicos.

### Tableros diseñados por Claude

Describe el **cuadro de mando** que quieres ver en una frase. Claude lee tus tablas y diseña el tablero completo: indicadores, tendencias, proveedores, productos y márgenes, cada gráfico con su consulta, listo para usar.

<Image
  src="/images/posts/modulos-odoo/x_bi/tablero-ia.png"
  alt="Dashboard en Odoo diseñado por la inteligencia artificial de Claude a partir de una frase"
  width={1600}
  height={900}
  className="next-image"
/>

### Pregunta a tus datos con un chat de IA

Dentro del tablero hay un **chat para preguntar a tus datos** con tus propias palabras. Claude escribe la consulta, Odoo la ejecuta y Claude te responde con las cifras y un gráfico. Si la respuesta te sirve, **la añades al dashboard** con un clic.

<Image
  src="/images/posts/modulos-odoo/x_bi/chat.png"
  alt="Chat de inteligencia artificial en Odoo para preguntar a los datos y obtener un gráfico"
  width={1600}
  height={900}
  className="next-image"
/>

### Editor de gráficos con SQL y vista previa

Cada gráfico es una **consulta SQL sobre la base de datos de Odoo**, con marcadores de fecha como `{{month_start}}` o `{{year}}`. En el editor describes el gráfico y Claude lo escribe; luego **ejecutas la consulta y ves el gráfico antes de guardarlo**. Así puedes analizar ventas, inventario, RR. HH. o tus propios modelos.

<Image
  src="/images/posts/modulos-odoo/x_bi/editor.png"
  alt="Editor de gráficos del módulo de BI de Odoo con consulta SQL y vista previa del gráfico"
  width={1600}
  height={900}
  className="next-image"
/>

### Datos actualizados cada 15 minutos

Cada gráfico **guarda sus datos** y una acción planificada los actualiza cada 15 minutos, así los tableros abren al instante. Si necesitas la cifra del momento, pulsa el botón **Actualizar**.

### Imprimir el dashboard o guardarlo en PDF

Imprime el tablero **tal como lo ves en pantalla**, en una página A4 apaisada con su nombre y la fecha, o guárdalo como **PDF** para enviarlo al comité de dirección.

### Tres dashboards de ejemplo listos para usar

Desde el primer minuto tienes tres tableros: **análisis de ventas** (mes actual frente al anterior, ventas por mes y por comercial, mejores clientes y productos), **facturación y pagos** (facturado, por cobrar, por pagar, vencido y deudores) y **contactos y actividad**, que funciona en cualquier base de datos.

### Seguro por diseño

Las consultas son **de solo lectura**, con límite de tiempo y de filas. Las contraseñas, claves, tokens y parámetros del sistema no se pueden leer. Hay dos grupos de acceso: **Usuario de BI** (ve los tableros y hace preguntas) y **Diseñador de BI** (además los crea y modifica).

## Beneficios del Business Intelligence dentro de Odoo

- **Sin herramientas externas**: los dashboards viven en Odoo, sobre los datos reales y sin conectores.
- **Cuadros de mando en minutos**: Claude diseña el tablero y escribe las consultas por ti.
- **Respuestas inmediatas**: preguntas en lenguaje natural y obtienes cifras y gráficos.
- **Control total**: cada gráfico es una consulta SQL que puedes revisar y ajustar.
- **Datos protegidos**: solo lectura, límites de ejecución y grupos de lector y diseñador.

## Preguntas frecuentes

**¿Qué necesita la inteligencia artificial?**
Una clave de la API de Claude (en BI > Configuración > Ajustes, o la variable `ANTHROPIC_API_KEY` en el servidor) y el paquete de Python `anthropic` instalado (`pip install anthropic`). Sin la clave funcionan los tableros, el editor y la impresión; solo el diseño con IA y el chat la necesitan.

**¿Puede una consulta modificar mis datos?**
No. Cada consulta se ejecuta en su propia transacción de solo lectura, limitada a 15 segundos y 5000 filas, y solo se acepta una SELECT.

**¿Quién puede ver los dashboards?**
Los Usuarios de BI ven los tableros y hacen preguntas; los Diseñadores de BI además los crean y modifican. Nadie más ve la aplicación.

**¿Qué datos se envían a Claude?**
Solo al diseñar o preguntar: la petición, los nombres de las tablas y columnas, y las filas de la respuesta. Mientras solo miras los tableros no se envía nada.

**¿Qué versión de Odoo soporta?**
Odoo 19.

## Descarga el módulo

Consulta la ficha completa, las capturas y el precio de **Business Intelligence (BI) Analytics MFH** en la [tienda de módulos Odoo](/tienda/odoo-module/19.0/x_bi). Si quieres que te ayude a montar los cuadros de mando de tu empresa, [contáctame](/contacto).
