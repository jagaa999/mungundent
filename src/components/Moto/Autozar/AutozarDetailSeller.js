import React, { useState, useEffect } from "react";
import {
  Card,
  InputNumber,
  notification,
  Row,
  Col,
  Divider,
  Switch,
  Button,
} from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

import { calculateSpecialTax } from "util/auctionFunction";
import MotoAuctionDetailPriceInput from "./MotoAutozarDetailPriceInput";

const giveInfo = (type, title, desc) => {
  notification[type]({
    message: title,
    description: desc,
  });
};

const AutozarDetailSeller = ({ autozarItem }) => {
  // console.table(autozarItem);

  return (
    <Card title="Борлуулагч" bordered={true} type="inner" extra={null}>
      {autozarItem.systemuserid}
      {autozarItem.memberprofilephoto}
      {autozarItem.memberuserfullname}
      {autozarItem.memberusername}
      {autozarItem.mobile1rr}
      {autozarItem.mobile2}
      {autozarItem.email}
      {autozarItem.memberfirebaseuid}
      {autozarItem.ownerid}
      {autozarItem.memberpersonid}
    </Card>
  );
};

export default AutozarDetailSeller;
