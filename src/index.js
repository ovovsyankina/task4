import React from "react";
import ReactDOM from "react-dom/client";
import store from "./redux/reducer/store";
import { Provider } from "react-redux";
import AppContainer from "./components/App/AppContainer";
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>
);
