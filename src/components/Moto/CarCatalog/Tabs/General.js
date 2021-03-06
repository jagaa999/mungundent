import React, { useState, useContext } from "react";
import accounting from "accounting";

import { Typography, Row, Col, Descriptions, Divider, Image } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

import CarcatalogDetailImages from "./CarcatalogDetailImages";

import { carSpec } from "util/carSpecTranslation";
import MemberContext from "context/MemberContext";
const { Paragraph } = Typography;

const DetailTabs = ({ detail }) => {
  const memberContext = useContext(MemberContext);
  const OnlyMember = memberContext.OnlyMember;

  const otherImages = detail.imagesother.split(" | ");
  otherImages.splice(-1, 1);

  return (
    <div>
      <Row>
        {/* <Col sm={{ span: 9, offset: 0 }} xs={{ span: 8, offset: 1 }}> */}
        <Col sm={{ span: 9, offset: 0 }} xs={{ span: 22, offset: 1 }}>
          <Descriptions
            column={1}
            layout="horizontal"
            className="moto-auction-head-description"
          >
            <Descriptions.Item
              label={<span className="gx-text-grey">Фирм</span>}
            >
              {detail.firmname}
            </Descriptions.Item>
            <Descriptions.Item
              label={<span className="gx-text-grey">Марк</span>}
            >
              {detail.markname}
            </Descriptions.Item>
            <Descriptions.Item
              label={<span className="gx-text-grey">Эхэлсэн</span>}
            >
              {detail.cardate}
            </Descriptions.Item>
            <Descriptions.Item
              label={<span className="gx-text-grey">Хувилбар</span>}
            >
              {detail.cartrim}
            </Descriptions.Item>
            <Descriptions.Item
              label={<span className="gx-text-grey">Модель код</span>}
            >
              {detail.modelcode}
            </Descriptions.Item>
            <Descriptions.Item
              label={<span className="gx-text-grey">Одоог хүртэл</span>}
            >
              {detail.untilnow}
            </Descriptions.Item>
          </Descriptions>
        </Col>
        <Col sm={{ span: 15, offset: 0 }} xs={{ span: 22, offset: 1 }}>
          {/* <Image
            className="gx-img-fluid gx-w-100 gx-pointer gx-dot-arrow-hover"
            src={detail.imagemain}
          /> */}
          <Image
            src={detail.imagemain}
            loading="lazy"
            width="300"
            quality="auto"
            className="gx-img-fluid gx-w-100 gx-card-widget gx-mb-4"
            alt={detail.title}
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <CarcatalogDetailImages editionItem={detail} myImages={otherImages} />

          <Divider className="gx-my-4" />

          <Paragraph
            className="gx-mt-3"
            ellipsis={{
              rows: 4,
              expandable: true,
              symbol: <CaretDownOutlined />,
            }}
          >
            {detail.fieldeng}
          </Paragraph>

          <Divider className="gx-my-4" />
        </Col>
      </Row>

      <OnlyMember>
        <Row>
          <Col
            md={{ span: 12, offset: 0 }}
            sm={{ span: 24, offset: 0 }}
            xs={{ span: 22, offset: 1 }}
            className="gx-mt-4 gx-mt-md-0"
          >
            <Descriptions
              className="moto-car-spec1"
              layout="horizontal"
              bordered={true}
              size="small"
              column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
            >
              {Object.keys(detail).map((val, k) => {
                if (val.indexOf("body2") !== -1) {
                  if (detail[val] !== "") {
                    return (
                      <Descriptions.Item
                        key={k}
                        label={carSpec[val] ? carSpec[val] : val}
                      >
                        {detail[val]}
                      </Descriptions.Item>
                    );
                  }
                }
              })}

              {Object.keys(detail).map((val, k) => {
                if (val.indexOf("envi2") !== -1) {
                  if (detail[val] !== "") {
                    return (
                      <Descriptions.Item
                        key={k}
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
    </div>
  );
};

export default DetailTabs;
