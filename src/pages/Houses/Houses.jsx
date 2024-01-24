import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import housesCover from "../../assets/houses-cover.jpg";
import PageCover from "../../components/PageCover";
import HouseCard from "../Shared/HouseCard/HouseCard";

const Houses = () => {
  const [houses, setHouses] = useState([]);
  useEffect(() => {
    fetch("https://house-hunter-server-y95t279jc-yasinarafat4.vercel.app/houses")
      .then((response) => response.json())
      .then((data) => {
        setHouses(data);
      })
      .catch((error) => {
        console.error("Error fetching popular houses data: ", error);
      });
  }, []);

  return (
    <div>
       {/* Dynamic page title */}
       <Helmet>
        <title>hHunter | All Houses</title>
      </Helmet>
      {/* Cover */}
      <PageCover
        bgImg={housesCover}
        title={"Our All Houses"}
        text={"Explore a diverse range of houses tailored to your preferences."}
      />
      {/* Body */}
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2">
        {houses.map((house) => (
          <HouseCard key={house._id} house={house} />
        ))}
      </div>
    </div>
  );
};

export default Houses;
