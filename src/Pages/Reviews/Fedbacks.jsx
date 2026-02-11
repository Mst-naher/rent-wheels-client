import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import FedbackCard from './FedbackCard';

const Fedbacks = ({ fedbackPromise }) => {
     const fedbacks = use(fedbackPromise);
     console.log(fedbacks)


  return (
    <div className="my-24">
      <div className="text-center mb-24">
        <h3 className="text-center text-3xl text-gray-600 font-bold my-8">Fedbacks</h3>
        <p className='text-gray-400'>
          Rent Wheels provided outstanding service with clean vehicles,
          affordable prices, and a smooth booking process. The staff was
          friendly and professional, <br></br>making my trip comfortable, convenient, and
          completely stress-free. Highly recommended.
        </p>
      </div>

      <Swiper
        loop={true}
        effect={"coverflow"}
        spaceBetween={30}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: "50%",
          depth: 200,
          modifier: 1,
          scale: 0.75,
          slideShadows: true,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={true}
        className="mySwiper"
      >
        {fedbacks.map((fedback) => (
          <SwiperSlide key={fedback.id}>
            <FedbackCard fedback={fedback}></FedbackCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Fedbacks;