---
title: Postgresql remoto desde local con pgadmin
date: 2023/01/13
description: Postgresql remoto desde local con pgadmin
tag: postgresql, pgadmin
author: Marlon Falcon Hernandez
---

# Postgresql remoto desde local con pgadmin

1. Accedemos a la siguiente ruta:

```bash
nano /etc/postgresql/10/main/postgresql.conf
listen_addresses = '*'
```

2. Modificamos el fichero g_hba.conf
```bash
nano /etc/postgresql/10/main/pg_hba.conf 
local all all peer
```

```bash
# IPv4 local connections:
host    all             all             127.0.0.1/32            md5
host    all             all             213.94.10.53/32         md5
host    all             all             137.184.129.0/32        md5
host    all             all             83.59.221.55/32         md5
host    all             all             172.17.0.3/32           md5
```

3. Si no tienes la contraseña de postgresql lo puedes establecer de la siguiente forma.
```bash
sudo -u postgres psql
\password postgres
\q
```