import React from 'react';
import { useLoaderData} from 'react-router';
import MyContainer from '../MyContainer/MyContainer';
import { FaLongArrowAltLeft } from 'react-icons/fa';

const ViewDetails = () => {

const product = useLoaderData();
 console.log('after clicked view button', product)
 const { carName, imageUrl, carType } = product;



  return (
    <div>
      <MyContainer>
        <h1 className="text-xl text-purple-950 font-semibold mt-5 p-2">
          {" "}
          Car details{" "}
        </h1>
        <div className="mt-10">
          <div className="grid md:grid-cols-2 sm:grid-cols-1 md:gap-15">
            <div className=" py-3 bg-purple-200 ">
              <img
                className="md:w-200 md:h-100  hover:scale-105 transition-transform duration-200 md:rounded-2xl object-cover p-3"
                src={imageUrl}
                alt=""
              />
              <p
                className="text-center 
              text-gray-600 font-bold shadow-xl "
              >
                ________________________
              </p>
              <div className="flex justify-between items-center m-5">
                <p className="font-semibold text-gray-600 bg-purple-200 rounded-md p-1">
                  {carName}
                </p>
                <h3 className="font-semibold text-gray-600 bg-purple-200 rounded-md p-1">
                  {carType}
                </h3>
              </div>
              <div>
                <p className="text-sm text-gray-500 p-4">
                  {" "}
                  {product.description}
                </p>
              </div>
            </div>
            <div className="">
              <div className=" hover:scale-105 transition-transform duration-200">
                <p className="flex gap-4 items-center">
                  {" "}
                  <FaLongArrowAltLeft /> back to product
                </p>
                <h1 className="text-3xl font-bold text-pink-900 shadow-2xl m-7 py-3 p-3 rounded-2xl">
                  {carName}
                </h1>
              </div>
              <div className=" py-3 shadow-2xl rounded-2xl p-3 m-7  hover:scale-105 transition-transform duration-200">
                <h1 className="text-xl text-gray-500 font-semibold">
                  product details
                </h1>
                <p className="text-gray-500 text-sm">
                  product ID: {product._id}
                </p>
                <p className="text-gray-500 text-sm">
                  posted : {product.createdAt}
                </p>
              </div>
              <div className=" py-3 shadow-2xl rounded-2xl p-3 m-7  hover:scale-105 transition-transform duration-200">
                <h2>Provider information</h2>
                <p>provider name : {product.providerName}</p>
                <p>Location : {product.location}</p>
                <p>
                  Status : <span className='text-purple-800 bg-purple-100 p-1 rounded-xl'> {product.status}</span>
                </p>
                <p>Rent per day : £ {product.rentPricePerDay}</p>
              </div>
              <div className=" py-3 shadow-2xl rounded-2xl p-3 m-7  hover:scale-105 transition-transform duration-200">
                <button className="my-btn">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default ViewDetails;