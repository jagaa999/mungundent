import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import FilterContext from "context/FilterContext";
import MemberContext from "context/MemberContext";
import CarCatalogMarkListType1 from "components/Moto/CarCatalogMarkListType1";
import PleaseLogin from "components/Moto/Member/PleaseLogin";

const CarCatalogMarkPage = () => {
  const { firmId } = useParams(); //URL-аас орж ирсэн ID буюу Нийтлэлийн ID
  const filterContext = useContext(FilterContext);
  const memberContext = useContext(MemberContext);

  if (memberContext.state.isLogin) {
    return <CarCatalogMarkListType1 firmId={firmId} />;
  }

  return <PleaseLogin />;
};

export default CarCatalogMarkPage;
