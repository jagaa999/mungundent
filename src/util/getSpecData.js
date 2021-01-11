import React from "react";
import toBoolean from "./booleanFunction";
import accounting from "accounting";
import moment from "moment";
import motoSpecData from "./motoSpecData";

export const getSpecData = (field = "", menu = "") => {
  // if (menu === "" || field === "") return null;
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
