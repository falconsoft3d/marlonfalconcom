---
title: Como buscar sin acentos tildes y con en Odoo
date: 2024/04/25
description: Como buscar sin acentos tildes y con en Odoo
tag: odoo,posgresql,unaccent
author: Marlon Falcon Hernandez
---

# Como buscar sin acentos tildes y con en Odoo

1. Instalamos el paquete unaccent en postgresql.
```bash
sudo apt-get install postgresql postgresql-contrib
```

2. Nos conectamos a la base de datos de Odoo.
```bash
sudo su postgres
psql
\c base-datos-odoo
```

3. Creamos la extension unaccent
```bash
CREATE EXTENSION IF NOT EXISTS unaccent;
```

4. Verificamos que la extension unaccent este instalada
```bash
SELECT unaccent('hÃ©lÃ¨ne');
```

5. Abrimos el archivo de configuración de odoo para que busque sin acentos, tildes, etc.
```bash
sudo nano /etc/odoo/odoo.conf
```

6. Agregamos la siguiente linea
```bash
unaccent = True
```

7. Reiniciamos el sistema
```bash
reboot
```


