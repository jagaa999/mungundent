import React from "react";
import { Link } from "react-router-dom";

import {
  Menu,
  Avatar,
  Button,
  Image,
  Card,
  Row,
  Col,
  Carousel,
  Divider,
} from "antd";

const WidgetCard07 = ({ widgetconfigs, data }) => {
  console.table("widgetconfigs", widgetconfigs);
  console.table("data", data);

  const contentStyle = {
    height: "360px",
    color: "#fff",
    textAlign: "left",
    background: "#364d79",
    padding: "7% 13%",
  };

  // position1: "title",
  // position2: "description",
  // position3: "icon",
  // position4: "colprops",
  // position5: "link",
  // position6: "cardprops",

  return (
    <Row gutter={[8, 8]} type="flex">
      {data.rows.map((item, index) => {
        const position1 = item[widgetconfigs.position1] || "";
        const position2 = item[widgetconfigs.position2] || "";
        const position3 = item[widgetconfigs.position3] || "";
        const position4 = item[widgetconfigs.position4] || "";
        const position5 = item[widgetconfigs.position5] || "";
        const position6 = item[widgetconfigs.position6] || "";

        return (
          <Col {...position4}>
            <Card {...position6}>
              <Image src={position3} />
              <div className="gx-mt-3 gx-fs-xxl gx-font-weight-bold">
                {position1}
              </div>
              <div className="gx-mt-3">{position2}</div>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default WidgetCard07;
