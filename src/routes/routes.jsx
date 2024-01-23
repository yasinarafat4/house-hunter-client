import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AboutUs from "../pages/AboutUs/AboutUs";
import SearchResult from "../pages/Home/Banner/SearchHouses/SearchResult";
import Home from "../pages/Home/Home";
import Houses from "../pages/Houses/Houses";
import LoginAndRegister from "../pages/LoginAndRegister/LoginAndRegister";

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
      {
        path: "/login",
        element: <LoginAndRegister />,
      },
      {
        path: "/searchResult",
        element: <SearchResult />,
      },
    ],
  },
]);
