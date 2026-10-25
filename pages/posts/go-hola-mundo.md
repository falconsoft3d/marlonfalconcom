---
title: Hola mundo en Go
date: 2022/12/18
description: Tu primer programa en Go, cómo escribir un hola mundo, compilarlo con go build y ejecutarlo.
tag: go
author: Marlon Falcon Hernandez
---

# Hola mundo en Go

Go (o Golang) es un lenguaje de programación de código abierto creado por Google. Es compilado, con tipado estático, muy rápido y con un soporte excelente para la concurrencia, por lo que se usa mucho en servidores, APIs y herramientas de línea de comandos. Para empezar, nada mejor que el clásico "Hola mundo".

## 1. Escribir el programa

Creamos un fichero con extensión `.go`, por ejemplo `hola.go`, y escribimos el siguiente código:

```
package main
import "fmt"
func main() {
  fmt.Println("Hola Mundo")
}
```

- `package main` indica que el fichero forma parte de un programa ejecutable.
- `import "fmt"` importa el paquete de la librería estándar para imprimir texto.
- `func main()` es la función que se ejecuta al iniciar el programa.

## 2. Compilar

Ejecutamos el siguiente comando para compilar el fichero:

```
go build hola.go
```

Se generará un ejecutable llamado `hola` (`hola.exe` en Windows).

## 3. Ejecutar

Ejecutamos el siguiente comando para ejecutar el programa:

```
./hola
```

Si solo quieres probar el código sin generar el ejecutable, también puedes usar `go run hola.go`, que compila y ejecuta en un solo paso.
