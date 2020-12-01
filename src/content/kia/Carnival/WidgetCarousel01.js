import React from "react";
import { Link } from "react-router-dom";

import { Menu, Avatar, Button, Carousel, Divider } from "antd";

const WidgetCarousel01 = ({ widgetconfigs, data }) => {
  console.table("widgetconfigs", widgetconfigs);
  console.table("data", data);

  const contentStyle = {
    height: "360px",
    color: "#fff",
    textAlign: "left",
    background: "#364d79",
    padding: "7% 13%",
  };

  return (
    <Carousel>
      {data.rows.map((item, index) => {
        const position1 = item[widgetconfigs.position1];
        const position2 = item[widgetconfigs.position2];
        const position3 = item[widgetconfigs.position3];

        return (
          <div>
            <div
              style={{
                ...contentStyle,
                background: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6) ), url(${position3})`,
                backgroundPosition: "center top",
                backgroundSize: "cover",
              }}
            >
              <div
                className="gx-text-white "
                style={{ fontSize: "28px", fontWeight: "700" }}
              >
                {position1}
              </div>
              <div className="gx-mt-5">{position2}</div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default WidgetCarousel01;
