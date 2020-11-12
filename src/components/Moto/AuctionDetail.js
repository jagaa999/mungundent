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
} from "antd";

import MotoAuctionDetailImages from "./Auction/MotoAuctionDetailImages";
import MotoAuctionDetailPrice from "./Auction/MotoAuctionDetailPrice";
// import AuctionDetailHeader from "./AuctionDetailHeader";
// import AuctionHeaderButton from "./Button/AuctionHeaderButton";

import AuctionContext from "context/AuctionContext";

const AuctionDetailComponent = () => {
  const auctionContext = useContext(AuctionContext);
  const auctionItem = auctionContext.auctionDetail.auctionDetail || {};
  const htmlEntities = new Html5Entities(); //Body тагуудыг зөв харуулдаг болгох

  console.log("auctionItem", auctionItem);

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

          <Divider />

          <Row>
            <Col span={7}>
              Үнэлгээ
              <h1>{auctionItem.RATE}</h1>
              Дуудлаганд орох огноо
              <h1>{moment(auctionItem.AUCTION_DATE).format("YYYY-MM-DD")}</h1>
              <br />
              Дуудлаганд орох цаг
              <h1>{moment(auctionItem.TIME).format("HH:mm")}</h1>
              <br />
              Дуудлага болох газар
              <h1>{auctionItem.AUCTION}</h1>
              <br />
              Дуудлагын код
              <h1 className="gx-text-danger">{auctionItem.LOT}</h1>
            </Col>
            <Col span={17} className="gx-mb-3">
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

          <Row>
            <Col xl={16} lg={14} md={14} sm={24} xs={24}>
              <h4>Автомашин</h4>
              <Descriptions
                className="moto-car-spec1"
                layout="horizontal"
                bordered={true}
                size="small"
                column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
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
              </Descriptions>

              <h4 className="gx-mt-4">Техник үзүүлэлт</h4>
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

              <h4 className="gx-mt-4">Автомашины нөхцөл</h4>
              <Descriptions
                className="moto-car-spec1"
                layout="horizontal"
                bordered={true}
                size="small"
                column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
              >
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
            <Col xl={8} lg={10} md={10} sm={24} xs={24}>
              <MotoAuctionDetailImages
                auctionItem={auctionItem}
                myImages={myImages}
              />
              <MotoAuctionDetailPrice auctionItem={auctionItem} />
            </Col>
          </Row>

          <Row>
            <Col xs={24}></Col>
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
