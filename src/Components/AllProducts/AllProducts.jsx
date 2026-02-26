
import { useLoaderData } from "react-router";
import BrowsCars from "../BrowsCars/BrowsCars";
import MyContainer from "../MyContainer/MyContainer";

const AllProducts = ({products}) => {
 
  return (
    <MyContainer>
      <div>
        <h2>All Products </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5   ">
          {/* {products.map((product) => (
          ))} */}
            {/* <BrowsCars key={product._id} product={product}></BrowsCars> */}
        </div>
      </div>
    </MyContainer>
  );
};

export default AllProducts;
