import React from "react";

// import { useLoaderData } from 'react-router';
import MyContainer from "../MyContainer/MyContainer";
import FeaturedCars from "../FeaturedCars/FeaturedCars";
import LatestProducts from "../LatestProducts/LatestProducts";
import Banner from "../Banner/Banner";
import WhyRent from "../WhyRent/WhyRent";
import Brands from "../Brands/Brands";

const Home = () => {
  return (
    <MyContainer>
      <div>
        <div>
          <Banner></Banner>
        </div>
        <div>
          <Brands></Brands>
        </div>
        <section>
          <LatestProducts></LatestProducts>
        </section>
        <section>
          <div>
            {" "}
            <WhyRent></WhyRent>
          </div>
        </section>
        <div>Extra Sections (2)</div>
      </div>
    </MyContainer>
  );
};

export default Home;
