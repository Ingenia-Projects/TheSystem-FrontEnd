// src/App.js
import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const App = () => {
  return (
    <Authenticator loginMechanisms={['email']} hideSignUp>
      {({ signOut, user }) => (
        // Renderiza las rutas solo si el usuario está autenticado
        user ? (
          <AppRoutes signOut={signOut} user={user} />
        ) : null // Evita que el contenido se muestre mientras se redirige al login
      )}
    </Authenticator>
  );
};

export default App;
