import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SearchResult = () => {
  return (
    <div className=" flex flex-col gap-2 items-center min-h-[calc(100vh-20px)] justify-center ">
       {/* Dynamic page title */}
       <Helmet>
        <title>hHunter | Search Result</title>
      </Helmet>
      <h2 className="p-5 text-red-400 font-bold text-center  text-4xl">
        No Task Found Yet!
      </h2>
      <Link
        to={"/"}
        className="bg-[#b6733d] px-5 py-2 text-xl rounded-md hover:bg-[#d3894d] text-gray-50"
      >
        Back Home
      </Link>
    </div>
  );
};

export default SearchResult;
