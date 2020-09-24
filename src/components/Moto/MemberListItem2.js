import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import moment from "moment";
import "moment/locale/mn";
import toBoolean from "util/booleanFunction";
import { Card, Badge, Avatar, Tag } from "antd";
import {
  MailOutlined,
  MobileOutlined,
  FacebookOutlined,
  GoogleOutlined,
  ArrowRightOutlined,
  StarOutlined,
} from "@ant-design/icons";

import { createFromIconfontCN } from "@ant-design/icons";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2091278_q2vy66k6jxr.js",
});

const { Meta } = Card;

const MemberListItem = ({ memberItem, isSpecial }) => {
  console.log("Манай Гишүүн - ", memberItem);

  const WhatProvider = (props) => {
    const providerId = props.providerId;
    console.log(providerId);

    if (providerId !== "") {
      switch (providerId) {
        case "facebook.com":
          return (
            <Avatar
              style={{ backgroundColor: "#3b5998" }}
              icon={<IconFont type="iconfacebook1" />}
            />
          );

        case "google.com":
          return (
            <Avatar
              style={{ backgroundColor: "#fbbc05" }}
              icon={<IconFont type="icongoogle" />}
            />
          );

        default:
          return (
            <Tag icon={<StarOutlined />} color="#494e58">
              Тодорхойгүй
            </Tag>
          );
      }
    } else {
      return "";
    }
  };

  return (
    // <Link to={"/member/" + memberItem.systemuserid}>
    //   <Badge.Ribbon
    //     text={
    //       <>
    //         {memberItem.email !== "" && <MailOutlined className="gx-mr-2" />}
    //         {memberItem.phonenumber !== "" && (
    //           <MobileOutlined className="gx-mr-2" />
    //         )}
    //       </>
    //     }
    //     color="#d1d1d1"
    //     placement="end"
    //   >
    <Card hoverable={true} className="moto-item-card gx-text-center">
      <Avatar src={memberItem.profilephoto} size={89} />
      <h3 className="gx-mt-4">{memberItem.userfullname}</h3>
      <p className="gx-text-grey gx-fs-sm gx-mb-4">
        {moment(memberItem.createddate).fromNow()} <br />
        {/* {memberItem.providerid} */}
      </p>

      <div className="moto-bottom-right">
        {memberItem.email !== "" && <MailOutlined className="gx-mr-2" />}
        {memberItem.phonenumber !== "" && (
          <MobileOutlined className="gx-mr-2" />
        )}

        <WhatProvider providerId={memberItem.providerid} />
      </div>
    </Card>
    // </Badge.Ribbon>
    // </Link>
  );
};

export default MemberListItem;
