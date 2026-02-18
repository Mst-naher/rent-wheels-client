// import React, { useEffect, useState } from 'react';
// import BrowsCars from '../BrowsCars/BrowsCars';

const AllProducts = () => {

//   const [products, setProducts] = useState([]);
   
// useEffect(()=>{
//   fetch("http://localhost:3000/products").then((res) => res.json()).then(data =>setProducts(data))
// },[])
  return (
    <div>
      <h2>All Products </h2>
      {/* {products.length} */}
      {/* <Suspense fallback={<h2>Loading...</h2>}>
        <BrowsCars allProductsPromise={allProductsPromise}></BrowsCars>
      </Suspense> */}
    </div>
  );
};

export default AllProducts;