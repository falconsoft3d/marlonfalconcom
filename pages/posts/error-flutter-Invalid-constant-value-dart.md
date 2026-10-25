---
title: ▷ Error Flutter - Invalid constant value.dart(invalid_constant)
date: 2022/12/28
description: ▷ Por qué aparece el error "Invalid constant value" en Flutter al usar const con valores variables y cómo solucionarlo.
tag: dart, flutter, error, flutter-error
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Error Flutter - Invalid constant value.dart(invalid_constant)

En Dart, la palabra clave `const` indica que un objeto es una constante en tiempo de compilación. Flutter la usa mucho para optimizar el rendimiento, pero tiene una condición: todos los valores que se pasan a un constructor `const` también deben ser constantes. Si no lo son, aparece este error:

```bash
Invalid constant value.dart(invalid_constant)
```

Por ejemplo, en este código:

```dart
child: Text(value, style: const TextStyle(
                  color: currentindex == index ? Colors.white :  color,
                  ),
            ),
```

## Causa

El `TextStyle` está marcado como `const`, pero su color depende de las variables `currentindex`, `index` y `color`, cuyo valor solo se conoce en tiempo de ejecución. Por eso el `TextStyle` no puede ser constante.

## Solución

Quita la palabra `const` del `TextStyle`, de forma que quede así:

```dart
child: Text(value, style: TextStyle(
                  color: currentindex == index ? Colors.white :  color,
                  ),
            ),

```

Ten en cuenta que el `const` también puede estar en un widget padre (por ejemplo, `const Padding(...)` o `const Row(...)`). En ese caso, debes quitarlo del widget padre y, si quieres, añadirlo solo a los hijos que sí sean constantes.
