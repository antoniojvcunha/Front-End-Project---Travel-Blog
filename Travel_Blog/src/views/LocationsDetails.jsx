import {
  BookOpenIcon,
  BuildingLibraryIcon,
  CurrencyDollarIcon,
  LanguageIcon,
  SunIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import Footer from "../components/Footer";
import Maps from "../components/Maps";
import Navbar from "../components/Navbar";
import SlideBackground from "../components/SlideBackground";
import { useEffect, useState } from "react";

function LocationsDetails() {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch(
          "https://674111a9d0b59228b7f223f1.mockapi.io/api/v1/locationsData"
        );
        const result = await response.json();
        setLocation(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    loadData();
  }, []);

  return (
    <>
      {location.length > 0 ? (
        location.map((item) => (
          <div className="bg-ceu bg-cover min-w-screen min-h-screen text-black overflow-hidden">
            <div className="bg-black">
              <Navbar />
            </div>
            <SlideBackground />
            <div className="flex gap-10 my-24 ml-24 mr-24">
              <div className="mt-20 text-justify flex flex-col gap-6 max-w-[55rem]">
                <h1>Overview</h1>
                <p>{item.description}</p>

                <div className="flex flex-col gap-4">
                  <h1>Some Facts</h1>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex gap-3 items-center">
                      <LanguageIcon className="size-8 text-blue-500" />
                      <div className="flex flex-col">
                        <p>Language:</p>
                        <p>{item.language}</p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-center">
                      <CurrencyDollarIcon className="size-8 text-blue-500" />
                      <div className="flex flex-col">
                        <p>Currency:</p>
                        <p>{item.currency}</p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-center">
                      <BookOpenIcon className="size-8 text-blue-500" />
                      <div className="flex flex-col">
                        <p>Religion:</p>
                        <p>{item.religion}</p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-center">
                      <SunIcon className="size-8 text-blue-500" />
                      <div className="flex flex-col">
                        <p>Climate:</p>
                        <p>{item.climate}</p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-center">
                      <BuildingLibraryIcon className="size-8 text-blue-500" />
                      <div className="flex flex-col">
                        <p>Attractions:</p>
                        <p>{item.monuments}</p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-center">
                      <UsersIcon className="size-8 text-blue-500" />
                      <div className="flex flex-col">
                        <p>Population:</p>
                        <p>{item.population}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Maps />
                <div className="flex gap-16 mt-10 justify-center">
                  <p>wheather</p>
                  <p>Current time</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center mx-auto my-24">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-2 p-2 bg-white rounded-lg w-[90rem]">
                  <div class="grid gap-2">
                    <div>
                      <img
                        class="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        class="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        class="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="grid gap-2">
                    <div>
                      <img
                        class="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        class="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        class="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="grid gap-2">
                    <div>
                      <img
                        class="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        class="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        class="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="grid gap-2">
                    <div>
                      <img
                        class="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        class="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        class="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}

      <div></div>
    </>
  );
}

export default LocationsDetails;
