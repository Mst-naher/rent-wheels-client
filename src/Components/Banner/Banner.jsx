import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import bannerImg1 from "../../assets/banner/banner1.webp";
// import bannerImg2 from "../../assets/banner/banner2.jpg";
// import bannerImg3 from "../../assets/banner/banner3.jpg";
// import bannerImg4 from "../../assets/banner/banner4.jpg";
// import bannerImg5 from "../../assets/banner/banner5.webp";
import bannerImg6 from "../../assets/banner/banner6.webp";
import bannerImg7 from "../../assets/banner/banner7.jpg";
import { CgArrowTopRight } from "react-icons/cg";

const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true}>
      <div className="relative">
        <img src={bannerImg1} />
        <button className="btn btn-primary text-secondary rounded-full absolute right-270 top-115">
          Track Your Parcel
        </button>
        <button className="btn btn-secondary text-primary rounded-full absolute right-256 top-115">
          <a className="">
            <CgArrowTopRight />{" "}
          </a>
        </button>
        <button className="btn btn-border text-secondary rounded-full absolute right-230 top-115">
          Be A rider
        </button>
      </div>
      {/* <div>
        <img className="w-full " src={bannerImg2} />
      </div> */}
      {/* <div>
        <img src={bannerImg3} />
      </div> */}
      {/* <div>
        <img src={bannerImg4} />
      </div> */}
      {/* <div>
        <img src={bannerImg5} />
      </div> */}
      <div>
        <img src={bannerImg6} />
      </div>
      <div>
        <img src={bannerImg7} />
      </div>
    </Carousel>
  );
};

export default Banner;
