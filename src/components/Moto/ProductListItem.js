import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import moment from "moment";
import "moment/locale/mn";
import toBoolean from "util/booleanFunction";
import { Card, Badge, Tag, Image, List, Avatar, Divider } from "antd";
import { MailOutlined, MobileOutlined } from "@ant-design/icons";
import StarRatingComponent from "react-star-rating-component";

const { Meta } = Card;

const NewsItem = ({ productItem }) => {
  console.log("Манай бараа - ", productItem);

  return (
    <Card
      hoverable
      // style={{ width: 240 }}
      cover={
        <Image
          // height={250}
          src={`https://cloudapi.moto.mn/portal/${productItem.profilephoto}`}
          className="gx-p-3"
          fallback="https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
      }
    >
      <h4>{productItem.itemname}</h4>
      <div className="gx-text-success">{productItem.saleprice} төг</div>
      {/* //Үнэ харуулах тусгай хэлбэр
      <div className="ant-row-flex">
        <h4>{productItem.saleprice} </h4>
        <h5 className="gx-text-muted gx-px-2">
          <del>1515</del>
        </h5>
        <h5 className="gx-text-success">10% off</h5>
      </div> */}

      <div className="ant-row-flex gx-mb-1">
        <StarRatingComponent
          name=""
          // value={productItem.rating}
          value={5}
          starCount={5}
          editing={false}
        />
        <strong className="gx-d-inline-block gx-ml-2">
          {productItem.rating}
        </strong>
      </div>

      <div>{productItem.itemcategoryname}</div>
      <div>{productItem.departmentname}</div>

      {/* <Divider />

      <List
        itemLayout="horizontal"
        dataSource={Object.entries(productItem)}
        renderItem={(item) => (
          <List.Item
          // actions={[<a key="list-loadmore-edit">edit</a>]}
          >
            <List.Item.Meta
              // avatar={
              //   <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              // }
              title={item[0]}
              // description="бббб"
            />
            <div>{item[1]}</div>
          </List.Item>
        )}
      /> */}
    </Card>

    // </Badge.Ribbon>
    // </Link>
  );
};

export default NewsItem;
