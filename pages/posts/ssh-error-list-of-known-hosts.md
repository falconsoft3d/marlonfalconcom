---
title: ▷ Error conexión SSH list of known hosts
date: 2023/02/04
description: ▷ Cómo eliminar la clave guardada de un servidor en known_hosts con ssh-keygen -R cuando falla la conexión SSH.
tag: ssh, error
author: Marlon Falcon Hernandez
---

# ▷ Error conexión SSH list of known hosts
Cada vez que te conectas por SSH a un servidor, tu equipo guarda la clave de ese servidor (host key) en el archivo `~/.ssh/known_hosts`. Si ya te habías conectado antes a ese servidor y su clave ha cambiado (por ejemplo, porque se reinstaló o porque la IP ahora pertenece a otra máquina), la conexión puede fallar. Para solucionarlo debes borrar la clave guardada de ese servidor.

Este es un ejemplo del error:

```bash
Warning: Permanently added '127.127.127.127' (ECDSA) to the list of known hosts.
root@139.59.138.154: Permission denied (publickey).
```


## Solución
Ejecuta el siguiente comando para borrar del archivo `known_hosts` la clave guardada del servidor (sustituye la IP por la de tu servidor):
```bash
ssh-keygen -R 127.127.127.127
```

Al volver a conectarte, te mostrará el siguiente mensaje:
```bash
the authenticity of host '127.127.127.127 (127.127.127.127)' can't be established.
ECDSA key fingerprint is SHA256:VksC6V3Fzp7eeQt9t6EO+kUgw9T/F5Xa9bR6XB66lrk.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

Escribe yes y presiona Enter. La nueva clave del servidor quedará guardada:
```bash
Warning: Permanently added '
```

## Nota

Si después de esto sigues viendo `Permission denied (publickey)`, el problema no es la clave del servidor sino tu autenticación: comprueba que tu clave pública esté en el archivo `authorized_keys` del servidor y que estés usando el usuario correcto.
