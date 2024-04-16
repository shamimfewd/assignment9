// import React, { useRef, useState } from 'react';
import "animate.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../Styles/Styles.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Header = () => {
  return (
    <div className="">
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
            className="bg-cover p-52  w-full bg-repeat bg-center bg-gradient-to-r from-sky-500 to-indigo-500"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            }}
          >
            <div className="flex justify-center items-center h-full">
              <div className="space-y-4">
                <h1 className="text-6xl text-white animate__animated  animate__fadeInDown">
                  Lorem ipsum dolor sit amet.
                </h1>
                <p className="w-2/3 mx-auto text-white animate__animated animate__backInRight animate__delay-2s">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                  perferendis obcaecati soluta velit debitis sapiente quas harum
                  quasi, deserunt, enim, sit commodi quae facilis reprehenderit?
                  Eius delectus explicabo natus officiis!
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-cover p-52 w-full bg-repeat bg-center bg-gradient-to-r from-sky-500 to-indigo-500"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/1105754/pexels-photo-1105754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            }}
          >
            <div className="flex justify-center items-center h-full">
              <div className="space-y-4">
                <h1 className="text-6xl text-white animate__animated  animate__fadeInDown">
                  <span>Lorem ipsum dolor sit amet.</span>
                </h1>
                <p className="w-2/3 mx-auto text-white animate__animated animate__backInRight animate__delay-4s">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                  perferendis obcaecati soluta velit debitis sapiente quas harum
                  quasi, deserunt, enim, sit commodi quae facilis reprehenderit?
                  Eius delectus explicabo natus officiis!
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="bg-cover p-52  w-full bg-repeat bg-center bg-gradient-to-r from-cyan-500 to-blue-500"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/5502227/pexels-photo-5502227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            }}
          >
            <div className="flex justify-center items-center h-full">
              <div className="space-y-4">
                <h1 className="text-6xl text-white animate__animated  animate__fadeInDown">
                  Lorem ipsum dolor sit amet.
                </h1>
                <p className="w-2/3 mx-auto text-white animate__animated animate__backInRight animate__delay-15s">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                  perferendis obcaecati soluta velit debitis sapiente quas harum
                  quasi, deserunt, enim, sit commodi quae facilis reprehenderit?
                  Eius delectus explicabo natus officiis!
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
