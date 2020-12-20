import React, { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { prepareTitle } from "../../../util/config";
import FilterContext from "../../../context/FilterContext";
import { auctionList } from "content/helmet/helmetData";

const AuctionHelmet = (props) => {
  const filterContext = useContext(FilterContext);

  return (
    <Helmet>
      <title>
        {prepareTitle(`${auctionList.title} (${filterContext.totalcount})`)}
      </title>
      <meta name="description" content={auctionList.description} />
      <meta property="og:url" content={window.location.href} />

      {auctionList.property.map((item, index) => (
        <meta property={item.title} content={item.content} key={index} />
      ))}
    </Helmet>
  );
};

export default AuctionHelmet;
