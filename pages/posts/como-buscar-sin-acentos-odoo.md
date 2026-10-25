---
title: Cómo buscar sin acentos ni tildes en Odoo
date: 2024/04/25
description: Activa la extensión unaccent de PostgreSQL para que las búsquedas en Odoo encuentren resultados con y sin tildes.
tag: odoo,posgresql,unaccent
author: Marlon Falcon Hernandez
---

# Cómo buscar sin acentos ni tildes en Odoo

Por defecto, si en Odoo buscamos "camion", no encontraremos registros escritos como "camión". Para que las búsquedas ignoren tildes y acentos, Odoo puede apoyarse en la extensión `unaccent` de PostgreSQL. Estos son los pasos para activarla.

1. Instalamos el paquete que contiene la extensión unaccent en PostgreSQL.
```bash
sudo apt-get install postgresql postgresql-contrib
```

2. Nos conectamos a la base de datos de Odoo.
```bash
sudo su postgres
psql
\c base-datos-odoo
```

3. Creamos la extensión unaccent.
```bash
CREATE EXTENSION IF NOT EXISTS unaccent;
```

4. Verificamos que la extensión unaccent esté instalada.
```bash
SELECT unaccent('hÃ©lÃ¨ne');
```

5. Abrimos el archivo de configuración de Odoo para que busque sin acentos, tildes, etc.
```bash
sudo nano /etc/odoo/odoo.conf
```

6. Agregamos la siguiente línea.
```bash
unaccent = True
```

7. Reiniciamos el sistema.
```bash
reboot
```

## Nota

En lugar de reiniciar todo el servidor, normalmente basta con reiniciar el servicio de Odoo. La extensión debe crearse en cada base de datos en la que quieras usar esta funcionalidad.
