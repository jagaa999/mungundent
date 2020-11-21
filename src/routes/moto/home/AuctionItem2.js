import React from "react";
import { Link } from "react-router-dom";

import { Html5Entities } from "html-entities";
import { Card, Avatar, Tag, Tooltip, Image } from "antd";
import moment from "moment";
import "moment/locale/mn";

const AuctionItem2 = ({ auctionItem }) => {
  // console.log("auctionItem", auctionItem);
  const htmlEntities = new Html5Entities();

  return (
    <>
      <Card
        className={`moto-item-card`}
        hoverable={true}
        style={{ margin: "0 10px", height: "330px" }}
        cover={
          <Image
            src={auctionItem.idstring}
            className="gx-img-fluid gx-w-100"
            alt={auctionItem.title}
          />
        }
      >
        <Avatar className="moto-badge-1" src={auctionItem.userprofilephoto} />

        <span className="gx-text-grey gx-fs-sm">
          {moment(auctionItem.actiondate).fromNow()}
        </span>
        <Tooltip title="Дэлгэрэнгүй үзэх">
          <h4 className="gx-mt-2">
            <Link to={"/auction/" + auctionItem.actiontype}>
              {htmlEntities.decode(auctionItem.description)}
            </Link>
          </h4>
        </Tooltip>
      </Card>
    </>
  );
};

export default AuctionItem2;
