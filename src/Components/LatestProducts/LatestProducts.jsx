import { useEffect, useState } from "react";
import { Link} from "react-router";

const LatestProducts = () => {
 
  const [products, setProducts] = useState([]);
  // const {_id} = products;

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
      {products.map((product) => (
        <div
          key={product._id}
          className="card bg-base-200 p-4 rounded hover:shadow-xl"
        >
          <figure className="h-60 overflow-hidden">
            <img
              src={product.imageUrl}
              alt="car"
              className="w-full h-full object-cover hover:scale-110 transition-transform"
            />
          </figure>
          <div className="card-body">
            <div className="flex ">
              <h2 className="card-title flex-1">{product.carName}</h2>
              <p className="badge badge-secondary hover:scale-110 transition-discrete flex-1">
                {product.status}
              </p>
            </div>
            <p>Rent per day : {product.rentPricePerDay} </p>
            <p>Provider Name : {product.providerName} </p>
            <div className="card-actions flex ">
              {/* <div className="badge badge-outline">Car Model : {carType}</div> */}

              <div className="tooltip flex-1">
                <div className="tooltip-content">
                  <div className="animate-bounce text-orange-400 -rotate-70 text-3xl font-black">
                    Wow!
                  </div>
                </div>
                <button className="btn btn-primary btn-sm hover:scale-110 transition-discrete rounded-full">
                  Car Model : {product.carType}
                </button>
              </div>
              <Link
                to={`/viewDetails/${product._id}`}
                className="btn btn-primary btn-sm hover:scale-110 transition-discrete flex-1"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestProducts;
