---
title: Enviar email desde Node.js
date: 2022/12/21
description: Cómo enviar correos electrónicos desde Node.js con Nodemailer, usando una cuenta de pruebas de Ethereal.
tag: nodejs, api
author: Enviar email desde nodejs
---

# Enviar email desde Node.js

Nodemailer es la librería más utilizada para enviar correos electrónicos desde Node.js. Funciona con cualquier servidor SMTP y, para hacer pruebas, permite crear al momento una cuenta en Ethereal, un servicio que captura los correos sin entregarlos a nadie.

## Instalación

Instalamos la dependencia con `npm install nodemailer`.

## Código

email.js

```js
"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "mfalconsoft@gmail.com, mfalconsoft@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
```

Al ejecutarlo con `node email.js`, la consola mostrará el ID del mensaje y una URL de vista previa de Ethereal donde podemos ver el correo tal como se enviaría. Para enviarlo de verdad, basta con sustituir los datos del transporte por los de nuestro servidor SMTP (host, puerto, usuario y contraseña).
