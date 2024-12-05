import { useState, useEffect } from "react";

function Weather({ lat, lng }) {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      const apiKey = "c468b5d3c5f11625251c7aef819ca56d"; // Substitua com sua chave de API do OpenWeatherMap
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${apiKey}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }
        const data = await response.json();
        setWeather(data);
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

  if (!weather) {
    return <p className="text-gray-500">Loading weather data...</p>;
  }

  return (
    <div className="bg-blue-100 p-4 rounded-lg shadow-lg max-w-sm mx-auto">
      <h2 className="text-lg font-bold mb-2 text-blue-900">{weather.name}</h2>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xl font-bold">{Math.round(weather.main.temp)}°C</p>
          <p className="text-sm text-gray-700 capitalize">
            {weather.weather[0].description}
          </p>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
          className="h-16 w-16"
        />
      </div>
      <div className="mt-4">
        <p className="text-sm">
          <span className="font-semibold">Humidity:</span>{" "}
          {weather.main.humidity}%
        </p>
        <p className="text-sm">
          <span className="font-semibold">Wind Speed:</span>{" "}
          {weather.wind.speed} m/s
        </p>
      </div>
    </div>
  );
}

export default Weather;
