import { fetchGameData } from "../../../util/fetch";

const GamePage = async ({ params }) => {
  const game = decodeURI(params.game);
  const gameData = await fetchGameData(game);
  console.log(gameData);

  return (
    <div className="text-primary-text">
      {game}
      {gameData.sort().map((d) => (
        <div>{d.winner}</div>
      ))}
      {/* 
				-Chart of plays per month
				-King of the Game (most wins)
				-Best win percentage
				-Record highest points
				-List of plays
				*/}
    </div>
  );
};

export default GamePage;
