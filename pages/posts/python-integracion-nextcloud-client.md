---
title: Python integración nextcloud client
date: 2022/12/18
description: Python integración nextcloud client
tag: python, integraciones
author: Marlon Falcon Hernandez
---

# Python integración nextcloud client
Nextcloud client es una aplicación que nos permite sincronizar archivos y carpetas de nuestro equipo con nuestro servidor Nextcloud.

## Instalación
Instalación para Python
Python >= 2.7 or Python >= 3.5
```
pip install pyncclient
```

## Script Python
```
import nextcloud_client
nc = nextcloud_client.Client('https://nextcloud.love.com')
nc.login('admin', 'yourpassword')
nc.put_file('Demo/bd.zip', 'bd.zip')
link_info = nc.share_file_with_link('Demo/bd.zip')
print("Here is your link: " + link_info.get_link())
```