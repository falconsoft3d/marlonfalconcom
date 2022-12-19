import 'nextra-theme-blog/style.css'
import Head from 'next/head'
import '../styles/main.css'
import Script from 'next/script';
import WhatsappLink from '../components/WhatsappLink';
import { MyFooter } from '../components/MyFooter';

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Head>
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
      
      
      <Component {...pageProps} />
      
    </>
  )
}
