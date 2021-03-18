import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import toBoolean from "util/booleanFunction";
import { Card, Badge } from "antd";

const { Meta } = Card;

const MarkItem = ({ markItem, count }) => {
  // console.log("Манай Фирм - ", markItem);

  return (
    <Link to={"/carcatalog/mark/" + markItem.markid}>
      <Card
        key={markItem.id}
        className="moto-card-type1"
        hoverable={true}
        cover={
          null
          // <img alt="example" src={"https://via.placeholder.com/576X383"} />
        }
      >
        <Meta
          avatar={null}
          title={markItem.markname}
          description={markItem.firmname}
        />

        <div className="moto-card-badge">
          <Badge count={markItem.count} />
        </div>
      </Card>
    </Link>
  );
};

export default MarkItem;
