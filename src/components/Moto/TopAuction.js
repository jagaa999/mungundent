import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import {
  Card,
  Button,
  message,
  Divider,
  Form,
  Input,
  InputNumber,
  Select,
  Radio,
  Row,
  Col,
  Tabs,
  Alert,
  Badge,
  Spin,
  notification,
} from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import WidgetHeader from "components/WidgetHeader/index";
import MotoSmartHomeCard2 from "components/Widgets/MotoSmartHomeCard2";

const sedanList = [
  {
    image: "",
    desc: "Toyota Crown",
  },
  {
    image: "",
    desc: "Toyota Corolla",
  },
  {
    image: "",
    desc: "Toyota Camry",
  },
  {
    image: "",
    desc: "Toyota Sai",
  },
  {
    image: "",
    desc: "Toyota Allion",
  },
  {
    image: "",
    desc: "Toyota Premio",
  },
  {
    image: "",
    desc: "Toyota Mark",
  },
  {
    image: "",
    desc: "Subaru Impreza",
  },
  {
    image: "",
    desc: "Nissan Tiida",
  },
  {
    image: "",
    desc: "Nissan Fuga",
  },
];

// 1. Crown 2. Corolla 3. Camry 4. Sai 5. Allion
//       6. Premio 7. Mark 8. Impreza 9. Tiida 10. Fuga

const hatchbackList = [
  {
    image: "",
    desc: "Toyota Prius 20",
  },
  {
    image: "",
    desc: "Toyota Prius 30",
  },
  {
    image: "",
    desc: "Honda Insight",
  },
  {
    image: "",
    desc: "Toyota Aqua",
  },
  {
    image: "",
    desc: "Nissan Leaf",
  },
  {
    image: "",
    desc: "Honda Fit",
  },
  {
    image: "",
    desc: "Toyota Vitz",
  },
  {
    image: "",
    desc: "Nissan March",
  },
  {
    image: "",
    desc: "Subaru Impreza (hatchback)",
  },
  {
    image: "",
    desc: "Nissan Note",
  },
];

// Hatchback 1. Prius 20 2.
//       Prius 30 3. Insight 4. Aqua 5. Leaf 6. Fit 7. Vitz 8. March 9. Impreza
//       (hatchback) 10. Note

const crossoverList = [
  {
    image: "",
    desc: "Toyota Harrier",
  },
  {
    image: "",
    desc: "Subaru Forester",
  },
  {
    image: "",
    desc: "Lexus RX",
  },
  {
    image: "",
    desc: "Nissan X-Trail",
  },
  {
    image: "",
    desc: "Toyota Kluger",
  },
  {
    image: "",
    desc: "Toyota Vanguard",
  },
  {
    image: "",
    desc: "Nissan Juke",
  },
  {
    image: "",
    desc: "Mitsubishi Outback",
  },
  {
    image: "",
    desc: "Toyota Rav4",
  },
  {
    image: "",
    desc: "Honda C-RV",
  },
];

// 1. Harrier 2. Forester 3. Lexus RX 4. X -
//       Trail 5. Kluger 6. Vanguard 7. Juke 8. Outback 9. Rav4 10. C-RV

const suvList = [
  {
    image: "",
    desc: "Toyota Land Cruiser 200",
  },
  {
    image: "",
    desc: "Toyota Land Cruiser Prado",
  },
  {
    image: "",
    desc: "Toyota Land Cruiser 100",
  },
  {
    image: "",
    desc: "Lexus LX570",
  },
  {
    image: "",
    desc: "Toyota Highlander ",
  },
  {
    image: "",
    desc: "Toyota Hilux",
  },
  {
    image: "",
    desc: "Land Rover Range Rover",
  },
  {
    image: "",
    desc: "Nissan Patrol",
  },
  {
    image: "",
    desc: "Lexus LX470",
  },
  {
    image: "",
    desc: "Toyota Land Cruiser 80",
  },
];

// SUV 1. LC 200 2. LC Prado 3. LC 100 4. LX 570 5. Highlander 6. Hilux 7. Range Rover 8. Patrol 9. LX 470  10. LC 80

const TopAuction = () => {
  return (
    <>
      <h2>Монголчуудын нийтлэг авдаг автомашинууд</h2>

      <Tabs defaultActiveKey="1" centered className="gx-mt-5">
        <Tabs.TabPane tab="Сэдан" key="1">
          <Row className="gx-d-flex">
            {sedanList.map((item, index) => (
              <Col
                key={index}
                xl={4}
                lg={6}
                md={6}
                sm={8}
                xs={12}
                className="gx-mb-5"
              >
                <MotoSmartHomeCard2 item={item} />
              </Col>
            ))}
          </Row>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Хэчбэк" key="2">
          <Row className="gx-d-flex">
            {hatchbackList.map((item, index) => (
              <Col
                key={index}
                xl={4}
                lg={6}
                md={6}
                sm={8}
                xs={12}
                className="gx-mb-5"
              >
                <MotoSmartHomeCard2 item={item} />
              </Col>
            ))}
          </Row>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Кроссовер" key="3">
          <Row className="gx-d-flex">
            {crossoverList.map((item, index) => (
              <Col
                key={index}
                xl={4}
                lg={6}
                md={6}
                sm={8}
                xs={12}
                className="gx-mb-5"
              >
                <MotoSmartHomeCard2 item={item} />
              </Col>
            ))}
          </Row>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Жийп" key="34">
          <Row className="gx-d-flex">
            {suvList.map((item, index) => (
              <Col
                key={index}
                xl={4}
                lg={6}
                md={6}
                sm={8}
                xs={12}
                className="gx-mb-5"
              >
                <MotoSmartHomeCard2 item={item} />
              </Col>
            ))}
          </Row>
        </Tabs.TabPane>
      </Tabs>

      <div>via https://www.facebook.com/aimar.munhuu.9</div>

      {/* <WidgetHeader styleName="gx-flex-row gx-mt-5" title="Сэдан" />
      <Row className="gx-d-flex">
        {sedanList.map((item, index) => (
          <Col
            key={index}
            xl={4}
            lg={6}
            md={6}
            sm={8}
            xs={12}
            className="gx-mb-5"
          >
            <MotoSmartHomeCard2 item={item} />
          </Col>
        ))}
      </Row> */}

      {/* <WidgetHeader styleName="gx-flex-row gx-mt-5" title="Хэчбэк" />
      <Row className="gx-d-flex">
        {hatchbackList.map((item, index) => (
          <Col
            key={index}
            xl={4}
            lg={6}
            md={6}
            sm={8}
            xs={12}
            className="gx-mb-5"
          >
            <MotoSmartHomeCard2 item={item} />
          </Col>
        ))}
      </Row> */}

      {/* <WidgetHeader styleName="gx-flex-row gx-mt-5" title="Кросовер" />
      <Row className="gx-d-flex">
        {crossoverList.map((item, index) => (
          <Col
            key={index}
            xl={4}
            lg={6}
            md={6}
            sm={8}
            xs={12}
            className="gx-mb-5"
          >
            <MotoSmartHomeCard2 item={item} />
          </Col>
        ))}
      </Row> */}

      {/* <WidgetHeader styleName="gx-flex-row gx-mt-5" title="Жийп" />
      <Row className="gx-d-flex">
        {suvList.map((item, index) => (
          <Col
            key={index}
            xl={4}
            lg={6}
            md={6}
            sm={8}
            xs={12}
            className="gx-mb-5"
          >
            <MotoSmartHomeCard2 item={item} />
          </Col>
        ))}
      </Row> */}
    </>
  );
};

export default TopAuction;
