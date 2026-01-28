import React, { useState } from "react";
import MyContainer from "../Components/MyContainer/MyContainer";
import { Link } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { auth } from "../firebase/firebase.init";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "@firebase/auth";

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);

  const handlelogin = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;

    console.log("login function entered", { email, password });

    const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!regex.test(password)) {
      toast.error(
        "Password must be at least 6 characters long and contain at least one uppercase and one lowercase letter",
      );
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        setUser(res.user);
        toast.success("Login successful");
      })
      .catch((error) => {
        console.log(error);
        
        toast.error(error.message);
      
      });
  };
   
   const handleGoogleLogin = ()=>{
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log(res);
        setUser(res.user);
        toast.success("Login successful");
      })
      .catch((error) => {
        console.log(error);
        // toast.error(error.message);
      });
   }

    const handleLogout = () =>{
             signOut(auth)
               .then(() => {
                 toast.success("Sign-out successful.");
                 setUser(null)
               })
               .catch(() => {

                  // toast.error("An error happened.", (error.message));
                
               });
    }
  console.log(user);

  return (
    <MyContainer className="  ">
      <h2 className="text-3xl font-bold text-center mt-20">
        Welcome to Rent Wheels
      </h2>
      <h1 className="text-xl font-semibold text-center">Login your account </h1>
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
              {user ? (
                <div className="text-center space-y-3">
                  <img
                    className="w-20 h-20 rounded-full mx-auto"
                    src={
                      user?.photoURL || "https://i.ibb.co/KjC8dZ58/image03.jpg"
                    }
                    alt=""
                  />
                  <h2 className="text-2xl font-semibold text-center text-red-600 mb-2">
                    {user?.displayName}
                  </h2>
                  <p className="text-center text-gray-600 mb-2">
                    {user?.email}
                  </p>
                  <button onClick={handleLogout} className="my-btn">
                    Log Out
                  </button>
                </div>
              ) : (
                <form onSubmit={handlelogin} className="">
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
                  <button className="my-btn mt-4">Log In</button>
                  <p className="text-center font-bold text-gray-500">OR </p>
                  <div className="text-center">
                    {/* Google */}
                    <button onClick={handleGoogleLogin} className="my-btn">
                      <svg
                        aria-label="Google logo"
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <g>
                          <path d="m0 0H512V512H0" fill="#fff"></path>
                          <path
                            fill="#34a853"
                            d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                          ></path>
                          <path
                            fill="#4285f4"
                            d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                          ></path>
                          <path
                            fill="#fbbc02"
                            d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                          ></path>
                          <path
                            fill="#ea4335"
                            d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                          ></path>
                        </g>
                      </svg>
                      Login with Google
                    </button>

                    <p className="mt-2">Already have an account ? </p>
                    <Link
                      to="/signup"
                      className="text-blue-500 underline font-bold mt-4"
                    >
                      SignUp
                    </Link>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default Login;
