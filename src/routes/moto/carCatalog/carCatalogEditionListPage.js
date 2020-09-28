import React, { useContext } from "react";
import { useParams } from "react-router-dom";

// import FilterContext from "context/FilterContext";
import MemberContext from "context/MemberContext";
import CarCatalogEditionListType1 from "components/Moto/CarCatalogEditionListType1";
import CarCatalogEditionListType3 from "components/Moto/CarCatalogEditionListType3";
import PleaseLogin from "components/Moto/Member/PleaseLogin";

const CarCatalogEditionPage = () => {
  const { indexId } = useParams(); //URL-аас орж ирсэн ID буюу Нийтлэлийн ID
  // const filterContext = useContext(FilterContext);
  const memberContext = useContext(MemberContext);

  if (memberContext.state.isLogin) {
    // return <CarCatalogEditionListType1 indexId={indexId} />;
    return <CarCatalogEditionListType3 indexId={indexId} />;
  }

  return <PleaseLogin />;
};

export default CarCatalogEditionPage;
