import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Alert } from "antd";

// import ProductForm from "components/Moto/ProductForm";
import ProductContext from "context/ProductContext";
import MemberContext from "context/MemberContext";
import LoadingDetail from "components/Moto/Loading/LoadingDetail";
import PleaseLogin from "components/Moto/Member/PleaseLogin";

const ProductFormPage = (props) => {
  // const { id = 0 } = useParams(); //URL-аас орж ирсэн ID
  // const productDetailContext = useContext(ProductContext);
  // const memberContext = useContext(MemberContext);

  // useEffect(() => {
  //   if (id !== 0 && memberContext.state.memberCloudUserSysId !== 0) {
  //     productDetailContext.loadProductDetail(id);
  //   } else {
  //     productDetailContext.clearProductDetail();
  //   }
  // }, [id, memberContext.state.memberCloudUserSysId]);

  return (
    <>
      <Alert
        message="Сайн байна уу?"
        description="Бараа цэсэнд барааны мэдээлэл нэмэхийг хүсвэл Moto.mn сайтын админтай холбогдохыг урьж байна."
        type="info"
        banner={true}
        showIcon={false}
      />
      <div>Имэйл: info@moto.mn</div>
      <div>Утас: 99902070</div>
    </>
  );

  // return (
  //   <>
  //     {memberContext.state.isLogin ? (
  //       <>
  //         {productDetailContext.productDetail.loading ? (
  //           <LoadingDetail />
  //         ) : (
  //           // <ProductForm id={id} />
  //         )}
  //       </>
  //     ) : (
  //       <PleaseLogin />
  //     )}
  //   </>
  // );
};

export default ProductFormPage;
