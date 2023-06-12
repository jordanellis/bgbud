"use client";

import { useRouter } from "next/navigation";
import { Button, Card } from "../../components";

interface GamesListProps {
  data: Array<{
    game: string;
    plays: number;
  }>;
}

const GamesList = ({ data }: GamesListProps) => {
  const router = useRouter();

  return (
    <>
      <Card>
        <ul>
          <li>H index</li>
          <li>games totals</li>
        </ul>
      </Card>
      <ul>
        {data.map((game, i) => {
          return (
            <li key={i}>
              <Button onClick={() => router.push(`/games/${game.game}`)}>
                <div>{game.game}</div> <div>{"Plays: " + game.plays}</div>
              </Button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default GamesList;
