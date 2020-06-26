import React, { useState } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  OverlayView,
} from "react-google-maps";

import MapStyle from "./MapStyle.js";
import Coords from "./Coords.js";

import { compose, withProps } from "recompose";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDRJIw8Yx_TfaA4NWSnDOD75P7UPLu6j-U&v=3.exp&libraries=geometry,drawing",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%`, width: `100%` }} />,
    mapElement: <div style={{ height: `100%`, width: `100` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(({ lat, lng }) => {
  const [hospitalMarkers, updateHospitalMarkers] = useState(Coords);

  return (
    <GoogleMap
      defaultOptions={{
        styles: MapStyle,
        streetViewControl: false,
        zoomControl: false,
        fullscreenControl: false,
        mapTypeControl: false,
      }}
      defaultZoom={15}
      center={{ lat, lng }}
    >
      {Coords.map((val, index) => (
        <Marker
          title={val.name}
          key={index}
          position={{
            lat: val.lat,
            lng: val.lng,
          }}
        />
      ))}
    </GoogleMap>
  );
});

export default MyMapComponent;
