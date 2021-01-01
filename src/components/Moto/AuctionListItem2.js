import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import toBoolean from "util/booleanFunction";
import moment from "moment";
import "moment/locale/mn";
import accounting from "accounting";
import { Html5Entities } from "html-entities";
import { Tooltip, Card, Tag, Image, Button } from "antd";
import MyIcon from "util/iconFunction";
import {
  ExclamationCircleOutlined,
  DeleteOutlined,
  ApartmentOutlined,
} from "@ant-design/icons";
import TweenOne from "rc-tween-one";

import MotoAuctionStarRatingComponent from "./Auction/MotoAuctionStarRatingComponent";
import CompareContext from "context/CompareContext";

const AuctionListItem2 = ({ auctionItem }) => {
  // console.log("Манай Item - ", auctionItem);
  const compareContext = useContext(CompareContext);

  const htmlEntities = new Html5Entities();

  const myTitle = (
    <>
      <Link
        to={"/auction/" + auctionItem.ID}
      >{`${auctionItem.YEAR} ${auctionItem.MARKA_NAME} ${auctionItem.MODEL_NAME}`}</Link>
      {/* {toBoolean(auctionItem.isfeatured) && <FeaturedTag type="dot" />}
      {!toBoolean(auctionItem.isactive) && <ActiveTag type="dot" />} */}
    </>
  );

  return (
    <TweenOne
      key={auctionItem.ID}
      animation={{
        opacity: 0.1,
        marginTop: 100,
        type: "from",
        ease: "easeOutQuad",
        // delay: 50,
        // duration: 50,
      }}
      className="moto-item-card"
    >
      <Card
        className={`moto-item-card ${
          toBoolean(auctionItem.isfeatured) ? "moto-card-sponsor" : ""
        } ${!toBoolean(auctionItem.isactive) ? "border-top" : ""}`}
        hoverable={true}
        // style={{ margin: "0 10px", height: "380px" }}
        cover={
          <Image
            // height={250}
            src={auctionItem.IMAGES.replace("h=50", "w=320")}
            fallback="https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
        }
      >
        {/* <span className="moto-badge-1">{auctionItem.LOT}</span> */}
        <Tag color="warning" className="moto-badge-1">
          {auctionItem.LOT}
        </Tag>

        <div className="gx-d-inline-flex gx-vertical-align-middle">
          <span className="gx-text-black gx-fs-lg gx-mr-2">
            {auctionItem.RATE}
          </span>
          <MotoAuctionStarRatingComponent
            starCount={6}
            value={auctionItem.RATE}
            emptyStarColor={"#d1d1d1"}
          />
        </div>
        <h4 className="gx-mt-2">{myTitle}</h4>

        <div className="gx-text-grey gx-fs-sm">
          {accounting.formatMoney(auctionItem.MILEAGE, {
            symbol: "км",
            format: "%v %s",
            precision: 0,
            thousand: "'",
          })}
        </div>

        <div className="gx-description gx-fs-sm gx-mt-2 gx-d-none gx-d-sm-block">
          <div className="gx-d-flex gx-fs-sm">
            <span className="gx-mr-2 gx-text-grey">Өнгө:</span>
            {auctionItem.COLOR}
          </div>
          <div className="gx-d-flex gx-fs-sm">
            <span className="gx-mr-2 gx-text-grey">Хөдөлгүүр:</span>
            {accounting.formatMoney(auctionItem.ENG_V, {
              symbol: "cc",
              format: "%v %s",
              precision: 0,
              thousand: "'",
            })}
          </div>
          <div className="gx-d-flex gx-fs-sm">
            <span className="gx-mr-2 gx-text-grey">Хроп:</span>
            {auctionItem.KPP} {auctionItem.KPP_TYPE}
          </div>
          <div className="gx-d-flex gx-fs-sm">
            <span className="gx-mr-2 gx-text-grey">Хөтлөгч:</span>
            {auctionItem.PRIV}
          </div>

          <div className="gx-d-flex gx-fs-sm">
            <span className="gx-mr-2 gx-text-grey">Арал:</span>
            {htmlEntities.decode(auctionItem.KUZOV)}
          </div>

          <div className="gx-d-flex gx-fs-sm">
            <span className="gx-mr-2 gx-text-grey">Хувилбар:</span>
            {htmlEntities.decode(auctionItem.GRADE)}
          </div>
        </div>

        {auctionItem.STATUS !== "" && (
          <div className="moto-auction-badge">
            <Tag color="processing">Төлөв: {auctionItem.STATUS}</Tag>
            <Tag icon={<ExclamationCircleOutlined />} color="warning">
              Сүүлийн үнэ:{" "}
              {accounting.formatMoney(auctionItem.FINISH, "¥", 0, "'")}
            </Tag>
          </div>
        )}
        {/* 
        <Tooltip title="Харьцуулж харах хайрцагт нэмэх">
          <Button
            type="text"
            className="moto-badge-4"
            size="small"
            onClick={(e) => compareContext.addItem(auctionItem, "auction")}
          >
            Харьцуулах
          </Button>
        </Tooltip> */}
        <Tooltip title="Харьцуулалтад нэмэх">
          <Button
            key="moto-filter-button"
            size="small"
            icon={<MyIcon type="iconcrosshairs" />}
            onClick={(e) => compareContext.addItem(auctionItem, "auction")}
            className="moto-badge-4"
            style={{ width: "40px" }}
          ></Button>
        </Tooltip>
      </Card>
    </TweenOne>
  );
};

export default AuctionListItem2;
