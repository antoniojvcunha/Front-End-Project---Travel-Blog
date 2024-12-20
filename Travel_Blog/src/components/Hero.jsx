import Swiper from "../components/Swiper";

function Hero() {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-32 items-center lg:items-start p-6 lg:p-12">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-full lg:max-w-[52rem]">
          <p className="uppercase text-4xl sm:text-5xl lg:text-[7rem] leading-none">
            Adventures exists in the unknown
          </p>
          <p className="mt-4 sm:mt-6 lg:mt-7 text-sm sm:text-base lg:text-lg text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus,
            earum adipisci sunt fugiat, laborum nemo ipsa asperiores, qui cumque
            dolore modi enim cum nulla labore. Alias adipisci commodi nobis
            incidunt.
          </p>
        </div>

        <div className="w-full px-3.5 overflow-visible lg:overflow-hidden lg:w-auto flex justify-center lg:justify-start lg:-mr-[10rem]">
          <div className="mt-8 h-[30rem] lg:mt-32 lg:ml-[14rem]">
            <Swiper />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
