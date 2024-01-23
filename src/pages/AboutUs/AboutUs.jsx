import React, { useState } from "react";
import aboutCover from "../../assets/about.jpg";
import PageCover from "../../components/PageCover";

const AboutUs = () => {
  const accordionItems = [
    {
      title: "List Your Property Effortlessly",
      description:
        "House owners can easily list their properties for rent on House Hunter. Provide detailed information about your house, and reach potential renters effortlessly.",
    },
    {
      title: "Find Your Dream Home",
      description:
        "House renters can explore a variety of available houses on House Hunter. Search based on preferences, view details, and make bookings tailored to their needs.",
    },
    {
      title: "Secure and Transparent Booking Process",
      description:
        "Enjoy a secure and transparent booking process on House Hunter. Our platform ensures a reliable and trustworthy experience for both house owners and renters.",
    },
    {
      title: "Personalized Support",
      description:
        "House Hunter provides personalized support to both house owners and renters. Our dedicated team is here to assist you at every step, making your experience seamless and enjoyable.",
    },
  ];

  // toggle state and function
  const [isOpen, setIsOpen] = useState(null);
  const handleToggle = (idx) =>
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));

  return (
    <div>
      {/* Cover */}
      <PageCover
        bgImg={aboutCover}
        title={"About Us"}
        text={"Discover your dream home with House Hunter. Explore now!"}
      />
      {/* Body */}
      <div className="container mx-auto my-8 px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Welcome to House Hunter
        </h2>
        <p className="text-slate-600 mb-6 dark:text-slate-300">
          House Hunter is a delightful platform that simplifies the house rental
          process. It serves as a connecting bridge between house owners, who
          wish to rent out their properties, and house renters, who are seeking
          their dream homes. With HouseHunter, owners can effortlessly list
          their houses for rent, providing detailed information about their
          properties.
        </p>
        {/* Accordion */}
        <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold">
          Here What We Do!
        </h2>
        <div className="flex justify-center">
          <div className=" max-w-[550px] rounded-lg py-10 space-y-6 cursor-pointer">
            {/* maping each accordion  */}
            {accordionItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleToggle(idx)}
                className="flex items-center"
              >
                {/* the index div  */}
                <div className="w-16 h-16 bg-[#355E72] flex justify-center items-center text-white text-2xl font-semibold rounded-xl font-sans">
                  <span>0{idx + 1}</span>
                </div>
                <div className="w-10 h-[2px] bg-[#355E72] relative">
                  <span className="w-3 h-3 bg-white absolute -left-2 -top-[5px] z-40 rounded-full border-2 border-[#355E72]"></span>
                  <span className="bg-[#355E72] w-10 h-1"></span>
                </div>
                {/* main accordion div  */}
                <div>
                  <div className="max-w-[450px] bg-sky-50 shadow-md border-t-[12px] p-3 border-[#355E72] relative">
                    <span className="h-0 w-0 border-b-[40px] border-b-transparent border-r-[40px] border-r-[#355E72] absolute top-0 right-0"></span>
                    <h1 className="text-[#355E72] text-xl text-center">
                      {item.title}
                    </h1>
                  </div>
                  <div
                    className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600  ${
                      isOpen === idx
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="max-w-[450px] rounded-br-xl rounded-bl-xl bg-[#355E72] text-white p-6 text-center text-sm">
                        {item.description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
