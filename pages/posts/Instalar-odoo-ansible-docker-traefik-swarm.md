---
title: ▷ Instalar Odoo con Ansible, Docker, Traefik y Swarm
date: 2023/01/12
description: ▷ Despliega Odoo en un clúster Docker Swarm con Traefik como proxy inverso y certificados HTTPS, automatizando el servidor con Ansible.
tag: odoo, traefik, docker, ansible, swarm
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Instalar Odoo con Ansible, Docker, Traefik y Swarm
En este post vamos a instalar Odoo con Ansible, Docker y Traefik en un clúster de Docker Swarm. Odoo es un software de gestión empresarial que permite gestionar todo el ciclo de vida de una empresa: clientes, ventas, compras, inventario, contabilidad, etc. Su edición Community es de código abierto y gratuita, por lo que podemos modificarla según nuestros gustos y necesidades.

En esta arquitectura, cada herramienta tiene un papel:

- **Ansible** automatiza la preparación del servidor (instalación de Docker, inicialización de Swarm, despliegue de servicios).
- **Docker Swarm** orquesta los contenedores de Odoo y PostgreSQL.
- **Traefik** actúa como proxy inverso: enruta cada dominio al servicio correspondiente y obtiene automáticamente los certificados HTTPS de Let's Encrypt.

Repositorio: https://github.com/falconsoft3d/odoo-ansible-docker-traefik-swarm

1. Así quedarán las URLs
````
http://traefik.demo.marlonfalcon.com/dashboard/#/
http://swarm.demo.marlonfalcon.com/
````

2. Creamos el servidor y copiamos la llave pública
````
ssh-copy-id root@1.1.1.1
````

3. Creamos los registros DNS
````
A
cuba.marlonfalcon.com -> 1.1.1.1

CNAME
*.cuba.marlonfalcon.com -> cuba.marlonfalcon.com
````

4. Hacemos el despliegue
````
cd deploy/ansible
ansible-playbook -i inventories/cuba.marlonfalcon.com -e domain_name=cuba.marlonfalcon.com playbook-master.yml
````

5. Instalamos Odoo con Docker
````
version: '3.7'
services:
  app-odoo:
    image: odoo
    environment:
      HOST: db
      PORT: 5432
      USER: odoo
      PASSWORD: odoo
    volumes:
      - app-odoo_filestore:/var/lib/odoo/filestore
    depends_on:
      - db
    networks:
      - app-odoo_net
      - traefik
    deploy:
      replicas: 1
      update_config:
        parallelism: 1
        delay: 2s
      labels:
        swarmpit.service.deployment.autoredeploy: 'true'

        traefik.enable: 'true'
        traefik.http.services.app-odoo.loadbalancer.server.port: '8069'

        traefik.http.routers.app-odoo-http.service: app-odoo
        traefik.http.routers.app-odoo-http.rule: Host(`cuba.marlonfalcon.com`)
        traefik.http.routers.app-odoo-http.entrypoints: http
        traefik.http.routers.app-odoo-http.middlewares: app-odoo-https-redirect
        traefik.http.middlewares.app-odoo-https-redirect.redirectscheme.scheme: https

        traefik.http.routers.app-odoo-https.service: app-odoo
        traefik.http.routers.app-odoo-https.tls: 'true'
        traefik.http.routers.app-odoo-https.tls.certresolver: letsencrypt
        traefik.http.routers.app-odoo-https.rule: Host(`cuba.marlonfalcon.com`)
        traefik.http.routers.app-odoo-https.entrypoints: https

  db:
    image: postgres:13
    environment:
      - POSTGRES_DB=postgres
      - POSTGRES_PASSWORD=odoo
      - POSTGRES_USER=odoo
      - PGDATA=/var/lib/postgresql/data/pgdata
    networks:
      - app-odoo_net
    volumes:
      - app-odoo_data:/var/lib/postgresql/data/pgdata

volumes:
  app-odoo_data:
  app-odoo_filestore:

networks:
  app-odoo_net:
  traefik:
    external: true
````

Con las etiquetas (labels) de `deploy`, Traefik detecta el servicio de Odoo, redirige el tráfico HTTP a HTTPS y solicita el certificado para el dominio indicado. Recuerda cambiar las contraseñas de ejemplo de la base de datos antes de usar este archivo en producción.
