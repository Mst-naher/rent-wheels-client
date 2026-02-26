import React, { useContext, useState } from "react";
import MyContainer from "../Components/MyContainer/MyContainer";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { AuthContext } from "../context/AuthContext";

const Signup = () => {
  const [show, setShow] = useState(false);
  const {
    createUserWithEmailAndPasswordFunc,
    updateProfileFunc,
    setLoading,
    signOutFunc,
    setUser,
  } = useContext(AuthContext);
  // console.log(result);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const displayName = e.target.name?.value;
    const photoURL = e.target.photo?.value;
    const email = e.target.email?.value;
    const password = e.target.password?.value;

    console.log("signup function entered", {
      displayName,
      photoURL,
      email,
      password,
    });
    // return;

    const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!regex.test(password)) {
      toast.error(
        "Password must be at least 6 characters long and contain at least one uppercase and one lowercase letter",
      );
      return;
    }
    // 1st step: create user
    createUserWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        // 2nd step: Update profile
        updateProfileFunc(displayName, photoURL)
          .then((res) => {
            console.log(res);
            setLoading(false);
            toast.success("Signup successful");
          })
          .catch((e) => {
            console.log(e);
            toast.error(e.message);
          });
        console.log(res);
        toast.success("Signup successful");
      })

      .catch((error) => {
        console.log(e);
        console.log(error);
        console.log(error.code);
        toast.error(error.message);

        if (error.code == "auth/email-already-in-use") {
          toast.error("User is already exist in database.");
        }
      });

    signOutFunc()
      .then(() => {
        toast.success("Sign-out successful.");
        setUser(null);
        
        navigate('/login');
      })
      .catch(() => {
        // toast.error("An error happened.", (error.message));
      });
  };

  return (
    <MyContainer className="  ">
      <h2 className="text-3xl font-bold text-center m-10">
        Welcome to Rent Wheels
      </h2>
      <div>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <div className="flex-1">
              <img
                className="w-[600px] mb-5"
                src={"/Rent-car.png"}
                alt="rent-car"
              />
            </div>
          </div>
          <div className="flex-1 card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="text-xl font-semibold">
                Please Register your account{" "}
              </h1>
              <form onSubmit={handleSignup} className="">
                {/* name field */}
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="input input-bordered w-full mb-2  bg-gray-300 font-semibold text-xl  focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                {/* photo field */}
                <label className="block text-sm font-medium mb-1">Photo</label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Your photo url here"
                  className="input input-bordered w-full mb-2  bg-gray-300 font-semibold text-xl  focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                {/* email field */}
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input w-full mb-2"
                />
                <div className="relative">
                  {/* password field */}
                  <label className="label">Password</label>
                  <input
                    name="password"
                    type={show ? "text" : "password"}
                    placeholder=".........."
                    className="input w-full mb-2"
                  />
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute right-[15px] top-[36px] cursor-pointer z-50"
                  >
                    {show ? <FaEye /> : <FaEyeSlash />}
                  </span>{" "}
                </div>

                <div>
                  {/* <a className="link link-hover">Forgot password?</a> */}
                </div>
                <button className="my-btn mt-4">Sign Up</button>
                <p className="text-center font-bold text-gray-500">OR </p>
                <div className="text-center">
                  {/* Google */}
                  <button className="my-btn">
                    <img
                      width="28"
                      height="28"
                      src="https://img.icons8.com/color/48/google-logo.png"
                      alt="google-logo"
                    />
                    Login with Google
                  </button>

                  <p className="mt-2">Already have an account ? </p>
                  <Link
                    to="/login"
                    className="text-blue-500 underline font-bold mt-4"
                  >
                    Log in
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default Signup;
