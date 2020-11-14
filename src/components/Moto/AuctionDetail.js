import React, { useContext, useEffect, useState } from "react";

//Body-ийн их биеийн тагуудыг зөв харуулдаг болгохын тулд оруулж ирэв.
import { Html5Entities } from "html-entities";

import moment from "moment";
import "moment/locale/mn";
import toBoolean from "util/booleanFunction";
import { defaultSrc } from "util/config";

import {
  Card,
  Row,
  Col,
  Typography,
  Tabs,
  Image,
  Descriptions,
  Divider,
  Statistic,
} from "antd";

import MotoAuctionDetailImages from "./Auction/MotoAuctionDetailImages";
import MotoAuctionDetailPrice from "./Auction/MotoAuctionDetailPrice";
import MotoAuctionSameCars from "./Auction/MotoAuctionSameCars";
// import AuctionDetailHeader from "./AuctionDetailHeader";
// import AuctionHeaderButton from "./Button/AuctionHeaderButton";

import AuctionContext from "context/AuctionContext";

const AuctionDetailComponent = () => {
  const auctionContext = useContext(AuctionContext);
  const auctionItem = auctionContext.auctionDetail.auctionDetail || {};
  const htmlEntities = new Html5Entities(); //Body тагуудыг зөв харуулдаг болгох

  // console.log("auctionItem", auctionItem);

  if (Object.keys(auctionItem).length !== 0) {
    // let myMainImage = "";
    // try {
    //   myMainImage = auctionItem.imagemain;
    // } catch (e) {
    //   myMainImage = "";
    // }
    const myImages = auctionItem.IMAGES.split("#");

    return (
      <div>
        <div
          key={auctionItem.auctionid}
          className="gx-main-content auction-detail"
        >
          {/* <AuctionDetailHeader auctionItem={auctionItem} member={member} /> */}
          <Row>
            <Col span={24} className="gx-text-center">
              <h3>
                {auctionItem.YEAR} {auctionItem.MARKA_NAME}{" "}
                {auctionItem.MODEL_NAME}
                <span className="gx-text-grey gx-fs-sm gx-ml-2">
                  {auctionItem.GRADE}
                </span>
              </h3>
            </Col>
          </Row>

          <Divider className="gx-my-5" />

          <Row>
            <Col span={8}>
              <Row>
                <Col span={12}>
                  <Statistic title="LOT код" value={auctionItem.LOT} />
                </Col>
                <Col span={12}>
                  <Statistic title="Үнэлгээ" value={auctionItem.RATE} />
                </Col>
              </Row>
              <Divider />
              <Row>
                <Col span={12}>
                  <Statistic
                    title="Огноо"
                    value={moment(auctionItem.AUCTION_DATE).format("MM-DD")}
                  />
                </Col>
                <Col span={12}>
                  <Statistic
                    title="Цаг"
                    value={moment(auctionItem.AUCTION_DATE).format("HH:mm")}
                  />
                </Col>
              </Row>
              <Divider />
              <Row>
                <Col span={24}>
                  <Statistic
                    title="Дуудлага болох газар"
                    value={auctionItem.AUCTION}
                  />
                </Col>
              </Row>
              <Divider />
              <Row>
                <Col span={12}>
                  <Statistic title="Эхлэх үнэ" value={auctionItem.START} />
                </Col>
                <Col span={12}>
                  <Statistic title="Дундаж үнэ" value={auctionItem.AVG_PRICE} />
                </Col>
              </Row>
            </Col>
            <Col span={16} className="gx-mb-3">
              <Image
                src={myImages[1]}
                loading="lazy"
                responsive
                width="300"
                quality="auto"
                responsiveUseBreakpoints="true"
                className="gx-img-fluid gx-w-100 gx-card-widget gx-mb-4"
                alt={auctionItem.name}
                onError={defaultSrc}
              />
            </Col>
          </Row>

          <Divider />

          <Row>
            <Col
              md={{ span: 14, offset: 5 }}
              sm={{ span: 16, offset: 4 }}
              xs={{ span: 20, offset: 2 }}
            >
              <MotoAuctionDetailImages
                auctionItem={auctionItem}
                myImages={myImages}
              />
            </Col>
          </Row>

          <Divider className="gx-my-5" />

          <Row>
            <Col md={12} sm={24} xs={24}>
              <h4>Автомашин</h4>
              <Descriptions
                className="moto-car-spec1"
                layout="horizontal"
                bordered={true}
                size="small"
                column={1}
              >
                <Descriptions.Item label="Үйлдвэрлэсэн он">
                  {auctionItem.YEAR}
                </Descriptions.Item>
                <Descriptions.Item label="Фирм">
                  {auctionItem.MARKA_NAME}
                </Descriptions.Item>
                <Descriptions.Item label="Марк">
                  {auctionItem.MODEL_NAME}
                </Descriptions.Item>
                <Descriptions.Item label="Хувилбар">
                  {auctionItem.GRADE}
                </Descriptions.Item>

                <Descriptions.Item label="Гүйлт">
                  {auctionItem.MILEAGE} км
                </Descriptions.Item>
                <Descriptions.Item label="Тоноглол">
                  {auctionItem.EQUIP}
                </Descriptions.Item>
              </Descriptions>

              {/* 
              ID
              LOT
              MARKA_ID
              MODEL_ID

              START	0
              FINISH	0
              STATUS	

              AVG_PRICE
              AVG_STRING
              SERIAL	
              INFO

              */}

              {/* <Descriptions
                layout="horizontal"
                bordered={true}
                size="small"
                column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
              >
                {Object.keys(auctionItem).map((val, k) => {
                  return (
                    <Descriptions.Item label={val}>
                      {auctionItem[val]}
                    </Descriptions.Item>
                  );
                })}
              </Descriptions> */}
            </Col>
            <Col md={12} sm={24} xs={24}>
              <h4>Техник үзүүлэлт</h4>
              <Descriptions
                className="moto-car-spec1"
                layout="horizontal"
                bordered={true}
                size="small"
                column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
              >
                <Descriptions.Item label="Хөдөлгүүр">
                  {auctionItem.ENG_V}
                </Descriptions.Item>
                <Descriptions.Item label="Хөдөлгүүрийн чадал">
                  {auctionItem.PW} kW
                </Descriptions.Item>
                <Descriptions.Item label="Арал">
                  {auctionItem.KUZOV}
                </Descriptions.Item>
                <Descriptions.Item label="Өнгө">
                  {auctionItem.COLOR}
                </Descriptions.Item>
                <Descriptions.Item label="Хроп">
                  {auctionItem.KPP}
                </Descriptions.Item>
                <Descriptions.Item label="Хропын шатлал">
                  {auctionItem.KPP_TYPE}
                </Descriptions.Item>
                <Descriptions.Item label="Хөтлөгч">
                  {auctionItem.PRIV}
                </Descriptions.Item>
              </Descriptions>
            </Col>
          </Row>

          <Divider dashed className="gx-my-5" />

          <Row>
            <Col span={10}>
              <MotoAuctionSameCars auctionItem={auctionItem} />
            </Col>
            <Col span={14}>
              <MotoAuctionDetailPrice auctionItem={auctionItem} />
            </Col>
          </Row>
          <div>{/* <AuctionHeaderButton item={auctionItem} /> */}</div>
        </div>
      </div>
    );
  } else {
    return "";
  }
};

export default AuctionDetailComponent;
