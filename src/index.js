import React from "react";
import ReactDOM from "react-dom";

import NextApp from "./NextApp";
import registerServiceWorker from "./registerServiceWorker";
// Add this import:
import { AppContainer } from "react-hot-loader";

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

//Энд Жаргал гэртээ энэхүү comment-ийг бичлээ. 2020 оны 7 сарын 10 өдөр. Орой 21:52
//За дахиад энэ Comment-ийг нэмээд үзье.

// Do this once
registerServiceWorker();

// Render once
render(NextApp);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./NextApp", () => {
    render(NextApp);
  });
}
