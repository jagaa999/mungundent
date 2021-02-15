import React, { useState, useEffect, useRef } from "react";

import { Row, Col, Tabs } from "antd";
import MotoSmartHomeCard2 from "../../Widgets/MotoSmartHomeCard2";
import MotoSmartHomeCard3 from "../../Widgets/MotoSmartHomeCard3";
import {
  sedanList,
  hatchbackList,
  crossoverList,
  suvList,
} from "content/auction/mostCars";

const TopAuction = () => {
  return (
    <>
      <h2>Японы улсаас Монголчуудын нийтлэг авдаг автомашинууд</h2>

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
