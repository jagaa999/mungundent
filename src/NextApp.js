import React, { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";

// import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "assets/vendors/style";
// import configureStore, { history } from "./appRedux/store";
import { MemberProfileStore } from "context/MemberContext";
import { GeneralDataStore } from "context/GeneralDataContext";

// import { BackTop } from "antd";

const MotoIndexApp = lazy(() => import("./containers/App/MotoIndexApp"));
// const store = configureStore(/* provide initial state if any */);

const NextApp = () => {
  return (
    <BrowserRouter>
      <MemberProfileStore>
        <GeneralDataStore>
          <Helmet>
            <meta charSet="UTF-8" />
            <title>Mungundent - Dental Clinic</title>
            <meta
              name="description"
              content="Монголын шилдэг шүдний эмнэлгүүдийн нэг. Япон стандартаар эмчилж, хянана."
            />
          </Helmet>
          <Suspense fallback={<div>Одоохон...</div>}>
            <MotoIndexApp />
          </Suspense>
        </GeneralDataStore>
      </MemberProfileStore>
    </BrowserRouter>
  );
};

export default NextApp;
