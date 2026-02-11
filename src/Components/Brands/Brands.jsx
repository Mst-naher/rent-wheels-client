import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import bmw from "../../assets/brands/bmw.png";
import ferrari from "../../assets/brands/ferrari.png";
import ford from "../../assets/brands/ford.png";
import honda from "../../assets/brands/honda.png";
import hyundai from "../../assets/brands/hyundai.png";
import jaguar from "../../assets/brands/jaguar.png";
import jeep from "../../assets/brands/jeep.png";
import mercedes from "../../assets/brands/mercedes.png";
import tesla from "../../assets/brands/tesla.png";
import toyota from "../../assets/brands/toyota.png";


const brandLogos = [
  bmw, ferrari, ford, honda, hyundai, jaguar, jeep, mercedes, tesla, toyota,       
]

const Brands = () => {
  return (
    <>
      <div></div>

      <div>
        <h1 className="m-15 font-bold text-2xl text-center">
          We've helped thousands of rents teams
        </h1>
      </div>
      <div className="mb-10 ">
        <Swiper
          loop={true}
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {brandLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <img
                className="w-25 h-25 shadow-2xl bg-gradient-to-r from-indigo-900 via-purple-400 to-pink-900 hover:scale-105 transition-transform duration-200 cursor-pointer rounded-3xl"
                src={logo}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Brands;
