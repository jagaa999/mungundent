import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { Layout, Menu, message, Popover, Dropdown, Badge } from "antd";
import { LikeFilled } from "@ant-design/icons";

import MemberItems from "components/Moto/Member/MemberItems/MemberItems";
import MemberContext from "context/MemberContext";
import { footerText } from "util/config";
const { Footer } = Layout;

const toolMenu = (
  <Menu>
    <Menu.Item key="1">
      <Link to="/tool/fuel">
        Шатахууны тооцоолол <Badge status="processing" className="gx-ml-2" />
      </Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link to="/tool/converter">Хөрвүүлэх багажууд</Link>
    </Menu.Item>
    {/* <Menu.Item key="3" disabled>
      <Link to="/tool/fuel" disabled>
        Зээлийн тооцоолол
      </Link>
    </Menu.Item> */}
  </Menu>
);

// function handleMenuClick(e) {
//   message.info("Click on toolMenu item.");
// }

const MotoFooter = () => {
  const memberContext = useContext(MemberContext);

  return (
    <div className="gx-header-horizontal gx-header-horizontal-dark gx-inside-header-horizontal">
      <Footer>
        <div className="gx-container">
          <div className="gx-header-horizontal-main-flex">
            <div className="gx-d-block">
              <div className="">{footerText}</div>
            </div>
            <ul className="gx-ml-auto gx-header-notifications">
              {memberContext.state.isLogin ? (
                <li className="gx-msg">
                  <Popover
                    overlayClassName="gx-popover-horizantal"
                    placement="bottomRight"
                    content={<MemberItems />}
                    trigger="click"
                  >
                    <span className="gx-pointer gx-status-pos gx-d-block gx-fs-md">
                      Таны цүнх
                      {/* <span className="gx-status gx-status-rtl gx-small gx-orange" /> */}
                    </span>
                  </Popover>
                </li>
              ) : (
                ""
              )}
              <li className="gx-msg">
                <Dropdown
                  overlayClassName="gx-popover-horizantal"
                  // placement="bottomRight"
                  overlay={toolMenu}
                  trigger={["click"]}
                >
                  <span className="gx-pointer gx-status-pos gx-d-block gx-fs-md">
                    Багаж
                    <span className="gx-status gx-status-rtl gx-small gx-orange" />
                  </span>
                </Dropdown>
              </li>
              <li className="gx-user-nav"></li>
            </ul>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default MotoFooter;
