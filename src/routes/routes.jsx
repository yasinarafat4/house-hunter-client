import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AboutUs from "../pages/AboutUs/AboutUs";
import Home from "../pages/Home/Home";
import Houses from "../pages/Houses/Houses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/houses",
        element: <Houses />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
    ],
  },
]);
