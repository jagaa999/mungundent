import React, { useContext, useEffect, useState } from "react";

//Body-ийн их биеийн тагуудыг зөв харуулдаг болгохын тулд оруулж ирэв.
import { Html5Entities } from "html-entities";

import moment from "moment";
import "moment/locale/mn";
import accounting from "accounting";

import { Alert, Row, Col, Image, Descriptions } from "antd";
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
                label={<span className="gx-text-grey">Хувилбар</span>}
              >
                {htmlEntities.decode(auctionItem.GRADE)}
              </Descriptions.Item>
              <Descriptions.Item
                label={<span className="gx-text-grey">Тоноглол</span>}
              >
                {htmlEntities.decode(auctionItem.EQUIP)}
              </Descriptions.Item>
              <Descriptions.Item
                label={<span className="gx-text-grey">Арал</span>}
              >
                {htmlEntities.decode(auctionItem.KUZOV)}
              </Descriptions.Item>
              <Descriptions.Item
                label={<span className="gx-text-grey">Гүйлт</span>}
              >
                {accounting.formatMoney(auctionItem.MILEAGE, {
                  symbol: "км",
                  format: "%v %s",
                  precision: 0,
                  thousand: "'",
                })}
              </Descriptions.Item>

              <Descriptions.Item
                label={<span className="gx-text-grey">Хөдөлгүүр</span>}
              >
                {accounting.formatMoney(auctionItem.ENG_V, {
                  symbol: "cc",
                  format: "%v %s",
                  precision: 0,
                  thousand: "'",
                })}
              </Descriptions.Item>
              <Descriptions.Item
                label={<span className="gx-text-grey">Хөтлөгч</span>}
              >
                {auctionItem.PRIV}
              </Descriptions.Item>
              <Descriptions.Item
                label={<span className="gx-text-grey">Хроп</span>}
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
            message="STATUS"
            description={`Төлөв: ${auctionItem.STATUS}`}
            type="warning"
            showIcon={true}
          />
        )}
        {auctionItem.FINISH !== "" && (
          <Alert
            message="FINISH"
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
            message="Нэмэлт мэдээлэл"
            description={`SERIAL: ${auctionItem.SERIAL}`}
            type="info"
            showIcon={true}
          />
        )}
        {auctionItem.INFO !== "" && (
          <Alert
            message="Нэмэлт мэдээлэл"
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
              <Descriptions.Item label="Он">
                {auctionItem.YEAR}
              </Descriptions.Item>
              <Descriptions.Item label="Фирм">
                {auctionItem.MARKA_NAME}
              </Descriptions.Item>
              <Descriptions.Item label="Марк">
                {htmlEntities.decode(auctionItem.MODEL_NAME)}
              </Descriptions.Item>
              <Descriptions.Item label="Хувилбар">
                {htmlEntities.decode(auctionItem.GRADE)}
              </Descriptions.Item>

              <Descriptions.Item label="Гүйлт">
                {accounting.formatMoney(auctionItem.MILEAGE, {
                  symbol: "км",
                  format: "%v %s",
                  precision: 0,
                  thousand: "'",
                })}
              </Descriptions.Item>
              <Descriptions.Item label="Тоноглол">
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
              <Descriptions.Item label="Хөдөлгүүр">
                {accounting.formatMoney(auctionItem.ENG_V, {
                  symbol: "cc",
                  format: "%v %s",
                  precision: 0,
                  thousand: "'",
                })}
              </Descriptions.Item>
              <Descriptions.Item label="Чадал">
                {accounting.formatMoney(auctionItem.PW, {
                  symbol: "kW",
                  format: "%v %s",
                  precision: 0,
                  thousand: "'",
                })}
              </Descriptions.Item>
              <Descriptions.Item label="Арал">
                {auctionItem.KUZOV}
              </Descriptions.Item>
              <Descriptions.Item label="Өнгө">
                {auctionItem.COLOR}
              </Descriptions.Item>
              <Descriptions.Item label="Хроп">
                {auctionItem.KPP} {auctionItem.KPP_TYPE}
              </Descriptions.Item>
              <Descriptions.Item label="Хөтлөгч">
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
