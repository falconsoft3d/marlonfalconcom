---
title: Integrando NextJS con Google Analytics
date: 2022/12/19
description: Integrando NextJS con Google Analytics
tag: nextjs
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# Integrando NextJS con Google Analytics
Google Analytics es una herramienta de analítica web que nos permite medir el tráfico de nuestra página web, es muy útil para conocer el comportamiento de los usuarios en nuestra página web, es muy útil para conocer el origen de los usuarios, el tiempo que pasan en nuestra página web, las páginas que visitan, etc.

# Instalación
En el fichero _app.js agregamos el siguiente código:

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