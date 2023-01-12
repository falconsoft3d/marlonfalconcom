---
title: Trucos con los archivos htaccess
date: 2023/01/12
description: Trucos con los archivos htaccess
tag: htaccess
author: Marlon Falcon Hernandez
---

# Trucos con los archivos htaccess
import Image from 'next/image'

1. Como proteger un archivo y solo permitir algunos IP la conexion
```
<files index.php>
Order deny,allow
Deny from all
Allow from 192.168.14.33
Allow from 200.42.190.74
</files>
```
2. Proteger un directorio con contraseña
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

4. Para convertir http://www.tusitio.com en http://tusitio.com, basta con agregar el siguiente código a tu archivo .htaccess.
```
#remover www de la URL
RewriteEngine On
RewriteCond %{HTTP_HOST} ^www.domain.com$ [NC]
RewriteRule ^(.*)$ http://domain.com/$1 [L,R=301]
```

5. Cómo redireccionar un sitio web a otro www
```
RewriteCond %{HTTP_HOST} ^pd.com
RewriteRule ^(.*) http://pd.cl/$1 [P]

RewriteCond %{HTTP_HOST} ^www.pd.com
RewriteRule ^(.*) http://www.pd.cl/$1 [P]
```
