---
title: React como trabajar con map
date: 2022/12/20
description: React como trabajar con map
tag: react
author: Marlon Falcon Hernandez
---

# React como trabajar con map
Map es una función que nos permite iterar sobre un arreglo y devolver un nuevo arreglo con los elementos modificados. Para usar map se debe usar la siguiente sintaxis:

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