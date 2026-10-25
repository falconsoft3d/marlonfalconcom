---
title: Formulario PHP para enviar datos a Odoo ERP
date: 2022/12/18
description: Ejemplo de formulario web en PHP que crea iniciativas (leads) en el CRM de Odoo ERP mediante peticiones JSON-RPC con cURL.
tag: php,odoo
author: Marlon Falcon Hernandez
---

# Formulario PHP para enviar datos a Odoo ERP

Un caso muy habitual es tener un formulario de contacto en una web hecha en PHP y querer que cada envío llegue directamente al CRM de Odoo como una nueva iniciativa (lead). Para ello podemos usar la API JSON-RPC de Odoo desde PHP con cURL.

## Cómo funciona

1. Se muestra un formulario con nombre, apellidos, teléfono, email, provincia y comentarios.
2. Al enviarlo, el script recoge los datos.
3. Se hace login en Odoo con el servicio `common` para obtener el identificador del usuario.
4. Con ese identificador se llama al servicio `object` para crear un registro en el modelo `crm.lead`.

Los campos `specify_origin` y `construction_province` del ejemplo son campos personalizados; si no los tienes en tu base de datos, elimínalos o sustitúyelos por los tuyos. Recuerda también cambiar la URL, la base de datos, el usuario y la contraseña.

## Ejemplo
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRM odoo PHP</title>
    <!-- CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body>

<!-- FORMULARIO -->
<div class="container">
  <a href="index.php"><h1>ODOO CRM</h1></a>
  <?php
      echo '<h3>Current PHP Version: ' .  phpversion() . '</h3>';
    ?>
    
  <div class="row">
    <form name="frmContacto" method="get" action="index.php" role="form">
      <!-- Nombre -->
      <div class="mb-3">
        <label class="form-label">Nombre</label>
        <input type="text" class="form-control" id="input-name"  name="input-name" required value="<?php echo "Marlon" ?>">
      </div>

      <div class="mb-3">
        <label class="form-label">Apellidos</label>
        <input type="text" class="form-control" id="input-name"  name="input-lastname" required value="<?php echo "Falcon Hernandez" ?>">
      </div>

      <!-- Telefono -->
      <div class="mb-3">
        <label class="form-label">Teléfono</label>
        <input type="text" class="form-control" id="input-phone"  required name="input-phone" value="662470645">
      </div>
      <!-- Email -->
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input type="email" class="form-control" id="input-email"  required name="input-email" value="mfalcon@ynext.cl">
      </div>
      <!-- Provincia -->
      <div class="mb-3">
        <label class="form-label">Provincia</label>
        <select name="taskOption" required class="form-control" required>
            <option value="448">Madrid</option>
            <option value="464">Valencia</option>
        </select>
      </div>
      <!-- Comentarios -->
      <div class="mb-3">
        <label class="form-label">Comentarios</label>
        <input type="text" class="form-control" name="input-comments"  id="input-comments" 
               required 
               value="Ejemplo de comentario">
      </div>

      </br>
    <div class="mb-3">
      <button type="submit" class="btn btn-primary">Enviar</button>
    </div>  
    </form>
   

    

    
    <?php
        // Paso 1 - Cargamos los datos via GET
        $input_name = $_GET['input-name'];
        $input_lastname = $_GET['input-lastname'];
        $input_email = $_GET['input-email'];
        $input_phone = $_GET['input-phone'];
        $comments = $_GET['input-comments'];
        $construction_province = $_GET['taskOption'];

        echo($comments);
        
        if ($input_name) {
          echo "El nombre es:".$input_name;

          // Paso 2 - Datos de conexión Odoo
          $URL = 'http://bim14.123odoo.com/jsonrpc/';
          $url_auth = $url . '/xmlrpc/2/common';
          $url_exec = $url . '/xmlrpc/2/object';
          $db = 'db14-2000';
          $username = 'admin';
          $password = 'password';

          // Login
          $curl = curl_init();
          curl_setopt_array($curl, array(
            CURLOPT_URL =>$URL ,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'GET',
            CURLOPT_POSTFIELDS =>'   {
                  "jsonrpc": "2.0",
                  "method": "call",
                  "params": {"service": "common", "method": "login", "args": 
                    ["'.$db.'", 
                    "'.$username.'", 
                    "'.$password.'"]}
              }',
            CURLOPT_HTTPHEADER => array(
              'Content-Type: application/json'
            ),
          ));
          $response = curl_exec($curl);
          $array = json_decode($response, true);
          curl_close($curl);
          // echo($array["result"]);
          // echo $response;
          $id_user = $array["result"];
          echo("<br/>");
          echo ($id_user);

          
          // JSON CREATE LEAD
          $curl = curl_init();
          curl_setopt_array($curl, array(
            CURLOPT_URL => $URL,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'GET',
            CURLOPT_POSTFIELDS =>'{
                  "jsonrpc": "2.0",
                  "method": "call",
                  "params": {
                              "service": "object", 
                              "method": "execute", 
                              "args": ["'.$db.'", '.$id_user.', "'.$password.'", "crm.lead", "create", {
                                  "name" : "Iniciativa: '.$input_name." ".$input_lastname.'",
                                  "contact_name" : "'.$input_name." ".$input_lastname.'",
                                  "email_from" : "'.$input_email.'",
                                  "mobile" : "'.$input_phone.'",
                                  "user_id" : "'.$id_user.'",
                                  "source_id" : "5",
                                  "specify_origin" : "WEB-100000001",
                                  "description": "'.$comments.'",
                                  "construction_province": "'.$construction_province.'"
                                  
                              }]}
              }',
            CURLOPT_HTTPHEADER => array(
              'Content-Type: application/json'
            ),
          ));

          $response = curl_exec($curl);

          curl_close($curl);
          echo("<br/>");
          echo $response;
          echo("<br/>");
          echo $comentario;
          
        } else {
          echo "Sin Datos";
        }
    ?>
 


</div>

  </body>
</html>
```

**Nota de seguridad:** en un formulario público conviene validar y escapar los datos recibidos antes de construir el JSON (por ejemplo, generándolo con `json_encode`), enviar el formulario por `POST` y no dejar las credenciales de Odoo escritas en el código.
