import React from "react";
import { Link } from "react-router-dom";

import { Menu } from "antd";

const WidgetMenu01 = ({ widgetconfigs, data }) => {
  // console.table("widgetconfigs", widgetconfigs);
  // console.table("data", data);

  return (
    <Menu mode="horizontal">
      {data.rows.map((item, index) => {
        const position1 = item[widgetconfigs.position1];
        const position2 = item[widgetconfigs.position2];
        // const { position1, position2 } = item[widgetconfigs];

        return (
          <Menu.Item key={position2}>
            <Link to="/">{position1}</Link>
          </Menu.Item>
        );
      })}
    </Menu>
  );
};

export default WidgetMenu01;
