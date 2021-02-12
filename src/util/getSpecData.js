import React, { useContext } from "react";
import FilterContext from "context/FilterContext";
import autozarSpecData from "./specData/autozarSpecData.json";
import newsSpecData from "./specData/newsSpecData.json";
import auctionSpecData from "./specData/auctionSpecData.json";
import productSpecData from "./specData/productSpecData.json";
import carcatalogSpecData from "./specData/carcatalogSpecData.json";

export const GetSpecData = (field = "", menu) => {
  const filterContext = useContext(FilterContext);
  if (field === "") return null;
  const myMenu = menu === undefined ? filterContext.state.menu : menu;

  let myObject = {};
  switch (myMenu) {
    case "news":
      myObject = newsSpecData;
      break;
    case "autozar":
      myObject = autozarSpecData;
      break;
    case "auction":
      myObject = auctionSpecData;
      break;
    case "product":
      myObject = productSpecData;
      break;
    case "carcatalog":
      myObject = carcatalogSpecData;
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
