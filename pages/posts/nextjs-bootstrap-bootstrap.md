---
title: Trabajando con Bootstrap en Next.js
date: 2022/12/21
description: Cómo instalar y usar Bootstrap y los temas de Bootswatch en un proyecto Next.js, incluido el JavaScript de Bootstrap.
tag: nextjs, bootstrap, bootswatch
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# Trabajando con Bootstrap en Next.js
Bootstrap es una librería de CSS que nos permite crear interfaces de usuario de forma rápida y sencilla. En este post vamos a ver cómo podemos trabajar con Bootstrap en Next.js. Bootswatch es una colección de temas gratuitos para Bootstrap que nos permite cambiar el aspecto de la web de forma sencilla.

## Instalación de la librería
```bash
npm i bootstrap bootswatch
```

## Importar el CSS
Tenemos que importar el CSS de Bootstrap:
```js
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
```

Si queremos usar un tema de Bootswatch, importamos su CSS en lugar del de Bootstrap, por ejemplo `bootswatch/dist/darkly/bootstrap.min.css`.

## Configurar _app.js
Luego agregamos el siguiente código en el fichero _app.js. Este ejemplo procede de un proyecto con autenticación, por eso incluye rutas protegidas; lo importante para Bootstrap es la importación del CSS y el `useEffect` que carga el JavaScript de Bootstrap:

```bash
import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { AuthContextProvider } from '../src/context/AuthContext';
import { useRouter } from 'next/router'
import ProtectedRoute from '../src/components/ProtectedRoute'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import React, { useEffect } from 'react';

const noAuthRequired = ['/',
                       '/login',
                       '/404',
                       '/signup']

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <AuthContextProvider>
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </AuthContextProvider>
  )
}

export default MyApp
```

El JavaScript de Bootstrap se carga dentro de `useEffect` porque necesita el objeto `document`, que solo existe en el navegador; si lo importáramos directamente, fallaría durante el renderizado en el servidor.
