---
title: Comandos Django
date: 2022/12/18
description: Comandos Django
tag: django
author: Marlon Falcon Hernandez
---

# Comandos Django

Creamos el entorno virtual

```
virtualenv env --python=python3
source env/bin/activate
```

Instalamos Django
```
pip install django
```

Cremos un proyecto
```
django-admin startproject demo1
python3 demo1/manage.py runserver
```


Hacemos la migraciones
```
python3 manage.py migrate
python3 manage.py makemigrations
python3 manage.py runserver
python3 manage.py collectstatic
```

Cremos una app
```
python3 demo1/manage.py startapp usuarios
```

Comando para traducciones
```
python3 manage.py makemessages -l 'es'
django-admin.py compilemessages
```


Comando para crear un super usuario
```
python3 manage.py createsuperuser
```

Configuramos MySQL
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

Configuramos POSTGRESQL
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