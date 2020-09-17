import React, { memo, useEffect, useContext } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { ConfigProvider } from "antd";
import { IntlProvider } from "react-intl";

import AppLocale from "lngProvider";
import MainApp from "./MainApp";
import SignIn from "../SignIn";
import SignUp from "../SignUp";

import { MemberItemsStore } from "context/MemberItemsContext";

const MotoIndexApp = (props) => {
  const locale = {
    languageId: "mongolia",
    locale: "en",
    name: "Mongolia",
    icon: "en",
  };

  const match = useRouteMatch();
  const currentAppLocale = AppLocale[locale.locale];

  return (
    <ConfigProvider locale={currentAppLocale.antd}>
      <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}
      >
        <Switch>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />

          <MemberItemsStore>
            <Route path={`${match.url}`} component={MainApp} />
          </MemberItemsStore>
        </Switch>
      </IntlProvider>
    </ConfigProvider>
  );
};

// export default memo(MotoIndexApp);
export default MotoIndexApp;
