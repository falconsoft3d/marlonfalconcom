---
title: Python flask plantillas
date: 2022/12/18
description: Python flask plantillas
tag: python, flask, bootstrap
author: Marlon Falcon Hernandez
---

# Python flask plantillas
## Plantillas con flask y bootstrap

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

## Plantillas con flask con herecias
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

## Plantillas con flask con herecias y tags
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