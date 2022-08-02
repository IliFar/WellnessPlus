import App from "./App";
import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

  //Store is to createStore
  //Action => functions to execute
  //Reducer => execute action based on type
  //Dispatch => dispatch store
);
