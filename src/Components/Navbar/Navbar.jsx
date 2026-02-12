import React, { useContext } from "react";
import { Link } from "react-router";
import logo from "../../assets/img/logo.png";
import MyContainer from "../MyContainer/MyContainer";
import MyLink from "../MyLink/MyLink";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { ScaleLoader } from "react-spinners";

const Navbar = () => {
  const { user, setUser, signOutFunc, loading } =
    useContext(AuthContext);
  console.log(user);

  const links = (
    <>
      <li>
        <MyLink to={"/"} className=" ">
          Home
        </MyLink>{" "}
      </li>
      <li>
        <MyLink to={"/allProducts"} className=" ">
          All Products
        </MyLink>{" "}
      </li>
      <li>
        <MyLink to={"/addCar"} className=" ">
          Add Car
        </MyLink>{" "}
      </li>

      {user && (
        <>
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
        </>
      )}
      <li>
        <MyLink to={"/browsCars"} className=" ">
          Brows Cars
        </MyLink>{" "}
      </li>
    </>
  );

  console.log(loading);

  const handleLogout = () => {
    signOutFunc()
      .then(() => {
        setUser(null);
        toast.success("Sign-out successful.");
      })
      .catch(() => {
        // toast.error("An error happened.", (error.message));
      });
  };

  return (
    <div className="navbar  shadow-sm bg-linear-to-r from-indigo-900 via-purple-300 to-pink-900">
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
          <Link to="/">
            <img className="w-13.75" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end ">
          {loading ? (
            <ScaleLoader color="#724B88" />
          ) : user ? (
            <div className="text-center space-y-3">
              {/* daisy iu */}

              {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
              {/* For TSX uncomment the commented types below */}
              <button
                className=" border-none outline-none"
                popoverTarget="popover-1"
                style={
                  { anchorName: "--anchor-1" } /* as React.CSSProperties */
                }
              >
                <img
                  className="w-12 h-12 rounded-full mx-auto"
                  src={
                    user?.photoURL || "https://i.ibb.co/KjC8dZ58/image03.jpg"
                  }
                  alt=""
                />
              </button>

              <div
                className="dropdown menu w-62 h-52 p-5 rounded-box bg-purple-100 shadow-xl hover:scale-105 transition-transform duration-200"
                popover="auto"
                id="popover-1"
                style={
                  { positionAnchor: "--anchor-1" } /* as React.CSSProperties */
                }
              >
                <h2 className="text-2xl font-semibold text-center rounded-md  text-white m-5 bg-gradient-to-r from-indigo-900 via-purple-400 to-pink-900  hover:scale-105 transition-transform duration-200 shadow-xl ">
                  {user?.displayName}
                </h2>
                <p className="text-center text-[15px] text-gray-600 m-5 hover:scale-105 transition-transform duration-200">
                  {user?.email}
                </p>
                <button onClick={handleLogout} className="my-btn">
                  Log Out
                </button>
              </div>
            </div>
          ) : (
            <button className="btn btn-nav">
              <Link to={"/login"}> login</Link>
            </button>
          )}

          {/* <button>
            <a className="btn btn-primary ml-2 ">theame T</a>
          </button> */}
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;
