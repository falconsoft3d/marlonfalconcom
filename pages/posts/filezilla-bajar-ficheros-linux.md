---
title: ▷ FileZilla para bajar ficheros de Linux
date: 2023/2/20
description: ▷ Cómo descargar archivos de un servidor Linux de forma segura con FileZilla mediante SFTP (SSH), paso a paso.
tag: linux, filezilla
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ FileZilla para bajar ficheros de Linux
FileZilla es un cliente de FTP gratuito y de código abierto que también admite la transferencia de archivos a través de Secure Shell (SSH). Con FileZilla puede descargar archivos de un servidor remoto que admita la conexión SSH, lo que garantiza que la transferencia sea segura y confiable. En este artículo, aprenderá cómo utilizar FileZilla para descargar archivos a través de SSH.

<Image
  src="/images/posts/filezilla.png"
  alt="factura-electronica"
  width={1450}
  height={916}
  priority
  className="next-image"
/>

## Paso 1: descarga e instalación de FileZilla
En primer lugar, debe descargar e instalar FileZilla en su ordenador. Puede descargarlo de forma gratuita desde el sitio web oficial de FileZilla. Una vez que haya descargado el archivo de instalación, ejecute el programa y siga las instrucciones en pantalla para instalar FileZilla en su ordenador.

## Paso 2: conexión SSH
Antes de poder descargar archivos a través de SSH con FileZilla, debe establecer una conexión SSH con el servidor remoto. Para hacer esto, necesitará los detalles de inicio de sesión, como la dirección IP del servidor, el nombre de usuario y la contraseña. Si no tiene estos detalles, comuníquese con el administrador del servidor para obtenerlos.

Una vez que tenga los detalles de inicio de sesión, abra FileZilla y haga clic en "Archivo" en la barra de menú. Seleccione "Gestor de sitios" en el menú desplegable. En el Gestor de sitios, haga clic en "Nuevo sitio" y asigne un nombre al sitio.

A continuación, configure la conexión:

- **Protocolo:** SFTP - SSH File Transfer Protocol.
- **Servidor:** la dirección IP o el dominio del servidor.
- **Puerto:** 22 (el puerto por defecto de SSH), salvo que su servidor use otro.
- **Modo de acceso:** Normal, e introduzca el usuario y la contraseña. Si se conecta con una clave privada, elija "Archivo de claves" e indique la ruta de la clave.

Por último, haga clic en "Conectar". La primera vez, FileZilla le mostrará la huella de la clave del servidor y le preguntará si confía en ella.

## Paso 3: descarga de archivos
Una vez que haya establecido una conexión SSH con el servidor remoto, podrá descargar archivos utilizando FileZilla. En la ventana principal de FileZilla, verá dos paneles: uno que muestra los archivos en su ordenador local y otro que muestra los archivos en el servidor remoto.

Para descargar archivos, simplemente seleccione en el panel del servidor remoto los archivos que desea descargar y arrástrelos al panel de su ordenador local. La transferencia de archivos comenzará automáticamente y podrá ver el progreso de la transferencia en la ventana de estado de FileZilla.

## Conclusión
Utilizar FileZilla para descargar archivos a través de SSH es una manera segura y eficiente de transferir archivos entre su ordenador y un servidor remoto. Al seguir los pasos descritos anteriormente, podrá establecer una conexión SSH con el servidor remoto y descargar archivos fácilmente. Recuerde que para cualquier duda o problema siempre puede acudir a la documentación o a la comunidad de usuarios de FileZilla.

