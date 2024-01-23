import React from "react";
import SearchHouses from "./SearchHouses/SearchHouses";

const Banner = () => {
  return (
    <section className="flex w-full items-center justify-center bg-white px-8 dark:bg-slate-800 dark:text-white">
      <div className="flex w-full max-w-6xl gap-10 lg:flex-row flex-col items-center justify-between">
        <div className="max-w-md space-y-2 md:space-y-6">
          <h1 className="md:text-4xl text-2xl font-bold leading-tight text-gray-900 dark:text-white">
            Discover Your Dream Home with House Hunter
          </h1>
          <p className="lg:text-lg sm:text-base text-sm text-gray-600 dark:text-white">
            Target and Attract Your Ideal Customers Effectively with Our
            Powerful Tool.
          </p>
          {/* Search Box */}
          <SearchHouses />
        </div>
        <div className="relative">
          <img
            src="https://i.ibb.co/PWYMstL/hand-holding-house.png"
            className="relative md:h-[600px]  sm:h-[500px] h-[300px]   w-[500px] bg-gray-400 rounded-b-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
