---
title: ▷ Conexión a MongoDB
date: 2022/12/31
description: ▷ Conexión a MongoDB
tag: mongodb
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Conexión a MongoDB
MongoDB es un sistema de base de datos de código abierto orientado a documentos y de uso general que admite las aplicaciones modernas de alta escala. MongoDB está escrito en C ++ y es multiplataforma. MongoDB es un sistema de base de datos de documentos NoSQL, lo que significa que no se basa en el modelo relacional de tablas y filas. En cambio, MongoDB almacena datos en documentos JSON con un esquema dinámico, haciendo que la integración de los datos en ciertas aplicaciones sea más fácil y rápida.

Cadena de conexión de MongoDB
```python
mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]
```


## Conexión a MongoDB local
```python
mongodb://localhost:27017/
```

## Conexión a un VPS con usuario y password
```python
mongodb://user:password@ip:27017/
```




