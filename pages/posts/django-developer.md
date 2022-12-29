---
title: ▷ Desarrollador de Django | ¿Necesitas desarrollar de Django?
date: 2022/12/29
description: ▷ Desarrollador de Django | ¿Necesitas desarrollar de Django?
tag: django, developer
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Desarrollador de Django | ¿Necesitas desarrollar de Django?

Un desarrollador de Django es un profesional de la informática que se especializa en el uso del framework de Django para el desarrollo de aplicaciones web. Django es un marco de código abierto escrito en Python que se utiliza ampliamente para el desarrollo de aplicaciones web robustas y escalables.

Los desarrolladores de Django tienen un conocimiento profundo de Python y de cómo utilizar Django para crear aplicaciones web de alta calidad. Además de tener habilidades de programación sólidas, también deben tener una comprensión profunda de los principios de diseño y arquitectura de software, así como de cómo integrar Django con otras tecnologías y plataformas web.

Un desarrollador de Django típicamente trabaja en un equipo de desarrollo de software y es responsable de la implementación de nuevas funcionalidades y la mejora de las existentes en una aplicación web basada en Django. También pueden ser responsables de la solución de problemas y de la depuración de cualquier error o problema en la aplicación.

Para ser un desarrollador de Django exitoso, es importante tener una buena comprensión de los principios y patrones de diseño de software y saber cómo aplicarlos en el desarrollo de aplicaciones web. También es esencial tener habilidades de comunicación y trabajo en equipo para poder colaborar efectivamente con otros miembros del equipo de desarrollo.

En resumen, un desarrollador de Django es un profesional de la informática altamente cualificado que utiliza el marco de Django para el desarrollo de aplicaciones web de alta calidad. Con una comprensión sólida de Python y de los principios de diseño y arquitectura de software, los desarrolladores de Django son esenciales para el éxito de cualquier proyecto de desarrollo de aplicaciones web.


Ejemplo de como crear una API con Django: https://github.com/django-spain/django_mysql_api

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

# Contacta un Desarrollador de Django
- Nombre: Marlon Falcón Hernández
- WhatsApp [+34662470645](https://web.whatsapp.com/send?phone=34662470645&text=)
- GitHub [@falconsoft3d](https://github.com/falconsoft3d)
- Youtube [@marlonfalconhdez](https://www.youtube.com/@marlonfalconhdez)
- Telegram [@falconsoft]
- Phone +34 (662) 47 0645
- Email mfalconsoft@gmail.com


