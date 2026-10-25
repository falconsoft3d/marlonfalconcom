---
title: Odoo Visual Studio Code
date: 2022/12/20
description: Cómo configurar Visual Studio Code para ejecutar y depurar Odoo mediante un archivo launch.json.
tag: odoo, vscode
author: Marlon Falcon Hernandez
---

# Odoo Visual Studio Code

Visual Studio Code es un editor de código fuente desarrollado por Microsoft para Windows, Linux y macOS. Incluye soporte para depuración, control de versiones Git incorporado, resaltado de sintaxis, finalización inteligente de código, snippets y refactorización de código. Para ejecutar Odoo en Visual Studio Code se debe crear el siguiente fichero:

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

## Explicación de la configuración

- `program`: ruta al archivo `odoo-bin` de tu instalación de Odoo.
- `args`: parámetros que se pasan a Odoo. En este caso, el archivo de configuración (`-c`) y un `--limit-time-real` alto para que Odoo no corte la petición mientras estamos detenidos en un punto de interrupción.
- `justMyCode`: si lo pones en `false`, el depurador también entrará en el código del núcleo de Odoo y de las librerías.

Para usarlo necesitas tener instalada la extensión de Python en Visual Studio Code. Después solo tienes que ir a la sección Ejecutar y depurar y lanzar la configuración "Odoo 14". Ajusta las rutas a las de tu equipo.
