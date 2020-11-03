import React, { useContext, useEffect } from "react";
import { useRouteMatch, Route, Switch } from "react-router-dom";
import { Layout } from "antd";

import MotoHeader from "../Topbar/MotoHeader/MotoHeader";
import MotoFooter from "../Topbar/MotoHeader/MotoFooter";
import asyncComponent from "util/asyncComponent";
import MotoIndex from "../../routes/MotoIndex";

import MemberContext from "context/MemberContext";
import MemberItemsContext from "context/MemberItemsContext";

const { Content } = Layout;

const KiaK5Detail = asyncComponent(() => {
  return import("content/kia/k5/index");
});

const MainApp = () => {
  const memberContext = useContext(MemberContext);
  const memberItemsContext = useContext(MemberItemsContext);

  // const width = window.innerWidth;
  // const navStyle = "NAV_STYLE_INSIDE_HEADER_HORIZONTAL";

  const match = useRouteMatch();

  useEffect(() => {
    //* Дараа нь тухайн хэрэглэгчийн Хадгалсан зүйлсийг дуудна.
    memberItemsContext.loadMemberItems("1502764251361501");
  }, [memberContext.state.memberCloudUserSysId]);

  // const getSidebar = (navStyle, width) => {
  //   if (width < TAB_SIZE) {
  //     return <Sidebar />;
  //   }
  //   switch (navStyle) {
  //     case NAV_STYLE_FIXED:
  //       return <Sidebar />;
  //     case NAV_STYLE_DRAWER:
  //       return <Sidebar />;
  //     case NAV_STYLE_MINI_SIDEBAR:
  //       return <Sidebar />;
  //     case NAV_STYLE_NO_HEADER_MINI_SIDEBAR:
  //       return <Sidebar />;
  //     case NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR:
  //       return <Sidebar />;
  //     default:
  //       return null;
  //   }
  // };

  // console.log("=======>  ", navStyle);

  return (
    <Switch>
      <Route path={["/salon/kia/k5", "/salon/kia/optima"]}>
        <MotoHeader />
        <KiaK5Detail />
      </Route>

      <Route>
        <Layout className="gx-app-layout">
          {/* {getSidebar(navStyle, width)} */}
          <Layout>
            <MotoHeader />

            <Content className="gx-layout-content gx-container-wrap">
              <MotoIndex match={match} />

              <MotoFooter />
              {/* <Footer>
                <div className="gx-layout-footer-content">{footerText}</div>
              </Footer> */}
            </Content>
          </Layout>
        </Layout>
      </Route>
    </Switch>
  );
};

export default MainApp;
