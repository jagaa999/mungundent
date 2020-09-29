import React, { useState, useContext } from "react";

import {
  Card,
  Badge,
  Typography,
  Row,
  Col,
  Descriptions,
  Divider,
  Image,
} from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

import { carSpec } from "util/carSpecTranslation";
const { Paragraph } = Typography;

const DetailTabs = ({ detail }) => {
  const otherImages = detail.imagesother.split(" | ");
  otherImages.splice(-1, 1);

  return (
    <Row>
      <Col xl={11} md={11} sm={12} xs={24}>
        <h1 className="gx-mt-4">{detail.title}</h1>
        <Row className="gx-mt-4">
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

        <Divider className="gx-my-4" />

        <Row>
          <Col span={24}>
            <ul>
              <li>
                <span className="gx-mr-3 moto-label-05">Фирм:</span>{" "}
                {detail.firmname}
              </li>
              <li>
                <span className="gx-mr-3 moto-label-05">Марк:</span>{" "}
                {detail.markname}
              </li>
              <li>
                <span className="gx-mr-3 moto-label-05">
                  Машиныг үйлдвэрлэж эхэлсэн огноо:
                </span>{" "}
                {detail.cardate}
              </li>
              <li>
                <span className="gx-mr-3 moto-label-05">Хувилбар:</span>{" "}
                {detail.cartrim}
              </li>
              <li>
                <span className="gx-mr-3 moto-label-05">Модель код:</span>{" "}
                {detail.modelcode}
              </li>
              <li>
                <span className="gx-mr-3 moto-label-05">Одоог хүртэл:</span>{" "}
                {detail.untilnow}
              </li>
            </ul>
          </Col>
        </Row>

        <Descriptions
          layout="horizontal"
          bordered
          size="small"
          column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
          className="gx-mt-4 moto-car-spec1"
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
      <Col xl={13} md={13} sm={12} xs={24}>
        <Image
          className="gx-img-fluid gx-w-100 gx-pointer gx-dot-arrow-hover"
          src={detail.imagemain}
        />

        <div className="gx-mt-2">
          {otherImages.map((image, index) => (
            // <img
            //   src={"https://catalogphoto.goo-net.com/carphoto/" + image}
            //   style={{ maxHeight: "50px" }}
            //   className="gx-mr-2 gx-mt-2"
            // />
            <Image
              className="gx-mr-2 gx-mt-2 gx-pointer"
              width={80}
              height={50}
              src={"https://catalogphoto.goo-net.com/carphoto/" + image}
            />
          ))}
        </div>

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
      </Col>
    </Row>
  );
};

export default DetailTabs;
