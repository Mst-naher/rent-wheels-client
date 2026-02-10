import React from "react";

// import { useLoaderData } from 'react-router';
import MyContainer from "../MyContainer/MyContainer";
import FeaturedCars from '../FeaturedCars/FeaturedCars';
import LatestProducts from "../LatestProducts/LatestProducts";
import Banner from "../Banner/Banner";

const Home = () => {



  return (
    <MyContainer>
      <div>
        <div>
          <Banner></Banner>
        </div>
        <section>
          <LatestProducts></LatestProducts>
        </section>
        <section>
          <div>Why Rent With Us section (static)</div>
        </section>
        <div>Extra Sections (2)</div>
      </div>
    </MyContainer>
  );
};

export default Home;
