---
title: Linux crontab, tareas programadas
date: 2022/12/20
description: Cómo programar tareas en Linux con crontab, con un ejemplo de un script de Python que se ejecuta cada minuto.
tag: linux, cron
author: Marlon Falcon Hernandez
---

# Linux crontab, tareas programadas
Cron es un servicio de Linux que permite ejecutar tareas programadas de forma automática. Se ejecuta en segundo plano desde que arranca el sistema y lee las tareas definidas en el crontab de cada usuario. Cada línea del crontab indica cuándo se ejecuta un comando con cinco campos: minuto, hora, día del mes, mes y día de la semana.

# Editamos el cron
```  
crontab -e
```  

# Repetimos cada minuto
```  
*/1 * * * * python /home/marlon/Documentos/python/cron/write.py
```  


# Creamos el script
Este script de ejemplo añade una línea con un número aleatorio a un archivo de texto cada vez que se ejecuta, así podemos comprobar que el cron funciona.
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
# Herramientas
Para comprobar o construir expresiones de cron, es muy útil crontab.guru:
```  

https://crontab.guru/#*/1_*_*_*_*
```  
