import React from "react";
import { isEmpty } from "lodash";

export const FilterTitle = ({ title, className }) => {
  if (isEmpty(title)) return null;
  return <h6 className={`gx-font-weight-bold ${className}`}>{title}</h6>;
};

//Очоогоос авсан функц
//Үл давтагдах ID үүсгэнэ.
export const getUniqueId = (prefix) => {
  let d = new Date().getTime();
  d += parseInt(Math.random() * 100).toString();
  if (undefined === prefix || prefix === "no") {
    prefix = "";
  }

  d = prefix + d;
  return d;
};
