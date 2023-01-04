---
title: ▷ Error ssh remote host identification has changed
date: 2023/1/4
description: ▷ Error ssh remote host identification has changed
tag: ssh, error
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Error ssh remote host identification has changed.

Cuando tratamos de conectarnos a un servidor con ssh, y nos aparece el siguiente error:

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

Vamos hacer lo siguiente para resolver el problema:
```bash
marlonfalcon@pc ~ % ssh-keygen -R <IP>
```

Caso real:
```bash
marlonfalcon@pc ~ % ssh-keygen -R 1.198.198.1
```




