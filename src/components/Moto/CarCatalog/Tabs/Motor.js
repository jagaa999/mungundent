import React, { useState, useContext } from "react";

import { Card, Badge, Typography, Row, Col, Descriptions } from "antd";
import { carSpec } from "util/carSpecTranslation";
import MemberContext from "context/MemberContext";

const DetailTabs = ({ detail }) => {
  const memberContext = useContext(MemberContext);
  const OnlyMember = memberContext.OnlyMember;

  return (
    <OnlyMember>
      <Row>
        <Col xl={12} md={12} sm={12} xs={24} className="gx-mb-4">
          <h4>Мотор</h4>
          <Descriptions
            layout="horizontal"
            bordered
            size="small"
            column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
            className="moto-car-spec1"
          >
            {Object.keys(detail).map((item, index) => {
              if (item.indexOf("engine2") !== -1) {
                if (detail[item] !== "") {
                  return (
                    <Descriptions.Item
                      label={carSpec[item] ? carSpec[item] : item}
                      key={index}
                    >
                      {detail[item]}
                    </Descriptions.Item>
                  );
                }
              }
            })}
          </Descriptions>
        </Col>
        <Col xl={12} md={12} sm={12} xs={24} className="gx-mb-4">
          <h4>Хроп, Хөтлөгч</h4>
          <Descriptions
            layout="horizontal"
            bordered
            size="small"
            column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
            className="moto-car-spec1"
          >
            {Object.keys(detail).map((val, k) => {
              if (val.indexOf("drive2") !== -1) {
                if (detail[val] !== "") {
                  return (
                    <Descriptions.Item
                      label={carSpec[val] ? carSpec[val] : val}
                    >
                      {detail[val]}
                    </Descriptions.Item>
                  );
                }
              }
            })}
          </Descriptions>
        </Col>
      </Row>
    </OnlyMember>
  );
};

export default DetailTabs;
