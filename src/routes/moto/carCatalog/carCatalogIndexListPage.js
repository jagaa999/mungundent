import React, { useContext } from "react";
import { useParams } from "react-router-dom";

// import NewsListContext from "context/NewsListContext";
import FilterContext from "context/FilterContext";
import MemberContext from "context/MemberContext";
import CarCatalogIndexListType1 from "components/Moto/CarCatalogIndexListType1";
import PleaseLogin from "components/Moto/Member/PleaseLogin";

const CarCatalogIndexPage = () => {
  const { markId } = useParams(); //URL-аас орж ирсэн ID буюу Нийтлэлийн ID
  // const newsListContext = useContext(CarCatalogContext);
  const filterContext = useContext(FilterContext);
  const memberContext = useContext(MemberContext);

  return <CarCatalogIndexListType1 markId={markId} />;

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

export default CarCatalogIndexPage;
