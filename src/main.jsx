import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes/routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <div className="lg:max-w-screen-2xl xl:max-w-screen-xl mx-auto">
        <RouterProvider router={router} />
      </div>
      <Toaster />
    </HelmetProvider>
  </React.StrictMode>
);
