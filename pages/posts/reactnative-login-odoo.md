---
title: Como hacer login en Odoo con React Native
date: 2022/12/20
description: Como hacer login en Odoo con React Native
tag: reactnative, expo, odoo
author: Marlon Falcon Hernandez
---

# Como hacer login en Odoo con React Native

En este post vamos a ver como hacer login en Odoo con React Native.
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