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
import Gallery from "../components/Gallery";
import Weather from "../components/Weather";

function LocationsDetails({ params }) {
  const [location, setLocation] = useState(null);
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch(
          "https://674111a9d0b59228b7f223f1.mockapi.io/api/v1/cardList"
        );
        const result = await response.json();
        const filteredResult = result.find(
          (value) => value.slug === params.locationSlug
        );
        if (filteredResult) {
          setLocation(filteredResult);

          if (filteredResult.coordinates) {
            setCoordinates({
              lat: parseFloat(filteredResult.coordinates.lat),
              lng: parseFloat(filteredResult.coordinates.lng),
            });
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    loadData();
  }, [params]);

  return (
    <>
      <Navbar />
      {location ? (
        <div className="bg-white bg-cover min-w-screen min-h-screen text-black overflow-hidden">
          <SlideBackground params={{ locationSlug: params.locationSlug }} />
          <div className="flex flex-col lg:flex-row justify-around gap-10 my-12 mx-6 lg:mx-24 lg:items-start">
            <div className="mt-10 text-justify items-center flex flex-col gap-10 max-w-full lg:max-w-[55rem]">
              <h1 className="text-2xl lg:text-3xl font-bold">Overview</h1>
              <p className="indent-4 text-justify text-sm lg:text-base">
                {location.description}
              </p>

              <div className="flex flex-col gap-10 items-center">
                <h1 className="text-2xl lg:text-3xl font-bold">Some Facts</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-16">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-300 hover:bg-blue-500 transition duration-300">
                      <LanguageIcon className="h-6 w-6 text-black sm:h-10 sm:w-10" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold lg:text-lg">
                        Language:
                      </p>
                      <p className="text-xs lg:text-base">
                        {location.language}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-300 hover:bg-blue-500 transition duration-300">
                      <CurrencyDollarIcon className="h-6 w-6 text-black sm:h-10 sm:w-10" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold lg:text-lg">
                        Currency:
                      </p>
                      <p className="text-xs lg:text-base">
                        {location.currency}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-300 hover:bg-blue-500 transition duration-300">
                      <BookOpenIcon className="h-6 w-6 text-black sm:h-10 sm:w-10" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold lg:text-lg">
                        Religion:
                      </p>
                      <p className="text-xs lg:text-base">
                        {location.religion}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-300 hover:bg-blue-500 transition duration-300">
                      <SunIcon className="h-6 w-6 text-black sm:h-10 sm:w-10" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold lg:text-lg">
                        Climate:
                      </p>
                      <p className="text-xs lg:text-base">{location.climate}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-300 hover:bg-blue-500 transition duration-300">
                      <BuildingLibraryIcon className="h-6 w-6 text-black sm:h-10 sm:w-10" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold lg:text-lg">
                        Attractions:
                      </p>
                      <p className="text-xs lg:text-base">
                        {location.attractions}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-300 hover:bg-blue-500 transition duration-300">
                      <UsersIcon className="h-6 w-6 text-black sm:h-10 sm:w-10" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold lg:text-lg">
                        Population:
                      </p>
                      <p className="text-xs lg:text-base">
                        {location.population}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-20 sm:gap-8">
              <div className="w-full mt-10 sm:mt-0 h-[15rem] sm:h-[20rem] lg:w-[30rem] lg:h-[25rem] flex justify-center items-center">
                <Maps citySlug={params.locationSlug} />
              </div>
              {location && location.coordinates && (
                <Weather
                  lat={location.coordinates.lat}
                  lng={location.coordinates.lng}
                  locationName={location.name}
                />
              )}
            </div>
          </div>

          <Gallery />

          <Footer />
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <p className="text-xl font-semibold">Loading...</p>
        </div>
      )}
    </>
  );
}

export default LocationsDetails;
