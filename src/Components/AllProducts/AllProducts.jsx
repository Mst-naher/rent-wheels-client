
import { useLoaderData } from "react-router";
import BrowsCars from "../BrowsCars/BrowsCars";

const AllProducts = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div >
      <h2>All Products </h2>
      <div >
        {/* {products.map((product) => (
          <BrowsCars key={product._id} product={product}></BrowsCars>
        ))} */}
      </div>
    </div>
  );
};

export default AllProducts;
