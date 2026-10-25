---
title: Comandos Django
date: 2022/12/18
description: Chuleta con los comandos básicos de Django - entorno virtual, proyectos, apps, migraciones, traducciones y conexión a MySQL o PostgreSQL.
tag: django
author: Marlon Falcon Hernandez
---

# Comandos Django

Django es uno de los frameworks web más populares de Python. Incluye ORM, panel de administración, sistema de migraciones y muchas utilidades de línea de comandos a través de `django-admin` y `manage.py`. Aquí tienes los comandos que más uso al empezar un proyecto.

## Creamos el entorno virtual

```
virtualenv env --python=python3
source env/bin/activate
```

## Instalamos Django

```
pip install django
```

## Creamos un proyecto

```
django-admin startproject demo1
python3 demo1/manage.py runserver
```

## Hacemos las migraciones

```
python3 manage.py migrate
python3 manage.py makemigrations
python3 manage.py runserver
python3 manage.py collectstatic
```

- `makemigrations` genera los archivos de migración a partir de los cambios en los modelos.
- `migrate` aplica esas migraciones a la base de datos.
- `runserver` arranca el servidor de desarrollo.
- `collectstatic` reúne los archivos estáticos en la carpeta definida en `STATIC_ROOT`.

## Creamos una app

```
python3 demo1/manage.py startapp usuarios
```

Recuerda añadir la nueva app a `INSTALLED_APPS` en el archivo `settings.py`.

## Comandos para traducciones

```
python3 manage.py makemessages -l 'es'
django-admin.py compilemessages
```

En versiones recientes de Django, el script `django-admin.py` ya no existe; usa `django-admin compilemessages` o `python3 manage.py compilemessages`.

## Comando para crear un superusuario

```
python3 manage.py createsuperuser
```

## Configuramos MySQL

```
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

Para MySQL necesitarás instalar un conector, por ejemplo `pip install mysqlclient`.

## Configuramos PostgreSQL

```
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'db_clientportal',
        'HOST': 'localhost',
        'USER' : 'odoo',
        'PASSWORD' : 'x1234567890',
        'PORT' : 5432
    }
}
```

Para PostgreSQL necesitarás `pip install psycopg2-binary`. En versiones modernas de Django el motor se indica como `django.db.backends.postgresql`.
