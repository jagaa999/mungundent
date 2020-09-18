import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import moment from "moment";
import "moment/locale/mn";
import toBoolean from "util/booleanFunction";
import { Card, Badge, Tag } from "antd";
import { MailOutlined, MobileOutlined } from "@ant-design/icons";
const { Meta } = Card;

const NewsItem = ({ motocarItem }) => {
  console.log("Манай машин - ", motocarItem);

  return (
    // <Link to={"/member/" + motocarItem.itemid}>
    // <Badge.Ribbon
    //   text={
    //     <>
    //       {motocarItem.email !== "" && <MailOutlined className="gx-mr-2" />}
    //       {motocarItem.phonenumber !== "" && (
    //         <MobileOutlined className="gx-mr-2" />
    //       )}
    //     </>
    //   }
    //   color="#d1d1d1"
    //   placement="end"
    // >
    <Card
      className="gx-card-full gx-dot-arrow-hover"
      style={{ height: "250px" }}
    >
      <div className="gx-user-wid-row">
        <div className="gx-user-wid gx-mr-3">
          <img
            alt="..."
            src={`https://cloudapi.moto.mn/portal/${motocarItem.imagemain}`}
            className="gx-object-cover"
          />
        </div>
        <div className="gx-user-wid-body gx-py-3 gx-pr-3">
          <div className="ant-row-flex">
            <h2 className="h4 gx-mr-1 gx-mb-1">
              {motocarItem.firmname} {motocarItem.markname}{" "}
              {motocarItem.cartrim}
            </h2>
          </div>
          <p className="gx-mb-1 gx-text-grey gx-fs-sm">
            {motocarItem.itemcode}
            <br />
            {motocarItem.departmentname}
            <br />
            category: {motocarItem.category}
            <br />
            Үнэ: {motocarItem.saleprice}
            <br />
            itemtypename: {motocarItem.itemtypename}
          </p>
        </div>
      </div>
    </Card>
    // </Badge.Ribbon>
    // </Link>
  );
};

export default NewsItem;
