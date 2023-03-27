import React from "react";
import { DonateActionBox } from "../components/home/DonateActionBox";
import { InfoActionBoxes } from "../components/home/InfoActionBoxes";
import { ProjectsMap } from "../components/home/ProjectsMap";
import { SearchBox } from "../components/home/SearchBox";

const Home = () => {
  return (
    <div className="home">
      <ProjectsMap />
      <SearchBox />
      <InfoActionBoxes />
      <DonateActionBox />
    </div>
  );
};

export default Home;
