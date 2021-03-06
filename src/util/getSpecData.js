import React from "react";
import autozarSpecData from "./specData/autozarSpecData.json";
import newsSpecData from "./specData/newsSpecData.json";
import auctionSpecData from "./specData/auctionSpecData.json";
import productSpecData from "./specData/productSpecData.json";
import carcatalogSpecData from "./specData/carcatalogSpecData.json";
import engineSpecData from "./specData/engineSpecData.json";
import partSpecData from "./specData/partSpecData.json";
import partengineSpecData from "./specData/partengineSpecData.json";
// import FilterContext from "context/FilterContext";

export const GetSpecData = (field = "", menu) => {
  if (field === "") return null;

  let myObject = {};
  switch (menu) {
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
    case "engine":
      myObject = engineSpecData;
      break;
    case "part":
      myObject = partSpecData;
      break;
    case "partengine":
      myObject = partengineSpecData;
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
