import React from "react";
import Banner from "./Banner/Banner";
import FeaturedHouse from "./FeaturedHouse/FeaturedHouse";
import FindByRoomSize from "./FindByRoomSize/FindByRoomSize";
import PopularHouses from "./PopularHouses/PopularHouses";

const Home = () => {
  return (
    <>
      <Banner />
      <PopularHouses />
      <FindByRoomSize />
      <FeaturedHouse />
    </>
  );
};

export default Home;
