import React from "react";
import housesCover from '../../assets/houses-cover.jpg';
import PageCover from "../../components/PageCover";

const Houses = () => {
  return (
    <div>
      {/* Cover */}
      <PageCover
        bgImg={housesCover}
        title={"Our All Houses"}
        text={"Explore a diverse range of houses tailored to your preferences."}
      />
      {/* Body */}
    </div>
  );
};

export default Houses;
