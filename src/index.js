// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { ThemeProviderCustom } from './context/ThemeContext';
import GlobalStyle from './styles/GlobalStyle';

Amplify.configure(awsExports);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProviderCustom>
      <GlobalStyle />
      <App />
    </ThemeProviderCustom>
  </React.StrictMode>
);

reportWebVitals();
