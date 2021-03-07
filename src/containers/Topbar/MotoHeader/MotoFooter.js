import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { isBrowser } from "react-device-detect";
import { Layout, Menu, message, Popover, Dropdown, Badge } from "antd";
import { LikeFilled } from "@ant-design/icons";

import MemberItems from "components/Moto/Member/MemberItems/MemberItems";
import MemberContext from "context/MemberContext";
import { footerText } from "util/config";
import { DeviceText } from "util/deviceFunction";
const { Footer } = Layout;

const staticMenu = (
  <Menu>
    <Menu.Item key="staticAuction">
      <Link to="/static/privacy">Privacy Policy</Link>
    </Menu.Item>
    <Menu.Item key="engine">
      <Link to="/engine">Хөдөлгүүр</Link>
    </Menu.Item>
    <Menu.Item key="partengine">
      <Link to="/partengine">Хөдөлгүүрийн сэлбэг</Link>
    </Menu.Item>
  </Menu>
);

const topMenu = (
  <Menu>
    <Menu.Item key="topTire">
      <Link to="/top/tire">
        Дугуйны топ брэндүүд <Badge status="success" className="gx-ml-2" />
      </Link>
    </Menu.Item>
    <Menu.Item key="topAuction">
      <Link to="/top/auction">Аукшины топууд</Link>
    </Menu.Item>
  </Menu>
);

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

const MotoFooter = () => {
  const memberContext = useContext(MemberContext);

  return (
    <div className="gx-header-horizontal gx-header-horizontal-dark gx-inside-header-horizontal">
      <Footer>
        <div className="gx-container">
          <div className="gx-header-horizontal-main-flex">
            <div className="gx-d-block">
              <div>
                <DeviceText title={footerText} />
              </div>
            </div>
            <ul
              className={`gx-ml-auto gx-header-notifications ${
                isBrowser ? "" : "gx-fs-sm"
              }`}
            >
              {/* <li className="gx-msg">
                <Link to="/auction?yearend=2014">
                  <span className="gx-pointer gx-status-pos gx-d-block gx-fs-md">
                    Аукшин
                  </span>
                </Link>
              </li> */}

              <li className="gx-msg">
                <Dropdown
                  overlayClassName="gx-popover-horizantal"
                  placement="topRight"
                  overlay={staticMenu}
                  trigger="click"
                >
                  <span
                    className={`gx-pointer gx-status-pos gx-d-block ${
                      isBrowser ? "gx-fs-md" : "gx-fs-sm"
                    }`}
                  >
                    Мэдээлэл
                  </span>
                </Dropdown>
              </li>

              <li className="gx-msg">
                <Dropdown
                  overlayClassName="gx-popover-horizantal"
                  placement="topRight"
                  overlay={topMenu}
                  trigger="click"
                >
                  <span
                    className={`gx-pointer gx-status-pos gx-d-block ${
                      isBrowser ? "gx-fs-md" : "gx-fs-sm"
                    }`}
                  >
                    Шилдгүүд
                    {/* <span className="gx-status gx-status-rtl gx-small gx-success" /> */}
                  </span>
                </Dropdown>
              </li>

              <li className="gx-msg">
                <Dropdown
                  overlayClassName="gx-popover-horizantal"
                  placement="topRight"
                  overlay={toolMenu}
                  trigger="click"
                >
                  <span
                    className={`gx-pointer gx-status-pos gx-d-block ${
                      isBrowser ? "gx-fs-md" : "gx-fs-sm"
                    }`}
                  >
                    Багаж
                    {/* <span className="gx-status gx-status-rtl gx-small gx-orange" /> */}
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
