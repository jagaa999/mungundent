import React, { useContext, useState } from "react";

import {
  Button,
  PageHeader,
  Typography,
  Row,
  Col,
  Divider,
  Drawer,
} from "antd";
import { FilterOutlined, EllipsisOutlined } from "@ant-design/icons";
import MyIcon from "util/iconFunction";

import FilterContext from "context/FilterContext";
import AuctionContext from "context/AuctionContext";
import MotoAuctionSort from "./Sort/MotoAuctionSort";
import TopAuction from "./TopAuction";
import MostCarsInfo from "./Auction/MostCarsInfo";
import RareCarsInfo from "./Auction/RareCarsInfo";
import {
  sedanList,
  hatchbackList,
  crossoverList,
  suvList,
} from "content/auction/mostCars";

const { Paragraph } = Typography;

const AuctionListInfo = (props) => {
  const filterContext = useContext(FilterContext);
  const auctionListContext = useContext(AuctionContext);

  const [topCarsVisible, setTopCarsVisible] = useState(false);
  const [rareCarsVisible, setRareCarsVisible] = useState(false);
  const showTopCars = () => {
    setTopCarsVisible(true);
  };
  const onCloseTopCars = () => {
    setTopCarsVisible(false);
  };
  const showRareCars = () => {
    setRareCarsVisible(true);
  };
  const onCloseRareCars = () => {
    setRareCarsVisible(false);
  };

  return (
    <>
      <div className="gx-text-grey gx-fs-sm">
        <Paragraph>
          Япон улсын аукшин системд яг одоогоор тавигдсан байгаа автомашинуудыг
          та харж байна. Японоос орж ирж буй бүх автомашиныг эндээс авдаг билээ.
          Та өөрт таалагдсан хамгийн онцгой автомашиныг эндээс шууд үнэ тавин
          авах боломжтой.
        </Paragraph>
        <Paragraph>
          Энэ системийг ашигласнаар дундаж үнэлгээтэй энгийн автомашиныг хямдхан
          авах эсвэл маш сайн тоноглолтой сайхан автомашиныг боломжийн үнээр олж
          авах нөхцөл бүрдэж байгаа юм.
        </Paragraph>
      </div>

      <Button type="primary" onClick={showTopCars}>
        Нийтлэг машинууд
      </Button>
      <Button onClick={showRareCars}>Өвөрмөц машинууд</Button>
      <Drawer
        className="moto-big-drawer"
        title="Нийтлэг машинууд"
        placement="right"
        closable={true}
        onClose={onCloseTopCars}
        visible={topCarsVisible}
      >
        <MostCarsInfo />
      </Drawer>
      <Drawer
        className="moto-big-drawer"
        title="Өвөрмөц машинууд"
        placement="right"
        closable={true}
        onClose={onCloseRareCars}
        visible={rareCarsVisible}
      >
        <RareCarsInfo />
      </Drawer>
    </>
  );
};

export default AuctionListInfo;