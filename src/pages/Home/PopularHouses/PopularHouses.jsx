import React, { useEffect, useState } from "react";
import Container from "../../../components/Container";
import SectionTitle from "../../../components/SectionTitle";
import HouseCard from "../../Shared/HouseCard/HouseCard";

const PopulerHouses = () => {
  const [popularHouses, setPopularHouses] = useState([]);

  useEffect(() => {
    fetch("/houses.json")
      .then((response) => response.json())
      .then((data) => {
        const filteredPopulerHouses = data.filter(
          (house) => house.category === "Popular"
        );

        setPopularHouses(filteredPopulerHouses);
      })
      .catch((error) => {
        console.error("Error fetching popular houses data: ", error);
      });
  }, []);
  console.log("Popular Data", popularHouses);
  return (
    <Container>
      {/* Title */}
      <SectionTitle
        heading={"Popular Houses"}
        subHeading={"Explore our curated selection of beautiful houses"}
      />
      {/* Body */}
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2">
        {popularHouses.map((house) => (
          <HouseCard key={house._id} house={house} />
        ))}
      </div>
    </Container>
  );
};

export default PopulerHouses;
