import React from "react";

import { Card, Tabs } from "antd";

import ProductDetailGeneral from "./Product/ProductDetailGeneral";
import AutozarDetail2Zar from "./Autozar/AutozarDetail2Zar";
import AutozarDetailSeller from "./Autozar/AutozarDetailSeller";
import AutozarGoonet from "./Autozar/AutozarGoonet";
import { isEmpty } from "lodash";

const ProductDetail = ({ myDetailContext }) => {
  const myItem = myDetailContext.productDetail.productDetail;

  if (isEmpty(myItem)) return null;

  return (
    <div key={myItem.id} className="gx-main-content2 autozar-detail">
      <div className="card-container">
        <Tabs
          type="line"
          tabPosition="top"
          centered={true}
          className="moto-product-detail-tab"
        >
          <Tabs.TabPane tab="Бараа" key="1">
            <Card>
              <ProductDetailGeneral myItem={myItem} />
            </Card>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Дэлгэрэнгүй" key="2">
            <Card>{/* <AutozarDetail2Zar myItem={myItem} /> */}</Card>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Борлуулагч" key="4">
            <Card>{/* <AutozarDetailSeller myItem={myItem} /> */}</Card>
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductDetail;
