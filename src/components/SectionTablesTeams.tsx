import React from 'react'
import TablePositions from './flowbite/tablePositions'
import { useSelector } from 'react-redux';
// fetchPositionTableByCompetition
import { fetchPositionTableByCompetition } from '../api/ligas.api';

const SectionTablesTeams = () => {
  const ligaDetails = useSelector((state: any) => state.detailLeague);

  const competitions = useSelector((state: any) => state.competitionsLeague);

  competitions.map((competition: any) => {
    if(competition.typeOfCompetition_id == 1){
      
    }
  });


  return (
    <div>
        {/* font-extrabold */}
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-first from-firstDanger">TABLA DE POSICIONES</span></h1>
        {/* <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p> */}

        <TablePositions />



    </div>
  ) 
}

export default SectionTablesTeams