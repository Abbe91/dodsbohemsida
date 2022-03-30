import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux-toolkit/store";
import { HelmetProvider } from "react-helmet-async";
ReactDOM.render(
  <HelmetProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </HelmetProvider>,
  document.getElementById("root")
);
