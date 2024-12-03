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
import { Link } from "wouter";

function LocationsDetails({ params }) {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch(
          "https://674111a9d0b59228b7f223f1.mockapi.io/api/v1/locationsData"
        );
        const result = await response.json();

        const filterData = result.filter((value) => {
          return value.id == params.id;
        });
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
                  <p>Weather</p>
                  <p>Current time</p>
                </div>
              </div>
            </div>

            <Gallery />

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
