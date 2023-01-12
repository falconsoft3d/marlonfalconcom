---
title: Maildev enviar email prueba nodejs
date: 2023/01/13
description: Maildev enviar email prueba nodejs
tag: email, nodejs
author: Marlon Falcon Hernandez
---

# Maildev enviar email prueba nodejs

```
sudo apt install -y npm
sudo npm install -g maildev
maildev --ip=127.0.0.1
```

```
maildev --outgoing-host smtp.gmail.com \
          --outgoing-secure \
          --outgoing-user you@gmail.com \
          --outgoing-pass x1234567890  --ip=127.0.0.1
```