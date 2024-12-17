import React, { useState, useEffect } from "react";
import { Link } from "wouter";

function Navbar() {
  const [locations, setLocations] = useState({});
  const [menuOpen, setMenuOpen] = useState(false); // Estado para abrir/fechar o menu

  // Buscar localizações da API
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch(
          "https://674111a9d0b59228b7f223f1.mockapi.io/api/v1/cardList"
        );
        const data = await response.json();

        const groupedLocations = data.reduce((acc, location) => {
          const { continent } = location;
          if (!acc[continent]) acc[continent] = [];
          acc[continent].push(location);
          return acc;
        }, {});

        setLocations(groupedLocations);
      } catch (error) {
        console.error("Erro ao buscar localizações:", error);
      }
    };

    fetchLocations();
  }, []);

  const continents = Object.keys(locations);

  return (
    <nav className="bg-white border-black dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3">
          <img src="./images/logo.png" className="h-10" alt="Traveller" />
        </Link>

        {/* Menu de Desktop */}
        <ul className="z-10 hidden md:flex md:flex-row md:space-x-10 md:text-lg font-bold text-gray-800">
          <li>
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>

          <li className="relative group">
            <Link
              href="/locations"
              className="flex items-center hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
            >
              Locations
              <svg
                className="w-2.5 h-2.5 ms-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 10 6"
              >
                <path d="M1 1l4 4 4-4" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </Link>

            <div className="absolute hidden group-hover:block bg-white border rounded-lg shadow-md w-48">
              <ul className="py-2">
                {continents.map((continent, index) => (
                  <li key={index}>
                    <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
                      🌍 {continent}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li>
            <Link href="/aboutme" className="hover:text-blue-600">
              About Me
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`absolute top-4 right-4 z-50 p-2 w-10 h-10 flex items-center justify-center rounded-lg md:hidden text-gray-500 bg-white shadow-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 ${
            menuOpen ? "text-black" : ""
          }`}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        <div
          className={`absolute top-0 left-0 w-full h-screen bg-white flex items-center justify-center z-40 transition-transform duration-300 ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          } md:hidden`}
        >
          <ul className="flex flex-col items-center space-y-8 text-2xl font-bold text-gray-800">
            <li>
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>

            <li className="relative group">
              <Link
                href="/locations"
                className="flex items-center py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
              >
                Locations
                <svg
                  className="w-2.5 h-2.5 ms-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 10 6"
                >
                  <path
                    d="M1 1l4 4 4-4"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </Link>

              <div className="absolute hidden group-hover:block bg-white border rounded-lg shadow-md w-48">
                <ul className="py-2">
                  {continents.map((continent, index) => (
                    <li key={index}>
                      <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
                        🌍 {continent}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li>
              <Link href="/aboutme" className="hover:text-blue-600">
                About Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
