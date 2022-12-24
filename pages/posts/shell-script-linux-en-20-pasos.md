---
title: Script de Linux en 20 pasos
date: 2022/12/18
description: Script de Linux en 20 pasos
tag: linux, 20pasos, bash
author: Marlon Falcon Hernandez
---

# Script de Linux en 20 pasos
Script de Linux es un lenguaje de programación de código abierto para Linux.

## 1. Instalación
```bash
sudo apt install bash
```

## 2. Programa
En script de Linux debes crear un archivo con la extensión .sh, por ejemplo: index.sh
```bash
#!/bin/bash
echo "Hello World"
```

## 3. Permisos
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

## 14. File
```bash
#!/bin/bash

echo "Enter your name: "
read name

echo $name >> names.txt
```

## 15. Ejecutar codigo python
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

## 17. hacer pull a un repo de github
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




