import React, { useState, useContext } from "react";

import { Card, Badge, Typography, Row, Col, Descriptions } from "antd";
import { carSpec } from "util/carSpecTranslation";

const DetailTabs = ({ detail }) => {
  return (
    <Row>
      <Col span={12}>
        <h5>Тулавч</h5>
        <Descriptions
          layout="horizontal"
          bordered
          size="small"
          column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
        >
          {Object.keys(detail).map((val, k) => {
            if (val.indexOf("sus2") !== -1) {
              return (
                <Descriptions.Item label={carSpec[val] ? carSpec[val] : val}>
                  {detail[val]}
                </Descriptions.Item>
              );
            }
          })}
        </Descriptions>
      </Col>
      <Col span={12}>
        <h5>Дугуй</h5>
        <Descriptions
          layout="horizontal"
          bordered
          size="small"
          column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
        >
          {Object.keys(detail).map((val, k) => {
            if (val.indexOf("tire2") !== -1) {
              return (
                <Descriptions.Item label={carSpec[val] ? carSpec[val] : val}>
                  {detail[val]}
                </Descriptions.Item>
              );
            }
          })}
        </Descriptions>
      </Col>
    </Row>
  );
};

export default DetailTabs;
