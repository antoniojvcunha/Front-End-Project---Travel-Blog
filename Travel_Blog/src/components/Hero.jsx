import Swiper from "../components/Swiper";

function Hero() {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-32 items-center lg:items-start p-6 lg:p-12">
        {/* Texto */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-full lg:max-w-[52rem]">
          <p className="uppercase text-4xl sm:text-5xl lg:text-[7rem] leading-none">
            Adventures exists in the unknown
          </p>
          <p className="mt-4 sm:mt-6 lg:mt-7 text-sm sm:text-base lg:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus,
            earum adipisci sunt fugiat, laborum nemo ipsa asperiores, qui cumque
            dolore modi enim cum nulla labore. Alias adipisci commodi nobis
            incidunt.
          </p>
        </div>

        {/* Swiper */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-start overflow-hidden">
          <div className="mt-8 lg:mt-32 lg:ml-[13rem]">
            <Swiper />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
