import React, { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";

// import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "assets/vendors/style";
// import configureStore, { history } from "./appRedux/store";
import { MemberProfileStore } from "context/MemberContext";
import { GeneralDataStore } from "context/GeneralDataContext";
import { FilterStore } from "context/FilterContext";

// import { BackTop } from "antd";

const MotoIndexApp = lazy(() => import("./containers/App/MotoIndexApp"));
// const store = configureStore(/* provide initial state if any */);

const NextApp = () => {
  return (
    // <Provider store={store}>
    <BrowserRouter>
      <MemberProfileStore>
        <GeneralDataStore>
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
        </GeneralDataStore>
      </MemberProfileStore>
    </BrowserRouter>
    // </Provider>
  );
};

export default NextApp;
