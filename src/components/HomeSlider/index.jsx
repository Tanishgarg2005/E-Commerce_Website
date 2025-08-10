import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const HomeSlider = () => {
  return (
    <div className="homeSlider py-2">
        <div className="container">
            <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="slider"
      >
    <SwiperSlide>
      <div className="item rounded-[20px] overflow-hidden"><img src="/sliderImages/pic1.avif" alt="Slider" /></div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="item rounded-[20px] overflow-hidden"><img src="/sliderImages/pic2.avif" alt="" /></div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="item rounded-[20px] overflow-hidden"><img src="/sliderImages/pic3.jpg" alt="" /></div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="item rounded-[20px] overflow-hidden"><img src="/sliderImages/pic4.avif" alt="" /></div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="item rounded-[20px] overflow-hidden"><img src="/sliderImages/pic5.jpg" alt="" /></div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="item rounded-[20px] overflow-hidden"><img src="/sliderImages/pic6.avif" alt="" /></div>
    </SwiperSlide>
        
      </Swiper>
        </div>
    </div>
    
  )
};

export default HomeSlider;
