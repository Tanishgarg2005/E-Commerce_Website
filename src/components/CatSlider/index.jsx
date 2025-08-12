import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Navigation } from 'swiper/modules';
const HomeCatSlider = () => {
    return (
        <div className="home-cat-slider">
           <div className="container">
            <Swiper
        slidesPerView={5}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link to='/'>
          <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
            <img src="/smallSlider/pic1.png" alt=""  className='w-[60px] transition-all'/>
            <h3 className='text-[15px] font-[500] mt-2.5'>Bags</h3>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/'>
          <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
            <img src="/smallSlider/pic1.png" alt=""  className='w-[60px] transition-all'/>
            <h3 className='text-[15px] font-[500] mt-2.5'>Bags</h3>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/'>
          <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
            <img src="/smallSlider/pic1.png" alt=""  className='w-[60px] transition-all'/>
            <h3 className='text-[15px] font-[500] mt-2.5'>Bags</h3>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/'>
          <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
            <img src="/smallSlider/pic1.png" alt=""  className='w-[60px] transition-all'/>
            <h3 className='text-[15px] font-[500] mt-2.5'>Bags</h3>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/'>
          <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
            <img src="/smallSlider/pic1.png" alt=""  className='w-[60px] transition-all'/>
            <h3 className='text-[15px] font-[500] mt-2.5'>Bags</h3>
          </div>
          </Link>
        </SwiperSlide>
        
        
      </Swiper>
           </div>
        </div>
    );
};
export default HomeCatSlider;
