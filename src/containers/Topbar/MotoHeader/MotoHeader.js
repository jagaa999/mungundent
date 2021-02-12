import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Layout, Popover, Tooltip, Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import MotoHorizontalNav from "../MotoHorizontalNav";
import MenuMember from "components/Moto/Menu/MenuMember";
import MemberItems from "components/Moto/Member/MemberItems/MemberItems";
import MemberContext from "context/MemberContext";
import CarcatalogContext from "context/CarcatalogContext";
import MyIcon from "util/iconFunction";
const { SubMenu } = Menu;
const { Header } = Layout;

const MotoHeader = () => {
  const memberContext = useContext(MemberContext);
  const carCatalogContext = useContext(CarcatalogContext);

  return (
    <>
      {/* <Header
        className="header"
        style={{ position: "fixed", zIndex: 1, width: "100%" }}
      > */}

      {/* <div className="logo" />
      <Menu theme="" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
        <Menu.Item key="4">nav 34</Menu.Item>
        <Menu.Item key="5">nav dfsdf 3</Menu.Item>
        <Menu.Item key="6">naddv 3</Menu.Item>
        <Menu.Item key="7">dfdnav 3</Menu.Item>
        <Menu.Item key="8">dfdfnav 3</Menu.Item>
      </Menu> */}
      {/* </Header> */}

      <div className="gx-header-horizontal gx-header-horizontal-dark gx-inside-header-horizontal">
        <Header className="gx-header-horizontal-main">
          <div className="gx-container">
            <div className="gx-header-horizontal-main-flex gx-w-100">
              <Link to="/" className="gx-d-block gx-pointer gx-mr-xs-5 gx-logo">
                <Tooltip title="Нүүр хуудас">
                  <span className="gx-d-block gx-d-lg-none">
                    <MyIcon type="iconhome" />
                  </span>
                </Tooltip>
                <div className="gx-d-none gx-d-lg-block">
                  <img
                    alt=""
                    style={{ height: "26px" }}
                    src={require("assets/images/logo.png")}
                  />
                </div>
              </Link>

              <div className="gx-header-horizontal-nav gx-header-horizontal-nav-curve gx-d-block gx-w-75">
                <MotoHorizontalNav />
              </div>

              <ul className="gx-header-notifications gx-ml-auto">
                <li>
                  <Popover
                    // overlayClassName="gx-popover-horizantal"
                    // placement="bottomRight"
                    content={carCatalogContext.CarDetailPopover}
                    trigger="hover"
                    // title="Каталогиос сонгосон машин"
                  >
                    <span
                      className="gx-pointer gx-status-pos gx-d-block"
                      onClick={carCatalogContext.toggleDrawer}
                    >
                      <MyIcon type="iconcar2" className="moto-icon-1-5" />
                    </span>
                  </Popover>
                </li>
                {memberContext.state.isLogin ? (
                  //* Member хадгалсан зүйлс MemberItems context дотор байгаа зүйлс
                  <li className="gx-msg">
                    <Popover
                      overlayClassName="gx-popover-horizantal"
                      placement="bottomRight"
                      content={<MemberItems />}
                      trigger="click"
                    >
                      <span className="gx-pointer gx-status-pos gx-d-block">
                        <MyIcon
                          type="iconinbox-solid"
                          className="moto-icon-1-5"
                        />
                      </span>
                    </Popover>
                  </li>
                ) : (
                  ""
                )}

                <li className="gx-user-nav">
                  <MenuMember />
                </li>
              </ul>
            </div>
          </div>
        </Header>
      </div>
    </>
  );
};

export default MotoHeader;

// export default MotoHeader;
