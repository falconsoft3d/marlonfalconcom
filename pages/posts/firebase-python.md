---
title: Firebase con Python
date: 2022/12/18
description: Firebase con Python
tag: firebase, python
author: Marlon Falcon Hernandez
---

# Firebase con Python

Creamos el entorno virtual

```
virtualenv env --python=python3
source env/bin/activate
pip install firebase_admin
```

Con firestore-db
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

Con realtime-db
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
