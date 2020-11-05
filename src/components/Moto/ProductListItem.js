import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import moment from "moment";
import "moment/locale/mn";
import toBoolean from "util/booleanFunction";
import { Card, Badge, Tag } from "antd";
import { MailOutlined, MobileOutlined } from "@ant-design/icons";
const { Meta } = Card;

const NewsItem = ({ productItem }) => {
  console.log("Манай бараа - ", productItem);

  return (
    // <Link to={"/member/" + productItem.itemid}>
    // <Badge.Ribbon
    //   text={
    //     <>
    //       {productItem.email !== "" && <MailOutlined className="gx-mr-2" />}
    //       {productItem.phonenumber !== "" && (
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
            src={`https://cloudapi.moto.mn/portal/${productItem.imagemain}`}
            className="gx-object-cover"
          />
        </div>
        <div className="gx-user-wid-body gx-py-3 gx-pr-3">
          <div className="ant-row-flex">
            <h2 className="h4 gx-mr-1 gx-mb-1">{productItem.itemname}</h2>
          </div>
          <p className="gx-mb-1 gx-text-grey gx-fs-sm">
            itemtypename: {productItem.itemtypename}
            <br />
            departmentid: {productItem.departmentid}
            <br />
            departmentname: {productItem.departmentname}
            <br />
            favid: {productItem.favid}
            <br />
            issaleitem: {productItem.issaleitem}
            <br />
            itemcategoryid: {productItem.itemcategoryid}
            <br />
            itemcategoryname: {productItem.itemcategoryname}
            <br />
            itemcode: {productItem.itemcode}
            <br />
            itemid: {productItem.itemid}
            <br />
            itemname: {productItem.itemname}
            <br />
            measurename: {productItem.measurename}
            <br />
            profilephoto: {productItem.profilephoto}
            <br />
            rating: {productItem.rating}
            <br />
            saleprice: {productItem.saleprice}
            <br />
          </p>
        </div>
      </div>
    </Card>
    // </Badge.Ribbon>
    // </Link>
  );
};

export default NewsItem;
