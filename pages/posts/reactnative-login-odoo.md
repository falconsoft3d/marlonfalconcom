---
title: Cómo hacer login en Odoo con React Native
date: 2022/12/20
description: Cómo autenticar a un usuario de Odoo desde una app de React Native usando la API JSON-RPC.
tag: reactnative, expo, odoo
author: Marlon Falcon Hernandez
---

# Cómo hacer login en Odoo con React Native

En este post vamos a ver cómo hacer login en Odoo con React Native. Odoo expone una API JSON-RPC en la ruta `/jsonrpc`, y el servicio `common` incluye el método `login`, que recibe la base de datos, el usuario y la contraseña. Si las credenciales son correctas, devuelve el `uid` (identificador) del usuario; si no, devuelve `false`.

## Función de login

```js
export async function registerApi(formData) {
    try {
      if (formData.provider === 'odoo') {
        const url = formData.url+"/jsonrpc/";
        const jsonRPC = {
            "jsonrpc": "2.0",
            "method": "call",
            "params": {"service": "common", "method": "login", 
            "args": [formData.database , formData.username, formData.password]}
        }
        const params = {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(jsonRPC),
        };
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
      }
    } catch (error) {
      console.log("Error:", error);
      return null;
    }
  }
```

## Cómo funciona

1. Construimos la URL del servidor de Odoo añadiendo `/jsonrpc/`.
2. Preparamos el cuerpo de la petición en formato JSON-RPC 2.0, indicando el servicio `common`, el método `login` y los argumentos.
3. Enviamos la petición con `fetch` usando el método POST.
4. La respuesta incluye el campo `result` con el `uid` del usuario, que podemos guardar en la app para las siguientes llamadas a la API (por ejemplo, para leer modelos con el servicio `object`).

## Nota

Usa siempre HTTPS para que las credenciales viajen cifradas, y evita guardar la contraseña en texto plano en el dispositivo.
