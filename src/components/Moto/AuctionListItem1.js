import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
// import QueueAnim from "rc-queue-anim";
import TweenOne from "rc-tween-one";
// import ScrollAnim from "rc-scroll-anim";
import { Html5Entities } from "html-entities";

import moment from "moment";
import "moment/locale/mn";
import accounting from "accounting";
import toBoolean from "util/booleanFunction";
import { Card, Tag, Tooltip, Button } from "antd";
import MyIcon from "util/iconFunction";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import MotoAuctionStarRatingComponent from "./Auction/MotoAuctionStarRatingComponent";
import CompareContext from "context/CompareContext";
import AuctionItemButton from "./Auction/AuctionItemButton";

const { Meta } = Card;
// const ScrollOverPack = ScrollAnim.OverPack;

const AuctionListItem1 = ({ auctionItem }) => {
  // console.log("Манай бараа - ", auctionItem);
  const compareContext = useContext(CompareContext);
  const htmlEntities = new Html5Entities();

  return (
    <TweenOne
      key={auctionItem.ID}
      animation={{
        opacity: 0.1,
        marginLeft: 100,
        type: "from",
        ease: "easeOutQuad",
        // delay: 50,
        // duration: 50,
      }}
    >
      <div
        key={auctionItem.ID}
        className={`gx-product-item gx-product-horizontal ${
          toBoolean(auctionItem.isfeatured) ? "moto-card-sponsor" : ""
        } ${!toBoolean(auctionItem.isactive) ? "border-top" : ""}`}
      >
        <Tag color="warning" className="moto-badge-2">
          {auctionItem.LOT}
        </Tag>

        <div className="gx-product-image">
          <div className="gx-grid-thumb-equal">
            <Link to={"/auction/" + auctionItem.ID}>
              <span className="gx-link gx-grid-thumb-cover">
                {/* <Image
                  src={auctionItem.IMAGES.replace("h=50", "w=320")}
                  fallback="https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                /> */}

                <img
                  src={auctionItem.IMAGES.replace("h=50", "w=320")}
                  fallback="https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
              </span>
            </Link>
          </div>
        </div>

        <div className="gx-product-body">
          <h4 className="gx-product-title">
            <Link
              to={"/auction/" + auctionItem.ID}
            >{`${auctionItem.YEAR} ${auctionItem.MARKA_NAME} ${auctionItem.MODEL_NAME}`}</Link>
          </h4>

          <div className="gx-text-grey gx-fs-sm">
            {accounting.formatMoney(auctionItem.MILEAGE, {
              symbol: "км",
              format: "%v %s",
              precision: 0,
              thousand: "'",
            })}
          </div>

          <div className="gx-description gx-fs-sm gx-mt-2 gx-d-none gx-d-sm-block">
            {/* <QueueAnim delay={300} className="queue-simple"> */}
            <div key="a" className="gx-d-flex gx-fs-sm">
              <span className="gx-mr-2 gx-text-grey">Өнгө:</span>
              {auctionItem.COLOR}
            </div>
            <div key="b" className="gx-d-flex gx-fs-sm">
              <span className="gx-mr-2 gx-text-grey">Хөдөлгүүр:</span>
              {accounting.formatMoney(auctionItem.ENG_V, {
                symbol: "cc",
                format: "%v %s",
                precision: 0,
                thousand: "'",
              })}
            </div>
            <div key="c" className="gx-d-flex gx-fs-sm">
              <span className="gx-mr-2 gx-text-grey">Хроп:</span>
              {auctionItem.KPP} {auctionItem.KPP_TYPE}
            </div>
            <div key="d" className="gx-d-flex gx-fs-sm">
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
            {/* </QueueAnim> */}
          </div>

          <div className="gx-d-flex gx-fs-sm">
            <span className="gx-mr-2 gx-text-grey">Эхлэх үнэ:</span>
            {accounting.formatMoney(auctionItem.START, "¥", 0, "'")}
          </div>

          <div className="gx-d-flex gx-fs-sm">
            <span className="gx-mr-2 gx-text-grey">Дундаж үнэ:</span>
            {accounting.formatMoney(auctionItem.AVG_PRICE, "¥", 0, "'")}
          </div>

          <div className="moto-top-right gx-d-none gx-d-sm-block">
            <div style={{ minWidth: "90px" }}>
              <div className="gx-text-black gx-fs-lg">{auctionItem.RATE}</div>
              <MotoAuctionStarRatingComponent
                starCount={6}
                value={auctionItem.RATE}
                emptyStarColor={"#d1d1d1"}
              />
            </div>
          </div>

          <div className="moto-bottom-right gx-d-none gx-d-sm-block">
            <div className="gx-text-grey gx-fs-sm">{auctionItem.AUCTION}</div>
            <Tooltip
              title={`Дуудлагын огноо (Япон цагаар) ${auctionItem.AUCTION_DATE}`}
            >
              <span className="gx-fs-sm gx-text-grey">
                <div>{moment(auctionItem.AUCTION_DATE).fromNow()}</div>
                <div>{moment(auctionItem.AUCTION_DATE).format("HH:mm")}</div>
                <div>{auctionItem.STATUS}</div>
              </span>
            </Tooltip>
          </div>

          <AuctionItemButton auctionItem={auctionItem} />
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
      </div>
    </TweenOne>
  );
};

export default AuctionListItem1;
