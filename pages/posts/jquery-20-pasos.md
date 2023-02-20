---
title: JQuery en 20 pasos
date: 2023/2/20
description: JQuery en 20 pasos
tag: jquery, 20pasos
author: Marlon Falcon Hernandez
---

# JQuery en 20 pasos
JQuery es una librería de JavaScript que nos permite simplificar la forma de interactuar con los elementos del DOM, así como realizar peticiones asíncronas a servidores. En este acrticulo aprenderemos Jquery en 20 pasos ...

## 1. Leer desde una CDN
```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
```

## 2. Ejecutar código cuando el DOM esté listo
```javascript
$(document).ready(function() {
  // Código a ejecutar cuando el DOM esté listo
});
```

## 3. Seleccionar elementos
```javascript
// Seleccionar todos los elementos con la clase .post
$('.post');

// Seleccionar el primer elemento con la clase .post
$('.post').first();

// Seleccionar el último elemento con la clase .post
$('.post').last();

// Seleccionar el elemento con el id #post-1
$('#post-1');

// Seleccionar el elemento con el atributo name="post"
$('[name="post"]');
```

## 4. Leer y escribir atributos
```javascript
// Leer el valor del atributo src
$('img').attr('src');

// Escribir el valor del atributo src
$('img').attr('src', 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png');
```

## 5. Leer y escribir contenido
```javascript
// Leer el contenido de un elemento
$('.post').html();

// Escribir el contenido de un elemento
$('.post').html('<h1>Titulo</h1>');
```

## 6. Leer y escribir estilos
```javascript
// Leer el valor de un estilo
$('.post').css('color');

// Escribir el valor de un estilo
$('.post').css('color', 'red');
```

## 7. Agregar y eliminar clases
```javascript
// Agregar una clase
$('.post').addClass('active');

// Eliminar una clase
$('.post').removeClass('active');
```

## 8. Agregar y eliminar elementos
```javascript
// Agregar un elemento
$('.post').append('<p>Contenido</p>');

// Eliminar un elemento
$('.post').remove();
```

## 9. Agregar y eliminar eventos
```javascript
// Agregar un evento
$('.post').on('click', function() {
  // Código a ejecutar cuando se haga click en el elemento
});

// Eliminar un evento
$('.post').off('click');
```

## 10. Ajax
```javascript
// Realizar una petición GET
$.get('https://jsonplaceholder.typicode.com/posts', function(data) {
  // Código a ejecutar cuando la petición se complete
});

// Realizar una petición POST
$.post('https://jsonplaceholder.typicode.com/posts', {
  title: 'Titulo',
  body: 'Contenido',
  userId: 1
}, function(data) {
  // Código a ejecutar cuando la petición se complete
});
```


## 11. Animaciones
```javascript
// Animar un elemento
$('.post').animate({
  opacity: 0.25,
  left: '+=50',
  height: 'toggle'
}, 5000, function() {
  // Código a ejecutar cuando la animación se complete
});
```

## 12. Efectos
```javascript
// Mostrar un elemento
$('.post').show();

// Ocultar un elemento
$('.post').hide();

// Mostrar u ocultar un elemento
$('.post').toggle();
```

## 13. Efectos de deslizamiento
```javascript
// Deslizar un elemento hacia abajo
$('.post').slideDown();

// Deslizar un elemento hacia arriba
$('.post').slideUp();

// Deslizar un elemento hacia arriba o hacia abajo
$('.post').slideToggle();
```

## 14. Efectos de desvanecimiento
```javascript
// Desvanecer un elemento
$('.post').fadeOut();

// Desvanecer un elemento
$('.post').fadeIn();


// Desvanecer un elemento
$('.post').fadeToggle();
```