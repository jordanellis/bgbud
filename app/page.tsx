import React from "react";
import { fetchAllBGData } from "../util/fetch";
import GamesTable from "./GamesTable";
import HomeOverview from "./HomeOverview";

async function getData() {
  const data = await fetchAllBGData();

  return data;
}

const IndexPage = async () => {
  const data = await getData();

  return (
    <div className="flex flex-col gap-4">
      <HomeOverview data={data} />
      <GamesTable data={data} />
    </div>
  );
};

export default IndexPage;
