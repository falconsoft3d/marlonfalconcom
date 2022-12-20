---
title: Instalar Odoo 16 ERP
date: 2022/12/18
description: Cómo instalar Odoo ERP 16.
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

Nos creamos una cuenta en [Digital Ocean](https://m.do.co/c/7f5c3af8d6bb). Nos logueamos en [Digital Ocean](https://m.do.co/c/7f5c3af8d6bb). Nos creamos una instancia de Ubuntu 20.04. Nos conectamos a la instancia de Ubuntu 20.04.
```
https://m.do.co/c/7f5c3af8d6bb
```

Actualizamos el sistema operativo.
```
apt-get update && apt-get upgrade -y
```

Instalamos Odoo 16
```
wget -O - https://nightly.odoo.com/odoo.key | apt-key add -
echo "deb http://nightly.odoo.com/16.0/nightly/deb/ ./" >> /etc/apt/sources.list
apt-get update && apt-get install odoo
```

Instalamos librerias complementarias
```
apt-get install node-less
```

Instalamos Nginx
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

Creamos carpeta para los archivos de odoo
```
mkdir /opt/extra-addons
chown odoo: /opt/extra-addons/ -R
```

Creamos carpeta para respaldos
```
mkdir /opt/backup
chown odoo: /opt/backup/ -R
```

Instalamos wkhtmltopdf
```
sudo apt-get update -y
sudo apt-get install -y xfonts-75dpi
wget https://github.com/wkhtmltopdf/wkhtmltopdf/releases/download/0.12.5/wkhtmltox_0.12.5-1.focal_amd64.deb
dpkg -i wkhtmltox_0.12.5-1.focal_amd64.deb
apt install -f
```

Configuramos Odoo ERP.
```
nano /etc/odoo/odoo.conf
limit_time_real = 360
```

Comando para reiniciar Odoo.
```
service odoo restart
```

Comando para ver le log de odoo.
```
tail -f /var/log/odoo/odoo-server.log
```

Generamos la clave publica
```
ssh-keygen
cat ~/.ssh/id_rsa.pub
```

Instalamos certificado digital.
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


Actualizamos Odoo ERP.
```
/etc/init.d/odoo stop
su - odoo -s /bin/bash
odoo -d db11-spain -u all --stop-after-init --logfile=/dev/stdout
/etc/init.d/odoo start
```