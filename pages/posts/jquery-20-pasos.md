---
title: "jQuery en 20 pasos"
date: 2023/2/20
description: "Aprende lo esencial de jQuery en 20 pasos, con selectores, atributos, estilos, eventos, Ajax, animaciones y recorrido del DOM."
tag: jquery, 20pasos
author: Marlon Falcon Hernandez
---

# jQuery en 20 pasos
jQuery es una librería de JavaScript que nos permite simplificar la forma de interactuar con los elementos del DOM, así como realizar peticiones asíncronas a servidores. En este artículo aprenderemos jQuery en 20 pasos.

## 1. Cargar desde una CDN
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

## 15. Leer y escribir el valor de los formularios
```javascript
// Leer el valor de un input
$('#nombre').val();

// Escribir el valor de un input
$('#nombre').val('Marlon');
```

## 16. Recorrer elementos
```javascript
// Ejecutar una función por cada elemento seleccionado
$('.post').each(function(index) {
  console.log(index, $(this).text());
});
```

## 17. Navegar por el DOM
```javascript
// Buscar elementos descendientes
$('.post').find('p');

// Obtener el elemento padre
$('.post').parent();

// Obtener el ancestro más cercano que coincida con el selector
$('.post').closest('section');
```

## 18. Comprobar y alternar clases
```javascript
// Comprobar si un elemento tiene una clase
$('.post').hasClass('active');

// Agregar la clase si no la tiene o quitarla si la tiene
$('.post').toggleClass('active');
```

## 19. Propiedades y atributos data
```javascript
// Leer y escribir propiedades, por ejemplo en un checkbox
$('#acepto').prop('checked');
$('#acepto').prop('checked', true);

// Leer un atributo data-id
$('.post').data('id');
```

## 20. Petición Ajax completa
```javascript
$.ajax({
  url: 'https://jsonplaceholder.typicode.com/posts/1',
  method: 'GET',
  dataType: 'json'
}).done(function(data) {
  // Código a ejecutar si la petición tiene éxito
}).fail(function(error) {
  // Código a ejecutar si la petición falla
});
```

Con estos 20 pasos tienes una base sólida para trabajar con jQuery. Hoy en día muchas de estas tareas pueden hacerse con JavaScript nativo, pero jQuery sigue presente en muchísimos proyectos, entre ellos en partes del frontend de Odoo.
