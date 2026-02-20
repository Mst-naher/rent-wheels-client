import React, { useContext, useEffect, useRef, useState } from "react";
import MyContainer from "../Components/MyContainer/MyContainer";
import { Link, useLocation, useNavigate } from "react-router";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import { FcGoogle } from "react-icons/fc";
// import { GoogleAuthProvider } from "firebase/auth";

// const googleProvider = new GoogleAuthProvider();

const Login = () => {
// const [email, setEmail] = useState(null);
// const [password, setPassword] = useState(null);

  const [show, setShow] = useState(false);
  const {
    signInWithEmailAndPasswordFunc,
    signInWithEmailFunc,
    setLoading,
    setUser,
    user,
  } = useContext(AuthContext);

  const location = useLocation();
  const from = location.state || "/";
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  // console.log(location)
  // const emailRef = useRef(null);

  const handlelogin = (e) => {
    e.preventDefault();
    const email = e.target.email?.value.trim();
    const password = e.target.password?.value;

    console.log("login function entered", { email, password });

    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailRegex.test(email)) {
    //   toast.error("Please enter a valid email address");
    //   return;
    // }

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
        setLoading(false);
        setUser(res.user);
        toast.success("Login successful");
        // Swal.fire("Login successful!");
        // setEmail("");
        // setPassword("");
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  const handleGoogleLogin = () => {
    signInWithEmailFunc()
      .then((result) => {
        console.log(result);
        setLoading(false);
        setUser(result.user);
        toast.success("Login successful");
        navigate(from);

        const newUser = {
          name: result.user.displayName,
          email: result.user.email,
          image: result.user.photoURL
        }

           //create user in the database
           fetch("http://localhost:3000/users", {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
           })
           .then(res => res.json())
           .then(data => {
            console.log('data after user save', data)
           })
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

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
              <form onSubmit={handlelogin} className="">
                {/* email field */}
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  // ref={emailRef}
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
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
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
              </form>
              {/* Google */}
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="my-btn"
              >
                <FcGoogle className="w-8 h-8 " />
                {/* <img
                  width="28"
                  height="28"
                  src=""
                  alt="google-logo"
                /> */}
                Login with Google
              </button>
              <p className="text-center font-bold text-gray-500">OR </p>
              <div className="text-center">
                <p className="mt-2">New to this website ? </p>
                <Link
                  to="/signup"
                  className="text-blue-500 underline font-bold mt-4"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default Login;
