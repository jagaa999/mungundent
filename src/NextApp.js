import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "assets/vendors/style";
import configureStore, { history } from "./appRedux/store";
import "./firebase/firebase";
import MotoIndexApp from "./containers/App/MotoIndexApp";
import { MemberProfileStore } from "context/MemberContext";
import { FilterStore } from "context/FilterContext";
import { MemberItemsStore } from "context/MemberItemsContext";

const store = configureStore(/* provide initial state if any */);

const NextApp = () => (
  <Provider store={store}>
    {/* <ConnectedRouter history={history}> */}
    <BrowserRouter>
      <MemberProfileStore>
        <FilterStore>
          {/* <MemberItemsStore> */}
          {/* <Switch>
            <Route path="/" component={MotoIndexApp} />
          </Switch> */}
          <MotoIndexApp />
          {/* </MemberItemsStore> */}
        </FilterStore>
      </MemberProfileStore>
    </BrowserRouter>
    {/* </ConnectedRouter> */}
  </Provider>
);

export default NextApp;
