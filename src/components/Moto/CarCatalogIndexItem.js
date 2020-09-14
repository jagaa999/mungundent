import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import toBoolean from "util/booleanFunction";
import { Card, Badge, Typography } from "antd";

import { CaretDownOutlined } from "@ant-design/icons";

const { Meta } = Card;
const { Paragraph } = Typography;

const MarkItem = ({ indexItem, count }) => {
  // console.log("Манай Фирм - ", indexItem);

  return (
    <Card
      key={indexItem.id}
      className="moto-card-type1"
      hoverable={true}
      cover={
        <Link to={"/carcatalog/index/" + indexItem.mainid}>
          <img alt="" src={indexItem.mainimg} />
        </Link>
      }
    >
      <Meta
        avatar={null}
        title={
          <Link to={"/carcatalog/index/" + indexItem.mainid}>
            {indexItem.firmname + " " + indexItem.markname}
          </Link>
        }
        description={indexItem.maindate2}
      />
      <Paragraph
        ellipsis={{ rows: 2, expandable: true, symbol: <CaretDownOutlined /> }}
      >
        {indexItem.desceng}
      </Paragraph>
      <div className="moto-card-badge">
        <Badge count={indexItem.count} />
      </div>
    </Card>
  );
};

export default MarkItem;
