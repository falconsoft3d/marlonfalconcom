---
title: Odoo Visual Studio Code
date: 2022/12/20
description: Odoo Visual Studio Code
tag: odoo, vscode
author: Marlon Falcon Hernandez
---

# Odoo Visual Studio Code

Visual Studio Code es un editor de código fuente desarrollado por Microsoft para Windows, Linux y macOS. Incluye soporte para depuración, control de versiones Git incorporado, resaltado de sintaxis, finalización inteligente de código, snippets y refactoring de código. Para ejecutar Odoo en Visual Studio Code se debe crear el siguiente fichero.

````
.vscode/.vscode/launch.json
````

````
{
    // Use IntelliSense para saber los atributos posibles.
    // Mantenga el puntero para ver las descripciones de los existentes atributos.
    // Para más información, visite: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Odoo 14",
            "type": "python",
            "request": "launch",
            "program": "/Users/marlonfalcon/odoo/odoo-14/odoo-bin",
            "console": "integratedTerminal",
            "justMyCode": true,
            "args": [
                "-c",
                "/Users/marlonfalcon/odoo/odoo-14/debian/odoo.conf",
                "--limit-time-real",
                "9999",
            ],
        }
    ]
}
````