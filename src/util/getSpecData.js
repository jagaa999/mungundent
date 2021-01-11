import React, { useContext } from "react";
import toBoolean from "./booleanFunction";
import accounting from "accounting";
import moment from "moment";
import FilterContext from "context/FilterContext";
import motoSpecData from "./motoSpecData";

export const GetSpecData = (field = "") => {
  const filterContext = useContext(FilterContext);
  if (field === "") return null;
  const menu = filterContext.state.menu;

  const myFieldObject = {
    label: field,
    value: "",
    icon: "",
    status: "default",
    tooltip: field,
    placeholder: field,
    ...(motoSpecData?.[menu]?.[field] || {}),
  };

  return myFieldObject;
};

// export default GetSpecData;
