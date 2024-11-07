// src/api/homeApi.js
import awsApi from './awsApi';

export const fetchHomeData = async () => {
  try {
    const response = await awsApi.get('/home/data'); // Ajusta la ruta según tu API
    return response.data;
  } catch (error) {
    console.error('Error en fetchHomeData:', error);
    throw error;
  }
};
