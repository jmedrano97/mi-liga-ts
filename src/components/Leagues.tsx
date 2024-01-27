import React from "react";
import { type ListOfLeagues } from "../types";
import { CardLeague } from "./CardLeague";


type Props = {
  leagues: ListOfLeagues;
};

export const Leagues: React.FC<Props> = ({ leagues }) => {

  return (
    <ul>
      {leagues.map((liga) => (
        <CardLeague 
          id={liga.id}
          img={liga.img}
          description={liga.description}
          name={liga.name}
          link={liga.link}
        />
      ))}
    </ul>
  );
};