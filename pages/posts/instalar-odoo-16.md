---
title: Instalar Odoo 16 ERP
date: 2022/12/18
description: Guía paso a paso para instalar Odoo 16 en un servidor Ubuntu con Nginx, wkhtmltopdf y certificado SSL de Let's Encrypt.
tag: odoo
author: Marlon Falcon Hernandez
---

# Instalar Odoo 16 ERP
import Image from 'next/image'

<Image
  src="/images/posts/instalar_odoo_16.png"
  alt="odoo9"
  width={1280}
  height={720}
  priority
  className="next-image"
/>

En esta guía instalamos Odoo 16 en un servidor Ubuntu 20.04 usando los paquetes oficiales de Odoo, con Nginx como proxy inverso, wkhtmltopdf para los informes en PDF y un certificado SSL gratuito de Let's Encrypt. Todos los comandos se ejecutan como usuario root (o con `sudo`).

## 1. Crear el servidor

Nos creamos una cuenta en [DigitalOcean](https://m.do.co/c/7f5c3af8d6bb) e iniciamos sesión. Creamos una instancia (*droplet*) de Ubuntu 20.04 y nos conectamos a ella por SSH.
```
https://m.do.co/c/7f5c3af8d6bb
```

## 2. Actualizar el sistema operativo
```
apt-get update && apt-get upgrade -y
```

## 3. Instalar Odoo 16

Añadimos el repositorio oficial de Odoo 16 e instalamos el paquete. Este instala también PostgreSQL y crea el servicio `odoo`:
```
wget -O - https://nightly.odoo.com/odoo.key | apt-key add -
echo "deb http://nightly.odoo.com/16.0/nightly/deb/ ./" >> /etc/apt/sources.list
apt-get update && apt-get install odoo
```

## 4. Instalar librerías complementarias
```
apt-get install node-less
```

## 5. Instalar y configurar Nginx

Nginx actúa como proxy inverso delante de Odoo. Clonamos mi configuración base, la dejamos como sitio por defecto y editamos el `server_name` para poner nuestro dominio y la IP del servidor:
```
sudo apt-get install nginx -y
cd /etc/nginx/sites-available
git clone https://github.com/falconsoft3d/ngix-para-odoo-erp/
cd ngix-para-odoo-erp/
sudo cp /etc/nginx/sites-available/ngix-para-odoo-erp/default.conf /etc/nginx/sites-available/default.conf
cd ..
mv default default-temp
mv default.conf default

cd /etc/nginx/sites-available
nano default
server_name j.wemakeyourdayeasy.com 11.64.123.12;
nginx -s reload
```

## 6. Crear la carpeta para los módulos adicionales

Aquí guardaremos los módulos propios o de terceros (recuerda añadir la ruta al `addons_path` de `odoo.conf`):
```
mkdir /opt/extra-addons
chown odoo: /opt/extra-addons/ -R
```

## 7. Crear la carpeta para las copias de seguridad
```
mkdir /opt/backup
chown odoo: /opt/backup/ -R
```

## 8. Instalar wkhtmltopdf

Odoo lo necesita para generar los informes en PDF:
```
sudo apt-get update -y
sudo apt-get install -y xfonts-75dpi
wget https://github.com/wkhtmltopdf/wkhtmltopdf/releases/download/0.12.5/wkhtmltox_0.12.5-1.focal_amd64.deb
dpkg -i wkhtmltox_0.12.5-1.focal_amd64.deb
apt install -f
```

## 9. Configurar Odoo ERP

En el fichero de configuración ajustamos, por ejemplo, el tiempo máximo de ejecución de una petición:
```
nano /etc/odoo/odoo.conf
limit_time_real = 360
```

## 10. Reiniciar Odoo
```
service odoo restart
```

## 11. Ver el log de Odoo
```
tail -f /var/log/odoo/odoo-server.log
```

## 12. Generar la clave pública SSH

Útil, por ejemplo, para añadirla como *deploy key* en GitHub y clonar repositorios privados de módulos:
```
ssh-keygen
cat ~/.ssh/id_rsa.pub
```

## 13. Instalar el certificado SSL

Instalamos Certbot y generamos el certificado para el dominio configurado en Nginx. Después, dentro de Odoo, ajustamos los parámetros del sistema para que la URL base use `https` y no se sobrescriba:
```
sudo apt-get update
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
sudo apt-get install python3-certbot-nginx
sudo certbot --nginx
-A
- 2
Dentro de Odoo configuras los parámetros.
Configuración > Parámetros > Parámetros del sistema

web.base.url
http -> https

web.base.url.freeze
Tru
```

**Nota:** el valor correcto del parámetro `web.base.url.freeze` es `True`.

## 14. Actualizar Odoo ERP

Para actualizar todos los módulos de una base de datos, detenemos el servicio, ejecutamos la actualización como usuario `odoo` y volvemos a arrancarlo:
```
/etc/init.d/odoo stop
su - odoo -s /bin/bash
odoo -d db11-spain -u all --stop-after-init --logfile=/dev/stdout
/etc/init.d/odoo start
```

Con esto ya tienes Odoo 16 funcionando en tu servidor, accesible por HTTPS desde tu dominio.
