import React from "react";
import { fetchAllUserBGData } from "../../util/fetch";
import PlayersTable from "./PlayersTable";

export default async function PlayersHome() {
  const data = await fetchAllUserBGData();

  return (
    <div>
      <PlayersTable playersData={data} />
    </div>
  );
}
