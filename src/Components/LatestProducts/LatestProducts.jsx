import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LatestProducts = () => {
  const [products, setProducts] = useState([]);
  const {_id, car} = products;

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("Products:", data);
        setProducts(data);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5   ">
      {products?.map((product) => (
        <div
          key={product._id}
          className="card bg-base-200 p-4 rounded hover:shadow-xl"
        >
          <figure className="h-60 overflow-hidden">
            <img
              src={product?.imageUrl}
              alt={car}
              className="w-full h-full object-cover hover:scale-110 transition-transform"
            />
            <p className="absolute top-6 right-5 text-xs sm:text-sm md:text-base badge badge-warning hover:scale-110 transition-discrete flex-1">
              {product.status}
            </p>
          </figure>
          <div className="card-body">
            <div className="">
              <h2 className="card-title flex-1">{product.carName}</h2>
              <div className="badge badge-outline">{product.providerName}</div>
            </div>
            <div className="card-actions flex ">
              <p>
                £{" "}
                <span className="text-xl font-bold">
                  {product.rentPricePerDay}
                </span>{" "}
                / day
              </p>
              <div className="tooltip flex">
                <div className="tooltip-content">
                  <div className="animate-bounce text-orange-400 -rotate-70 text-3xl font-black">
                    Wow!
                  </div>
                </div>
                <div className="badge badge-accent hover:scale-110 transition-discrete rounded-full">
                  {product.carType}
                </div>
              </div>
            </div>

            <Link to={`/viewDetails/${product._id}`} className="btn my-btn">
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestProducts;
