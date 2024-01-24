import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import FeaturedHouse from "./FeaturedHouse/FeaturedHouse";
import FindByRoomSize from "./FindByRoomSize/FindByRoomSize";
import PopularHouses from "./PopularHouses/PopularHouses";

const Home = () => {
  return (
    <>
      {/* Dynamic page title */}
      <Helmet>
        <title>hHunter | Home</title>
      </Helmet>
      <Banner />
      <PopularHouses />
      <FindByRoomSize />
      <FeaturedHouse />
    </>
  );
};

export default Home;
