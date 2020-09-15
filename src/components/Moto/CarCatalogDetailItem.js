import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import toBoolean from "util/booleanFunction";
import {
  Card,
  Badge,
  Typography,
  Avatar,
  Row,
  Col,
  Descriptions,
  Statistic,
  Divider,
} from "antd";

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

  const otherImages = editionItem.imagesother.split(" | ");
  console.log("otherImages", otherImages);

  return (
    <Card
      key={editionItem.id}
      title={editionItem.title}
      className="moto-card-type1 moto-carcatalog-card"
      cover={<img alt="" src={editionItem.mainimg} />}
    >
      {/* <Meta
        avatar={
          null
          // <Avatar src={editionItem.imagemain} shape="square" size={250} />
        }
        title={editionItem.cartrim}
        description={editionItem.cardate}
      /> */}

      <Row>
        <Col lg={9} md={9} sm={9} xs={9}>
          <img src={editionItem.imagemain} />
        </Col>
        <Col lg={15} md={15} sm={15} xs={15}>
          <Row className="gx-mt-3">
            <Col span={8}>
              <Statistic title="Жишиг үнэ" value={editionItem.pricenewusd} />
            </Col>
            <Col span={8}>
              <Statistic
                title="Цувралын огноо"
                value={moment(editionItem.cardate).format("YYYY-MM")}
              />
            </Col>
            <Col span={8}>
              <Statistic title="Идэлт" value={editionItem.envi2fueljc08} />
            </Col>
          </Row>

          <Divider />
          <Row className="gx-mt-3">
            <Col span={8}>
              <Statistic title="Арлын дугаар" value={editionItem.modelcode} />
            </Col>
            <Col span={8}>
              <Statistic title="Суудал" value={editionItem.seatnumber} />
            </Col>
            <Col span={8}>
              <Statistic title="Хаалга" value={editionItem.doornumber} />
            </Col>
          </Row>
          <Divider />
          <Row className="gx-mt-3">
            <Col span={8}>
              <Statistic title="Моторын код" value={editionItem.engine2code} />
            </Col>
            <Col span={8}>
              <Statistic title="Багтаамж" value={editionItem.engine2disp} />
            </Col>
            <Col span={8}>
              <Statistic title="Чадал" value={editionItem.engine2powerhp} />
            </Col>
          </Row>

          <Descriptions
            title="Ерөнхий"
            layout="horizontal"
            bordered
            size="small"
            column={{ xxl: 2, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
            className="gx-mt-5"
          >
            {Object.keys(editionItem).map((val, k) => {
              if (val.indexOf("body") !== -1) {
                return (
                  <Descriptions.Item label={val}>
                    {editionItem[val]}
                  </Descriptions.Item>
                );
              }
            })}

            {Object.keys(editionItem).map((val, k) => {
              if (val.indexOf("envi") !== -1) {
                return (
                  <Descriptions.Item label={val}>
                    {editionItem[val]}
                  </Descriptions.Item>
                );
              }
            })}
          </Descriptions>
        </Col>
      </Row>

      <Row>
        <Col>
          {/* {otherImages} */}
          {otherImages.map((item, index) => {
            return (
              <img src={"https://catalogphoto.goo-net.com/carphoto/" + item} />
            );
          })}
        </Col>
      </Row>

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
