---
title: Odoo error bus unavailable
date: 2022/12/18
description: Odoo error bus unavailable
tag: odoo, nginx, odoo-error
author: Marlon Falcon Hernandez
---
# Odoo error bus unavailable

Configuramos el fichero de configuración de Odoo ERP.
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

Configuramos el fichero de configuración de Nginx.
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
