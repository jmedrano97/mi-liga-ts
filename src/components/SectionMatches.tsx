import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { RootState } from '../app/store'
import type { CompetitionLeague } from '../types.d'
import axios from 'axios'
import {setLoadingOverlay} from '../features/leagues/LoadingOverlaySlice'
import {type ListOfMatches, type Match} from '../types.d'



const SectionMatches = () => {
  const dispatch = useDispatch();

  const competitions = useSelector((state: RootState) => state.competitionsLeague);
  const [matches, setMatches] = useState<ListOfMatches>([]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLoadingOverlay(true));
    const selectedId = parseInt(event.target.value);
    console.log('selectedId:', selectedId);
    // Hacer una solicitud a la API utilizando Axios con el ID de la competición seleccionada
    axios.get(`http://localhost:4000/api/v1/matchesByCompetition/${selectedId}`)
      .then(response => {
        setMatches(response.data.data);
        console.log('matches:', response.data.data);
        dispatch(setLoadingOverlay(false));
      })
      .catch(error => {
        setMatches([]);
        console.error('Error al obtener los encuentros:', error);
        dispatch(setLoadingOverlay(false));
      });
  };
  return (
    <div>
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-first from-firstDanger">ENCUENTROS</span></h1>
      <div>
        {/* Dame un select con las competiciones */}
        <select
          className="w-1/2 py-3 px-4 rounded-xl outline-none bg-[#343434] text-gray-100 group"
          name="competition"
          id="competition"
          onChange={handleSelectChange}
        >
          <option value="0">Selecciona una competición</option>
          {competitions.map((competition: CompetitionLeague) => (
            <option key={competition.competition_id} value={competition.competition_id}>{competition.name}</option>
          ))}
        </select>

      </div>

      <div>
        <h2>Encuentros de la competición seleccionada:</h2>
        <ul>
          {matches.map((match: Match) => (
            <div key={match.match_id}>
              <li>{match.home_team_name} vs {match.away_team_name}</li>
            </div>
          ))}
        </ul>
      </div>



    </div>
  )
}

export default SectionMatches