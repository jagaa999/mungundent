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
import AvatarMember from "../Member/MemberAvatar";
import AvatarMember02 from "../Member/MemberAvatar02";
import AvatarMember03 from "../Member/MemberAvatar03";

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
      <AvatarMember03
        memberPhoto={autozarItem.memberprofilephoto}
        memberName={autozarItem.memberuserfullname}
      />

      <br />
      {autozarItem.mobile1rr}
      <br />
      {autozarItem.mobile2}
      <br />
      {autozarItem.email}
    </Card>
  );
};

export default AutozarDetailSeller;
