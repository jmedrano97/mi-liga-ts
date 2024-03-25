import React from "react";
import {type Match} from '../types.d'

// import { type Leagues as LeaguesType } from "../types";

// type Props = LeaguesType;

export const CardMatch: React.FC<Match> = (match) => {
  console.log(match);
  const classDivTeam = "flex items-center justify-between w-2/5 ";
  const classInputScore = `bg-back1 font-bold text-first border-0 border-b-2 text-center 
                          w-12 h-10 text-xl 
                          md:w-16 md:h-14 md:text-3xl`;
  const classImg = "w-28 h-14 md:w-40 md:h-40 object-cover shadow-2xl rounded-full";
  const classTeamName = "lg md:text-xl text-xs";

  return (
    // <a href={`/#`}>
    <div className=" bg-back1 shadow-xl mb-2 rounded-xl flex flex-col  hover:border-first border border-transparent transition duration-300 transform hover:scale-105 ">
      <div className="HEDER flex text-txt2 font-bold text-xs md:text-sm justify-center">
        {/* <span className="">10 de marzo de 2024</span> */}
        <span>Jornada {match.matchday}</span>
      </div>
      <div className="BODY flex p-8 text-center text-gray-300 items-center justify-between">
        <div className={classDivTeam}>
          <div>
            <img
              // src={img}
              className={classImg}
            />
            <p className={classTeamName}>{match.home_team_name}</p>
          </div>
          <div className="marcador">
            <input
              className={classInputScore}
              type="text" 
              value={match.home_team_score}
              />
          </div>
        </div>

        <div className="">
          <h1 className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-first from-firstDanger">VS</span></h1>
        </div>

        <div className={classDivTeam}>
          <div className="marcador">
            <input
              className={classInputScore}
              type="text"
              value={match.away_team_score} 
              />
          </div>
          <div>
            <img
              // src={img}
              className={classImg}
            />
            <p className={classTeamName}>{match.away_team_name}</p>
          </div>

        </div>

      </div>
      <div className="FOOTER">
        <p className="text-xs text-center text-gray-300">
          {match.match_date ? match.match_date : "Fecha por definir"}
        </p>
      </div>

    </div>
    // </a>
  );
};