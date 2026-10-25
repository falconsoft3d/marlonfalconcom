---
title: Creamos un servidor web con Ruby
date: 2022/12/18
description: Cómo levantar en segundos un servidor HTTP local con Ruby para servir los archivos estáticos de una carpeta.
tag: ruby, tools
author: Marlon Falcon Hernandez
---

# Creamos un servidor web con Ruby

A veces necesitamos servir rápidamente los archivos de una carpeta (una página HTML, unas imágenes, un build estático) sin instalar ni configurar Nginx o Apache. Ruby trae en su librería estándar un pequeño servidor HTTP que podemos lanzar con una sola línea.

## 1. Instalamos Ruby

En Debian/Ubuntu:

```
apt install ruby
```

Podemos comprobar la instalación con `ruby -v`.

## 2. Ejecutamos el servidor

Nos situamos en la carpeta que queremos servir y ejecutamos:

```
ruby -run -ehttpd . -p8000
```

- `-run` carga la librería `un`, que incluye utilidades de línea de comandos.
- `-ehttpd .` arranca el servidor sirviendo el directorio actual.
- `-p8000` indica el puerto.

Después abrimos el navegador en `http://localhost:8000` y veremos el contenido de la carpeta. Para detener el servidor basta con pulsar `Ctrl + C`.

## Nota

Este servidor está pensado para desarrollo y pruebas locales. Para producción conviene usar un servidor web completo como Nginx o Apache.

En versiones recientes de Ruby (3.0 en adelante) WEBrick ya no viene incluido por defecto; si el comando da error, instálalo con `gem install webrick`.
