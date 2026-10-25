---
title: Integrando Next.js con Google Analytics
date: 2022/12/19
description: Cómo añadir Google Analytics 4 a una aplicación Next.js usando el componente Script en el archivo _app.js.
tag: nextjs
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# Integrando Next.js con Google Analytics
Google Analytics es una herramienta de analítica web que nos permite medir el tráfico de nuestra página web. Es muy útil para conocer el comportamiento de los usuarios: de dónde vienen, cuánto tiempo pasan en el sitio, qué páginas visitan, etc.

# Instalación
Antes de nada, necesitamos crear una propiedad de Google Analytics 4 y obtener su ID de medición, que tiene el formato `G-xxxxxxxxxx`.

En el fichero _app.js agregamos el siguiente código, sustituyendo `G-xxxxxxxxxx` por nuestro ID:

```js
import React from 'react';
import Script from 'next/script';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-xxxxxxxxxx"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-xxxxxxxxxx');
        `}
      </Script>

      <Component {...pageProps} />
    </>
  );
};

export default App;
```

Con la estrategia `afterInteractive`, el script se carga después de que la página sea interactiva, para no afectar al rendimiento inicial. Una vez desplegado el sitio, podemos comprobar que todo funciona en el informe "Tiempo real" de Google Analytics.
