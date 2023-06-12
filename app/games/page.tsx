import React, { Suspense } from "react";
import { fetchAllGameBGData } from "../../util/fetch";
import GamesList from "./GamesList";

const GamesHome = async () => {
  const data = await fetchAllGameBGData();

  return (
    <div>
      <Suspense fallback="Loading...">
        <GamesList data={data} />
      </Suspense>
    </div>
  );
};

export default GamesHome;
