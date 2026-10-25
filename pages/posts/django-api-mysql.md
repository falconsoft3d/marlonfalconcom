---
title: Django API MySQL
date: 2022/12/20
description: Cómo crear una API REST sencilla con Django y MySQL usando vistas basadas en clases y JsonResponse, con operaciones CRUD.
tag: django, api, mysql
author: Marlon Falcon Hernandez
---

# Django API MySQL

En este post vamos a crear una API REST sencilla con Django y MySQL, sin librerías adicionales: solo vistas basadas en clases y `JsonResponse`. La API permitirá listar, consultar, crear, actualizar y eliminar empresas (CRUD).

## Requisitos previos

Necesitas Python, un servidor MySQL en ejecución y una base de datos creada (en el ejemplo, `django_api`). Instalamos Django y el conector de MySQL, y creamos el proyecto y la app `api`:

```bash
pip install django mysqlclient
django-admin startproject config .
python manage.py startapp api
```

## Configuramos el archivo settings.py

Añadimos la app `api` a `INSTALLED_APPS` y configuramos la conexión a MySQL en `DATABASES`:
```python

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'api',
]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'localhost',
        'PORT' : '3306',
        'USER' : 'root',
        'PASSWORD' : '',
        'NAME': 'django_api',
    }
}


```

**Nota:** en el diccionario `DATABASES`, el servidor de la base de datos se indica con la clave `HOST` (por ejemplo, `'HOST': 'localhost'`); la clave `NAME` es el nombre de la base de datos.

## Configuramos el archivo urls.py del proyecto

Incluimos las rutas de la app bajo el prefijo `api/`:
```python
from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls'))
]
```


## Configuramos el archivo urls.py de la app api

Creamos `api/urls.py` con dos rutas: una para el listado y la creación, y otra con el `id` para consultar, actualizar o eliminar una empresa:
```python
from django.urls import path
from .views import CompanyView

urlpatterns = [
    path('companies/', CompanyView.as_view(), name='companies_list'),
     path('companies/<int:id>', CompanyView.as_view(), name='companies_process')
]
```

## Modificamos el archivo models.py

Definimos el modelo `Company`:
```python
from django.db import models
# Create your models here.
class Company(models.Model):
    name=models.CharField(max_length=50)
    website = models.URLField(max_length=100)
    fondation = models.PositiveIntegerField()
```

Y creamos las tablas en la base de datos con las migraciones:

```bash
python manage.py makemigrations
python manage.py migrate
```

## Creamos el archivo views.py

La vista `CompanyView` implementa un método por cada verbo HTTP (`get`, `post`, `put` y `delete`). El decorador `csrf_exempt` desactiva la protección CSRF para poder hacer peticiones desde clientes externos como Postman:
```python
from django.http import JsonResponse
from django.shortcuts import render
from django.views import View
from .models import Company
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
import json


class CompanyView(View):    
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)
    
    
    def get(self, request, id=0):
        if(id>0):
            companies = list(Company.objects.filter(id=id).values())
            if len(companies) > 0 :
                company = companies[0]
                datos = {'message': "Success", "company": company}
            else:
                datos = {'message': "Company not found..."}
            return JsonResponse(datos)
        else:
            companies = list(Company.objects.values())
            if len(companies) > 0 :
                datos = {'message': "Success", "companies": companies}
            else:
                datos = {'message': "Companies not found..."}
            return JsonResponse(datos)
        
    def post(self, request):
        # print(request.body)
        jd = json.loads(request.body)
        # print(jd)
        Company.objects.create(name=jd['name'], website=jd['website'], fondation=jd['fondation'])
        
        datos = {'message': "Success"}
        return JsonResponse(datos)
    
    def put(self, request, id):
        jd = json.loads(request.body)
        companies = list(Company.objects.filter(id=id).values())
        if len(companies) > 0 :
            company= Company.objects.get(id=id)
            company.name = jd['name']
            company.website = jd['website']
            company.fondation = jd['fondation']
            company.save()
            datos = {'message': "Success"}
        else:
            datos = {'message': "Company not found..."}
        return JsonResponse(datos)
            
        
    
    def delete(self, request, id):
        companies = list(Company.objects.filter(id=id).values())
        if len(companies) > 0 :
            Company.objects.filter(id=id).delete()
            datos = {'message': "Success"}
        else:
            datos = {'message': "Company not found..."}
        return JsonResponse(datos)

```

## Probar la API

Arrancamos el servidor con `python manage.py runserver` y ya podemos probar los endpoints:

- `GET /api/companies/`: lista todas las empresas.
- `GET /api/companies/1`: devuelve la empresa con id 1.
- `POST /api/companies/`: crea una empresa enviando un JSON con `name`, `website` y `fondation`.
- `PUT /api/companies/1`: actualiza la empresa con id 1.
- `DELETE /api/companies/1`: elimina la empresa con id 1.

Este enfoque es ideal para entender cómo funciona una API en Django. Para proyectos más grandes conviene usar Django REST Framework, que aporta serializadores, validación, autenticación y paginación, y evitar `csrf_exempt` en producción en favor de un sistema de autenticación adecuado.
