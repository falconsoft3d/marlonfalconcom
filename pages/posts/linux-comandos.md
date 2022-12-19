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
$ ssh-copy-id root@159.89.29.1
```

Convertirse en superusuario.
```
$ sudo su
```

Actualizar el sistema operativo.
```
$ apt-get update && apt-get upgrade -y
```

Crear una carpeta y dar permiso.
```
$ mkdir /opt/extra-addons
$ chown odoo: /opt/extra-addons/ -R
```

Editamos un fichero con Nano.
```
$ nano /etc/odoo/odoo.conf
```


Reiniciamos un servicio.
```
$ service odoo restart
```

Paramos un servicio.
```
$ service odoo stop
```

Iniciamos un servicio.
```
$ service odoo start
```

Instalamos un programa
```
$ apt-get install htop
```

Vemos los recursos del sistema
```
$ htop
```

Generamos una clave pública.
```
$ ssh-keygen
$ cat ~/.ssh/id_rsa.pub
```