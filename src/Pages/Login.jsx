import React, { useContext, useRef, useState } from "react";
import MyContainer from "../Components/MyContainer/MyContainer";
import { Link } from "react-router";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
// import { auth } from "../firebase/firebase.init";
import {
  GoogleAuthProvider,
  // sendPasswordResetEmail,
  // signInWithEmailAndPassword,
  // signInWithPopup,
  // signOut
} from "firebase/auth";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

// const googleProvider = new GoogleAuthProvider();

const Login = () => {
  
  const [show, setShow] = useState(false);
  const {
    signInWithEmailAndPasswordFunc,
    signInWithPopupFunc,
    signOutFunc,
    user,
    setUser,
  } = useContext(AuthContext);

  const emailRef = useRef(null)
  // const [email, setEmail] = useState(null);

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

    signInWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        console.log(res);
        setUser(res.user);
        // toast.success("Login successful");
        Swal.fire("Login successful!");
      })
      .catch((error) => {
        console.log(error);

        toast.error(error.message);
      });
  };
   
   const handleGoogleLogin = ()=>{
   signInWithPopupFunc()
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
             signOutFunc()
               .then(() => {
                 toast.success("Sign-out successful.");
                 setUser(null);
               })
               .catch(() => {
                 // toast.error("An error happened.", (error.message));
               });
    }
    
  //   const handleForgetPassword = (e)=>{
  //     console.log(e)
  //     const email = emailRef.current.value
  //     sendPasswordResetEmail(auth, email)
  // .then((res) => {
  //  Swal.fire("Password reset email sent!!");
  //   // ..
  // })
  // .catch((e) => {
  //   toast.error("Password reset email sent!!", e.message);
  //   })
  // }

  // console.log(email);

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
                    ref={emailRef}
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
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
                  <button
                    // onClick={handleForgetPassword}
                    type="button"
                    className="hover:underline cursor-pointer"
                  >
                    Forget password?
                  </button>
                  <button type="submit" className="my-btn mt-4">
                    Log In
                  </button>
                  <p className="text-center font-bold text-gray-500">OR </p>
                  <div className="text-center">
                    {/* Google */}
                    <button onClick={handleGoogleLogin} className="my-btn">
                      <img
                        width="28"
                        height="28"
                        src="https://img.icons8.com/color/48/google-logo.png"
                        alt="google-logo"
                      />
                      Login with Google
                    </button>

                    <p className="mt-2">New to this website ? </p>
                    <Link
                      to="/signup"
                      className="text-blue-500 underline font-bold mt-4"
                    >
                      Sign Up
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
