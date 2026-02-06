import React from 'react';

import { useLoaderData } from 'react-router';
import MyContainer from '../MyContainer/MyContainer';
import FeaturedCars from '../FeaturedCars/FeaturedCars';

const Home = () => {

  const data = useLoaderData()
  console.log(data)

  return (
    <MyContainer>
      <div>
        <h2>this is our home </h2>
        <div>Hero Banner / Slider</div>
        {/* Featured Cars section */}
        <section>
          <div className="">Featured Cars</div>
          <p>Explore Latest Cars</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {data.map((product) => (
              <FeaturedCars key={product._id} product={product} />
            ))}
          </div>
        </section>
        <div>Why Rent With Us section (static)</div>
        <div>Extra Sections (2)</div>
      </div>
    </MyContainer>
  );
};

export default Home;