import axios from 'axios';

export const fetchLeagues = async () => {
  try {
    const response = await axios.get('http://localhost:4000/api/v1/leagues');
    return response.data;
  } catch (error) {
    console.error('Error al obtener datos de la API: ', error);
    throw error;
  }
};