import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Menu, Tooltip } from "antd";
import IntlMessages from "../../util/IntlMessages";
import FilterContext from "context/FilterContext";
import MyIcon from "../../util/iconFunction";
import { topMenu } from "content/jsonData/menu/menuJsonData";

const { SubMenu } = Menu;
const MenuItemGroup = Menu.ItemGroup;

const MotoHorizontalNav = () => {
  const filterContext = useContext(FilterContext);
  const selectedKeys = filterContext.urlSetting.menu;
  // const defaultOpenKeys = selectedKeys.split("/")[1];

  return (
    <Menu
      selectedKeys={[selectedKeys]}
      mode="horizontal"
      className="motoHeader"
    >
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

      {/* <SubMenu
        key="salon"
        title="Салон"
      >
        <SubMenu
          popupClassName="gx-menu-horizontal"
          key="salon/kia"
          title="Kia"
        >
          <Menu.Item key="salon/kia/k5" className="motoHeaderMenuItem">
            <Link to="/salon/kia/k5" className="motoHeaderMenuItemLink">
              K5
            </Link>
          </Menu.Item>
          <Menu.Item
            key="salon/kia/carnival"
            className="motoHeaderMenuItem"
            disabled
          >
            <Link to="/salon/kia/carnival" className="motoHeaderMenuItemLink">
              Carnival
            </Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          popupClassName="gx-menu-horizontal"
          key="salon/toyota"
          title="Toyota"
        >
          <Menu.Item
            key="salon/toyota/landcruiser"
            className="motoHeaderMenuItem"
            disabled
          >
            <Link
              to="/salon/toyota/landcruiser"
              className="motoHeaderMenuItemLink"
            >
              Land Cruiser
            </Link>
          </Menu.Item>
          <Menu.Item
            key="salon/toyota/rav4"
            className="motoHeaderMenuItem"
            disabled
          >
            <Link to="/salon/toyota/rav4" className="motoHeaderMenuItemLink">
              Rav4
            </Link>
          </Menu.Item>
        </SubMenu>
      </SubMenu> */}
    </Menu>
  );
};

MotoHorizontalNav.propTypes = {};

export default MotoHorizontalNav;
