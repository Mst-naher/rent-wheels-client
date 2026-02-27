import React, { useState } from "react";
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
import { Link } from "lucide-react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  
  const handleSubmit = (e)=>{
     e.preventDefault();
     const term = search.trim();
      if (!term) {
      navigate("/browsCars");
      return
    }

    navigate(`/browsCars?q=${encodeURIComponent(search)}`);
  };
  
  return (
    <Carousel autoPlay={true} infiniteLoop={true}>
      <div className="relative">
        <img src={bannerImg1} className="w-full h-full object-cover" />

        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <p className="text-yellow-400 md:text-3xl font-bold mt-4 max-w-xl md:shadow-2xl">
            “Travel safe, return stronger, and let every mile bring you closer
            to your dreams.”
          </p>

          <button className="m-3 md:m-30 btn btn-border text-black rounded-full">
            Choose your car
          </button>

          {/* Search box */}
          <form onSubmit={handleSubmit}>
            <div className="flex relative  w-full md:w-80 mt-">
              <input
                type="text"
                placeholder="Search car by name..."
                className="input input-bordered w-full pr-10"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit" className="btn btn-outline btn-accent">
                Search
              </button>
            </div>
          </form>
          <h1 className="bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-500 text-xl text-white shadow-2xl rounded-xl p-1 text-md md:text-3xl lg:text-4xl font-semibold whitespace-nowrap mt-10">
            Start your straightforward journey here
          </h1>
        </div>
      </div>
      {/* <div className="relative">
        <img src={bannerImg1} />

        <button className="btn btn-border text-secondary rounded-full absolute right-270 top-115">
          Book your car
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 border border-red-400 ">
          {" "}
          <h1 className="text-red-500 absolute right-300 top-20 text-4xl text-center">
            Start your straightforward journey here
          </h1>
          <p className="text-red-500 absolute right-290 top-30 ">gilkh</p>
        </div>

        <button className="btn btn-border text-primary rounded-full absolute right-237 top-115">
          <Link to="/" className="" /> <CgArrowTopRight />
        </button>
        <button className="btn btn-border text-secondary rounded-full absolute right-200 top-115">
          Be A driver
        </button>
      </div> */}
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
