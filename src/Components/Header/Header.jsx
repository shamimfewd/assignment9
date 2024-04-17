// import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../Styles/Styles.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Header = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="bg-cover lg:p-52 md:p-24 p-4   w-full bg-repeat bg-center bg-gradient-to-r from-sky-600 to-indigo-600"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            }}
          >
            <div className="flex justify-center items-center h-full">
              <div className="space-y-4">
                <h1 className="lg:text-6xl md:text-5xl text-4xl text-white">
                  Lorem ipsum dolor sit amet.
                </h1>
                <p className="lg:w-2/3 md:w-2/3  mx-auto text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dicta eaque obcaecati voluptatum quos maxime sequi.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-cover lg:p-52 md:p-24 p-4  w-full bg-repeat bg-center bg-gradient-to-r from-sky-500 to-indigo-500"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/1105754/pexels-photo-1105754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            }}
          >
            <div className="flex justify-center items-center h-full">
              <div className="space-y-4">
                <h1 className="lg:text-6xl md:text-5xl text-4xl text-white ">
                  <span>Lorem ipsum dolor sit amet.</span>
                </h1>
                <p className="lg:w-2/3 md:w-2/3  mx-auto text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dicta eaque obcaecati voluptatum quos maxime sequi.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="bg-cover lg:p-52 md:p-24 p-4  w-full bg-repeat bg-center bg-gradient-to-r from-cyan-500 to-blue-500"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/5502227/pexels-photo-5502227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            }}
          >
            <div className="flex justify-center items-center h-full">
              <div className="space-y-4">
                <h1 className="lg:text-6xl md:text-5xl text-4xl text-white ">
                  Lorem ipsum dolor sit amet.
                </h1>
                <p className="lg:w-2/3 md:w-2/3 mx-auto text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dicta eaque obcaecati voluptatum quos maxime sequi.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;
