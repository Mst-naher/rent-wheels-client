import React from "react";
import MyContainer from "../../Components/MyContainer/MyContainer";

const Services = () => {
  return (
    <MyContainer>
      <div className="text-center m-10">
        <h2 className="md:text-4xl font-bold text-blue-800">
          Glorious Ocations
        </h2>
        <p className="md:text-3xl font-bold">&</p>
        <p className="text-sm md:text-xl text-pink-700">
          Memorable days in life
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5   ">
        <div>
          <img
            className="md:w-[500px] md:h-[400px] object-cover rounded-2xl shadow-2xl overflow-hidden p-2"
            src="/services-img/img1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="md:w-[500px] md:h-[400px] object-cover rounded-2xl shadow-2xl overflow-hidden p-2"
            src="/services-img/img2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="md:w-[500px] md:h-[400px]  object-cover rounded-2xl shadow-2xl overflow-hidden p-2"
            src="/services-img/img3.avif"
            alt=""
          />
        </div>
        <div>
          <img
            className="md:w-[500px] md:h-[400px]  object-cover rounded-2xl shadow-2xl overflow-hidden p-2"
            src="/services-img/img4.webp"
            alt=""
          />
        </div>
        <div>
          <img
            className="md:w-[500px] md:h-[400px]  object-cover rounded-2xl shadow-2xl overflow-hidden p-2"
            src="/services-img/img5.jpeg"
            alt=""
          />
        </div>
        <div>
          <img
            className="md:w-[500px] md:h-[400px]  object-cover rounded-2xl shadow-2xl overflow-hidden p-2"
            src="/services-img/img6.webp"
            alt=""
          />
        </div>
        <div></div>
      </div>
    </MyContainer>
  );
};

export default Services;
