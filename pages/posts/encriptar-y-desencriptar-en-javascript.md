---
title: ▷ Encriptar y desencriptar en JavaScript
date: 2023/2/20
description: ▷ Encriptar y desencriptar en JavaScript
tag: javascript, encriptar, desencriptar
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Encriptar y desencriptar en JavaScript
La encriptación (también conocida como cifrado) es el proceso de transformar información o datos legibles en un formato codificado o ilegible para que solo las personas autorizadas puedan acceder a ella. La encriptación se utiliza comúnmente para proteger la privacidad y seguridad de la información, ya que solo las personas que poseen la clave o el código adecuado pueden decodificar o descifrar la información.

Existen diferentes tipos de algoritmos y métodos de encriptación, pero en general, el proceso de encriptación implica tomar un mensaje o datos en texto claro y procesarlo a través de una serie de operaciones matemáticas que cambian su formato original. El resultado de la encriptación es un texto cifrado, que puede ser transmitido o almacenado con mayor seguridad, ya que es prácticamente imposible de leer sin la clave adecuada.

## Cómo encriptar y desencriptar en JavaScript

Para encriptar y desencriptar en JavaScript podemos utilizar el siguiente código:
```js
function encrypt_data(string) {
        string = unescape(encodeURIComponent(string));
        var newString = '',
           char, nextChar, combinedCharCode;
        for (var i = 0; i < string.length; i += 2) {
        char = string.charCodeAt(i);

      if ((i + 1) < string.length) {


      nextChar = string.charCodeAt(i + 1) - 31;


      combinedCharCode = char + "" + nextChar.toLocaleString('en', {
       minimumIntegerDigits: 2
      });

      newString += String.fromCharCode(parseInt(combinedCharCode, 10));

      } else {


      newString += string.charAt(i);
      }
      }
      return newString.split("").reduce((hex,c)=>hex+=c.charCodeAt(0).toString(16).padStart(4,"0"),"");
      }

```

Para desencriptar podemos utilizar el siguiente código:
```js
function decrypt_data(string) {

      var newString = '',
      char, codeStr, firstCharCode, lastCharCode;
      string = string.match(/.{1,4}/g).reduce((acc,char)=>acc+String.fromCharCode(parseInt(char, 16)),"");
      for (var i = 0; i < string.length; i++) {
      char = string.charCodeAt(i);
      if (char > 132) {
      codeStr = char.toString(10);

      firstCharCode = parseInt(codeStr.substring(0, codeStr.length - 2), 10);

      lastCharCode = parseInt(codeStr.substring(codeStr.length - 2, codeStr.length), 10) + 31;

      newString += String.fromCharCode(firstCharCode) + String.fromCharCode(lastCharCode);
      } else {
      newString += string.charAt(i);
      }
      }
      return newString;
      }

```

La encriptación se utiliza ampliamente en diferentes ámbitos, desde la protección de la privacidad en línea hasta la seguridad de la información confidencial en entornos empresariales y gubernamentales. Por ejemplo, la mayoría de los sitios web utilizan encriptación para proteger las transacciones en línea y la información de los usuarios, como nombres de usuario y contraseñas. Además, la encriptación también se utiliza en dispositivos móviles y aplicaciones de mensajería para proteger los mensajes y datos personales de los usuarios.

En resumen, la encriptación es un proceso fundamental para proteger la privacidad y seguridad de la información en la era digital. Al utilizar técnicas de encriptación, podemos garantizar que solo las personas autorizadas puedan acceder y comprender la información, lo que es esencial para mantener la privacidad y la seguridad en línea.