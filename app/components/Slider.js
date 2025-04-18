'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { FaShare } from 'react-icons/fa';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import SharePopup from './SharePopup';


const Slider = ({sliderImage,at,id}) => {
  const [pop, setPop] = useState(false);
  const handleOpen = () => {
    setPop(true);
  };
  return (
    
    <div className=" w-full h-[180px] md:h-[300px]  lg:w-[720px]   lg:h-[400px] lg:mt-5 ">
    {/* popsection ends */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500 }}
        loop={true}
        className="min-w-full h-full  sm:h-[350px] md:h-full md:w-full rounded-md"
      >
           <div onClick={handleOpen} className="absolute top-0 right-0 h-7 w-7 cursor-pointer shadow-md border-1 border-gray-200 flex items-center justify-center rounded-md bg-white text-black sm:hidden z-10">
              <FaShare />
            </div>
        {sliderImage?.map((item) => (
          <SwiperSlide
            key={item}
            className="relative w-full h-full rounded-md bg-white flex justify-center items-center"
          >
            <Image
              src={item}
              alt={item}
              fill
              className="object-cover rounded-md"
            />
           
          </SwiperSlide>
        ))}
      </Swiper>
       <div className="lg:flex flex-col hidden w-full gap-2 px-1">
          <p className="text-[10px] left-140 mt-1  absolute">
          Posted At: {at} | Ad Id: {id}
          </p>
          </div>
          <SharePopup isOpen={pop} isClose={()=>setPop(false)} />
    </div>
  );
};

export default Slider;
