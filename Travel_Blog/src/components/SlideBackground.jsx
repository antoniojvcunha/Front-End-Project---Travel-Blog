import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/slideBackground.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function SlideBackground({ params }) {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch(
          "https://674111a9d0b59228b7f223f1.mockapi.io/api/v1/cardList"
        );
        const result = await response.json();

        const filteredResult = result.filter(
          (value) => value.slug == params.locationSlug
        );
        if (filteredResult.length === 1) {
          setLocation(filteredResult[0]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    loadData();
  }, [params.locationSlug]);

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
        {location && location.images ? (
          location.images.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-[38rem] bg-center bg-cover"
                style={{
                  backgroundImage: `url(${image})`,
                }}
              >
                <div className="flex flex-col justify-center items-center text-white h-full bg-black bg-opacity-50">
                  <h1 className="text-3xl uppercase">{location.name}</h1>
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Swiper>
    </>
  );
}
export default SlideBackground;
