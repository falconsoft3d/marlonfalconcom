---
title: Cómo hacer un login con Auth0 y React
date: 2023/01/12
description: Cómo hacer un login con Auth0 y React
tag: react, auth0
author: Marlon Falcon Hernandez
---

# Cómo hacer un login con Auth0 y React
import Image from 'next/image'

src/App.js
``js
import { useAuth0 } from '@auth0/auth0-react';
import logo from './logo.svg';
import './App.css';
import { LoginButton } from './Login';
import { LogoutButton } from './Logout';
import { Profile } from './Profile'
function App() {
  const {isAuthenticated} = useAuth0();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {isAuthenticated ? <>
          <Profile/>
          <LogoutButton/>
        </> : <LoginButton/> }
        
      </header>
    </div>
  );
}

export default App;
``

src/Login.js
``js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export  function LoginButton() {
    const { loginWithRedirect } = useAuth0(); 
    return (
        <button onClick={ ()=> loginWithRedirect() }>Login</button>
    )
}
``

src/Logout.js
``js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export function LogoutButton() {
    const { logout } = useAuth0(); 
    return (
        <button onClick={ ()=> logout( { returnTo: window.location.origin } ) }>Logout</button>
    )
}
``

src/Profile.js
``js
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

export function Profile() {
    const { user, isAuthenticated, isLoggedIn  } = useAuth0();
    if (isLoggedIn) {
        return <div>Loading ...</div>
    }

    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name}/>
                <h2>{user.name}</h2>
                <p>Email: {user.email}</p>
            </div>
        )
    )
}
``

src/index.js
``js
import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider domain="dev-40-iyrrx.us.auth0.com" clientId="8fT7Vimeg61ZdWesiio1IFN68wIJLip1"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
``
