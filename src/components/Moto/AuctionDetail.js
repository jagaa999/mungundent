import React, { useContext, useEffect, useState } from "react";

//Body-ийн их биеийн тагуудыг зөв харуулдаг болгохын тулд оруулж ирэв.
import { Html5Entities } from "html-entities";

import moment from "moment";
import "moment/locale/mn";
import accounting from "accounting";
import toBoolean from "util/booleanFunction";
import { defaultSrc } from "util/config";

import {
  Card,
  Alert,
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

import AuctionContext from "context/AuctionContext";

const AuctionDetailComponent = () => {
  const auctionContext = useContext(AuctionContext);
  const auctionItem = auctionContext.auctionDetail.auctionDetail || {};
  const htmlEntities = new Html5Entities();

  // console.log("auctionItem", auctionItem);

  if (Object.keys(auctionItem).length !== 0) {
    const myImages = auctionItem.IMAGES.split("#");

    // MARKA_ID
    // MODEL_ID
    // AVG_STRING

    return (
      <div
        key={auctionItem.auctionid}
        className="gx-main-content auction-detail"
      >
        {/* <AuctionDetailHeader auctionItem={auctionItem} member={member} /> */}
        {/* 
             ####### ### ####### #       ####### 
                #     #     #    #       #       
                #     #     #    #       #       
                #     #     #    #       #####   
                #     #     #    #       #       
                #     #     #    #       #       
                #    ###    #    ####### #######  */}
        <Row>
          <Col span={24} className="gx-text-center">
            <h3>
              {auctionItem.YEAR} {htmlEntities.decode(auctionItem.MARKA_NAME)}{" "}
              {htmlEntities.decode(auctionItem.MODEL_NAME)}
              <span className="gx-text-grey gx-fs-sm gx-ml-2">
                {htmlEntities.decode(auctionItem.GRADE)}
              </span>
            </h3>
          </Col>
        </Row>
        <Divider className="gx-my-5" />
        {/* 
           #####  #######    #    ####### 
          #     #    #      # #      #    
          #          #     #   #     #    
           #####     #    #     #    #    
                #    #    #######    #    
          #     #    #    #     #    #    
           #####     #    #     #    #     */}

        <Row>
          <Col sm={{ span: 9, offset: 0 }} xs={{ span: 8, offset: 1 }}>
            <Descriptions
              column={1}
              layout="horizontal"
              className="moto-auction-head-description"
            >
              <Descriptions.Item
                label={<span className="gx-text-grey">Хувилбар</span>}
              >
                {auctionItem.GRADE}
              </Descriptions.Item>
              <Descriptions.Item
                label={<span className="gx-text-grey">Тоноглол</span>}
              >
                {auctionItem.EQUIP}
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
                label={<span className="gx-text-grey">Арал</span>}
              >
                {auctionItem.KUZOV}
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

          <Col span={15}>
            <Image
              src={myImages[1]}
              loading="lazy"
              width="300"
              quality="auto"
              className="gx-img-fluid gx-w-100 gx-card-widget gx-mb-4"
              alt={auctionItem.name}
              onError={defaultSrc}
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

        {/* 
            #       ####### ####### 
            #       #     #    #    
            #       #     #    #    
            #       #     #    #    
            #       #     #    #    
            #       #     #    #    
            ####### #######    #    */}
        <Row className="gx-mt-4">
          <Col
            md={{ span: 8, offset: 0 }}
            sm={{ span: 24, offset: 0 }}
            xs={{ span: 22, offset: 1 }}
            className="gx-mt-4 gx-mt-md-0"
          >
            <h4>Аукшин мэдээлэл</h4>
            <Descriptions
              className="moto-car-spec1"
              layout="horizontal"
              bordered={true}
              size="small"
              column={1}
            >
              <Descriptions.Item label="LOT код">
                {auctionItem.LOT}
              </Descriptions.Item>
              <Descriptions.Item label="Үнэлгээ">
                {auctionItem.RATE}
              </Descriptions.Item>
              <Descriptions.Item label="Огноо">
                {moment(auctionItem.AUCTION_DATE).format("MM-DD HH:mm")}
              </Descriptions.Item>
              <Descriptions.Item label="Газар">
                {htmlEntities.decode(auctionItem.AUCTION)}
              </Descriptions.Item>
              <Descriptions.Item label="Эхлэх үнэ">
                {accounting.formatMoney(auctionItem.START, "¥", 0, "'")}
              </Descriptions.Item>
              <Descriptions.Item label="Дундаж үнэ">
                {accounting.formatMoney(auctionItem.AVG_PRICE, "¥", 0, "'")}
              </Descriptions.Item>
            </Descriptions>
          </Col>

          {/*
            #####  ######  #######  #####  
          #     # #     # #       #     # 
          #       #     # #       #       
           #####  ######  #####   #       
                # #       #       #       
          #     # #       #       #     # 
           #####  #       #######  #####   */}

          <Col
            md={{ span: 8, offset: 0 }}
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
            md={{ span: 8, offset: 0 }}
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
        <Divider dashed className="gx-my-5" />
        {/* 
           #####     #    #        #####  
          #     #   # #   #       #     # 
          #        #   #  #       #       
          #       #     # #       #       
          #       ####### #       #       
          #     # #     # #       #     # 
            #####  #     # #######  #####   */}
        <Row>
          <Col
            md={{ span: 12, offset: 0 }}
            sm={{ span: 24, offset: 0 }}
            xs={{ span: 22, offset: 1 }}
          >
            <MotoAuctionSameCars auctionItem={auctionItem} />
          </Col>
          <Col
            md={{ span: 12, offset: 0 }}
            sm={{ span: 24, offset: 0 }}
            xs={{ span: 22, offset: 1 }}
          >
            <MotoAuctionDetailPrice auctionItem={auctionItem} />
          </Col>
        </Row>
        <div>{/* <AuctionHeaderButton item={auctionItem} /> */}</div>

        <Divider className="gx-my-5" />

        <Alert
          message="Японоос машин захиалгаар оруулж ирдэг бизнестэй хүмүүсийн анхааралд!"
          description="Энэ системийг ашиглан хүмүүс машин захиалах хүсэлтэй юм. Хэрвээ та эдгээр захиалгыг өөртөө авахыг хүсвэл Moto.mn тантай хамтран ажиллахад бэлэн байна. Утас: 99902070"
          type="info"
          showIcon
        />
      </div>
    );
  } else {
    return "";
  }
};

export default AuctionDetailComponent;
