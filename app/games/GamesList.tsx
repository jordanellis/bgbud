"use client";

import { Button, Input } from "../../components";
import { useState } from "react";

interface GamesListProps {
  data: Array<{
    game: string;
    plays: number;
  }>;
}

const GamesList = ({ data }: GamesListProps) => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col gap-6 p-2">
      <div className="flex gap-5 mx-auto">
        <h2 className="text-zinger-default text-h2 my-auto">Search:</h2>
        <Input
          className="w-56 mx-auto"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <ul className="p-6 flex gap-6 flex-wrap justify-center">
        {data
          .filter(
            ({ game }) =>
              !search || game.toLowerCase().includes(search.toLowerCase())
          )
          .map((game, i) => {
            return (
              <li key={i}>
                <Button variant="secondary-filled" to={`/games/${game.game}`}>
                  <div className="text-body2">{game.game}</div>{" "}
                  <div className="text-subtitle1">{"Plays: " + game.plays}</div>
                </Button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default GamesList;
