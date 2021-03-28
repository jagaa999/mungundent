import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Layout, Popover, Tooltip, Menu } from "antd";

import MotoHorizontalNav from "../MotoHorizontalNav";
import MenuMember from "components/Moto/Menu/MenuMember";
import MemberItems from "components/Moto/Member/MemberItems/MemberItems";
import MemberMotocar from "components/Moto/Member/MemberItems/MemberMotocar";
import MemberContext from "context/MemberContext";
import CarcatalogContext from "context/CarcatalogContext";
import PartcatalogContext from "context/PartcatalogContext";
import MyIcon from "util/iconFunction";
const { SubMenu } = Menu;
const { Header } = Layout;

const MotoHeader = () => {
  const carCatalogContext = useContext(CarcatalogContext);
  const partCatalogContext = useContext(PartcatalogContext);
  const memberContext = useContext(MemberContext);

  return (
    <div className="gx-header-horizontal gx-header-horizontal-dark gx-inside-header-horizontal">
      <Header
        className="gx-header-horizontal-main"
        style={{ minHeight: "48px", display: "flex" }}
      >
        <div className="gx-container">
          <div className="gx-header-horizontal-main-flex gx-w-100">
            <Link to="/" className="gx-d-block gx-pointer gx-mr-xs-5 gx-logo">
              <Tooltip title="Нүүр хуудас">
                <span className="gx-d-block gx-d-lg-none">
                  <MyIcon type="iconmoto_logo_01" className="moto-icon-1-9" />
                </span>
              </Tooltip>
              <div className="gx-d-none gx-d-lg-block">
                <img
                  alt=""
                  style={{ height: "26px" }}
                  src={require("assets/images/mungundent_logo.png")}
                />
                {/* <MyIcon type="iconmoto_logo_01" /> */}
              </div>
            </Link>
            <div className="gx-header-horizontal-nav gx-header-horizontal-nav-curve gx-d-block gx-w-75">
              <MotoHorizontalNav />
            </div>

            {/* <ul className="gx-header-notifications gx-ml-auto">
              <li className="gx-user-nav">
                <MenuMember />
              </li>
            </ul> */}
          </div>
        </div>
      </Header>
    </div>
  );
};

export default MotoHeader;

// export default MotoHeader;
