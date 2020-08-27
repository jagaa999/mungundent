import React, { useContext, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";

import Sidebar from "../Sidebar/index";
import HorizontalDefault from "../Topbar/HorizontalDefault/index";
import HorizontalDark from "../Topbar/HorizontalDark/index";
import MotoHeader from "containers/Topbar/MotoHeader/MotoHeader";
import AboveHeader from "../Topbar/AboveHeader/index";
import BelowHeader from "../Topbar/BelowHeader/index";

import asyncComponent from "util/asyncComponent";

import Topbar from "../Topbar/index";
import { footerText } from "util/config";
import MotoIndex from "routes/MotoIndex";
import { useSelector } from "react-redux";
import {
  NAV_STYLE_ABOVE_HEADER,
  NAV_STYLE_BELOW_HEADER,
  NAV_STYLE_DARK_HORIZONTAL,
  NAV_STYLE_DEFAULT_HORIZONTAL,
  NAV_STYLE_DRAWER,
  NAV_STYLE_FIXED,
  NAV_STYLE_INSIDE_HEADER_HORIZONTAL,
  NAV_STYLE_MINI_SIDEBAR,
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  TAB_SIZE,
} from "../../constants/ThemeSetting";
import NoHeaderNotification from "../Topbar/NoHeaderNotification/index";
import { useRouteMatch } from "react-router-dom";
import Customizer from "../Customizer";

import MemberContext from "context/MemberContext";
import MemberItemsContext from "context/MemberItemsContext";

const { Content, Footer } = Layout;

const KiaK5Detail = asyncComponent(() => {
  return import("content/kia/k5/index");
});

const MainApp = () => {
  const memberContext = useContext(MemberContext);
  const myItem = memberContext.state.memberProfile;
  const memberItemsContext = useContext(MemberItemsContext);

  const { width, navStyle } = useSelector(({ settings }) => settings);
  const match = useRouteMatch();

  useEffect(() => {
    //* Дараа нь тухайн хэрэглэгчийн Хадгалсан зүйлсийг дуудна.
    memberItemsContext.loadMemberItems("1502764251361501");
  }, [memberContext.state.memberCloudUserSysId]);

  const getContainerClass = (navStyle) => {
    switch (navStyle) {
      case NAV_STYLE_DARK_HORIZONTAL:
        return "gx-container-wrap";
      case NAV_STYLE_DEFAULT_HORIZONTAL:
        return "gx-container-wrap";
      case NAV_STYLE_INSIDE_HEADER_HORIZONTAL:
        return "gx-container-wrap";
      case NAV_STYLE_BELOW_HEADER:
        return "gx-container-wrap";
      case NAV_STYLE_ABOVE_HEADER:
        return "gx-container-wrap";
      default:
        return "";
    }
  };

  const getSidebar = (navStyle, width) => {
    if (width < TAB_SIZE) {
      return <Sidebar />;
    }
    switch (navStyle) {
      case NAV_STYLE_FIXED:
        return <Sidebar />;
      case NAV_STYLE_DRAWER:
        return <Sidebar />;
      case NAV_STYLE_MINI_SIDEBAR:
        return <Sidebar />;
      case NAV_STYLE_NO_HEADER_MINI_SIDEBAR:
        return <Sidebar />;
      case NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR:
        return <Sidebar />;
      default:
        return null;
    }
  };

  // console.log("=======>  ", navStyle);

  return (
    <Switch>
      <Route path={["/salon/kia/k5", "/salon/kia/optima"]}>
        <MotoHeader />
        <KiaK5Detail />
      </Route>

      <Route>
        <Layout className="gx-app-layout">
          {getSidebar(navStyle, width)}
          <Layout>
            {/* {getNavStyles(navStyle)} */}

            <MotoHeader />

            <Content
              className={`gx-layout-content ${getContainerClass(navStyle)} `}
            >
              {/* {console.log("dddddddddddd")} */}
              <MotoIndex match={match} />
              <Footer>
                <div className="gx-layout-footer-content">{footerText}</div>
              </Footer>
            </Content>
            <Customizer />
          </Layout>
        </Layout>
      </Route>
    </Switch>
  );
};

export default MainApp;
