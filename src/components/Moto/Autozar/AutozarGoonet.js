import React, { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import { Html5Entities } from "html-entities";
import { Scrollbars } from "react-custom-scrollbars";

import { Card, Image, List, Alert } from "antd";
import { ClearOutlined, DeleteOutlined } from "@ant-design/icons";

import moment from "moment";
import "moment/locale/mn";
import accounting from "accounting";

const AutozarGoonet = ({ myItem }) => {
  // console.table(myItem);
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
    <div>
      {/* <Scrollbars
        autoHeight
        autoHeightMin={100}
        autoHeightMax="calc(80vh - 36px - 35px - 75px)"
        autoHide
        autoHideTimeout={2000}
        universal
        renderTrackHorizontal={(props) => (
          <div
            {...props}
            style={{ display: "none" }}
            className="track-horizontal"
          />
        )}
      > */}
      <Alert
        message="Удахгүй хийгдэнэ."
        description="Энэ автозарыг япон автомашины дэлгэрэнгүй техник үзүүлэлттэй холбож харуулах системийг хийж байгааг мэдэгдэхэд таатай байна."
        type="warning"
        showIcon={true}
      />
      {/* // <Card type="inner" bordered={true} title="Мото каталоги" loading={false}>
    //   <Descriptions column={2} layout="horizontal" size="small">
    //     <Descriptions.Item
    //       label={<span className="gx-text-grey">Фирм</span>}
    //     ></Descriptions.Item>
    //     <Descriptions.Item
    //       label={<span className="gx-text-grey">Марк</span>}
    //     ></Descriptions.Item>
    //     <Descriptions.Item
    //       label={<span className="gx-text-grey">Цуврал</span>}
    //     ></Descriptions.Item>
    //     <Descriptions.Item
    //       label={<span className="gx-text-grey">Хувилбар</span>}
    //     ></Descriptions.Item>
    //   </Descriptions>

    //   <Divider />
    //   <div>firmid: {myItem.firmid}</div>
    //   <div>markid: {myItem.markid}</div>
    //   <div>motocarid: {myItem.motocarid}</div>
    //   <div>indexdate: {myItem.indexdate}</div>
    //   <div>indeximage: {myItem.indeximage}</div>
    //   <div>goobody2door: {myItem.goobody2door}</div>
    //   <div>goobody2modelcodefull: {myItem.goobody2modelcodefull}</div>
    //   <div>goobody2seat: {myItem.goobody2seat}</div>
    //   <div>goocardate: {myItem.goocardate}</div>
    //   <div>goocarid: {myItem.goocarid}</div>
    //   <div>goocartrim: {myItem.goocartrim}</div>
    //   <div>goodrive2transtypename: {myItem.goodrive2transtypename}</div>
    //   <div>gooengine2code: {myItem.gooengine2code}</div>
    //   <div>gooengine2disp: {myItem.gooengine2disp}</div>
    //   <div>gooengine2fuelname: {myItem.gooengine2fuelname}</div>
    //   <div>gooengine2fueltank: {myItem.gooengine2fueltank}</div>
    //   <div>gooengine2powerhp: {myItem.gooengine2powerhp}</div>
    //   <div>goomainid: {myItem.goomainid}</div>
    //   <div>goomodelcode: {myItem.goomodelcode}</div>
    //   <div>goopricenewusd: {myItem.goopricenewusd}</div>
    //   <div>goountilnow: {myItem.goountilnow}</div>
    // </Card> */}
      {/* </Scrollbars> */}
    </div>
  );
};

export default AutozarGoonet;
