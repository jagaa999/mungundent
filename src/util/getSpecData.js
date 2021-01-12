import React, { useContext } from "react";
import FilterContext from "context/FilterContext";
import autozarSpecData from "./specData/autozarSpecData.json";
import newsSpecData from "./specData/newsSpecData.json";

export const GetSpecData = (field = "") => {
  const filterContext = useContext(FilterContext);
  if (field === "") return null;
  const menu = filterContext.state.menu;

  let myObject = {};
  switch (menu) {
    case "news":
      myObject = newsSpecData;
      break;
    case "autozar":
      myObject = autozarSpecData;
      break;

    default:
      break;
  }

  const myFieldObject = {
    label: field,
    value: "",
    icon: "",
    status: "default",
    tooltip: field,
    placeholder: field,
    ...(myObject[field] || {}),
  };

  return myFieldObject;
};
