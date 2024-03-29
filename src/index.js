import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./styles/global.css";
import reportWebVitals from "./reportWebVitals";
import store from "./store/store";
import { saveState } from "./utils";
import axiosConfig from "./configs/axiosConfig";

window.onbeforeunload = () => {
  if (store.getState().auth.email) {
    saveState(store.getState());
  }
};

axiosConfig();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
