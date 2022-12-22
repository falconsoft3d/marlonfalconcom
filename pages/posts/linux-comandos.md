---
title: Comandos para Linux
date: 2022/12/18
description: Comandos para Linux
tag: linux
author: Marlon Falcon Hernandez
---

# Comandos para Linux


Conectarse a un servidor con el comando ssh.
```
ssh-copy-id root@159.89.29.1
```

Cambiamos la contraseña al usuario root.
```
passwd
```

Mostrar espacio del disco duro.
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

Crear una carpeta y dar permiso.
```
mkdir /opt/extra-addons
chown odoo: /opt/extra-addons/ -R
```

Editamos un fichero con Nano.
```
nano /etc/odoo/odoo.conf
```

Mostrar procesos con palabra clave ejemplo: chro
```
ps aux | grep chro
```

Reiniciamos un servicio.
```
service odoo restart
```

Paramos un servicio.
```
service odoo stop
```

Iniciamos un servicio.
```
service odoo start
```

Instalamos un programa
```
apt-get install htop
```

Ver tamaño de una carpeta
```
du -hc
du -sh /opt/extra-addons/
```


Vemos los recursos del sistema
```
htop
```

Borramos un directorio
```
sudo rm -r carpeta
```

Generamos una clave pública.
```
ssh-keygen
cat ~/.ssh/id_rsa.pub
```


Copiar con scp, el comando scp permite copiar archivos y directorios de un equipo a otro. Para copiar un archivo de un equipo a otro, se utiliza el siguiente comando:
```bash
scp -r root@123.12.12.2:/opt/extra-addons/ Desktop/
```
