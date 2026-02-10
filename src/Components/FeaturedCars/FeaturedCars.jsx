import React from "react";
import { Link } from "react-router";

const FeaturedCars = ({product}) => {
  const {_id, carName, carType, status, imageUrl, rentPricePerDay, providerName } =
    product;
  return (
    <div className="card bg-base-100 hover:shadow-2xl ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <figure className="h-60 overflow-hidden">
          <img
            src={imageUrl}
            alt="car"
            className="w-full h-full object-cover hover:scale-110 transition-transform"
          />
        </figure>
        <div className="card-body">
          <div className="flex ">
            <h2 className="card-title flex-1">{carName}</h2>
            <p className="badge badge-secondary hover:scale-110 transition-discrete flex-1">
              {status}
            </p>
          </div>
          <p>Rent per day : {rentPricePerDay} </p>
          <p>Provider Name : {providerName} </p>
          <div className="card-actions flex ">
            {/* <div className="badge badge-outline">Car Model : {carType}</div> */}

            <div className="tooltip flex-1">
              <div className="tooltip-content">
                <div className="animate-bounce text-orange-400 -rotate-70 text-3xl font-black">
                  Wow!
                </div>
              </div>
              <button className="btn btn-primary btn-sm hover:scale-110 transition-discrete rounded-full">
                Car Model : {carType}
              </button>
            </div>
            <Link
              to={`/viewDetails/${_id}`}
              className="btn btn-primary btn-sm hover:scale-110 transition-discrete flex-1"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCars;
