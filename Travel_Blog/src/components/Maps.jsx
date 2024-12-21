"use client";

import { useEffect, useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

function Maps({ citySlug, locationName, onCoordinatesChange }) {
  const [open, setOpen] = useState(false);

  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch(
          "https://674111a9d0b59228b7f223f1.mockapi.io/api/v1/cardList"
        );
        const result = await response.json();

        const filteredResult = result.find((value) => {
          return value.slug === citySlug;
        });

        if (filteredResult && filteredResult.coordinates) {
          const updatedCoordinates = {
            lat: parseFloat(filteredResult.coordinates.lat),
            lng: parseFloat(filteredResult.coordinates.lng),
          };
          setCoordinates(updatedCoordinates);

          if (onCoordinatesChange) {
            onCoordinatesChange(updatedCoordinates);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    loadData();
  }, [citySlug, onCoordinatesChange]);

  return (
    <>
      <APIProvider apiKey="AIzaSyBWAOvCRygXQyNndO8qFwqfCyJ1KurC2EY">
        {coordinates ? (
          <div className="w-full h-[20rem] ">
            <Map
              defaultZoom={5}
              defaultCenter={{ lat: coordinates.lat, lng: coordinates.lng }}
              mapId="778555028a2db7cf"
            >
              <AdvancedMarker
                position={{ lat: coordinates.lat, lng: coordinates.lng }}
                onClick={() => setOpen(true)}
              >
                <Pin
                  background={"red"}
                  borderColor={"black"}
                  glyphColor={"black"}
                />
              </AdvancedMarker>

              {open && (
                <InfoWindow
                  position={{ lat: coordinates.lat, lng: coordinates.lng }}
                  onCloseClick={() => setOpen(false)}
                >
                  <p className="w-20 h-8">
                    lat: {coordinates.lat}, lng: {coordinates.lng}
                  </p>
                </InfoWindow>
              )}
            </Map>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </APIProvider>
    </>
  );
}

export default Maps;
