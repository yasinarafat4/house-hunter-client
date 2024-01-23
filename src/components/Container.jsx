import React from "react";

const Container = ({ children }) => {
  return (
    <div className="dark:bg-slate-800 dark:text-white max-w-[2520px] mx-auto px-2 md:px-10 lg:px-4 xl:px-10 mb-10">
      {children}
    </div>
  );
};

export default Container;
