---
title: ▷ Encriptación y Desencriptación en Python Conceptos Básicos y Ejemplos Prácticos
date: 2023/10/16
description: ▷ Encriptación y Desencriptación en Python Conceptos Básicos y Ejemplos Prácticos
tag: python, programacion, encriptacion
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Encriptación y Desencriptación en Python Conceptos Básicos y Ejemplos Prácticos

La encriptación es un proceso fundamental en la seguridad de la información. Permite proteger datos sensibles al convertirlos en un formato ilegible, que solo puede ser restaurado a su estado original mediante un proceso de desencriptación. En Python, existen varias bibliotecas y técnicas para llevar a cabo este proceso. En este artículo, exploraremos los conceptos básicos de encriptación y desencriptación en Python y proporcionaremos ejemplos prácticos utilizando la biblioteca cryptography.

## ¿Qué es la Encriptación?
La encriptación es el proceso de convertir información legible en un formato ilegible mediante un algoritmo y una clave. Este proceso se utiliza para proteger la confidencialidad de los datos, ya que solo las personas que tienen la clave adecuada pueden revertir el proceso y acceder a la información original.


## Biblioteca cryptography en Python
La biblioteca cryptography es una de las opciones más populares para trabajar con encriptación en Python. Proporciona una amplia gama de algoritmos de encriptación seguros y es fácil de usar.

Para comenzar, debes instalar la biblioteca si aún no lo has hecho:

```python
pip install cryptography
```

A continuación, exploraremos cómo encriptar y desencriptar datos en Python utilizando esta biblioteca.

## Ejemplo 1: Encriptación y Desencriptación Simples
En este primer ejemplo, mostraremos cómo encriptar una cadena de texto y luego desencriptarla utilizando cryptography.

```python
from cryptography.fernet import Fernet

# Generar una clave de encriptación
clave = Fernet.generate_key()
cipher_suite = Fernet(clave)

# Datos a encriptar
texto_original = "¡Hola, mundo!"

# Encriptar
texto_encriptado = cipher_suite.encrypt(texto_original.encode())

# Desencriptar
texto_desencriptado = cipher_suite.decrypt(texto_encriptado).decode()

print("Texto original:", texto_original)
print("Texto encriptado:", texto_encriptado)
print("Texto desencriptado:", texto_desencriptado)
```

Este ejemplo utiliza la clase Fernet de cryptography para generar una clave de encriptación, encriptar el texto original y luego desencriptarlo.

## Ejemplo 2: Encriptación y Desencriptación de Archivos
Puedes utilizar la encriptación para proteger archivos sensibles. Aquí, encriptaremos un archivo y luego lo desencriptaremos.

```python
from cryptography.fernet import Fernet

# Generar una clave de encriptación
clave = Fernet.generate_key()
cipher_suite = Fernet(clave)

# Datos a encriptar en un archivo
texto_original = "¡Hola, mundo!"
nombre_archivo = "archivo_encriptado.txt"

# Encriptar y guardar en el archivo
texto_encriptado = cipher_suite.encrypt(texto_original.encode())
with open(nombre_archivo, "wb") as archivo:
    archivo.write(texto_encriptado)

# Desencriptar desde el archivo
with open(nombre_archivo, "rb") as archivo:
    texto_encriptado = archivo.read()
texto_desencriptado = cipher_suite.decrypt(texto_encriptado).decode()

print("Texto original:", texto_original)
print("Texto desencriptado desde el archivo:", texto_desencriptado)
```

Este ejemplo encripta el texto y lo guarda en un archivo. Luego, lee el archivo, desencripta el contenido y lo muestra.


## Ejemplo 3: Uso de Contraseñas
En lugar de generar una clave aleatoria, puedes utilizar una contraseña para encriptar y desencriptar datos. Asegúrate de almacenar esta contraseña de manera segura, ya que se necesitará para desencriptar.

```python
from cryptography.fernet import Fernet

# Contraseña
contrasena = "mi_contrasena_secreta".encode()
clave = Fernet.generate_key()

cipher_suite = Fernet(clave)

# Datos a encriptar
texto_original = "¡Hola, mundo!"

# Encriptar
texto_encriptado = cipher_suite.encrypt(texto_original.encode())

# Desencriptar
cipher_suite = Fernet(clave)
texto_desencriptado = cipher_suite.decrypt(texto_encriptado).decode()

print("Texto original:", texto_original)
print("Texto encriptado:", texto_encriptado)
print("Texto desencriptado:", texto_desencriptado)
```

Este ejemplo utiliza una contraseña para generar una clave de encriptación y luego encripta y desencripta el texto utilizando esa clave.

## Conclusión
La encriptación y desencriptación son herramientas cruciales para proteger datos sensibles en aplicaciones y sistemas. Python ofrece bibliotecas como cryptography que facilitan la implementación de algoritmos de encriptación seguros. Sin embargo, ten en cuenta que la seguridad de tus datos depende en gran medida de la gestión adecuada de las claves de encriptación y las contraseñas. Asegúrate de almacenarlas de manera segura y seguir las mejores prácticas de seguridad en tu aplicación.