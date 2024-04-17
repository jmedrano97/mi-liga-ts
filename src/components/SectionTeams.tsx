import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { fetchTeams } from '../api/ligas.api'
import { useDispatch } from 'react-redux'
import { setLoadingOverlay } from '../features/leagues/LoadingOverlaySlice'
import { type Team } from '../types.d';
import { CardTeam } from './CardTeam';


const SectionTeams = () => {
  const id_liga = useSelector((state: RootState) => state.detailLeague.league_id);
  const [teams, setTeams] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoadingOverlay(true));

      try{
        const response = await fetchTeams(id_liga);
        console.log("response: ",response)
        setTeams(response)
      }catch (error) {
        console.error("Error al obtener los datos", error);
      } finally {
        dispatch(setLoadingOverlay(false));
      }
    }

    fetchData();
  }, [id_liga,dispatch])

  return (
    <div className='p-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-4'>
      {teams.map((team:Team)=>(
        <div key={team.team_id} className='' >
          <CardTeam {...team}/>
        </div>
      ))}

    </div>
  ) 
}

export default SectionTeams