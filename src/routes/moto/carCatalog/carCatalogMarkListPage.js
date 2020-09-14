import React, { useContext } from "react";
import { useParams } from "react-router-dom";

// import NewsListContext from "context/NewsListContext";
import FilterContext from "context/FilterContext";
import MemberContext from "context/MemberContext";
import CarCatalogMarkListType1 from "components/Moto/CarCatalogMarkListType1";
import PleaseLogin from "components/Moto/Member/PleaseLogin";

const CarCatalogMarkPage = () => {
  const { firmId } = useParams(); //URL-аас орж ирсэн ID буюу Нийтлэлийн ID
  // const newsListContext = useContext(CarCatalogContext);
  const filterContext = useContext(FilterContext);
  const memberContext = useContext(MemberContext);

  return <CarCatalogMarkListType1 firmId={firmId} />;

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

export default CarCatalogMarkPage;
