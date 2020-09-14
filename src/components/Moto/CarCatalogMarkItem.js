import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import toBoolean from "util/booleanFunction";
import { Card } from "antd";

const { Meta } = Card;

const MarkItem = ({ markItem, count }) => {
  // console.log("Манай Фирм - ", markItem);

  return (
    <Link to={"/carcatalog/mark/" + markItem.markid}>
      <Card
        key={markItem.id}
        className=""
        hoverable={true}
        cover={
          null
          // <img alt="example" src={"https://via.placeholder.com/576X383"} />
        }
      >
        <Meta
          avatar={null}
          title={markItem.firmname + " " + markItem.markname}
          description={markItem.count + " ширхэг цувралтай"}
        />
      </Card>
    </Link>
  );
};

export default MarkItem;
