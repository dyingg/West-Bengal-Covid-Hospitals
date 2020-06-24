import React from "react";

import { Map, GoogleApiWrapper } from "google-maps-react";

function HospitalMap() {
  return <Map google={this.props.google} zoom={14}></Map>;
}
