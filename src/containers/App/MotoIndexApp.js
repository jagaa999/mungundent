import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import { ConfigProvider } from "antd";
import { IntlProvider } from "react-intl";

import AppLocale from "lngProvider";
import MainApp from "./MainApp";
import SignIn from "../SignIn";
import SignUp from "../SignUp";

import { CompareStore } from "context/CompareContext";

const locale = {
  languageId: "mongolia",
  locale: "en",
  name: "Mongolia",
  icon: "en",
};

const MotoIndexApp = (props) => {
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

          <CompareStore>
            <Route path={`${match.url}`} component={MainApp} />
          </CompareStore>
        </Switch>
      </IntlProvider>
    </ConfigProvider>
  );
};

// export default memo(MotoIndexApp);
export default MotoIndexApp;
