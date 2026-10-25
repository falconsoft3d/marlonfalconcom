---
title: Node.js Odoo RPC
date: 2022/12/18
description: Cómo conectarse a Odoo desde Node.js por XML-RPC con la librería odoo-xmlrpc y leer registros de contactos.
tag: nodejs, odoo, rpc
author: Marlon Falcon Hernandez
---

# Node.js Odoo RPC

Odoo expone una API externa por XML-RPC que permite leer, crear, modificar y eliminar registros desde cualquier lenguaje. Desde Node.js podemos usarla fácilmente con la librería `odoo-xmlrpc`. En este ejemplo nos conectamos a una base de datos de Odoo y leemos los contactos activos (`res.partner`).

## Instalación

Instalamos odoo-xmlrpc:

```
npm install odoo-xmlrpc
```

## Conexión y lectura de registros

Creamos un archivo con el siguiente código, ajustando la URL, el puerto, la base de datos y las credenciales a nuestro entorno:

```
var Odoo = require('odoo-xmlrpc');

var odoo = new Odoo({
    url: '127.0.0.1',
    port: 8069,
    db: 'db14-spain',
    username: 'admin',
    password: 'x1234567890'
});

odoo.connect(function (err) {
    if (err) { return console.log(err); }
    console.log('Connected to Odoo server.');
    var inParams = [];
    inParams.push([['active', '=', true]]);
    var params = [];
    params.push(inParams);

    // 1- Login
    odoo.connect(function (err) {
        if (err) { return console.log(err); }
        console.log('Connected to Odoo server.');    
    });
    
    // 4- Read
    odoo.execute_kw('res.partner', 'search', params, function (err, value) {
        if (err) { return console.log(err); }
        var inParams = [];
        inParams.push(value); //ids
        inParams.push(['name', 'website', 'email', 'lang']);
        var params = [];
        params.push(inParams);
        
        odoo.execute_kw('res.partner', 'read', params, function (err2, value2) {
            if (err2) { return console.log(err2); }
            console.log('Result: ', value2);
        });
    });    
});
```

El método `search` devuelve los IDs de los contactos que cumplen el dominio indicado (en este caso, los activos) y, a continuación, `read` obtiene los campos que le pedimos de esos registros. Del mismo modo podemos usar `create`, `write` o `unlink` para crear, modificar o eliminar registros.
