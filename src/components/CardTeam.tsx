import React from "react";

import { type Team as LeaguesTeam } from "../types";

type Props = LeaguesTeam;

export const CardTeam: React.FC<Props> = (data) => {
  // league_id
  const { team_id,name,created_at,img } = data;

  return (
    // <a href={`/${team_id}`}>
    <a href="#">  
      <div className="bg-back2 p-2 rounded-xl flex items-center gap-2  text-gray-300 hover:border-highlight2 border border-transparent transition duration-300 transform hover:scale-105">
        <div className="w-1/3">
          <img
            src={img}
            className=" w-24 h-24 md:w-32 md:h-32 object-cover shadow-2xl rounded-full transition duration-300 transform hover:scale-105"
          />
        </div>
        <div className="flex flex-col text-center w-2/3">
          <p className="text-xl">{name}</p>
          {/* <span className="text-gray-400">{name}</span>
          <p className="text-gray-600">{created_at}</p> */}
        </div>
      </div>
    </a>
  );
};