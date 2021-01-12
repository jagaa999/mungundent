import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import FilterContext from "context/FilterContext";
import MemberContext from "context/MemberContext";
import CarCatalogIndexListType1 from "components/Moto/CarCatalogIndexListType1";
import PleaseLogin from "components/Moto/Member/PleaseLogin";

const CarCatalogIndexPage = () => {
  const { markId } = useParams(); //URL-аас орж ирсэн ID буюу Нийтлэлийн ID
  const filterContext = useContext(FilterContext);
  const memberContext = useContext(MemberContext);

  if (memberContext.state.isLogin) {
    return <CarCatalogIndexListType1 markId={markId} />;
  }

  return <PleaseLogin />;
};

export default CarCatalogIndexPage;
