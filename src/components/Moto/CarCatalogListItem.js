import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import toBoolean from "util/booleanFunction";

import { Card } from "antd";

const { Meta } = Card;

const NewsItem = ({ firmItem, isSpecial }) => {
  // console.log("Манай Фирм - ", firmItem);

  return (
    <Link to={"/carcatalog/" + firmItem.id}>
      <Card
        key={firmItem.id}
        className={`${toBoolean(firmItem.special) ? "gx-bg-success" : ""}`}
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
      </Card>
    </Link>
  );
};

export default NewsItem;
