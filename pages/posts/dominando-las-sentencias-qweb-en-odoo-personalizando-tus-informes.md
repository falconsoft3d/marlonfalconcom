---
title: ▷ Dominando las sentencias QWeb en Odoo para personalizar tus informes
date: 2023/10/16
description: ▷ Las principales directivas QWeb de Odoo (t, t-foreach, t-if, t-set y t-field) explicadas con ejemplos para personalizar tus informes.
tag: qweb, odoo
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Dominando las sentencias QWeb en Odoo para personalizar tus informes

Odoo es un potente sistema de gestión empresarial de código abierto que permite a las empresas gestionar diversos aspectos de sus operaciones, desde la contabilidad hasta la gestión de inventario. Una de las características más destacadas de Odoo es su capacidad para generar informes personalizados. Estos informes se crean utilizando el lenguaje de plantillas QWeb, que proporciona una forma flexible y poderosa de diseñar documentos y reportes a medida. En este artículo, exploraremos las sentencias QWeb en Odoo y cómo puedes utilizarlas para personalizar tus informes.

## ¿Qué son las sentencias QWeb en Odoo?

Las sentencias QWeb son un conjunto de etiquetas y atributos que se utilizan en las plantillas QWeb de Odoo para diseñar informes y documentos. QWeb es un motor de plantillas basado en XML/HTML con características adicionales que permiten la generación dinámica de contenido. Las sentencias QWeb se utilizan para controlar la estructura y el formato de los informes, así como para insertar datos específicos de la base de datos de Odoo.

## Principales sentencias QWeb

### 1. `t`: elemento neutro

La etiqueta `t` es un elemento neutro: permite aplicar directivas QWeb (como `t-esc`, `t-if` o `t-foreach`) sin generar ninguna etiqueta HTML en el resultado. En el siguiente ejemplo se usa junto a `t-esc` para imprimir un texto:

```xml
<t t-esc="_('Hello, World!')" />
```

### 2. `t-foreach`: bucle de iteración
La directiva `t-foreach`, junto con `t-as`, permite recorrer una lista de elementos y generar contenido para cada uno de ellos. Esto es útil para crear tablas y listas dinámicas en informes. Ejemplo:

```xml
<t t-foreach="records" t-as="record">
    <tr>
        <td><t t-esc="record.name" /></td>
        <td><t t-esc="record.amount" /></td>
    </tr>
</t>
```


### 3. `t-if`: condicionales
La directiva `t-if` permite agregar lógica condicional en los informes. Puedes mostrar u ocultar elementos según ciertas condiciones. Por ejemplo:

```xml
<t t-if="record.amount > 1000">
    <p>Amount is greater than 1000</p>
</t>
```

### 4. `t-set`: asignación de variables
La directiva `t-set`, junto con `t-value`, se utiliza para asignar valores a variables temporales que pueden utilizarse más adelante en el informe. Ejemplo:
```xml
<t t-set="total" t-value="sum(record.amount for record in records)" />
```

### 5. `t-field`: campos de la base de datos
La directiva `t-field` se utiliza para insertar campos de un registro en el informe. A diferencia de `t-esc`, aplica automáticamente el formato del tipo de campo (fechas, monedas, relaciones, etc.). Por ejemplo:
```xml
<t t-field="record.name" />
```

**Nota:** desde Odoo 15 se recomienda usar `t-out` en lugar de `t-esc` y `t-raw` (este último está obsoleto). Además, los textos estáticos de las plantillas se traducen automáticamente con el sistema de traducciones de Odoo según el idioma del cliente o del usuario.

## Conclusión
Las sentencias QWeb en Odoo ofrecen una poderosa herramienta para personalizar tus informes y documentos empresariales. Con estas sentencias, puedes controlar la estructura, el contenido y la lógica de tus informes de manera altamente personalizada, lo que te permite adaptarlos a las necesidades específicas de tu empresa. Dominar las sentencias QWeb es esencial para aprovechar al máximo las capacidades de generación de informes de Odoo y mejorar la eficiencia de tu negocio.