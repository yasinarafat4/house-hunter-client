import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center mt-40">
      <div className="w-12 h-12 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-[#b6733d] border-[#5ca078]"></div>
    </div>
  );
};

export default Spinner;
