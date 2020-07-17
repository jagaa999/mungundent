import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import "assets/vendors/style";
import configureStore, { history } from "./appRedux/store";
import "./firebase/firebase";
import MotoIndexApp from "./containers/App/MotoIndexApp";

const store = configureStore(/* provide initial state if any */);

const NextApp = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={MotoIndexApp} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default NextApp;
