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

function LocationsDetails({ params }) {
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
  }, [params]);

  return (
    <>
      {location ? (
        <div className="bg-ceu bg-cover min-w-screen min-h-screen text-black overflow-hidden">
          <div className="bg-black">
            <Navbar />
          </div>
          <SlideBackground params={{ locationSlug: params.locationSlug }} />
          <div className="flex gap-10 my-24 ml-24 mr-24">
            <div className="mt-20 text-justify flex flex-col gap-6 max-w-[55rem]">
              <h1>Overview</h1>
              <p>{location.description}</p>

              <div className="flex flex-col gap-4">
                <h1>Some Facts</h1>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex gap-3 items-center">
                    <LanguageIcon className="size-8 text-blue-500" />
                    <div className="flex flex-col">
                      <p>Language:</p>
                      <p>{location.language}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-center">
                    <CurrencyDollarIcon className="size-8 text-blue-500" />
                    <div className="flex flex-col">
                      <p>Currency:</p>
                      <p>{location.currency}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-center">
                    <BookOpenIcon className="size-8 text-blue-500" />
                    <div className="flex flex-col">
                      <p>Religion:</p>
                      <p>{location.religion}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-center">
                    <SunIcon className="size-8 text-blue-500" />
                    <div className="flex flex-col">
                      <p>Climate:</p>
                      <p>{location.climate}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-center">
                    <BuildingLibraryIcon className="size-8 text-blue-500" />
                    <div className="flex flex-col">
                      <p>Attractions:</p>
                      <p>{location.monuments}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-center">
                    <UsersIcon className="size-8 text-blue-500" />
                    <div className="flex flex-col">
                      <p>Population:</p>
                      <p>{location.population}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Maps />
              <div className="flex gap-16 mt-10 justify-center">
                <p>Weather</p>
                <p>Current time</p>
              </div>
            </div>
          </div>

          <Gallery />

          <Footer />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default LocationsDetails;
