import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/img/logo.png";
import MyContainer from "../MyContainer/MyContainer";
import MyLink from "../MyLink/MyLink";

const Navbar = () => {
  const links = (
    <>
      <li>
        <MyLink to={"/"} className=" ">
          Home
        </MyLink>{" "}
      </li>
      <li>
        <MyLink to={"/addCar"} className=" ">
          Add Car
        </MyLink>{" "}
      </li>
      <li>
        <MyLink to={"/myListing"} className=" ">
          My Listing
        </MyLink>{" "}
      </li>
      <li>
        <MyLink to={"/myBooking"} className=" ">
          My Booking
        </MyLink>{" "}
      </li>
      <li>
        <MyLink to={"/browsCars"} className=" ">
          Brows Cars
        </MyLink>{" "}
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-200 shadow-sm">
      <MyContainer className="flex items-center justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          {/* <a className="btn btn-ghost text-xl">RentWheels</a> */}
          <figure>
            <img className="w-13.75" src={logo} alt="" />
          </figure>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end ">
          <button className="btn btn-secondary md:px-2 lg:px-5">
            <Link to={"/login"}> login</Link>
          </button>
          <button>
            <a className="btn btn-primary ml-2 ">theame T</a>
          </button>
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;
