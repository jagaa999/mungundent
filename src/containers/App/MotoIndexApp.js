import React, { memo, useEffect, useContext } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ReactGA from "react-ga";
import TagManager from "react-gtm-module";

import { ConfigProvider } from "antd";
import { IntlProvider } from "react-intl";

import AppLocale from "lngProvider";
import MainApp from "./MainApp";
import SignIn from "../SignIn";
import SignUp from "../SignUp";

import { MemberItemsStore } from "context/MemberItemsContext";
import { CompareStore } from "context/CompareContext";
import { CarcatalogStore } from "context/CarcatalogContext";

function initializeReactGA() {
  ReactGA.initialize("UA-19432730-1");
  ReactGA.pageview(window.location.pathname + window.location.search);
}

const tagManagerArgs = {
  gtmId: "GTM-NNHQ4BB",
};

const locale = {
  languageId: "mongolia",
  locale: "en",
  name: "Mongolia",
  icon: "en",
};

const MotoIndexApp = (props) => {
  useEffect(() => {
    initializeReactGA();
    TagManager.initialize(tagManagerArgs);
  }, []);

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

          <CarcatalogStore>
            <MemberItemsStore>
              <CompareStore>
                <Route path={`${match.url}`} component={MainApp} />
              </CompareStore>
            </MemberItemsStore>
          </CarcatalogStore>
        </Switch>
      </IntlProvider>
    </ConfigProvider>
  );
};

// export default memo(MotoIndexApp);
export default MotoIndexApp;
