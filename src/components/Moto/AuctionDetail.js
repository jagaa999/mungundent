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
            <Descriptions column={1} layout="horizontal">
              <Descriptions.Item
                label={<span className="gx-text-grey">LOT код</span>}
              >
                {auctionItem.LOT}
              </Descriptions.Item>
              <Descriptions.Item
                label={<span className="gx-text-grey">Үнэлгээ</span>}
              >
                {auctionItem.RATE}
              </Descriptions.Item>
              <Descriptions.Item
                label={<span className="gx-text-grey">Огноо</span>}
              >
                {moment(auctionItem.AUCTION_DATE).format("MM-DD")}
              </Descriptions.Item>
              <Descriptions.Item
                label={<span className="gx-text-grey">Цаг</span>}
              >
                {moment(auctionItem.AUCTION_DATE).format("HH:mm")}
              </Descriptions.Item>
              <Descriptions.Item
                label={<span className="gx-text-grey">Газар</span>}
              >
                {auctionItem.AUCTION}
              </Descriptions.Item>
              <Descriptions.Item
                label={<span className="gx-text-grey">Эхлэх</span>}
              >
                {accounting.formatMoney(auctionItem.START, "¥", 0, "'")}
              </Descriptions.Item>
              <Descriptions.Item
                label={<span className="gx-text-grey">Дундаж</span>}
              >
                {accounting.formatMoney(auctionItem.AVG_PRICE, "¥", 0, "'")}
              </Descriptions.Item>
            </Descriptions>

            {/* <Row>
                <Col span={12}>
                  <Statistic title="LOT код" value={auctionItem.LOT} />
                </Col>
                <Col span={12}>
                  <Statistic title="Үнэлгээ" value={auctionItem.RATE} />
                </Col>
              </Row> */}
            {/* <Divider /> */}
            {/* <Row>
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
              </Row> */}
            {/* <Divider /> */}
            {/* <Row>
                <Col span={24}>
                  <Statistic
                    title="Дуудлага болох газар"
                    value={auctionItem.AUCTION}
                  />
                </Col>
              </Row>
              <Divider /> */}
            {/* <Row>
                <Col span={12}>
                  <Statistic
                    title="Эхлэх үнэ"
                    value={accounting.formatMoney(
                      auctionItem.START,
                      "¥",
                      0,
                      "'"
                    )}
                  />
                </Col>
                <Col span={12}>
                  <Statistic
                    title="Дундаж үнэ"
                    value={accounting.formatMoney(
                      auctionItem.AVG_PRICE,
                      "¥",
                      0,
                      "'"
                    )}
                  />
                </Col>
              </Row> */}
          </Col>
          {/*
             ### #     #    #     #####  ####### 
              #  ##   ##   # #   #     # #       
              #  # # # #  #   #  #       #       
              #  #  #  # #     # #  #### #####   
              #  #     # ####### #     # #       
              #  #     # #     # #     # #       
             ### #     # #     #  #####  #######  */}

          <Col span={15} className="gx-mb-3">
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

        {/* 
           ### #     #    #     #####  #######  #####  
            #  ##   ##   # #   #     # #       #     # 
            #  # # # #  #   #  #       #       #       
            #  #  #  # #     # #  #### #####    #####  
            #  #     # ####### #     # #             # 
            #  #     # #     # #     # #       #     # 
           ### #     # #     #  #####  #######  #####   */}
        <Row>
          <Col
            md={{ span: 18, offset: 3 }}
            sm={{ span: 20, offset: 2 }}
            xs={{ span: 22, offset: 1 }}
          >
            <MotoAuctionDetailImages
              auctionItem={auctionItem}
              myImages={myImages}
            />
          </Col>
        </Row>

        {/*
            #####  ######  #######  #####  
          #     # #     # #       #     # 
          #       #     # #       #       
           #####  ######  #####   #       
                # #       #       #       
          #     # #       #       #     # 
           #####  #       #######  #####   */}
        <Row>
          <Col
            md={{ span: 12, offset: 0 }}
            sm={{ span: 24, offset: 0 }}
            xs={{ span: 22, offset: 1 }}
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
