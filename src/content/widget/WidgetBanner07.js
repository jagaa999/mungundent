import React from "react";
import { Link } from "react-router-dom";

import {
  Menu,
  Avatar,
  Button,
  Image,
  Card,
  Layout,
  Row,
  Col,
  Carousel,
  Divider,
} from "antd";

const WidgetBanner07 = ({ widgetconfigs, data }) => {
  // console.table("widgetconfigs", widgetconfigs);
  // console.table("data", data);

  // position1: "title",
  // position2: "description",
  // position3: "photo",
  // position4: "bannerprops",
  // position5: "leftprops",
  // position6: "rightprops",

  return data.rows.map((item, index) => {
    const position1 = item[widgetconfigs.position1] || "";
    const position2 = item[widgetconfigs.position2] || "";
    const position3 = item[widgetconfigs.position3] || "";
    const position4 = item[widgetconfigs.position4] || "";
    const position5 = item[widgetconfigs.position5] || "";
    const position6 = item[widgetconfigs.position6] || "";

    return (
      <>
        <div {...position4}>
          <Row justify="center" gutter={[0, 0]}>
            <Col span={12}>
              <div {...position5}>
                <div className="gx-mt-3 gx-fs-xxl gx-font-weight-bold">
                  {position1}
                </div>
                <div className="gx-mt-3">{position2}</div>
              </div>
            </Col>
            <Col span={12}>
              <Image src={position3} />
            </Col>
          </Row>
        </div>
      </>
    );
  });
};

export default WidgetBanner07;
