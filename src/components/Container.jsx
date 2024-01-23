import React from "react";

const Container = ({ children }) => {
  return (
    <div className="dark:bg-slate-800 dark:text-white max-w-[2520px] mx-auto md:px-10 px-4">
      {children}
    </div>
  );
};

export default Container;
