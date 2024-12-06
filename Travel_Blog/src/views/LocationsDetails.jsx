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
          <div className="flex flex-col lg:flex-row justify-around gap-10 my-12 mx-6 lg:mx-24">
            <div className="mt-10 text-justify flex flex-col gap-6 max-w-full lg:max-w-[55rem]">
              <h1 className="text-2xl lg:text-3xl font-bold">Overview</h1>
              <p className="text-sm lg:text-base">{location.description}</p>

              <div className="flex flex-col gap-4 items-center lg:items-start">
                <h1 className="text-2xl lg:text-3xl font-bold text-center md:text-left">
                  Some Facts
                </h1>
                <div className="grid grid-cols-1 content-center sm:grid-cols-2 gap-4 justify-items-center md:justify-items-start">
                  <div className="flex gap-3 items-center">
                    <LanguageIcon className="h-6 w-6 text-blue-500" />
                    <div className="flex flex-col text-center">
                      <p className="text-sm font-semibold">Language:</p>
                      <p className="text-xs">{location.language}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-center">
                    <CurrencyDollarIcon className="h-6 w-6 text-blue-500" />
                    <div className="flex flex-col text-center">
                      <p className="text-sm font-semibold">Currency:</p>
                      <p className="text-xs">{location.currency}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-center">
                    <BookOpenIcon className="h-6 w-6 text-blue-500" />
                    <div className="flex flex-col text-center">
                      <p className="text-sm font-semibold">Religion:</p>
                      <p className="text-xs">{location.religion}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-center">
                    <SunIcon className="h-6 w-6 text-blue-500" />
                    <div className="flex flex-col text-center">
                      <p className="text-sm font-semibold">Climate:</p>
                      <p className="text-xs">{location.climate}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-center">
                    <BuildingLibraryIcon className="h-6 w-6 text-blue-500" />
                    <div className="flex flex-col text-center">
                      <p className="text-sm font-semibold">Attractions:</p>
                      <p className="text-xs">{location.attractions}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-center">
                    <UsersIcon className="h-6 w-6 text-blue-500" />
                    <div className="flex flex-col text-center">
                      <p className="text-sm font-semibold">Population:</p>
                      <p className="text-xs">{location.population}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-5">
              <div className="w-full h-[15rem] sm:h-[20rem] lg:w-[30rem] lg:h-[25rem] flex justify-center items-center">
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
