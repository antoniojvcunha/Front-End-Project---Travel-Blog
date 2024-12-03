import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/swiperCustom.css";

function Slide() {
  const [card, setCard] = useState([]);

  // Fetch para carregar os dados
  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch(
          "https://674111a9d0b59228b7f223f1.mockapi.io/api/v1/cardList"
        );
        const result = await response.json();
        setCard(result); // Atualiza o estado com os dados recebidos
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    loadData();
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        centeredSlides={true}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper w-[45rem] h-[27rem] "
      >
        {card.length > 0 ? (
          card.map((item) => (
            <SwiperSlide>
              <div
                key={item.id}
                style={{ backgroundImage: `url(${item.thumbnail})` }}
                className="w-45 h-[20rem] object-cover bg-cover bg-center rounded-2xl hover:scale-105 duration-500 group relativ cursor-pointer"
              >
                <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white p-4 opacity-0 group-hover:opacity-100 duration-1000">
                  <p className="text-sm">{item.description}</p>
                  <h3 className="text-lg font-bold">{item.name}</h3>
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

export default Slide;
