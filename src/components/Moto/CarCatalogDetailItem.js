import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import toBoolean from "util/booleanFunction";
import { Card, Badge, Typography } from "antd";

import {
  MailOutlined,
  MessageOutlined,
  BellOutlined,
  UnorderedListOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";

const { Meta } = Card;
const { Paragraph } = Typography;

const MarkItem = ({ editionItem }) => {
  console.log("Манай Машин - ", editionItem);

  return (
    <Card
      key={editionItem.id}
      className="moto-card-type1"
      cover={<img alt="" src={editionItem.mainimg} />}
    >
      <Meta
        avatar={null}
        title={editionItem.cartrim}
        description={editionItem.cardate}
      />

      <ul className="gx-list-group gx-mt-3 moto-spec-list">
        {Object.keys(editionItem).map((val, k) => {
          return (
            <li>
              <span className="title gx-fs-sm">
                <CaretRightOutlined />
                {val}
              </span>
              <span className="body">{editionItem[val]}</span>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default MarkItem;
