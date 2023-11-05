---
title: Odoo Error locale es-ES is not loaded from moment locales
date: 2023/11/05
description: Odoo Error locale es-ES is not loaded from moment locales
tag: odoo, odoo-error, error
author: Marlon Falcon Hernandez
---
# Odoo Error locale es-ES is not loaded from moment locales

Este error ocurre porque no encuenta el idioma en odoo, en mi caso resolvi modificando este achivo:
````
addons/web/static/lib/moment/moment.js
````

Se agrega esta linea de código en la línea 1837:
````
if (locales[name] === undefined) locales[name] = locales['en']; 
````

Quedando asi:
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


Creditos:
````
https://www.odoo.com/es_ES/forum/ayuda-1/locale-locale-it-is-not-loaded-from-moment-locales-209850
````