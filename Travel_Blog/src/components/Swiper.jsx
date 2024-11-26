import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper w-[45rem] "
      >
        {card.length > 0 ? (
          card.map((item) => (
            <SwiperSlide key={item.id}>
              {/* Renderiza o conteúdo de cada card */}
              <div className="relative p-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-96 h-[20rem] object-cover rounded-3xl hover:scale-105 duration-500 group"
                />
                <div className="absolute bottom-0 w-full text-white  p-4">
                  <p className="text-sm">{item.description}</p>
                  <h3 className="text-lg font-bold">{item.title}</h3>
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
