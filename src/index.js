import { AppContainer } from "react-hot-loader";
import React from "react";

// https://www.npmjs.com/package/react-snap
import ReactDOM from "react-dom";
// import { hydrate, render } from "react-dom";

import NextApp from "./NextApp";
import registerServiceWorker from "./registerServiceWorker";
// Add this import:

// Wrap the rendering in a function:
const render = (Component) => {
  ReactDOM.render(
    // Wrap App inside AppContainer
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("root")
  );
};

// // https://www.npmjs.com/package/react-snap
// const rootElement = document.getElementById("root");

// const myRender = (Component) => {
//   if (rootElement.hasChildNodes()) {
//     hydrate(
//       <AppContainer>
//         <Component />
//       </AppContainer>,
//       rootElement
//     );
//   } else {
//     render(
//       <AppContainer>
//         <Component />
//       </AppContainer>,
//       rootElement
//     );
//   }
// };

// Do this once
registerServiceWorker();

// Render once
// myRender(NextApp);
render(NextApp);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./NextApp", () => {
    // myRender(NextApp);
    render(NextApp);
  });
}

// Бас нэг туршилт
