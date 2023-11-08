import { Anchor } from "../components";
import { BGData } from "../util/fetch";

const GamesTable = ({ data }: { data: BGData[] }) => {
  const dateComparator = (v1: BGData, v2: BGData) => {
    return new Date(v2.Date).getTime() - new Date(v1.Date).getTime();
  };

  return (
    <table className="text-body1 text-primary-text text-left">
      <thead className="uppercase bg-primary-card-bg text-primary-text">
        <tr>
          <th className="px-6 py-3">Date</th>
          <th className="px-6 py-3">Game</th>
          <th className="px-6 py-3">Players</th>
          <th className="px-6 py-3">Winner</th>
        </tr>
      </thead>
      <tbody>
        {data?.sort(dateComparator).map((d, i) => (
          <tr
            key={i}
            className="border-b bg-primary-bg border-primary-card-border"
          >
            <td className="px-6 py-4">{d.Date.toString()}</td>
            <td className="px-6 py-4">
              <Anchor to={`games/${d["Game Name"]}`}>{d["Game Name"]}</Anchor>
            </td>
            <td className="px-6 py-4">{d.Players}</td>
            <td className="px-6 py-4">
              {d.Winner.length > 0 ? d.Winner : d["Co-op Success"]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GamesTable;
