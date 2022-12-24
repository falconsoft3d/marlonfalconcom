---
title: Bootstrap en 20 pasos
date: 2022/12/18
description: Bootstrap en 20 pasos
tag: python, 20pasos, bootstrap
author: Marlon Falcon Hernandez
---

# Bootstrap en 20 pasos
Bootstrap es un framework de código abierto para diseño de sitios y aplicaciones web.

## 1. Instalación
```bash
npm install bootstrap
```

## 2. Programa
En bootstrap debes crear un archivo con la extensión .html, por ejemplo: index.html
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset ="UTF8">
  <title>Ejemplo Boostrap</title>
  <meta name="viewport" content="width = device-width">
  <link href="http://getbootstrap.com/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
  <script src="http://getbootstrap.com/dist/js/bootstrap.min.js"></script>

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
      <![endif]-->

</head>
 <body>
  
  <div class="container">
       <h1>Hello</h1>    
  </div>
 </body>
</html>
```

## 3. row
```html
<div class="row">
  <div class="col-md-6">.col-md-6</div>
  <div class="col-md-6">.col-md-6</div>
</div>
```

## 4. columnas
```html
<div class="row">
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4">.col-md-4</div>

    <div class="col-md-3">.col-md-3</div>

    <div class="col-md-3">.col-md-3</div>
    
    <div class="col-md-3">.col-md-3</div>

    <div class="col-md-3">.col-md-3</div>
</div>
```

## 4. centrar div
```html
<div class="row">
  <div class="col-md-4 col-md-offset-4">.col-md-4 .col-md-offset-4</div>
</div>
```

## 5. centrar texto
```html
<div class="row">
  <div class="col-md-4 col-md-offset-4 text-center">.col-md-4 .col-md-offset-4</div>
</div>
```

## 5. Tablas
```html
<table class="table">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>

</table>
```

## 6. Formularios
```html

<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-group">
    <label for="exampleInputFile">File input</label>
    <input type="file" id="exampleInputFile">
    <p class="help-block
    ">Example block-level help text here.</p>
    </div>
    <div class="checkbox">
      <label>
        <input type="checkbox"> Check me out
      </label>
    </div>
    <button type="submit" class="btn btn-default">Submit</button>
    </form>
```

## 7. Botones
```html
<button type="button" class="btn btn-default">Default</button>
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-link">Link</button>
```

## 8. Botones con iconos
```html
<button type="button" class="btn btn-default btn-lg">
  <span class="glyphicon glyphicon-star" aria-hidden="true"></span> Star
</button>
```

## 9. Botones con iconos
```html
<button type="button" class="btn btn-default btn-lg">
  <span class="glyphicon glyphicon-star" aria-hidden="true"></span> Star
</button>

<button type="button" class="btn btn-default btn-lg">
  <span class="glyphicon glyphicon-star" aria-hidden="true"></span> Star
</button>

<button type="button" class="btn btn-default btn-lg">
  <span class="glyphicon glyphicon-star" aria-hidden="true"></span> Star
</button>

<button type="button" class="btn btn-default btn-lg">
  <span class="glyphicon glyphicon-star" aria-hidden="true"></span> Star
</button>

<button type="button" class="btn btn-default btn-lg">
  <span class="glyphicon glyphicon-star" aria-hidden="true"></span> Star
</button>
```

## 10. Ventana modal
```html
<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
  Launch demo modal
</button>


<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
```

## 11. Colores
```html
<div class="alert alert-success" role="alert">...</div>
<div class="alert alert-info" role="alert">...</div>
<div class="alert alert-warning" role="alert">...</div>
<div class="alert alert-danger" role="alert">...</div>
```

## 12. Imagenes
```html
<img src="..." class="img-rounded">
<img src="..." class="img-circle">
<img src="..." class="img-thumbnail">
```

## 13. Imagenes responsivas
```html
<img src="..." class="img-responsive" alt="Responsive image">
```

## 14. Footer
```html
<footer class="footer">
  <div class="container">
    <p class="text-muted">Place sticky footer content here.</p>
  </div>

</footer>
```


## 15. Iconos
```html
<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
<span class="glyphicon glyphicon-star" aria-hidden="true"></span>
<span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span>
<span class="glyphicon glyphicon-user" aria-hidden="true"></span>
<span class="glyphicon glyphicon-film" aria-hidden="true"></span>
<span class="glyphicon glyphicon-th-large" aria-hidden="true"></span>
<span class="glyphicon glyphicon-th" aria-hidden="true"></span>
<span class="glyphicon glyphicon-th-list" aria-hidden="true"></span>
<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
<span class="glyphicon glyphicon-zoom-in" aria-hidden="true"></span>
<span class="glyphicon glyphicon-zoom-out" aria-hidden="true"></span>
<span class="glyphicon glyphicon-off" aria-hidden="true"></span>
<span class="glyphicon glyphicon-signal" aria-hidden="true"></span>
```

## 16 Formualario Login
```html
<form class="form-signin">
  <h2 class="form-signin-heading">Please sign in</h2>
  <label for="inputEmail" class="sr-only">Email address</label>
  <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
  <label for="inputPassword" class="sr-only">Password</label>
  <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
  <div class="checkbox">
    <label>
      <input type="checkbox" value="remember-me"> Remember me
    </label>
  </div>
  <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
</form>
```

## 17. Background
```html
<div class="jumbotron">
  <h1>Hello, world!</h1>
  <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
</div>
```

## 18. textareas
```html
<div class="form-group">
  <label for="exampleTextarea">Example textarea</label>
  <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
</div>
```

## 19. Input
```html
<div class="form-group">
  <label for="exampleInputFile">File input</label>
  <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
  <small id="fileHelp" class="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
</div>
```

## 20. Select
```html
<div class="form-group">
  <label for="exampleSelect1">Example select</label>
  <select class="form-control" id="exampleSelect1">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </select>

    <label for="exampleSelect2">Example multiple select</label>
    <select multiple class="form-control" id="exampleSelect2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
</div>
```






























