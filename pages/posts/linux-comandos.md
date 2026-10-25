---
title: "Comandos para Linux"
date: 2022/12/18
description: "Chuleta de comandos básicos de Linux para administrar un servidor, como SSH, usuarios, disco, servicios, permisos y copia de archivos."
tag: linux
author: Marlon Falcon Hernandez
---

# Comandos para Linux

Esta es una recopilación de los comandos de Linux que más uso en el día a día al administrar servidores (muchos de ellos con Odoo). Los ejemplos están pensados para distribuciones basadas en Debian/Ubuntu.

Copiar nuestra clave pública al servidor para conectarnos por ssh sin contraseña.
```
ssh-copy-id root@159.89.29.1
```

Cambiar la contraseña del usuario actual (root, si hemos entrado como root).
```
passwd
```

Mostrar el espacio del disco duro.
```
df -h
```

Convertirse en superusuario.
```
sudo su
```

Actualizar el sistema operativo.
```
apt-get update && apt-get upgrade -y
```

Crear una carpeta y asignarla al usuario odoo.
```
mkdir /opt/extra-addons
chown odoo: /opt/extra-addons/ -R
```

Editar un fichero con Nano.
```
nano /etc/odoo/odoo.conf
```

Mostrar los procesos que contienen una palabra clave, por ejemplo: chro.
```
ps aux | grep chro
```

Reiniciar un servicio.
```
service odoo restart
```

Detener un servicio.
```
service odoo stop
```

Iniciar un servicio.
```
service odoo start
```

Instalar un programa.
```
apt-get install htop
```

Ver el tamaño de una carpeta.
```
du -hc
du -sh /opt/extra-addons/
```


Ver los recursos del sistema.
```
htop
```

Borrar un directorio (con cuidado: no pide confirmación).
```
sudo rm -r carpeta
```

Generar una clave pública.
```
ssh-keygen
cat ~/.ssh/id_rsa.pub
```


Copiar con scp. El comando scp permite copiar archivos y directorios de un equipo a otro a través de SSH. Por ejemplo, para descargar una carpeta completa de un servidor a nuestro escritorio:
```bash
scp -r root@123.12.12.2:/opt/extra-addons/ Desktop/
```
