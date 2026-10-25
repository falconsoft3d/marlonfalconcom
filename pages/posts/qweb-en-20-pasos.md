---
title: "QWeb en 20 pasos"
date: 2022/12/18
description: "Guía rápida de QWeb, el motor de plantillas XML usado en Odoo - renderizado, herencia, condicionales, bucles y variables."
tag: qweb, 20pasos, python
author: Marlon Falcon Hernandez
---

# QWeb en 20 pasos
QWeb es un motor de plantillas basado en XML, de código abierto, desarrollado por Odoo y escrito en Python. Es el que usa Odoo para generar vistas web, reportes PDF y páginas del sitio web. Sus directivas son atributos que empiezan por `t-`, como `t-if`, `t-foreach`, `t-set` o `t-call`. En esta guía repasamos sus conceptos básicos paso a paso.

## 1. Instalación
```bash
pip install qweb
```

## 2. Programa
```python
from qweb import QWeb

qweb = QWeb()
template = qweb.render('Hello {{ name }}', {'name': 'World'})

print(template)
```

## 3. Plantilla
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Qweb</title>
    </head>
    <body>
        <h1>Qweb</h1>
        <p>{{ name }}</p>
    </body>
</html>
```

## 4. Renderizar
```python
from qweb import QWeb

qweb = QWeb()
template = qweb.render('Hello {{ name }}', {'name': 'World'})

print(template)
```

## 5. Renderizar una plantilla
```python
from qweb import QWeb

qweb = QWeb()
template = qweb.render_template('template.html', {'name': 'World'})

print(template)
```

## 6. Herencia
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Qweb</title>
    </head>
    <body>
        <h1>Qweb</h1>
        <p>{{ name }}</p>
    </body>

    <t t-name="template.html">
        <t t-call="base.html">
            <t t-set="name" t-value="'World'"/>
        </t>
    </t>


    <t t-name="base.html">
        <html>
            <head>
                <title>Qweb</title>
            </head>
            <body>
                <h1>Qweb</h1>
                <p>{{ name }}</p>
            </body>
        </html>

    </t>
</html>
```

## 7. Tabla
```html
<table class="table table-striped">
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
        </tr>
    </thead>
    <tbody>
        <tr t-foreach="users" t-as="user">
            <td>{{ user.name }}</td>
            <td>{{ user.last_name }}</td>
            <td>{{ user.age }}</td>
        </tr>
    </tbody>
</table>
```

## 8. Condicionales if
```html
<t t-if="user.age > 18">
    <td>{{ user.name }}</td>
    <td>{{ user.last_name }}</td>
    <td>{{ user.age }}</td>
</t>
```

## 9. Condicionales if/else
```html
<t t-if="user.age > 18">
    <td>{{ user.name }}</td>
    <td>{{ user.last_name }}</td>
    <td>{{ user.age }}</td>
</t>

<t t-else="">
    <td>{{ user.name }}</td>
    <td>{{ user.last_name }}</td>
    <td>{{ user.age }}</td>

</t>
```

## 10. Bucle for
```html
<t t-foreach="users" t-as="user">
    <td>{{ user.name }}</td>
    <td>{{ user.last_name }}</td>
    <td>{{ user.age }}</td>
</t>
```

## 11. Bucle for con range
```html
<t t-foreach="range(10)" t-as="i">
    <td>{{ i }}</td>
</t>
```

## 12. Variables
```html
<t t-set="name" t-value="'World'"/>
```

## 13. Arreglos
```html
<t t-set="users" t-value="['Marlon', 'Falcon', 'Hernandez']"/>
```

## 14. Diccionarios
```html
<t t-set="users" t-value="{'name': 'Marlon', 'last_name': 'Falcon', 'age': 18}"/>
```

## 15. Funciones
```html
<t t-set="users" t-value="{'name': 'Marlon', 'last_name': 'Falcon', 'age': 18}"/>

<t t-set="name" t-value="upper(users.name)"/>
```

## 16. Hola mundo con t-call
```html
<t t-name="template.html">
    <t t-call="base.html">
        <t t-set="name" t-value="'World'"/>
    </t>
</t>

<t t-name="base.html">
    <html>
        <head>
            <title>Qweb</title>
        </head>
        <body>
            <h1>Qweb</h1>
            <p>{{ name }}</p>
        </body>
    </html>
</t>
```

## 17. JSON
```html
<t t-set="users" t-value="{'name': 'Marlon', 'last_name': 'Falcon', 'age': 18}"/>

<t t-set="json" t-value="json(users)"/>
```

## 18. XML
```html
<t t-set="users" t-value="{'name': 'Marlon', 'last_name': 'Falcon', 'age': 18}"/>

<t t-set="xml" t-value="xml(users)"/>
```

## 19. URL
```html
<t t-set="url" t-value="url('https://www.google.com')"/>
```

## 20. Mostrar valores en Odoo
En las plantillas QWeb de Odoo, los valores se imprimen con la directiva `t-esc` (o `t-out` a partir de Odoo 15), por ejemplo `<span t-esc="user.name"/>`, y los atributos dinámicos se generan con `t-att-` o `t-attf-`. Tenlo en cuenta al adaptar los ejemplos anteriores, que usan la sintaxis de dobles llaves.
