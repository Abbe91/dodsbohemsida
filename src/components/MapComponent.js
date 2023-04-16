import React, { useState, useMemo } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  DirectionsRenderer,
  LoadScript,
  InfoWindow
} from "@react-google-maps/api";

const MapComponent = ({ avsCoords }) => {
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
            zoom={9}
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
