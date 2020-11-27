import React, { useState, useEffect, useRef } from "react";

import { Row, Col, Tabs } from "antd";
import MotoSmartHomeCard2 from "../Widgets/MotoSmartHomeCard2";
import MotoSmartHomeCard3 from "../Widgets/MotoSmartHomeCard3";

const sedanList = [
  {
    image: "crown.jpg",
    desc: "Toyota Crown",
    link: "/auction?marka_id=1&model_id=60&yearstart=2011&yearend=2014",
  },
  {
    image: "coroallaxio.jpg",
    desc: "Toyota Corolla",
    link: "/auction?marka_id=1&model_id=41&yearstart=2011&yearend=2014",
  },
  {
    image: "camry.jpg",
    desc: "Toyota Camry",
    link: "/auction?marka_id=1&model_id=25&yearstart=2011&yearend=2014",
  },
  {
    image: "sai.jpg",
    desc: "Toyota Sai",
    link: "/auction?marka_id=1&model_id=6356&yearstart=2011&yearend=2014",
  },
  {
    image: "allion.jpg",
    desc: "Toyota Allion",
    link: "/auction?marka_id=1&model_id=3&yearstart=2011&yearend=2014",
  },
  {
    image: "premio.jpg",
    desc: "Toyota Premio",
    link: "/auction?marka_id=1&model_id=55&yearstart=2011&yearend=2014",
  },
  {
    image: "markx.jpg",
    desc: "Toyota Mark X",
    link: "/auction?marka_id=1&model_id=122&yearstart=2011&yearend=2014",
  },
  {
    image: "imprezag4.jpg",
    desc: "Subaru Impreza G4",
    link: "/auction?marka_id=7&model_id=9997&yearstart=2011&yearend=2014",
  },
  {
    image: "teana.jpg",
    desc: "Nissan Teana",
    link: "/auction?marka_id=2&model_id=339&yearstart=2011&yearend=2014",
  },
  {
    image: "fuga.jpg",
    desc: "Nissan Fuga",
    link: "/auction?marka_id=2&model_id=257&yearstart=2011&yearend=2014",
  },
];

// 1. Crown 2. Corolla 3. Camry 4. Sai 5. Allion
//       6. Premio 7. Mark 8. Impreza 9. Tiida 10. Fuga

const hatchbackList = [
  {
    image: "prius.jpg",
    desc: "Toyota Prius",
    link: "/auction?marka_id=1&model_id=139&yearstart=2011&yearend=2014",
  },
  {
    image: "priusalpha.jpg",
    desc: "Toyota Prius Alpha",
    link: "/auction?marka_id=1&model_id=9245&yearstart=2011&yearend=2014",
  },
  {
    image: "insihgt.jpg",
    desc: "Honda Insight",
    link: "/auction?marka_id=5&model_id=587&yearstart=2011&yearend=2014",
  },
  {
    image: "aqua.jpg",
    desc: "Toyota Aqua",
    link: "/auction?marka_id=1&model_id=9580&yearstart=2011&yearend=2014",
  },
  {
    image: "leaf.jpg",
    desc: "Nissan Leaf",
    link: "/auction?marka_id=2&model_id=9209&yearstart=2011&yearend=2014",
  },
  {
    image: "fit.jpg",
    desc: "Honda Fit",
    link: "/auction?marka_id=5&model_id=582&yearstart=2011&yearend=2014",
  },
  {
    image: "vitz.jpg",
    desc: "Toyota Vitz",
    link: "/auction?marka_id=1&model_id=205&yearstart=2011&yearend=2014",
  },
  {
    image: "march.jpg",
    desc: "Nissan March",
    link: "/auction?marka_id=2&model_id=284&yearstart=2011&yearend=2014",
  },
  {
    image: "impreza.jpg",
    desc: "Subaru Impreza",
    link: "/auction?marka_id=7&model_id=705&yearstart=2011&yearend=2014",
  },
  {
    image: "note.jpg",
    desc: "Nissan Note",
    link: "/auction?marka_id=2&model_id=296&yearstart=2011&yearend=2014",
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

      <Tabs defaultActiveKey="2" centered className="gx-mt-5">
        <Tabs.TabPane tab="Сэдан" key="1">
          <Row className="gx-d-flex gx-mt-5">
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
                <MotoSmartHomeCard3 item={item} />
              </Col>
            ))}
          </Row>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Хэчбэк" key="2">
          <Row className="gx-d-flex gx-mt-5">
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
                <MotoSmartHomeCard3 item={item} />
              </Col>
            ))}
          </Row>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Кроссовер" key="3">
          <Row className="gx-d-flex gx-mt-5">
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
          <Row className="gx-d-flex gx-mt-5">
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
      <Row className="gx-d-flex gx-mt-5">
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
