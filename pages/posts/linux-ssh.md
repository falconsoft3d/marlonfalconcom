---
title: Comandos para usar SSH en Linux
date: 2022/12/18
description: Comandos básicos para generar claves SSH, copiarlas a un servidor y abrir puertos con ufw en Linux.
tag: linux,ssh
author: Marlon Falcon Hernandez
---

# Comandos para usar SSH en Linux

SSH (Secure Shell) es el protocolo estándar para conectarse de forma segura a servidores remotos. Usar claves en lugar de contraseñas es más cómodo y más seguro. Estos son los comandos que uso con más frecuencia.

## Generar una clave SSH

Generamos el par de claves y mostramos la clave pública, que es la que se comparte con los servidores:
```
ssh-keygen
cat ~/.ssh/id_rsa.pub
```

## Ver la clave privada

Si necesitamos consultar la clave privada (por ejemplo, para configurarla en otra herramienta de confianza):
```
ssh-keygen
cat ~/.ssh/id_rsa
```

La clave privada nunca debe compartirse ni subirse a repositorios.

## Copiar la clave pública al servidor

Copiamos nuestra clave pública al servidor para poder entrar sin contraseña:
```
ssh-copy-id root@159.89.29.1
```

## Agregar una clave manualmente al servidor

Si no tenemos `ssh-copy-id`, podemos pegar la clave pública en el archivo `authorized_keys` del servidor:
```
nano .ssh/authorized_keys
```

## Abrir los puertos en el servidor

Por último, abrimos con ufw los puertos que necesitemos (en este ejemplo, los de la web, Odoo y otros servicios):
```
ufw allow 80,8069,8072,62222,3010,3014/tcp
```

Asegúrate de que el puerto de SSH también esté permitido antes de activar el firewall, para no perder el acceso al servidor.
