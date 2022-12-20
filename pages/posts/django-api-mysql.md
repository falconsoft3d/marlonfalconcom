---
title: Django API MySQL
date: 2022/12/20
description: Django API MySQL
tag: django, api, mysql
author: Marlon Falcon Hernandez
---

# Django API MySQL
Creando una API con Django y MySQL

## Configuramos el archivo settings.py
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

## Configuramos las urls.py
```python
from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls'))
]
```


## Configuramos el archivo archivo url de la app api.
```python
from django.urls import path
from .views import CompanyView

urlpatterns = [
    path('companies/', CompanyView.as_view(), name='companies_list'),
     path('companies/<int:id>', CompanyView.as_view(), name='companies_process')
]
```

## Modificamos el archivo models.py
```python
from django.db import models
# Create your models here.
class Company(models.Model):
    name=models.CharField(max_length=50)
    website = models.URLField(max_length=100)
    fondation = models.PositiveIntegerField()
```


## Creamos el archivo views.py
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