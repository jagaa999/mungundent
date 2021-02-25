import React from "react";
import ReactDOM from "react-dom";
//https://github.com/deeppatel234/react-context-devtool/blob/master/README.md
// import { debugContextDevtool } from "react-context-devtool";

import NextApp from "./NextApp";
// import registerServiceWorker from "./registerServiceWorker";
import { register, unregister } from "./registerServiceWorker";
// Add this import:
import { AppContainer } from "react-hot-loader";

const container = document.getElementById("root");

// Wrap the rendering in a function:
const render = (Component) => {
  ReactDOM.render(
    // Wrap App inside AppContainer
    <AppContainer>
      <Component />
    </AppContainer>,
    container
  );
};

// Do this once
// registerServiceWorker();
// registerServiceWorker.unregister();
unregister();

// Render once
render(NextApp);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./NextApp", () => {
    render(NextApp);
  });
}

//https://github.com/deeppatel234/react-context-devtool/blob/master/README.md
// Attach root container
// debugContextDevtool(container, {
//   debugReducer: false,
//   debugContext: true,
//   disable: process.env.NODE_ENV === "production",
//   disableAutoMode: false,
// });
