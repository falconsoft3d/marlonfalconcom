---
title: Python en 20 pasos
date: 2022/12/18
description: Guía rápida de Python con más de 20 ejemplos básicos - variables, operadores, condicionales, ciclos, funciones, listas, clases, archivos y más.
tag: python, 20pasos
author: Marlon Falcon Hernandez
---

# Python en 20 pasos
Python es un lenguaje de programación interpretado cuya filosofía hace hincapié en una sintaxis que favorezca un código legible. En este artículo he reunido más de 20 pasos con ejemplos cortos para repasar lo básico del lenguaje.

## 1. Instalación
````bash
brew install python
````

## 2. Programa
En Python debes crear un archivo con la extensión .py, por ejemplo: hola_mundo.py
````python
print('Hola mundo')
````

## 3. Comentarios
````bash
# Esto es un comentario

''' 
  Esto es un comentario
  de varias líneas
'''
````

## 4. Constantes
````python
PI = 3.1416
````

## 5. Variables
````python
nombre = 'Juan'
edad = 20
estatura = 1.80
esMayor = True
````

## 6. Operadores de asignación
````python
d = 10
d += 2 # 12
d -= 2 # 10
d *= 2 # 20
d %= 6 # 4
````

## 7. Operadores relacionales
````python
a = 10
b = 20
a == b # False
a != b # True
a > b # False
a < b # True
a >= b # False
a <= b # True
````

## 8. Operadores lógicos
````python
a = 10
b = 20
a == 10 and b == 20 # True
a == 10 or b == 30 # True
not(a == 10 and b == 20) # False
````

## 9. Condicional IF
````python
a = 10
b = 20
if a == 10:
    print('a es igual a 10')
elif a == 20:
    print('a es igual a 20')
else:
    print('a es diferente a 10 y 20')
````

## 10. Condicional SWITCH
Python no tiene una sentencia `switch` como otros lenguajes. El siguiente bloque muestra la idea general, pero desde Python 3.10 la forma correcta es usar `match` con `case` (y `case _` como caso por defecto), sin `break`; en versiones anteriores se suele usar `if`/`elif` o un diccionario.
````python
a = 10
b = 20
switch(a):
    case 10:
        print('a es igual a 10')
        break
    case 20:
        print('a es igual a 20')
        break
    default:
        print('a es diferente a 10 y 20')
        break
````

## 11. Ciclo FOR
````python
for i in range(10):
    print(i)
````

## 12. Ciclo WHILE
````python
i = 0
while i < 10:
    print(i)
    i += 1
````

## 13. Funciones
````python
def suma(a, b):
    return a + b

print(suma(10, 20))

def suma(a, b):
    print(a + b)

suma(10, 20)

def suma(a, b):
    print(a + b)

suma(b=10, a=20)

def suma(a, b=10):
    print(a + b)
suma(20)

def suma(*args):
    total = 0
    for arg in args:
        total += arg
    return total

print(suma(10, 20, 30, 40, 50))

def suma(**kwargs):
    print(kwargs['a'] + kwargs['b'])

suma(a=10, b=20)
````

## 14. Listas
````python
lista = [1, 2, 3, 4, 5]
lista.append(6)
lista.pop(0)
lista.remove(3)
lista.reverse()
lista.sort()
lista.clear()
````

## 15. Tuplas
````python
tupla = (1, 2, 3, 4, 5)
````
## 16. Diccionarios
````python
diccionario = {
    'nombre': 'Juan',
    'edad': 20,
    'estatura': 1.80
}
diccionario['nombre'] = 'Pedro'
diccionario['peso'] = 80
diccionario.pop('edad')
diccionario.clear()
````

## 17. Clases
````python
class Persona:
    def __init__(self, nombre, edad, estatura):
        self.nombre = nombre
        self.edad = edad
        self.estatura = estatura

    def hablar(self, mensaje):
        print(f'{self.nombre}: {mensaje}')

    def caminar(self):
        print(f'{self.nombre} está caminando')

persona = Persona('Juan', 20, 1.80)

persona.hablar('Hola, cómo estás')
persona.caminar()
````

## 18. Herencia
````python
class Persona:
    def __init__(self, nombre, edad, estatura):
        self.nombre = nombre
        self.edad = edad
        self.estatura = estatura

    def hablar(self, mensaje):
        print(f'{self.nombre}: {mensaje}')

    def caminar(self):
        print(f'{self.nombre} está caminando')

class Empleado(Persona):
    def __init__(self, nombre, edad, estatura, sueldo):
        super().__init__(nombre, edad, estatura)
        self.sueldo = sueldo

    def trabajar(self):
        print(f'{self.nombre} está trabajando')

empleado = Empleado('Juan', 20, 1.80, 1000)

empleado.hablar('Hola, cómo estás')
empleado.caminar()
empleado.trabajar()
````

## 19. Módulos
````python
# modulo.py
def saludar(nombre):
    print(f'Hola {nombre}')

# programa.py
import modulo

modulo.saludar('Juan')
````
## 20. Manejo de errores
````python
try:
    numero = int(input('Ingrese un número: '))
    print(numero)
except:
    print('Debes ingresar un número')
````

## 21. Archivos
````python
archivo = open('archivo.txt', 'w')
archivo.write('Hola mundo')
archivo.close()

archivo = open('archivo.txt', 'r')
print(archivo.read())
archivo.close()
````

## 22. Manejo de fechas
````python
from datetime import datetime

fecha = datetime.now()
print(fecha)
print(fecha.year)
print(fecha.month)
print(fecha.day)
print(fecha.hour)
print(fecha.minute)
print(fecha.second)
print(fecha.microsecond)
````

## 23. Manejo de expresiones regulares
````python
import re

texto = 'Hola mundo'
patron = 'Hola'

if re.match(patron, texto):
    print('Se encontró el patrón')
else:
    print('No se encontró el patrón')
````

## 24. Manejo de hilos
````python
import threading

def hola():
    print('Hola')

hilo = threading.Thread(target=hola)
hilo.start()
````

## 25. API REST
````python
import requests

url = 'https://eu102.chat-api.com/instance99645/sendMessage?token=iwu09tzu212lk'

params = {
    "phone": "79912422",
    "body": "WhatsApp API on chat-api.com works good"
}

response = requests.post(url, params=params)

response.json()
````

## 26. API SOAP
````python
from zeep import Client

client = Client('https://www.w3schools.com/xml/tempconvert.asmx?WSDL')

result = client.service.FahrenheitToCelsius(100)

print(result)
````

## 27. Try, except, else y finally
````python
try:
    print(10 / 2)
except:
    print('Error')
else:
    print('Todo salió bien')
finally:
    print('Fin del programa')
````

## 28. Imprimir en consola
````python
print('Hola mundo')
print(10)
print(10.5)
print(True)
print(['a', 'b', 'c'])
print({'a': 1, 'b': 2, 'c': 3})
print((1, 2, 3))
print(None)
````















