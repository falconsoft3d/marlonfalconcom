import 'nextra-theme-blog/style.css'
import Head from 'next/head'
import '../styles/main.css'
import Script from 'next/script';
import WhatsappLink from '../components/WhatsappLink';
import SiteHeader from '../components/SiteHeader';
import { Analytics } from '@vercel/analytics/react';
import { useRouter } from 'next/router';
import { IdiomaProvider, useIdioma } from '../lib/idioma';

// Valores por defecto: cada página los sustituye desde su <Head>, que aquí sí se deduplica (en _document saldrían repetidos)
const META = {
  title: 'Marlon Falcón Hernández | Full Stack Developer',
  description: 'Desarrollador de Odoo y Python, con experiencia en desarrollo web y móvil.',
  image: 'https://www.marlonfalcon.com/images/marlon_yellow2.png'
}

// Rutas de artículos: solo existen en español
const ARTICULOS = ['/posts/', '/odoo-espana', '/odoo-programa-gestion-construccion']

function AvisoSoloEspanol() {
  const { pathname } = useRouter()
  const { lang } = useIdioma()
  if (lang !== 'en' || !ARTICULOS.some((ruta) => pathname.startsWith(ruta))) return null
  return <p className="solo-es">This article is only available in Spanish.</p>
}

export default function Nextra({ Component, pageProps }) {
  // La URL de una sala de agentes lleva su token: no pasa por analítica ni chats de terceros
  const { pathname } = useRouter()
  if (pathname === '/agentes/[token]') {
    return (
      <IdiomaProvider>
        <Component {...pageProps} />
      </IdiomaProvider>
    )
  }

  return (
    <IdiomaProvider>
      <Head>
        <meta name="description" content={META.description} />
        <meta key="og:title" property="og:title" content={META.title} />
        <meta key="og:description" property="og:description" content={META.description} />
        <meta key="og:image" property="og:image" content={META.image} />
        <meta key="twitter:title" name="twitter:title" content={META.title} />
        <meta key="twitter:description" name="twitter:description" content={META.description} />
        <meta key="twitter:image" name="twitter:image" content={META.image} />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>

      <WhatsappLink />

      <Analytics />

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-232389777-1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-232389777-1');
        `}
      </Script>

      <Script id="tawk_api" strategy="afterInteractive">
         {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/6240cbda0bfe3f4a876ff347/1fv6hojqp';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
        `}
        </Script>
      <SiteHeader />
      <AvisoSoloEspanol />
      <Component {...pageProps} />
    </IdiomaProvider>
  )
}
