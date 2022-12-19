---
title: Hola mundo en go
date: 2022/12/18
description: Hola mundo en go
tag: go
author: Marlon Falcon Hernandez
---

# Hola mundo en go

Creamos un fichero con extensión .go y escribimos el siguiente código:
```
package main
import "fmt"
func main() {
  fmt.Println("Hola Mundo")
}
```

Ejecutamos el siguiente comando para compilar el fichero:
```
go build hola.go
```

Ejecutamos el siguiente comando para ejecutar el fichero:
```
./hola
```