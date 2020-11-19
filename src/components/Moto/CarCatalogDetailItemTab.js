import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import accounting from "accounting";

import toBoolean from "util/booleanFunction";
import {
  Card,
  Badge,
  Typography,
  Avatar,
  Row,
  Col,
  Button,
  Descriptions,
  Statistic,
  Divider,
  Tabs,
} from "antd";

import {
  MailOutlined,
  MessageOutlined,
  BellOutlined,
  UnorderedListOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";

import CarCatalogImagesSlider from "./Image/CarCatalogImagesSlider";
import TabGeneral from "./CarCatalog/Tabs/General";
import TabMotor from "./CarCatalog/Tabs/Motor";
import TabTire from "./CarCatalog/Tabs/Tire";
import TabOption from "./CarCatalog/Tabs/Option";
import TabSalon from "./CarCatalog/Tabs/Salon";
import TabColor from "./CarCatalog/Tabs/Color";

const { Meta } = Card;
const { Paragraph } = Typography;
const { TabPane } = Tabs;

const MarkItem = ({ editionItem }) => {
  // console.log("Манай Item - ", editionItem);

  const [cardTabs, setCardTabs] = useState({
    key: "tab1",
  });

  const tabList = [
    {
      key: "tab1",
      tab: "Ерөнхий",
    },
    {
      key: "tab2",
      tab: "Агрегат",
    },
    {
      key: "tab3",
      tab: "Дугуй",
    },
    {
      key: "tab4",
      tab: "Тоног",
    },
    {
      key: "tab5",
      tab: "Салон",
    },
    {
      key: "tab6",
      tab: "Өнгө",
    },
  ];

  const contentList = {
    tab1: <TabGeneral detail={editionItem} />,
    tab2: <TabMotor detail={editionItem} />,
    tab3: <TabTire detail={editionItem} />,
    tab4: <TabOption detail={editionItem} />,
    tab5: <TabSalon detail={editionItem} />,
    tab6: <TabColor detail={editionItem} />,
  };

  const onTabChange = (key, type) => {
    // console.log(key, type);
    setCardTabs({ ...cardTabs, [type]: key });
  };
  // const otherImages = editionItem.imagesother.split(" | ");
  // otherImages.splice(-1, 1);

  return (
    <>
      <div
        key={editionItem.auctionid}
        className="gx-main-content auction-detail"
      >
        <Card
          style={{ width: "100%" }}
          title={editionItem.title}
          extra={`Үнэ: ${accounting.formatMoney(
            editionItem.pricenewusd,
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
