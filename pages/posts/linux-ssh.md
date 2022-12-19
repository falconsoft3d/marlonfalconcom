---
title: Comandos para usar ssh en Linux
date: 2022/12/18
description: Comandos para usar ssh en Linux
tag: linux,ssh
author: Marlon Falcon Hernandez
---

# Comandos para usar ssh en Linux

Generamos una clave ssh.
```
ssh-keygen
cat ~/.ssh/id_rsa.pub
```

Copiamos la clave privada.
```
ssh-keygen
cat ~/.ssh/id_rsa
```

Copiar una clave al servidor ssh.
```
ssh-copy-id root@159.89.29.1
```

Agregar una clave manualmente al servidor.
```
nano .ssh/authorized_keys
```

Abrimos los puertos en el servidor.
```
ufw allow 80,8069,8072,62222,3010,3014/tcp
```