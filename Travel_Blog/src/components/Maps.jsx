"use client";

import { useEffect, useRef, useState } from "react";
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
  const [selectedPlace, setSelectedPlace] = useState(null);
  const inputRef = useRef(null);
  const [googleLoaded, setGoogleLoaded] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch(
          "https://674111a9d0b59228b7f223f1.mockapi.io/api/v1/cardList"
        );
        const result = await response.json();

        const filteredResult = result.find((value) => value.slug === citySlug);

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

  useEffect(() => {
    if (window.google && window.google.maps && window.google.maps.places) {
      setGoogleLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (googleLoaded && inputRef.current) {
      const autocomplete = new google.maps.places.Autocomplete(
        inputRef.current,
        {
          types: ["geocode"],
        }
      );

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (place.geometry && place.geometry.location) {
          setSelectedPlace(place);
          const updatedCoordinates = {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          };
          setCoordinates(updatedCoordinates);

          if (onCoordinatesChange) {
            onCoordinatesChange(updatedCoordinates);
          }
        } else {
          console.log("No geometry available");
        }
      });
    }
  }, [googleLoaded]);

  const handlePlaceSelect = () => {
    if (selectedPlace && selectedPlace.place_id) {
      const placeDetails = selectedPlace;

      const address = placeDetails.formatted_address || "";
      const latitude = placeDetails.geometry?.location?.lat();
      const longitude = placeDetails.geometry?.location?.lng();

      console.log("Address:", address);
      console.log("Latitude:", latitude);
      console.log("Longitude:", longitude);

      setCoordinates({
        lat: latitude,
        lng: longitude,
      });

      if (onCoordinatesChange) {
        onCoordinatesChange({
          lat: latitude,
          lng: longitude,
        });
      }

      setOpen(true);
    } else {
      console.log("No place selected");
    }
  };

  return (
    <APIProvider
      apiKey="AIzaSyBWAOvCRygXQyNndO8qFwqfCyJ1KurC2EY"
      libraries={["places"]}
    >
      <div className="w-full">
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for a place"
            className="w-full p-2 border border-gray-300 rounded mb-4 hover:bg-slate-300"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handlePlaceSelect();
              }
            }}
          />

          <button
            onClick={handlePlaceSelect}
            className="px-4 py-2 border border-gray-300 rounded mb-4 hover:bg-slate-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 22 22"
              fill="currentColor"
              className="size-6"
            >
              <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Mapa */}
        {coordinates ? (
          <div className="w-full h-[20rem]">
            <Map
              defaultZoom={10}
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
      </div>
    </APIProvider>
  );
}

export default Maps;
