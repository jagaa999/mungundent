import React, { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import { Html5Entities } from "html-entities";

import {
  Card,
  Image,
  List,
  Tooltip,
  Statistic,
  Row,
  Col,
  Divider,
  Descriptions,
} from "antd";
import { ClearOutlined, DeleteOutlined } from "@ant-design/icons";

import moment from "moment";
import "moment/locale/mn";
import accounting from "accounting";

const AutozarGoonet = ({ autozarItem }) => {
  // console.table(autozarItem);
  const htmlEntities = new Html5Entities(); //Body тагуудыг зөв харуулдаг болгох

  // firmid: "1011300000";
  // markid: "2391984227107543";
  // motocarid: "1587535609128123";
  // indexdate: "2019-06-01";
  // indeximage: "https://catalogphoto.goo-net.com/carphoto/10104114_201906.jpg";
  // goobody2door: "4";
  // goobody2modelcodefull: "QDF-GUN125";
  // goobody2seat: "5";
  // goocardate: "2019-06-01";
  // goocarid: "10121789";
  // goocartrim: "Z Black Rally Edition";
  // goodrive2transtypename: "Автомат - AT";
  // gooengine2code: "2GD-FTV";
  // gooengine2disp: "2393";
  // gooengine2fuelname: "Дизель";
  // gooengine2fueltank: "80";
  // gooengine2powerhp: "147.51";
  // goomainid: "201906_TOYOTA_HILUX";
  // goomodelcode: "GUN125";
  // goopricenewusd: "36841";
  // goountilnow: "";

  return (
    <Card type="inner" bordered={true} title="Мото каталоги" loading={false}>
      <Descriptions column={2} layout="horizontal" size="small">
        <Descriptions.Item
          label={<span className="gx-text-grey">Фирм</span>}
        ></Descriptions.Item>
        <Descriptions.Item
          label={<span className="gx-text-grey">Марк</span>}
        ></Descriptions.Item>
        <Descriptions.Item
          label={<span className="gx-text-grey">Цуврал</span>}
        ></Descriptions.Item>
        <Descriptions.Item
          label={<span className="gx-text-grey">Хувилбар</span>}
        ></Descriptions.Item>
      </Descriptions>

      <Divider />
      <div>firmid: {autozarItem.firmid}</div>
      <div>markid: {autozarItem.markid}</div>
      <div>motocarid: {autozarItem.motocarid}</div>
      <div>indexdate: {autozarItem.indexdate}</div>
      <div>indeximage: {autozarItem.indeximage}</div>
      <div>goobody2door: {autozarItem.goobody2door}</div>
      <div>goobody2modelcodefull: {autozarItem.goobody2modelcodefull}</div>
      <div>goobody2seat: {autozarItem.goobody2seat}</div>
      <div>goocardate: {autozarItem.goocardate}</div>
      <div>goocarid: {autozarItem.goocarid}</div>
      <div>goocartrim: {autozarItem.goocartrim}</div>
      <div>goodrive2transtypename: {autozarItem.goodrive2transtypename}</div>
      <div>gooengine2code: {autozarItem.gooengine2code}</div>
      <div>gooengine2disp: {autozarItem.gooengine2disp}</div>
      <div>gooengine2fuelname: {autozarItem.gooengine2fuelname}</div>
      <div>gooengine2fueltank: {autozarItem.gooengine2fueltank}</div>
      <div>gooengine2powerhp: {autozarItem.gooengine2powerhp}</div>
      <div>goomainid: {autozarItem.goomainid}</div>
      <div>goomodelcode: {autozarItem.goomodelcode}</div>
      <div>goopricenewusd: {autozarItem.goopricenewusd}</div>
      <div>goountilnow: {autozarItem.goountilnow}</div>
    </Card>
  );
};

export default AutozarGoonet;
