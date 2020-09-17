import React, { useContext } from "react";

// import NewsListContext from "context/NewsListContext";
import FilterContext from "context/FilterContext";
import MemberContext from "context/MemberContext";
import ProductListType1 from "components/Moto/ProductListType1";
import PleaseLogin from "components/Moto/Member/PleaseLogin";

const ProductListPage = () => {
  // const newsListContext = useContext(CarCatalogContext);
  const filterContext = useContext(FilterContext);
  const memberContext = useContext(MemberContext);

  if (memberContext.state.isLogin) {
    return <ProductListType1 />;
  }

  return <PleaseLogin />;
};

export default ProductListPage;
