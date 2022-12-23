---
title: Crear un layout en NextJS
date: 2022/12/21
description: Crear un layout en NextJS
tag: nextjs, react
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# Crear un layout en NextJS
Un layout es un componente que se va a renderizar en todas las páginas de nuestra aplicación. En este post vamos a ver como podemos crear un layout en NextJS.

Layout.js
```js
import React from 'react'
import Head from 'next/head'
import NavBar from './NavBar';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';


export default function Layout({children}) {

  return (
    <>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar/>
        {children}
        <Footer/>
        <ToastContainer />
    </>
  );
}
```

NavBar.js
```js
import React from 'react'
import { useAuth } from '../context/AuthContext';
import Link from 'next/link';

export default function NavBar() {
  const { user, logout } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
         <div className='container'>
        <Link href="/" className="navbar-brand">PartCombinator</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
              {
                    !user && 
                       <>
                             <Link href="/login" className="nav-link">Login</Link>
                             <Link href="/signup" className="nav-link">Register</Link>
                       </>
                }

            {
                    user && 
                       <>
                            <Link href="/dashboard" className="nav-link">Dashboard</Link>
                            <button onClick={ logout } className="btn btn-primary">Logout</button>
                       </>
                }
          </ul>
        </div>
        </div>
      </nav>
  );
}
```