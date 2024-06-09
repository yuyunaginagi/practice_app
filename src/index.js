import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routing from "./routing";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
