import { useMemo } from "react";
import { Card } from "../components";
import { BGData, getGamePlayTotals, skipPlayers } from "../util/fetch";

const HomeOverview = ({ data }: { data: BGData[] }) => {
  const findHIndex = (arr: BGData[]) => {
    const games = getGamePlayTotals(arr);

    if (games.length === 0) return [];

    let index = 0;
    while (index < games[index].plays) index++;

    return games.slice(0, index);
  };

  const hIndexList = useMemo(() => findHIndex(data), [data]);

  const uniquePlayers = useMemo(() => {
    const arr = data.map((item) => item.Players.split(", "));
    return Array.from(new Set(arr.flat(2))).filter(
      (player) => !skipPlayers.includes(player)
    );
  }, [data]);

  return (
    <Card className="text-h2 text-zinger-default my-6 mx-8 py-10 px-14 flex justify-between">
      <h2>Total games played: {data.length}</h2>
      <h2>Total people played with: {uniquePlayers.length}</h2>
      <h2
        className="flex gap-2"
        title={hIndexList.map(({ game }) => game).join("\n")}
      >
        H-index = <div>{hIndexList.length}</div>
      </h2>
    </Card>
  );
};

export default HomeOverview;
