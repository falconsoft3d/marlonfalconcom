import { Html, Head, Main, NextScript } from 'next/document';
import { SCRIPT_IDIOMA } from '../lib/idioma';

export default function Document({ __NEXT_DATA__ }) {
  const meta = {
    title: 'Marlon Falcón Hernández | Full Stack Developer'
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
        <meta property="og:site_name" content={meta.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MarlonFalcon4" />
        {__NEXT_DATA__.page !== '/agentes/[token]' && <script defer data-project="dntmjqkfhehnzvutqrrd" src="https://falcondatabase.com/a.js"></script>}
        {/* Aplica el tema guardado antes de pintar (oscuro por defecto); misma clave que next-themes */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var t='dark';try{var s=localStorage.getItem('theme');if(s==='light'||s==='dark'){t=s}else{localStorage.setItem('theme',t)}}catch(e){}var h=document.documentElement;h.classList.toggle('dark',t==='dark');h.style.colorScheme=t})()"
          }}
        />
        {/* Elige el idioma (español o inglés) antes de pintar */}
        <script dangerouslySetInnerHTML={{ __html: SCRIPT_IDIOMA }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>

    </Html>
  )
}
