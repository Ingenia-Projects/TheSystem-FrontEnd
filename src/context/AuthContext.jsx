// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Auth } from 'aws-amplify'; // Importa Auth desde aws-amplify

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Autenticación usando el módulo Auth de aws-amplify
    Auth.currentAuthenticatedUser()
      .then((user) => {
        setUser(user);
        setLoading(false);
      })
      .catch(() => {
        setUser(null);
        setLoading(false);
      });
  }, []);

  const signOut = () => Auth.signOut().then(() => setUser(null));

  const value = {
    user,
    isAuthenticated: !!user,
    loading,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
