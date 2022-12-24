---
title: Php en 20 pasos
date: 2022/12/18
description: Php en 20 pasos
tag: php, 20pasos
author: Marlon Falcon Hernandez
---

# Php en 20 pasos
Php es un lenguaje de programación de uso general de código del lado del servidor originalmente diseñado para el desarrollo web de contenido dinámico. Con php coloque más de 20 pasos ...

## 1. Instalación
```bash
brew install php
```

## 2. Programa
En php debes crear un archivo con la extensión .php, por ejemplo: hola_mundo.php
```php
<?php
  echo 'Hola mundo';

  ?>


## 2. Comentarios
```php
  // Esto es un comentario

  /* 
      Esto es un comentario
      de varias líneas
  */
```

## 3. Constantes
```php
  define('PI', 3.1416);
```

## 4. Variables
```php
  $nombre = 'Juan';
  $edad = 20;
  $estatura = 1.80;
  $esMayor = true;
```

## 5. Operadores de asignación
```php
  $d = 10;
  $d += 2; // 12
  $d -= 2; // 10
  $d *= 2; // 20
  $d %= 6; // 4
```

## 6. Operadores relacionales
```php
  $a = 10;
  $b = 20;
  $a == $b; // False
  $a != $b; // True
```

## 7. Operadores lógicos
```php
  $a = 10;
  $b = 20;
  $a == 10 && $b == 20; // True
  $a == 10 || $b == 20; // True
  $a == 10 && $b == 30; // False
  $a == 10 || $b == 30; // True
  !$a == 10; // False
```

## 8. Operadores de incremento y decremento
```php
  $a = 10;
  $a++; // 11
  $a--; // 10
  ++$a; // 11
  --$a; // 10
```

## 9. Operadores de comparación
```php
  $a = 10;
  $b = 20;
  $a <=> $b; // -1
  $b <=> $a; // 1
  $a <=> $a; // 0
```

## 10. Operadores de cadena
```php
  $a = 'Hola';
  $b = 'Mundo';
  $a . $b; // HolaMundo
  $a .= $b; // HolaMundo
```

## 11. Operadores de arreglo
```php
  $a = [1, 2, 3];
  $b = [4, 5, 6];
  $a + $b; // [1, 2, 3, 4, 5, 6]
  $a == $b; // False
  $a === $b; // False
  $a != $b; // True
  $a <> $b; // True
  $a !== $b; // True
```

## 12. Funciones
```php
  function suma($a, $b) {
    return $a + $b;
  }

  suma(1, 2); // 3
```

## 13. Condicionales
```php
  $a = 10;
  $b = 20;

  if ($a > $b) {
    echo 'a es mayor que b';
  } else if ($a < $b) {
    echo 'a es menor que b';
  } else {
    echo 'a es igual a b';
  }
```

## 14. Ciclos
```php
  $a = 10;
  $b = 20;

  while ($a < $b) {
    echo $a;
    $a++;
  }

  do {
    echo $a;
    $a++;
  } while ($a < $b);

  for ($i = 0; $i < 10; $i++) {
    echo $i;
  }

  $a = [1, 2, 3];
  foreach ($a as $valor) {
    echo $valor;
  }

  foreach ($a as $clave => $valor) {
    echo $clave . ' - ' . $valor;
  }
```

## 15. Arreglos
```php
  $a = [1, 2, 3];
  $a = array(1, 2, 3);
  $a = array(
    'clave1' => 'valor1',
    'clave2' => 'valor2',
    'clave3' => 'valor3'
  );
  $a = [
    'clave1' => 'valor1',
    'clave2' => 'valor2',
    'clave3' => 'valor3'
  ];
```

## 16. If ternario
```php
  $a = 10;
  $b = 20;

  $resultado = $a > $b ? 'a es mayor que b' : 'a es menor que b';
```

## 17. If Else
```php
  $a = 10;
  $b = 20;

  if ($a > $b) {
    echo 'a es mayor que b';
  } else {
    echo 'a es menor que b';
  }
```


## 17. Switch
```php
  $a = 10;

  switch ($a) {
    case 1:
      echo 'a es igual a 1';
      break;
    case 2:
      echo 'a es igual a 2';
      break;
    default:
      echo 'a es diferente de 1 y 2';
  }
```

## 18. Funciones
```php
  function suma($a, $b) {
    return $a + $b;
  }

  suma(1, 2); // 3
```


## 19. Funciones anónimas
```php
  $suma = function($a, $b) {
    return $a + $b;
  };

  $suma(1, 2); // 3
```

## 20. Funciones recursivas
```php
  function factorial($n) {
    if ($n == 0) {
      return 1;
    } else {
      return $n * factorial($n - 1);
    }
  }

  factorial(5); // 120
```

## 21. Funciones con parámetros por defecto
```php
  function suma($a, $b = 0) {
    return $a + $b;
  }

  suma(1); // 1
  suma(1, 2); // 3
```

## 22. Funciones con parámetros variables
```php
  function suma(...$numeros) {
    $resultado = 0;
    foreach ($numeros as $numero) {
      $resultado += $numero;
    }
    return $resultado;
  }

  suma(1, 2, 3, 4, 5); // 15
```

## 23. POO
```php
    class Persona {
        public $nombre;
        public $apellido;
        public $edad;
    
        public function __construct($nombre, $apellido, $edad) {
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->edad = $edad;
        }
    
        public function saludar() {
        return 'Hola, mi nombre es ' . $this->nombre . ' ' . $this->apellido;
        }
    }
    
$persona = new Persona('Juan', 'Perez', 20);
$persona->saludar(); // Hola, mi nombre es Juan Perez
```

## 24. POO Herencia
```php
    class Persona {
        public $nombre;
        public $apellido;
        public $edad;
    
        public function __construct($nombre, $apellido, $edad) {
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->edad = $edad;
        }
    
        public function saludar() {
        return 'Hola, mi nombre es ' . $this->nombre . ' ' . $this->apellido;
        }
    }
    
    class Estudiante extends Persona {
        public $carrera;
    
        public function __construct($nombre, $apellido, $edad, $carrera) {
        parent::__construct($nombre, $apellido, $edad);
        $this->carrera = $carrera;
        }
    
        public function saludar() {
        return 'Hola, mi nombre es ' . $this->nombre . ' ' . $this->apellido . ' y estudio ' . $this->carrera;
        }
    }


$estudiante = new Estudiante('Juan', 'Perez', 20, 'Ingeniería');

$estudiante->saludar(); // Hola, mi nombre es Juan Perez y estudio Ingeniería
```













    