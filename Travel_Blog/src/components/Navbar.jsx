import React, { useState, useEffect } from "react";
import { Link } from "wouter";

function Navbar() {
  const [locations, setLocations] = useState({});

  // Função para buscar todas as localizações da API
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch(
          "https://674111a9d0b59228b7f223f1.mockapi.io/api/v1/cardList"
        ); // Substitua pela URL da sua API
        const data = await response.json();

        // Estrutura os dados por continente
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
    <nav className="bg-transparent border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="./images/logo.png" className="h-10" alt="Flowbite Logo" />
        </Link>

        {/* Botão Responsivo */}
        <button
          data-collapse-toggle="navbar-multi-level"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-multi-level"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navegação */}
        <div
          className="hidden w-full md:block md:w-auto"
          id="navbar-multi-level"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page"
              >
                Home
              </Link>
            </li>

            {/* Dropdown Locations */}
            <li className="relative group">
              {/* Link para a página /locations */}
              <Link
                href="/locations"
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Locations
                <svg
                  className="w-2.5 h-2.5 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </Link>
              <div className="z-10 absolute left-0 top-6 hidden group-hover:block bg-white border border-gray-200 rounded shadow-md w-48 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  {continents.map((continent, index) => (
                    <li key={index} className="relative group">
                      <button className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        🌍 {continent}
                        <svg
                          className="w-2.5 h-2.5 ms-2.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>

                      {/* Dropdown de localizações */}
                      <div className="z-10 absolute left-[101%] top-0 hidden group-hover:block bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                          {locations[continent] &&
                            locations[continent].map((location) => (
                              <li key={location.id}>
                                <Link
                                  href={`/locations/${location.slug}`}
                                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  {location.name}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li>
              <Link
                href="/aboutme"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
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
