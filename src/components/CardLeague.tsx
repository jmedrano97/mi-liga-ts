import React from "react";

import { type Leagues as LeaguesType } from "../types";

type Props = LeaguesType;

export const CardLeague: React.FC<Props> = (data) => {
  const { img, description, name, league_link } = data;

  return (
    <a href={`/${league_link}`}>
      <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300 hover:border-first border border-transparent transition duration-300 transform hover:scale-105">
        <img
          src={img}
          className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
        />
        <p className="text-xl">{name}</p>
        <span className="text-gray-400">{name}</span>
        <p className="text-gray-600">{description}</p>
      </div>
    </a>
  );
};