---
title: React, cómo trabajar con map
date: 2022/12/20
description: Cómo usar el método map de JavaScript en React para recorrer un arreglo y renderizar una lista o las filas de una tabla.
tag: react
author: Marlon Falcon Hernandez
---

# React, cómo trabajar con map
`map` es un método de los arreglos de JavaScript que nos permite iterar sobre un arreglo y devolver un nuevo arreglo con los elementos transformados, sin modificar el original. En React es la forma más habitual de convertir una lista de datos en una lista de elementos JSX, por ejemplo, las filas de una tabla.

## Ejemplo

En el siguiente código, primero duplicamos cada número de un arreglo. Después guardamos una lista de personas en el estado con `useState` y usamos `map` para generar una fila de la tabla por cada persona:

```js
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);


  const initialState = [
    { id: 1, name: "maria" , lastname: "Falcon"},
    { id: 2, name: "Yoel" , lastname: "Herrera"},
    { id: 3, name: "Raul" , lastname: "Lopez"},
  ]

  const[data, setData] =  useState(initialState)


<Table>
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>lastname</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
                {data.map((item)=>(
                      <tr key={item.id}>
                         <td>{item.id}</td>
                         <td>{item.name}</td>
                         <td>{item.lastname}</td>
                         <td></td>
                      </tr>  
                ))}
            </tbody>
</Table>
```

## La propiedad key

Cada elemento generado con `map` debe llevar una propiedad `key` única (en el ejemplo, `item.id`). React la usa para identificar qué elementos cambian, se añaden o se eliminan, y así actualizar la interfaz de forma eficiente. Si no la incluyes, verás una advertencia en la consola. Evita usar el índice del arreglo como `key` si la lista puede reordenarse o cambiar.
