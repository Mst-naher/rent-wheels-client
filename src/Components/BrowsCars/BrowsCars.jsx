import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import MyContainer from "../MyContainer/MyContainer";
import { FaSearch } from "react-icons/fa";
import CarCard from "../CarCard/CarCard";
import Banner from "../Banner/Banner";

const BrowsCars = () => {
  
   const products = useLoaderData();
   console.log(products);
   const [search, setSearch] = useState("");
    
  

   const term = search.trim().toLocaleLowerCase();
   const searchedProducts = term
     ? products.filter((product) =>
         product.carName.toLocaleLowerCase().includes(term),
       )
     : products;
   console.log(searchedProducts);

  if (!products) return <p>Loading...</p>;
  return (
    <MyContainer>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 relative m-10">
        {/* Found count */}
        <h1 className="text-lg font-semibold">
          Found Car : {searchedProducts.length}
        </h1>

        {/* Search box */}
        <div className="relative  w-full md:w-80">
          <input
            type="text"
            placeholder="Search car by name..."
            className="input input-bordered w-full pr-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {searchedProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
          {searchedProducts.map((product) => (
            <CarCard key={product.id} product={product} />
            // <Banner key={product.id} product={product}/>
          ))}
        </div>
      ) : (
        <div className="max-w-11/12 mx-auto w-full py-4 md:py-8 lg:py-12  ">
          <div className="flex flex-col justify-center items-center p-15">
            <img src="../assets/App-Error.png" alt="" />
            <h1 className="lg:text-3xl font-bold mt-10">
              Oops!! Car not found!
            </h1>
            <p className="text-[30px] text-pink-600 mt-2 font-semibold">
              The Car you are requesting is not found on our system. please try
              another car
            </p>

            <button className=" bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 w-[200px] rounded-sm text-lg font-bold m-4 hover:scale-105 transition-transform duration-200">
              Go Back!
            </button>
          </div>
        </div>
      )}
    </MyContainer>
  );
};

export default BrowsCars;
