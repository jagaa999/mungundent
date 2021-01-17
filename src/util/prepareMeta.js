import React, { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { prepareTitle } from "util/config";
import FilterContext from "context/FilterContext";

export const UniversalListMeta = ({ meta }) => {
  const filterContext = useContext(FilterContext);

  return (
    <Helmet>
      <title>
        {prepareTitle(
          `${meta?.title || "Moto.mn - Car & Parts"} (${
            filterContext?.totalcount || ""
          })`
        )}
      </title>
      <meta
        name="description"
        content={meta?.description || "Car Parts. Автомашин, сэлбэгийн портал"}
      />
      <meta property="og:url" content={window.location.href} />

      {meta?.property.map((item, index) => (
        <meta property={item.property} content={item.content} key={index} />
      ))}
    </Helmet>
  );
};

export const UniversalDetailMeta = ({ meta, myItem }) => {
  const filterContext = useContext(FilterContext);

  // console.log("myItem", myItem);

  return (
    <Helmet>
      <title>
        {prepareTitle(
          `${myItem?.mainData?.title?.value.substring(0, 30) || ""}`
        )}
      </title>
      <meta
        name="description"
        content={meta?.description || "Car Parts. Автомашин, сэлбэгийн портал"}
      />
      <meta property="og:url" content={window.location.href} />

      {meta?.property.map((item, index) => (
        <meta property={item.property} content={item.content} key={index} />
      ))}
    </Helmet>
  );
};
