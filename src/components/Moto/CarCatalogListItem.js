import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import toBoolean from "util/booleanFunction";

import { Card, Badge } from "antd";

const { Meta } = Card;

const NewsItem = ({ firmItem, isSpecial }) => {
  // console.log("Манай Фирм - ", firmItem);

  return (
    <Link to={"/carcatalog/" + firmItem.id}>
      <Card
        key={firmItem.id}
        className={`moto-card-type1 ${
          toBoolean(firmItem.special) ? "gx-bg-success" : ""
        }`}
        hoverable={true}
        cover={
          null
          // <img alt="example" src={"https://via.placeholder.com/576X383"} />
        }
      >
        <Meta
          avatar={null}
          title={firmItem.firmname}
          description={firmItem.firmcountrymon}
        />

        <div className="moto-card-badge">
          <Badge count={firmItem.count} />
        </div>
      </Card>
    </Link>
  );
};

export default NewsItem;
