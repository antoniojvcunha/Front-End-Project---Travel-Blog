import Swiper from "../components/Swiper";

function Hero() {
  return (
    <>
      <div className="flex ml-[10rem] gap-36">
        <div className="mt-40 flex-col items-center text-left max-w-[54rem]">
          <p className="uppercase text-9xl">Adventures exists in the unknown</p>
          <p className="mt-7">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus,
            earum adipisci sunt fugiat, laborum nemo ipsa asperiores, qui cumque
            dolore modi enim cum nulla labore. Alias adipisci commodi nobis
            incidunt.
          </p>
        </div>
        <div className="mt-60 mr-[-5rem]">
          <Swiper />
        </div>
      </div>
    </>
  );
}

export default Hero;
