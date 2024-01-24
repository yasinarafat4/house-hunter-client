import React, { useState } from "react";
import toast from "react-hot-toast";

const BtnBookNow = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleBookHouse = () => {
    setIsDisabled(true);
    toast.success("House Booked Successfully!");
  };

  return (
    <div>
      <button
        onClick={handleBookHouse}
        disabled={isDisabled}
        className={`px-3 py-2 md:px-4 bg-[#5ca078] text-white dark:border rounded-md md:rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-[#5ebe86] ${
          isDisabled ? "bg-slate-300 hover:bg-slate-300 text-slate-400 cursor-not-allowed" : ""
        }`}
      >
        Book House
      </button>
    </div>
  );
};

export default BtnBookNow;
