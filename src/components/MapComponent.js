import React, { useState, useMemo } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  DirectionsRenderer,
  LoadScript,
  InfoWindow
} from "@react-google-maps/api";

const avsCoords = [
  {
    title: "Återvinningsstation Bangatan 54",
    adess: "Bangatan 54, Göteborg",
    lat: 57.6934656,
    lng: 11.9361714
  },
  {
    title: "Återvinningsstation Rymdtorget",
    adess: "Tellusgatan 1, Göteborg",
    lat: 57.75720726853309,
    lng: 12.073707393843375
  },
  {
    title: "Återvinningsstation Askim",
    adess: "Askims Backaväg 1, Göteborg",
    lat: 57.63645060565052,
    lng: 11.940457984068464
  },
  {
    title: "Återvinningsstation Lilla Arödsgatan",
    adess: "Lilla Arödsgatan 3A, Hisingen",
    lat: 57.73655503560304,
    lng: 11.957445526303436
  },
  {
    title: "Munkegärde återvinningscentral",
    adess: "Energivägen, 442 41 Kungälv",
    lat: 57.888563733052266,
    lng: 11.976983439937447
  },
  {
    title: "Återvinningsstation Borås",
    adess: "Skaraborgsvägen 33E, Borås",
    lat: 57.73040980917139,
    lng: 12.938222484191192
  }
];

const MapComponent = () => {
  const [map, setMap] = useState(null);
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  const mapCenter = {
    lat: 57.70887,
    lng: 11.97456
  };
  const mapOptions = {
    styles: {},
    streetViewControl: true,
    fullscreenControl: true,
    mapTypeControl: false,
    draggable: true
  };
  return (
    <div>
      <section>
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLEMAPS_API_KEY}>
          <GoogleMap
            zoom={7}
            defaultCenter={mapCenter}
            center={mapCenter}
            options={mapOptions}
            mapContainerStyle={{
              width: "100%",
              height: "340px"
            }}
            onLoad={(map) => setMap(map)}
          >
            {avsCoords.map((el, ind) => {
              return (
                <Marker
                  onClick={(e) => setShowInfoWindow(ind)}
                  position={{
                    lat: el.lat,
                    lng: el.lng
                  }}
                  key={ind}
                >
                  {showInfoWindow === ind && (
                    <InfoWindow>
                      <div>
                        <p>{el.title}</p>
                        <p>{el.adess}</p>
                      </div>
                    </InfoWindow>
                  )}
                </Marker>
              );
            })}
          </GoogleMap>
        </LoadScript>
      </section>
    </div>
  );
};

export default MapComponent;
