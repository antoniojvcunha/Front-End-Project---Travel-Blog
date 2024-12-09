import { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

function Locations() {
  const [continents, setContinents] = useState([]);

  useEffect(() => {
    loadContinents();
  }, []);

  async function loadContinents() {
    const response = await fetch(
      "https://674111a9d0b59228b7f223f1.mockapi.io/api/v1/cardList"
    );
    const result = await response.json();

    const uniqueContinents = result.reduce((acc, item) => {
      if (!acc.includes(item.continent)) {
        acc.push(item.continent);
      }
      return acc;
    }, []);

    setContinents(uniqueContinents);
  }

  return (
    <>
      <div className="bg-ceu bg-cover min-w-screen min-h-screen text-black overflow-hidden">
        <Navbar />
        <div className="bg-[url('/images/1.jpg')] bg-center bg-cover bg-no-repeat w-full h-[38rem] flex flex-col text-center justify-center">
          <div className="uppercase flex flex-col gap-4">
            <h1 className="text-3xl">destinations</h1>
            <p className="text-xl">where i´ve been</p>
          </div>
        </div>
        <div>
          {continents.length > 0 ? (
            continents.map((continent, id) => (
              <div key={id} className="mb-10">
                <h1 className="flex justify-center mt-10 text-3xl mb-10">
                  {continent}
                </h1>
                <div className="bg-gradient-to-b from-transparent to-areia">
                  <div className="flex hover:bg-areia hover:bg-opacity-15 duration-300">
                    <Card continent={continent} />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center mt-10 text-white">Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Locations;
