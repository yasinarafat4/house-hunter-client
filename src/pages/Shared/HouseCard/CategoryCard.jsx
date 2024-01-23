import React from "react";

const CategoryCard = ({ roomSize }) => {
  const { _id, name, picture, city, rentPerMonth } = roomSize;
  return (
    <div className="m-4 shadow-lg p-2 md:p-3 lg:p-4 grid grid-cols-2 justify-center items-center gap-4">
      <div>
        <img className="w-full lg:h-40 rounded-md" src={picture} alt="" />
        <p className="font-bold text-sm lg:text-base mt-1">
          Name:{" "}
          <span className=" font-normal">{name}</span>
        </p>
      </div>
      <div className="space-y-3">
        <p className="font-bold text-sm lg:text-base">${rentPerMonth}</p>
        <div className="flex-grow-1 text-sm lg:text-base">{city}</div>

        <button className="px-2 py-1 md:px-3 md:py-2  bg-[#5ca078] text-white dark:border rounded-md md:rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-[#5ebe86]">
          Book House
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
