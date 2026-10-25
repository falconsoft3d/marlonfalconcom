---
title: "Script de Linux en 20 pasos"
date: 2022/12/18
description: "Aprende lo básico de los scripts de Bash en Linux en 20 pasos - variables, condicionales, bucles, funciones, arreglos y archivos."
tag: linux, 20pasos, bash
author: Marlon Falcon Hernandez
---

# Script de Linux en 20 pasos
Un script de shell es un archivo de texto con una serie de comandos que el intérprete (en Linux, normalmente Bash) ejecuta uno tras otro. Sirve para automatizar tareas repetitivas como copias de seguridad, despliegues o instalaciones. Bash es software libre y viene instalado por defecto en la mayoría de distribuciones.

## 1. Instalación
Si tu sistema no lo tiene, puedes instalarlo en Debian o Ubuntu con:
```bash
sudo apt install bash
```

## 2. Programa
Debes crear un archivo con la extensión .sh, por ejemplo: index.sh. La primera línea (shebang) indica qué intérprete debe ejecutar el script.
```bash
#!/bin/bash
echo "Hello World"
```

## 3. Permisos
Damos permisos de ejecución al archivo:
```bash
chmod +x index.sh
```

## 4. Ejecutar
```bash
./index.sh
```

## 5. Variables
```bash
#!/bin/bash

name="Marlon"
echo "Hello $name"
```

## 6. Concatenar
```bash
#!/bin/bash

name="Marlon"

echo "Hello $name"
echo "Hello "$name""
```

## 7. Leer
```bash
#!/bin/bash

echo "Enter your name: "
read name
echo "Hello $name"
```

## 8. Condicionales
```bash
#!/bin/bash

echo "Enter your name: "
read name

if [ $name = "Marlon" ]
then
    echo "Hello $name"
else
    echo "Hello stranger"
fi
```

## 9. Ciclo While
```bash
#!/bin/bash

echo "Enter your name: "
read name

while [ $name != "Marlon" ]
do
    echo "Enter your name: "
    read name
done

echo "Hello $name"
```

## 10. Ciclo For
```bash
#!/bin/bash

for i in 1 2 3 4 5
do
    echo "Hello $i"
done
```

## 11. Funciones
```bash
#!/bin/bash

function hello() {
    echo "Hello $1"
}

hello "Marlon"
```

## 12. Arreglos
```bash
#!/bin/bash

names=("Marlon" "Falcon" "Hernandez")

for name in ${names[@]}
do
    echo "Hello $name"
done
```

## 13. Arreglos 2
```bash
#!/bin/bash

names=("Marlon" "Falcon" "Hernandez")

for name in ${names[@]}

do
    echo "Hello $name"
done

echo "Enter your name: "
read name

for name in ${names[@]}
do
    if [ $name = $name ]
    then
        echo "Hello $name"
    fi
done
```

## 14. Escribir en un archivo
El operador `>>` añade el texto al final del archivo (lo crea si no existe):
```bash
#!/bin/bash

echo "Enter your name: "
read name

echo $name >> names.txt
```

## 15. Ejecutar código Python
```bash
#!/bin/bash

python3 << END
print("Hello World")
END
```

## 16. Descargar archivo
```bash
#!/bin/bash

wget https://raw.githubusercontent.com/marlon360/r.mest/main/README.md
```

## 17. Clonar un repositorio de GitHub
Añade después de `git clone` la URL del repositorio:
```bash
#!/bin/bash

git clone 
```

## 18. Crear un archivo
```bash
#!/bin/bash

touch index.html
```

## 19. Crear un directorio
```bash
#!/bin/bash

mkdir pages
```

## 20. Crear un archivo en un directorio
```bash

#!/bin/bash

mkdir pages
touch pages/index.html
```

Con estos 20 pasos tienes las bases para escribir tus propios scripts. Un buen consejo es poner las variables entre comillas (por ejemplo, `"$name"`) para evitar errores cuando contienen espacios o están vacías.




