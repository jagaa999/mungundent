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

const TopAuction = () => {
  return (
    <>
      <h2>Монголчуудын нийтлэг авдаг автомашинууд</h2>
      fg fgf dgd df gdfg df Sedan 1. Crown 2. Corolla 3. Camry 4. Sai 5. Allion
      6. Premio 7. Mark 8. Impreza 9. Tiida 10. Fuga Hatchback 1. Prius 20 2.
      Prius 30 3. Insight 4. Aqua 5. Leaf 6. Fit 7. Vitz 8. March 9. Impreza
      (hatchback) 10. Note Crossover 1. Harrier 2. Forester 3. Lexus RX 4. X -
      Trail 5. Kluger 6. Vanguard 7. Juke 8. Outback 9. Rav4 10. C-RV SUV 1. LC
      200 2. LC Prado 3. LC 100 4. LX 570 5. Highlander 6. Hilux 7. Range Rover
      8. Patrol 9. LX 470 10. LC 80
      <div>via https://www.facebook.com/aimar.munhuu.9</div>
      <WidgetHeader styleName="gx-flex-row gx-mt-5" title="Сэдан" />
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
      <WidgetHeader styleName="gx-flex-row gx-mt-5" title="Хэчбэк" />
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
    </>
  );
};

export default TopAuction;
