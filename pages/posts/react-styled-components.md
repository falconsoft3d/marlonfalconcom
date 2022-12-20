---
title: React Styled Components
date: 2022/12/20
description: React Styled Components
tag: react
author: Marlon Falcon Hernandez
---

# React Styled Components
Styled Components es una librería de React que nos permite crear componentes estilizados. Para usar Styled Components se debe usar la siguiente sintaxis:


Instalamos la librería en nuestro proyecto:
```bash
npm i @emotion/styled @emotion/react
```

Creamos un archivo .js y agregamos el siguiente código:
```js
import styled from "@emotion/styled";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`

function App() {
  return (
    <Contenedor>
      <Header titulo="Cotizador de seguro"/>
      <ContenedorFormulario>
                  <h1> Demo </h1>
      </ContenedorFormulario>
    </Contenedor>
    
  );
}

export default App;
```
