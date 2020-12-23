import React, { useContext, useEffect, useState } from "react";

//Body-ийн их биеийн тагуудыг зөв харуулдаг болгохын тулд оруулж ирэв.
import { Html5Entities } from "html-entities";

import moment from "moment";
import "moment/locale/mn";
import accounting from "accounting";

import { Alert, Row, Col, Image, Descriptions } from "antd";
import { motoSpecAuction } from "util/carSpecTranslation";

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
        <Row>
          <Col
            md={{ span: 16, offset: 0 }}
            sm={{ span: 24, offset: 0 }}
            xs={{ span: 24, offset: 0 }}
          >
            <h4>Аукшин мэдээлэл</h4>
            <Descriptions
              className="moto-car-spec1"
              layout="horizontal"
              bordered={true}
              size="small"
              column={1}
            >
              <Descriptions.Item label={motoSpecAuction.LOT.title || "LOT"}>
                {auctionItem.LOT}
              </Descriptions.Item>
              <Descriptions.Item label={motoSpecAuction.RATE.title || "RATE"}>
                {auctionItem.RATE}
              </Descriptions.Item>
              <Descriptions.Item
                label={motoSpecAuction.AUCTION_DATE.title || "AUCTION_DATE"}
              >
                {moment(auctionItem.AUCTION_DATE).format("MM-DD HH:mm")}
              </Descriptions.Item>
              <Descriptions.Item
                label={motoSpecAuction.AUCTION.title || "AUCTION"}
              >
                {htmlEntities.decode(auctionItem.AUCTION)}
              </Descriptions.Item>
              <Descriptions.Item label={motoSpecAuction.START.title || "START"}>
                {accounting.formatMoney(auctionItem.START, "¥", 0, "'")}
              </Descriptions.Item>
              <Descriptions.Item
                label={motoSpecAuction.AVG_PRICE.title || "AVG_PRICE"}
              >
                {accounting.formatMoney(auctionItem.AVG_PRICE, "¥", 0, "'")}
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
