import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
const LoginAndRegister = () => {
  const [register, setRegister] = useState(false);
  return (
    <>
      {/* Dynamic page title */}
      <Helmet>
        <title>hHunter | Login and Register</title>
      </Helmet>
      <div className="w-80 md:w-96 lg:w-[800px] mx-auto bg-white dark:bg-slate-800 dark:text-white flex items-center relative overflow-hidden shadow-xl">
        {/* register form  */}
        <form
          className={`p-8 w-full ${
            register
              ? "lg:translate-x-0"
              : "lg:-translate-x-full hidden lg:block"
          } duration-500`}
        >
          <h1 className="backdrop-blur-sm text-2xl lg:text-4xl pb-2">
            Register
          </h1>
          <div className="space-y-2">
            {/* Name */}
            <label htmlFor="name" className="block">
              Name
            </label>
            <input
              id="name"
              type="name"
              placeholder="Your Name"
              className="p-3 block w-full outline-none border rounded-md invalid:border-red-600 valid:border-[#b6733d] dark:bg-slate-600 dark:text-slate-300"
            />
            {/* Role */}
            <label htmlFor="name" className="block">
              Role
            </label>
            <select
              name="roomSize"
              className="w-full md:w-full sm:w-auto px-4 py-2 border rounded-md bg-white invalid:border-red-600 valid:border-[#b6733d] dark:bg-slate-800 dark:text-white cursor-pointer"
              // onChange={handleInputChange}
            >
              <option value="">Select Your Role</option>
              <option value="small">House Owner</option>
              <option value="medium">House Renter</option>
            </select>
            {/* Phone */}
            <label htmlFor="phone" className="block">
              Phone
            </label>
            <input
              id="phone"
              type="number"
              placeholder="Enter Your Phone Number"
              min={5}
              className="p-3 block w-full outline-none border rounded-md invalid:border-red-600 valid:border-[#b6733d] dark:bg-slate-600 dark:text-slate-300"
            />
            {/* Email */}
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="example@example.com"
              className="p-3 block w-full outline-none border rounded-md invalid:border-red-600 valid:border-[#b6733d] dark:bg-slate-600 dark:text-slate-300"
            />
            {/* Password */}
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter Your Password"
              min={5}
              className="p-3 block w-full outline-none border rounded-md invalid:border-red-600 valid:border-[#b6733d] dark:bg-slate-600 dark:text-slate-300"
            />
          </div>
          {/* button type will be submit for handling form submission*/}
          <button
            type="button"
            className="py-2 px-5 mb-4 mx-auto mt-8 shadow-lg border rounded-md text-[#b6733d] border-[#b6733d] hover:bg-[#b6733d] hover:text-white hover:border-[#5ca078] duration-500 block"
          >
            Submit
          </button>
          <p className="mb-3 text-center">
            Already have an account?
            <Link
              onClick={() => {
                setRegister(!register);
              }}
              className="ms-1 underline font-semibold text-[#b6733d]"
            >
              Login
            </Link>
          </p>
        </form>
        {/* img */}
        <div
          className={`hidden lg:block absolute w-1/2 h-full top-0 z-10 duration-500 overflow-hidden bg-black/20 ${
            register
              ? "translate-x-full rounded-bl-full duration-500"
              : "rounded-br-full"
          }`}
        >
          <img
            src="https://source.unsplash.com/featured/?house"
            className="object-cover h-full"
            alt="img"
          />
        </div>
        {/* login form */}
        <form
          className={`p-8 w-full mr-0 ml-auto duration-500 ${
            register ? "lg:translate-x-full hidden lg:block" : ""
          }`}
        >
          <h1 className="backdrop-blur-sm text-2xl lg:text-4xl pb-4">Login</h1>
          <div className="space-y-5">
            {/* Email */}
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="example@example.com"
              className="p-3 block w-full outline-none border rounded-md invalid:border-red-600 valid:border-[#b6733d] dark:bg-slate-600 dark:text-slate-300"
            />
            {/* Password */}
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter Your Password"
              min={5}
              className="p-3 block w-full outline-none border rounded-md invalid:border-red-600 valid:border-[#b6733d] dark:bg-slate-600 dark:text-slate-300"
            />
          </div>
          {/* button type will be submit for handling form submission*/}
          <button
            type="button"
            className="py-2 px-5 mb-4 mx-auto mt-8 shadow-lg border rounded-md text-[#b6733d] border-[#b6733d] hover:bg-[#b6733d] hover:text-white hover:border-[#5ca078] duration-500 block"
          >
            Submit
          </button>
          <p className="mb-3 text-center">
            Don't have an account?
            <Link
              onClick={() => {
                setRegister(!register);
              }}
              className="ms-1 underline font-semibold text-[#b6733d]"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};
export default LoginAndRegister;
