import React, { useState } from "react";

import { LineChart, Line } from "recharts";

import AMRI from "./amri.jpg";

import GoogleMap from "./GoogleMap";
import Coords from "./Coords";

import { OverlayView } from "@react-google-maps/api";

const divStyle = {};

function HospitalOverlay({ lat, lng, name }) {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 10,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 20,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 33,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 90,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 35,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 37,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 25,
      amt: 2100,
    },
  ];

  return (
    <OverlayView
      position={{ lat, lng }}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
    >
      <div className="overlay">
        <img
          src={AMRI}
          height={"100px"}
          width={"50px"}
          style={{ borderRadius: "5px", margin: "0 10px" }}
        />
        <div>
          <h1
            style={{
              color: "#FFFFFF",
              fontSize: "12px",
            }}
          >
            {name}
          </h1>
          <LineChart
            width={100}
            height={30}
            data={data}
            margin={{ top: 15, bottom: 5 }}
          >
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#0676ED"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
          <h1
            style={{
              color: "#FFFFFF",
              fontSize: "20px",
              fontWeight: "700",
              marginBottom: 0,
              paddingBottom: 0,
            }}
          >
            {(Math.random() * 100).toFixed(0)}/100
          </h1>
        </div>
      </div>
    </OverlayView>
  );
}

function MyMapComponent({ lat, lng }) {
  return (
    <GoogleMap
      API_KEY={"AIzaSyDRJIw8Yx_TfaA4NWSnDOD75P7UPLu6j-U"}
      center={{ lat, lng }}
      children={Coords.map((value) => (
        <HospitalOverlay lat={value.lat} lng={value.lng} name={value.name} />
      ))}
    />
  );
}

export default React.memo(MyMapComponent);
