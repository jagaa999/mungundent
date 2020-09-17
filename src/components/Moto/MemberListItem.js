import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import moment from "moment";
import "moment/locale/mn";
import toBoolean from "util/booleanFunction";
import { Card, Badge, Tag } from "antd";
import { MailOutlined, MobileOutlined } from "@ant-design/icons";
const { Meta } = Card;

const NewsItem = ({ memberItem, isSpecial }) => {
  console.log("Манай Гишүүн - ", memberItem);

  return (
    // <Link to={"/member/" + memberItem.systemuserid}>
    <Badge.Ribbon
      text={
        <>
          {memberItem.email !== "" && <MailOutlined className="gx-mr-2" />}
          {memberItem.phonenumber !== "" && (
            <MobileOutlined className="gx-mr-2" />
          )}
        </>
      }
      // className="gx-bg-success"
      color="#d1d1d1"
      placement="end"
    >
      <Card
        className="gx-card-full gx-dot-arrow-hover"
        style={{ height: "97px" }}
      >
        <div className="gx-user-wid-row">
          <div className="gx-user-wid gx-mr-3">
            <img
              alt="..."
              src={memberItem.profilephoto}
              className="gx-object-cover"
            />
          </div>
          <div className="gx-user-wid-body gx-py-3 gx-pr-3">
            <div className="ant-row-flex">
              <h2 className="h4 gx-mr-1 gx-mb-1">{memberItem.userfullname}</h2>
            </div>
            <p className="gx-mb-1 gx-text-grey gx-fs-sm">
              {moment(memberItem.createddate).fromNow()} <br />
              {memberItem.providerid}
            </p>
          </div>
        </div>
      </Card>
    </Badge.Ribbon>
    // </Link>
  );
};

export default NewsItem;
