import React, { lazy, Suspense } from "react";
import ReactGA from "react-ga";
import TagManager from "react-gtm-module";
import { Helmet } from "react-helmet";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "assets/vendors/style";
import configureStore, { history } from "./appRedux/store";
// import MotoIndexApp from "./containers/App/MotoIndexApp";
import { MemberProfileStore } from "context/MemberContext";
import { FilterStore } from "context/FilterContext";

const MotoIndexApp = lazy(() => import("./containers/App/MotoIndexApp"));
const store = configureStore(/* provide initial state if any */);

function initializeReactGA() {
  ReactGA.initialize("UA-19432730-1");
  ReactGA.pageview(window.location.pathname + window.location.search);
}

const tagManagerArgs = {
  gtmId: "GTM-NNHQ4BB",
};

const NextApp = () => {
  initializeReactGA();
  TagManager.initialize(tagManagerArgs);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <MemberProfileStore>
          <FilterStore>
            <Helmet>
              <meta charSet="UTF-8" />
              <title>Moto.mn - Cars, Parts</title>
              <meta
                name="description"
                content="Автомашин, авто сэлбэг, эд анги"
              />
            </Helmet>
            <Suspense fallback={<div>Одоохон...</div>}>
              <MotoIndexApp />
            </Suspense>
          </FilterStore>
        </MemberProfileStore>
      </BrowserRouter>
    </Provider>
  );
};

export default NextApp;
