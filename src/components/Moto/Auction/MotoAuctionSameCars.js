import React, { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import { Html5Entities } from "html-entities";

import {
  Card,
  Image,
  List,
  Tooltip,
  Statistic,
  Row,
  Col,
  Divider,
  Descriptions,
} from "antd";
import { ClearOutlined, DeleteOutlined } from "@ant-design/icons";
import { motoSpecAuction } from "util/carSpecTranslation";

import moment from "moment";
import "moment/locale/mn";
import accounting from "accounting";

import AuctionContext from "context/AuctionContext";

const MotoAuctionSameCars = ({ auctionItem }) => {
  // console.table(auctionItem);
  const htmlEntities = new Html5Entities(); //Body тагуудыг зөв харуулдаг болгох

  const auctionContext = useContext(AuctionContext);
  const mySameCars = auctionContext.auctionSameList;

  useEffect(() => {
    auctionContext.loadAuctionSameList(auctionItem);
  }, []);

  // console.log("mySameCars", mySameCars);
  // console.table(mySameCars.auctionSameList);

  return (
    <Card
      type="inner"
      bordered={true}
      title="Ижил машинуудын зарагдсан түүх"
      loading={auctionContext.auctionSameList.loading}
    >
      <Descriptions column={2} layout="horizontal" size="small">
        <Descriptions.Item
          label={
            <span className="gx-text-grey">
              {motoSpecAuction.YEAR.title || "YEAR"}
            </span>
          }
        >
          {auctionItem.YEAR}
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
              {motoSpecAuction.RATE.title || "RATE"}
            </span>
          }
        >
          {auctionItem.RATE}
        </Descriptions.Item>
        <Descriptions.Item label={<span className="gx-text-grey">Төлөв</span>}>
          Зарагдсан (өмнө зарагдаж байсан)
        </Descriptions.Item>
      </Descriptions>
      <Divider />
      <List
        loading={auctionContext.auctionSameList.loading}
        itemLayout="horizontal"
        dataSource={auctionContext.auctionSameList.auctionSameList}
        renderItem={(item) => (
          // AUCTION: "LAA Okayama"
          // AUCTION_DATE: "2020-08-21 00:00:00"
          // AVG_PRICE: "4077000"
          // AVG_STRING: "3831,4170,3895,4160,3953,4135,4190,4230,4125"
          // COLOR: "white"
          // ENG_V: "2000"
          // EQUIP: "AAC"
          // FINISH: "3831000"
          // GRADE: "Type R"
          // ID: "31T5QIYQNxzYQ25"
          // IMAGES: "https://8.ajes.com/imgs/AXEJVvBkediyWR8eCzicZlTrwHQVnckIkNlbLxJsheF&h=50#https://8.ajes.com/imgs/AXEJVvBkediyWR8eCzicZlTrwHQVnckHT3UEW1jFIJ1&h=50"
          // KPP: "F6"
          // KPP_TYPE: "1"
          // KUZOV: "FK8"
          // LOT: "7015"
          // MARKA_ID: "5"
          // MARKA_NAME: "HONDA"
          // MILEAGE: "12000"
          // MIL_ST: "1"
          // MODEL_ID: "567"
          // MODEL_NAME: "CIVIC"
          // PRIV: "FF"
          // PW: "320"
          // RATE: "5"
          // START: "2700000"
          // STATUS: "Sold"
          // TIME: "2020-08-22 02:45:41"
          // YEAR: "2018"
          <List.Item
            extra={
              <>
                <span className="gx-fs-sm">
                  {accounting.formatMoney(item.START, "¥", 0, "'")}
                </span>
                <span className="gx-mx-2 gx-fs-xs gx-text-grey">→</span>
                <span className="gx-text-success">
                  {accounting.formatMoney(item.FINISH, "¥", 0, "'")}
                </span>
              </>
            }
          >
            <List.Item.Meta
              avatar={
                // <Avatar shape="square" size="large" src={`${item.imagemain}`} />

                <Image width={50} src={item.IMAGES} />
              }
              title={
                <span className="gx-fs-md">
                  {htmlEntities.decode(item.GRADE)}
                </span>
              }
              description={
                <>
                  <span className=" gx-fs-sm gx-mr-2">
                    {accounting.formatMoney(item.MILEAGE, {
                      symbol: "км",
                      format: "%v %s",
                      precision: 0,
                      thousand: "'",
                    })}
                  </span>
                  <span className="gx-fs-sm">
                    {moment(item.AUCTION_DATE).format("YYYY-MM-DD")}
                  </span>
                </>
              }
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default MotoAuctionSameCars;
