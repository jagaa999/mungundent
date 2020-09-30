import React, { useContext } from "react";

// import NewsListContext from "context/NewsListContext";
import FilterContext from "context/FilterContext";
import MemberContext from "context/MemberContext";
import CarCatalogFirmType1 from "components/Moto/CarCatalogFirmListType1";
import PleaseLogin from "components/Moto/Member/PleaseLogin";

const CarCatalogPage = () => {
  // const newsListContext = useContext(CarCatalogContext);
  const filterContext = useContext(FilterContext);
  const memberContext = useContext(MemberContext);

  if (memberContext.state.isLogin) {
    return <CarCatalogFirmType1 />;
  }

  return <PleaseLogin />;
};

export default CarCatalogPage;
