import React, { useState, useContext } from "react";
import moment from "moment";
import accounting from "accounting";

import toBoolean from "util/booleanFunction";
import { Card, Typography, Tabs } from "antd";

import TabGeneral from "./CarCatalog/Tabs/General";
import TabMotor from "./CarCatalog/Tabs/Motor";
import TabTire from "./CarCatalog/Tabs/Tire";
import TabOption from "./CarCatalog/Tabs/Option";
import TabSalon from "./CarCatalog/Tabs/Salon";
import TabColor from "./CarCatalog/Tabs/Color";

const { Meta } = Card;
const { Paragraph } = Typography;
const { TabPane } = Tabs;

const MarkItem = ({ detailItem }) => {
  // console.log("Манай Item - ", detailItem);

  const [cardTabs, setCardTabs] = useState({
    key: "tab1",
  });

  const tabList = [
    {
      key: "tab1",
      tab: <span className="gx-fs-md">Ерөнхий</span>,
    },
    {
      key: "tab2",
      tab: <span className="gx-fs-md">Агрегат</span>,
    },
    {
      key: "tab3",
      tab: <span className="gx-fs-md">Дугуй</span>,
    },
    {
      key: "tab4",
      tab: <span className="gx-fs-md">Тоног</span>,
    },
    {
      key: "tab5",
      tab: <span className="gx-fs-md">Салон</span>,
    },
    {
      key: "tab6",
      tab: <span className="gx-fs-md">Өнгө</span>,
    },
  ];

  const contentList = {
    tab1: <TabGeneral detail={detailItem} />,
    tab2: <TabMotor detail={detailItem} />,
    tab3: <TabTire detail={detailItem} />,
    tab4: <TabOption detail={detailItem} />,
    tab5: <TabSalon detail={detailItem} />,
    tab6: <TabColor detail={detailItem} />,
  };

  const onTabChange = (key, type) => {
    // console.log(key, type);
    setCardTabs({ ...cardTabs, [type]: key });
  };
  // const otherImages = detailItem.imagesother.split(" | ");
  // otherImages.splice(-1, 1);

  return (
    <>
      <div
        key={detailItem.auctionid}
        className="gx-main-content autozar-detail"
      >
        <Card
          className="moto-autozar-detail-card"
          style={{ width: "100%" }}
          title={detailItem.title}
          extra={`Үнэ: ${accounting.formatMoney(
            detailItem.pricenewusd,
            "$",
            0,
            "'"
          )}`}
          tabList={tabList}
          activeTabKey={cardTabs.key}
          onTabChange={(key) => {
            onTabChange(key, "key");
          }}
        >
          {contentList[cardTabs.key]}
        </Card>
      </div>
    </>
  );
};

export default MarkItem;
