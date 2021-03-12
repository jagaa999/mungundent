import React from "react";

import { Card, Tabs } from "antd";

import LogBox from "./LogBox";
import CommentBox from "./CommentBox";
import AutozarDetail2General from "./Autozar/AutozarDetail2General";
import AutozarDetail2Zar from "./Autozar/AutozarDetail2Zar";
import AutozarDetailSeller from "./Autozar/AutozarDetailSeller";
import AutozarGoonet from "./Autozar/AutozarGoonet";
import { isEmpty } from "lodash";

const AutozarDetail2 = ({ myDetailContext }) => {
  const myItem = myDetailContext.autozarDetail.autozarDetail;

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
          <Tabs.TabPane tab="Үзүүлэлт" key="1">
            <Card>
              <AutozarDetail2General myItem={myItem} />
            </Card>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Автозар" key="2">
            <Card>
              <AutozarDetail2Zar myItem={myItem} />
            </Card>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Каталоги" key="3">
            <Card>
              <AutozarGoonet myItem={myItem} />
            </Card>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Борлуулагч" key="4">
            <Card>
              <AutozarDetailSeller myItem={myItem} />
            </Card>
          </Tabs.TabPane>
        </Tabs>
      </div>
      <CommentBox recordId={myItem.mainData.id} tableName="MOTO_AUTOZAR" />
      <LogBox recordId={myItem.mainData.id} tableName="MOTO_AUTOZAR" />
    </div>
  );
};

export default AutozarDetail2;
