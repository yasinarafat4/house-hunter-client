import React from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import BtnBookNow from "../../components/BtnBookNow";

const HouseDetails = () => {
  const houseDetails = useLoaderData();
  console.log("House Details", houseDetails);
  const {
    _id,
    name,
    picture,
    city,
    description,
    rentPerMonth,
    availabilityDate,
    bathrooms,
    bedrooms,
    phoneNumber,
    roomSize,
  } = houseDetails;
  return (
    <div className="bg-white dark:bg-slate-800 dark:text-white p-6 shadow-lg rounded-lg">
      {/* Dynamic page title */}
      <Helmet>
        <title>hHunter | House Details</title>
      </Helmet>

      <h1 className="text-2xl font-semibold mb-4 text-center">{name}</h1>
      <div className="grid grid-cols lg:grid-cols-2 justify-center items-center">
        <div>
          <img
            src={picture}
            alt={name}
            className="w-full md:w-2/4 rounded-lg mb-4 mx-auto"
          />
          <p className="text-lg my-4">{description}</p>
        </div>
        <div>
          <div className="mb-6">
            <h2 className="text-base font-semibold mb-2">
              City:<span className="font-normal"> {city}</span>
            </h2>
            <h2 className="text-base font-semibold mb-2">
              Bathrooms:<span className="font-normal"> {bathrooms}</span>
            </h2>
            <h2 className="text-base font-semibold mb-2">
              Bedrooms:{" "}
              <span className="font-normal">
                {bedrooms} ({roomSize})
              </span>
            </h2>
            <h2 className="text-base font-semibold mb-2">
              Availability Date:{" "}
              <span className="font-normal">{availabilityDate}</span>
            </h2>
            <h2 className="text-base font-semibold mb-2">
              Phone Number: <span className="font-normal">{phoneNumber}</span>
            </h2>
          </div>
          <div className="flex justify-between items-center lg:block">
            <p className="text-base lg:text-2xl font-semibold mb-4">
              <span className="text-base font-semibold">
                Rent Per Month: $
                <span className="font-normal">{rentPerMonth}</span>
              </span>
            </p>
            <BtnBookNow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseDetails;
