---
title: Firebase con Python
date: 2022/12/18
description: Cómo conectar Python con Firebase usando el SDK firebase_admin para escribir y leer datos en Cloud Firestore y en Realtime Database.
tag: firebase, python
author: Marlon Falcon Hernandez
---

# Firebase con Python

Firebase es la plataforma de Google para el desarrollo de aplicaciones, que ofrece, entre otros servicios, dos bases de datos NoSQL en la nube: **Cloud Firestore** y **Realtime Database**. Desde Python podemos trabajar con ambas usando el SDK oficial de administración, `firebase_admin`, algo muy útil para scripts, backends o procesos de carga de datos.

## 1. Crear el entorno virtual e instalar el SDK

```
virtualenv env --python=python3
source env/bin/activate
pip install firebase_admin
```

## 2. Obtener las credenciales

Para autenticarnos necesitamos la clave privada de una cuenta de servicio. En la consola de Firebase, ve a **Configuración del proyecto** / **Cuentas de servicio** y pulsa **Generar nueva clave privada**. Se descargará un fichero JSON; en los ejemplos lo hemos guardado como `firebase-sdk.json` junto al script.

**Importante:** este fichero da acceso completo a tu proyecto, así que no lo subas nunca a un repositorio público.

## 3. Ejemplo con Cloud Firestore

Firestore organiza los datos en colecciones y documentos. En este ejemplo creamos (o sobrescribimos) el documento `test` dentro de la colección `test` y después leemos todos los documentos de la colección:

```
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

firebase_sdk = credentials.Certificate('firebase-sdk.json')
firebase_admin.initialize_app(firebase_sdk)

# Creat Data
db = firestore.client()
doc_ref = db.collection(u'test').document(u'test')
doc_ref.set({
    u'name': u'test',
    u'age': 20,
    u'address': u'test'
})

# Read Data
docs = db.collection(u'test').stream()

for doc in docs:
    print(f'{doc.id} => {doc.to_dict()}')
```

## 4. Ejemplo con Realtime Database

Realtime Database almacena los datos como un gran árbol JSON. Además de las credenciales, hay que indicar la URL de la base de datos (la encontrarás en la sección Realtime Database de la consola):

```
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

firebase_sdk = credentials.Certificate('firebase-sdk.json')
firebase_admin.initialize_app(firebase_sdk, {'databaseURL': 'https://test-6dd4a-default-rtdb.firebaseio.com/'})

ref = db.reference('test')
ref.set({'name': 'test', 'age': 20, 'address': 'test'})

# Read data and print to console
print(ref.get())
```

## ¿Cuál elegir?

Firestore es la opción recomendada para la mayoría de proyectos nuevos, ya que ofrece consultas más potentes y mejor escalabilidad. Realtime Database sigue siendo útil para casos sencillos que necesitan sincronización en tiempo real con muy baja latencia.
