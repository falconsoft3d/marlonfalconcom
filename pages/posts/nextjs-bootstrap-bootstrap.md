---
title: Trabajando con Bootstrap en NextJS
date: 2022/12/21
description: Trabajando con Bootstrap en NextJS
tag: nextjs, bootstrap, bootswatch
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# Trabajando con Bootstrap en NextJS
Bootstrap es una librería de CSS que nos permite crear interfaces de usuario de forma rápida y sencilla. En este post vamos a ver como podemos trabajar con Bootstrap en NextJS. bootswatch es una librería de Bootstrap que nos permite usar temas de Bootstrap de forma sencilla.

Instalación de la librería
```bash
npm i bootstrap bootswatch
```

Tenemo que importar el css
```js
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
```

Luego agregamos el siguiente código en el fichero _app.js

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

