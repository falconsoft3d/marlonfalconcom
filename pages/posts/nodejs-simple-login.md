---
title: NodeJs Simple Login
date: 2022/12/18
description: NodeJs Simple Login
tag: nodejs, express, passport, ejs
author: Marlon Falcon Hernandez
---

# NodeJs Simple Login

server.js

```js
const express = require('express');
const passport = require('passport');
const cookiesParser = require('cookie-parser');
const session = require('express-session');
const PassportLocal = require('passport-local').Strategy;

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(cookiesParser('Mi secreto'));

app.use(session({
    secret:'Mi secreto',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new PassportLocal( function(username, password, done) {
    console.log('Iniciando');
    if(username === 'admin' && password === 'x1234567890' ) return done(null, {  id:1, name: 'Marlon' });
    done(null,false);
}));

passport.serializeUser(function(user,done){
    done(null,user.id);
});

passport.deserializeUser(function(id,done){
    done(null,{  id:1, name: 'Marlon' })
})

app.set('view engine', 'ejs');

app.get("/", (req, res, next) =>{
    if( req.isAuthenticated() ){
        return next();
        console.log("if( req.isAuthenticated() ){:::: SI");
    }
    res.redirect("/login");
}  ,(req,res) =>{
    res.render('index');
});

app.get("/login", (req,res) =>{
   res.render("login");
});

app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/login'); //Can fire before session is destroyed?
  });


app.post('/login',
passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login' }));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log('App listening on port ' + port));
```

views/index.ejs
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
</style>
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">

<style>
    .bd-placeholder-img {
      font-size: 1.125rem;
      text-anchor: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
    }
    @media (min-width: 768px) {
      .bd-placeholder-img-lg {
        font-size: 3.5rem;
      }
    }
    .text-white{
        margin-left: 20px;
    }
  </style>

  
  <!-- Custom styles for this template -->
  <link href="cover.css" rel="stylesheet">
</head>
<body class="d-flex h-100 text-center text-white" style="background-color: #117a8b;">
  
<div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
<header class="mb-auto">
  <div>
    <nav class="nav nav-masthead justify-content-center float-md-end">
      <a class="text-white" aria-current="page" href="/">Home</a>
      <a class="text-white" href="/login">Login</a>
      <a class="text-white" href="/logout">Close</a>
    </nav>
  </div>
</header>

<main class="px-3">
    <p></p>
  <h1 style="margin-top: 100px;">Marlon Falcon Hdez.</h1>
  <p></p>
  <p style="margin-top: 100px;" class="lead">Demo login NodeJS</p>
</main>

<footer class="mt-auto text-white-50">
  <p>Cover template for <a href="https://getbootstrap.com/" class="text-white">Bootstrap</a>, by <a href="https://marlonfalcon.com" class="text-white">marlon</a>.</p>
</footer>
</div>


  
</body>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</html>
```

views/login.ejs
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    body {
        margin: 0;
        padding: 0;
        height: 100vh;
    }
    #login .container #login-row #login-column #login-box {
        margin-top: 120px;
        max-width: 600px;
        height: 320px;
        border: 1px solid #9C9C9C;
        background-color: #EAEAEA;
    }
    #login .container #login-row #login-column #login-box #login-form {
        padding: 20px;
    }
    #login .container #login-row #login-column #login-box #login-form #register-link {
        margin-top: -85px;
    }
</style>
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<body style="background-color: #117a8b;">
    <div id="login">
       <a href="/"> <h3 class="text-center text-white pt-5">Home</h3></a>
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form id="login-form" class="form" action="/login" method="post">
                            <h3 class="text-center text-info">Login</h3>
                            <div class="form-group">
                                <label for="username" class="text-info">Username:</label><br>
                                <input type="text" name="username" id="username" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Password:</label><br>
                                <input type="password" name="password" id="password" class="form-control">
                            </div>
                            <div class="form-group">
                                <input type="submit" name="submit" class="btn btn-info btn-md" value="submit">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</html>
```