import React, { useContext, useEffect } from "react";

import { Card, Tabs, Button } from "antd";
import ProductDetailGeneral from "../Product/ProductDetailGeneral";
import LogBox from "../LogBox";
import CommentBox from "../CommentBox";
import { isEmpty } from "lodash";
import OrderButton from "../Order/OrderButton";
import UniversalContext from "../../../context/UniversalContext";
import FilterContext from "../../../context/FilterContext";

// const PartDetail = ({ myDetailContext }) => {
const PartDetail = () => {
  const universalContext = useContext(UniversalContext);
  const filterContext = useContext(FilterContext);

  const myDetail = universalContext.universalDetail.mainDetail;

  // if (isEmpty(myDetail)) return "";
  // console.log("DDDDDDDDDDDDD", myDetail);

  Одоо энд PartDetail-ийг хүссэнээрээ бичнэ дээ.

  return (
    <div>
      sdfdsfdsf dsf dsf dsf dsf
      {myDetail.mainData.title.value}
    </div>
    // <div key={myItem.id} className="gx-main-content2 autozar-detail">
    //   <div className="card-container">
    //     <Tabs
    //       type="line"
    //       tabPosition="top"
    //       centered={true}
    //       className="moto-product-detail-tab"
    //     >
    //       <Tabs.TabPane tab="Бараа" key="1">
    //         <Card>
    //           <ProductDetailGeneral myItem={myItem} />
    //         </Card>
    //       </Tabs.TabPane>
    //       <Tabs.TabPane tab="Дэлгэрэнгүй" key="2">
    //         <Card>{/* <AutozarDetail2Zar myItem={myItem} /> */}</Card>
    //       </Tabs.TabPane>
    //       <Tabs.TabPane tab="Борлуулагч" key="4">
    //         <Card>{/* <AutozarDetailSeller myItem={myItem} /> */}</Card>
    //       </Tabs.TabPane>
    //     </Tabs>
    //   </div>
    //   <div className="gx-my-5">
    //     <OrderButton myItem={myItem} />
    //   </div>
    //   <CommentBox recordId={myItem.mainData.id} tableName="MOTO_PRODUCT" />
    //   <LogBox recordId={myItem.mainData.id} tableName="MOTO_PRODUCT" />
    // </div>
  );
};

export default PartDetail;
