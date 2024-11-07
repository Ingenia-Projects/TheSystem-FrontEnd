// src/styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: ${({ theme }) => theme.background || '#ffffff'};
    color: ${({ theme }) => theme.text || '#000000'};
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  /* Mejoras de responsividad */
  @media (max-width: 768px) {
    body {
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    body {
      font-size: 14px;
    }
  }
`;

export default GlobalStyle;
