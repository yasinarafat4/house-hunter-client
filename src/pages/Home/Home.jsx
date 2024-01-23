import React from "react";
import Banner from "./Banner/Banner";
import FeaturedHouse from "./FeaturedHouse/FeaturedHouse";
import PopularHouses from "./PopularHouses/PopularHouses";

const Home = () => {
  return (
    <>
      <Banner />
      <PopularHouses />
      <FeaturedHouse />
    </>
  );
};

export default Home;
