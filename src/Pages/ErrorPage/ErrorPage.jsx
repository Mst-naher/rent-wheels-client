import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <div className="max-w-11/12 mx-auto w-full py-4 md:py-8 lg:py-12  ">
        <div className="flex flex-col justify-center items-center p-15 relative">
          <p><span className='absolute left-50 top-5 md:text-7xl font-bold shadow-lg '>404</span></p>
          <h1 className="lg:text-3xl font-bold mt-10">Oops, page not found!</h1>
          <p className="md:text-2xl text-center mt-15 text-gray-400 mt-2">
            The page you are looking for is not available.
          </p>

          <Link
            to="/"
            className=" bg-gradient-to-r from-indigo-900 via-purple-400 to-pink-900 text-white md:px-10 md:py-3 rounded-sm md:text-xl md:font-bold m-9"
          >
            Go Back!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;