import React, { useContext } from "react";
import { useParams } from "react-router-dom";

// import FilterContext from "context/FilterContext";
// import MemberContext from "context/MemberContext";
import CarCatalogEditionListType1 from "components/Moto/CarCatalogEditionListType1";
import PleaseLogin from "components/Moto/Member/PleaseLogin";

const CarCatalogEditionPage = () => {
  const { indexId } = useParams(); //URL-аас орж ирсэн ID буюу Нийтлэлийн ID
  // const filterContext = useContext(FilterContext);
  // const memberContext = useContext(MemberContext);

  return <CarCatalogEditionListType1 indexId={indexId} />;

  // if (memberContext.state.isLogin) {
  //   if (filterContext.state.cardtype.cardtype === "typecard") {
  //     return <NewsListType2 />;
  //   } else if (filterContext.state.cardtype.cardtype === "typetable") {
  //     return <NewsListType3 />;
  //   } else {
  //     return <NewsListType1 />;
  //   }
  // }

  return <PleaseLogin />;
};

export default CarCatalogEditionPage;
