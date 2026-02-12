import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const RootLayout = () => {
  return (
    <div className=" bg-gradient-to-r from-indigo-300 via-purple-200 to-purple-300">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;