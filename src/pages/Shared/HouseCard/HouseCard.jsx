import { Link } from "react-router-dom";

const HouseCard = ({ house }) => {
  console.log(house);
  const { _id, name, picture, city, description, rentPerMonth } = house;
  return (
    <div className="max-w-[350px] md:w-[350px] lg:w-[320px] xl:w-[390px] p-3 shadow-lg space-y-4 rounded-lg dark:border">
      <img
        alt="Product Image"
        className="w-[350px] h-[275px] object-cover  rounded-lg "
        src={picture}
      />
      <div className="grid gap-2 px-2 dark:bg-slate-800 dark:text-white">
        <h1 className="text-lg font-semibold ">{name}</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold"> ${rentPerMonth}</p>
          <p className="font-semibold">
            City: <span className="text-sm font-normal">{city}</span>
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center px-2">
        <button className="px-3 py-2 md:px-4  bg-[#5ca078] text-white dark:border rounded-md md:rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-[#5ebe86]">
          Book House
        </button>
        <Link to={`/houseDetails/${_id}`}>
          <button className="px-3 py-2 md:px-4 bg-white hover:bg-gray-800 dark:text-slate-800 hover:text-white border-black dark:hover:border-slate-200 dark:hover:text-slate-200 border duration-300  rounded-md md:rounded-lg font-semibold md:text-base sm:text-sm text-[12px]">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HouseCard;
