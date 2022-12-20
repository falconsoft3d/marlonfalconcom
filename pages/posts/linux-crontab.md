---
title: Linux crontab tareas programadas
date: 2022/12/20
description: Linux crontab tareas programadas
tag: linux
author: Marlon Falcon Hernandez
---

# Linux crontab tareas programadas
El crontab es un servicio que permite ejecutar tareas programadas en Linux. El crontab se ejecuta en segundo plano y se ejecuta cada vez que el sistema operativo se inicia. El crontab se ejecuta cada minuto y se ejecuta cada vez que el sistema operativo se inicia.

# Editamos el cron
```  
crontab -e
```  

# Repetimos cada 1 minutos
```  
*/1 * * * * python /home/marlon/Documentos/python/cron/write.py
```  


# Creamos el script
```  
# -*- coding: utf-8 -*-

from random import randrange

f = open('/home/marlon/Documentos/python/cron/holamundo.txt','a')
f.write('\n' + 'Hola Mundo: ' + str(randrange(1000)) )
f.close()
```  

# Reiniciamos el servicio
```  
service cron restart

```  
# Tools
```  

https://crontab.guru/#*/1_*_*_*_*
```  