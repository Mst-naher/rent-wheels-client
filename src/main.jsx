import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './Components/RootLayout/RootLayout.jsx';
import Home from './Components/Home/Home.jsx';
import AddCar from './Components/AddCar/AddCar.jsx';
import MyListing from './Components/MyListing/MyListing.jsx';
import MyBooking from './Components/MyBooking/MyBooking.jsx';
import BrowsCars from './Components/BrowsCars/BrowsCars.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
          {
            index: true,
            Component:Home
          },
          {
            path:'addCar',
            Component: AddCar
          },
          {
            path:'myListing',
            Component: MyListing
          },
          {
            path:'myBooking',
            Component: MyBooking
          },
          {
            path:'browsCars',
            Component: BrowsCars
          },
         
    ] 
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
);
