---
title: Python en 20 pasos
date: 2022/12/18
description: Python en 20 pasos
tag: python, 20pasos
author: Marlon Falcon Hernandez
---

# Python en 20 pasos
Python es un lenguaje de programación interpretado cuya filosofía hace hincapié en una sintaxis que favorezca un código legible. Con python coloque más de 20 pasos ...

## 1. Instalación
````bash
brew install python
````

## 2. Programa
En python debes crear un archivo con la extensión .py, por ejemplo: hola_mundo.py
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

## 8. Condicional IF
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

## 9. Condicional SWITCH
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

## 10. Ciclo FOR
````python
for i in range(10):
    print(i)
````

## 11. Ciclo WHILE
````python
i = 0
while i < 10:
    print(i)
    i += 1
````

## 12. Funciones
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


## 12. Listas
````python
lista = [1, 2, 3, 4, 5]
lista.append(6)
lista.pop(0)
lista.remove(3)
lista.reverse()
lista.sort()
lista.clear()
````

## 13. Tuplas
````python
tupla = (1, 2, 3, 4, 5)
````
## 14. Diccionarios
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

## 15. Clases
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

## 16. Herencia
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

## 17. Módulos
````python
# modulo.py
def saludar(nombre):
    print(f'Hola {nombre}')

# programa.py
import modulo

modulo.saludar('Juan')
````
## 18. Manejo de errores
````python
try:
    numero = int(input('Ingrese un número: '))
    print(numero)
except:
    print('Debes ingresar un número')
````

## 19. Archivos
````python
archivo = open('archivo.txt', 'w')
archivo.write('Hola mundo')
archivo.close()

archivo = open('archivo.txt', 'r')
print(archivo.read())
archivo.close()
````

## 20. Manejo de fechas
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

## 21. Manejo de expresiones regulares
````python
import re

texto = 'Hola mundo'
patron = 'Hola'

if re.match(patron, texto):
    print('Se encontró el patrón')
else:
    print('No se encontró el patrón')
````

## 22. Manejo de hilos
````python
import threading

def hola():
    print('Hola')

hilo = threading.Thread(target=hola)
hilo.start()
````

## 23. Api REST
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

## 24. Api SOAP
````python
from zeep import Client

client = Client('https://www.w3schools.com/xml/tempconvert.asmx?WSDL')

result = client.service.FahrenheitToCelsius(100)

print(result)
````

## 25. try except else finally
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

## 26. Imprimir en consola
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















