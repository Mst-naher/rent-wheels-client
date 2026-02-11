import React, { Suspense } from "react";

// import { useLoaderData } from 'react-router';
import MyContainer from "../MyContainer/MyContainer";
import FeaturedCars from "../FeaturedCars/FeaturedCars";
import LatestProducts from "../LatestProducts/LatestProducts";
import Banner from "../Banner/Banner";
import WhyRent from "../WhyRent/WhyRent";
import Brands from "../Brands/Brands";
import Fedbacks from "../../Pages/Reviews/Fedbacks";

const Home = () => {
 const fedbackPromise = fetch('/fedback.json').then(res=>res.json());

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
        <section>
          <Suspense fallback={<p>Loading...</p>}>
            <Fedbacks fedbackPromise={fedbackPromise}></Fedbacks>
          </Suspense>
        </section>
        <section>
        <div>Extra Sections</div>

        </section>
      </div>
    </MyContainer>
  );
};

export default Home;
