import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import "./assets/scss/main.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";

const Error404 = lazy(() => import("./pages/error/404"));

ReactDOM.render(
  <React.Fragment>
    <Suspense fallback={<div />}>
      <Router basename={`/`}>
        <Route render={({ location }) => (location.state && location.state.is404 ? <Error404 /> : <App />)} />
      </Router>
    </Suspense>
  </React.Fragment>,
  document.getElementById("root")
);
