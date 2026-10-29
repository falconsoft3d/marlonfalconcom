import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'

// Idioma del sitio. Los artículos (/posts) solo existen en español.
// El idioma inicial lo fija el script de _document.js en <html lang> antes de pintar:
// el que eligió el usuario o, si no eligió, inglés cuando el navegador está en inglés y español en el resto.

export const IDIOMAS = ['es', 'en']
const CLAVE = 'lang'

const IdiomaContext = createContext({ lang: 'es', setLang: () => {} })

export function IdiomaProvider({ children }) {
  // El HTML estático está en español: se hidrata en español y luego se cambia
  const [lang, setLangActual] = useState('es')
  const [listo, setListo] = useState(false)

  useEffect(() => {
    setLangActual(document.documentElement.lang === 'en' ? 'en' : 'es')
    setListo(true)
  }, [])

  // Con el idioma ya aplicado se muestra la página (ver .lang-pending en main.css)
  useEffect(() => {
    if (listo) document.documentElement.classList.remove('lang-pending')
  }, [listo])

  const setLang = useCallback((siguiente) => {
    if (!IDIOMAS.includes(siguiente)) return
    document.documentElement.lang = siguiente
    try {
      localStorage.setItem(CLAVE, siguiente)
    } catch (e) {}
    setLangActual(siguiente)
  }, [])

  return <IdiomaContext.Provider value={{ lang, setLang }}>{children}</IdiomaContext.Provider>
}

export const useIdioma = () => useContext(IdiomaContext)

// Devuelve la traducción de un valor { es, en }; cualquier otro valor se devuelve tal cual
export const tr = (valor, lang) =>
  valor && typeof valor === 'object' && !Array.isArray(valor) && 'es' in valor ? valor[lang] ?? valor.es : valor

// Para MDX: <Texto es="Hola" en="Hello" />
export function Texto({ es, en }) {
  const { lang } = useIdioma()
  return <>{lang === 'en' ? en : es}</>
}

// Para MDX: bloques de markdown que solo se muestran en un idioma
export function Solo({ idioma, children }) {
  const { lang } = useIdioma()
  return lang === idioma ? <>{children}</> : null
}

// Script que se ejecuta antes de pintar. Los buscadores siempre ven la versión en español.
export const SCRIPT_IDIOMA =
  "(function(){var l='es';try{var s=localStorage.getItem('" +
  CLAVE +
  "');if(s==='es'||s==='en'){l=s}else if(!/bot|crawl|spider|slurp|lighthouse/i.test(navigator.userAgent)){var n=(navigator.languages&&navigator.languages[0])||navigator.language||'';if(/^en\\b/i.test(n))l='en'}}catch(e){}var h=document.documentElement;h.lang=l;if(l==='en'){h.classList.add('lang-pending');setTimeout(function(){h.classList.remove('lang-pending')},2000)}})()"
