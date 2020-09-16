import React, { useState, useContext } from "react";

import { Card, Badge, Typography, Row, Col, Descriptions } from "antd";
import { carSpec } from "util/carSpecTranslation";

const DetailTabs = ({ detail }) => {
  const otherImages = detail.imagesother.split(" | ");
  otherImages.splice(-1, 1);

  return (
    <Row>
      <Col span={11}>
        <h1>{detail.title}</h1>
        <Row>
          <Col span={8} className="gx-pt-3">
            Жишиг үнэ:
            <h1 className="gx-mb-2 gx-text-primary gx-font-weight-medium gx-fs-xxl">
              {detail.pricenewusd} USD
            </h1>
          </Col>
          <Col span={16}>
            <div className="gx-revenu">
              <div className="gx-revenu-row">
                <div className="gx-revenu-col">
                  <h3>{detail.body2seat}</h3>
                  <span className="gx-fs-sm">хаалгатай</span>
                </div>
                <div className="gx-revenu-col">
                  <h3>{detail.body2door}</h3>
                  <span className="gx-fs-sm">суудалтай</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <ul>
              <li>Фирм: {detail.firmname}</li>
              <li>Марк: {detail.markname}</li>
              <li>Машиныг үйлдвэрлэж эхэлсэн огноо: {detail.cardate}</li>
              <li>Хувилбар: {detail.cartrim}</li>
              <li>Модель код: {detail.modelcode}</li>
              <li>Одоог хүртэл: {detail.untilnow}</li>
            </ul>
          </Col>
        </Row>

        <Descriptions
          layout="horizontal"
          bordered
          size="small"
          column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
          className="gx-mt-4"
        >
          {Object.keys(detail).map((val, k) => {
            if (val.indexOf("body2") !== -1) {
              return (
                <Descriptions.Item
                  key={k}
                  label={carSpec[val] ? carSpec[val] : val}
                >
                  {detail[val]}
                </Descriptions.Item>
              );
            }
          })}

          {Object.keys(detail).map((val, k) => {
            if (val.indexOf("envi2") !== -1) {
              return (
                <Descriptions.Item
                  key={k}
                  label={carSpec[val] ? carSpec[val] : val}
                >
                  {detail[val]}
                </Descriptions.Item>
              );
            }
          })}
        </Descriptions>
      </Col>
      <Col span={13}>
        <img className="gx-img-fluid gx-w-100" src={detail.imagemain} />

        <div className="gx-mt-2">
          {otherImages.map((image, index) => (
            <img
              src={"https://catalogphoto.goo-net.com/carphoto/" + image}
              style={{ maxHeight: "50px" }}
              className="gx-mr-2 gx-mt-2"
            />
          ))}
        </div>

        <div className="gx-mt-4">{detail.fieldeng}</div>
      </Col>
    </Row>
  );
};

export default DetailTabs;
