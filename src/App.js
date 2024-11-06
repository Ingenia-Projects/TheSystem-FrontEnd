import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';  // Usa Authenticator en lugar de AmplifyAuthenticator
import '@aws-amplify/ui-react/styles.css';  // Importa estilos de UI de Amplify
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (  // Proporciona acceso a signOut y user
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Hola, {user.username}</h1>
            <p>
              Edita <code>src/App.js</code> y guarda para recargar.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aprende React
            </a>
            <button onClick={signOut}>Cerrar sesión</button> {/* Botón de Cerrar sesión */}
          </header>
        </div>
      )}
    </Authenticator>
  );
}

export default App;
