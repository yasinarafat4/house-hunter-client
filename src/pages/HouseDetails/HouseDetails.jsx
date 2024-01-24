import React from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

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
    <div className="bg-white dark:bg-slate-900 dark:text-white p-6 shadow-lg rounded-lg">
      {/* Dynamic page title */}
      <Helmet>
        <title>hHunter | House Details</title>
      </Helmet>

      <h1 className="text-2xl font-semibold mb-4">{name}</h1>
      <div className="lg:flex justify-center items-center">
        <div>
          <img
            src={picture}
            alt={name}
            className="w-full md:w-2/4 rounded-lg mb-4 mx-auto"
          />
        </div>
        <div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold">City: {city}</h2>
            <h2 className="text-lg font-semibold">Bathrooms: {bathrooms}</h2>
            <h2 className="text-lg font-semibold">Bedrooms: {bedrooms}({roomSize})</h2>
            <h2 className="text-lg font-semibold">Availability Date: {availabilityDate}</h2>
            <h2 className="text-lg font-semibold">Phone Number: {phoneNumber}</h2>
          </div>
          <div className="mb-4">
            <p className="mb-4">{description}</p>
            <p className="text-lg font-semibold mb-4">
              <span className="text-base font-normal">Rent Per Month: ${rentPerMonth}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseDetails;
