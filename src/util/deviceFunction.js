import React from "react";
import { isBrowser } from "react-device-detect";

export const DeviceText = (props) => {
  //   console.log("props", props);
  return (
    <span
      {...props}
      className={`${props.className} ${isBrowser ? "" : "gx-fs-sm"}`}
    >
      {props.title}
    </span>
  );
};
