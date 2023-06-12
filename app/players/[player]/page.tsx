const PlayerPage = ({ params }: { params: { player: string } }) => {
  const player = decodeURI(params.player);

  return <div className="text-primary-text">{player}</div>;
};

export default PlayerPage;
