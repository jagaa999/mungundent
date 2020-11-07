import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import moment from "moment";
import "moment/locale/mn";
import toBoolean from "util/booleanFunction";
import { Card, Badge, Tag, Image, List, Avatar, Divider } from "antd";
import { MailOutlined, MobileOutlined } from "@ant-design/icons";
import StarRatingComponent from "react-star-rating-component";

const { Meta } = Card;

const NewsItem = ({ auctionItem }) => {
  console.log("Манай бараа - ", auctionItem);

  // AUCTION: "http://avto.jp/get_code"
  // AUCTION_DATE: "http://avto.jp/get_code"
  // AVG_PRICE: "681000"
  // AVG_STRING: "602,503,588,648,750,567,878,438,727,798"
  // COLOR: "NAVY BLUE"
  // ENG_V: "2000"
  // EQUIP: ""
  // FINISH: "http://avto.jp/get_code"
  // GRADE: "http://avto.jp/get_code"
  // ID: "123"
  // IMAGES: "https://8.ajes.com/imgs/pEb7y2CljloCuPTC8U99h1kMApRgX8E7MZ9&h=50"
  // KPP: "AT"
  // KPP_TYPE: "2"
  // KUZOV: "GP7"
  // LOT: "7054"
  // MARKA_ID: "7"
  // MARKA_NAME: "SUBARU"
  // MILEAGE: "http://avto.jp/get_code"
  // MODEL_ID: "705"
  // MODEL_NAME: "IMPREZA"
  // PRIV: ""
  // PW: ""
  // RATE: "4"
  // START: "450000"
  // STATUS: ""
  // TIME: "2020-11-08 00:08:13"
  // YEAR: "2013"

  return (
    <Card
      hoverable
      // style={{ width: 240 }}
      cover={
        <Image
          // height={250}
          src={`https://cloudapi.moto.mn/portal/${auctionItem.profilephoto}`}
          className="gx-p-3"
          fallback="https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
      }
    >
      <h4>{auctionItem.itemname}</h4>
      <div className="gx-text-success">{auctionItem.saleprice} төг</div>
      {/* //Үнэ харуулах тусгай хэлбэр
      <div className="ant-row-flex">
        <h4>{auctionItem.saleprice} </h4>
        <h5 className="gx-text-muted gx-px-2">
          <del>1515</del>
        </h5>
        <h5 className="gx-text-success">10% off</h5>
      </div> */}

      <div className="ant-row-flex gx-mb-1">
        <StarRatingComponent
          name=""
          // value={auctionItem.rating}
          value={5}
          starCount={5}
          editing={false}
        />
        <strong className="gx-d-inline-block gx-ml-2">
          {/* {auctionItem.rating} */}5
        </strong>
      </div>

      <div>{auctionItem.itemcategoryname}</div>
      <div>{auctionItem.departmentname}</div>

      {/* <Divider />

      <List
        itemLayout="horizontal"
        dataSource={Object.entries(auctionItem)}
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
