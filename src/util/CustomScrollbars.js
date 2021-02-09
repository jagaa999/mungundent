import React from "react";
import { Scrollbars } from "react-custom-scrollbars";

const CustomScrollbars = (props) => (
  <Scrollbars
    autoHide
    {...props}
    renderTrackHorizontal={(props) => (
      <div
        {...props}
        style={{ display: "none" }}
        className="track-horizontal"
      />
    )}
  />
);

export default CustomScrollbars;
