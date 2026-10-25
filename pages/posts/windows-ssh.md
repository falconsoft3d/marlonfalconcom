---
title: Creando una clave pública SSH en Windows
date: 2022/12/19
description: Cómo generar un par de claves SSH en Windows con ssh-keygen y localizar la clave pública para usarla en servidores o Git.
tag: windows,ssh
author: Marlon Falcon Hernandez
---

# Creando una clave pública SSH en Windows

Las claves SSH permiten conectarte a servidores o a servicios como GitHub y GitLab sin escribir una contraseña cada vez. Se generan en pares: una clave **privada**, que nunca debe salir de tu equipo, y una clave **pública**, que es la que copias en el servidor o servicio. Windows 10 y 11 incluyen el cliente OpenSSH, así que podemos hacerlo desde PowerShell o CMD.

## 1. Generar la clave

Generamos una clave SSH. El asistente te preguntará dónde guardarla (por defecto en la carpeta `.ssh` de tu usuario) y si quieres protegerla con una frase de contraseña.
```
ssh-keygen
```

## 2. Abrir la clave pública

Abrimos la clave pública (cambia `mfalc` por tu nombre de usuario de Windows):
```
notepad C:\Users\mfalc/.ssh/id_rsa.pub.
```

Sería algo así:
```
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAasasCclXfYLLbnxzYPHTD+mapv1jlu+RUQ+DxDKBY8XAsIP9WhtxU1pYSX1IdLxvg4u9BWLD3aqHr1jc2fA15q3sdy94urMzPikaqnWoEn83xMUHj1NywSH7yio7J5TB614uE7BVl5KLN9jgR/kqN77Y5VJsasCLu0HsHxwn/6Rm3LFiWb9bwL+IFfxPgu7GMUZqEENjA4CMiC/TbCcjdnwxElURnGINoCE77WtatIasas222Sl6QdC9qiCvzXErGmK5KMZpS/FHAzWbJljWVbi4Emrhlcgi7IviizI3FFjRhaJG/+foaBJf0Rj+BIGqqVvIHhmdZ2EJK5A4WJ2aMpIx4b/Q3+xbYu9ElyUlHbNmW7paboUBzAvRno1UaWtrt0KbV67y2diJsciQIU7rJsCAjHi6ZakYVY/mORMD2G16F6i0KWSn9eedTCxsfPuZtMlCoWtYlTQuE/5+CESFhWdeEOWFpNTYSLFwbgxKc9tLKc+WEHI5nkfYXSEvzbcr2RzMk= mfalc@LAPTOP-VMPJQTRU
```

## 3. Usar la clave

Copia todo el contenido del archivo `.pub` y pégalo donde corresponda: en el archivo `~/.ssh/authorized_keys` del servidor o en la sección de claves SSH de GitHub, GitLab, etc.

**Importante:** comparte solo el archivo `.pub`. El archivo `id_rsa` (sin extensión) es tu clave privada y no debe enviarse a nadie.
