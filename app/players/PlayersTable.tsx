"use client";

import { Button, Input } from "../../components";
import { useState } from "react";

interface PlayersTableProps {
  playersData: {
    name: string;
    wins: number;
    plays: number;
  }[];
}

const PlayersTable = ({ playersData }: PlayersTableProps) => {
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
        {playersData
          .filter(
            ({ name }) =>
              !search || name.toLowerCase().includes(search.toLowerCase())
          )
          .map((player) => (
            <li key={player.name}>
              <Button variant="secondary-filled" to={`/players/${player.name}`}>
                <div className="text-h3 pb-1">{player.name}</div>
                <div>
                  {`Win Percentage: ${(
                    (100 * player.wins) /
                    player.plays
                  ).toFixed(2)}%`}
                </div>
                <div>{`Plays: ${player.plays}`}</div>
                <div>{`Wins: ${player.wins}`}</div>
              </Button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PlayersTable;
