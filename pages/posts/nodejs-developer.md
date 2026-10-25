---
title: ▷ Desarrollador de Node.js | ¿Necesitas un desarrollador de Node.js?
date: 2022/12/29
description: ▷ Qué hace un desarrollador de Node.js, qué conocimientos necesita y un ejemplo de servidor con Express y plantillas EJS.
tag: nodejs, developer
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Desarrollador de Node.js | ¿Necesitas un desarrollador de Node.js?

Un desarrollador de Node.js es un profesional de la informática que se especializa en el uso del lenguaje de programación JavaScript y el entorno de ejecución Node.js. Node.js es un entorno de código abierto, basado en el motor V8 de Chrome, que permite ejecutar JavaScript en el servidor y a los desarrolladores crear aplicaciones web escalables y de alto rendimiento.

Un desarrollador de Node.js trabaja en el diseño y la implementación de aplicaciones web y servicios en línea utilizando Node.js. También puede trabajar en la integración de aplicaciones con bases de datos y otras herramientas de software.

Para convertirse en un desarrollador de Node.js, es necesario tener una sólida comprensión de JavaScript y otras tecnologías web. También es importante tener habilidades de programación y capacidad de resolución de problemas. Los desarrolladores de Node.js a menudo trabajan en equipos y deben tener habilidades de colaboración y comunicación efectivas.

En la actualidad, Node.js es una tecnología muy demandada en el mundo de la informática y la industria de las aplicaciones web. Muchas empresas están buscando desarrolladores de Node.js experimentados para crear aplicaciones web de alta calidad y de alto rendimiento. Si estás interesado en convertirte en un desarrollador de Node.js, es importante adquirir experiencia y conocimientos en JavaScript y otras tecnologías web relevantes. También puedes considerar obtener un título en informática o completar una certificación en desarrollo de Node.js para demostrar tus habilidades y conocimientos.

## Ejemplo de código en Node.js

A continuación, un ejemplo sencillo de servidor con Express que incluye middlewares, rutas que devuelven JSON y texto, archivos estáticos y una vista renderizada con el motor de plantillas EJS.

```js
index.js 
```

```js
const express = require('express');
const morgan = require('morgan')
const app = express();

// Settings
app.set('appName','Marlon Node')
app.set('port', 3000)
app.set('view engine', 'ejs')

// Middleware
function logger(req, res, next) {
    console.log('Request recived');
    next();
}
app.use(express.json());
app.use(morgan('dev'));
app.use(logger);



// Routes
app.get('/', (req, res)=>{
    const data = [{ name: 'john' }, { name: 'joe' }, { name: 'cameron' }]
    res.render('index.ejs', {people: data});
});

app.use(express.static('public'));



app.get('/user', (req, res)=>{
    res.json({
        username: 'Cameron',
        lastname: 'Howe'
    })
});

app.post('/user:id', (req, res)=>{
    console.log(req.body);
    console.log(req.params)
    res.send('POST REQUEST RECEIVED');
});

app.get('/about', (req, res)=>{
    res.send('About me')
});

app.get('/contact', (req, res)=>{
    res.send('Contact')
});

app.get('/test', (req, res)=>{
    res.send('<h1>Test</h1>')
});

app.listen(app.get('port'), ()=>{
    console.log(app.get('appName'));
    console.log('Server on port: ' + app.get('port'));
})
```

````
index.ejs
````

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EJS Template</title>
</head>
<body>

    <h1>
        EJS 
    </h1>

    <ul>
    <% people.forEach(function (person){ %>
            <li> <%=  person.name %>  </li>
    <% }) %>

    <% %>
    </ul>
</body>
</html>
```

Ver más: https://github.com/nodejs-usa/express-nodejs-hola-mundo


# Contacta con un desarrollador de Node.js
- Nombre: Marlon Falcón Hernández
- WhatsApp [+34662470645](https://web.whatsapp.com/send?phone=34662470645&text=)
- GitHub [@falconsoft3d](https://github.com/falconsoft3d)
- Youtube [@marlonfalconhdez](https://www.youtube.com/@marlonfalconhdez)
- Telegram [@falconsoft]
- Teléfono +34 (662) 47 0645
- Email mfalconsoft@gmail.com

