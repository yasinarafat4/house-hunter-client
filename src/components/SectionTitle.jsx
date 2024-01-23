import React from "react";

const SectionTitle = ({heading, subHeading }) => {
  return (
    <>
      <h2 className="text-start text-4xl font-bold mb-1 text-[#2E5879] dark:text-slate-300 mt-6">
        {heading}
      </h2>
      <p className="w-full md:w-2/3 xl:w-1/2 text-start mb-4 dark:text-gray-300">
        {subHeading}
      </p>
    </>
  );
};

export default SectionTitle;
