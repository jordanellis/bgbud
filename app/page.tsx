import React from "react";
import { fetchAllBGData } from "../util/fetch";
import GamesTable from "./GamesTable";
import { Card } from "../components";

async function getData() {
  const data = await fetchAllBGData();

  return data;
}

const IndexPage = async () => {
  const data = await getData();

  return (
    <div className="flex flex-col gap-4">
      <Card>
        <ul>
          <li>H index</li>
          <li>Players played with</li>
          <li>Play totals?</li>
        </ul>
      </Card>
      <GamesTable data={data} />
    </div>
  );
};

export default IndexPage;
