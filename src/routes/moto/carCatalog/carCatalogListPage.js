import React, { useContext } from "react";

// import NewsListContext from "context/NewsListContext";
import FilterContext from "context/FilterContext";
import MemberContext from "context/MemberContext";
import CarCatalogType1 from "components/Moto/CarCatalogListType1";
import PleaseLogin from "components/Moto/Member/PleaseLogin";

const CarCatalogPage = () => {
  // const newsListContext = useContext(CarCatalogContext);
  const filterContext = useContext(FilterContext);
  const memberContext = useContext(MemberContext);

  return <CarCatalogType1 />;

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

export default CarCatalogPage;
