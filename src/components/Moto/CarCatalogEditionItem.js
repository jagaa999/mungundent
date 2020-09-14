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

const MarkItem = ({ editionItem, count }) => {
  // console.log("Манай Фирм - ", editionItem);

  return (
    <Link to={"/carcatalog/edition/" + editionItem.id}>
      <Card
        key={editionItem.id}
        className="moto-card-type1"
        hoverable={true}
        cover={<img alt="" src={editionItem.mainimg} />}
      >
        <Meta
          avatar={null}
          title={editionItem.cartrim}
          description={editionItem.cardate}
        />

        <ul className="gx-list-group gx-mt-3 moto-spec-list">
          <li>
            <span className="title gx-fs-sm">
              <CaretRightOutlined />
              Хийц
            </span>
            <span className="body">{editionItem.body2bodyname}</span>
          </li>
          <li>
            <span className="title gx-fs-sm">
              <CaretRightOutlined />
              Арал
            </span>
            <span className="body">{editionItem.body2modelcodefull}</span>
          </li>
          <li>
            <span className="title gx-fs-sm">
              <CaretRightOutlined />
              Мотор
            </span>
            <span className="body">{editionItem.engine2disp}</span>
          </li>
          <li>
            <span className="title gx-fs-sm">
              <CaretRightOutlined />
              Хроп
            </span>
            <span className="body">{editionItem.drive2transmissionfull}</span>
          </li>
          <li>
            <span className="title gx-fs-sm">
              <CaretRightOutlined />
              Хөтлөгч
            </span>
            <span className="body">{editionItem.drive2drivename}</span>
          </li>
          <li>
            <li>
              <span className="title gx-fs-sm">
                <CaretRightOutlined />
                Хаалга
              </span>
              <span className="body">{editionItem.body2door}</span>
            </li>
            <li>
              <span className="title gx-fs-sm">
                <CaretRightOutlined />
                Суудал
              </span>
              <span className="body">{editionItem.body2seat}</span>
            </li>

            <span className="title gx-fs-sm">
              <CaretRightOutlined />
              Анхны үнэ
            </span>
            <span className="body">{editionItem.pricenewusd}</span>
          </li>
          <li>
            <span className="title gx-fs-sm">
              <CaretRightOutlined />
              Идэлт
            </span>
            <span className="body">{editionItem.envi2fuel10mode}</span>
          </li>
        </ul>

        <div className="moto-card-badge">
          <Badge count={editionItem.count} />
        </div>
      </Card>
    </Link>
  );
};

export default MarkItem;
