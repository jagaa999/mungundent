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

const MotoFooter = () => {
  const memberContext = useContext(MemberContext);

  return (
    <div className="gx-header-horizontal gx-header-horizontal-dark gx-inside-header-horizontal">
      <Footer>
        <div className="gx-container">
          <div className="gx-header-horizontal-main-flex">
            <div className="gx-d-block">
              <div>
                {/* <DeviceText title={footerText} /> */}
                Мөнгөндент эмнэлэг, 2021 он
              </div>
            </div>
            <ul
              className={`gx-ml-auto gx-header-notifications ${
                isBrowser ? "" : "gx-fs-sm"
              }`}
            >
              <li className="gx-user-nav"></li>
            </ul>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default MotoFooter;
