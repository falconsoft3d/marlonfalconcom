---
title: Qweb en 20 pasos
date: 2022/12/18
description: ReactJS en 20 pasos
tag: qweb, 20pasos, python
author: Marlon Falcon Hernandez
---

# Qweb en 20 pasos
Qweb es un motor de plantillas de código abierto para Python.

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

## 4. Render
```python
from qweb import QWeb

qweb = QWeb()
template = qweb.render('Hello {{ name }}', {'name': 'World'})

print(template)
```

## 5. Render Template
```python
from qweb import QWeb

qweb = QWeb()
template = qweb.render_template('template.html', {'name': 'World'})

print(template)
```

## 5. Herencia
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

## 5. Tabla
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

## 6. Condicionales IF
```html
<t t-if="user.age > 18">
    <td>{{ user.name }}</td>
    <td>{{ user.last_name }}</td>
    <td>{{ user.age }}</td>
</t>
```

## 6. Condicionales IF ELSE
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

## 7. For
```html
<t t-foreach="users" t-as="user">
    <td>{{ user.name }}</td>
    <td>{{ user.last_name }}</td>
    <td>{{ user.age }}</td>
</t>
```

## 8. For Range
```html
<t t-foreach="range(10)" t-as="i">
    <td>{{ i }}</td>
</t>
```

## 9. Variables
```html
<t t-set="name" t-value="'World'"/>
```

## 10. Arreglos
```html
<t t-set="users" t-value="['Marlon', 'Falcon', 'Hernandez']"/>
```

## Diccionarios
```html
<t t-set="users" t-value="{'name': 'Marlon', 'last_name': 'Falcon', 'age': 18}"/>
```

## 11. Funciones
```html
<t t-set="users" t-value="{'name': 'Marlon', 'last_name': 'Falcon', 'age': 18}"/>

<t t-set="name" t-value="upper(users.name)"/>
```

## 12. Hello World
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

## 12. JSON
```html
<t t-set="users" t-value="{'name': 'Marlon', 'last_name': 'Falcon', 'age': 18}"/>

<t t-set="json" t-value="json(users)"/>
```

## 13. XML
```html
<t t-set="users" t-value="{'name': 'Marlon', 'last_name': 'Falcon', 'age': 18}"/>

<t t-set="xml" t-value="xml(users)"/>
```

## 14. URL
```html
<t t-set="url" t-value="url('https://www.google.com')"/>
```






    



















