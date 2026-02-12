import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./Components/RootLayout/RootLayout.jsx";
import Home from "./Components/Home/Home.jsx";

import MyListing from "./Components/MyListing/MyListing.jsx";
import MyBooking from "./Components/MyBooking/MyBooking.jsx";
import BrowsCars from "./Components/BrowsCars/BrowsCars.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./context/AuthProvider.jsx";
import PrivateRoute from "./privateRoute/PrivateRoute.jsx";
import FeaturedCars from "./Components/FeaturedCars/FeaturedCars.jsx";
import AddCar from "./Pages/AddCar/AddCar.jsx";
import ViewDetails from "./Components/ViewDetails/ViewDetails.jsx";
import LatestProducts from "./Components/LatestProducts/LatestProducts.jsx";
import AllProducts from "./Components/AllProducts/AllProducts.jsx";
import Brands from "./Components/Brands/Brands.jsx";
import Services from "./Pages/Services/Services.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "bands",
        Component: Brands,
      },
      {
        path: "services",
        Component: Services,
      },
      {
        path: "allProducts",
        Component: AllProducts,
      },
      {
        path: "featuredCars",
        Component: FeaturedCars,
      },
      {
        path: "latestProducts",
        Component: LatestProducts,
        loader: () => fetch("http://localhost:3000/products"),
      },
      {
        path: "viewDetails/:id",
        // loader: ({ params }) =>
        // fetch(`http://localhost:3000/products/${params._id}`),
        Component: ViewDetails,
      },
      {
        path: "addCar",
        Component: AddCar,
      },
      {
        path: "myListing",
        element: (
          <PrivateRoute>
            <MyListing></MyListing>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:3000/users"),
      },
      {
        path: "myBooking",
        element: (
          <PrivateRoute>
            <MyBooking></MyBooking>
          </PrivateRoute>
        ),
      },
      {
        path: "browsCars",
        Component: BrowsCars,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />,
      <ToastContainer />
    </AuthProvider>
  </StrictMode>,
);
