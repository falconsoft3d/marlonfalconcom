---
title: ▷ Error conexión ssh list of known hosts
date: 2023/02/04
description: ▷ Error conexión ssh list of known hosts
tag: ssh, error
author: Marlon Falcon Hernandez
---

# ▷ Error conexión ssh list of known hosts
Si al intentar conectarte por ssh te aparece el siguiente error, se debe a que ya has conectado anteriormente a ese servidor y no se ha borrado la llave pública del servidor. Para solucionarlo debes borrar la llave pública del servidor.

```bash
Warning: Permanently added '127.127.127.127' (ECDSA) to the list of known hosts.
root@139.59.138.154: Permission denied (publickey).
```


## Solución
Ejecuta el siguiente comando para borrar la llave pública del servidor.
```bash
ssh-keygen -R 127.127.127.127
```

Te mostrará el siguiente mensaje.
```bash
the authenticity of host '127.127.127.127 (127.127.127.127)' can't be established.
ECDSA key fingerprint is SHA256:VksC6V3Fzp7eeQt9t6EO+kUgw9T/F5Xa9bR6XB66lrk.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

Escribe yes y presiona enter.
```bash
Warning: Permanently added '
```
