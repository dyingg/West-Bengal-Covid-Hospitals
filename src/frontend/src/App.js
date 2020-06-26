import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import Map from "./Components/ReactMap/Map";

function App() {
  const [coords, updateCoords] = useState({
    latitude: 22.9868,
    longitude: 87.855,
  });
  useEffect(() => {
    var options = {
      timeout: 10000,
      maximumAge: 0,
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          console.log(pos);
          updateCoords(pos.coords);
        },
        (err) => {
          document.body.innerHTML = JSON.stringify(err);
        },
        options
      );
    } else {
      document.body.innerHTML = "geolocation not supported";
    }
  }, []);

  return (
    <div className="App">
      <Map lat={coords.latitude} lng={coords.longitude} />
    </div>
  );
}

export default App;
