---
title: Docker instalar odoo 16 erp
date: 2022/12/18
description: Docker instalar odoo 16 erp
tag: docker, odoo
author: Marlon Falcon Hernandez
---

# Docker instalar odoo 16 erp

Odoo es un software ERP de código abierto que permite a las empresas gestionar sus procesos de negocio de forma integral. Odoo es una plataforma de software de código abierto que permite a las empresas gestionar sus procesos de negocio de forma integral. Odoo es una plataforma de software de código abierto que permite a las empresas gestionar sus procesos de negocio de forma integral.

Para instalar odoo 16 en docker solo debemos ejecutar los siguientes comandos:

Instalamos Docker y Docker Compose
```yml
apt-get update && apt-get upgrade -y
apt  install docker.io docker-compose -y
```

Clonamos el repositorio y ejecutamos el docker-compose desde el repo de marlon
```yml
git clone https://github.com/falconsoft3d/docker-odoo-16.git
cd docker-odoo-16
docker-compose up -d
```