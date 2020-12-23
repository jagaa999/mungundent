import React, { useContext, useEffect, useState } from "react";

//Body-ийн их биеийн тагуудыг зөв харуулдаг болгохын тулд оруулж ирэв.
import { Html5Entities } from "html-entities";

import moment from "moment";
import "moment/locale/mn";
import accounting from "accounting";

import { Alert, Row, Col, Image, Descriptions } from "antd";
import { motoSpecAuction } from "util/carSpecTranslation";

import MotoAuctionDetailImages from "./MotoAuctionDetailImages";

const AuctionDetail2 = ({ auctionItem }) => {
  const htmlEntities = new Html5Entities();

  // console.log("auctionItem", auctionItem);

  if (Object.keys(auctionItem).length !== 0) {
    const myImages = auctionItem.IMAGES.split("#");

    // MARKA_ID
    // MODEL_ID
    // AVG_STRING

    return (
      <div>
        {/* 
           #####  #######    #    ####### 
          #     #    #      # #      #    
          #          #     #   #     #    
           #####     #    #     #    #    
                #    #    #######    #    
          #     #    #    #     #    #    
           #####     #    #     #    #     */}

        <Row>
          <Col sm={{ span: 9, offset: 0 }} xs={{ span: 22, offset: 1 }}>
            <Descriptions
              column={1}
              layout="horizontal"
              className="moto-auction-head-description"
            >
              <Descriptions.Item
                label={
                  <span className="gx-text-grey">
                    {motoSpecAuction.GRADE.title || "GRADE"}
                  </span>
                }
              >
                {htmlEntities.decode(auctionItem.GRADE)}
              </Descriptions.Item>
              <Descriptions.Item
                label={
                  <span className="gx-text-grey">
                    {motoSpecAuction.EQUIP.title || "EQUIP"}
                  </span>
                }
              >
                {htmlEntities.decode(auctionItem.EQUIP)}
              </Descriptions.Item>
              <Descriptions.Item
                label={
                  <span className="gx-text-grey">
                    {motoSpecAuction.KUZOV.title || "KUZOV"}
                  </span>
                }
              >
                {htmlEntities.decode(auctionItem.KUZOV)}
              </Descriptions.Item>
              <Descriptions.Item
                label={
                  <span className="gx-text-grey">
                    {motoSpecAuction.MILEAGE.title || "MILEAGE"}
                  </span>
                }
              >
                {accounting.formatMoney(auctionItem.MILEAGE, {
                  symbol: "км",
                  format: "%v %s",
                  precision: 0,
                  thousand: "'",
                })}
              </Descriptions.Item>

              <Descriptions.Item
                label={
                  <span className="gx-text-grey">
                    {motoSpecAuction.ENG_V.title || "ENG_V"}
                  </span>
                }
              >
                {accounting.formatMoney(auctionItem.ENG_V, {
                  symbol: "cc",
                  format: "%v %s",
                  precision: 0,
                  thousand: "'",
                })}
              </Descriptions.Item>
              <Descriptions.Item
                label={
                  <span className="gx-text-grey">
                    {motoSpecAuction.PRIV.title || "PRIV"}
                  </span>
                }
              >
                {auctionItem.PRIV}
              </Descriptions.Item>
              <Descriptions.Item
                label={
                  <span className="gx-text-grey">
                    {motoSpecAuction.KPP.title || "KPP"}
                  </span>
                }
              >
                {auctionItem.KPP} {auctionItem.KPP_TYPE}
              </Descriptions.Item>
            </Descriptions>
          </Col>
          {/*
             ### #     #    #     #####  ####### 
              #  ##   ##   # #   #     # #       
              #  # # # #  #   #  #       #       
              #  #  #  # #     # #  #### #####   
              #  #     # ####### #     # #       
              #  #     # #     # #     # #       
             ### #     # #     #  #####  #######  */}

          <Col sm={{ span: 15, offset: 0 }} xs={{ span: 22, offset: 1 }}>
            <Image
              src={myImages[1]}
              loading="lazy"
              width="300"
              quality="auto"
              className="gx-img-fluid gx-w-100 gx-card-widget gx-mb-4"
              alt={auctionItem.name}
            />
          </Col>
        </Row>

        {/* 
           ### #     #    #     #####  #######  #####  
            #  ##   ##   # #   #     # #       #     # 
            #  # # # #  #   #  #       #       #       
            #  #  #  # #     # #  #### #####    #####  
            #  #     # ####### #     # #             # 
            #  #     # #     # #     # #       #     # 
           ### #     # #     #  #####  #######  #####   */}
        <Row>
          <Col span={24}>
            <MotoAuctionDetailImages
              auctionItem={auctionItem}
              myImages={myImages}
            />
          </Col>
        </Row>

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

        {/* FINISH
              STATUS	
              AVG_STRING
              SERIAL	
              INFO */}
        {auctionItem.STATUS !== "" && (
          <Alert
            message={motoSpecAuction.STATUS.title || "STATUS"}
            description={`Төлөв: ${auctionItem.STATUS}`}
            type="warning"
            showIcon={true}
          />
        )}
        {auctionItem.FINISH !== "" && (
          <Alert
            message={motoSpecAuction.FINISH.title || "FINISH"}
            description={`Зарагдсан үнэ: ${accounting.formatMoney(
              auctionItem.FINISH,
              "¥",
              0,
              "'"
            )}`}
            type="warning"
            showIcon={true}
          />
        )}
        {auctionItem.SERIAL !== "" && (
          <Alert
            message={motoSpecAuction.SERIAL.title || "SERIAL"}
            description={`SERIAL: ${auctionItem.SERIAL}`}
            type="info"
            showIcon={true}
          />
        )}
        {auctionItem.INFO !== "" && (
          <Alert
            message={motoSpecAuction.INFO.title || "INFO"}
            description={`INFO: ${auctionItem.INFO}`}
            type="info"
            showIcon={true}
          />
        )}

        <Row className="gx-mt-4">
          {/*
            #####  ######  #######  #####  
          #     # #     # #       #     # 
          #       #     # #       #       
           #####  ######  #####   #       
                # #       #       #       
          #     # #       #       #     # 
           #####  #       #######  #####   */}

          <Col
            md={{ span: 12, offset: 0 }}
            sm={{ span: 24, offset: 0 }}
            xs={{ span: 22, offset: 1 }}
            className="gx-mt-4 gx-mt-md-0"
          >
            <h4>Автомашин</h4>
            <Descriptions
              className="moto-car-spec1"
              layout="horizontal"
              bordered={true}
              size="small"
              column={1}
            >
              <Descriptions.Item label={motoSpecAuction.YEAR.title || "YEAR"}>
                {auctionItem.YEAR}
              </Descriptions.Item>
              <Descriptions.Item
                label={motoSpecAuction.MARKA_NAME.title || "MARKA_NAME"}
              >
                {auctionItem.MARKA_NAME}
              </Descriptions.Item>
              <Descriptions.Item
                label={motoSpecAuction.MODEL_NAME.title || "MODEL_NAME"}
              >
                {htmlEntities.decode(auctionItem.MODEL_NAME)}
              </Descriptions.Item>
              <Descriptions.Item label={motoSpecAuction.GRADE.title || "GRADE"}>
                {htmlEntities.decode(auctionItem.GRADE)}
              </Descriptions.Item>

              <Descriptions.Item
                label={motoSpecAuction.MILEAGE.title || "MILEAGE"}
              >
                {accounting.formatMoney(auctionItem.MILEAGE, {
                  symbol: "км",
                  format: "%v %s",
                  precision: 0,
                  thousand: "'",
                })}
              </Descriptions.Item>
              <Descriptions.Item label={motoSpecAuction.EQUIP.title || "EQUIP"}>
                {auctionItem.EQUIP}
              </Descriptions.Item>
            </Descriptions>
          </Col>
          {/* 
           ####### #######  #####  #     # 
              #    #       #     # #     # 
              #    #       #       #     # 
              #    #####   #       ####### 
              #    #       #       #     # 
              #    #       #     # #     # 
              #    #######  #####  #     #  */}

          <Col
            md={{ span: 12, offset: 0 }}
            sm={{ span: 24, offset: 0 }}
            xs={{ span: 22, offset: 1 }}
            className="gx-mt-4 gx-mt-md-0"
          >
            <h4>Техник үзүүлэлт</h4>
            <Descriptions
              className="moto-car-spec1"
              layout="horizontal"
              bordered={true}
              size="small"
              column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
            >
              <Descriptions.Item label={motoSpecAuction.ENG_V.title || "ENG_V"}>
                {accounting.formatMoney(auctionItem.ENG_V, {
                  symbol: "cc",
                  format: "%v %s",
                  precision: 0,
                  thousand: "'",
                })}
              </Descriptions.Item>
              <Descriptions.Item label={motoSpecAuction.PW.title || "PW"}>
                {accounting.formatMoney(auctionItem.PW, {
                  symbol: "kW",
                  format: "%v %s",
                  precision: 0,
                  thousand: "'",
                })}
              </Descriptions.Item>
              <Descriptions.Item label={motoSpecAuction.KUZOV.title || "KUZOV"}>
                {auctionItem.KUZOV}
              </Descriptions.Item>
              <Descriptions.Item label={motoSpecAuction.COLOR.title || "COLOR"}>
                {auctionItem.COLOR}
              </Descriptions.Item>
              <Descriptions.Item label={motoSpecAuction.KPP.title || "KPP"}>
                {auctionItem.KPP} {auctionItem.KPP_TYPE}
              </Descriptions.Item>
              <Descriptions.Item label={motoSpecAuction.PRIV.title || "PRIV"}>
                {auctionItem.PRIV}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      </div>
    );
  } else {
    return "";
  }
};

export default AuctionDetail2;
