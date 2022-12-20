---
title: Comandos para compactar archivos en Linux
date: 2022/12/20
description: Comandos para compactar archivos en Linux
tag: linux
author: Marlon Falcon Hernandez
---

# Comandos para compactar archivos en Linux

La compactación de archivos es una forma de reducir el tamaño de un archivo, lo que permite que se transfiera más rápido y ocupe menos espacio en el disco. En Linux, podemos usar los siguientes comandos para comprimir y descomprimir archivos.

Archivos .tar.gz:
```
Comprimir: tar -czvf empaquetado.tar.gz /carpeta/a/empaquetar/
Descomprimir: tar -xzvf archivo.tar.gz
```

Archivos .tar:
```
Empaquetar: tar -cvf paquete.tar /dir/a/comprimir/
Desempaquetar: tar -xvf paquete.tar
```

Archivos .gz:
```
Comprimir: gzip -9 index.php
Descomprimir: gzip -d index.php.gz
```


Archivos .zip:
```
Comprimir: zip archivo.zip carpeta
Descomprimir: unzip archivo.zip
```