import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux-toolkit/store";
import { HelmetProvider } from "react-helmet-async";
const APP = (
  <HelmetProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </HelmetProvider>
);
const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(APP, rootElement);
} else {
  ReactDOM.render(APP, rootElement);
}
