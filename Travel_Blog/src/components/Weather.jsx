import { useState, useEffect } from "react";
import Timezone from "../components/Timezone";

function Weather({ lat, lng, locationName }) {
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      const apiKey = "c468b5d3c5f11625251c7aef819ca56d"; // Sua chave de API
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&units=metric&appid=${apiKey}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch forecast data");
        }
        const data = await response.json();
        setForecast(data); // Salva a previsão de 5 dias
      } catch (err) {
        setError(err.message);
      }
    }

    if (lat && lng) {
      fetchWeather();
    }
  }, [lat, lng]);

  if (!lat || !lng) {
    return <p className="text-gray-500">Waiting for location data...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  if (!forecast) {
    return <p className="text-gray-500">Loading forecast data...</p>;
  }

  const days = forecast.list.filter((item, index) => index % 8 === 0);

  return (
    <div className="backdrop-blur-md p-4 rounded-lg shadow-2xl w-full mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
        {/* Informações principais de temperatura e localização */}
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold text-black mb-2">
            {Math.round(forecast.list[0].main.temp)}°C
          </h2>
          <h2 className="text-lg font-bold text-black mb-2">{locationName}</h2>
        </div>

        {/* Timezone e ícone do clima */}
        <div className="flex flex-col items-center sm:items-end">
          <div className="text-lg font-bold text-black mb-2">
            <Timezone lat={lat} lng={lng} />
          </div>
          <img
            src={`https://openweathermap.org/img/wn/${forecast.list[0].weather[0].icon}@2x.png`}
            alt={forecast.list[0].weather[0].description}
            className="h-16 w-16 sm:h-20 sm:w-20"
          />
        </div>
      </div>

      {/* Previsão por dias */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
        {days.map((day, index) => (
          <div
            key={index}
            className="hover:bg-areia hover:bg-opacity-15 duration-300 p-2 rounded-lg shadow-md flex flex-col items-center"
          >
            <h3 className="text-center text-[0.7rem] sm:text-xs font-extralight">
              {new Date(day.dt * 1000).toLocaleDateString("en-US", {
                weekday: "short",
                day: "2-digit",
                month: "short",
              })}
            </h3>
            <div>
              <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt={day.weather[0].description}
                className="h-12 w-12 sm:h-16 sm:w-16"
              />
            </div>
            <div className="flex flex-col items-center mt-2">
              <p className="text-[0.6rem] sm:text-xs font-medium text-red-700">
                Max: {Math.round(day.main.temp_max)}°C
              </p>
              <p className="text-[0.6rem] sm:text-xs font-medium text-blue-500">
                Min: {Math.round(day.main.temp_min)}°C
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Weather;
