import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

export default class Routing extends React.component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={} />
        <Route path="/rsp" component={} />
      </BrowserRouter>
    );
  }
}