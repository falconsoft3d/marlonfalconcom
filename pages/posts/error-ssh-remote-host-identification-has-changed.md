---
title: ▷ Error ssh remote host identification has changed
date: 2023/1/4
description: ▷ Qué significa el aviso de SSH "REMOTE HOST IDENTIFICATION HAS CHANGED" y cómo solucionarlo eliminando la clave antigua de known_hosts.
tag: ssh, error
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Error ssh remote host identification has changed.

Cuando nos conectamos por primera vez a un servidor con SSH, el cliente guarda la clave pública del servidor (su "huella" o *fingerprint*) en el fichero `~/.ssh/known_hosts`. En las conexiones siguientes compara la clave que recibe con la guardada y, si no coinciden, bloquea la conexión para protegernos de un posible ataque de intermediario (*man-in-the-middle*).

Esto suele ocurrir de forma legítima cuando se reinstala el servidor, se regeneran sus claves SSH o se reasigna la IP a otra máquina. En ese caso, al intentar conectarnos nos aparece el siguiente error:

```bash
marlonfalcon@pc ~ % ssh root@1.198.198.1
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that a host key has just been changed.
The fingerprint for the ED25519 key sent by the remote host is
SHA256:8hW8kS8tDEMOo4Y/Cx9XT+epsXMg+Rouxi05Vpg.
Please contact your system administrator.
Add correct host key in /Users/marlonfalcon/.ssh/known_hosts to get rid of this message.
Offending ECDSA key in /Users/marlonfalcon/.ssh/known_hosts:434
Host key for 1.198.2.1 has changed and you have requested strict checking.
Host key verification failed
```

## Solución

Vamos a hacer lo siguiente para resolver el problema: eliminar la clave antigua de ese servidor del fichero `known_hosts` con `ssh-keygen -R`, indicando la IP o el nombre del host:

```bash
marlonfalcon@pc ~ % ssh-keygen -R <IP>
```

Caso real:

```bash
marlonfalcon@pc ~ % ssh-keygen -R 1.198.198.1
```

Después volvemos a conectarnos con `ssh`. El cliente nos mostrará la nueva huella y nos preguntará si queremos confiar en ella; al responder `yes` se guardará en `known_hosts` y la conexión funcionará con normalidad.

**Importante:** haz esto solo si sabes por qué ha cambiado la clave del servidor (por ejemplo, porque lo acabas de reinstalar). Si no hay un motivo claro, verifica la huella con el administrador del servidor antes de aceptarla.
