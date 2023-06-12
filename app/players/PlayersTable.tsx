"use client";

import { useRouter } from "next/navigation";
import { Button } from "../../components";

interface PlayersTableProps {
  playersData: {
    name: string;
    wins: number;
    plays: number;
  }[];
}

const PlayersTable = ({ playersData }: PlayersTableProps) => {
  const router = useRouter();

  return (
    <div style={{ backgroundColor: "grey" }}>
      <ul>
        {playersData.map((player) => (
          <li key={player.name}>
            <Button onClick={() => router.push(`/players/${player.name}`)}>
              <div>{player.name}</div>
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
