import React, { useContext } from "react";

import MemberContext from "context/MemberContext";
import { Layout, Popover, Tooltip } from "antd";
import { Link } from "react-router-dom";

import MenuMember from "components/Moto/Menu/MenuMember";
import MemberItems from "components/Moto/Member/MemberItems/MemberItems";
import MotoHorizontalNav from "../MotoHorizontalNav";
import MyIcon from "util/iconFunction";

const { Header } = Layout;

const MotoHeader = () => {
  const memberContext = useContext(MemberContext);

  return (
    <div className="gx-header-horizontal gx-header-horizontal-dark gx-inside-header-horizontal">
      <Header className="gx-header-horizontal-main">
        <div className="gx-container">
          <div className="gx-header-horizontal-main-flex">
            <Link to="/" className="gx-d-block  gx-pointer gx-mr-xs-5 gx-logo">
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

            {/* <div className="gx-header-horizontal-nav gx-header-horizontal-nav-curve gx-d-none gx-d-lg-block"> */}
            <div className="gx-header-horizontal-nav gx-header-horizontal-nav-curve gx-d-block">
              <MotoHorizontalNav />
            </div>

            <ul className="gx-header-notifications gx-ml-auto">
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
                      <i className="icon icon-inbox" />
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
  );
};

export default MotoHeader;

// export default MotoHeader;
