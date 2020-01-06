import React from "react";
import ReactDOM from "react-dom";
import Route from "./route";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <BrowserRouter>
    <Route />
  </BrowserRouter>,
  document.getElementById("root")
);
