import React, { useContext } from "react";
import { useParams } from "react-router-dom";

// import NewsListContext from "context/NewsListContext";
import FilterContext from "context/FilterContext";
import MemberContext from "context/MemberContext";
import CarCatalogDetailType1 from "components/Moto/CarCatalogDetailType1";
import PleaseLogin from "components/Moto/Member/PleaseLogin";

const CarCatalogDetailPage = () => {
  const { carId } = useParams(); //URL-аас орж ирсэн ID буюу Нийтлэлийн ID
  // const newsListContext = useContext(CarCatalogContext);
  const filterContext = useContext(FilterContext);
  const memberContext = useContext(MemberContext);

  return <CarCatalogDetailType1 carId={carId} />;

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

export default CarCatalogDetailPage;
