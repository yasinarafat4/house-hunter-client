import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../../assets/error-img.png";

const ErrorPage = () => {
  return (
    <div className="bg-[#39d479] pb-10 px-2 flex flex-col min-h-screen">
      <img className="w-full md:w-8/12 mx-auto" src={errorImg} alt="" />
      <div className="text-center">
        <Link
          className="bg-[#41e786] mt-4 px-4 py-2 md:text-base lg:text-xl xl:text-2xl rounded-md text-white"
          to="/"
        >
          Let's Go To Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
