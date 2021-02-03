import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import { prepareTitle } from "../../../util/config";
import ProductDetail from "../../../components/Moto/ProductDetail";
import UniversalDetail from "../../../components/Moto/UniversalDetail";
import { prepareProductDetailSettings } from "util/prepareSpecsProduct";
import { UniversalDetailMeta } from "util/prepareMeta";

import { CommentListStore } from "../../../context/CommentContext";
import { LogsStore } from "../../../context/LogsContext";
import ProductContext from "../../../context/ProductContext";
import MemberContext from "../../../context/MemberContext";
import LoadingDetail from "../../../components/Moto/Loading/LoadingDetail";

const ProductDetailPage = (props) => {
  const { itemid } = useParams(); //URL-аас орж ирсэн ID буюу Нийтлэлийн ID
  const productContext = useContext(ProductContext);
  const memberContext = useContext(MemberContext);

  useEffect(() => {
    if (itemid !== 0) {
      productContext.loadProductDetail(itemid);
    }
  }, [itemid, memberContext.state.memberCloudUserSysId]);

  return (
    <>
      {productContext.productDetail.loading ? (
        <LoadingDetail />
      ) : (
        <>
          <CommentListStore>
            <LogsStore>
              <UniversalDetailMeta
                meta={prepareProductDetailSettings.meta}
                myItem={productContext.productDetail.productDetail}
              />
              <UniversalDetail
                myDetailContext={productContext}
                myDetailContextDetail={productContext.productDetail}
                myDetailContextDetailDetail={
                  productContext.productDetail.productDetail
                }
                myDetailSettings={prepareProductDetailSettings}
              />
              <ProductDetail myDetailContext={productContext} />
            </LogsStore>
          </CommentListStore>
        </>
      )}
    </>
  );
};

export default ProductDetailPage;
