---
title: ▷ Conexión a MongoDB
date: 2022/12/31
description: ▷ Cómo es la cadena de conexión de MongoDB y ejemplos para conectarse a una base de datos local o a un VPS con usuario y contraseña.
tag: mongodb
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Conexión a MongoDB
MongoDB es un sistema de base de datos de código abierto orientado a documentos y de uso general, pensado para aplicaciones modernas de alta escala. Está escrito en C++ y es multiplataforma. MongoDB es una base de datos NoSQL, lo que significa que no se basa en el modelo relacional de tablas y filas. En su lugar, almacena los datos en documentos similares a JSON (BSON) con un esquema dinámico, lo que hace que la integración de los datos en ciertas aplicaciones sea más fácil y rápida.

Para conectarnos desde una aplicación, desde la consola `mongosh` o desde herramientas como MongoDB Compass, usamos una cadena de conexión (URI) con el siguiente formato:

Cadena de conexión de MongoDB
```python
mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]
```


## Conexión a MongoDB local
Por defecto, MongoDB escucha en el puerto 27017:
```python
mongodb://localhost:27017/
```

## Conexión a un VPS con usuario y contraseña
```python
mongodb://user:password@ip:27017/
```

Si el usuario se creó en una base de datos distinta de `admin`, añade `?authSource=nombre_bd` al final de la cadena. Y si la contraseña contiene caracteres especiales como `@` o `:`, debe ir codificada para URL.
