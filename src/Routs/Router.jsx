import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Pages/Roots/Root";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import PropertyDetails from "../Pages/DetailsPage/PropertyDetails";
import Estates from "../Components/Estates/Estates";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Error from "../Pages/ErrorPage/Error";
import WishList from "../Pages/WishList/WishList";
// import About from "../About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/updateprofile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/estates",
        element: <Estates />,
        loader: () => fetch("/property.json"),
      },

      {
        path: "/estate/:id",
        element: (
          <PrivateRoute>
            <PropertyDetails />
          </PrivateRoute>
        ),
        loader: () => fetch("/property.json"),
      },

      {
        path: "/wishlist",
        element: (
          <PrivateRoute>
            <WishList />
          </PrivateRoute>
        ),
        loader: () => fetch("/property.json"),
      },
    ],
  },
]);
