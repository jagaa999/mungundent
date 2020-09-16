import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

import CustomScrollbars from "util/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";
import UserProfile from "./UserProfile";
import AppsNavigation from "./AppsNavigation";
import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE,
} from "../../constants/ThemeSetting";
import IntlMessages from "../../util/IntlMessages";
import { useSelector } from "react-redux";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const SidebarContent = () => {
  let { navStyle, themeType, pathname } = useSelector(
    ({ settings }) => settings
  );

  const getNoHeaderClass = (navStyle) => {
    if (
      navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR ||
      navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR
    ) {
      return "gx-no-header-notifications";
    }
    return "";
  };
  const getNavStyleSubMenuClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
      return "gx-no-header-submenu-popup";
    }
    return "";
  };
  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split("/")[1];
  return (
    <>
      <SidebarLogo />
      <div className="gx-sidebar-content">
        <div
          className={`gx-sidebar-notifications ${getNoHeaderClass(navStyle)}`}
        >
          <UserProfile />
          <AppsNavigation />
        </div>
        <CustomScrollbars className="gx-layout-sider-scrollbar">
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={themeType === THEME_TYPE_LITE ? "lite" : "dark"}
            mode="inline"
          >
            <Menu.Item key="news/" className="gx-mt-4">
              <Link to="/news/">
                <span>Нийтлэл</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="carcatalog/" className="gx-mt-4">
              <Link to="/carcatalog/">
                <span>Каталог</span>
              </Link>
            </Menu.Item>

            <SubMenu
              popupClassName={getNavStyleSubMenuClass(navStyle)}
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
                  <Link
                    to="/salon/kia/carnival"
                    className="motoHeaderMenuItemLink"
                  >
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
                  <Link
                    to="/salon/toyota/rav4"
                    className="motoHeaderMenuItemLink"
                  >
                    Rav4
                  </Link>
                </Menu.Item>
              </SubMenu>
            </SubMenu>

            <Menu.Item key="member" className="motoHeaderMenuItem">
              <Link to="/member" className="motoHeaderMenuItemLink">
                Гишүүн
              </Link>
            </Menu.Item>
          </Menu>
        </CustomScrollbars>
      </div>
    </>
  );
};

SidebarContent.propTypes = {};
export default SidebarContent;
