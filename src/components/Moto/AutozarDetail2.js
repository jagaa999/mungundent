import React, { useState } from "react";

import moment from "moment";
import accounting from "accounting";

import { Card, Alert, Badge, PageHeader } from "antd";

import AutozarDetail2General from "./Autozar/AutozarDetail2General";
import AutozarDetail2Zar from "./Autozar/AutozarDetail2Zar";
import AutozarDetailSeller from "./Autozar/AutozarDetailSeller";
import AutozarGoonet from "./Autozar/AutozarGoonet";
import { isEmpty } from "lodash";

const AutozarDetail2 = ({ myDetailContext }) => {
  const myItem = myDetailContext.autozarDetail.autozarDetail;

  const [cardTabs, setCardTabs] = useState({
    key: "tab1",
  });

  if (isEmpty(myItem)) return null;

  const tabList = [
    {
      key: "tab1",
      tab: <span className="gx-fs-md">Автомашин</span>,
    },
    {
      key: "tab2",
      tab: <span className="gx-fs-md">Автозар</span>,
    },
    {
      key: "tab3",
      tab: <span className="gx-fs-md">Каталоги</span>,
    },
    {
      key: "tab4",
      tab: (
        <span className="gx-fs-md">
          Борлуулагч
          <Badge status="processing" className="gx-m-0 gx-ml-1" />
        </span>
      ),
    },
  ];

  const contentList = {
    tab1: <AutozarDetail2General myItem={myItem} />,
    tab2: <AutozarDetail2Zar myItem={myItem} />,
    tab3: <AutozarGoonet myItem={myItem} />,
    tab4: <AutozarDetailSeller myItem={myItem} />,
  };

  const onTabChange = (key, type) => {
    setCardTabs({ ...cardTabs, [type]: key });
  };

  return (
    <div key={myItem.id} className="gx-main-content2 autozar-detail">
      <Card
        className="moto-autozar-detail-card"
        style={{ width: "100%", height: "100%" }}
        title={null}
        extra={null}
        tabList={tabList}
        activeTabKey={cardTabs.key}
        onTabChange={(key) => {
          onTabChange(key, "key");
        }}
      >
        {contentList[cardTabs.key]}
      </Card>
    </div>
  );
};

export default AutozarDetail2;
