---
title: Cómo descargar productos en Odoo con React Native
date: 2022/12/20
description: Cómo descargar los productos de Odoo desde una app de React Native con JSON-RPC y guardarlos en el dispositivo con AsyncStorage.
tag: reactnative, expo, odoo
author: Marlon Falcon Hernandez
---

# Cómo descargar productos en Odoo con React Native

En este post vamos a ver cómo descargar productos de Odoo en una app de React Native. Usamos la API JSON-RPC de Odoo con el servicio `object` y el método `search_read` del modelo `product.product`, y guardamos el resultado en el dispositivo con AsyncStorage para poder consultarlo sin volver a pedirlo al servidor.

Necesitamos haber hecho login antes, ya que la llamada usa el `id` (uid) del usuario devuelto por Odoo junto con la base de datos y la contraseña.

## Código

```js
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function updateData(formData) {
    try { 
        console.log("data: updateData")
        const result = await downloadProductApi(formData);
        return result;
        
        } catch (error) {
            console.log("Error:", error);
            return null;
        }   
  }


async function downloadProductApi(formData) {
    try {
      // console.log("data: downloadProductApi")
      const products = []
      if (formData.provider === 'odoo') {
        const url = formData.url+"/jsonrpc/";
        const jsonRPC = {
            "jsonrpc": "2.0",
            "method": "call",
            "params": {"service": "object", "method": "execute", 
            "args": [formData.database , formData.id, formData.password, 
                    "product.product", "search_read", [], 
                    ["name","id","code","barcode",
                    "lst_price","standard_price","currency_id",
                    "type","qty_available","image_128"]]}
        }

        // "image_256"

        const params = {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(jsonRPC),
        };
        const response = await fetch(url, params);
        const result = await response.json();
        
        console.log("============= ::: ===== ")
        console.log(result.result);
        
        await AsyncStorage.setItem("PRODUCT", JSON.stringify(result.result));

        return result;
      }
    } catch (error) {
      console.log("Error:", error);
      return null;
    }
  }
  ```

## Cómo funciona

1. `updateData` es la función que llamamos desde la app; delega en `downloadProductApi` y captura cualquier error.
2. En `downloadProductApi` construimos la petición JSON-RPC: la lista vacía `[]` es el dominio (sin filtros, es decir, todos los productos) y a continuación indicamos los campos que queremos leer, como el nombre, el código de barras, el precio de venta, el stock disponible y una imagen pequeña (`image_128`).
3. Enviamos la petición con `fetch` y guardamos la lista de productos en AsyncStorage con la clave `PRODUCT`.

## Nota

Si el catálogo es grande, conviene añadir un filtro en el dominio o paginar los resultados, y pedir imágenes pequeñas (como `image_128`) para no saturar la memoria ni el almacenamiento del dispositivo.
