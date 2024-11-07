// src/routes/AppRoutes.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/home';
import ProtectedRoute from './ProtectedRoute'; // Si tienes rutas protegidas adicionales

const AppRoutes = ({ signOut, user }) => {
  return (
    <Router>
      <Routes>
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <MainLayout signOut={signOut} user={user}>
                <Home user={user} />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        {/* Redirigir cualquier ruta desconocida a /home */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
