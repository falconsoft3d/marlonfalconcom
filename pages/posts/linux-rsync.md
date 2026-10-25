---
title: Linux rsync
date: 2022/12/20
description: Qué es rsync y ejemplos para copiar y sincronizar archivos entre tu equipo y un servidor remoto por SSH.
tag: linux
author: Marlon Falcon Hernandez
---

# Linux rsync

El comando **linux rsync** es una herramienta rápida y muy versátil para copiar archivos de forma local o remota. Así lo describe su página de ayuda (`man rsync`). Este comando permite realizar una copia exacta de un archivo o directorio, en este último caso con todos los elementos que contiene (subcarpetas y archivos), conservando sus permisos y propiedades.

Una de las ventajas más interesantes de este comando es que puede comprobar las dos rutas y actualizar solo los archivos nuevos y los que han cambiado de una ruta a otra. Si el comando se interrumpe antes de concluir, basta con ejecutarlo de nuevo y detectará qué archivos faltaron para continuar donde se interrumpió.

# Copiar archivos a un servidor
Copia todos los archivos `.sql` a la carpeta `/root` del servidor (`-a` modo archivo, `-v` detallado, `-t` conserva las fechas):
```
rsync -avt *.sql root@157.230.8.181:/root
```

# Descargar desde un servidor con clave .pem
Descarga un archivo de un servidor (por ejemplo, una instancia de AWS) a la carpeta actual, mostrando el progreso:
```
rsync --info=progress2 -e "ssh -i fu.pem" ubuntu@ec2-52-14-123-58.us-east-2.compute.amazonaws.com:/opt/odoo/backups/06_13_2019_01_49_55_1le.zip .
```

# Subir un archivo
```
rsync --info=progress2 revisar_clientes.py  root@167.12.93.111:/opt/odoo/revisar_clientes.py
```

# Subir un archivo usando otro puerto SSH
```
rsync --info=progress2 clientes.py -e "ssh -p 61022" root@server.okitup.net:/opt/odoo/clientes.py
```
