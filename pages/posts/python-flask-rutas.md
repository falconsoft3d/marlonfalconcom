---
title: Rutas con Python y Flask
date: 2022/12/18
description: Cómo definir rutas en Flask y leer parámetros desde la query string o desde la propia URL.
tag: python, flask, api
author: Marlon Falcon Hernandez
---

# Rutas con Python y Flask

Flask es un microframework web para Python. Las **rutas** indican qué función debe responder a cada URL y se definen con el decorador `@app.route`. En este post vemos dos formas de recibir parámetros en una ruta.

Para probar los ejemplos, instala Flask con `pip install flask` y ejecuta el archivo con `python template.py`. La aplicación quedará disponible en `http://127.0.0.1:8000`.

## Ejemplo 1: parámetros en la query string

Los parámetros se envían después del signo `?` de la URL y se leen con `request.args.get`. El segundo argumento es el valor por defecto si el parámetro no viene en la URL.

template.py
```python
from flask import Flask
from flask import request


app = Flask(__name__)

@app.route('/')
def index():
    return 'Hola Mundo, cambio'

@app.route('/saluda')
def saluda():
    return 'otro mensaje'

# http://127.0.0.1:8000/params?params1=marlon
# http://127.0.0.1:8000/params?params1=marlon&params2=juan

@app.route('/params')
def params():
    param = request.args.get('params1','no contiene')
    param2 = request.args.get('params2','no contiene')
    return 'El parametro es {}, {}'.format(param,param2) 

if __name__ == '__main__':
    app.run(debug = True, port=8000)
```

## Ejemplo 2: parámetros en la ruta

También podemos definir variables dentro de la propia ruta. Flask pasa su valor como argumento a la función y, con un convertidor como `int:`, valida y convierte el tipo. Al apilar varios decoradores, la misma función responde a varias URL, y los argumentos con valor por defecto cubren los casos en que el parámetro no se envía.

template.py
```python
from flask import Flask
from flask import request


app = Flask(__name__)

@app.route('/')
def index():
    return 'Hola Mundo, cambio'

@app.route('/saluda')
def saluda():
    return 'otro mensaje'

# http://127.0.0.1:8000/params/marlon/

@app.route('/params/')
@app.route('/params/<name>/')
@app.route('/params/<name>/<int:num>')
def params(name = 'valor por default', num = 1):
    return 'El parametro es {} {}'.format(name, num) 

if __name__ == '__main__':
    app.run(debug = True, port=8000
```

Por ejemplo, `http://127.0.0.1:8000/params/marlon/` devuelve "El parametro es marlon 1". Ten en cuenta que en la última línea del ejemplo falta cerrar el paréntesis de `app.run`.

## Nota

La opción `debug = True` recarga la aplicación al guardar cambios y muestra errores detallados. Es muy útil en desarrollo, pero nunca debe activarse en producción.
