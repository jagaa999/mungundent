import React, { useContext, useEffect } from "react";
import { useRouteMatch, Route, Switch } from "react-router-dom";
import { Layout, BackTop } from "antd";

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
const KiaCarnivalDetail = asyncComponent(() => {
  return import("content/kia/Carnival/index.js");
});

const WidgetPage = asyncComponent(() => {
  return import("content/widget/index");
});

const MainApp = () => {
  const memberContext = useContext(MemberContext);
  const memberItemsContext = useContext(MemberItemsContext);

  const match = useRouteMatch();

  useEffect(() => {
    //* Дараа нь тухайн хэрэглэгчийн Хадгалсан зүйлсийг дуудна.
    memberItemsContext.loadMemberItems("1502764251361501");
  }, [memberContext.state.memberCloudUserSysId]);

  return (
    <Switch>
      <Route path={["/salon/kia/k5", "/salon/kia/optima"]}>
        <MotoHeader />
        <KiaK5Detail />
        <MotoFooter />
      </Route>
      <Route path={["/salon/kia/carnival"]}>
        <MotoHeader />
        <KiaCarnivalDetail />
        <MotoFooter />
      </Route>

      {/*       
       #     # ### ######   #####  ####### ####### 
       #  #  #  #  #     # #     # #          #    
       #  #  #  #  #     # #       #          #    
       #  #  #  #  #     # #  #### #####      #    
       #  #  #  #  #     # #     # #          #    
       #  #  #  #  #     # #     # #          #    
        ## ##  ### ######   #####  #######    #     */}
      <Route path={["/widget/", "/widgets"]}>
        <WidgetPage />
      </Route>

      <Route>
        <Layout className="gx-app-layout">
          <BackTop>dfdfdf</BackTop>
          <MotoHeader />
          <Content className="gx-layout-content gx-container-wrap">
            <MotoIndex match={match} />

            <MotoFooter />
          </Content>
        </Layout>
      </Route>
    </Switch>
  );
};

export default MainApp;
