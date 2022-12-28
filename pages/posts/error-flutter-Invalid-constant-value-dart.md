---
title: ▷ Error Flutter - Invalid constant value.dart(invalid_constant)
date: 2022/12/28
description: ▷ Error Flutter - Invalid constant value.dart(invalid_constant)
tag: dart, flutter, error, flutter-error
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Error Flutter - Invalid constant value.dart(invalid_constant)
Si te pasa este error 
```bash
Invalid constant value.dart(invalid_constant)
```

por ejemplo en este codigo
```dart
child: Text(value, style: const TextStyle(
                  color: currentindex == index ? Colors.white :  color,
                  ),
            ),
```

Es porque el TxtStyle no es constante, para solucionarlo debes quitarle el texto de constante quedand asi
```dart
child: Text(value, style: TextStyle(
                  color: currentindex == index ? Colors.white :  color,
                  ),
            ),

```

