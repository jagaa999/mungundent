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
      <Header className="gx-header-horizontal-main">
        <div className="gx-container">
          <div className="gx-header-horizontal-main-flex gx-w-100">
            <Link to="/" className="gx-d-block gx-pointer gx-mr-xs-5 gx-logo">
              <Tooltip title="Нүүр хуудас">
                <span className="gx-d-block gx-d-lg-none">
                  <MyIcon type="iconmoto_logo_01" className="moto-icon-1-9" />
                </span>
              </Tooltip>
              <div className="gx-d-none gx-d-lg-block">
                {/* <img
                  alt=""
                  style={{ height: "26px" }}
                  src={require("assets/images/logo.png")}
                /> */}
                <MyIcon type="iconmoto_logo_01" />
              </div>
            </Link>
            <div className="gx-header-horizontal-nav gx-header-horizontal-nav-curve gx-d-block gx-w-75">
              <MotoHorizontalNav />
            </div>
            {/* 
 #     # ####### ####### #######  #####     #    ######  
 ##   ## #     #    #    #     # #     #   # #   #     # 
 # # # # #     #    #    #     # #        #   #  #     # 
 #  #  # #     #    #    #     # #       #     # ######  
 #     # #     #    #    #     # #       ####### #   #   
 #     # #     #    #    #     # #     # #     # #    #  
 #     # #######    #    #######  #####  #     # #     #  */}
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
                    <MyIcon type="iconcar2" className="moto-icon-1-3" />
                  </span>
                </Popover>
              </li>
              {memberContext.state.isLogin ? (
                //* Member Motocar
                <li className="gx-msg">
                  <Popover
                    overlayClassName="gx-popover-horizantal"
                    placement="bottomRight"
                    content={<MemberMotocar />}
                    trigger="click"
                  >
                    <span className="gx-pointer gx-status-pos gx-d-block">
                      <MyIcon type="iconmotocar" className="moto-icon-1-3" />
                    </span>
                  </Popover>
                </li>
              ) : (
                ""
              )}
              {/*
 #     # ####### #     # ######  ####### ######  ### ####### ####### #     #  #####  
 ##   ## #       ##   ## #     # #       #     #  #     #    #       ##   ## #     # 
 # # # # #       # # # # #     # #       #     #  #     #    #       # # # # #       
 #  #  # #####   #  #  # ######  #####   ######   #     #    #####   #  #  #  #####  
 #     # #       #     # #     # #       #   #    #     #    #       #     #       # 
 #     # #       #     # #     # #       #    #   #     #    #       #     # #     # 
 #     # ####### #     # ######  ####### #     # ###    #    ####### #     #  #####  */}
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
                        className="moto-icon-1-3"
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
  );
};

export default MotoHeader;

// export default MotoHeader;
