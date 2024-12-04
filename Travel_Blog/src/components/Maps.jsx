"use client";

import { useEffect, useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

function Maps({ params }) {
  const [open, setOpen] = useState(false);

  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch(
          "https://674111a9d0b59228b7f223f1.mockapi.io/api/v1/cardList"
        );
        const result = await response.json();

        const filteredResult = result.find(
          (value) => value.slug === params.coordinatesSlug
        );
        if (filteredResult && filteredResult.coordinates) {
          setCoordinates({
            lat: parseFloat(filteredResult.coordinates.lat),
            lng: parseFloat(filteredResult.coordinates.lng),
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    loadData();
  }, [params]);

  return (
    <>
      <APIProvider apiKey="AIzaSyBWAOvCRygXQyNndO8qFwqfCyJ1KurC2EY">
        {coordinates ? (
          <div className="h-[30rem] w-[50rem]">
            <Map
              defaultZoom={3}
              defaultCenter={{ lat: coordinates.lat, lng: coordinates.lng }}
              mapId="778555028a2db7cf"
            >
              <AdvancedMarker
                position={{ lat: coordinates.lat, lng: coordinates.lng }}
                onClick={() => setOpen(true)}
              >
                <Pin
                  background={"grey"}
                  borderColor={"green"}
                  glyphColor={"purple"}
                />
              </AdvancedMarker>

              {open && (
                <InfoWindow
                  position={{ lat: coordinates.lat, lng: coordinates.lng }}
                  onCloseClick={() => setOpen(false)}
                >
                  <p>Estou em {coordinates.name}</p>
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
