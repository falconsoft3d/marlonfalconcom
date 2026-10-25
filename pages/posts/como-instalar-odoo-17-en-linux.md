---
title: ▷ Cómo instalar Odoo 17 en Linux
date: 2023/10/18
description: ▷ Guía paso a paso para instalar Odoo 17 Community en Ubuntu 22.04 con PostgreSQL, wkhtmltopdf y Nginx.
tag: odoo, erp, instalar
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Cómo instalar Odoo 17 en Linux
Lo primero que necesitas es un servidor (VPS); aquí te dejo un enlace para que te crees uno en DigitalOcean: https://m.do.co/c/7f5c3af8d6bb. Necesitas tener Python 3.10: Ubuntu 22.04 lo trae por defecto, así que trata de usar esa versión. A continuación, sigue estos pasos.

## 1. Actualizamos el sistema
```linux
apt-get update && apt-get upgrade -y
```

## 2. Creamos el usuario odoo

```linux
adduser --system --home=/opt/odoo --group odoo
```

## 3. Instalamos PostgreSQL
```linux
sudo apt install postgresql postgresql-contrib
```

## 4. Reiniciamos PostgreSQL, iniciamos sesión como postgres y creamos el usuario odoo en la base de datos
```linux
service postgresql restart
su - postgres
createuser --createdb --username postgres --no-createrole --no-superuser --pwprompt odoo
exit
```

## 5. Instalamos unzip
```linux
apt-get install unzip
```

## 6. Instalamos pip para las dependencias Python de Odoo
```linux
apt install python3-pip
```

## 7. Ingresamos en la carpeta /opt/odoo y descargamos el código fuente de la versión Community
```linux
cd /opt/odoo/
wget https://github.com/odoo/odoo/archive/17.0.zip
unzip 17.0.zip
```

## 8. Renombramos la carpeta y asignamos el propietario al usuario odoo
```linux
mv odoo-17.0 server
chown -R odoo: server
```

## 9. Instalamos las dependencias de Python de Odoo
```linux
sudo apt-get update
sudo apt-get install libpq-dev python3.10-dev
pip install -r /opt/odoo/server/requirements.txt
```


Si al instalar las librerías te da problemas, copia y pega este código para instalar las librerías necesarias, o instálalas una por una.
```linux
pip install Babel==2.9.1  # min version = 2.6.0 (Focal with security backports)
pip install chardet==4.0.0
pip install cryptography==3.4.8
pip install decorator==4.4.2
pip install docutils==0.17
pip install ebaysdk==2.1.5
pip install freezegun==1.1.0
pip install geoip2==2.9.0
pip install gevent==21.8.0 ; python_version == '3.10'  # (Jammy)
pip install gevent==22.10.2; python_version > '3.10'
pip install greenlet==1.1.2 ; python_version == '3.10'  # (Jammy)
pip install greenlet==2.0.2 ; python_version > '3.10'
pip install idna==2.10  # requests 2.25.1 depends on idna<3 and >=2.5
pip install Jinja2==3.0.3 ; python_version <= '3.10'
pip install Jinja2==3.1.2 ; python_version > '3.10'
pip install libsass==0.20.1
pip install lxml==4.8.0 ; python_version <= '3.10'
pip install lxml==4.9.2 ; python_version > '3.10'
pip install MarkupSafe==2.0.1 ; python_version <= '3.10'
pip install MarkupSafe==2.1.2 ; python_version > '3.10'
pip install num2words==0.5.10
pip install ofxparse==0.21
pip install passlib==1.7.4 # min version = 1.7.2 (Focal with security backports)
pip install Pillow==9.0.1 ; python_version <= '3.10'  # min version = 7.0.0 (Focal with security backports)
pip install Pillow==9.4.0 ; python_version > '3.10'
pip install polib==1.1.1
pip install psutil==5.9.0 ; python_version <= '3.10'
pip install psutil==5.9.4 ; python_version > '3.10'
pip install psycopg2==2.9.2 ; sys_platform != 'win32' and python_version <= '3.10'
pip install psycopg2==2.9.5 ; python_version > '3.10' or sys_platform == 'win32'
pip install pydot==1.4.2
pip install pyopenssl==21.0.0
pip install PyPDF2==1.26.0 ; python_version <= '3.10'
pip install PyPDF2==2.12.1 ; python_version > '3.10'
pip install pypiwin32 ; sys_platform == 'win32'
pip install pyserial==3.5
pip install python-dateutil==2.8.1
pip install python-ldap==3.4.0 ; sys_platform != 'win32'  # min version = 3.2.0 (Focal with security backports)
pip install python-stdnum==1.17
pip install pytz  # no version pinning to avoid OS perturbations
pip install pyusb==1.2.1
pip install qrcode==7.3.1
pip install reportlab==3.6.8 ; python_version <= '3.10'
pip install reportlab==3.6.12 ; python_version > '3.10'
pip install requests==2.25.1 # versions < 2.25 aren't compatible w/ urllib3 1.26. Bullseye = 2.25.1. min version = 2.22.0 (Focal)
pip install rjsmin==1.1.0
pip install urllib3==1.26.5 # indirect / min version = 1.25.8 (Focal with security backports)
pip install vobject==0.9.6.1
pip install Werkzeug==2.0.2
pip install xlrd==1.2.0
pip install XlsxWriter==3.0.2
pip install xlwt==1.3.*
pip install zeep==4.1.0
```

## 10. Creamos un directorio para almacenar el archivo de logs
```linux
mkdir /var/log/odoo/
chown odoo:root /var/log/odoo
```

## 11. Configuramos Odoo Server
```linux
mkdir /etc/odoo
cp /opt/odoo/server/debian/odoo.conf /etc/odoo/odoo.conf
chown odoo: /etc/odoo/odoo.conf
chmod 640 /etc/odoo/odoo.conf
```

## 12. Creamos la carpeta de los addons o módulos personalizados
```linux
mkdir /opt/odoo/server/extra-addons
chown odoo: /opt/odoo/ -R
```

## 13. Editamos el archivo odoo.conf
```linux
nano /etc/odoo/odoo.conf
```

## 14. Modificamos o agregamos lo siguiente y guardamos el archivo
Si no tienes módulos en extra-addons, no añadas esa ruta a `addons_path`; de lo contrario, te dará problemas.

```linux
db_user = odoo
db_password = CLAVE DEL USUARIO  ODOO EN POSTGRES
addons_path = /opt/odoo/server/addons
logfile = /var/log/odoo/odoo-server.log
logrotate = True
log_level = warn
```

## 15. Script de inicio automático de Odoo Server

```linux
cp /opt/odoo/server/debian/init /etc/init.d/odoo
chmod 755 /etc/init.d/odoo
chown root: /etc/init.d/odoo
```

## 16. Editamos el archivo

```linux
nano /etc/init.d/odoo
```

## 17. Modificamos los siguientes valores y guardamos el archivo

```linux
DAEMON=/opt/odoo/server/odoo-bin
```

## 18. Hacemos que Odoo se inicie automáticamente al reiniciar el servidor
```linux
update-rc.d odoo defaults
```

## 19. Hacemos que PostgreSQL se inicie automáticamente al reiniciar el servidor
```linux
update-rc.d postgresql enable
```

## 20. Gestionamos el servicio
```linux
/etc/init.d/odoo start|stop|restart
```

## 21. Editamos el archivo de configuración de PostgreSQL pg_hba.conf

```linux
nano /etc/postgresql/14/main/pg_hba.conf
```
Editamos la siguiente línea

```linux
local   all             all        peer

*Sustituimos por:

local   all             all       trust
```

**Nota de seguridad:** el método `trust` permite conectarse a PostgreSQL sin contraseña desde el propio servidor. Es cómodo para una instalación de pruebas, pero en producción es preferible mantener `peer` o usar `md5`/`scram-sha-256` con contraseña.

## 22. Reiniciamos los servicios de PostgreSQL y Odoo
```linux
service postgresql restart
/etc/init.d/odoo restart
```


## 23. Instalamos la librería wkhtmltopdf

Odoo usa wkhtmltopdf para generar los informes en PDF (facturas, pedidos, etc.).

```linux
sudo apt-get update -y
sudo apt-get install -y xfonts-75dpi
wget https://github.com/wkhtmltopdf/wkhtmltopdf/releases/download/0.12.5/wkhtmltox_0.12.5-1.focal_amd64.deb
dpkg -i wkhtmltox_0.12.5-1.focal_amd64.deb
apt install -f
```

## 24. Reiniciamos Odoo ERP

```linux
/etc/init.d/odoo restart
```

## 25. Revisamos el log

```linux
tail -f /var/log/odoo/odoo-server.log
```

## 26. Instalamos Nginx

Nginx actúa como proxy inverso delante de Odoo, de modo que podemos acceder por el puerto 80/443 con nuestro dominio. En el archivo de configuración hay que indicar el dominio y la IP de tu servidor en `server_name`.
```linux
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

## 27. Si queremos instalar Enterprise (para ello tenemos que ser partner de Odoo)
```linux
ssh-keygen
cat ~/.ssh/id_rsa.pub

cd /opt/odoo/server/extra-addons
git clone git@github.com:odoo/enterprise.git
cd enterprise
git checkout 17.0
nano /etc/odoo/odoo.conf
addons_path = /opt/odoo/server/addons,/opt/odoo/server/extra-addons/enterprise
```

## 28. Prueba local
Si Odoo no arranca, con este comando puedes ver la causa en la terminal. La más probable es que no tengas instaladas las librerías de Python.
```linux
su - odoo -s /bin/bash
cd /opt/odoo/server
./odoo-bin -c /etc/odoo/odoo.conf
```