import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const meta = {
    title: 'Marlon Falcón Hernández | Full Stack Developer',
    description: 'Desarrollador de Odoo y Python, con experiencia en desarrollo web y móvil.',
    image: 'https://marlonfalcon.com/images/marlon_yellow2.png'
  }

  return (
    <Html lang="es">
      <Head>
        <meta name="robots" content="follow, index" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#a8cfe3" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MarlonFalcon4" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {/* Aplica el tema guardado antes de pintar (oscuro por defecto); misma clave que next-themes */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var t='dark';try{var s=localStorage.getItem('theme');if(s==='light'||s==='dark'){t=s}else{localStorage.setItem('theme',t)}}catch(e){}var h=document.documentElement;h.classList.toggle('dark',t==='dark');h.style.colorScheme=t})()"
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>

    </Html>
  )
}
