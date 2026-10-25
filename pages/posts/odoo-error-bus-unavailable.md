---
title: Odoo error bus unavailable
date: 2022/12/18
description: Cómo resolver el error "bus unavailable" de Odoo configurando el puerto de longpolling y Nginx como proxy inverso.
tag: odoo, nginx, odoo-error
author: Marlon Falcon Hernandez
---
# Odoo error bus unavailable

El error **bus unavailable** suele aparecer cuando Odoo se ejecuta con workers (modo multiproceso) detrás de un proxy como Nginx. En ese modo, las notificaciones en tiempo real (chat, avisos, etc.) no las atiende el puerto principal 8069, sino un proceso aparte que escucha en el puerto de longpolling (8072 por defecto). Si el proxy no redirige las peticiones de `/longpolling` a ese puerto, el bus de Odoo deja de funcionar.

La solución tiene dos partes: configurar Odoo y configurar Nginx.

## 1. Configuración de Odoo

Editamos el fichero de configuración de Odoo ERP:
````
nano /etc/odoo/odoo.conf
````

````
proxy_mode = True
longpolling_port = 8072
xmlrpc_port = 8069
xmlrpc_interface = 127.0.0.1
netrpc_interface = 127.0.0.1

workers = 17
limit_time_real = 1200
limit_time_cpu = 600
````

Lo importante aquí es activar `proxy_mode`, definir el `longpolling_port` y tener `workers` mayor que 0.

## 2. Configuración de Nginx

Editamos el fichero de configuración de Nginx:
````
cd /etc/nginx/sites-available
nano default
````

````
upstream odoo{
        server localhost:8069;
}

upstream odoochat {
        server localhost:8072;
}

server {
        listen 80 default;
        server_name erp.yourdomain.com 52.67.84.113;
        keepalive_timeout           600;
        client_header_timeout       600;
        client_max_body_size 200M;
        client_body_timeout         600;
        proxy_connect_timeout       600;
        proxy_send_timeout          600;
        proxy_read_timeout          600;
        send_timeout                600;

        root /usr/share/nginx/html;
        index index.html index.htm;

        proxy_buffers 16 64k;
        proxy_buffer_size 128k;

        location / {
            proxy_pass  http://odoo;
            proxy_next_upstream error timeout invalid_header http_500 http_502 http_503 http_504;
            proxy_redirect off;
            proxy_set_header    Host            $host;
            proxy_set_header    X-Real-IP       $remote_addr;
            proxy_set_header    X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header    X-Forwarded-Proto https;
            # invento mio
            proxy_set_header   X-ODOO_DBFILTER db;
            proxy_pass_request_headers on;
        }
        location /longpolling {
            proxy_pass http://odoochat;
        }
}

````

La clave está en el bloque `location /longpolling`, que envía esas peticiones al upstream `odoochat` (puerto 8072). Después de guardar, comprueba la configuración con `nginx -t` y reinicia Nginx y Odoo.

**Nota:** a partir de Odoo 16, el longpolling se sustituyó por websockets. En esas versiones el parámetro se llama `gevent_port` y la ruta que hay que redirigir es `/websocket`, añadiendo además las cabeceras de Upgrade y Connection.
