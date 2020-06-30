import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import MapStyle from "./DarkThemed.js";
const LIBRARIES = ["places"];
const VERSION = "weekly";
const loadingElement = (
  <div
    style={{
      height: "100%",
      width: "100%",
    }}
  />
);
const MAP_CONTAINER_STYLE = {
  height: "100%",
  width: "100%",
  borderRadius: 5,
};

const onClick = () => {};
const onZoomChanged = () => {};
const handleDragStarted = () => {};
const handleDragEnded = () => {};
const onBoundsChanged = () => {};
const onLoad = () => {};
const styles = MapStyle;
const options = {
  styles,
  gestureHandling: "greedy",
  maxZoom: 20,
  minZoom: 3,
  draggable: true,
  keyboardShortcuts: false,
  scrollwheel: true,
  fullscreenControl: false,
  streetViewControl: false,
  mapTypeControl: false,
};

function Map({ API_KEY, children, center }) {
  return (
    <LoadScript
      googleMapsApiKey={API_KEY}
      libraries={LIBRARIES}
      version={VERSION}
      loadingElement={loadingElement}
    >
      <GoogleMap
        onLoad={onLoad}
        zoom={14}
        mapContainerStyle={MAP_CONTAINER_STYLE}
        onClick={onClick}
        onZoomChanged={onZoomChanged}
        onDragStart={handleDragStarted}
        onDragEnd={handleDragEnded}
        clickableIcons={false}
        center={center}
        onBoundsChanged={onBoundsChanged}
        options={options}
      >
        {children}
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
