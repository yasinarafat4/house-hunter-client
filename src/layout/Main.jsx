import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Spinner from "../pages/Shared/Spinner/Spinner";

const Main = () => {
    // Set loading spinner
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, []);
    if (loading) {
      return <Spinner />;
    }

  return (
    <div className="dark:bg-slate-800 dark:text-slate-300">
      <Navbar />
      <div className="min-h-[calc(100vh-300px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
