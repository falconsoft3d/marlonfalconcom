---
title: React Styled Components
date: 2022/12/20
description: Cómo crear componentes estilizados en React con la técnica de styled components usando la librería Emotion.
tag: react
author: Marlon Falcon Hernandez
---

# React Styled Components

Los styled components permiten crear componentes de React que ya llevan sus estilos incluidos, escribiendo CSS directamente en JavaScript. Los estilos quedan encapsulados en cada componente, por lo que no hay conflictos de nombres de clases. En este ejemplo usamos `@emotion/styled`, cuya API es prácticamente igual a la de la librería styled-components.

## 1. Instalación

Instalamos la librería en nuestro proyecto:
```bash
npm i @emotion/styled @emotion/react
```

## 2. Crear los componentes estilizados

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

Cada llamada a `styled.div` crea un componente que renderiza un `div` con los estilos indicados. Después los usamos en el JSX como cualquier otro componente.

## Nota

En el ejemplo, `Header` es un componente propio del proyecto que debe importarse desde su archivo. Si prefieres la librería original, instálala con `npm i styled-components` e impórtala con `import styled from "styled-components"`; el resto del código es igual.
