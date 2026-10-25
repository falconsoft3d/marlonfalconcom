---
title: Odoo Error locale es-ES is not loaded from moment locales
date: 2023/11/05
description: Cómo solucionar en Odoo el error "locale es-ES is not loaded from moment locales" modificando la función loadLocale de moment.js.
tag: odoo, odoo-error, error
author: Marlon Falcon Hernandez
---
# Odoo Error locale es-ES is not loaded from moment locales

Este error aparece en el navegador cuando la librería moment.js, que Odoo usa para formatear fechas, no encuentra la configuración regional (locale) del idioma del usuario, en este caso `es-ES`. En mi caso lo resolví modificando este archivo:
````
addons/web/static/lib/moment/moment.js
````

Se agrega esta línea de código en la línea 1837:
````
if (locales[name] === undefined) locales[name] = locales['en']; 
````

Quedando así:
````
function loadLocale(name) {
    var oldLocale = null;
    // TODO: Find a better way to register and load all the locales in Node
    if (!locales[name] && (typeof module !== 'undefined') &&
            module && module.exports) {
        try {
            oldLocale = globalLocale._abbr;
            var aliasedRequire = require;
            aliasedRequire('./locale/' + name);
            getSetGlobalLocale(oldLocale);
        } catch (e) {}
    }
    
    if (locales[name] === undefined) locales[name] = locales['en'];

    return locales[name];
}
````


Con este cambio, si moment.js no encuentra el idioma solicitado, utiliza el inglés como alternativa en lugar de lanzar el error.

**Nota:** al tratarse de un archivo del núcleo de Odoo, este cambio se perderá si actualizas el código fuente, así que tenlo en cuenta en futuras actualizaciones.

Créditos:
````
https://www.odoo.com/es_ES/forum/ayuda-1/locale-locale-it-is-not-loaded-from-moment-locales-209850
````