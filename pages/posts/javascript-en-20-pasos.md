---
title: "JavaScript en 20 pasos"
date: 2022/12/18
description: "Repaso rápido de JavaScript con ejemplos de variables, operadores, bucles, funciones, clases, promesas, fetch, async/await, módulos y eventos."
tag: javascript, 20pasos
author: Marlon Falcon Hernandez
---

# JavaScript en 20 pasos
JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, basado en prototipos, imperativo, débilmente tipado y dinámico. Con JavaScript me pasé de los 20 pasos: aquí tienes 27.

## 1. Imprimir en consola
````javascript
console.log('Hola mundo');
````

## 2. Comentarios
````javascript
// Esto es un comentario

/* 
  Esto es un comentario
  de varias líneas
*/
````

## 3. Constantes
````javascript
const PI = 3.1416;
````

## 4. Variables
````javascript
var nombre = 'Juan';
let edad = 20;
````

## 5. Operadores de asignación
````javascript
let d = 10;
d += 2; // 12
d -= 2; // 10
d *= 2; // 20
d %= 6; // 4
````

## 6. Operadores relacionales
````javascript
let a = 10;
let b = 20;
a == b; // False
a != b; // True
````

## 7. Operadores lógicos
````javascript
let a = 10;
let b = 20;
a == 10 && b == 20; // True
a == 10 || b == 20; // True
!a == 10; // False
````


## 8. Operadores de incremento y decremento
````javascript
let a = 10;
a++; // 11
a--; // 10
````

## 9. Ciclo for
````javascript
for (let i = 0; i < 10; i++) {
  console.log(i);
}
````

## 10. Ciclo while
````javascript
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
````

## 11. Map
````javascript
const numeros = [1, 2, 3, 4, 5];
const dobles = numeros.map(function (numero) {
  return numero * 2;
});

console.log(dobles); // [2, 4, 6, 8, 10]
````

## 12. Filter
````javascript
const numeros = [1, 2, 3, 4, 5];
const pares = numeros.filter(function (numero) {
  return numero % 2 == 0;
});


console.log(pares); // [2, 4]
````

## 13. Funciones
````javascript
function sumar(a, b) {
  return a + b;
}

console.log(sumar(1, 2)); // 3
````

## 14. Funciones flecha
````javascript
const sumar = (a, b) => a + b;

console.log(sumar(1, 2)); // 3
````

## 15. Clases
````javascript
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, me llamo ${this.nombre}`);
  }
}

const marlon = new Persona('Marlon', 20);

marlon.saludar(); // Hola, me llamo Marlon
````

## 16. Herencia
````javascript
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, me llamo ${this.nombre}`);
  }
}

class Estudiante extends Persona {
  constructor(nombre, edad, carrera) {
    super(nombre, edad);
    this.carrera = carrera;
  }

  saludar() {
    console.log(`Hola, me llamo ${this.nombre} y estudio ${this.carrera}`);
  }
}


const marlon = new Estudiante('Marlon', 20, 'Ingeniería en Sistemas');

marlon.saludar(); // Hola, me llamo Marlon y estudio Ingeniería en Sistemas
````

## 17. Promesas
````javascript
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promesa resuelta');
  }, 2000);
});

promesa.then((resultado) => {
  console.log(resultado);
});
````


## 18. Fetch
````javascript

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users) => console.log(users));
````

## 19. Async/Await
````javascript

async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  console.log(users);
}

getUsers();
````

## 20. Template strings
````javascript
const nombre = 'Marlon';
const edad = 20;

console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`);
````

## 21. Destructuring
````javascript
const persona = {
  nombre: 'Marlon',
  edad: 20,
  direccion: {
    ciudad: 'La Paz',
    pais: 'Bolivia',
  },
};

const { nombre, edad, direccion: { ciudad } } = persona;

console.log(nombre, edad, ciudad); // Marlon 20 La Paz
````

## 22. Spread operator
````javascript
const frutasVerdes = ['Kiwi', 'Manzana', 'Pera'];
const frutasRojas = ['Fresa', 'Naranja', 'Sandía'];

const todasLasFrutas = [...frutasVerdes, ...frutasRojas];

console.log(todasLasFrutas); // ['Kiwi', 'Manzana', 'Pera', 'Fresa', 'Naranja', 'Sandía']
````


## 23. Importar y exportar módulos
````javascript

// modulo.js
export const nombre = 'Marlon';
export const edad = 20;

// index.js
import { nombre, edad } from './modulo';

console.log(nombre, edad); // Marlon 20
````

## 24. Importar y exportar módulos por defecto
````javascript

// modulo.js
const nombre = 'Marlon';
const edad = 20;

export default {
  nombre,
  edad,
};

// index.js
import persona from './modulo';

console.log(persona.nombre, persona.edad); // Marlon 20
````

## 25. HTML con JavaScript
````javascript
const div = document.createElement('div');
div.innerHTML = 'Hola mundo';

document.body.appendChild(div);
````

## 26. Eventos
````javascript
const button = document.querySelector('button');

button.addEventListener('click', () => {
  console.log('Click');
});
````

## 27. Eventos con parámetros
````javascript
const button = document.querySelector('button');

button.addEventListener('click', (event) => {
  console.log(event);
});
````





