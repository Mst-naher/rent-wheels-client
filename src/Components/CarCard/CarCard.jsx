import React from 'react';
import { Link } from 'react-router-dom';
import MyContainer from '../MyContainer/MyContainer';

const CarCard = ({product}) => {
  console.log(product)
  const { imageUrl, carName, providerName, rentPricePerDay, carType } = product;

  return (
    <MyContainer>
    <div>
      <Link to={`/viewDetails/${product._id}`}>
        <div
          key={product._id}
          className="card bg-base-200 p-4 rounded hover:shadow-xl"
        >
          <figure className="h-60 overflow-hidden">
            <img
              src={imageUrl}
              alt="car"
              className="w-full h-full object-cover hover:scale-110 transition-transform"
            />
          </figure>
          <div className="card-body">
            <div className="">
              <h2 className="card-title flex-1">{carName}</h2>
              <div className="badge badge-outline">{providerName}</div>
            </div>
            <div className="card-actions flex ">
              <p>
                £ <span className="text-xl font-bold">{rentPricePerDay}</span> /
                day
              </p>
              <div className="tooltip flex">
                <div className="tooltip-content">
                  <div className="animate-bounce text-orange-400 -rotate-70 text-3xl font-black">
                    Wow!
                  </div>
                </div>
                <div className="badge badge-accent hover:scale-110 transition-discrete rounded-full">
                  {carType}
                </div>
              </div>
            </div>

            <button className="btn my-btn">View Details</button>
          </div>
        </div>
      </Link>
    </div>
    </MyContainer>
  );
};

export default CarCard;