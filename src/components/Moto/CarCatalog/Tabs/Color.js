import React, { useState, useContext } from "react";

import { Card, Badge, Typography, Row, Col, Descriptions } from "antd";
import { carSpec } from "util/carSpecTranslation";

const DetailTabs = ({ detail }) => {
  console.log("Манай Detail - ", detail);

  return (
    <Row>
      <Col xl={12} md={12} sm={12} xs={24} className="gx-mb-4">
        <h4>Гадна өнгө</h4>
        <Descriptions
          layout="horizontal"
          bordered
          size="small"
          column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
          className="moto-car-spec1"
        >
          {Object.keys(detail).map((val, k) => {
            if (val.indexOf("colorman") !== -1) {
              if (detail[val] !== "") {
                return (
                  <Descriptions.Item label={carSpec[val] ? carSpec[val] : val}>
                    {detail[val]}
                  </Descriptions.Item>
                );
              }
            }
          })}
        </Descriptions>
      </Col>
      <Col xl={12} md={12} sm={12} xs={24} className="gx-mb-4">
        <h4>Салоны өнгө</h4>
        <Descriptions
          layout="horizontal"
          bordered
          size="small"
          column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
          className="moto-car-spec1"
        >
          {Object.keys(detail).map((val, k) => {
            if (val.indexOf("coloropt") !== -1) {
              if (detail[val] !== "") {
                return (
                  <Descriptions.Item label={carSpec[val] ? carSpec[val] : val}>
                    {detail[val]}
                  </Descriptions.Item>
                );
              }
            }
          })}
        </Descriptions>
      </Col>
    </Row>
  );
};

export default DetailTabs;
