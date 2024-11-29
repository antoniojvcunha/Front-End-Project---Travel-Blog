"use client";

import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

function Maps() {
  const position = { lat: 2.160684, lng: 21.99682 };
  const [open, setOpen] = useState(false);

  return (
    <>
      <APIProvider apiKey="AIzaSyBWAOvCRygXQyNndO8qFwqfCyJ1KurC2EY">
        <div className="h-[30rem] w-[50rem]">
          <Map zoom={3} center={position} mapId="778555028a2db7cf">
            <AdvancedMarker position={position} onClick={() => setOpen(true)}>
              <Pin
                background={"grey"}
                borderColor={"green"}
                glyphColor={"purple"}
              />
            </AdvancedMarker>

            {open && (
              <InfoWindow
                position={position}
                onCloseClick={() => setOpen(false)}
              >
                <p>Estou em África</p>
              </InfoWindow>
            )}
          </Map>
        </div>
      </APIProvider>
    </>
  );
}

export default Maps;
