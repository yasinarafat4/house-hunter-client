import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AboutUs from "../pages/AboutUs/AboutUs";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import SearchResult from "../pages/Home/Banner/SearchHouses/SearchResult";
import Home from "../pages/Home/Home";
import HouseDetails from "../pages/HouseDetails/HouseDetails";
import Houses from "../pages/Houses/Houses";
import LoginAndRegister from "../pages/LoginAndRegister/LoginAndRegister";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
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
      {
        path: "/houseDetails/:id",
        element: <HouseDetails />,
        loader: async ({ params }) => {
          const response = await fetch(
            `http://localhost:5000/houses/${params.id}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          return response.json();
        },
      },
    ],
  },
]);
