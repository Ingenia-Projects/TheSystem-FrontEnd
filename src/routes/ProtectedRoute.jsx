// src/routes/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react'; // Usa el hook useAuthenticator
import styled from 'styled-components';

const Loader = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

const ProtectedRoute = ({ children }) => {
  const { route } = useAuthenticator((context) => [context.route]);

  if (route === 'loading') {
    return <Loader>Cargando...</Loader>;
  }

  // Redirige al login si el usuario no está autenticado
  if (route !== 'authenticated') {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
