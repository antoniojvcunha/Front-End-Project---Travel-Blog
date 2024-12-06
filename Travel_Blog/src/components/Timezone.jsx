import { useState, useEffect } from "react";

function LocalTime({ lat, lng }) {
  const [localTime, setLocalTime] = useState(null);

  useEffect(() => {
    async function fetchLocalTime() {
      const apiKey = "ZT70RGGUIU2Z";
      const url = `http://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=position&lat=${lat}&lng=${lng}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch timezone data");
        }
        const data = await response.json();

        // Converte o timestamp para horário local
        const localDate = new Date(data.timestamp * 1000);
        setLocalTime(
          localDate.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })
        );
      } catch (err) {
        console.error(err);
      }
    }

    if (lat && lng) {
      fetchLocalTime();
    }
  }, [lat, lng]);

  if (!lat || !lng) {
    return <p>Waiting for location data...</p>;
  }

  if (!localTime) {
    return <p>Loading local time...</p>;
  }

  return <p>{localTime}</p>;
}

export default LocalTime;
