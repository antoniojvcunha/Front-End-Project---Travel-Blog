import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";

function Slide() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        pagination={{ clickable: true }}
        navigation
        modules={[Pagination, Navigation]}
        className="mySwiper w-[60rem]"
      >
        <SwiperSlide>
          <img src="/images/3.jpg" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/3.jpg" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/3.jpg" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/3.jpg" alt="Slide 1" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slide;
