---
title: Trucos con los archivos htaccess
date: 2023/01/12
description: Trucos útiles con el archivo .htaccess de Apache para restringir accesos por IP, proteger con contraseña y redirigir dominios.
tag: htaccess
author: Marlon Falcon Hernandez
---

# Trucos con los archivos htaccess
import Image from 'next/image'

El archivo `.htaccess` permite cambiar la configuración del servidor web Apache para un directorio concreto sin tocar la configuración global. Estos son algunos trucos que uso con frecuencia.

1. Cómo proteger un archivo y permitir la conexión solo desde algunas IP
```
<files index.php>
Order deny,allow
Deny from all
Allow from 192.168.14.33
Allow from 200.42.190.74
</files>
```
2. Proteger un archivo con contraseña
```
<files secure.php="">
AuthType Basic
AuthName "Prompt"
AuthUserFile /home/path/.htpasswd
Require valid-user
</files>
```

3. Proteger un directorio con contraseña
```
resides
AuthType basic
AuthName "This directory is protected"
AuthUserFile /home/path/.htpasswd
AuthGroupFile /dev/null
Require valid-user
```

El archivo `.htpasswd` con los usuarios y contraseñas se puede crear con el comando `htpasswd -c /home/path/.htpasswd usuario`. Conviene guardarlo fuera de la carpeta pública del sitio.

4. Para convertir http://www.tusitio.com en http://tusitio.com, basta con agregar el siguiente código a tu archivo .htaccess.
```
#remover www de la URL
RewriteEngine On
RewriteCond %{HTTP_HOST} ^www.domain.com$ [NC]
RewriteRule ^(.*)$ http://domain.com/$1 [L,R=301]
```

5. Cómo redireccionar un sitio web a otro dominio
```
RewriteCond %{HTTP_HOST} ^pd.com
RewriteRule ^(.*) http://pd.cl/$1 [P]

RewriteCond %{HTTP_HOST} ^www.pd.com
RewriteRule ^(.*) http://www.pd.cl/$1 [P]
```

**Nota:** las directivas `Order`, `Deny` y `Allow` pertenecen a Apache 2.2. En Apache 2.4 se recomienda usar `Require ip`, aunque las antiguas siguen funcionando si el módulo `mod_access_compat` está activo. Además, para que las reglas de reescritura funcionen, el módulo `mod_rewrite` debe estar habilitado.
