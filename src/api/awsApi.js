// src/api/awsApi.js
import axios from 'axios';

const awsApi = axios.create({
  baseURL: 'https://tu-api.aws.com', // Reemplaza con la URL de tu API de desarrollo
  headers: {
    'Content-Type': 'application/json',
  },
});

// Manejo de errores globales (opcional)
awsApi.interceptors.response.use(
  (response) => response,
  (error) => {
    // Manejo de errores global, opcional
    if (error.response && error.response.status === 401) {
      console.warn('Usuario no autorizado o sesión expirada');
    }
    return Promise.reject(error);
  }
);

export default awsApi;
