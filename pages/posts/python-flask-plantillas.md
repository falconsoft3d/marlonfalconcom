---
title: "Python Flask plantillas"
date: 2022/12/18
description: "Cómo usar plantillas Jinja2 en Flask con Bootstrap - renderizar HTML, pasar variables, herencia de plantillas, condicionales y bucles."
tag: python, flask, bootstrap
author: Marlon Falcon Hernandez
---

# Python Flask plantillas

Flask usa el motor de plantillas **Jinja2** para generar páginas HTML dinámicas. Las plantillas se guardan en una carpeta llamada `templates`, junto al archivo de la aplicación, y se cargan con la función `render_template`. En este post vemos tres ejemplos: una plantilla simple con Bootstrap, la herencia de plantillas y el uso de variables, condicionales y bucles.

## Plantillas con Flask y Bootstrap

La ruta principal devuelve el archivo `templates/index.html`:

template.py
```python
from flask import Flask
from flask import render_template


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug = True, port=8000)
```

templates/index.html
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset ="UTF8">
  <title>Ejemplo Boostrap</title>
  <meta name="viewport" content="width = device-width">
  <link href="http://getbootstrap.com/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
  <script src="http://getbootstrap.com/dist/js/bootstrap.min.js"></script>
</head>
 <body>
  
  <div class="container">
       <h1>Hello</h1>    
  </div>
 </body>
</html>
```

## Plantillas con Flask con herencia

La herencia permite definir una plantilla base con la estructura común (cabecera, estilos, scripts) y que las demás plantillas solo rellenen los bloques que cambian. La plantilla hija usa `extends` para indicar de qué plantilla hereda y `block` para definir el contenido. Además, pasamos la variable `name` desde Flask y la mostramos con dobles llaves.

template.py
```python
from flask import Flask
from flask import render_template


app = Flask(__name__)

@app.route('/')
def index():
    name = 'Marlon'
    return render_template('index.html', name=name)

if __name__ == '__main__':
    app.run(debug = True, port=8000)
```

templates/index.html
```html
{% extends 'base/base.html' %}
{% block content %}
      <h1>{{ name }}</h1>       
{% endblock  %}
```

templates/base/base.html
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset ="UTF8">
  <title>Ejemplo Boostrap 1</title>
  <meta name="viewport" content="width = device-width">
  <link href="http://getbootstrap.com/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
  <script src="http://getbootstrap.com/dist/js/bootstrap.min.js"></script>
</head>
 <body>
  <div class="container">
         {% block content %}
         
         {% endblock  %}
  </div>
 </body>
</html>
```

## Plantillas con Flask con herencia y etiquetas

Jinja2 también tiene etiquetas de control: `if` para condicionales y `for` para recorrer listas. En este ejemplo la ruta `/user/<name>` recibe el nombre desde la URL y pasa a la plantilla el nombre, la edad y una lista.

template.py
```python
from flask import Flask
from flask import render_template


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/user/<name>')
def user(name='Marlon'):
    age = 17
    mylist = [1,2,3,4]
    return render_template('index.html', nombre=name, age=age, list=mylist)

if __name__ == '__main__':
    app.run(debug = True, port=8000)
```

templates/index.html
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset ="UTF8">
  <title>Ejemplo Boostrap</title>
  <meta name="viewport" content="width = device-width">
  <link href="http://getbootstrap.com/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
  <script src="http://getbootstrap.com/dist/js/bootstrap.min.js"></script>

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
      <![endif]-->

</head>
 <body>  
  <div class="container">
       <h1>Hello</h1>   
       <h4>{{ nombre }}</h4>   
       <h4>{{ age }}</h4> 
       
       <h2>Condicionales</h2> 
       {% if age > 18 %}
          <p>Es mayor de edad. <p>
       {% endif %}


       <h2>Listas</h2>    
       {% for item in list %}
          <p>{{ item }}<p>
       {% endfor %}    

  </div>    
 </body>
</html>
```

## Nota

Los enlaces a Bootstrap y jQuery de los ejemplos corresponden a versiones antiguas. En un proyecto nuevo es mejor cargar la versión actual de Bootstrap desde un CDN oficial (como jsDelivr), siguiendo las instrucciones de su documentación. Ten en cuenta también que en el tercer ejemplo el condicional solo muestra el mensaje si `age` es mayor que 18, así que con el valor 17 no aparecerá.
