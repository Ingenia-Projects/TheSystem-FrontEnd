// src/context/ThemeContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const ThemeContext = createContext();

const lightTheme = {
  background: '#ffffff',
  text: '#000000',
  headerBg: '#f5f5f5',
  sidebarBg: '#e0e0e0',
  sidebarText: '#000000',
  sidebarHoverBg: '#d5d5d5',
  shadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  borderColor: '#cccccc',
  activeLink: '#6200ea',
};

const darkTheme = {
  background: '#121212',
  text: '#ffffff',
  headerBg: '#1f1f1f',
  sidebarBg: '#2c2c2c',
  sidebarText: '#ffffff',
  sidebarHoverBg: '#3a3a3a',
  shadow: '0 2px 4px rgba(255, 255, 255, 0.1)',
  borderColor: '#333333',
  activeLink: '#bb86fc',
};

export const ThemeProviderCustom = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  // Carga el tema desde el almacenamiento local si existe, de lo contrario usa lightTheme
  useEffect(() => {
    const storedTheme = localStorage.getItem('appTheme');
    setTheme(storedTheme === 'dark' ? darkTheme : lightTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(newTheme);
    localStorage.setItem('appTheme', newTheme === lightTheme ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
