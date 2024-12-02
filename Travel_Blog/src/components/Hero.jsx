import Swiper from "../components/Swiper";

function Hero() {
  return (
    <>
      <div className="flex gap-32">
        <div className="mt-18 flex-col items-center text-justify max-w-[52rem]">
          <p className="uppercase text-[7rem] leading-none">
            Adventures exists in the unknown
          </p>
          <p className="mt-7">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus,
            earum adipisci sunt fugiat, laborum nemo ipsa asperiores, qui cumque
            dolore modi enim cum nulla labore. Alias adipisci commodi nobis
            incidunt.
          </p>
        </div>
        <div className="overflow-hidden">
          <div className="mt-32 ml-[13rem]">
            <Swiper />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
