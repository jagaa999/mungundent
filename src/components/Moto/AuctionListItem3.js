import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import moment from "moment";
import "moment/locale/mn";
import toBoolean from "util/booleanFunction";
import { Card, Image, Avatar, Divider, Table, Tooltip, Tag } from "antd";
import { MailOutlined, MobileOutlined } from "@ant-design/icons";

import { FeaturedTag, ActiveTag } from "./Tag/SmallTags";
import StarRatingComponent from "react-star-rating-component";

const { Meta } = Card;

const AuctionListItem3 = ({ auctionItem }) => {
  console.log("Манай машин - ", auctionItem);

  // //AUCTION: "http://avto.jp/get_code"
  // AUCTION_DATE: "http://avto.jp/get_code"
  // //AVG_PRICE: "681000"
  // AVG_STRING: "602,503,588,648,750,567,878,438,727,798"
  // //COLOR: "NAVY BLUE"
  // //ENG_V: "2000"
  // EQUIP: ""
  // FINISH: "http://avto.jp/get_code"
  // GRADE: "http://avto.jp/get_code"
  // //ID: "123"
  // IMAGES: "https://8.ajes.com/imgs/pEb7y2CljloCuPTC8U99h1kMApRgX8E7MZ9&h=50"
  // //KPP: "AT"
  // //KPP_TYPE: "2"
  // //KUZOV: "GP7"
  // //LOT: "7054"
  // MARKA_ID: "7"
  // MARKA_NAME: "SUBARU"
  // MILEAGE: "http://avto.jp/get_code"
  // //MODEL_ID: "705"
  // //MODEL_NAME: "IMPREZA"
  // PRIV: ""
  // PW: ""
  // //RATE: "4"
  // //START: "450000"
  // STATUS: ""
  // //TIME: "2020-11-08 00:08:13"
  // //YEAR: "2013"

  const columns = [
    {
      title: "Автомашин",
      dataIndex: "MODEL_NAME",
      key: "car-name",
      render: (MODEL_NAME, record) => (
        <>
          <li className="gx-media">
            <Image
              // height={250}
              src={record.IMAGES}
              className="gx-p-3"
              fallback="https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />

            <div className="gx-media-body gx-align-self-center">
              <Link to={"/auction/" + record.ID}>
                {`${record.YEAR} ${record.MARKA_NAME} ${record.MODEL_NAME}`}
              </Link>
              <Tooltip title="LOT дугаар">
                <Tag color="magenta" className="gx-ml-3">
                  {record.LOT}
                </Tag>
              </Tooltip>
              {/* {toBoolean(record.isfeatured) && <FeaturedTag type="dot" />}
              {!toBoolean(record.isactive) && <ActiveTag type="dot" />} */}
              <div className="gx-d-flex">
                <Tooltip title="Өнгө">
                  <span className="moto-label-main ant-tag">
                    {record.COLOR}
                  </span>
                </Tooltip>
                <Tooltip title="Хөдөлгүүр">
                  <span className="moto-label-main ant-tag">
                    {record.ENG_V} cc
                  </span>
                </Tooltip>
                <Tooltip title="Хроп">
                  <span className="moto-label-main ant-tag">
                    {record.KPP} {record.KPP_TYPE}
                  </span>
                </Tooltip>
                <Tooltip title="Арал">
                  <span className="moto-label-main ant-tag">
                    {record.KUZOV}
                  </span>
                </Tooltip>
              </div>
              <Tooltip title="Хувилбар">
                <div className="gx-d-flex gx-fs-sm">{record.GRADE}</div>
              </Tooltip>
            </div>
          </li>
        </>
      ),
    },
    {
      title: "Үнэлгээ",
      key: "car-rating",
      dataIndex: "RATE",
      align: "center",
      render: (RATE, record) => (
        <>
          <div className="gx-text-black gx-fs-lg">{RATE}</div>
          <StarRatingComponent
            name="Үнэлгээ"
            value={RATE && Number(RATE)}
            starCount={6}
            editing={false}
            // starColor={String}
            emptyStarColor={"#d1d1d1"}
          />
        </>
      ),
    },
    {
      title: "Гүйлт",
      key: "car-frame",
      dataIndex: "KUZOV",
      render: (KUZOV, record) => (
        <div className="gx-text-grey">{record.MILEAGE} км</div>
      ),
    },
    {
      title: "Үнэ",
      key: "car-price",
      dataIndex: "START",
      render: (START, record) => (
        <>
          <Tooltip title="Дуудах эхлэх үнэ">
            <div className="gx-text-grey">{START} иен</div>
          </Tooltip>
          <Tooltip title="Зарагддаг дундаж үнэ">
            <div className="gx-text-grey gx-fs-sm">{record.AVG_PRICE} иен</div>
          </Tooltip>
        </>
      ),
    },
    {
      title: "Огноо",
      key: "car-date",
      dataIndex: "AUCTION_DATE",
      render: (AUCTION_DATE, record) => (
        <>
          <div className="gx-text-grey gx-fs-sm">{record.AUCTION}</div>
          <Tooltip title={`Дуудлагын огноо (Япон цагаар) ${record.TIME}`}>
            <span className="gx-fs-sm gx-text-grey">
              <div>{moment(record.TIME).fromNow()}</div>
              <div>{moment(record.TIME).format("HH:mm")}</div>
            </span>
          </Tooltip>
        </>
      ),
    },
  ];

  return (
    <Table
      rowKey="LOT"
      columns={columns}
      dataSource={auctionItem}
      pagination={false}
      showHeader={true}
    />
  );
};

export default AuctionListItem3;
