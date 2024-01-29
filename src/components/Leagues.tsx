import React from "react";
import { type ListOfLeagues } from "../types";
import { CardLeague } from "./CardLeague";


type Props = {
  leagues: ListOfLeagues;
};

export const Leagues: React.FC<Props> = ({ leagues }) => {

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
      {leagues.map((liga) => (
        <CardLeague 
          id={liga.id}
          img={liga.img}
          description={liga.description}
          name={liga.name}
          link={liga.link}
        />
      ))}
    </div>
  );
};