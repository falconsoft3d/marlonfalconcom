---
title: PHP en 20 pasos
date: 2022/12/18
description: Guía rápida de PHP con más de 20 ejemplos básicos - variables, operadores, condicionales, ciclos, arreglos, funciones y POO.
tag: php, 20pasos
author: Marlon Falcon Hernandez
---

# PHP en 20 pasos
PHP es un lenguaje de programación de uso general que se ejecuta del lado del servidor y que fue diseñado originalmente para el desarrollo web de contenido dinámico. En este artículo he reunido más de 20 pasos con ejemplos cortos para repasar lo básico del lenguaje.

## 1. Instalación
```bash
brew install php
```

## 2. Programa
En PHP debes crear un archivo con la extensión .php, por ejemplo: hola_mundo.php
```php
<?php
  echo 'Hola mundo';

  ?>
```

## 3. Comentarios
```php
  // Esto es un comentario

  /* 
      Esto es un comentario
      de varias líneas
  */
```

## 4. Constantes
```php
  define('PI', 3.1416);
```

## 5. Variables
```php
  $nombre = 'Juan';
  $edad = 20;
  $estatura = 1.80;
  $esMayor = true;
```

## 6. Operadores de asignación
```php
  $d = 10;
  $d += 2; // 12
  $d -= 2; // 10
  $d *= 2; // 20
  $d %= 6; // 4
```

## 7. Operadores relacionales
```php
  $a = 10;
  $b = 20;
  $a == $b; // False
  $a != $b; // True
```

## 8. Operadores lógicos
```php
  $a = 10;
  $b = 20;
  $a == 10 && $b == 20; // True
  $a == 10 || $b == 20; // True
  $a == 10 && $b == 30; // False
  $a == 10 || $b == 30; // True
  !$a == 10; // False
```

## 9. Operadores de incremento y decremento
```php
  $a = 10;
  $a++; // 11
  $a--; // 10
  ++$a; // 11
  --$a; // 10
```

## 10. Operadores de comparación
```php
  $a = 10;
  $b = 20;
  $a <=> $b; // -1
  $b <=> $a; // 1
  $a <=> $a; // 0
```

## 11. Operadores de cadena
```php
  $a = 'Hola';
  $b = 'Mundo';
  $a . $b; // HolaMundo
  $a .= $b; // HolaMundo
```

## 12. Operadores de arreglo
Ten en cuenta que el operador `+` entre arreglos hace una unión por claves: si ambos arreglos tienen las mismas claves (como en este ejemplo, 0, 1 y 2), se conservan los valores del primero. Para concatenar arreglos indexados se usa `array_merge`.
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

## 13. Funciones
```php
  function suma($a, $b) {
    return $a + $b;
  }

  suma(1, 2); // 3
```

## 14. Condicionales
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

## 15. Ciclos
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

## 16. Arreglos
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

## 17. If ternario
```php
  $a = 10;
  $b = 20;

  $resultado = $a > $b ? 'a es mayor que b' : 'a es menor que b';
```

## 18. If Else
```php
  $a = 10;
  $b = 20;

  if ($a > $b) {
    echo 'a es mayor que b';
  } else {
    echo 'a es menor que b';
  }
```


## 19. Switch
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

## 20. Funciones
```php
  function suma($a, $b) {
    return $a + $b;
  }

  suma(1, 2); // 3
```


## 21. Funciones anónimas
```php
  $suma = function($a, $b) {
    return $a + $b;
  };

  $suma(1, 2); // 3
```

## 22. Funciones recursivas
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

## 23. Funciones con parámetros por defecto
```php
  function suma($a, $b = 0) {
    return $a + $b;
  }

  suma(1); // 1
  suma(1, 2); // 3
```

## 24. Funciones con parámetros variables
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

## 25. POO
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

## 26. POO Herencia
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
