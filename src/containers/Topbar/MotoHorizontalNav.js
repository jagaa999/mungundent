import React from "react";
import { Link } from "react-router-dom";

import { Menu, Tooltip } from "antd";
import MyIcon from "../../util/iconFunction";
import { topMenu } from "content/jsonData/menu/menuJsonData";

const MotoHorizontalNav = () => {
  return (
    <Menu mode="horizontal" className="motoHeader">
      {topMenu.map((item, index) => {
        if (item?.onlyLocal === true) {
          if (process.env.NODE_ENV !== "development") {
            return null;
          }
        }

        return (
          <Menu.Item
            key={item.link.substring(1)}
            className="motoHeaderMenuItem"
          >
            <Link to={item.link} className="motoHeaderMenuItemLink">
              <Tooltip title={item.tooltip}>
                <span className="gx-d-block gx-d-lg-none">
                  <MyIcon type={item.icon} />
                </span>
              </Tooltip>
              <div className="gx-d-none gx-d-lg-block">{item.title}</div>
            </Link>
          </Menu.Item>
        );
      })}
    </Menu>
  );
};

MotoHorizontalNav.propTypes = {};

export default MotoHorizontalNav;
