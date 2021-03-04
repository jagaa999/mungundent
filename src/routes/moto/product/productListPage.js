import React, { useContext } from "react";

import FilterContext from "../../../context/FilterContext";
import MemberContext from "../../../context/MemberContext";
import ProductListType1 from "../../../components/Moto/ProductListType1";
import UniversalListType1 from "../../../components/Moto/UniversalListType1";
import UniversalListType2 from "../../../components/Moto/UniversalListType2";
import UniversalListType3 from "../../../components/Moto/UniversalListType3";
import ProductContext from "../../../context/ProductContext";
import { prepareProductListSettings } from "util/prepareSpecsProduct";
import ProductFilterDrawer from "../../../components/Moto/Drawer/ProductFilterDrawer";
import ProductFilter from "../../../components/Moto/Drawer/ProductFilter";
import { UniversalListMeta } from "util/prepareMeta";
// import PleaseLogin from "../../../components/Moto/Member/PleaseLogin";

const ProductListPage = () => {
  const filterContext = useContext(FilterContext);
  const memberContext = useContext(MemberContext);
  const productContext = useContext(ProductContext);

  const renderSwitch = (cardtype) => {
    switch (cardtype) {
      case "typecard":
        return (
          <UniversalListType2
            myListContext={productContext}
            myListContextLoading={productContext.productList.loading}
            myListContextList={productContext.productList}
            myListContextListList={productContext.productList.productList}
            mySettings={prepareProductListSettings}
            MyFilterDrawer={ProductFilterDrawer}
            MyFilter={ProductFilter}
          />
        );
      case "typetable":
        return (
          <UniversalListType3
            myListContext={productContext}
            myListContextLoading={productContext.productList.loading}
            myListContextList={productContext.productList}
            myListContextListList={productContext.productList.productList}
            mySettings={prepareProductListSettings}
            MyFilterDrawer={ProductFilterDrawer}
            MyFilter={ProductFilter}
          />
        );
      default:
        return (
          <UniversalListType1
            myListContext={productContext}
            myListContextLoading={productContext.productList.loading}
            myListContextList={productContext.productList}
            myListContextListList={productContext.productList.productList}
            mySettings={prepareProductListSettings}
            MyFilterDrawer={ProductFilterDrawer}
            MyFilter={ProductFilter}
          />
        );
    }
  };

  return (
    <>
      <UniversalListMeta meta={prepareProductListSettings.meta} />
      {renderSwitch(filterContext.urlSetting.cardtype.cardtype)}
    </>
  );
};

export default ProductListPage;
