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

export const fetchLeagueByLink = async (link: string) => {
  try {
    const response = await axios.get(`http://localhost:4000/api/v1/leagueByLink/${link}`);
    return response.data.data;
  } catch (error) {
    console.error('Error al obtener datos de la API: ', error);
    throw error;
  }
};

export const fetchCompetitionsByLeague = async (league_id: number) => {
  try {
    const response = await axios.get(`http://localhost:4000/api/v1/competitionsByLeague/${league_id}`);
    return response.data.data;
  } catch (error) {
    console.error('Error al obtener datos de la API: ', error);
    throw error;
  }
}

export const fetchPositionTableByCompetition = async (competition_id: number) => {
  try {
    const response = await axios.get(`http://localhost:4000/api/v1/positionTableByCompetition/${competition_id}`);
    return response.data.data;
  } catch (error) {
    console.error('Error al obtener datos de la API: ', error);
    throw error;
  }
}