import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

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
  // console.log("Манай Машин - ", editionItem);

  const otherImages = editionItem.imagesother.split(" | ");
  otherImages.splice(-1, 1);

  // console.log("otherImages", otherImages);
  const operations = (
    <>
      {/* <img
        src={editionItem.imagemain}
        className="gx-mr-2"
        style={{ maxHeight: "20px" }}
      />
      {editionItem.title} */}
    </>
  );

  return (
    <Tabs defaultActiveKey="1" tabBarExtraContent={operations}>
      <TabPane tab="Ерөнхий" key="1">
        <TabGeneral detail={editionItem} />
      </TabPane>
      <TabPane tab="Агрегат" key="2">
        <TabMotor detail={editionItem} />
      </TabPane>
      <TabPane tab="Дугуй" key="3">
        <TabTire detail={editionItem} />
      </TabPane>
      <TabPane tab="Тоног" key="4">
        <TabOption detail={editionItem} />
      </TabPane>
      <TabPane tab="Салон" key="5">
        <TabSalon detail={editionItem} />
      </TabPane>
      <TabPane tab="Өнгө" key="6">
        <TabColor detail={editionItem} />
      </TabPane>
    </Tabs>
  );
};

export default MarkItem;
