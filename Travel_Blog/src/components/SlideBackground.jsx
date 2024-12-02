import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/slideBackground.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function SlideBackground() {
  const images = [
    "https://www.cuddlynest.com/blog/wp-content/uploads/2023/01/facts-about-new-york-central-park-scaled.jpg",
    "https://wallup.net/wp-content/uploads/2019/10/972979-new-york-city-cities-brooklyn-bridge-manhattan-ville-usa-building-2.jpg",
    "https://ofcourseme.com/wp-content/uploads/2020/03/GettyImages-946087016.jpg",
  ];

  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-[38rem] bg-center bg-cover"
              style={{
                backgroundImage: `url(${image})`,
              }}
            >
              <div className="flex flex-col justify-center items-center text-white h-full bg-black bg-opacity-50">
                <h1 className="text-3xl uppercase">New York</h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
export default SlideBackground;
